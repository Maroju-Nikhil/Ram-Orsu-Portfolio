import { Reveal } from '@/components/Reveal';
import { DAY_IN_LIFE } from '@/content';

export function DayInLife() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">A DAY IN THE LIFE</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            TRAINING ISN'T<br />
            <span className="text-stroke">A JOB. IT'S LIFESTYLE.</span>
          </h2>
        </Reveal>
      </div>

      {/* Horizontal scroll */}
      <Reveal>
        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:thin]">
          {DAY_IN_LIFE.map((item, i) => (
            <article
              key={i}
              className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-center overflow-hidden bg-ink-800 sm:w-[340px]"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-display text-4xl text-accent-500">{item.time}</span>
                <p className="mt-1 font-display text-xl tracking-tight-2 text-bone-50">{item.title}</p>
              </div>
              <span className="absolute top-4 right-4 font-sans text-xs tracking-wide-2 text-bone-400">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </Reveal>
      <p className="relative mx-auto mt-6 max-w-[1400px] px-5 font-sans text-xs tracking-wide-2 text-bone-500 sm:px-8">
        SCROLL HORIZONTALLY →
      </p>
    </section>
  );
}
