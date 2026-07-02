'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckIcon } from '@heroicons/react/24/solid';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { contactSchema } from '@/lib/contactSchema';

const FALLBACK_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_FALLBACK_EMAIL || 'dhia.bejaoui.db@gmail.com';

const EmailSection = () => {
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setSubmitState('idle');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  const inputClasses =
    'w-full rounded-md border border-line bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-faint transition-colors focus:border-teal focus:outline-none';
  const errorClasses = 'mt-1.5 text-xs text-red-400';

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20 lg:py-28">
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
            I&apos;m open to new roles and freelance work. Send a note about what you&apos;re
            building and I&apos;ll reply, the inbox is always open.
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

        {/* Right: form */}
        <div className="rounded-xl border border-line bg-panel p-6 lg:p-8">
          {submitState === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex items-center gap-2 rounded-full border border-teal-dim bg-teal/10 px-4 py-2 font-mono text-xs text-teal">
                <CheckIcon className="h-3.5 w-3.5 text-teal" />
                message sent
              </div>
              <p className="max-w-xs text-sm text-muted">
                Thanks for reaching out, I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                  your email
                </label>
                <input
                  type="email"
                  id="email"
                  className={inputClasses}
                  placeholder="you@company.com"
                  {...register('email')}
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={inputClasses}
                  placeholder="What's this about?"
                  {...register('subject')}
                />
                {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-label text-faint">
                  message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about the project…"
                  {...register('message')}
                />
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
              </div>
              {submitState === 'error' && (
                <p className="text-xs text-red-400">
                  Something went wrong, please email me directly at{' '}
                  <a href={`mailto:${FALLBACK_EMAIL}`} className="text-teal underline">
                    {FALLBACK_EMAIL}
                  </a>
                  .
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-amber/90 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? 'sending…' : 'send message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
