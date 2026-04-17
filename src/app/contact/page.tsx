import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { collaborationNotes, contactLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <div className="page-shell px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="relative z-10">
          <Reveal amount={0.24} distance={34}>
            <span className="eyebrow">contact</span>
          </Reveal>

          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.1rem]">
              contact
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#9fb5ca]">
              I&apos;m open to thoughtful collaborations across editing,
              narrative work, short films, sound design, and supporting visual
              assets.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal amount={0.18} distance={28}>
              <div className="blue-panel blue-panel-muted h-full px-8 py-10">
                <span className="eyebrow">.reach out</span>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={32}>
              <div className="blue-panel blue-panel-frost px-8 py-10">
                <h2 className="max-w-4xl font-serif text-4xl leading-[1] text-mist sm:text-5xl lg:text-[3.7rem]">
                  Best reached by email, with socials close behind.
                </h2>
                <div className="mt-10 space-y-4">
                  {contactLinks.map((link, index) => (
                    <Link
                      className="blue-list-card flex items-center justify-between gap-6 px-6 py-5 transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-white/20"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      style={{
                        background:
                          index % 2 === 0
                            ? "linear-gradient(145deg, rgba(5, 38, 89, 0.68), rgba(2, 16, 36, 0.72))"
                            : "linear-gradient(145deg, rgba(84, 131, 179, 0.26), rgba(2, 16, 36, 0.72))"
                      }}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      <span className="text-xs uppercase tracking-[0.3em] text-[#7da0ca]">
                        {link.label}
                      </span>
                      <span className="text-base text-[#eef6ff] sm:text-lg">
                        {link.value}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Link className="primary-button" href="mailto:amelievillena@webster.edu">
                    Email Amelie
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="section-divider mt-24 grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal amount={0.18} distance={28}>
              <div className="blue-panel blue-panel-surface h-full px-8 py-10">
                <span className="eyebrow">.working together</span>
              </div>
            </Reveal>

            <Reveal delay={0.06} amount={0.18} distance={32}>
              <div className="blue-panel blue-panel-deep px-8 py-10">
                <h2 className="font-serif text-4xl leading-[1] text-mist sm:text-5xl lg:text-[3.7rem]">
                  Calm communication, clear direction, polished delivery.
                </h2>

                <div className="mt-8 space-y-4">
                  {collaborationNotes.map((note, index) => (
                    <div
                      className="blue-list-card px-6 py-5"
                      key={note}
                      style={{
                        background:
                          index === 1
                            ? "linear-gradient(145deg, rgba(106, 144, 180, 0.3), rgba(2, 16, 36, 0.74))"
                            : "linear-gradient(145deg, rgba(5, 38, 89, 0.62), rgba(2, 16, 36, 0.72))"
                      }}
                    >
                      <p className="relative text-base leading-8 text-[#c1d3e5]">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
