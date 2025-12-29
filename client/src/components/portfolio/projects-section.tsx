import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Trophy, Globe, Database, BarChart3, FileSpreadsheet } from "lucide-react";

export function ProjectsSection() {
  const featuredProject = {
    id: "property-pilot",
    title: "Property Pilot",
    description:
      "A comprehensive real estate management platform built on Replit, featuring property tracking, financial analytics, and tenant management capabilities. Demonstrates full-stack development skills with modern web technologies.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://replit.com/@liascarroll/property-pilot",
  };

  const undergraduateProjects = [
    {
      id: "data-analytics",
      title: "Financial Data Analytics Dashboard",
      course: "Business Data Analytics",
      description:
        "Built an interactive dashboard for analyzing stock market trends using Python and data visualization libraries. Implemented predictive models for investment recommendations.",
      techStack: ["Python", "Pandas", "Matplotlib", "Excel"],
      icon: BarChart3,
    },
    {
      id: "database-mgmt",
      title: "Database Management System",
      course: "Database Management",
      description:
        "Designed and implemented a relational database for a retail business, including ER diagrams, SQL queries, and stored procedures for inventory management.",
      techStack: ["SQL", "PostgreSQL", "ER Modeling"],
      icon: Database,
    },
    {
      id: "nordstrom",
      title: "Nordstrom Gen Z Strategy",
      course: "Case Competition - 1st Place",
      description:
        "Developed a comprehensive Gen Z engagement strategy for Nordstrom using ROI analysis, market research, and strategic positioning frameworks.",
      techStack: ["Financial Modeling", "Market Analysis", "Excel"],
      icon: Trophy,
    },
    {
      id: "hm-sustainability",
      title: "H&M Sustainability Initiative",
      course: "Case Competition - Finalist",
      description:
        "Proposed build/buy/partner recommendations for H&M sustainability initiatives, demonstrating strategic creativity and analytical problem-solving.",
      techStack: ["Strategy", "Sustainability", "Business Analysis"],
      icon: Globe,
    },
    {
      id: "finance-model",
      title: "Corporate Financial Model",
      course: "Corporate Finance",
      description:
        "Created comprehensive financial models including DCF valuation, sensitivity analysis, and scenario planning for M&A evaluation.",
      techStack: ["Excel", "Financial Modeling", "Valuation"],
      icon: FileSpreadsheet,
    },
    {
      id: "network-security",
      title: "Network Security Analysis",
      course: "Networks & Cybersecurity",
      description:
        "Conducted security assessment and vulnerability analysis of enterprise network infrastructure, proposing mitigation strategies.",
      techStack: ["Security", "Network Analysis", "Risk Assessment"],
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30" aria-label="Projects" data-testid="section-projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="mb-12 overflow-hidden" data-testid="card-featured-project">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[280px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground" data-testid="text-featured-platform">Replit Project</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className="mb-4" data-testid="badge-featured">Featured</Badge>
              <h3 className="text-2xl font-bold mb-3" data-testid="text-featured-title">{featuredProject.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-featured-description">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6" data-testid="badges-featured-tech">
                {featuredProject.techStack.map((tech, i) => (
                  <Badge key={tech} variant="outline" data-testid={`badge-featured-tech-${i}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button asChild data-testid="button-view-property-pilot">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" aria-label="View Property Pilot on Replit (opens in new tab)">
                  View on Replit
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="heading-undergraduate-projects">
          Undergraduate Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-projects">
          {undergraduateProjects.map((project, index) => (
            <Card key={project.id} className="hover-elevate" data-testid={`card-project-${project.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0" data-testid={`badge-course-${project.id}`}>
                    {project.course}
                  </Badge>
                </div>
                <CardTitle className="text-lg" data-testid={`text-project-title-${project.id}`}>{project.title}</CardTitle>
                <CardDescription className="leading-relaxed" data-testid={`text-project-desc-${project.id}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5" data-testid={`badges-tech-${project.id}`}>
                  {project.techStack.map((tech, i) => (
                    <Badge key={tech} variant="outline" className="text-xs" data-testid={`badge-tech-${project.id}-${i}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
