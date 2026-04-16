import type { Metadata } from "next";
import Link from "next/link";

import { NitroProjectCard } from "@/components/projects/nitro-project-card";
import { Reveal } from "@/components/ui/reveal";
import { projectCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <Reveal amount={0.24} distance={34}>
        <span className="eyebrow">projects</span>
      </Reveal>

      <Reveal delay={0.05} amount={0.24} distance={38}>
        <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.2rem]">
          projects
        </h1>
      </Reveal>

      <Reveal delay={0.1} amount={0.28} distance={34}>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#9fb5ca]">
          I help brands, artists, and story-led teams build motion pieces that
          feel elegant, emotionally clear, and cohesive across edit, sound, and
          design.
        </p>
      </Reveal>

      <div className="section-divider mt-24">
        <Reveal amount={0.18} distance={28}>
          <span className="eyebrow">.clients</span>
        </Reveal>

        <div className="mt-10 space-y-7">
          {projectCategories.map((item, index) => (
            <Reveal
              amount={0.16}
              delay={index * 0.05}
              distance={40}
              key={item.title}
            >
              <NitroProjectCard index={index} item={item} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.18} amount={0.22} distance={34}>
        <div className="section-divider mt-28">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <span className="eyebrow">.say hello</span>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-[1] text-mist sm:text-5xl lg:text-[3.6rem]">
                i&apos;m open for freelance projects, feel free to email me to
                see how can we collaborate
              </h2>
              <div className="mt-8">
                <Link className="secondary-button" href="/contact">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
