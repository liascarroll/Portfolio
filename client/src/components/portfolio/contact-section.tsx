import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30" aria-label="Contact information" data-testid="section-contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="heading-contact">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-summary">
            I&apos;m always interested in discussing new opportunities, 
            collaborations, or just connecting with fellow professionals 
            in finance and tech.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8" data-testid="cta-contact">
          <Button size="lg" asChild data-testid="button-email">
            <a href="mailto:liascarroll@gmail.com" aria-label="Send email to liascarroll@gmail.com">
              <Mail className="h-4 w-4" />
              liascarroll@gmail.com
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-linkedin-footer">
            <a href="https://www.linkedin.com/in/lia-carroll" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile (opens in new tab)">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground" data-testid="text-location">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>Seattle, WA</span>
        </div>
      </div>
    </section>
  );
}
