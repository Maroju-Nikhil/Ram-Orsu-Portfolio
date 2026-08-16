import { Reveal } from '@/components/Reveal';
import { Plus } from 'lucide-react';

export function Transformations() {
  return (
    <section id="transformations" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">PROOF</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-7xl lg:text-8xl">
              REAL PEOPLE.<br />
              <span className="text-stroke">REAL PROGRESS.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-display text-6xl text-accent-500 sm:text-7xl">20+</p>
            <p className="font-sans text-xs tracking-wide-2 text-bone-400">CLIENTS COACHED</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-bone-400">
            20+ clients trained across strength, fat loss, conditioning and CrossFit.
            Client transformation photos and results will be added here as they become available —
            no invented numbers, ever.
          </p>
        </Reveal>

        {/* Placeholder cards — ready for real client data */}
        <div className="mt-16 grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="group flex h-full min-h-[360px] flex-col items-center justify-center gap-4 bg-ink-900 p-8 text-center transition-colors hover:bg-ink-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-ink-500 text-bone-500 transition-colors group-hover:border-accent-500 group-hover:text-accent-500">
                  <Plus size={24} />
                </div>
                <div>
                  <p className="font-display text-xl tracking-tight-2 text-bone-300">CLIENT {i + 1}</p>
                  <p className="mt-1 font-sans text-xs tracking-wide-2 text-bone-500">
                    BEFORE / AFTER · GOAL · RESULT
                  </p>
                </div>
                <p className="max-w-xs font-sans text-xs leading-relaxed text-bone-600">
                  Placeholder — replace with real client transformation photo, goal, approach and result.
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 font-sans text-xs tracking-wide-2 text-bone-500">
            TO ADD A TRANSFORMATION: DROP CLIENT PHOTOS INTO THE ASSETS FOLDER AND UPDATE THE CONTENT FILE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
