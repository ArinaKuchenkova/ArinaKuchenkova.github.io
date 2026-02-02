"use client";
import { Portfolio } from "@/components/Portfolio/Portfolio"
import { ScrollableTabs } from "@/components/ScrollableTabs/ScrollableTabs"
import { useState, useEffect, useRef, useCallback } from "react"
import IconPortfolio from '@/icons/portfolio.svg'
import type { PortfolioItem, ProjectCategory } from "@/types/strapi";

function findCategoryForSlug(data: ProjectCategory[], slug: string): string | null {
  for (const category of data) {
    if (category.projects?.some(p => p?.slug === slug)) {
      return category.slug!;
    }
  }
  return null;
}

function getProjectParam(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('project');
}

export const PortfolioSection: React.FC<{
  data: ProjectCategory[]
}> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('favorites');
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const isFromUrl = useRef(false);
  const categoryProjects = data.find(i => i.slug === selectedCategory)?.projects;

  // On mount: read ?project= from URL
  useEffect(() => {
    const slug = getProjectParam();
    if (!slug) return;
    // Verify slug exists in any category
    const category = findCategoryForSlug(data, slug);
    if (!category) return;
    isFromUrl.current = true;
    // Select "all" so every project is visible; fall back to the project's own category
    const allCategory = data.find(c => c.slug === 'all');
    setSelectedCategory(allCategory ? 'all' : category);
    setOpenSlug(slug);
    requestAnimationFrame(() => {
      isFromUrl.current = false;
    });
  }, [data]);

  // Listen for popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const slug = getProjectParam();
      if (slug) {
        const category = findCategoryForSlug(data, slug);
        if (category) {
          isFromUrl.current = true;
          setSelectedCategory(category);
          setOpenSlug(slug);
          requestAnimationFrame(() => {
            isFromUrl.current = false;
          });
        }
      } else {
        setOpenSlug(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [data]);

  const handleProjectOpen = useCallback((slug: string) => {
    setOpenSlug(slug);
    const url = new URL(window.location.href);
    url.searchParams.set('project', slug);
    window.history.pushState({}, '', url.toString());
  }, []);

  const handleProjectClose = useCallback(() => {
    setOpenSlug(null);
    const url = new URL(window.location.href);
    if (url.searchParams.has('project')) {
      url.searchParams.delete('project');
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  return <section id="portfolio">
    <div className="container">
      <IconPortfolio className="w-full mb-5" />
      <ScrollableTabs activeTab={selectedCategory} onChange={setSelectedCategory} items={data.map((i) => ({
        key: i.slug!,
        label: i.title!,
      }))} />
    </div>
    {categoryProjects && <Portfolio
      data={categoryProjects as PortfolioItem[]}
      openSlug={openSlug}
      isFromUrl={isFromUrl}
      onProjectOpen={handleProjectOpen}
      onProjectClose={handleProjectClose}
    />}
  </section>
}
