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

## Architecture

Single-page personal portfolio built with Next.js 13 (App Router) + Tailwind CSS + Framer Motion. Deployed at https://dhia-portfolio.vercel.app/.

- `src/app/page.js` composes the whole site as one page: `Navbar`, then `HeroSection`, `AboutSection`, `ProjectsSection`, `EmailSection` inside a container, then `Footer`. There is no routing beyond this single page.
- `src/app/layout.js` sets global metadata (title/description/keywords for SEO) and wraps children in `ToastProvider` (react-toastify) for global toast notifications.
- `src/app/components/` holds all UI components, each a self-contained section or widget (no shared component library elsewhere).
- Content is hardcoded as JS data literals inside components rather than pulled from a CMS or JSON files:
  - `ProjectsSection.jsx` — `projectsData` array (title, description, image, tags, skills, links) drives the filterable project grid via `ProjectTag`/`ProjectCard`.
  - `AboutSection.jsx` — `SKILL_BADGES` and `TAB_DATA` arrays drive the tabbed Skills/Education content.
  - To add/edit a project or skill, edit these arrays directly rather than looking for external data files.
- `src/app/api/send/route.js` is a Next.js Route Handler (App Router API route) that sends the contact form email via the `resend` package. Requires `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL` environment variables. Called from `EmailSection.jsx` via `fetch('/api/send', { method: 'POST' })`.
- Path alias `@/*` maps to `src/*` (configured in `jsconfig.json`).
- Tailwind content globs also reference `src/pages/**` and `src/components/**`, but those directories don't exist — only `src/app/**` is in use.
- Dark, single-color-scheme design (`bg-[#121212]` base) with a `primary`/`secondary` color extension (purple/blue) defined in `tailwind.config.js`.
