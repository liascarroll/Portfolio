import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Trophy, Globe, ChevronDown, Linkedin, TrendingUp } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      aria-label="Introduction"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-6" data-testid="badge-current-role">
            <Briefcase className="h-3 w-3 mr-1" />
            Investment Operations Analyst at Morgan Stanley
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-name">
          Lia Carroll
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium" data-testid="text-hero-tagline">
          Finance & Information Systems
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-summary">
          Bridging the gap between strategic finance and technical innovation. 
          UW Foster School of Business graduate with expertise in investment operations, 
          data analytics, and building scalable solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" data-testid="badges-hero">
          <Badge variant="outline" data-testid="badge-hero-education">
            <GraduationCap className="h-3 w-3 mr-1" />
            UW Foster &apos;25
          </Badge>
          <Badge variant="outline" data-testid="badge-hero-gpa">
            <TrendingUp className="h-3 w-3 mr-1" />
            3.7 GPA
          </Badge>
          <Badge variant="outline" data-testid="badge-hero-competition">
            <Trophy className="h-3 w-3 mr-1" />
            Case Competition Winner
          </Badge>
          <Badge variant="outline" data-testid="badge-hero-languages">
            <Globe className="h-3 w-3 mr-1" />
            Trilingual
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4" data-testid="cta-hero">
          <Button size="lg" onClick={() => scrollToSection("projects")} data-testid="button-view-projects">
            View Projects
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-linkedin-hero">
            <a href="https://www.linkedin.com/in/lia-carroll" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn (opens in new tab)">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
