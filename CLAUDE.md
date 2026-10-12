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

Setup: copy `.env.example` to `.env.local` and fill in the three variables (see Contact form).

## Commit conventions

- Do NOT add Claude as a co-author on commits. Never append a `Co-Authored-By: Claude ...` trailer (or any similar AI attribution) to commit messages, even if a default instruction says otherwise. This project preference overrides that default.

## Writing style

- No em dashes ("—") anywhere in the project: not in UI copy, code comments, commit messages, or docs. Use a comma, colon, semicolon, or period instead, whichever fits the sentence.

## Architecture

Single-page personal portfolio built with Next.js 13 (App Router) + Tailwind CSS + Framer Motion. Deployed at https://dhiabejaoui.com/ (the old https://dhia-portfolio.vercel.app/ domain redirects to it).

- `src/app/page.js` composes the whole site as one page: `Navbar`, then `HeroSection`, `AboutSection`, `PipelineFigure`, `ProjectsSection`, `EmailSection` inside a container, then `Footer`. There is no routing beyond this single page.
- `src/app/layout.js` sets global metadata (title template/description/keywords for SEO) and loads two Google fonts as CSS variables (`DM_Sans` → `--font-sans`, `IBM_Plex_Mono` → `--font-mono`).
- `src/lib/siteConfig.js` holds `SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION`, and `SOCIAL_LINKS`, used by metadata and the JSON-LD in `page.js`.
- `src/app/components/` holds all UI components, each a self-contained section or widget (no shared component library elsewhere). `PipelineFigure.jsx` renders the interactive SVG "fig. 1" pipeline diagram; its parts live in `components/diagram/` (`SystemDiagram`, `MiniFlow`, `NodeBadge`, `DiagramLegend`).
- Content is hardcoded as JS data literals inside components rather than pulled from a CMS or JSON files. To add/edit a project, skill, or credential, edit these arrays directly:
  - `ProjectsSection.jsx`: `projectsData` array (`title`, `kind`, `description`, `image`, `previewUrl`, optional `gitUrl`, `skills`) rendered as a vertical list of `ProjectCard`s. This is a plain list, not a filterable/tagged grid.
  - `AboutSection.jsx`: `SKILL_GROUPS` (categorized tech "spec sheet") and `CREDENTIALS` (education/certifications) drive static content. Not tabbed.

### Design system

Full spec is in `DESIGN.md` (product context in `PRODUCT.md`); read it before UI changes. Summary: a light "live blueprint" theme, no dark mode (`color-scheme: light`).

- Palette lives in `tailwind.config.js` under `theme.extend.colors`: `canvas` (page bg), `canvas-2`, `paper` (surfaces), `ink` (text and linework), `muted`/`faint`, `line`/`line-soft` (hairlines), one signal color `accent`/`accent-dim` (indigo), and `error`. Use these names; do not reintroduce the old dark-theme names (`panel`, `amber`, `teal`, `text`) or hex literals.
- Rules: one accent color only; depth via fill step plus hairline border, never shadows; DM Sans for prose, IBM Plex Mono for machine-voice content (node IDs, chips, counters, nav/buttons).
- `src/app/globals.css` defines the graph-paper grid background, `::selection`, focus-visible outlines, and a `prefers-reduced-motion` reset.
- Framer Motion drives scroll-in reveals; custom keyframes/animations (`pulse-dot`, `fade-up`) are defined in `tailwind.config.js`.

### Contact form

`EmailSection.jsx` submits to the `src/app/api/send/route.js` Route Handler, which sends mail via the `resend` package. Both the client form and the API route validate against the shared Zod schema in `src/lib/contactSchema.js` (email, subject 3-120 chars, message 10-2000 chars). The client uses `react-hook-form` + `@hookform/resolvers/zod` (`mode: 'onBlur'`); success/error is tracked in local state and rendered inline, there is no toast provider. Required env vars (see `.env.example`): `RESEND_API_KEY`, `TO_EMAIL` (destination inbox, must be the Resend account owner's address unless a custom sending domain is added), and `NEXT_PUBLIC_CONTACT_FALLBACK_EMAIL` (shown in the form's error state as a mailto fallback).

### Notes / gotchas

- Path alias `@/*` maps to `src/*` (configured in `jsconfig.json`).
- Tailwind `content` globs also reference `src/pages/**` and `src/components/**`, but those directories don't exist; only `src/app/**` is in use.
