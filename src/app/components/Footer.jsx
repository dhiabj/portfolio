import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container mx-auto flex flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center lg:px-12">
        <span className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-line bg-panel-2 text-[10px] font-semibold text-amber">
            DB
          </span>
          dhia bejaoui · fullstack engineer
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
          built &amp; deployed by dhia · © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
