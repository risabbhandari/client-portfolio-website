import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { heroAsideCards, heroHighlights, heroLines } from "@/data/site";

export function Hero() {
  return (
    <section className="layout-shell section-space pb-10 pt-10 sm:pt-14">
      <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#c3d6e8]">
              <span className="text-[#eef6ff]">Hey, I&apos;m Amelie</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[0.72rem] uppercase tracking-[0.26em] text-[#a9c2d8]">
                available for new projects
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 space-y-3 sm:space-y-4">
              <p className="max-w-2xl text-[1rem] uppercase tracking-[0.32em] text-[#7da0ca]">
                creative portfolio
              </p>
              <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.4rem]">
                {heroLines[0]}
              </h1>
              <div className="space-y-1">
                <p className="font-serif text-5xl leading-[0.94] text-[#dfe9f4]/96 sm:text-6xl lg:text-[5.3rem]">
                  {heroLines[1]}
                </p>
                <p className="font-serif text-5xl leading-[0.94] text-[#9eb9d4] sm:text-6xl lg:text-[5.3rem]">
                  {heroLines[2]}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#b8cade] sm:text-[1.15rem]">
              Amelie creates short-form edits, narrative films, sound-led
              storytelling, and polished visual assets with a calm, premium
              rhythm. The goal is a site that feels minimal, elegant, and
              quietly cinematic rather than loud.
            </p>
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
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
              {heroHighlights.map((highlight) => (
                <div
                  className="rounded-[24px] border border-white/10 bg-[rgba(193,232,255,0.03)] px-4 py-5"
                  key={highlight.label}
                >
                  <div className="text-2xl font-serif text-accent">
                    {highlight.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#b7cedf]">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="relative min-h-[560px]">
            <div className="absolute inset-x-[10%] top-8 h-40 rounded-full bg-[#5483b3]/14 blur-3xl" />
            <div className="absolute -left-3 top-12 hidden h-px w-16 bg-white/10 xl:block" />
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
                    <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[#7da0ca]">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#c1e8ff]" />
                  </div>
                  <h2 className="mt-10 max-w-sm font-serif text-4xl leading-[0.98] text-mist">
                    {card.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-base leading-8 text-[#b7c8da]">
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
