import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group relative font-mono text-sm text-muted transition-colors hover:text-ink">
      {title}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </Link>
  );
};

export default NavLink;
