import { PromoSection } from "./PromoSection";
import { AboutSection } from "./AboutSection";
import { PortfolioSection } from "./PortfolioSection";
import { SoftSection } from "./SoftSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactsSection } from "./ContactsSection";
import { loadPortfolio } from "@/services/projects.service";


export default async function Home() {
  const portfolio = await loadPortfolio();

  return (
    <main className="flex flex-col gap-20 lg:gap-32">
      <PromoSection />
      <AboutSection />
      <SoftSection />
      <ExperienceSection />
      <PortfolioSection data={portfolio as any || []}/>
      <ContactsSection />
    </main>
  );
}
