import { Reveal } from '@/components/Reveal';
import { AUDIENCE_FOR } from '@/content';

export function Audience() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* For */}
          <div>
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="font-sans text-xs tracking-wide-3 text-accent-500">WHO THIS IS FOR</span>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-6xl lg:text-7xl">
                THIS IS FOR<br />
                <span className="text-accent-500">YOU IF...</span>
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {AUDIENCE_FOR.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <li className="group flex items-start gap-4 border-b border-ink-700/60 pb-4">
                    <span className="mt-1 font-display text-lg text-accent-500">+</span>
                    <span className="font-sans text-base leading-relaxed text-bone-200 transition-colors group-hover:text-bone-50">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Against */}
          <div className="lg:pt-32">
            <Reveal className="mb-8 flex items-center gap-4">
              <span className="font-sans text-xs tracking-wide-3 text-bone-500">WHO THIS IS NOT FOR</span>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-500 sm:text-6xl lg:text-7xl">
                NOT LOOKING FOR<br />
                <span className="text-stroke">SHORTCUTS.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-md font-sans text-base leading-relaxed text-bone-400">
                This coaching is built for people willing to train consistently and commit to the process.
                If you are after a 30-day shred, a magic plan, or someone to do the work for you —
                this is not the right fit.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bone-400">
                But if you are ready to show up, follow structure, and put in the reps —
                the results will follow.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
