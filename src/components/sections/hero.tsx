import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { heroAsideCards, heroHighlights, heroLines } from "@/data/site";

export function Hero() {
  return (
    <section className="layout-shell section-space pb-10 pt-10 sm:pt-14">
      <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-serif text-[1.7rem] leading-none text-mist sm:text-[1.95rem]">
                Hey, I&apos;m Amelie
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 space-y-3 sm:space-y-4">
              <h1 className="max-w-5xl text-balance font-sans text-6xl font-semibold leading-[0.92] tracking-[-0.05em] text-mist sm:text-7xl lg:text-[6.4rem]">
                {heroLines[0]}
              </h1>
              <div className="space-y-1">
                <p className="font-sans text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#eef3f8]/96 sm:text-6xl lg:text-[5.3rem]">
                  {heroLines[1]}
                </p>
                <p className="font-sans text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#c8d4e2] sm:text-6xl lg:text-[5.3rem]">
                  {heroLines[2]}
                </p>
              </div>
            </div>
          </Reveal>
      
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link className="primary-button" href="/projects">
                View Projects
              </Link>
              <Link className="secondary-button" href="/contact">
                Get in Touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-[#d2dbeb]/16 pt-8">
              {heroHighlights.map((highlight) => (
                <div
                  className="rounded-[24px] border border-[#d2dbeb]/16 bg-[rgba(210,219,235,0.06)] px-4 py-5"
                  key={highlight.label}
                >
                  <div className="text-2xl font-serif text-light">
                    {highlight.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#c8d4e0]">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="relative min-h-[560px]">
            <div className="absolute inset-x-[10%] top-8 h-40 rounded-full bg-[#94a2bf]/14 blur-3xl" />
            <div className="absolute -left-3 top-12 hidden h-px w-16 bg-[#d2dbeb]/16 xl:block" />
            <div className="space-y-5 pt-6">
              {heroAsideCards.map((card, index) => (
                <div
                  className={`floating-card max-w-[30rem] rounded-[30px] p-6 sm:p-7 ${
                    index === 0
                      ? "ml-auto"
                      : index === 1
                        ? "mr-10"
                        : "ml-14"
                  } ${card.tone === "strong" ? "bg-[rgba(3,56,90,0.42)]" : ""}`}
                  key={card.title}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[#94a2bf]">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#d2dbeb]" />
                  </div>
                  <h2 className="mt-10 max-w-sm font-serif text-4xl leading-[0.98] text-mist">
                    {card.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-[1.06rem] leading-8 text-[#d2dbeb]">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
