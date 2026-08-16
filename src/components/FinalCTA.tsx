import { Reveal } from '@/components/Reveal';
import { useScrollProgress } from '@/hooks';
import { IMAGES, COACH } from '@/content';

export function FinalCTA() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const scale = 1.1 - Math.abs(progress) * 0.1;

  return (
    <section ref={ref} id="contact" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950 py-24">
      {/* BG */}
      <div className="absolute inset-0" style={{ transform: `scale(${scale})` }}>
        <img
          src={IMAGES.cta}
          alt="Train differently"
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />
      </div>
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-6 font-sans text-xs tracking-wide-3 text-accent-500">
            THE LAST STEP IS THE FIRST REP
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight-2 text-bone-50 sm:text-8xl lg:text-9xl">
            READY TO TRAIN<br />
            <span className="text-accent-500">DIFFERENTLY?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto mt-8 max-w-md space-y-1 font-sans text-base leading-relaxed text-bone-300 sm:text-lg">
            <p>Tell me where you are.</p>
            <p>Tell me where you want to go.</p>
            <p>Let's build the plan to get you there.</p>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={COACH.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 bg-accent-500 px-8 py-4 font-sans text-sm tracking-wide-2 text-ink-950 transition-all hover:bg-accent-400 sm:w-auto"
            >
              START YOUR TRANSFORMATION
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={COACH.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-bone-300/40 px-8 py-4 font-sans text-sm tracking-wide-2 text-bone-50 transition-all hover:border-bone-50 hover:bg-bone-50/5 sm:w-auto"
            >
              BOOK A CONSULTATION →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
