import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Trophy, Globe, TrendingUp, Car, ShoppingCart, Smartphone, ExternalLink, Terminal } from "lucide-react";

export function ProjectsSection() {
  const featuredProject = {
    id: "property-pilot",
    title: "Property Pilot",
    description:
      "A comprehensive real estate management platform featuring property tracking, financial analytics, and tenant management capabilities. Built with modern full-stack technologies, the platform enables property managers to streamline operations, track rental income, manage maintenance requests, and generate financial reports. Demonstrates expertise in database design, API development, and responsive UI implementation.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  };

  const projects = [
    {
      id: "ma-valuation",
      title: "Celsius-Poppi M&A Valuation",
      course: "Corporate Finance",
      description:
        "Developed a comprehensive M&A analysis modeling Celsius's hypothetical acquisition of Poppi. Conducted independent valuation, evaluated potential synergies, determined acquisition pricing, and performed comparable company analysis. Delivered detailed due diligence assessment and structured deal financing recommendations.",
      techStack: ["Financial Modeling", "Valuation", "M&A Analysis", "Excel"],
      icon: TrendingUp,
    },
    {
      id: "paybyphone",
      title: "PayByPhone Feature Implementation",
      course: "Program Management",
      description:
        "Led strategic product development for PayByPhone, proposing a parking spot reservation feature with real-time availability display. Delivered comprehensive analysis including user research, solution design, go-to-market timeline, cost-benefit analysis, resource requirements, funding estimates, competitive differentiation, and value proposition.",
      techStack: ["Product Strategy", "Market Analysis", "Project Planning"],
      icon: Car,
    },
    {
      id: "ecommerce-analytics",
      title: "E-Commerce Sales Analysis",
      course: "Database Management",
      description:
        "Conducted comprehensive SQL-based sales analysis for an e-commerce retailer to uncover actionable business insights. Identified customer purchasing trends, product bundling opportunities, high-value target markets, and uncovered significant order cancellation patterns requiring strategic intervention.",
      techStack: ["SQL", "Data Analysis", "Business Intelligence"],
      icon: ShoppingCart,
    },
    {
      id: "nordstrom",
      title: "Nordstrom Gen Z Strategy",
      course: "Case Competition - 1st Place",
      description:
        "Developed a comprehensive Gen Z engagement strategy for Nordstrom using ROI analysis, market research, and strategic positioning frameworks. Awarded first place for innovative approach and actionable recommendations.",
      techStack: ["Financial Modeling", "Market Analysis", "Excel"],
      icon: Trophy,
    },
    {
      id: "hm-sustainability",
      title: "H&M Sustainability Initiative",
      course: "Case Competition - Finalist",
      description:
        "Proposed build/buy/partner recommendations for H&M sustainability initiatives, demonstrating strategic creativity and analytical problem-solving capabilities.",
      techStack: ["Strategy", "Sustainability", "Business Analysis"],
      icon: Globe,
    },
    {
      id: "lbo-analysis",
      title: "Helen of Troy LBO Analysis",
      course: "Hedge Funds & Private Equity",
      description:
        "Proposed a leveraged buyout to take Helen of Troy private, a conglomerate spanning Beauty & Wellness, Houseware, and Health & Home segments. Developed post-acquisition strategy to divest Beauty & Wellness for deleveraging while focusing on high-margin Health & Home sectors. Presented comprehensive valuation, debt-to-equity structure, capital structure, and deal rationale supported by comparable company analysis.",
      techStack: ["LBO Modeling", "Valuation", "Capital Structure", "Excel"],
      icon: TrendingUp,
    },
    {
      id: "party-lyft",
      title: "Party Lyft App Prototype",
      course: "Product Design",
      description:
        "Designed an interactive Figma prototype proposing a new 'Party Lyft' feature for Lyft, enabling group ride coordination for events and nightlife. Created comprehensive user flows, wireframes, and high-fidelity mockups demonstrating the end-to-end booking experience for group transportation.",
      techStack: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      icon: Smartphone,
      link: "https://www.figma.com/proto/ifMvhGFvdx3qRDBT4VTKTo/Lyft-Party?type=design&node-id=23-209&scaling=scale-down&page-id=21%3A6&starting-point-node-id=23%3A209",
    },
    {
      id: "python-taxpayer",
      title: "Taxpayer Management System",
      course: "Python Programming",
      description:
        "Developed a comprehensive Python application for taxpayer data management featuring input validation, tax computation logic based on income brackets and marital status, file I/O operations, search functionality, and formatted reporting. Demonstrated proficiency in data structures, control flow, and modular programming.",
      techStack: ["Python", "Data Structures", "File I/O", "Algorithms"],
      icon: Terminal,
    },
    {
      id: "real-estate-dcf",
      title: "Real Estate Investment DCF Analysis",
      course: "Real Estate Finance",
      description:
        "Proposed the purchase of an investment property through comprehensive DCF analysis. Located and evaluated a target property, conducted area and property analysis, performed affordability analysis using current market context, and analyzed rent and sale comparables. Developed detailed financing strategy including lender selection and loan structuring, assessed risk-reward tradeoffs, performed sensitivity and scenario analysis, and delivered a final investment recommendation based on findings.",
      techStack: ["DCF Modeling", "Financial Analysis", "Real Estate Valuation", "Excel"],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30" aria-label="Projects" data-testid="section-projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
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
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="heading-additional-projects">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-projects">
          {projects.map((project, index) => (
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
                <div className="flex flex-wrap gap-1.5 mb-4" data-testid={`badges-tech-${project.id}`}>
                  {project.techStack.map((tech, i) => (
                    <Badge key={tech} variant="outline" className="text-xs" data-testid={`badge-tech-${project.id}-${i}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button variant="outline" size="sm" asChild data-testid={`button-view-${project.id}`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Prototype <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
