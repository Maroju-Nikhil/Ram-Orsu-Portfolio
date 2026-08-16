import { Reveal } from '@/components/Reveal';
import { PROCESS } from '@/content';

export function Process() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">HOW I TRAIN YOU</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            WHAT HAPPENS<br />
            <span className="text-stroke">IF YOU BECOME A CLIENT.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {PROCESS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-ink-700/60 py-8 transition-colors hover:bg-ink-800/40 sm:grid-cols-[120px_1fr_1.5fr] sm:gap-8 sm:px-4">
                <span className="font-display text-5xl text-bone-500 transition-colors group-hover:text-accent-500 sm:text-7xl">
                  {step.num}
                </span>
                <h3 className="font-display text-3xl tracking-tight-2 text-bone-50 transition-transform group-hover:translate-x-2 sm:text-4xl">
                  {step.title}
                </h3>
                <p className="col-span-2 max-w-md font-sans text-sm leading-relaxed text-bone-400 sm:col-span-1">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink-700/60" />
        </div>
      </div>
    </section>
  );
}
