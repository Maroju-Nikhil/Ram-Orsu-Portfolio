import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQS } from '@/content';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ink-950 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1000px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">FAQ</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-6xl lg:text-7xl">
            QUESTIONS,<br />
            <span className="text-stroke">ANSWERED.</span>
          </h2>
        </Reveal>

        <div className="mt-12">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div className="border-b border-ink-700/60">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl tracking-tight-2 text-bone-50 sm:text-2xl">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-bone-400 transition-colors hover:text-accent-500">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out-quint"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 font-sans text-sm leading-relaxed text-bone-400">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
