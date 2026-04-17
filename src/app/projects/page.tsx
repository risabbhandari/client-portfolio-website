import type { Metadata } from "next";
import Link from "next/link";

import { ExpandableProjectList } from "@/components/projects/expandable-project-list";
import { Reveal } from "@/components/ui/reveal";
import { projectCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <div className="page-shell px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="relative z-10">
          <Reveal amount={0.24} distance={34}>
            <span className="eyebrow">projects</span>
          </Reveal>

          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.2rem]">
              projects
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <div className="blue-panel blue-panel-surface mt-8 max-w-4xl px-8 py-8">
              <p className="max-w-3xl text-lg leading-8 text-[#d2dbeb]">
                I help brands, artists, and story-led teams build motion pieces
                that feel elegant, emotionally clear, and cohesive across edit,
                sound, and design.
              </p>
            </div>
          </Reveal>

          <div className="section-divider mt-24">
            <Reveal amount={0.18} distance={28}>
              <div className="blue-panel blue-panel-muted max-w-3xl px-8 py-8">
                <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#eef4fa]">
                  Click a category to open the work inside it.
                </p>
              </div>
            </Reveal>

            <div className="mt-10">
              <ExpandableProjectList items={projectCategories} />
            </div>
          </div>

          <Reveal delay={0.18} amount={0.22} distance={34}>
            <div className="blue-panel blue-panel-frost mt-28 px-8 py-10 xl:px-10 xl:py-12">
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
        </div>
      </div>
    </section>
  );
}
