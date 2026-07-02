import React from 'react';
import Link from 'next/link';

const statusRows = [
  { k: 'role', v: 'fullstack / systems engineer' },
  { k: 'based', v: 'Tunis · UTC+1' },
  { k: 'langs', v: 'FR · EN · AR' },
  { k: 'focus', v: 'live data infrastructure' },
];

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-8 lg:pt-24 lg:pb-16">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: thesis */}
        <div>
          <p
            className="eyebrow mb-6 animate-fade-up"
            style={{ animationDelay: '0.05s' }}>
            <span className="text-teal">{'//'}</span> software engineer · portfolio
          </p>
          <h1
            className="animate-fade-up font-display text-5xl font-bold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.12s' }}>
            I build software
            <br />
            that stays{' '}
            <span className="relative whitespace-nowrap text-amber">
              running.
              <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left animate-draw-x bg-amber/60" />
            </span>
          </h1>
          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-muted"
            style={{ animationDelay: '0.2s' }}>
            I&apos;m{' '}
            <span className="text-text">Dhia Bejaoui</span>, a fullstack
            engineer who ships production systems end to end: data pipelines,
            scheduled jobs, resilient APIs, and the interfaces on top of them.
          </p>
          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: '0.28s' }}>
            <Link
              href="/#projects"
              className="rounded-md bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-amber/90">
              view work →
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="rounded-md border border-line bg-panel-2 px-6 py-3 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal">
              download cv
            </Link>
          </div>
        </div>

        {/* Right, signature: live status panel */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '0.35s' }}>
          <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
            {/* panel header */}
            <div className="flex items-center justify-between border-b border-line bg-panel-2 px-4 py-2.5">
              <span className="font-mono text-xs text-faint">
                ~/dhia · status
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-teal">
                <span className="h-2 w-2 rounded-full bg-teal animate-pulse-dot" />
                online
              </span>
            </div>
            {/* panel body */}
            <div className="space-y-3 px-5 py-5">
              {statusRows.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline gap-4 font-mono text-sm">
                  <span className="w-14 shrink-0 text-faint">{row.k}</span>
                  <span className="text-text">{row.v}</span>
                </div>
              ))}

              {/* currently building */}
              <div className="mt-5 rounded-lg border border-line bg-ink/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">building</span>
                  {/* ambient feed bars */}
                  <div className="flex items-end gap-[3px]" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-sm bg-teal/70 animate-feed"
                        style={{
                          height: '14px',
                          animationDelay: `${i * 0.12}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-text">
                  Sarrafli
                </p>
                <p className="mt-1 font-mono text-xs leading-relaxed text-muted">
                  live FX rates aggregated from 13 Tunisian banks + the BCT,
                  refreshed on a schedule.
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 font-mono text-xs text-faint">
                <span>shipped: 3 systems</span>
                <span className="text-teal">all live ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
