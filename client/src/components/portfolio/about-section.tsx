import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Code, Users } from "lucide-react";

export function AboutSection() {
  const competencies = [
    {
      id: "strategic",
      icon: TrendingUp,
      title: "Strategic Thinking",
      description: "Financial modeling, ROI analysis, and market positioning strategies",
    },
    {
      id: "technical",
      icon: Code,
      title: "Technical Leadership",
      description: "Python, SQL, Java development with data analytics expertise",
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Leading distributed teams and driving operational efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28" aria-label="About me" data-testid="section-about">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="heading-about">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center" data-testid="text-about-summary">
          As an Investment Operations Analyst at Morgan Stanley&apos;s Parametric division, 
          I combine my dual expertise in Finance and Information Systems to streamline 
          complex operational processes. My background spans from managing $1M+ budgets to 
          developing scalable scheduling systems for 300+ clients, always focusing on the 
          intersection of strategic finance and technical innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-6" data-testid="grid-competencies">
          {competencies.map((item, index) => (
            <Card key={item.id} className="text-center" data-testid={`card-competency-${item.id}`}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-competency-title-${item.id}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-competency-desc-${item.id}`}>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
