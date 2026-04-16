import Link from "next/link";

import { navigationItems } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-12 sm:pb-10">
      <div className="layout-shell">
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-serif text-3xl text-mist">.amelie</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#8eaac3] sm:items-end">
              <div className="flex flex-wrap gap-4">
                {navigationItems.map((item) => (
                  <Link
                    className="transition duration-500 ease-out-expo hover:text-[#edf6ff]"
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
