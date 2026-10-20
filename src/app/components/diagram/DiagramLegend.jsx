import React from 'react';

const DiagramLegend = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
      <span className="flex items-center gap-2">
        <svg width="20" height="8" aria-hidden="true">
          <line x1="0" y1="4" x2="20" y2="4" className="stroke-ink" strokeWidth="1.5" />
        </svg>
        data flow
      </span>
      <span className="flex items-center gap-2">
        <svg width="20" height="8" aria-hidden="true">
          <line x1="0" y1="4" x2="20" y2="4" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
        retry / alert
      </span>
      <span className="flex items-center gap-2">
        <svg width="10" height="10" aria-hidden="true">
          <circle cx="5" cy="5" r="4" className="fill-accent" />
        </svg>
        shipped &amp; live
      </span>
    </div>
  );
};

export default DiagramLegend;
