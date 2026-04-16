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
        <div className="flex min-h-[72svh] flex-col justify-between">
          <Reveal amount={0.24} distance={36}>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#c3d6e8]">
              <span className="text-[#eef6ff]">Hey, I&apos;m Amelie</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[0.72rem] uppercase tracking-[0.26em] text-[#a9c2d8]">
                available for new projects
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06} amount={0.24} distance={42}>
            <div className="mt-10 space-y-2">
              <p className="text-[0.92rem] uppercase tracking-[0.3em] text-[#7da0ca]">
                creative portfolio
              </p>
              <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[0.9] text-mist sm:text-6xl">
                {heroLines[0]}
              </h1>
              <p className="font-serif text-4xl leading-[0.94] text-[#dfe9f4] sm:text-5xl">
                {heroLines[1]}
              </p>
              <p className="font-serif text-4xl leading-[0.94] text-[#9eb9d4] sm:text-5xl">
                {heroLines[2]}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} amount={0.24} distance={36}>
            <p className="mt-12 max-w-2xl text-base leading-8 text-[#b8cade]">
              Amelie creates short-form edits, narrative films, sound-led
              storytelling, and polished visual assets with a calm, premium
              rhythm.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-5">
          {projectPreview.map((item, index) => (
            <Reveal amount={0.18} delay={index * 0.08} distance={44} key={item.title}>
              <NitroProjectCard index={index} item={item} mode="home" />
            </Reveal>
          ))}
        </div>

        <div className="section-divider mt-24">
          <Reveal amount={0.18} distance={30}>
            <span className="eyebrow">.about</span>
          </Reveal>
          <Reveal delay={0.06} amount={0.18} distance={36}>
            <p className="mt-8 max-w-4xl font-serif text-3xl leading-[1.08] text-mist sm:text-4xl">
              {aboutPhilosophy}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} amount={0.18} distance={36}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="image-panel" />
            <div className="image-panel" />
          </div>
        </Reveal>

        <Reveal delay={0.14} amount={0.18} distance={28}>
          <div className="section-divider mt-24">
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
          entryOffset={1220}
          leadIn={0.28}
          mode="home"
          sceneHeightPerItem={146}
          overlay={
            <div className="flex min-h-[calc(100svh-7.25rem)] flex-col justify-between pt-8">
              <div>
                <Reveal amount={0.3} distance={32}>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#c3d6e8]">
                    <span className="text-[#eef6ff]">Hey, I&apos;m Amelie</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.72rem] uppercase tracking-[0.26em] text-[#a9c2d8]">
                      available for new projects
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.06} amount={0.3} distance={40}>
                  <div className="mt-10 max-w-6xl space-y-3">
                    <p className="text-[0.94rem] uppercase tracking-[0.32em] text-[#7da0ca]">
                      creative portfolio
                    </p>
                    <h1 className="max-w-6xl text-balance font-serif text-[5.7rem] leading-[0.9] text-mist xl:text-[6.8rem]">
                      {heroLines[0]}
                    </h1>
                    <p className="font-serif text-[4.85rem] leading-[0.92] text-[#dfe9f4] xl:text-[5.55rem]">
                      {heroLines[1]}
                    </p>
                    <p className="font-serif text-[4.85rem] leading-[0.92] text-[#9eb9d4] xl:text-[5.55rem]">
                      {heroLines[2]}
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.12} amount={0.28} distance={32}>
                <div className="grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
                  <p className="max-w-2xl text-lg leading-8 text-[#b8cade]">
                    Amelie creates short-form edits, narrative films, sound-led
                    storytelling, and polished visual assets with a calm,
                    premium rhythm.
                  </p>

                  <p className="max-w-md text-base leading-8 text-[#8ea8c3]">
                    Creative lanes across editing, cinematic storytelling,
                    sound, and design support. Built to feel minimal, elegant,
                    and precise.
                  </p>
                </div>
              </Reveal>
            </div>
          }
        />

        <div className="section-space pt-16">
          <div className="grid gap-10 xl:grid-cols-[0.42fr_0.58fr]">
            <Reveal amount={0.18} distance={32}>
              <div>
                <span className="eyebrow">.about</span>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={36}>
              <div>
                <p className="max-w-4xl font-serif text-[2.45rem] leading-[1.05] text-mist xl:text-[3.2rem]">
                  {aboutPhilosophy}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr_auto]">
            <Reveal amount={0.18} distance={36}>
              <div className="image-panel h-[380px]" />
            </Reveal>
            <Reveal delay={0.06} amount={0.18} distance={36}>
              <div className="image-panel h-[380px]" />
            </Reveal>
            <Reveal delay={0.1} amount={0.18} distance={28}>
              <div className="flex items-end justify-start lg:justify-end">
                <Link className="secondary-button" href="/about-me">
                  About Me
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} amount={0.18} distance={34}>
            <div className="section-divider mt-28">
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
