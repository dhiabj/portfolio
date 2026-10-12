---
name: Dhia Bejaoui Portfolio
description: A light graph-paper "systems diagram" portfolio where the centerpiece is a literal, interactive pipeline diagram rather than prose about one.
colors:
  canvas: "#F6F7F9"
  canvas-2: "#EEF0F4"
  paper: "#FFFFFF"
  ink: "#14181D"
  muted: "#5B6572"
  faint: "#636D78"
  line: "#D7DBE1"
  line-soft: "#E6E9ED"
  accent: "#3556D9"
  accent-dim: "#DCE3FA"
  error: "#DC2626"
typography:
  display:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: "1.08"
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    letterSpacing: "-0.015em"
  title:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.015em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.625"
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  "2xl": "64px"
  section-y: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.faint}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
  badge-status:
    backgroundColor: "{colors.accent-dim}"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "4px 12px"
---

# Design System: Dhia Bejaoui Portfolio

## Overview

**Creative North Star: "The Live Blueprint"**

The site is built on a literal premise: rather than describing systems Dhia has shipped, the page draws them. The page's centerpiece is not an illustration, it is a working SVG pipeline diagram ("fig. 1", set between About and Projects) (schedule → ingest → API → interface, with the retry/alert loop that actually runs in production), and every project card repeats the same node-and-edge grammar at a smaller scale for its own real architecture. The diagram is interactive, not decorative: hovering, focusing, or clicking a node pins it and dims everything not connected to it, with full keyboard (`tabIndex`, `role="button"`, Enter/Space) and touch support. This single device, not a color or a font, is the system's actual signature.

Around that device sits a light, drafting-table canvas: an off-white graph-paper grid, graphite-ink linework, and exactly one signal color (indigo) for anything live, active, or actionable. There is no dark mode; `color-scheme: light` is a structural commitment. Depth is never a shadow, it's a three-step surface stack (canvas → canvas-2 → paper) plus a hairline border, the same restraint a technical drawing uses.

Type carries two jobs, not three: DM Sans reads as the human voice (headings, narrative, field labels), IBM Plex Mono reads as the system's own output (node IDs, edge labels, skill chips, counters, nav, and button labels), i.e. anything that is a literal, measured, or machine-legible value gets the mono face; anything that is prose or a category name gets the sans face.

**Key Characteristics:**
- A real, interactive SVG systems diagram (hover/focus/click-to-pin, keyboard- and touch-operable) as the page's centerpiece and the recurring per-project pattern, not an illustrative accent.
- Light graph-paper canvas (off-white grid on `canvas`) with graphite-ink linework; no dark mode.
- Exactly one signal color, indigo `accent`, carrying every live/active/action meaning; no secondary hue.
- Flat by default, everywhere, no exceptions: depth is a fill-step (canvas → canvas-2 → paper) plus a `line` hairline border, never a shadow.
- Two-font system split by content type, not by size: DM Sans for human prose and category labels, IBM Plex Mono for literal/system-voice content (node IDs, edge labels, chips, counters, nav, buttons).
- Corner-badge ID tags (`N01`, `P01`, `N-MSG`) astride a container's border, mirroring how a component ID sits on an architecture diagram box.

## Colors

Nearly monochrome on paper and ink, with one indigo doing all of the system's semantic signaling.

### Primary
- **Signal Indigo** (`#3556D9`): the only color allowed to mean something. Owns primary button fills, active/live diagram nodes and their pulsing status dot, the "retry/alert" dashed edge and its arrowheads, focus-visible outlines, link and chip hover states, form-field focus borders, and the "available" / "live" status badges.

### Neutral
- **Canvas** (`#F6F7F9`): base page background; carries the graph-paper grid (`line-soft` grid lines at 32px).
- **Canvas-2** (`#EEF0F4`): recessed/grouped surface; the dependency-manifest header bar, each project card's diagram strip, hover backgrounds on ghost buttons and the mobile menu toggle.
- **Paper** (`#FFFFFF`): raised surface; every card/panel body and every diagram node's fill.
- **Ink** (`#14181D`): primary text and the default structural stroke color (button/card/node borders, the DB logo mark, diagram edges and arrowheads for the main data-flow path).
- **Muted** (`#5B6572`): secondary text; body paragraphs, nav link default state, descriptions.
- **Faint** (`#636D78`, confirmed ≥4.5:1 against canvas, canvas-2, and paper): tertiary text; captions, counters, index labels, credential detail lines, chip text.
- **Line** (`#D7DBE1`): the system's one hairline border color, used on virtually every card, panel, input, and divider.
- **Line-soft** (`#E6E9ED`): the background graph-paper grid lines only.
- **Error** (`#DC2626`): reserved strictly for contact-form validation text. Never used decoratively.

### Accent Fill
- **Accent-dim** (`#DCE3FA`): low-emphasis indigo fill for status badges ("available", "available for work") and the live diagram node's background, paired with an `accent` stroke rather than `ink`.

### Named Rules
**The One-Signal Rule.** Indigo is the only color in the system permitted to carry meaning: live, active, focused, or actionable. A second accent hue anywhere breaks the diagram's legibility, the whole point of the palette is that color scarcity makes "this matters" readable at a glance.

**The Fill-Not-Shadow Rule.** Depth between canvas → canvas-2 → paper is expressed through a surface-fill step plus a `line` hairline border, never a shadow. This holds with no exception anywhere in the build, including the hero.

## Typography

**Display/Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Mono Font:** IBM Plex Mono (with ui-monospace, monospace fallback)

**Character:** DM Sans carries every human sentence on the page, headings and narrative alike, with no separate display face; IBM Plex Mono is reserved for content that reads as the system's own literal output rather than authored prose.

### Hierarchy
- **Display** (700, 36px → 48px `sm` → 60px `lg`, line-height 1.08, tracking -0.015em, DM Sans): the hero H1 only.
- **Headline** (700, 30px → 36px `sm`, tracking -0.015em, DM Sans): section H2s ("An engineer who thinks in systems...", "Systems currently in production.", "Let's build something that lasts.").
- **Title** (700, 24px, tracking -0.015em, DM Sans): project card H3s.
- **Body** (400, 18px, line-height 1.625, `muted`, DM Sans): hero bio, About narrative, Contact lead-in. A denser variant (400, 14px, line-height 1.625, `muted`) carries project card descriptions.
- **Label** (400, 12px, uppercase, tracking 0.14em, `faint`/`muted`, DM Sans): contact form field labels, About's credential and skill group labels ("education", "languages", "frontend"). Never mono, these are category names, not measured values.
- **Mono/system-voice** (400–500, 10–14px, IBM Plex Mono, not uppercase): diagram node IDs and their corner badges, diagram edge/flow labels, skill and tech chips, counters ("4 of 4 · all deployed", "22 entries"), the `dependencies.lock` manifest header, credential detail lines (institution/certifier + date), project "kind" tags, nav links and the logo wordmark, and every button/CTA label.

### Named Rules
**The Measured-Value Rule.** IBM Plex Mono is reserved for content that reads as literal, machine-legible, or system-generated: node IDs, edge labels, chip tokens, counters, and the nav/button labels that act on the system. DM Sans carries everything that is authored prose or a category name: headings, body copy, field labels, group labels, status-badge sentences, and footer copy. Setting a heading or a paragraph in mono, or a chip/counter in sans, immediately reads as off-model.

## Layout

Single-column, single-page composition (`src/app/page.js`): fixed Navbar, then Hero → About → Pipeline figure → Projects → Contact inside one `container mx-auto px-6 lg:px-12` wrapper (content offset `pt-14` below the fixed nav), then Footer outside the container. There is no routing beyond this one page.

Section rhythm is consistent: `py-20` (80px) on mobile, `py-28` (112px) at `lg`, on every major section (About, Projects, Contact). Two-column content within a section (About's narrative + dependency manifest, Contact's pitch + form) uses `grid gap-12 lg:gap-16` (48px → 64px), collapsing to a single stacked column below `lg`. The project list stacks vertically with `gap-6 lg:gap-8` (24px → 32px) regardless of viewport; each project card's image/content split is `38%/62%` via `md:grid-cols-[minmax(0,38%)_1fr]`, and every project card carries its own full-width diagram strip (`canvas-2` background, horizontally scrollable on narrow viewports) above that split.

Card interiors use `p-6 lg:p-8` (24px → 32px) for primary panels (About, project cards, contact form).

The fixed navbar sits above a translucent `canvas/90` background with `backdrop-blur-md` and a `border-b border-line` seam; every anchor target carries `scroll-mt-24` so fixed-nav jumps land below the bar.

## Elevation & Depth

Flat, with no exception anywhere in the build (no `box-shadow` appears in any component). Every surface transition (canvas → canvas-2 → paper) is carried by a fill-step plus a `line` hairline border. "Live" or "active" state is signaled by swapping to the `accent`/`accent-dim` pair (diagram nodes, status badges), not by lifting the element, so liveness and elevation are kept as two separate, non-competing signals.

### Named Rules
**The Flat-Always Rule.** Nothing on the page takes a shadow, including the hero. If a component needs to read as more important, reach for the `accent`/`accent-dim` pair or a brighter fill step first.

## Shapes

Two radius roles, deliberately kept apart. Containers (cards, panels, buttons, inputs, the logo mark, SVG diagram-node rectangles) round softly at 4px (`rounded`, Tailwind default) for controls and the diagram nodes themselves, or 8px (`rounded-lg`) for primary panels (About, project cards, contact form, the pipeline figure frame). Read-out elements, corner ID badges (`N01`, `P01`, `N-MSG`), the "available"/"available for work" status pills, and project "kind" tags, are sharp-cornered rectangles with no radius at all, a deliberate contrast that marks them as labels sitting on top of a container rather than containers themselves. Borders are always 1px (1.25–1.75px on SVG strokes), solid `line`, `ink`, or `accent`, never a gradient or double border. No clipping, masking, or non-rectangular silhouettes anywhere in the system.

## Components

### Buttons
- **Shape:** 4px radius (`rounded`) on every button, 1px `ink` border.
- **Primary** (view the work, send message, project "visit"): `accent` fill, white text, mono font-medium, `px-6 py-3` (main CTAs) or `px-4 py-2` (card-scale "visit"). Hover: fill swaps to `ink`.
- **Secondary/Ghost** (download résumé, project "source", hamburger toggle): transparent or `canvas-2` background, `ink` border, `ink` mono label. Hover: `canvas-2` background.
- **Disabled** (form submit while sending): `disabled:opacity-60 disabled:cursor-not-allowed`, label swaps to present-tense "sending…".

### Chips
- **Style:** `canvas` background, `line` border, `faint` mono text at 11-12px, 4px radius, `px-2` to `px-2.5` by `py-0.5` to `py-1`. Used for skill tags in both the About dependency manifest and project cards.
- **State:** manifest chips get a hover treatment (`hover:border-accent hover:text-accent`) since that panel is itself explorable; project-card chips are static, read-only metadata.

### Cards / Containers
- **Corner Style:** 8px (`rounded-lg`) for primary panels (About, project cards, contact form, pipeline figure frame).
- **Background:** `paper`, with a `canvas-2` header/strip where the card has an internal title row or its own diagram (About's manifest header, each project card's diagram strip).
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** always `line`, 1px, full perimeter.
- **Internal Padding:** 24px mobile / 32px `lg`.

### Inputs / Fields
- **Style:** `canvas` background, `line` border, 4px radius, DM Sans `text-sm`, `faint` placeholder text, `px-3.5 py-2.5`.
- **Focus:** border shifts to `accent`, `focus:outline-none` on the field itself (the border-color shift is the field-level focus signal; interactive elements elsewhere keep the global `focus-visible` accent outline, including `.diagram-node:focus-visible`).
- **Error:** field itself does not change color; a `text-xs text-error` message appears below it instead.

### Navigation
- Fixed, translucent (`bg-canvas/90`, `backdrop-blur-md`), `line` bottom border. Links are mono `text-sm`, `muted` default, `ink` on hover, each gaining a bottom-edge `accent` underline that draws in from 0 to full width on hover. A sharp-cornered "available" status badge (`accent`/`accent-dim`, pulsing dot) sits at the end of the desktop link list. Mobile collapses to a bordered hamburger toggle (Heroicons `Bars3Icon`/`XMarkIcon`) opening a full-width `MenuOverlay` with the same links stacked vertically.

### The Diagram System (signature component)
The system's one true signature, built from four parts under `src/app/components/diagram/`: **SystemDiagram** (the full pipeline figure: schedule → ingest → API → interface, plus the alert/retry loop, animated in on scroll with staggered node/edge reveals), **MiniFlow** (the same node/edge grammar at card scale, one per project, rendering that project's real architecture), **DiagramLegend** (a small mono key: solid line = data flow, dashed indigo = retry/alert, indigo dot = shipped & live), and **NodeBadge** (the corner ID tag, e.g. `N01`, `P01`, astride a container's top border). Nodes are `paper`-filled `ink`-stroked rectangles (`accent`-dim-filled and `accent`-stroked when the node is the "live" one, with a pulsing dot); solid `ink` edges carry the main data flow, dashed `accent` edges carry the retry/alert loop, both with directional arrowheads. Hovering, focusing, or clicking a node pins it (click toggles) and dims every non-connected node and edge to a uniform 0.2 opacity; this interaction has full keyboard support (`tabIndex={0}`, `role="button"`, Enter/Space via `onKeyDown`) and touch support (`onClick`), with `.diagram-node:focus-visible` carrying the same accent outline as every other interactive element. This is the template for how any future "show the system" surface on the site should be built.

## Do's and Don'ts

### Do:
- **Do** keep the diagram interaction (hover/focus/click-to-pin, 0.2 uniform dim-on-inactive opacity) fully keyboard- and touch-operable on any new diagram-like component; match `tabIndex`/`role="button"`/`onKeyDown`/`.diagram-node:focus-visible`.
- **Do** reserve IBM Plex Mono for literal/system-voice content (node IDs, edge labels, chips, counters, nav, buttons) and DM Sans for everything authored (headings, body, field/group labels, badge sentences, footer).
- **Do** use indigo for exactly the "live/active/actionable" meaning; nothing else earns color.
- **Do** build new elevated-feeling surfaces with a fill-step (canvas → canvas-2 → paper) plus a `line` border, never a shadow.
- **Do** keep the radius split: 4px for controls and diagram nodes, 8px for containers, 0px (sharp) for ID badges and status pills.

### Don't:
- **Don't** introduce a second accent color; indigo already covers the system's entire semantic range.
- **Don't** add a shadow anywhere; the system is flat with no exceptions, not even for the hero.
- **Don't** set headings or body prose in IBM Plex Mono, or chips/counters/nav/buttons in DM Sans; the split is deliberate and load-bearing.
- **Don't** introduce a dark mode or make `color-scheme` conditional; light is a structural commitment (`:root { color-scheme: light }`), not a default left unset.
- **Don't** use `error` (`#DC2626`) for anything besides contact-form validation.
