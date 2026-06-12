import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Pawar | Full Stack Developer",
  description:
    "Full Stack Developer skilled in JavaScript, TypeScript, and Next.js. Portfolio showcasing projects, experience, and skills.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Akshay Pawar",
  ],
  authors: [{ name: "Akshay Pawar" }],
  openGraph: {
    title: "Akshay Pawar | Full Stack Developer",
    description:
      "Full Stack Developer skilled in JavaScript, TypeScript, and Next.js.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden bg-surface-950 font-sans text-neutral-300 antialiased selection:bg-accent-500 selection:text-white">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-surface-950" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
