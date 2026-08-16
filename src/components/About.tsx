import { Reveal } from '@/components/Reveal';
import { useCountUp, useReveal } from '@/hooks';
import { COACH, IMAGES } from '@/content';

function Stat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(value, 1800, visible);
  return (
    <div ref={ref} className="border-t border-ink-700/60 pt-4">
      <p className="font-display text-5xl text-bone-50 sm:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-sans text-xs tracking-wide-2 text-bone-500">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">THE COACH</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Portrait */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal variant="clip">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-800">
                <img
                  src={IMAGES.aboutPortrait}
                  alt={COACH.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-2xl tracking-tight-2 text-bone-50">{COACH.name}</p>
                  <p className="font-sans text-xs tracking-wide-2 text-bone-400">{COACH.title}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story + stats */}
          <div>
            <Reveal>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-6xl lg:text-7xl">
                I DIDN'T START<br />
                AS A COACH.<br />
                <span className="text-stroke">I STARTED AS A STUDENT.</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-bone-300">
              <Reveal delay={100}>
                <p>
                  In 2020, I started with general training — no plan, no structure, just a decision to
                  begin. Over the next five-plus years, that decision became a deeper understanding of
                  strength, conditioning, movement and consistency.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p>
                  I learned by doing. By failing, adjusting, and showing up again. I studied training,
                  refined technique, and understood how the body actually responds to progressive,
                  structured work.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Eventually that journey became coaching. Not because I had it all figured out —
                  but because I had lived the process long enough to help others build stronger,
                  fitter, more capable bodies without wasting years on guesswork.
                </p>
              </Reveal>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2">
              <Stat value={5} label="YEARS TRAINING EXPERIENCE" suffix="+" />
              <Stat value={20} label="CLIENTS COACHED" suffix="+" />
            </div>

            {/* Disciplines */}
            <Reveal delay={150}>
              <div className="mt-10 flex flex-wrap gap-3">
                {COACH.disciplines.map((d) => (
                  <span
                    key={d}
                    className="border border-ink-600 px-4 py-2 font-sans text-xs tracking-wide-2 text-bone-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
