"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:pt-5">
      <div className="layout-shell">
        <div className="soft-shell rounded-[32px] px-5 py-4 sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              className="flex items-center gap-3 rounded-full px-2 py-2 transition duration-500 ease-out-expo hover:bg-[#d2dbeb]/35"
              href="/"
            >
              <span className="font-serif text-[1.4rem] tracking-[0.08em] text-abyss">
                .amelie
              </span>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link className="nav-cta hidden md:inline-flex" href="/contact">
              Let&apos;s Talk
            </Link>
          </div>

          <nav className="mt-3 flex gap-1 overflow-x-auto pb-1 md:hidden">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link whitespace-nowrap ${isActive ? "nav-link-active" : ""}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
