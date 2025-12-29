import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Users, BarChart3 } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      id: "technical",
      title: "Technical",
      icon: Code,
      skills: [
        { id: "java", name: "Java" },
        { id: "python", name: "Python" },
        { id: "sql", name: "SQL" },
        { id: "excel", name: "Excel (Certified)" },
        { id: "sheets", name: "Google Sheets" },
      ],
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      icon: BarChart3,
      skills: [
        { id: "fin-modeling", name: "Financial Modeling" },
        { id: "data-analytics", name: "Data Analytics" },
        { id: "forecasting", name: "Forecasting" },
        { id: "biz-analytics", name: "Business Data Analytics" },
      ],
    },
    {
      id: "languages",
      title: "Languages",
      icon: Globe,
      skills: [
        { id: "english", name: "English (Native)" },
        { id: "italian", name: "Italian (Fluent)" },
        { id: "spanish", name: "Spanish (Fluent)" },
      ],
    },
    {
      id: "professional",
      title: "Professional",
      icon: Users,
      skills: [
        { id: "strategic", name: "Strategic Thinking" },
        { id: "collab", name: "Cross-Functional Collaboration" },
        { id: "exec-comm", name: "Executive Communication" },
        { id: "problem-solving", name: "Creative Problem Solving" },
        { id: "attention", name: "Attention to Detail" },
        { id: "leadership", name: "Leadership" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32" aria-label="Skills and expertise" data-testid="section-skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-skills">
          {skillCategories.map((category) => (
            <Card key={category.id} data-testid={`card-skill-${category.id}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid={`text-skill-category-${category.id}`}>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5" data-testid={`badges-skills-${category.id}`}>
                  {category.skills.map((skill) => (
                    <Badge key={skill.id} variant="outline" className="text-xs" data-testid={`badge-skill-${category.id}-${skill.id}`}>
                      {skill.name}
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
