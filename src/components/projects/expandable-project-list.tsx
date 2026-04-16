"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { ProjectCategory } from "@/data/site";

type ExpandableProjectListProps = {
  items: ProjectCategory[];
};

type ProjectCoverProps = {
  item: ProjectCategory;
};

function ProjectCover({ item }: ProjectCoverProps) {
  const featured = item.works.slice(0, 3);

  return (
    <div
      className="relative h-[320px] overflow-hidden rounded-[32px] border border-white/10 sm:h-[360px]"
      style={{ backgroundImage: item.visual.base }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(1,22,43,0.12),rgba(1,22,43,0.58))]" />
      <div
        className="pointer-events-none absolute left-[10%] top-[12%] h-36 w-36 rounded-full blur-3xl"
        style={{ backgroundColor: item.visual.glow }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,255,255,0.16),transparent_16%),radial-gradient(circle_at_28%_72%,rgba(255,255,255,0.08),transparent_18%)]" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#eff7ff]">
            {item.subtitle}
          </span>
          <span className="text-[0.72rem] uppercase tracking-[0.3em] text-[#dbe8f4]">
            {item.year}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {featured.map((work, index) => (
            <div
              className={`rounded-[24px] border border-white/12 bg-[rgba(2,16,36,0.42)] p-4 backdrop-blur-md ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
              key={work.title}
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#cfe3f6]">
                {work.client}
              </p>
              <p className="mt-4 font-serif text-2xl leading-[0.95] text-[#f1f7ff]">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ExpandedWorkCardProps = {
  item: ProjectCategory;
  work: ProjectCategory["works"][number];
};

function ExpandedWorkCard({ item, work }: ExpandedWorkCardProps) {
  return (
    <article className="rounded-[30px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
      <div
        className="relative h-[220px] overflow-hidden rounded-[24px] border border-white/10"
        style={{ backgroundImage: item.visual.base }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(1,22,43,0.18),rgba(1,22,43,0.62))]" />
        <div
          className="absolute inset-x-[18%] top-8 h-24 rounded-full blur-3xl"
          style={{ backgroundColor: item.visual.glow }}
        />
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.06)] px-3 py-1.5 text-[0.64rem] uppercase tracking-[0.22em] text-[#eff7ff]">
              {work.format}
            </span>
            <span className="text-[0.66rem] uppercase tracking-[0.26em] text-[#d6e6f6]">
              {work.year}
            </span>
          </div>
          <p className="max-w-[14rem] font-serif text-3xl leading-[0.95] text-[#f1f7ff]">
            {work.title}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#7da0ca]">
          {work.client}
        </p>
        <p className="mt-4 text-base leading-8 text-[#c4d3e2]">{work.note}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {work.deliverables.map((deliverable) => (
            <span
              className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#d7e6f6]"
              key={deliverable}
            >
              {deliverable}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ExpandableProjectList({ items }: ExpandableProjectListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.section
            animate={{ borderColor: isOpen ? "rgba(193,232,255,0.18)" : "rgba(255,255,255,0.08)" }}
            className="floating-card rounded-[40px] border p-5 sm:p-6 lg:p-8"
            key={item.title}
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              aria-expanded={isOpen}
              className="block w-full text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <ProjectCover item={item} />

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#7da0ca]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 max-w-4xl text-balance font-serif text-[2.5rem] leading-[0.94] text-mist sm:text-[3rem] lg:text-[3.45rem]">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-xl text-[1rem] leading-8 text-[#c4d3e2]">
                    {item.description}
                  </p>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] text-2xl text-[#eaf4ff]"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    +
                  </motion.span>
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#8fb2d4]">
                        selected work
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#d7e6f6]"
                            key={highlight}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                      {item.works.map((work) => (
                        <ExpandedWorkCard item={item} key={work.title} work={work} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.section>
        );
      })}
    </div>
  );
}
