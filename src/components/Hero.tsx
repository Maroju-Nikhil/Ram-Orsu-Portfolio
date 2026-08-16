import { useScrollProgress } from '@/hooks';
import { COACH, IMAGES } from '@/content';

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const translateY = progress * 120;
  const scale = 1 + Math.abs(progress) * 0.08;
  const opacity = 1 - Math.abs(progress) * 0.7;

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-950">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${translateY}px) scale(${scale})`, opacity }}
      >
        <img
          src={IMAGES.hero}
          alt="Strength training"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/30" />
      </div>
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="max-w-4xl">
          <p
            className="mb-5 font-sans text-xs tracking-wide-3 text-accent-400 opacity-0"
            style={{ animation: 'fade-up 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) forwards' }}
          >
            {COACH.title.toUpperCase()}
          </p>
          <h1 className="font-display text-[15vw] leading-[0.88] tracking-tight-2 text-bone-50 sm:text-[10vw] lg:text-[8.5vw]">
            <span className="block opacity-0" style={{ animation: 'fade-up 0.9s 0.35s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              BUILD STRENGTH.
            </span>
            <span className="block opacity-0" style={{ animation: 'fade-up 0.9s 0.5s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              BUILD DISCIPLINE.
            </span>
            <span className="block text-stroke opacity-0" style={{ animation: 'fade-up 0.9s 0.65s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              BUILD YOURSELF.
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl font-sans text-sm text-bone-300 opacity-0 sm:text-base"
            style={{ animation: 'fade-up 0.8s 0.8s cubic-bezier(0.22,1,0.36,1) forwards' }}
          >
            Personal Training · Strength & Conditioning · Cardio · CrossFit · Nutrition Guidance
          </p>

          <div
            className="mt-8 flex flex-col gap-3 opacity-0 sm:flex-row sm:gap-4"
            style={{ animation: 'fade-up 0.8s 0.95s cubic-bezier(0.22,1,0.36,1) forwards' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent-500 px-7 py-4 font-sans text-sm tracking-wide-2 text-ink-950 transition-all hover:bg-accent-400"
            >
              START YOUR TRANSFORMATION
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#coaching"
              className="inline-flex items-center justify-center gap-2 border border-bone-300/40 px-7 py-4 font-sans text-sm tracking-wide-2 text-bone-50 transition-all hover:border-bone-50 hover:bg-bone-50/5"
            >
              EXPLORE THE COACHING →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] tracking-wide-3 text-bone-400">SCROLL</span>
          <div className="h-10 w-px overflow-hidden bg-ink-600">
            <div
              className="h-3 w-px bg-accent-500"
              style={{ animation: 'fade-up 1.6s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
