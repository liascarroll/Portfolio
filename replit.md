# Lia Carroll - Resume Portfolio

## Overview
A professional resume portfolio website for Lia Carroll, showcasing her background as an Investment Operations Analyst at Morgan Stanley with expertise in Finance and Information Systems from the University of Washington Foster School of Business.

## Current State
The portfolio is fully functional with all sections implemented:
- Hero section with name, tagline, badges, and CTAs
- About section with professional summary and competency cards
- Projects section with Property Pilot featured project and 6 undergraduate projects
- Experience timeline with Morgan Stanley, Multiply Global, and Alpha Phi roles
- Education section with UW Foster details and achievements
- Skills section with 4 category cards
- Contact section with email/LinkedIn links
- Dark/light mode toggle

## Recent Changes
- December 29, 2025: Initial portfolio created with all sections
- December 29, 2025: Added ThemeProvider for proper theme management
- December 29, 2025: Improved accessibility with ARIA labels
- December 29, 2025: Added comprehensive data-testid attributes

## User Preferences
- Clean, professional design following design_guidelines.md
- Blue primary color scheme (217 hue)
- Inter font family for UI
- Smooth scroll navigation

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── theme-provider.tsx    # Theme context provider
│   └── ui/                   # Shadcn components
├── pages/
│   └── home.tsx              # Main portfolio page (all sections)
├── App.tsx                   # Root component with routing
├── index.css                 # Tailwind styles
└── main.tsx                  # Entry point
```

### Key Sections in home.tsx
- `Navigation` - Fixed nav with smooth scroll links
- `HeroSection` - Introduction with badges and CTAs
- `AboutSection` - Summary and competency cards
- `ProjectsSection` - Featured and undergraduate projects
- `ExperienceSection` - Timeline of work experience
- `EducationSection` - Education and achievements
- `SkillsSection` - Technical and professional skills
- `ContactSection` - Email and LinkedIn links
- `Footer` - Copyright and tagline

### Assets
- Resume PDF: `/public/Resume_-_12.1.25_-_Lia_Carroll_1766980682443.pdf`

## Development

### Running the Project
The app runs on port 5000 with `npm run dev`

### Design Tokens
- Primary: Blue (217 91% 42%)
- Font: Inter
- Spacing: 4, 6, 8, 12, 16, 20, 24 units

### Theme
Dark mode is supported via ThemeProvider which:
- Persists preference to localStorage
- Toggles `.dark` class on documentElement
- Provides useTheme hook for components
