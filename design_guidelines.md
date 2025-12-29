# Design Guidelines: Lia Carroll Portfolio

## Design Approach
**Hybrid Professional Portfolio** - Combining Linear's modern minimalism with Notion's organized clarity and subtle creative flair for project showcases. This approach balances professional credibility with visual interest, perfect for a business-tech hybrid background.

**Key Principles:**
- Scannable hierarchy for recruiters
- Project work takes visual precedence
- Clean, confident professionalism
- Strategic use of whitespace for breathing room

---

## Typography System

**Font Families:**
- Primary: Inter (headings, UI elements) - Google Fonts
- Secondary: Source Sans Pro (body text, descriptions) - Google Fonts

**Hierarchy:**
- Hero Name: text-6xl md:text-7xl, font-bold, tracking-tight
- Section Headings: text-4xl md:text-5xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Job Titles/Roles: text-xl, font-semibold
- Body Copy: text-base md:text-lg, leading-relaxed
- Metadata (dates, locations): text-sm, font-medium, uppercase tracking-wide

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Full-width sections with inner max-w-6xl mx-auto px-6
- Content max-width: max-w-4xl for text-heavy sections
- Project showcases: max-w-7xl for visual breathing room

---

## Page Structure

### Hero Section (80vh)
- Large hero image: Professional headshot or workspace environment (blurred background, sharp subject)
- Overlay content with backdrop-blur-sm background on text container
- Name as primary focal point
- Tagline: "Finance & Information Systems | Investment Operations Analyst"
- Two CTAs: "View Projects" (primary), "Download Resume" (secondary) with backdrop-blur-md backgrounds
- Quick stats bar: "UW Foster '25 | Morgan Stanley | 3.7 GPA"

### About/Summary Section
Single column, max-w-4xl
- Brief professional summary (3-4 sentences)
- Highlight dual expertise: Finance + Technology
- Grid of core competencies (3 columns on desktop, 1 on mobile): Strategic Thinking, Technical Leadership, Cross-Functional Collaboration

### Featured Projects Section
**Primary: Property Pilot**
- Large card with screenshot/mockup image (2:1 aspect ratio)
- Project title, tech stack badges
- Description with key achievements
- "View on Replit" CTA

**Undergraduate Projects Grid**
- 2-column grid (1 on mobile)
- 4-6 project cards with:
  - Project title and course/context
  - Brief description (2-3 lines)
  - Tech stack or methodology used
  - Visual placeholder for project screenshots/diagrams

### Professional Experience
Timeline-style layout (vertical line connector)
- Each role as distinct card with generous padding
- Company logo placeholder (64px square)
- Role title, company, dates, location in metadata row
- Bullet points with achievement-focused copy
- Emphasize quantifiable results (e.g., "$1M+ budget," "300+ clients")

### Education & Achievements
Two-column split on desktop (stacked on mobile)
- **Left:** Education details, GPA, honors, relevant coursework
- **Right:** Case competition wins, leadership roles
- Award/trophy icon placeholders (Heroicons)

### Skills Matrix
Multi-column grid (4 cols desktop, 2 tablet, 1 mobile)
Categorized skill badges:
- Technical: Java, Python, SQL, Excel
- Languages: Italian, Spanish
- Business: Financial Modeling, Data Analytics
Each badge: pill shape, icon + text

### Contact/Footer
Full-width section
- Centered content with email, LinkedIn, location
- "Let's Connect" CTA
- Copyright and last updated date

---

## Component Library

**Navigation (Sticky)**
- Logo/Name (left)
- Menu items: About, Projects, Experience, Contact
- Resume download button (right)
- Mobile: Hamburger menu

**Project Cards**
- Image container with aspect-ratio-video or aspect-ratio-square
- Hover: subtle scale transform (scale-105)
- Content overlay on image or below based on card type

**Timeline Connector**
- Vertical border-l-2 connecting experience cards
- Circle indicators at each role

**Stat Badges**
- Inline-flex with icon (Heroicons), metric, label
- Use in hero stats bar

**Skill Pills**
- Rounded-full, small padding (px-4 py-2)
- Icon + text combination

---

## Icons
**Library:** Heroicons (via CDN)
Common icons needed:
- Briefcase (work), Academic cap (education), Code (projects)
- Trophy (achievements), Mail (contact), Download (resume)
- GitHub, LinkedIn (social)

---

## Images

**Hero Image:** Professional headshot or workspace photo (1920x1080), subject in focus with softly blurred background

**Project Screenshots:**
- Property Pilot: Full application screenshot (16:9 ratio)
- Undergraduate projects: 4-6 project mockups/diagrams (4:3 or 16:9)
- Use subtle shadows (shadow-xl) on all project images

**Experience Section:** Company logo placeholders (Morgan Stanley, Multiply Global, Alpha Phi)

---

## Animations
Minimal, purposeful only:
- Scroll-triggered fade-in for sections (opacity + translateY)
- Subtle hover states on cards (scale, shadow)
- No complex scroll animations or parallax

---

## Accessibility
- Semantic HTML5 sections
- ARIA labels on navigation
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast ratios throughout
- Alt text for all images