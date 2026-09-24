import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import MiniFlow from './diagram/MiniFlow';
import NodeBadge from './diagram/NodeBadge';

const ProjectCard = ({
  index,
  imgUrl,
  title,
  kind,
  description,
  gitUrl,
  skills,
  previewUrl,
  flow = { steps: [] },
}) => {
  return (
    <article className="relative rounded-lg border border-line bg-paper">
      <NodeBadge id={`P${String(index + 1).padStart(2, '0')}`} live />

      {/* Diagram strip: this project's own pipeline */}
      <div
        tabIndex={0}
        role="region"
        aria-label={`${title} pipeline diagram`}
        className="overflow-x-auto border-b border-line bg-canvas-2 px-5 py-5">
        {flow.steps.length > 0 && <MiniFlow steps={flow.steps} loop={flow.loop} />}
      </div>

      <div className="md:grid md:grid-cols-[minmax(0,38%)_1fr]">
        {/* Preview */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line md:border-b-0 md:border-r">
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 38vw"
            className="object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 lg:p-8">
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{title}</h3>
            <span className="font-mono text-xs text-faint">{kind}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[11px] text-faint">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 pt-1">
            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                className="flex items-center gap-2 rounded border border-ink bg-accent px-4 py-2 font-mono text-xs font-medium text-white transition-colors hover:bg-ink">
                visit <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            )}
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                className="flex items-center gap-2 rounded border border-ink bg-transparent px-4 py-2 font-mono text-xs text-ink transition-colors hover:bg-canvas-2">
                <CodeBracketIcon className="h-4 w-4" /> source
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
