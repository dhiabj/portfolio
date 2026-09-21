---
name: Dhia Bejaoui Portfolio
description: A dark, monospace-accented "instrument console" system for a fullstack/systems engineer's portfolio.
colors:
  ink: "#0E1116"
  panel: "#151A21"
  panel-2: "#1B222B"
  line: "#26303B"
  line-soft: "#1E2732"
  text: "#E6EAEF"
  muted: "#8A97A6"
  faint: "#78848F"
  amber: "#E8A13A"
  amber-dim: "#8A6425"
  teal: "#3AA6A0"
  teal-dim: "#245F5B"
  error: "#F87171"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: "1.02"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.625"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.18em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section-y: "80px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.faint}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: Dhia Bejaoui Portfolio

## Overview

**Creative North Star: "The Live Systems Console"**

The site reads as a monitoring console for systems that are actually running, not a decorative resume. Its central device is the hero's status panel: a bordered instrument reading `online`, live status rows, and a "currently building" readout with animated feed bars, all rendered in monospace. That same console vocabulary repeats everywhere else at lower volume: section headers are prefixed like code comments (`// about`, `// selected work`, `// contact`), a faint engineering grid sits behind the whole page, and a teal pulse dot marks anything "live" (available-for-work badges, deployed project cards, the footer). There is deliberately no light mode; `color-scheme: dark` is a structural commitment, not a default left unset.

The palette runs almost entirely on three near-black neutrals (`ink` / `panel` / `panel-2`) separated by hairline borders rather than shadows, with exactly two signal colors doing all the semantic work: amber for "active, building, call to action" and teal for "healthy, live, links." Nothing else competes with them, there is no tertiary accent and no decorative gradient beyond one very low-opacity radial glow behind the hero.

Typography carries three distinct jobs rather than a single hierarchy: Space Grotesk (`display`) is reserved for headings and nothing else, Inter (`body`) carries narrative prose, and JetBrains Mono is the console's own voice, used for eyebrows, buttons, nav, badges, form labels, and every readout value. That third font is doing as much identity work as the color system; a page with the headings and colors right but body copy set in the mono font, or CTAs set in Inter, would immediately read as off-model.

**Key Characteristics:**
- Near-black, single-hue neutral stack (ink/panel/panel-2) with hairline borders, not shadows, as the primary depth device.
- Exactly two signal colors (amber = active/CTA, teal = live/healthy), each with a dim variant for low-emphasis contexts (pills, badges).
- Three-font system with strict role separation: Space Grotesk for headings only, Inter for narrative body copy, JetBrains Mono for every piece of interface chrome (labels, buttons, nav, badges, status text).
- Monospace "code comment" motif (`//`) used as the recurring section-eyebrow device.
- Flat by default; the one hero status panel is the system's single deliberate, non-repeated lift.

## Colors

Almost monochrome by design: three near-black neutrals carry every surface, and only amber and teal are allowed to mean something.

### Primary
- **Signal Amber** (`#E8A13A`): the "active" color. Owns primary CTAs (view work, send message), the logo mark's initials, the hero's headline emphasis word ("running"), and the "currently building" readout. Never used for more than one focal element per screen.

### Secondary
- **Live Teal** (`#3AA6A0`): the "healthy / live" color. Owns the pulse dot, "available for work" and "live" badges, links and their hover states, focus rings, and the `//` eyebrow marks. Where amber says "act on this," teal says "this is running and healthy."

### Neutral
- **Ink** (`#0E1116`): base page background; also reused as a slightly-transparent recessed fill inside cards (form inputs, skill chips) via `bg-ink/50` / `bg-ink/60`.
- **Panel** (`#151A21`): the standard raised-surface background for cards (hero status panel, spec-sheet panel, project cards, contact form panel).
- **Panel Secondary** (`#1B222B`): one step brighter than Panel; used for header bars inside panels (spec-sheet header, panel headers) and for button/icon surfaces that need to read as slightly more raised than a card body (secondary buttons, social icon buttons, mobile menu button).
- **Text** (`#E6EAEF`): primary reading color for headings and emphasized inline text.
- **Muted** (`#8A97A6`): secondary text; body paragraphs, nav link default state, descriptions.
- **Faint** (`#78848F`): tertiary text; captions, eyebrow labels, index numbers, chip text, timestamps.
- **Line** (`#26303B`): the system's one hairline border color; used on virtually every card, panel, input, and divider.
- **Line Soft** (`#1E2732`): a quieter divider variant for internal separators (the spec-sheet's `divide-y`) and the page's background grid lines.
- **Error** (`#F87171`, Tailwind's default `red-400`): the only color outside the custom palette, reserved strictly for form validation and submit-error text. Never used decoratively.

### Named Rules
**The Two-Signal Rule.** Only amber and teal are allowed to carry meaning. Amber means "act now or this is actively being built." Teal means "this is live and healthy." A third accent color anywhere in the system breaks the console's legibility.

**The Border-Not-Shadow Rule.** Depth between ink → panel → panel-2 is expressed through a one-step brightness increase plus a `line` hairline border, never a shadow. See Elevation & Depth for the single exception.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** Space Grotesk's slightly geometric, confident weight carries every heading; Inter stays completely out of the way for reading paragraphs; JetBrains Mono is the system's actual personality, it is what makes the site feel like an instrument rather than a brochure.

### Hierarchy
- **Display** (700, 3rem mobile → 3.75rem `sm` → 4.5rem `lg`, line-height 1.02, tracking -0.025em): the hero H1 only. One instance on the page.
- **Headline** (700, 1.875rem → 2.25rem `sm`, tracking -0.025em): section H2s ("An engineer who thinks in systems...", "Systems currently in production.", "Let's build something that lasts.").
- **Title** (700, 1.5rem, tracking -0.025em): project card H3s (project titles), and semibold at the same family for the hero's "currently building" project name.
- **Body** (400, 1.125rem, line-height 1.625, color `muted`): narrative paragraphs in About and the contact section's lead-in. A denser body variant (400, 0.875rem, line-height 1.625, color `muted`) carries project card descriptions.
- **Label** (400, 0.72rem, uppercase, tracking 0.18em, color `faint`): the `.eyebrow` utility; every section's `// label` header and the "building" readout tag.
- **Interface/mono** (400–500, 0.75–0.875rem, JetBrains Mono, not uppercase): the fourth, unlisted-but-load-bearing role. Covers nav links, all button labels, status-panel key/value rows, skill chips, form field labels (paired with letter-spacing 0.18em, so form labels actually borrow the Label role's tracking at a smaller mono size), and the footer. Buttons use weight 500; everything else in this role uses 400.

### Named Rules
**The One Display Rule.** Space Grotesk display-weight type appears exactly once per page, in the hero H1. Section headlines and card titles use the same family but never the largest size; nothing should out-shout the hero's opening line.

## Layout

Single-column, single-page composition (`src/app/page.js`): Navbar (fixed) → Hero → About → Projects → Contact → Footer, inside one `container mx-auto px-6 lg:px-12` wrapper. There is no grid of pages, only vertical scroll through five sections plus a fixed nav.

Section rhythm is generous and consistent: `py-20` (80px) on mobile, `py-28` (112px) at `lg`, on every major section (About, Projects, Contact). Two-column content within a section (Hero's thesis + status panel, About's narrative + spec sheet, Contact's pitch + form) uses `grid gap-12 lg:gap-16` (48px → 64px), collapsing to a single stacked column below `lg`. The project list stacks vertically with `gap-6 lg:gap-8` (24px → 32px) between cards regardless of viewport; project cards themselves switch from stacked (image over content) to a `42%/58%` image/content split via `md:grid-cols-[minmax(0,42%)_1fr]`.

Card interiors use two padding tiers: `p-6 lg:p-8` (24px → 32px) for primary panels (project cards, contact form), `p-5` (20px) for the About credential blocks and spec-sheet rows.

The fixed navbar (`h`-implicit via `py-3`, `px-6 lg:px-12`) sits above a `backdrop-blur-md` translucent ink background (`bg-ink/85`) with a `border-b border-line` seam; page content compensates with `pt-14` on the content wrapper plus `scroll-mt-24` on every anchor target so fixed-nav anchor jumps land below the bar.

## Elevation & Depth

Flat by default. Every surface transition (ink → panel → panel-2) is carried by a one-step brightness increase plus a `line` hairline border, not a shadow; the About spec-sheet and credential cards, the navbar, the project cards, and the contact form all sit at zero elevation. There is exactly one deliberate exception: the hero's signature status panel carries a soft ambient drop shadow to separate it as the page's single hero object. That shadow is not a reusable elevation token, it exists once, for one component, on purpose.

### Shadow Vocabulary
- **Hero Panel Lift** (`box-shadow: 0 20px 60px -30px rgba(0,0,0,0.9)`): used once, on the hero status panel only. A large, very soft, dark ambient shadow with no color tint, negative spread pulling it in tight; it reads as separation, not as a floating card.

### Named Rules
**The Flat-By-Default, One-Exception Rule.** Nothing else on the page may take a shadow. If a future component needs to feel elevated, reach for a brighter panel tone and a `line` border first; the hero shadow is spent on the hero.

## Shapes

No sharp corners and no fully round rectangles; the system sits deliberately in the middle of Tailwind's radius scale. Small inline elements (skill chips, the "DB" logo mark) use the tightest radius (4px); buttons and form inputs use a slightly softer 6px so they read as controls, not tags; primary panels and cards round further to 12px, the system's "this is a container" signal; only true pills (status badges, pulse dots, the "available" nav indicator) go fully round. Borders are always 1px, always `line` (or `line-soft` for quieter internal dividers), never a gradient or double border. No clipping, masking, or non-rectangular silhouettes anywhere in the system.

## Components

### Buttons
- **Shape:** 6px radius (`rounded-md`) on every button, no exceptions.
- **Primary** (view work, send message): amber fill, ink text, mono font-medium, `px-6 py-3` (main CTA) or `px-5 py-3` (form submit) or `px-4 py-2` (project card "visit"). Hover: amber at 90% opacity, no other change.
- **Secondary / Ghost** (download cv, project "source" link, hamburger toggle): `panel-2` background (or transparent for the hamburger), `line` border, `text` or `muted` label. Hover swaps the border and label color to `teal`, never a fill change, keeping secondary actions visibly quieter than primary ones.
- **Disabled** (form submit while sending): `disabled:opacity-60 disabled:cursor-not-allowed`, label swaps to a present-tense "sending…".

### Chips
- **Style:** `ink/50` background, `line` border, `faint` mono text at 11-12px, 4px radius, `px-2` to `px-2.5` by `py-0.5` to `py-1`. Used for skill tags in both the About spec sheet and project cards.
- **State:** spec-sheet chips get a hover treatment (`hover:border-amber hover:text-amber`) since that panel is itself explorable; project-card chips are static, read-only metadata.

### Cards / Containers
- **Corner Style:** 12px (`rounded-xl`) for primary panels (hero status panel, spec-sheet, project cards, contact form); 8px (`rounded-lg`) for the smaller About credential blocks.
- **Background:** `panel`, with a `panel-2` header bar where the card has an internal title row (spec-sheet, hero panel).
- **Shadow Strategy:** none, except the hero panel (see Elevation & Depth).
- **Border:** always `line`, 1px, full perimeter.
- **Internal Padding:** 24px mobile / 32px `lg` for primary cards; 20px for the smaller credential blocks.

### Inputs / Fields
- **Style:** `ink/60` background, `line` border, 6px radius, `text-sm` Inter, `faint` placeholder text, `px-3.5 py-2.5`.
- **Focus:** border shifts to `teal`, no ring or glow, `focus:outline-none` (the browser default outline is intentionally suppressed here since the border-color shift is the focus signal for form fields specifically; interactive elements elsewhere in the system keep the global `focus-visible` teal outline).
- **Error:** field itself does not change color on error; a `text-xs text-error` (`red-400`) message appears below the field instead.

### Navigation
- Fixed, translucent (`bg-ink/85`, `backdrop-blur-md`), `line` bottom border. Links are mono `text-sm`, `muted` default, `text` on hover, each prefixed with a teal `//` that brightens from 60% to 100% opacity on hover (mirrors the section-eyebrow device). A teal pill badge ("available", with pulse dot) sits at the end of the desktop link list. Mobile collapses to a hamburger toggling a full-width `MenuOverlay` with the same `//`-prefixed links stacked vertically.

### Status Panel (signature component)
The hero's console readout: a `panel` card with a `panel-2` header row showing a path-style label (`~/dhia · status`) and a teal "online" indicator with a pulsing dot. Body rows are mono key/value pairs (`role`, `based`, `langs`, `focus`) at fixed-width keys. A nested `ink/60` sub-panel below shows the "currently building" project with five animated feed bars (staggered `scaleY` pulse) standing in for live activity. This component is the one place the whole design language (mono voice, teal-live signal, hairline borders, the one permitted shadow) appears together, and it is the template for how any future "live status" surface on the site should be built.

## Do's and Don'ts

### Do:
- **Do** keep JetBrains Mono for every piece of interface chrome (nav, buttons, labels, badges, status text); it's as much the identity as the color palette.
- **Do** use the `//` eyebrow device for any new section header, prefixed in `teal`.
- **Do** use amber for exactly one focal action or state per screen; if two things both feel like they need amber, one of them is wrong.
- **Do** build new elevated surfaces with a brighter neutral tone + `line` border before reaching for a shadow.
- **Do** keep border radius scaled to role: 4px for tags, 6px for controls, 8-12px for containers, full for pills/dots.

### Don't:
- **Don't** introduce a third signal color; amber and teal already cover the system's entire semantic range.
- **Don't** add a second shadow anywhere; the hero status panel's shadow is spent, it does not establish a reusable elevation level.
- **Don't** set body prose in JetBrains Mono, or interface chrome (buttons, nav, labels) in Inter; the role split between the two is deliberate and load-bearing.
- **Don't** introduce a light mode or make `color-scheme` conditional; darkness is a structural commitment (`:root { color-scheme: dark }`), not a default left unset.
- **Don't** use `error` (`red-400`) for anything besides form validation/error messaging.
