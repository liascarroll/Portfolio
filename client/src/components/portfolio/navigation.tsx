import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Download, Menu, X, Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Main navigation"
      data-testid="nav-main"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
            className="font-semibold text-lg tracking-tight"
            data-testid="link-logo"
            aria-label="Go to top of page"
          >
            Lia Carroll
          </a>

          <div className="hidden md:flex items-center gap-6" data-testid="nav-links-desktop">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); scrollToSection("experience"); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-experience"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
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
              <a href="/Resume_-_12.1.25_-_Lia_Carroll_1766980682443.pdf" download aria-label="Download resume PDF">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" role="menu" data-testid="nav-links-mobile">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                role="menuitem"
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-about-mobile"
              >
                About
              </a>
              <a
                href="#projects"
                role="menuitem"
                onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-projects-mobile"
              >
                Projects
              </a>
              <a
                href="#experience"
                role="menuitem"
                onClick={(e) => { e.preventDefault(); scrollToSection("experience"); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-experience-mobile"
              >
                Experience
              </a>
              <a
                href="#contact"
                role="menuitem"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="link-contact-mobile"
              >
                Contact
              </a>
              <Button
                variant="default"
                size="sm"
                className="w-fit"
                data-testid="button-download-resume-mobile"
                asChild
              >
                <a href="/Resume_-_12.1.25_-_Lia_Carroll_1766980682443.pdf" download aria-label="Download resume PDF">
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
