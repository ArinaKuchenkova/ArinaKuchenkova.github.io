import { PromoSection } from "./PromoSection";
import { AboutSection } from "./AboutSection";
import { PortfolioSection } from "./PortfolioSection";
import { SoftSection } from "./SoftSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactsSection } from "./ContactsSection";


export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-32">
      <PromoSection />
      <AboutSection />
      <SoftSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactsSection />
    </main>
  );
}
