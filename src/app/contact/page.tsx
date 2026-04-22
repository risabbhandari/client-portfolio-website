import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact"
};

type ContactMethod = {
  href: string;
  icon: "email" | "linkedin";
  label: string;
  value: string;
};

const contactMethods: ContactMethod[] = [
  {
    href: "mailto:amelievillena@webster.edu",
    icon: "email",
    label: "Email",
    value: "amelievillena@webster.edu"
  },
  {
    href: "https://www.linkedin.com/in/amelie-villena/",
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/amelie-villena"
  }
];

function ContactIcon({ icon }: Pick<ContactMethod, "icon">) {
  if (icon === "linkedin") {
    return (
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#89c7ff]/28 bg-[linear-gradient(180deg,rgba(7,66,128,0.98),rgba(8,116,194,0.98))] text-white shadow-[0_14px_35px_rgba(7,66,128,0.28)]">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect height="18" rx="3.5" stroke="currentColor" strokeWidth="1.8" width="18" x="3" y="3" />
          <circle cx="8" cy="9" fill="currentColor" r="1.2" />
          <path
            d="M7.9 11.2v5.1M11.3 11.2v5.1m0-2.8c0-1.7.9-2.5 2.2-2.5 1.2 0 2 .8 2 2.4v2.9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d2dbeb]/18 bg-[rgba(210,219,235,0.08)] text-[#eef4fa]">
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect height="14" rx="2.5" width="18" x="3" y="5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <section className="layout-shell section-space pt-12">
      <div className="page-shell px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="relative z-10">
          <Reveal delay={0.05} amount={0.24} distance={38}>
            <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.92] text-mist sm:text-7xl lg:text-[6.1rem]">
              Contact
            </h1>
          </Reveal>

          <Reveal delay={0.1} amount={0.28} distance={34}>
            <div className="mt-8 max-w-3xl space-y-4 text-[1.14rem] leading-8 text-white">
              <p className="text-white">
                I am always open to new opportunities and collaborations.
                Whether you have a project in mind, want to discuss potential
                partnerships, or just want to say hello, feel free to reach
                out!
              </p>
              <p className="text-white">The best way to reach me is by email or LinkedIn.</p>
            </div>
          </Reveal>

          <Reveal delay={0.14} amount={0.2} distance={34}>
            <div className="mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <Link
                  className="flex items-center gap-5 rounded-[30px] border border-[#d2dbeb]/24 bg-[linear-gradient(145deg,rgba(210,219,235,0.24),rgba(148,162,191,0.14))] px-6 py-6 shadow-[0_20px_55px_rgba(1,22,43,0.14)] backdrop-blur-xl transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-[#eef4fa]/34 hover:bg-[linear-gradient(145deg,rgba(210,219,235,0.3),rgba(148,162,191,0.18))]"
                  href={method.href}
                  key={method.label}
                  rel="noreferrer"
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                >
                  <ContactIcon icon={method.icon} />
                  <div>
                    <p className="text-[0.82rem] text-white/88">
                      {method.label}
                    </p>
                    <p className="mt-2 text-[1.06rem] text-white sm:text-[1.14rem]">
                      {method.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
