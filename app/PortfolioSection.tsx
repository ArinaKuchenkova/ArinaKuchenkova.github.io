"use client";
import { Portfolio } from "@/components/Portfolio/Portfolio"
import { SectionHeading } from "./SectionHeading"
import { ScrollableTabs } from "@/components/ScrollableTabs/ScrollableTabs"
import { categoryNameByType, data, dataCategories } from "@/components/Portfolio/data"
import { useState } from "react"
import IconPortfolio from '@/icons/portfolio.svg'


export const PortfolioSection = () => {
  const [category, setCategory] = useState('all');

  return <section id="portfolio">
    <div className="container">
      <IconPortfolio className="w-full mb-5" />
      {/* <SectionHeading className="text-with-prikol uppercase">
        Портфолио
      </SectionHeading> */}
      <ScrollableTabs activeTab={category} onChange={setCategory} items={dataCategories.map(i => ({
        key: String(i),
        label: categoryNameByType[i]
      }))} />
    </div>
    <Portfolio data={category === 'all' ? data : data.filter(i => i.type === category)} />
  </section>
}
