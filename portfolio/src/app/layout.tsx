import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaypawar.dev"),
  title: "Akshay Pawar | Full-Stack Developer & Next.js Specialist",
  description:
    "Computer Science graduate and Full-Stack Developer specializing in Next.js, TypeScript, PostgreSQL, and AI-powered applications. 400+ LeetCode problems solved.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "AI Applications",
    "Portfolio",
    "Akshay Pawar",
    "Software Engineer",
    "Web Developer",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Akshay Pawar" }],
  creator: "Akshay Pawar",
  openGraph: {
    title: "Akshay Pawar | Full-Stack Developer & Next.js Specialist",
    description:
      "Computer Science graduate building AI-powered full-stack applications with Next.js, TypeScript, and PostgreSQL.",
    url: "https://akshaypawar.dev",
    siteName: "Akshay Pawar Portfolio",
    images: [
      {
        url: "/images/Hero.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay Pawar - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Pawar | Full-Stack Developer & Next.js Specialist",
    description:
      "Computer Science graduate building AI-powered full-stack applications with Next.js, TypeScript, and PostgreSQL.",
    images: ["/images/Hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay Pawar",
  url: "https://akshaypawar.dev",
  image: "/images/Hero.jpg",
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Terna Engineering College",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Node.js",
    "AI Integration",
  ],
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden bg-surface-950 font-sans text-neutral-300 antialiased selection:bg-accent-500 selection:text-white">
        {/* Dynamic background with animated particles */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-950 to-surface-950">
            <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px] animate-pulse-glow" />
            <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px] animate-float" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-glow" />
          </div>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500" />
        </div>}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}