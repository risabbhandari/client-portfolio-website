import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Me"
};

const aboutDescription = [
  "Film, Television, and Video Production student at Webster University with a strong interest in film and video editing. Through academic training and creative projects, I have developed experience in post-production using industry-standard software, including Adobe Premiere Pro, DaVinci Resolve, and Adobe Photoshop.",
  "Focused on strengthening technical editing skills and building a cohesive portfolio of film and video projects. My work reflects attention to detail, a commitment to visual storytelling, and continuous growth in both creative and technical areas."
];

type SkillIconName =
  | "film-editing"
  | "video-editing"
  | "post-production"
  | "premiere"
  | "davinci"
  | "photoshop"
  | "content-creation"
  | "visual-storytelling"
  | "attention-to-detail"
  | "cinematography"
  | "creative-projects"
  | "film-production";

type Skill = {
  label: string;
  icon: SkillIconName;
};

const skills: Skill[] = [
  { label: "Adobe Premiere Pro", icon: "premiere" },
  { label: "DaVinci Resolve", icon: "davinci" },
  { label: "Adobe Photoshop", icon: "photoshop" },
  { label: "Film Editing", icon: "film-editing" },
  { label: "Video Editing", icon: "video-editing" },
  { label: "Post-Production", icon: "post-production" },
  { label: "Content Creation", icon: "content-creation" },
  { label: "Visual Storytelling", icon: "visual-storytelling" },
  { label: "Attention to Detail", icon: "attention-to-detail" },
  { label: "Cinematography", icon: "cinematography" },
  { label: "Creative Projects", icon: "creative-projects" },
  { label: "Film Production", icon: "film-production" }
];

function SkillIcon({ icon }: { icon: SkillIconName }) {
  if (icon === "premiere") {
    return (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c7b5ff]/28 bg-[linear-gradient(180deg,rgba(23,12,47,0.98),rgba(49,21,107,0.98))] font-semibold tracking-[-0.04em] text-[#d9c7ff]">
        Pr
      </span>
    );
  }

  if (icon === "photoshop") {
    return (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#89cfff]/28 bg-[linear-gradient(180deg,rgba(7,25,48,0.98),rgba(5,54,99,0.98))] font-semibold tracking-[-0.04em] text-[#8fd3ff]">
        Ps
      </span>
    );
  }

  if (icon === "davinci") {
    return (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d2dbeb]/18 bg-[rgba(255,255,255,0.08)] text-[#eef4fa]">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="16" fill="rgba(255,255,255,0.08)" r="14" />
          <path
            d="M16 5.5c2.6 0 4.7 2.1 4.7 4.7S18.6 15 16 15s-4.7-2.1-4.7-4.8S13.4 5.5 16 5.5Z"
            fill="#43d4ff"
          />
          <path
            d="M10.3 14.5c2.3 0 4.2 1.8 4.2 4.2S12.6 23 10.3 23s-4.3-1.9-4.3-4.3 1.9-4.2 4.3-4.2Z"
            fill="#fff8ad"
          />
          <path
            d="M21.7 14.5c2.4 0 4.3 1.8 4.3 4.2S24.1 23 21.7 23s-4.2-1.9-4.2-4.3 1.9-4.2 4.2-4.2Z"
            fill="#ff8f74"
          />
          <path
            d="M13.1 11.4 11.7 16m7.2-4.6 1.4 4.6m-7.3 3.1h6.1"
            stroke="#0c2036"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d2dbeb]/18 bg-[rgba(210,219,235,0.08)] text-[#eef4fa]">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        {icon === "film-editing" ? (
          <>
            <rect height="14" rx="2.5" width="16" x="4" y="5" />
            <path d="M8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4" />
          </>
        ) : null}

        {icon === "video-editing" ? (
          <>
            <rect height="12" rx="2.5" width="14" x="3" y="6" />
            <path d="m11 10 4 2-4 2v-4Zm6-1 4-2v10l-4-2" />
          </>
        ) : null}

        {icon === "post-production" ? (
          <>
            <path d="M6 6v12M12 9v9M18 4v14" />
            <circle cx="6" cy="10" fill="currentColor" r="1.5" stroke="none" />
            <circle cx="12" cy="14" fill="currentColor" r="1.5" stroke="none" />
            <circle cx="18" cy="8" fill="currentColor" r="1.5" stroke="none" />
          </>
        ) : null}

        {icon === "content-creation" ? (
          <>
            <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
            <circle cx="12" cy="12" r="3.5" />
          </>
        ) : null}

        {icon === "visual-storytelling" ? (
          <>
            <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
            <circle cx="12" cy="12" r="2.5" />
          </>
        ) : null}

        {icon === "attention-to-detail" ? (
          <>
            <circle cx="11" cy="11" r="5.5" />
            <path d="M15.2 15.2 20 20M11 8.5v5M8.5 11H13.5" />
          </>
        ) : null}

        {icon === "cinematography" ? (
          <>
            <rect height="9" rx="2" width="12" x="5" y="9" />
            <path d="m17 11 4-2v8l-4-2M8 9l1.5-3h3L14 9M7 6h2" />
          </>
        ) : null}

        {icon === "creative-projects" ? (
          <>
            <path d="m12 4 1.8 3.9L18 9l-3 2.9.7 4.1-3.7-2-3.7 2 .7-4.1L6 9l4.2-1.1L12 4Z" />
          </>
        ) : null}

        {icon === "film-production" ? (
          <>
            <path d="M4 9.5h16V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.5Zm0-4.5h16v4.5H4zM7 5l2.5 4.5M12 5l2.5 4.5M17 5l2.5 4.5" />
          </>
        ) : null}
      </svg>
    </span>
  );
}

function SkillCard({
  label,
  icon
}: {
  label: string;
  icon: SkillIconName;
}) {
  return (
    <div className="rounded-[24px] border border-[#d2dbeb]/14 bg-[rgba(255,255,255,0.06)] px-4 py-4">
      <div className="flex items-center gap-4">
        <SkillIcon icon={icon} />
        <p className="text-sm uppercase tracking-[0.18em] text-[#eef4fa] sm:text-[0.82rem]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <div className="page-shell px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="relative z-10">
          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.1rem]">
              About Me
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#ced8e4]">
              Film, television, and video production student focused on editing,
              post-production, and visual storytelling.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            <Reveal amount={0.18} distance={28}>
              <div className="blue-panel blue-panel-surface overflow-hidden p-3 sm:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                  <Image
                    alt="Portfolio visual"
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    src="/background-pic.webp"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={34}>
              <div className="blue-panel blue-panel-frost px-8 py-8 sm:px-10 sm:py-10">
                <div className="space-y-6">
                  {aboutDescription.map((paragraph) => (
                    <p
                      className="text-base leading-8 text-[#eef4fa] sm:text-lg"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} amount={0.18} distance={30}>
            <div className="section-divider mt-16">
              <div className="blue-panel blue-panel-muted px-8 py-8 sm:px-10 sm:py-10">
                <h2 className="font-serif text-4xl leading-[0.98] text-mist sm:text-5xl">
                  Skills
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {skills.map((skill) => (
                    <SkillCard
                      icon={skill.icon}
                      key={skill.label}
                      label={skill.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} amount={0.18} distance={24}>
            <div className="mt-12">
              <Link className="secondary-button" href="/contact">
                Contact Me
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
