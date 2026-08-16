import { Reveal } from '@/components/Reveal';
import { SERVICES } from '@/content';

export function Services() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">SERVICES</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            WAYS TO<br />
            <span className="text-accent-500">TRAIN WITH ME.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-ink-700/40 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col bg-ink-900 p-8 transition-colors hover:bg-ink-800">
                <span className="font-display text-3xl text-bone-500 transition-colors group-hover:text-accent-500">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight-2 text-bone-50">{s.title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-bone-400">{s.text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-xs tracking-wide-2 text-bone-300 transition-colors hover:text-accent-500"
                >
                  GET IN TOUCH
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 font-sans text-xs tracking-wide-2 text-bone-500">
            PRICING IS DISCUSSED DURING CONSULTATION — NO INVENTED PACKAGES.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
