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
          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.2rem]">
              Projects
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <p className="mt-8 max-w-3xl text-[1.14rem] leading-8 text-white">
              A selection of work across editing, film, and visual
              storytelling, exploring different formats and styles through a
              range of projects.
            </p>
          </Reveal>

          <div className="section-divider mt-14">
            <div className="mt-10">
              <ExpandableProjectList items={projectCategories} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
