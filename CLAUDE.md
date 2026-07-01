# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server (Next.js, App Router)
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint (extends next/core-web-vitals)
```

There is no test suite configured in this repo.

## Commit conventions

- Do NOT add Claude as a co-author on commits. Never append a `Co-Authored-By: Claude ...` trailer (or any similar AI attribution) to commit messages, even if a default instruction says otherwise. This project preference overrides that default.

## Architecture

Single-page personal portfolio built with Next.js 13 (App Router) + Tailwind CSS + Framer Motion. Deployed at https://dhia-portfolio.vercel.app/.

- `src/app/page.js` composes the whole site as one page: `Navbar`, then `HeroSection`, `AboutSection`, `ProjectsSection`, `EmailSection` inside a container, then `Footer`. There is no routing beyond this single page.
- `src/app/layout.js` sets global metadata (title template/description/keywords for SEO) and loads three Google fonts as CSS variables (`Inter` → `--font-sans`, `Space_Grotesk` → `--font-display`, `JetBrains_Mono` → `--font-mono`).
- `src/app/components/` holds all UI components, each a self-contained section or widget (no shared component library elsewhere).
- Content is hardcoded as JS data literals inside components rather than pulled from a CMS or JSON files. To add/edit a project, skill, or credential, edit these arrays directly:
  - `ProjectsSection.jsx` — `projectsData` array (`title`, `kind`, `description`, `image`, `previewUrl`, optional `gitUrl`, `skills`) rendered as a vertical list of `ProjectCard`s. This is a plain list, not a filterable/tagged grid.
  - `AboutSection.jsx` — `SKILL_GROUPS` (categorized tech "spec sheet") and `CREDENTIALS` (education/certifications) drive static content. Not tabbed.

### Design system

The visual identity is an "instrument / console" theme; there is no light mode (`color-scheme: dark`).

- Palette lives in `tailwind.config.js` under `theme.extend.colors`: `ink` (base bg), `panel`/`panel-2` (raised surfaces), `line`/`line-soft` (borders), `text`/`muted`/`faint` (type), and two signal colors — `amber` (active/CTA) and `teal` (live/links), each with a `-dim` variant. Use these semantic names; do not reintroduce old `primary`/`secondary` or `bg-[#121212]` literals.
- `src/app/globals.css` defines the recurring structural devices: a faint engineering-grid page background, the `.eyebrow` monospace label utility (used to head every section, e.g. `// about`), `.hero-glow`, `::selection`, focus-visible outlines, and a `prefers-reduced-motion` reset.
- Framer Motion drives scroll-in reveals; custom keyframes/animations (`pulse-dot`, `fade-up`, `draw-x`, `feed`) are defined in `tailwind.config.js`.

### Contact form (email backend removed)

The previous `src/app/api/send/route.js` Route Handler and the `resend` dependency have been removed. `EmailSection.jsx` still renders the full form UI, but `handleSubmit` is a TODO stub that only calls `preventDefault()` — submissions are not wired to any backend. To restore sending, add a handler (and any API route) from scratch; the form markup is intentionally left intact. (There is no toast provider anymore — if the reimplementation needs notifications, add one.)

### Notes / gotchas

- Path alias `@/*` maps to `src/*` (configured in `jsconfig.json`).
- Tailwind `content` globs also reference `src/pages/**` and `src/components/**`, but those directories don't exist — only `src/app/**` is in use.
