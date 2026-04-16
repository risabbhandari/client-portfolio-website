import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { aboutFacts, aboutPhilosophy, aboutStory } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me"
};

export default function AboutPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <Reveal amount={0.24} distance={34}>
        <span className="eyebrow">about me</span>
      </Reveal>

      <Reveal delay={0.05} amount={0.24} distance={38}>
        <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.1rem]">
          about me
        </h1>
      </Reveal>

      <Reveal delay={0.1} amount={0.28} distance={34}>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#9fb5ca]">
          A multidisciplinary creative practice shaped by cinematic pacing,
          subtle finish, and collaboration that feels thoughtful without being
          heavy.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <Reveal amount={0.18} distance={28}>
          <div className="space-y-5 border-t border-white/10 pt-8">
            {aboutFacts.map((fact) => (
              <div className="pb-5" key={fact.label}>
                <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#7da0ca]">
                  {fact.label}
                </p>
                <p className="mt-3 max-w-xs text-base leading-8 text-[#c5d5e4]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06} amount={0.18} distance={34}>
          <div>
            <p className="max-w-4xl font-serif text-[2.3rem] leading-[1.05] text-mist sm:text-[2.8rem] lg:text-[3.3rem]">
              {aboutPhilosophy}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr_auto]">
        <Reveal amount={0.18} distance={36}>
          <div className="image-panel h-[360px]" />
        </Reveal>
        <Reveal delay={0.06} amount={0.18} distance={36}>
          <div className="image-panel h-[360px]" />
        </Reveal>
        <Reveal delay={0.1} amount={0.18} distance={28}>
          <div className="flex items-end justify-start lg:justify-end">
            <Link className="secondary-button" href="/contact">
              Contact Me
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="section-divider mt-24 grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <Reveal amount={0.18} distance={28}>
          <div>
            <span className="eyebrow">.story</span>
          </div>
        </Reveal>

        <Reveal delay={0.06} amount={0.18} distance={32}>
          <div>
            <h2 className="font-serif text-4xl leading-[1] text-mist sm:text-5xl lg:text-[3.7rem]">
              Editorial instincts with a cinematic lean.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#b7c8db] sm:text-lg">
              {aboutStory}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
