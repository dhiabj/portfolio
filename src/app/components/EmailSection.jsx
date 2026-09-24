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
import NodeBadge from './diagram/NodeBadge';

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
    'w-full rounded border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder-faint transition-colors focus:border-accent focus:outline-none';
  const errorClasses = 'mt-1.5 text-xs text-error';

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something that lasts.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to new roles and freelance work. Send a note about what you&apos;re
            building and I&apos;ll reply, the inbox is always open.
          </p>

          <div className="mt-8 flex w-fit items-center gap-2 border border-accent bg-accent-dim px-4 py-2 text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            available for work
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href="https://github.com/dhiabj"
              target="_blank"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded border border-ink transition-colors hover:bg-canvas-2">
              <Image src={GithubIcon} alt="" className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dhia-bejaoui-147b98200/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded border border-ink transition-colors hover:bg-canvas-2">
              <Image src={LinkedinIcon} alt="" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right: form, drawn as a node awaiting a new edge */}
        <div className="relative rounded-lg border border-line bg-paper p-6 lg:p-8">
          <NodeBadge id="N-MSG" live={submitState === 'success'} />

          {submitState === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex items-center gap-2 border border-accent bg-accent-dim px-4 py-2 font-mono text-xs text-accent">
                <CheckIcon className="h-3.5 w-3.5" />
                message sent
              </div>
              <p className="max-w-xs text-sm text-muted">
                Thanks for reaching out, I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSubmitState('idle')}
                className="mt-2 rounded border border-ink bg-transparent px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:bg-canvas-2">
                send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-label text-faint">
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
                  className="mb-2 block text-xs uppercase tracking-label text-faint">
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
                  className="mb-2 block text-xs uppercase tracking-label text-faint">
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
                <p className="text-xs text-error">
                  Something went wrong, please email me directly at{' '}
                  <a href={`mailto:${FALLBACK_EMAIL}`} className="text-accent underline">
                    {FALLBACK_EMAIL}
                  </a>
                  .
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded border border-ink bg-accent px-5 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60">
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
