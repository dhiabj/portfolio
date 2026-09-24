'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'about', path: '#about' },
  { title: 'work', path: '#projects' },
  { title: 'contact', path: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/#" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-ink font-mono text-[11px] font-medium text-ink">
            DB
          </span>
          <span className="font-mono text-sm text-ink">
            dhia<span className="text-faint">.bejaoui</span>
          </span>
        </Link>

        <div className="block md:hidden">
          <button
            aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavbarOpen((v) => !v)}
            className="flex items-center rounded border border-ink px-2.5 py-2 text-ink transition-colors hover:bg-canvas-2">
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:block" id="navbar">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <span className="flex items-center gap-2 border border-accent bg-accent-dim px-3 py-1 text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                available
              </span>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onNavigate={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
