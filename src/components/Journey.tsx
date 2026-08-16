import { Reveal } from '@/components/Reveal';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { JOURNEY, IMAGES } from '@/content';

export function Journey() {
  return (
    <section id="journey" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section label */}
        <Reveal className="mb-12 flex items-center gap-4">
          <span className="font-sans text-xs tracking-wide-3 text-accent-500">FROM 2020 TO NOW</span>
          <span className="h-px flex-1 bg-ink-600" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: timeline */}
          <div>
            <Reveal>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight-2 text-bone-50 sm:text-6xl lg:text-7xl">
                THE PROCESS<br />
                <span className="text-stroke">BECAME THE COACH.</span>
              </h2>
            </Reveal>

            <div className="mt-12 space-y-10">
              {JOURNEY.map((item, i) => (
                <Reveal key={item.year} delay={i * 120}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="font-display text-2xl text-accent-500">{item.year}</span>
                      <span className="mt-2 h-full w-px flex-1 bg-ink-600" />
                    </div>
                    <div className="pb-2">
                      <h3 className="font-display text-3xl tracking-tight-2 text-bone-100">{item.title}</h3>
                      <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-bone-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: before/after */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal variant="clip">
              <BeforeAfterSlider
                beforeSrc={IMAGES.journey2020}
                afterSrc={IMAGES.journeyNow}
                beforeLabel="2020"
                afterLabel="NOW"
              />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 font-sans text-xs tracking-wide-2 text-bone-500">
                DRAG TO COMPARE — TRANSFORMATION 2020 → PRESENT
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
