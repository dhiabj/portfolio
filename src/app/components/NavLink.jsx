import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-text">
      <span className="text-teal opacity-60 group-hover:opacity-100">{'//'}</span>
      {title}
    </Link>
  );
};

export default NavLink;
