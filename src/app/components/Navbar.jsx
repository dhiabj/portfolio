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
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-3 lg:px-12">
        <Link
          href="/#"
          className="group flex items-center gap-2.5 font-mono text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-line bg-panel-2 text-xs font-semibold text-amber">
            DB
          </span>
          <span className="text-text">
            dhia
            <span className="text-faint">.bejaoui</span>
          </span>
        </Link>

        <div className="block md:hidden">
          <button
            aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavbarOpen((v) => !v)}
            className="flex items-center rounded border border-line bg-panel-2 px-2.5 py-2 text-muted transition-colors hover:text-text">
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
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
              <span className="flex items-center gap-2 rounded-full border border-teal-dim bg-teal/10 px-3 py-1 font-mono text-xs text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
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
