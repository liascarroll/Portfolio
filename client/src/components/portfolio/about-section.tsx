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
      description: "Python, SQL, with data analytics expertise",
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Leading distributed teams and driving operational efficiency",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32" aria-label="About me" data-testid="section-about">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Background</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="heading-about">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto" data-testid="text-about-summary">
          As an Investment Operations Analyst at Morgan Stanley&apos;s Parametric division, 
          I bridge the gap between finance and technology to drive operational excellence. 
          With a dual degree in Finance and Information Systems from UW Foster, I bring a unique 
          perspective to every challenge &mdash; whether it&apos;s building a <span className="text-foreground font-medium">full-stack property management platform</span>, 
          conducting <span className="text-foreground font-medium">M&A valuations and LBO analyses</span>, or developing scalable systems for <span className="text-foreground font-medium">300+ clients</span>. 
          My work has earned recognition including a <span className="text-foreground font-medium">1st place case competition win</span> and experience 
          managing <span className="text-foreground font-medium">$1M+ budgets</span>, always at the intersection of strategic finance and technical innovation.
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
