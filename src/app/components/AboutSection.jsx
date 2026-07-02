import React from 'react';

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
    ],
  },
  {
    label: 'backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Symfony'],
  },
  {
    label: 'data & storage',
    items: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Firebase',
      'Prisma',
      'Mongoose',
    ],
  },
  {
    label: 'testing',
    items: ['Jest', 'Vitest', 'Playwright', 'Detox'],
  },
  {
    label: 'infra & tooling',
    items: [
      'Docker',
      'GitHub Actions',
      'Git',
      'APScheduler',
      'next-intl',
      'Zod',
    ],
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
      ['AWS', 'Cloud Practitioner'],
      ['Google Cloud', 'Professional Cloud Developer'],
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <p className="eyebrow mb-4">
        <span className="text-teal">{'//'}</span> about
      </p>

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Narrative */}
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            An engineer who thinks in systems, not just screens.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I work across the whole stack, but I&apos;m happiest where the
              hard parts live: scraping and normalizing messy data, scheduling
              jobs that retry and alert when something breaks, and shaping APIs
              that stay predictable under load.
            </p>
            <p>
              On top of that I build fast, accessible interfaces with React,
              Next.js and Vue. I like shipping things that run in production and
              keep running, and I pick up whatever a project needs to get
              there.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((block) => (
              <div
                key={block.label}
                className="rounded-lg border border-line bg-panel p-5">
                <p className="eyebrow mb-4">{block.label}</p>
                <ul className="space-y-3">
                  {block.entries.map(([name, detail]) => (
                    <li key={name}>
                      <p className="font-mono text-sm text-text">{name}</p>
                      <p className="mt-0.5 text-xs text-faint">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skill spec sheet */}
        <div className="rounded-xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line bg-panel-2 px-5 py-3">
            <span className="font-mono text-xs text-faint">stack.spec</span>
            <span className="font-mono text-xs text-faint">
              {SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0)} entries
            </span>
          </div>
          <div className="divide-y divide-line-soft">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[120px_1fr] sm:gap-5">
                <p className="pt-1 font-mono text-xs uppercase tracking-label text-teal">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-line bg-ink/50 px-2.5 py-1 font-mono text-xs text-text transition-colors hover:border-amber hover:text-amber">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
