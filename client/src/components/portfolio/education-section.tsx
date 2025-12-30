import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, TrendingUp } from "lucide-react";

export function EducationSection() {
  const coursework = [
    { id: "info-systems", name: "Information Systems" },
    { id: "cybersecurity", name: "Networks & Cybersecurity" },
    { id: "operations", name: "Operations Management" },
    { id: "strategy", name: "Strategic Management" },
    { id: "mergers", name: "Mergers and Acquisitions" },
    { id: "database", name: "Database Management" },
    { id: "data-analytics", name: "Business Data Analytics" },
    { id: "corp-finance", name: "Corporate Finance" },
    { id: "program-mgmt", name: "Program Management" },
    { id: "hedge-pe", name: "Hedge Funds and Private Equity" },
    { id: "comm-speaking", name: "Strategic Communication and Public Speaking" },
  ];

  const achievements = [
    {
      id: "case-1st",
      icon: Trophy,
      title: "1st Place Case Competition",
      subtitle: "Foster School of Business, May 2025",
      description: "Gen Z engagement strategy for Nordstrom - Top of 65 teams",
    },
    {
      id: "case-finalist",
      icon: Trophy,
      title: "Case Competition Finalist",
      subtitle: "Foster School of Business, May 2022",
      description: "H&M sustainability initiative - Top 4 of 50 teams",
    },
    {
      id: "scholarship",
      icon: GraduationCap,
      title: "Raymond T. Cole Endowed Scholarship",
      subtitle: "Foster School of Business",
      description: "Awarded for academic excellence and leadership",
    },
    {
      id: "direct-admit",
      icon: GraduationCap,
      title: "Freshman Foster Direct Admit",
      subtitle: "University of Washington",
      description: "Early entrance to competitive business program",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-muted/30" aria-label="Education and achievements" data-testid="section-education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Credentials</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="heading-education">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card data-testid="card-education">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl" data-testid="text-university">University of Washington</CardTitle>
                  <CardDescription data-testid="text-school">
                    Michael G. Foster School of Business
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium" data-testid="text-degree">Bachelor of Arts in Business Administration</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-concentration">
                    Concentration: Finance and Information Systems
                  </p>
                </div>
                <div className="flex flex-wrap gap-3" data-testid="badges-education-summary">
                  <Badge variant="outline" data-testid="badge-education-gpa">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    3.7 GPA
                  </Badge>
                  <Badge variant="outline" data-testid="badge-education-graduation">Graduated June 2025</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2" data-testid="text-coursework-label">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-1.5" data-testid="badges-coursework">
                    {coursework.map((course) => (
                      <Badge key={course.id} variant="secondary" className="text-xs" data-testid={`badge-course-${course.id}`}>
                        {course.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4" data-testid="list-achievements">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="hover-elevate" data-testid={`card-achievement-${achievement.id}`}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold" data-testid={`text-achievement-title-${achievement.id}`}>{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-achievement-subtitle-${achievement.id}`}>
                        {achievement.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1" data-testid={`text-achievement-desc-${achievement.id}`}>
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
