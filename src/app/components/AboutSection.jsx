import React from 'react';
import NodeBadge from './diagram/NodeBadge';

const SKILL_GROUPS = [
  {
    label: 'languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'PHP'],
  },
  {
    label: 'frontend',
    items: [
      'React',
      'Next.js',
      'Vue.js',
      'React Native',
      'Tailwind CSS',
      'Redux',
      'Pinia',
      'TanStack Query',
      'next-intl',
      'Zod',
      'React Hook Form',
    ],
  },
  {
    label: 'backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Symfony'],
  },
  {
    label: 'data & storage',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    label: 'testing',
    items: ['Jest', 'Vitest', 'Playwright', 'Detox'],
  },
  {
    label: 'infra & tooling',
    items: ['Claude Code', 'Docker', 'GitHub Actions', 'Git'],
  },
];

const CREDENTIALS = [
  {
    label: 'education',
    entries: [
      ['ESPRIT', 'Engineering & Technologies · Tunis'],
      ['ISSATM', 'Applied Sciences & Technology · Mateur'],
    ],
  },
  {
    label: 'certifications',
    entries: [
      ['Claude Code 101', 'Anthropic · 2026-04-24'],
      ['Claude Code in Action', 'Anthropic · 2026-04-24'],
      ['Introduction to Agent Skills', 'Anthropic · 2026-05-05'],
      ['Introduction to Subagents', 'Anthropic · 2026-05-05'],
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="relative rounded-lg border border-line bg-paper p-6 lg:p-10">
        <NodeBadge id="N01" live />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Narrative */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              An engineer who thinks in systems, not just screens.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I work across the whole stack, but I&apos;m happiest where the hard parts live:
                scraping and normalizing messy data, scheduling jobs that retry and alert when
                something breaks, and shaping APIs that stay predictable under load.
              </p>
              <p>
                On top of that I build fast, accessible interfaces with React, Next.js and Vue.
                I like shipping things that run in production and keep running, and I pick up
                whatever a project needs to get there.
              </p>
            </div>

            {/* Credentials, drawn as a build log */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {CREDENTIALS.map((block) => (
                <div key={block.label}>
                  <p className="mb-4 text-xs uppercase tracking-label text-faint">
                    {block.label}
                  </p>
                  <ul className="relative border-l border-line pl-5">
                    {block.entries.map(([name, detail]) => (
                      <li key={name} className="relative pb-5 last:pb-0">
                        <span
                          className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-medium text-ink">{name}</p>
                        <p className="mt-0.5 font-mono text-xs text-faint">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skill dependency manifest */}
          <div className="rounded border border-line">
            <div className="flex items-center justify-between border-b border-line bg-canvas-2 px-5 py-3">
              <span className="font-mono text-xs text-muted">dependencies.lock</span>
              <span className="font-mono text-xs text-faint">
                {SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0)} entries
              </span>
            </div>
            <div className="divide-y divide-line-soft">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <p className="pt-1 text-xs uppercase tracking-label text-muted">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
