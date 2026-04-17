"use client";

import Link from "next/link";

import { NitroProjectCard } from "@/components/projects/nitro-project-card";
import { ProjectStackScene } from "@/components/projects/project-stack-scene";
import { Reveal } from "@/components/ui/reveal";
import {
  aboutPhilosophy,
  contactLinks,
  heroLines,
  projectPreview
} from "@/data/site";

export function HomeStackedShowcase() {
  return (
    <>
      <section className="layout-shell pt-8 sm:pt-12 lg:hidden">
        <div className="blue-panel blue-panel-deep flex min-h-[72svh] flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
          <Reveal amount={0.24} distance={36}>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#c3d6e8]">
              <span className="text-mist">Hey, I&apos;m Amelie</span>
            </div>
          </Reveal>

          <Reveal delay={0.06} amount={0.24} distance={42}>
            <div className="mt-10 space-y-2">
              <p className="text-[0.92rem] uppercase tracking-[0.3em] text-[#94a2bf]">
                creative portfolio
              </p>
              <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[0.9] text-mist sm:text-6xl">
                {heroLines[0]}
              </h1>
              <p className="font-serif text-4xl leading-[0.94] text-[#eef3f8] sm:text-5xl">
                {heroLines[1]}
              </p>
              <p className="font-serif text-4xl leading-[0.94] text-[#c8d4e2] sm:text-5xl">
                {heroLines[2]}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-5">
          {projectPreview.map((item, index) => (
            <Reveal amount={0.18} delay={index * 0.08} distance={44} key={item.title}>
              <NitroProjectCard index={index} item={item} mode="home" />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal amount={0.18} distance={30}>
            <div className="blue-panel blue-panel-mist px-6 py-8 sm:px-8 sm:py-10">
              <span className="eyebrow">.about</span>
              <p className="mt-8 max-w-4xl font-serif text-3xl leading-[1.08] text-mist sm:text-4xl">
                {aboutPhilosophy}
              </p>
              <div className="mt-10">
                <Link className="secondary-button" href="/about-me">
                  About Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} amount={0.18} distance={28}>
          <div className="blue-panel blue-panel-surface mt-24 px-6 py-8 sm:px-8 sm:py-10">
            <span className="eyebrow">.say hello</span>
            <h2 className="mt-7 max-w-3xl font-serif text-4xl leading-[1] text-mist sm:text-5xl">
              i&apos;m open for freelance projects, feel free to email me to see
              how can we collaborate
            </h2>
            <div className="mt-8">
              <Link className="secondary-button" href={contactLinks[0]?.href ?? "/contact"}>
                Contact Me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="layout-shell hidden pt-12 lg:block">
        <ProjectStackScene
          items={projectPreview}
          entryOffset={920}
          leadIn={0.14}
          mode="home"
          sceneHeightPerItem={132}
          overlay={
            <div className="blue-panel blue-panel-deep flex min-h-[calc(100svh-7.25rem)] max-w-[72rem] flex-col justify-between px-8 py-10 xl:px-10 xl:py-12">
              <div>
                <Reveal amount={0.3} distance={32}>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#c3d6e8]">
                    <span className="text-mist">Hey, I&apos;m Amelie</span>
                  </div>
                </Reveal>

                <Reveal delay={0.06} amount={0.3} distance={40}>
                  <div className="mt-10 max-w-6xl space-y-3">
                    <p className="text-[0.94rem] uppercase tracking-[0.32em] text-[#94a2bf]">
                      creative portfolio
                    </p>
                    <h1 className="max-w-6xl text-balance font-serif text-[5.7rem] leading-[0.9] text-mist xl:text-[6.8rem]">
                      {heroLines[0]}
                    </h1>
                    <p className="font-serif text-[4.85rem] leading-[0.92] text-[#eef3f8] xl:text-[5.55rem]">
                      {heroLines[1]}
                    </p>
                    <p className="font-serif text-[4.85rem] leading-[0.92] text-[#c8d4e2] xl:text-[5.55rem]">
                      {heroLines[2]}
                    </p>
                  </div>
                </Reveal>
              </div>

             
            </div>
          }
        />

        <div className="section-space pt-16">
          <div className="grid gap-10 xl:grid-cols-[0.42fr_0.58fr]">
            <Reveal amount={0.18} distance={32}>
              <div className="blue-panel blue-panel-mist h-full px-8 py-10">
                <span className="eyebrow">.about</span>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={36}>
              <div className="blue-panel blue-panel-frost px-8 py-10">
                <p className="max-w-4xl font-serif text-[2.45rem] leading-[1.05] text-mist xl:text-[3.2rem]">
                  {aboutPhilosophy}
                </p>
                <div className="mt-10">
                  <Link className="secondary-button" href="/about-me">
                    About Me
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} amount={0.18} distance={34}>
            <div className="blue-panel blue-panel-surface mt-28 px-8 py-10 xl:px-10 xl:py-12">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
                <div>
                  <span className="eyebrow">.say hello</span>
                </div>

                <div>
                  <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] text-mist xl:text-[5.8rem]">
                    i&apos;m open for freelance projects, feel free to email me
                    to see how can we collaborate
                  </h2>
                  <div className="mt-10">
                    <Link
                      className="secondary-button"
                      href={contactLinks[0]?.href ?? "/contact"}
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
