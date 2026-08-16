import { Reveal } from '@/components/Reveal';
import { EXPERTISE, IMAGES } from '@/content';

export function Expertise() {
  return (
    <section id="coaching" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">WHAT I ACTUALLY COACH</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            FOUR PILLARS.<br />
            <span className="text-stroke">ONE SYSTEM.</span>
          </h2>
        </Reveal>

        {/* Four pillars grid */}
        <div className="mt-16 grid gap-px bg-ink-700/40 sm:grid-cols-2">
          {EXPERTISE.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <article className="group relative h-full overflow-hidden bg-ink-900">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out-quint group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-5xl text-bone-50/30 transition-colors group-hover:text-accent-500">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-3xl tracking-tight-2 text-bone-50">{item.label}</h3>
                  <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-bone-400">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Nutrition guidance — full width */}
        <Reveal delay={150}>
          <article className="group mt-px grid items-stretch gap-px bg-ink-700/40 md:grid-cols-[1.2fr_1fr]">
            <div className="relative overflow-hidden bg-ink-900">
              <img
                src={IMAGES.expertiseNutrition}
                alt="Nutrition guidance"
                loading="lazy"
                className="h-full min-h-[280px] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />
            </div>
            <div className="flex flex-col justify-center bg-ink-900 p-8 sm:p-12">
              <span className="font-sans text-xs tracking-wide-3 text-accent-500">05 — SUPPORTING THE WORK</span>
              <h3 className="mt-3 font-display text-4xl tracking-tight-2 text-bone-50 sm:text-5xl">
                NUTRITION GUIDANCE
              </h3>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-bone-400">
                Practical nutrition guidance that supports training, body composition and lifestyle goals.
                Guidance — not medical or dietitian-level advice.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
