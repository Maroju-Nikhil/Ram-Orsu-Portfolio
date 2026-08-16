import { Reveal } from '@/components/Reveal';
import { Marquee } from '@/components/Marquee';
import { SOCIAL_IMAGES, COACH } from '@/content';
import { Instagram } from 'lucide-react';

export function Social() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">TRAIN. MOVE. LIVE.</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            TRAIN. MOVE.<br />
            <span className="text-accent-500">LIVE.</span>
          </h2>
        </Reveal>
      </div>

      {/* Marquee gallery */}
      <Reveal>
        <Marquee className="mt-14" speed={60}>
          {SOCIAL_IMAGES.map((src, i) => (
            <div key={i} className="relative mx-1.5 aspect-square w-[240px] shrink-0 overflow-hidden bg-ink-800 sm:w-[300px]">
              <img
                src={src}
                alt="Training content"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent opacity-0 transition-opacity hover:opacity-100" />
            </div>
          ))}
        </Marquee>
      </Reveal>

      <Reveal delay={150}>
        <div className="relative mx-auto mt-12 max-w-[1400px] px-5 sm:px-8">
          <a
            href={COACH.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-bone-300/40 px-6 py-3.5 font-sans text-sm tracking-wide-2 text-bone-50 transition-all hover:border-accent-500 hover:bg-accent-500 hover:text-ink-950"
          >
            <Instagram size={18} />
            FOLLOW {COACH.instagramHandle.toUpperCase()}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
