import { Portfolio } from "@/components/Portfolio/Portfolio"
import { SectionHeading } from "./SectionHeading"

export const PortfolioSection = () => {
  return <section className="container">
    <SectionHeading>Портфолио</SectionHeading>
    <Portfolio />
  </section>
}
