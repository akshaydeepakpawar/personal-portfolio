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
    <html lang="en">
      <body className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">{children}</div>
      </body>
    </html>
  );
}
