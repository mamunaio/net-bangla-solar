import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full solar-ambient-bg overflow-x-hidden">
      <main>
        <Hero />
        {/* <ImpactStats /> */}
        <AboutSection />
        <SolutionsSection />
        {/* <TechnologySection /> */}
        <PartnersSection />
        <ProjectsSection />
        {/* <ProcessSection /> */}
        {/* <WhyChooseUs /> */}
        <TestimonialsSection />
        <ClientsSection />
        {/* <FAQSection /> */}
        {/* <FinalCTA /> */}
      </main>
      <Footer />
    </div>
  );
}
