import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <Link href="#" className="text-xl font-semibold tracking-[0.18em] text-white">
          Carino Studio
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
