import { PromoSection } from "./PromoSection";
import { AboutSection } from "./AboutSection";
import { PortfolioSection } from "./PortfolioSection";
import { SoftSection } from "./SoftSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactsSection } from "./ContactsSection";


export default function Home() {
  return (
    <>
      <PromoSection />
      <AboutSection />
      <SoftSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactsSection />
    </>
  );
}
