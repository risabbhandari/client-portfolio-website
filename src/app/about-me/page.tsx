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
      <div className="page-shell px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="relative z-10">
          <Reveal amount={0.24} distance={34}>
            <span className="eyebrow">about me</span>
          </Reveal>

          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.1rem]">
              about me
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#ced8e4]">
              A multidisciplinary creative practice shaped by cinematic pacing,
              subtle finish, and collaboration that feels thoughtful without being
              heavy.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <Reveal amount={0.18} distance={28}>
              <div className="blue-panel blue-panel-deep h-full px-6 py-8 sm:px-8 sm:py-10">
                <div className="space-y-5">
                  {aboutFacts.map((fact) => (
                    <div className="pb-5" key={fact.label}>
                      <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#94a2bf]">
                        {fact.label}
                      </p>
                      <p className="mt-3 max-w-xs text-base leading-8 text-[#d2dbeb]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={34}>
              <div className="blue-panel blue-panel-frost px-8 py-10">
                <p className="max-w-4xl font-serif text-[2.3rem] leading-[1.05] text-mist sm:text-[2.8rem] lg:text-[3.3rem]">
                  {aboutPhilosophy}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr_auto]">
            <Reveal amount={0.18} distance={36}>
              <div className="blue-panel blue-panel-surface h-[360px] px-8 py-10">
                <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#d2dbeb]">
                  editorial
                </p>
                <p className="mt-6 max-w-sm font-serif text-4xl leading-[0.98] text-mist">
                  Pace, tone, and restraint that still feel expressive.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06} amount={0.18} distance={36}>
              <div className="blue-panel blue-panel-mist h-[360px] px-8 py-10">
                <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#eef4fa]">
                  collaboration
                </p>
                <p className="mt-6 max-w-sm font-serif text-4xl leading-[0.98] text-mist">
                  Structured feedback, clear direction, and polished delivery.
                </p>
              </div>
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
              <div className="blue-panel blue-panel-muted h-full px-8 py-10">
                <span className="eyebrow">.story</span>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={32}>
              <div className="blue-panel blue-panel-surface px-8 py-10">
                <h2 className="font-serif text-4xl leading-[1] text-mist sm:text-5xl lg:text-[3.7rem]">
                  Editorial instincts with a cinematic lean.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#d2dbeb] sm:text-lg">
                  {aboutStory}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
