import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { COACH } from '@/content';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-700/60 bg-ink-950 py-12">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl tracking-tight-2 text-bone-50">
              <span className="text-accent-500">/</span>{COACH.name.split(' ')[0].toUpperCase()}
            </p>
            <p className="mt-1 font-sans text-xs tracking-wide-2 text-bone-500">{COACH.title}</p>
          </div>

          {/* Contact */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <MessageCircle size={16} className="text-accent-500" />
              <a href={COACH.whatsapp} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-bone-300 transition-colors hover:text-bone-50">
                {COACH.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram size={16} className="text-accent-500" />
              <a href={COACH.instagram} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-bone-300 transition-colors hover:text-bone-50">
                {COACH.instagramHandle}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-accent-500" />
              <span className="font-sans text-sm text-bone-300">{COACH.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-700/60 pt-6 sm:flex-row">
          <p className="font-sans text-xs tracking-wide-2 text-bone-500">
            © {new Date().getFullYear()} {COACH.name}. ALL RIGHTS RESERVED.
          </p>
          <p className="font-sans text-xs tracking-wide-2 text-bone-500">
            STRENGTH. STRUCTURE. DISCIPLINE. PROGRESS.
          </p>
        </div>
      </div>
    </footer>
  );
}
