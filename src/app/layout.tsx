import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { Navbar } from "@/components/navigation/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amelie | Motion-Led Creative Portfolio",
    template: "%s | Amelie"
  },
  description:
    "A premium portfolio for motion-led storytelling, short-form content, short films, sound design, and graphic assets."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-8">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

