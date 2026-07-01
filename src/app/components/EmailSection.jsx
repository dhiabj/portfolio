'use client';
import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  // TODO: Contact form submission to be reimplemented from scratch.
  // The UI below is intentionally left intact; wire up a handler here.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputClasses =
    'w-full rounded-md border border-line bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-faint transition-colors focus:border-teal focus:outline-none';

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div>
          <p className="eyebrow mb-4">
            <span className="text-teal">{'//'}</span> contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Let&apos;s build something that lasts.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to new roles and freelance work. Send a note about
            what you&apos;re building and I&apos;ll reply — the inbox is always
            open.
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-full border border-teal-dim bg-teal/10 px-4 py-2 font-mono text-xs text-teal w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
            available for work
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href="https://github.com/dhiabj"
              target="_blank"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-panel-2 transition-colors hover:border-teal">
              <Image src={GithubIcon} alt="" className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dhia-bejaoui-147b98200/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-panel-2 transition-colors hover:border-teal">
              <Image src={LinkedinIcon} alt="" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right — form (UI only; submission not yet wired up) */}
        <div className="rounded-xl border border-line bg-panel p-6 lg:p-8">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={inputClasses}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className={inputClasses}
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about the project…"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-amber/90">
              send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
