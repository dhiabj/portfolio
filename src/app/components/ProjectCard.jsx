import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({
  index,
  imgUrl,
  title,
  kind,
  description,
  gitUrl,
  skills,
  previewUrl,
}) => {
  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-panel transition-colors hover:border-line/80 md:grid md:grid-cols-[minmax(0,42%)_1fr]">
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line md:border-b-0 md:border-r">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 lg:p-8">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-faint">
            {String(index + 1).padStart(2, '0')} · {kind}
          </span>
          <span className="flex items-center gap-1.5 text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
            live
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-text">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-line bg-ink/50 px-2 py-0.5 font-mono text-[11px] text-faint">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-1">
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-md bg-amber px-4 py-2 font-mono text-xs font-medium text-ink transition-colors hover:bg-amber/90">
              visit <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          )}
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-line bg-panel-2 px-4 py-2 font-mono text-xs text-text transition-colors hover:border-teal hover:text-teal">
              <CodeBracketIcon className="h-4 w-4" /> source
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
