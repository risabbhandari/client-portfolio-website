import Link from "next/link";

import { navigationItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-8 pt-12 sm:pb-10">
      <div className="layout-shell">
        <div className="blue-panel blue-panel-surface px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-serif text-3xl text-mist">.amélie</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#c6d3e0] sm:items-end">
              <div className="flex flex-wrap gap-4">
                {navigationItems.map((item) => (
                  <Link
                    className="transition duration-500 ease-out-expo hover:text-[#f5f8fb]"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
