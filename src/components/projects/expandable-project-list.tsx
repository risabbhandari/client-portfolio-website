"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { ProjectCategory } from "@/data/site";

type ExpandableProjectListProps = {
  items: ProjectCategory[];
};

type ProjectVideoEmbedProps = {
  className?: string;
  deferMountMs?: number;
  title: string;
  videoSource: string;
};

function getGoogleDriveEmbedUrl(videoSource: string) {
  try {
    const url = new URL(videoSource);
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const fileSegmentIndex = pathSegments.indexOf("d");

    if (fileSegmentIndex > -1 && pathSegments[fileSegmentIndex + 1]) {
      return `https://drive.google.com/file/d/${pathSegments[fileSegmentIndex + 1]}/preview`;
    }

    const queryId = url.searchParams.get("id");
    if (queryId) {
      return `https://drive.google.com/file/d/${queryId}/preview`;
    }
  } catch {
    if (/^[A-Za-z0-9_-]{20,}$/.test(videoSource)) {
      return `https://drive.google.com/file/d/${videoSource}/preview`;
    }
  }

  return null;
}

function getYouTubeEmbedUrl(videoSource: string) {
  try {
    const url = new URL(videoSource);

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace(/^\/+/, "");
      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
        : null;
    }

    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) {
        const videoId = url.pathname.split("/embed/")[1]?.split("/")[0];
        return videoId
          ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
          : null;
      }

      const videoId = url.searchParams.get("v");
      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
        : null;
    }
  } catch {
    if (/^[A-Za-z0-9_-]{11}$/.test(videoSource)) {
      return `https://www.youtube-nocookie.com/embed/${videoSource}?rel=0&modestbranding=1`;
    }
  }

  return null;
}

function getProjectVideoEmbedUrl(videoSource: string) {
  return (
    getGoogleDriveEmbedUrl(videoSource) ??
    getYouTubeEmbedUrl(videoSource) ??
    videoSource
  );
}

function ProjectVideoEmbed({
  className,
  deferMountMs = 0,
  title,
  videoSource
}: ProjectVideoEmbedProps) {
  const [isReady, setIsReady] = useState(deferMountMs === 0);

  useEffect(() => {
    if (deferMountMs === 0) {
      setIsReady(true);
      return;
    }

    setIsReady(false);

    const timeout = window.setTimeout(() => {
      setIsReady(true);
    }, deferMountMs);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [deferMountMs, videoSource]);

  return (
    <div className={className}>
      {isReady ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={getProjectVideoEmbedUrl(videoSource)}
          title={title}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(145deg,rgba(1,22,43,0.94),rgba(0,56,90,0.82))]"
        >
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_24%_18%,rgba(210,219,235,0.14),transparent_20%),linear-gradient(150deg,rgba(255,255,255,0.06),rgba(1,22,43,0)_30%)]" />
          <div className="absolute bottom-4 left-4 rounded-full border border-[#d2dbeb]/18 bg-[rgba(1,22,43,0.56)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#eef4fa]">
            Loading Preview
          </div>
        </div>
      )}
    </div>
  );
}

type ProjectCoverProps = {
  item: ProjectCategory;
};

function ProjectCover({ item }: ProjectCoverProps) {
  const featured = item.works.slice(0, 3);
  const primaryWork = featured[0];

  return (
    <div className="space-y-4">
      <ProjectVideoEmbed
        className="relative aspect-video overflow-hidden rounded-[24px]"
        title={`${item.title} featured video`}
        videoSource={primaryWork.videoSource}
      />

      <div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d2dbeb]">
            {item.subtitle}
          </p>
          <p className="mt-3 font-serif text-2xl leading-[0.96] text-[#f2f6fa]">
            {primaryWork.title}
          </p>
        </div>
      </div>
    </div>
  );
}

type ExpandedWorkCardProps = {
  work: ProjectCategory["works"][number];
};

function ExpandedWorkCard({ work }: ExpandedWorkCardProps) {
  return (
    <article
      className="rounded-[30px] border border-[#d2dbeb]/16 p-5 sm:p-6"
      style={{
        background:
          "linear-gradient(160deg, rgba(148, 162, 191, 0.14), rgba(1, 22, 43, 0.58))"
      }}
    >
      <ProjectVideoEmbed
        className="relative aspect-video overflow-hidden rounded-[24px]"
        deferMountMs={260}
        title={`${work.title} video`}
        videoSource={work.videoSource}
      />

      <div className="mt-5">
        <h3 className="font-serif text-3xl leading-[0.95] text-[#f1f7ff]">
          {work.title}
        </h3>
        <p className="mt-4 text-[1.06rem] leading-8 text-[#d2dbeb]">{work.note}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {work.deliverables.map((deliverable) => (
            <span
              className="rounded-full border border-[#d2dbeb]/14 bg-[rgba(210,219,235,0.08)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#dde6ef]"
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
  const accordionBackgrounds = [
    "linear-gradient(160deg, rgba(1, 22, 43, 0.98), rgba(0, 56, 90, 0.84))",
    "linear-gradient(160deg, rgba(0, 56, 90, 0.92), rgba(106, 144, 180, 0.34))",
    "linear-gradient(160deg, rgba(106, 144, 180, 0.54), rgba(1, 22, 43, 0.92))",
    "linear-gradient(160deg, rgba(148, 162, 191, 0.48), rgba(1, 22, 43, 0.9))",
    "linear-gradient(160deg, rgba(210, 219, 235, 0.28), rgba(0, 56, 90, 0.9))"
  ];
  const accordionGlows = [
    "radial-gradient(circle at 18% 16%, rgba(210, 219, 235, 0.1), transparent 20%), linear-gradient(150deg, rgba(210, 219, 235, 0.08), rgba(1, 22, 43, 0) 30%)",
    "radial-gradient(circle at 82% 18%, rgba(210, 219, 235, 0.12), transparent 18%), linear-gradient(150deg, rgba(210, 219, 235, 0.08), rgba(1, 22, 43, 0) 30%)",
    "radial-gradient(circle at 20% 18%, rgba(210, 219, 235, 0.12), transparent 18%), linear-gradient(150deg, rgba(210, 219, 235, 0.08), rgba(1, 22, 43, 0) 30%)",
    "radial-gradient(circle at 78% 16%, rgba(210, 219, 235, 0.12), transparent 18%), linear-gradient(150deg, rgba(210, 219, 235, 0.08), rgba(1, 22, 43, 0) 30%)",
    "radial-gradient(circle at 18% 16%, rgba(210, 219, 235, 0.14), transparent 18%), linear-gradient(150deg, rgba(210, 219, 235, 0.08), rgba(1, 22, 43, 0) 30%)"
  ];

  useEffect(() => {
    const syncOpenSectionWithHash = () => {
      const hash = window.location.hash.replace(/^#/, "");

      if (!hash) {
        return;
      }

      const matchingIndex = items.findIndex((item) => item.sectionId === hash);

      if (matchingIndex !== -1) {
        setOpenIndex(matchingIndex);
      }
    };

    syncOpenSectionWithHash();
    window.addEventListener("hashchange", syncOpenSectionWithHash);

    return () => {
      window.removeEventListener("hashchange", syncOpenSectionWithHash);
    };
  }, [items]);

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.section
            animate={{ borderColor: isOpen ? "rgba(210,219,235,0.22)" : "rgba(148,162,191,0.16)" }}
            className="relative scroll-mt-32 overflow-hidden rounded-[40px] border border-[#94a2bf]/16 p-5 shadow-[0_28px_90px_rgba(1,22,43,0.22)] sm:p-6 lg:p-8"
            id={item.sectionId}
            key={item.title}
            style={{ background: accordionBackgrounds[index % accordionBackgrounds.length] }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: accordionGlows[index % accordionGlows.length] }}
            />
            <div className="relative">
              <ProjectCover item={item} />

              <button
                aria-expanded={isOpen}
                className="mt-6 block w-full text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#94a2bf]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-5 max-w-4xl text-balance font-serif text-[2.5rem] leading-[0.94] text-mist sm:text-[3rem] lg:text-[3.45rem]">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="max-w-xl text-[1.06rem] leading-8 text-[#d2dbeb]">
                      {item.description}
                    </p>
                    <span
                      className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#d2dbeb]/18 bg-[rgba(255,255,255,0.08)]"
                    >
                      <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                        className="inline-flex items-center justify-center text-[1.7rem] leading-none text-[#eef4fa]"
                        style={{ transformOrigin: "50% 50%" }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      >
                        +
                      </motion.span>
                    </span>
                  </div>
                </div>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  initial={{ height: 0, opacity: 0, y: 10 }}
                  style={{ willChange: "height, opacity, transform" }}
                  transition={{
                    height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.24, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                >
                  <div className="mt-8 border-t border-[#d2dbeb]/16 pt-8">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#94a2bf]">
                        Selected Work
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            className="rounded-full border border-[#d2dbeb]/14 bg-[rgba(210,219,235,0.08)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#dde6ef]"
                            key={highlight}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                      {item.works.map((work) => (
                        <ExpandedWorkCard key={work.title} work={work} />
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
