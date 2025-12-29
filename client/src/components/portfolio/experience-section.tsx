import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: "morgan-stanley",
      company: "Morgan Stanley",
      location: "Seattle, Washington",
      roles: [
        {
          id: "analyst",
          title: "Investment Operations Analyst – Parametric",
          period: "July 2025 – Present",
          bullets: [
            "Supported cross-functional initiatives to streamline client onboarding and data integration, enhancing operational efficiency in a SaaS-driven investment platform.",
            "Conducted audits and data analysis across multiple systems, demonstrating strong attention to detail while maintaining strategic oversight of client operations.",
            "Project manager of a team focused on streamlining and managing workflow for 30 team members.",
          ],
        },
        {
          id: "admin",
          title: "Team Administrator",
          period: "August 2024 – April 2025",
          bullets: [
            "Developed a scalable scheduling system for 300+ clients, showcasing creative problem-solving abilities and entrepreneurial mindset in building efficient product solutions.",
          ],
        },
        {
          id: "intern",
          title: "Investment Operations Intern – Parametric",
          period: "June – August 2024",
          bullets: [
            "Delivered a Capstone Presentation to company executives on Radius, a cloud-based workspace, demonstrating technical communication skills and ability to present complex solutions to leadership audiences.",
          ],
        },
      ],
    },
    {
      id: "multiply-global",
      company: "Multiply Global",
      location: "Seattle, Washington",
      roles: [
        {
          id: "pm",
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
      id: "alpha-phi",
      company: "Alpha Phi International Sorority",
      location: "Seattle, Washington",
      roles: [
        {
          id: "vp-finance",
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
    <section id="experience" className="py-20 md:py-28" aria-label="Professional experience" data-testid="section-experience">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="heading-experience">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative" data-testid="timeline-experience">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" data-testid="timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-16" data-testid={`card-experience-${exp.id}`}>
                <div className="absolute left-2 md:left-4 top-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center" aria-hidden="true" data-testid={`timeline-marker-${exp.id}`}>
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" data-testid={`text-company-${exp.id}`}>{exp.company}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1" data-testid={`text-location-${exp.id}`}>
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={role.id}
                          className={roleIndex > 0 ? "pt-4 border-t border-border" : ""}
                          data-testid={`role-${exp.id}-${role.id}`}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h4 className="font-semibold" data-testid={`text-role-title-${exp.id}-${role.id}`}>{role.title}</h4>
                            <Badge variant="secondary" className="text-xs" data-testid={`badge-period-${exp.id}-${role.id}`}>
                              {role.period}
                            </Badge>
                          </div>
                          <ul className="space-y-2" data-testid={`list-bullets-${exp.id}-${role.id}`}>
                            {role.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                                data-testid={`text-bullet-${exp.id}-${role.id}-${i}`}
                              >
                                <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">
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
