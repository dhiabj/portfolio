import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-14 pb-8 lg:pt-20 lg:pb-14">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          I build systems that keep running.
        </h1>
        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted">
          I&apos;m <span className="font-medium text-ink">Dhia Bejaoui</span>, a fullstack
          engineer who ships production systems end to end: scraping pipelines, scheduled
          jobs, resilient APIs, and the interfaces on top of them.
        </p>
        <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4">
          <Link
            href="/#projects"
            className="rounded border border-ink bg-accent px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-ink">
            view the work →
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded border border-ink bg-transparent px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-canvas-2">
            download résumé
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
