import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group relative font-mono text-sm text-muted transition-colors hover:text-ink">
      {title}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
    </Link>
  );
};

export default NavLink;
