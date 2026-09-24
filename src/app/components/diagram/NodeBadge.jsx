import React from 'react';

/**
 * The corner tag every node/section frame in the system carries, e.g. "N01".
 * Sits astride the frame's border, the way a component ID sits on an
 * architecture diagram box; never floated alone above a heading.
 */
const NodeBadge = ({ id, live = false }) => {
  return (
    <span className="absolute -top-3 left-4 flex items-center gap-1.5 border border-ink bg-canvas px-2 py-0.5 font-mono text-[11px] text-ink">
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-accent animate-pulse-dot' : 'border border-muted'}`}
        aria-hidden="true"
      />
      {id}
    </span>
  );
};

export default NodeBadge;
