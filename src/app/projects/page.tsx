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
      <div
        className="relative overflow-hidden rounded-[44px] border border-white/10 px-6 py-10 shadow-[0_32px_120px_rgba(0,0,0,0.42)] sm:px-8 lg:px-10 lg:py-12"
        style={{
          background:
            "linear-gradient(180deg, rgba(3, 18, 39, 0.96), rgba(2, 16, 36, 0.98))"
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 16% 10%, rgba(84, 131, 179, 0.22), transparent 24%), radial-gradient(circle at 82% 14%, rgba(125, 160, 202, 0.14), transparent 24%), linear-gradient(160deg, rgba(193, 232, 255, 0.06), rgba(1, 22, 43, 0) 28%)"
          }}
        />
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
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#9fb5ca]">
            I help brands, artists, and story-led teams build motion pieces that
            feel elegant, emotionally clear, and cohesive across edit, sound, and
            design.
          </p>
        </Reveal>

        <div className="section-divider mt-24">
          <Reveal amount={0.18} distance={28}>
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#8fb2d4]">
                Click a category to open the work inside it.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <ExpandableProjectList items={projectCategories} />
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
        </div>
      </div>
    </section>
  );
}
