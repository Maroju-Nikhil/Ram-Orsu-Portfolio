import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COACH } from '@/content';

const LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'COACHING', href: '#coaching' },
  { label: 'TRANSFORMATIONS', href: '#transformations' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-ink-700/60' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-display text-xl tracking-tight-2 text-bone-50">
            <span className="text-accent-500">/</span>{COACH.name.split(' ')[0].toUpperCase()}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-sans text-xs tracking-wide-2 text-bone-300 transition-colors hover:text-bone-50"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden border border-bone-300/40 px-5 py-2.5 font-sans text-xs tracking-wide-2 text-bone-50 transition-all hover:border-accent-500 hover:bg-accent-500 hover:text-ink-950 md:inline-block"
          >
            START NOW
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-bone-50 md:hidden"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-950 transition-transform duration-500 ease-out-quint md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="grain absolute inset-0" />
        <div className="relative flex items-center justify-between px-5 py-4">
          <span className="font-display text-xl text-bone-50">
            <span className="text-accent-500">/</span>{COACH.name.split(' ')[0].toUpperCase()}
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-bone-50">
            <X size={26} />
          </button>
        </div>
        <ul className="relative flex flex-col gap-2 px-5 pt-12">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              style={{
                transitionDelay: open ? `${120 + i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s',
              }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink-700/60 py-5 font-display text-4xl tracking-tight-2 text-bone-100 transition-colors hover:text-accent-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="relative mx-5 mt-10 block bg-accent-500 py-4 text-center font-sans text-sm tracking-wide-2 text-ink-950"
        >
          START YOUR TRANSFORMATION →
        </a>
      </div>
    </>
  );
}
