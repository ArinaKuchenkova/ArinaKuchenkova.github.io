"use client";
import { Portfolio } from "@/components/Portfolio/Portfolio"
import { ScrollableTabs } from "@/components/ScrollableTabs/ScrollableTabs"
import { useState } from "react"
import IconPortfolio from '@/icons/portfolio.svg'
import type { PortfolioItem, ProjectCategory } from "@/types/strapi";

export const PortfolioSection: React.FC<{
  data: ProjectCategory[]
}> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('favorites');
  const categoryProjects = data.find(i => i.slug === selectedCategory)?.projects;

  return <section id="portfolio">
    <div className="container">
      <IconPortfolio className="w-full mb-5" />
      <ScrollableTabs activeTab={selectedCategory} onChange={setSelectedCategory} items={data.map((i) => ({
        key: i.slug!,
        label: i.title!,
      }))} />
    </div>
    {categoryProjects && <Portfolio data={categoryProjects as PortfolioItem[]} />}
  </section>
}
