import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="page-home">
      <Navigation />
      <main data-testid="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
