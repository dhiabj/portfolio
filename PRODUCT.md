# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted roughly equally: recruiters/hiring managers screening candidates for full-time fullstack or systems engineering roles, and clients or small companies evaluating Dhia for freelance or contract engagements (e.g. the Sparkling Co. relationship). Both typically arrive with an outside channel already in hand (a referral, a job application, an agency intro) and use the site to verify, before proceeding, that the projects, skills, and credentials are real and substantial rather than to make first contact.

## Product Purpose

A single-page personal portfolio for Dhia Bejaoui that establishes credibility ahead of an interview or engagement decision. Success is a visitor coming away convinced Dhia's shipped work and stack are real and solid enough to move forward on their existing track (interview, contract, referral follow-up), not necessarily a form submission on the page itself. The contact form and resume download exist as secondary paths for visitors who do want to reach out directly from the site.

## Positioning

Not a generic "I know React" portfolio: the through-line across the featured projects (Sarrafli's scraping/scheduling pipeline with retries and alerts, Sparkling's agency site shipped end to end in under a week, CodeSensei's AI review pipeline) is systems that run unattended in production and keep running, live data infrastructure and resilient APIs, with the frontend work as the visible layer on top rather than the whole story. A neighboring "frontend developer" portfolio could not truthfully claim the scraping/scheduling/retry/alerting track record.

## Operating Context

Trilingual environment (FR/EN/AR) reflected in shipped work (Sarrafli is FR/EN/AR RTL). Based in Tunis, UTC+1. All featured projects are live, deployed systems, not mockups or local-only demos; each project entry links to a working preview and, where the code is open, a repo. The site itself is deployed at https://dhiabejaoui.com/, with the legacy https://dhia-portfolio.vercel.app/ domain permanently redirected.

## Capabilities and Constraints

- Single-page site: Navbar, Hero, About, Projects, Email/contact, Footer, composed in `src/app/page.js`. No routing beyond this one page.
- Content (projects, skills, credentials) is hardcoded as JS data literals in components, not pulled from a CMS. Adding a project or skill means editing the array directly.
- Contact form (`EmailSection.jsx` → `src/app/api/send/route.js`) sends mail via Resend, validated client- and server-side against a shared Zod schema (email; subject 3-120 chars; message 10-2000 chars).
- No test suite configured in the repo.

## Brand Commitments

- Name and identity: Dhia Bejaoui, fullstack / systems engineer.
- Role framing: "software engineer" generally, with "systems" as the differentiator, not "frontend developer" or "web designer".
- Real accounts only: GitHub (github.com/dhiabj) and LinkedIn (linkedin.com/in/dhia-bejaoui-147b98200) are the canonical social links; no other platforms are claimed.

## Evidence on Hand

- Four real, deployed projects with live preview URLs and (for two of them) public repos: Sparkling (company site), Sarrafli (FX data platform), CodeSensei (AI code review tool), Weather App.
- Real certifications (Claude Code 101, Claude Code in Action, Introduction to Agent Skills, Introduction to Subagents, all Anthropic, 2026) and two real institutions (ESPRIT, ISSATM).
- A real downloadable resume at `/resume.pdf`.
- No testimonials, client quotes, press mentions, or usage/traffic metrics exist for any project. Future work must not fabricate these; the four listed projects and their true descriptions are the only evidence base until the user adds more.

## Product Principles

1. Every claim on the site must trace to a real, verifiable artifact (a live URL, a repo, a real certificate); never invent proof.
2. Systems-that-keep-running is the differentiator to protect: don't let the site drift toward a generic "I build UIs" framing.
3. The site must read as credible to both a recruiter and a freelance client without needing two separate versions; keep language and evidence dual-purpose rather than picking one audience.
4. Keep the single-page, hardcoded-content structure; it is a deliberate simplicity choice for this project, not a gap to fill with a CMS or multi-page routing.
5. Trilingual/RTL competence (demonstrated via Sarrafli) is a real differentiator worth surfacing, not incidental.

## Accessibility & Inclusion

No product-specific accessibility requirement beyond standard web accessibility practice has been established.
