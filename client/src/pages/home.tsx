import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Code,
  Trophy,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ChevronDown,
  Linkedin,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Users,
  TrendingUp,
  Database,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      data-testid="button-theme-toggle"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-semibold text-lg tracking-tight"
            data-testid="link-logo"
          >
            Lia Carroll
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
              data-testid="button-download-resume"
              asChild
            >
              <a href="/Resume_-_12.1.25_-_Lia_Carroll_1766980682443.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-about-mobile"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-projects-mobile"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-experience-mobile"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-contact-mobile"
              >
                Contact
              </button>
              <Button
                variant="default"
                size="sm"
                className="w-fit"
                data-testid="button-download-resume-mobile"
                asChild
              >
                <a href="/Resume_-_12.1.25_-_Lia_Carroll_1766980682443.pdf" download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
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
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-6">
            <Briefcase className="h-3 w-3 mr-1" />
            Investment Operations Analyst at Morgan Stanley
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-name">
          Lia Carroll
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Finance & Information Systems
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between strategic finance and technical innovation. 
          UW Foster School of Business graduate with expertise in investment operations, 
          data analytics, and building scalable solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Badge variant="outline">
            <GraduationCap className="h-3 w-3 mr-1" />
            UW Foster &apos;25
          </Badge>
          <Badge variant="outline">
            <TrendingUp className="h-3 w-3 mr-1" />
            3.7 GPA
          </Badge>
          <Badge variant="outline">
            <Trophy className="h-3 w-3 mr-1" />
            Case Competition Winner
          </Badge>
          <Badge variant="outline">
            <Globe className="h-3 w-3 mr-1" />
            Trilingual
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollToSection("projects")} data-testid="button-view-projects">
            View Projects
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-linkedin">
            <a href="https://www.linkedin.com/in/lia-carroll" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const competencies = [
    {
      icon: TrendingUp,
      title: "Strategic Thinking",
      description: "Financial modeling, ROI analysis, and market positioning strategies",
    },
    {
      icon: Code,
      title: "Technical Leadership",
      description: "Python, SQL, Java development with data analytics expertise",
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Leading distributed teams and driving operational efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
          As an Investment Operations Analyst at Morgan Stanley&apos;s Parametric division, 
          I combine my dual expertise in Finance and Information Systems to streamline 
          complex operational processes. My background spans from managing $1M+ budgets to 
          developing scalable scheduling systems for 300+ clients, always focusing on the 
          intersection of strategic finance and technical innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {competencies.map((item) => (
            <Card key={item.title} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featuredProject = {
    title: "Property Pilot",
    description:
      "A comprehensive real estate management platform built on Replit, featuring property tracking, financial analytics, and tenant management capabilities. Demonstrates full-stack development skills with modern web technologies.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://replit.com/@liascarroll/property-pilot",
  };

  const undergraduateProjects = [
    {
      title: "Financial Data Analytics Dashboard",
      course: "Business Data Analytics",
      description:
        "Built an interactive dashboard for analyzing stock market trends using Python and data visualization libraries. Implemented predictive models for investment recommendations.",
      techStack: ["Python", "Pandas", "Matplotlib", "Excel"],
      icon: BarChart3,
    },
    {
      title: "Database Management System",
      course: "Database Management",
      description:
        "Designed and implemented a relational database for a retail business, including ER diagrams, SQL queries, and stored procedures for inventory management.",
      techStack: ["SQL", "PostgreSQL", "ER Modeling"],
      icon: Database,
    },
    {
      title: "Nordstrom Gen Z Strategy",
      course: "Case Competition - 1st Place",
      description:
        "Developed a comprehensive Gen Z engagement strategy for Nordstrom using ROI analysis, market research, and strategic positioning frameworks.",
      techStack: ["Financial Modeling", "Market Analysis", "Excel"],
      icon: Trophy,
    },
    {
      title: "H&M Sustainability Initiative",
      course: "Case Competition - Finalist",
      description:
        "Proposed build/buy/partner recommendations for H&M sustainability initiatives, demonstrating strategic creativity and analytical problem-solving.",
      techStack: ["Strategy", "Sustainability", "Business Analysis"],
      icon: Globe,
    },
    {
      title: "Corporate Financial Model",
      course: "Corporate Finance",
      description:
        "Created comprehensive financial models including DCF valuation, sensitivity analysis, and scenario planning for M&A evaluation.",
      techStack: ["Excel", "Financial Modeling", "Valuation"],
      icon: FileSpreadsheet,
    },
    {
      title: "Network Security Analysis",
      course: "Networks & Cybersecurity",
      description:
        "Conducted security assessment and vulnerability analysis of enterprise network infrastructure, proposing mitigation strategies.",
      techStack: ["Security", "Network Analysis", "Risk Assessment"],
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[280px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Replit Project</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className="mb-4">Featured</Badge>
              <h3 className="text-2xl font-bold mb-3">{featuredProject.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button asChild data-testid="button-view-property-pilot">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  View on Replit
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-6 text-center">
          Undergraduate Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {undergraduateProjects.map((project) => (
            <Card key={project.title} className="hover-elevate">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {project.course}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
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

function ExperienceSection() {
  const experiences = [
    {
      company: "Morgan Stanley",
      location: "Seattle, Washington",
      roles: [
        {
          title: "Investment Operations Analyst – Parametric",
          period: "July 2025 – Present",
          bullets: [
            "Supported cross-functional initiatives to streamline client onboarding and data integration, enhancing operational efficiency in a SaaS-driven investment platform.",
            "Conducted audits and data analysis across multiple systems, demonstrating strong attention to detail while maintaining strategic oversight of client operations.",
            "Project manager of a team focused on streamlining and managing workflow for 30 team members.",
          ],
        },
        {
          title: "Team Administrator",
          period: "August 2024 – April 2025",
          bullets: [
            "Developed a scalable scheduling system for 300+ clients, showcasing creative problem-solving abilities and entrepreneurial mindset in building efficient product solutions.",
          ],
        },
        {
          title: "Investment Operations Intern – Parametric",
          period: "June – August 2024",
          bullets: [
            "Delivered a Capstone Presentation to company executives on Radius, a cloud-based workspace, demonstrating technical communication skills and ability to present complex solutions to leadership audiences.",
          ],
        },
      ],
    },
    {
      company: "Multiply Global",
      location: "Seattle, Washington",
      roles: [
        {
          title: "Project Manager",
          period: "May 2021 – Present",
          bullets: [
            "Led localization strategy for client websites in Spanish and French, supporting digital transformation and global market expansion through globally distributed teams.",
            "Designed and implemented scalable business processes to enhance operational efficiency, demonstrating methodologies aimed at driving product development.",
          ],
        },
      ],
    },
    {
      company: "Alpha Phi International Sorority",
      location: "Seattle, Washington",
      roles: [
        {
          title: "VP Finance",
          period: "January 2023 – January 2024",
          bullets: [
            "Managed a $1M+ annual budget, applying strategic financial planning and resource allocation across multiple categories, while leveraging historical data to optimize spending.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, expIndex) => (
              <div key={exp.company} className="relative pl-12 md:pl-16">
                <div className="absolute left-2 md:left-4 top-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.company}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={role.title}
                          className={roleIndex > 0 ? "pt-4 border-t border-border" : ""}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h4 className="font-semibold">{role.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {role.period}
                            </Badge>
                          </div>
                          <ul className="space-y-2">
                            {role.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                              >
                                <span className="text-primary mt-1.5 shrink-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const coursework = [
    "Information Systems",
    "Networks & Cybersecurity",
    "Operations Management",
    "Strategic Management",
    "Mergers and Acquisitions",
    "Database Management",
    "Business Data Analytics",
    "Corporate Finance",
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "1st Place Case Competition",
      subtitle: "Foster School of Business, May 2025",
      description: "Gen Z engagement strategy for Nordstrom - Top of 65 teams",
    },
    {
      icon: Trophy,
      title: "Case Competition Finalist",
      subtitle: "Foster School of Business, May 2022",
      description: "H&M sustainability initiative - Top 4 of 50 teams",
    },
    {
      icon: GraduationCap,
      title: "Raymond T. Cole Endowed Scholarship",
      subtitle: "Foster School of Business",
      description: "Awarded for academic excellence and leadership",
    },
    {
      icon: GraduationCap,
      title: "Freshman Foster Direct Admit",
      subtitle: "University of Washington",
      description: "Early entrance to competitive business program",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Education & Achievements
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">University of Washington</CardTitle>
                  <CardDescription>
                    Michael G. Foster School of Business
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Bachelor of Arts in Business Administration</p>
                  <p className="text-sm text-muted-foreground">
                    Concentration: Finance and Information Systems
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    3.7 GPA
                  </Badge>
                  <Badge variant="outline">Graduated June 2025</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {coursework.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="hover-elevate">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Technical",
      icon: Code,
      skills: ["Java", "Python", "SQL", "Excel (Certified)", "Google Sheets"],
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: ["Financial Modeling", "Data Analytics", "Forecasting", "Business Data Analytics"],
    },
    {
      title: "Languages",
      icon: Globe,
      skills: ["English (Native)", "Italian (Fluent)", "Spanish (Fluent)"],
    },
    {
      title: "Professional",
      icon: Users,
      skills: [
        "Strategic Thinking",
        "Cross-Functional Collaboration",
        "Executive Communication",
        "Creative Problem Solving",
        "Attention to Detail",
        "Leadership",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
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

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, 
            collaborations, or just connecting with fellow professionals 
            in finance and tech.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" asChild data-testid="button-email">
            <a href="mailto:liascarroll@gmail.com">
              <Mail className="h-4 w-4" />
              liascarroll@gmail.com
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-linkedin-footer">
            <a href="https://www.linkedin.com/in/lia-carroll" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Seattle, WA</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Lia Carroll - Portfolio</p>
          <p>Built with passion and precision</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
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
