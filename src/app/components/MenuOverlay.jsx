import React from 'react';
import Link from 'next/link';

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <ul className="flex flex-col gap-1 border-t border-line bg-ink px-6 py-4 md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.path}
            onClick={onNavigate}
            className="block py-2 font-mono text-base text-muted transition-colors hover:text-text">
            <span className="text-teal">{'//'}</span> {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
