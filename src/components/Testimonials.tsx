import { Reveal } from '@/components/Reveal';

const TESTIMONIALS = [
  {
    name: '[CLIENT NAME]',
    role: 'Strength client',
    text: '[Real testimonial to be added by Ram. Focus on what changed — strength, consistency, confidence, how the coaching felt different from random workouts.]',
  },
  {
    name: '[CLIENT NAME]',
    role: 'Fat loss & conditioning',
    text: '[Real testimonial to be added by Ram. Specific feedback about the process, the structure, and the result — not generic praise.]',
  },
  {
    name: '[CLIENT NAME]',
    role: 'Online coaching',
    text: '[Real testimonial to be added by Ram. What the accountability and structured plan actually did for their progress.]',
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">WHAT CLIENTS SAY</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
            WORDS FROM<br />
            <span className="text-stroke">THE PEOPLE WHO PUT IN THE WORK.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-ink-700/40 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="flex h-full flex-col bg-ink-900 p-8">
                <span className="font-display text-5xl text-accent-500/40">"</span>
                <blockquote className="-mt-4 flex-1 font-sans text-sm leading-relaxed text-bone-300">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-700/60 pt-4">
                  <p className="font-display text-lg tracking-tight-2 text-bone-50">{t.name}</p>
                  <p className="font-sans text-xs tracking-wide-2 text-bone-500">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 border border-dashed border-ink-600 p-5 text-center font-sans text-xs tracking-wide-2 text-bone-500">
            PLACEHOLDER — REAL CLIENT TESTIMONIALS WILL REPLACE THIS CONTENT
          </p>
        </Reveal>
      </div>
    </section>
  );
}
