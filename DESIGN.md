---
name: Mahmoud Younis Portfolio
description: Full-stack developer portfolio with purple-and-lime identity
colors:
  deep-violet: "#4831d4"
  chartreuse-mist: "#ccf381"
  ink: "#3d155f"
  paper: "#F9F9F9"
  canvas: "#f5f4fc"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Kanit, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.deep-violet}"
    border: "2px solid {colors.deep-violet}"
    rounded: "{rounded.md}"
    padding: "8px 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-violet}"
    textColor: "{colors.white}"
    border: "2px solid {colors.deep-violet}"
    rounded: "{rounded.md}"
    padding: "8px 24px"
  card-project:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.deep-violet}"
    shadow: "0 10px 15px -3px rgba(0,0,0,0.1)"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1px solid #D1D5DB"
    padding: "8px 16px"
---

# Design System: The Field Notebook

## 1. Overview

**Creative North Star: "The Field Notebook"**

A developer portfolio that reads like a field notebook: technical observations in monospace, punctuated by moments of deliberate color. The interface doesn't shout for attention, it earns it through structure. Deep violet backgrounds anchor the space while chartreuse mist accents arrive like margin highlights in a well-kept journal.

Every section is a discrete entry: full-screen, scroll-snapped, with its own rhythm. The split-color backgrounds (violet meets chartreuse) create a recurring visual signature without relying on cards or containers. Typography does the hierarchy work; color provides the emotional arc.

This system explicitly rejects: SaaS-cream minimalism, glassmorphism decoration, gradient text, and identical card grids. The portfolio is not a template. It is a crafted object.

**Key Characteristics:**
- Full-screen scroll-snapped sections, each a distinct chapter
- Split-tone backgrounds (violet / chartreuse) as the unifying motif
- Monospace body carries technical credibility
- Bordered interactive elements with hover-fill reveals
- Generous whitespace and oversized typography for impact
- Decorative SVG dot patterns as the only ornamentation

## 2. Colors

A restrained two-accent system built around violet and chartreuse, with neutrals that lean warm.

### Primary

- **Deep Violet** (`#4831d4` / `oklch(42% 0.19 285)`): The anchor. Used for hero backgrounds, section blocks (60%+ of the viewport in split layouts), button borders, skill category headers, and all interactive text in neutral zones. Carries the weight of the page.
- **Chartreuse Mist** (`#ccf381` / `oklch(91% 0.21 120)`): The accent. Used for the secondary half of split backgrounds, large heading text on violet fields, selection highlights, decorative SVG dots, and as a contrast block behind the About card. Rare enough to mean something.

### Neutral

- **Ink** (`#3d155f`): All body text on light backgrounds. A softened near-black with purple undertones. Never use pure `#000`.
- **Paper** (`#F9F9F9`): Card and section backgrounds. A warm near-white. Never use pure `#fff`.
- **Canvas** (`#f5f4fc`): Alternate section background for the Works page. Slightly cooler than Paper.
- **White** (`#FFFFFF`): Input backgrounds and text-on-violet overlays only.

### Named Rules

**The Split-Tone Rule.** Every hero-scale section uses a two-color background split (60/33 by default). Deep Violet dominates; Chartreuse Mist occupies the remaining strip. The split direction swaps from horizontal (desktop) to vertical (mobile). This is the system's signature gesture. Use it on landing, experience, and projects sections.

## 3. Typography

**Display Font:** Kanit (with system-ui fallback)
**Body Font:** Space Mono (with ui-monospace fallback)
**Label/Mono Font:** Space Mono

**Character:** A confident high-contrast pairing. Kanit brings geometric weight for headlines — its 700-weight cuts through the page. Space Mono provides the technical credibility the portfolio needs; every job description, skill label, and caption reads like a commit message. The pairing says "designer who codes" without the quotation marks.

### Hierarchy

- **Display** (Kanit 700, `clamp(2.25rem, 7vw, 4.5rem)`, 1.1): Section headers and hero titles. Never smaller than 36px.
- **Headline** (Kanit 700, `clamp(1.5rem, 4vw, 3rem)`, 1.1): Card titles, project names. All-caps on project cards.
- **Title** (Space Mono 700, `1rem`, 1.4): Skill category names, navigation items. Uppercase with wide tracking.
- **Body** (Space Mono 400, `clamp(0.75rem, 1.5vw, 1rem)`, 1.6): All running text. Max line length 65-75ch. Text on deep violet backgrounds uses white.
- **Label** (Space Mono 400, `0.75rem`, 1.4, uppercase, `0.1em` tracking): Date badges, filter buttons, experience tags.

## 4. Elevation

The system is flat by default. Depth is conveyed through tonal layering (the split backgrounds) and overlapping color blocks (the About card with its protruding chartreuse panel behind it), not through shadows.

Shadows are reserved for interactive or mobile contexts. Project cards in the Swiper carousel use `shadow-xl` to separate them during the coverflow effect; skill cards on mobile use `shadow-xl` as a container signal. Static elements never cast shadows.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to interaction (hover on the "link" button class) or as a carousel affordance (Swiper slides). If a static section has a shadow, remove it.

## 5. Components

### Buttons

The signature button pattern (class `.link`) is a bordered rectangle that fills on hover.

- **Shape:** Slightly rounded corners (8px)
- **Primary/Link:** 2px solid Deep Violet border, Ink text, transparent background. Padding: 8px 24px (small) to 16px 48px (large CTA).
- **Hover / Focus:** Background fills with Deep Violet from left to right (width 0 → 100% via pseudo-element, 350ms ease). Text turns white on hover. Cursor pointer.
- **Demo buttons:** Same pattern, uppercase "DEMO" label with 0.25rem letter-spacing.

### Cards / Project Cards

Swiper-based coverflow carousel cards:

- **Corner Style:** Rounded top (8px via `rounded-t-md`), image fills flush to top edge
- **Background:** Paper (`#F9F9F9`)
- **Border:** 2px solid Deep Violet
- **Shadow:** `shadow-xl` (part of the coverflow depth effect)
- **Internal Padding:** 20px (p-5) in the content zone
- **Image:** Full-width, top-aligned, `object-cover`, with a 2px bottom border separating it from content

### Inputs / Fields

Found in the contact form:

- **Style:** 1px solid gray-300 stroke, Paper background, rounded (6px)
- **Focus:** `outline-none` (themed focus ring to be defined). Icon inset on the email field (Mail icon, right border divider).
- **Textarea:** Same border, min-height 128px, scales to 256px on desktop.
- **Error / Success:** Green text for success confirmation, red for failures. Below the submit button.
- **Submit Button:** Solid Deep Violet background, white text, full-width, rounded (6px). Hover gradient: Deep Violet → slate-400.

### Navigation

Slide-in drawer from the left edge:

- **Trigger:** Menu icon (LuMenu/MdClose) top-right. Violet icon on light, chartreuse on dark.
- **Panel:** Full-height, 384px wide, white background, slides in from left (300ms ease-in-out).
- **Overlay:** 50% black backdrop behind the drawer. Click to close.
- **Links:** Ink text, Space Mono, 24px. Hover: translate-x-2 (slides right 8px). Social icons at the bottom with scale hover effect.

### Chips / Tags

Experience badges and skill filter pills:

- **Style:** 1px Deep Violet border, transparent background, Ink/Body text. Small: 8px 4px padding, 12px text. Full pill shape (rounded-full).
- **Variants:** Date badges (Feb 2026 – Present), tech tags (Next.js, React), filter buttons (with active state: filled Deep Violet background, white text).

## 6. Do's and Don'ts

### Do:

- **Do** use the split-tone background (Deep Violet / Chartreuse Mist) as the primary visual signature on hero-scale sections.
- **Do** keep body text in Space Mono to maintain technical credibility.
- **Do** use Deep Violet as the sole interactive color for borders, hover fills, and active states.
- **Do** let sections be full-screen and scroll-snapped; each is a chapter.
- **Do** use decorative SVG dot patterns as the only non-functional ornament.

### Don't:

- **Don't** use pure black (`#000`) or pure white (`#fff`) as background colors. Always tint: Deep Violet for color, Paper for white, Ink for black.
- **Don't** use gradient text, glassmorphism, or side-stripe borders.
- **Don't** add shadows to static sections. Flat by default.
- **Don't** wrap content in unnecessary containers. Most sections don't need one.
- **Don't** use cards as a lazy layout default. The project card carousel is the only place cards belong.
- **Don't** use em dashes in copy. Use commas, colons, or periods instead.
