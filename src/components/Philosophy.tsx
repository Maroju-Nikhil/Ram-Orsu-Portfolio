import { Reveal } from '@/components/Reveal';
import { Marquee } from '@/components/Marquee';
import { PHILOSOPHY } from '@/content';

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-36">
      <div className="grain absolute inset-0" />

      {/* Marquee backdrop */}
      <Marquee className="absolute top-1/2 -translate-y-1/2 opacity-[0.04]" speed={50}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="font-display text-[18vw] leading-none tracking-tight-2 text-bone-50">
            TRAIN WITH PURPOSE&nbsp;
          </span>
        ))}
      </Marquee>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">THE PHILOSOPHY</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>

        <Reveal>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight-2 text-bone-50 sm:text-8xl lg:text-9xl">
            TRAIN WITH<br />
            <span className="text-accent-500">PURPOSE.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-px">
          {PHILOSOPHY.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group flex flex-col items-baseline gap-2 border-t border-ink-700/60 py-6 sm:flex-row sm:gap-6">
                <span className="font-display text-4xl tracking-tight-2 text-bone-50 transition-colors group-hover:text-accent-500 sm:text-6xl lg:text-7xl">
                  {p.left}
                </span>
                <span className="font-sans text-sm tracking-wide-2 text-bone-500 sm:text-base">&gt;</span>
                <span className="font-display text-3xl tracking-tight-2 text-bone-500 line-through decoration-ink-600 sm:text-5xl lg:text-6xl">
                  {p.right}
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink-700/60" />
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-bone-300 sm:text-lg">
            Training should be structured, progressive and sustainable. No random sessions.
            No quick fixes. Just a system built to make you stronger — and keep you there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
