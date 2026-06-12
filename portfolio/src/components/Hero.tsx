"use client";

import Image from "next/image";
import {
  HERO_BADGE,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_DESCRIPTION,
  STATS,
} from "@/constants";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshaydeepakpawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/", label: "LinkedIn" },
  { icon: FaSquareXTwitter, href: "https://x.com/akshay_jsx", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/akshay_deepak_pawar/", label: "LeetCode" },
];

const fadeInUp = (delay: number) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.25, 0.25, 0, 1] as [number, number, number, number] },
  },
});

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Akshay_Pawar_Resume.pdf";
  link.click();
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.3]" />

      <div className="absolute left-8 top-1/3 hidden flex-col items-center gap-4 lg:flex">
        <div className="h-24 w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-lg p-2 text-neutral-500 transition-all duration-300 hover:text-accent-400"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              variants={fadeInUp(0)}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/[0.04] px-4 py-1.5 text-xs font-medium text-accent-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              {HERO_BADGE}
            </motion.div>

            <motion.h1
              variants={fadeInUp(0.1)}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {HERO_HEADLINE.split("&").map((part, i) => (
                <span key={i}>
                  {i > 0 && (
                    <>
                      <br />
                      <span className="text-gradient">&</span>
                    </>
                  )}
                  {part}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              {HERO_SUBHEADLINE}
            </motion.p>

            <motion.p
              variants={fadeInUp(0.25)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500"
            >
              {HERO_DESCRIPTION}
            </motion.p>

            <motion.div
              variants={fadeInUp(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]"
              >
                <FaDownload className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download Resume
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-accent-500/30 hover:bg-accent-500/[0.04] hover:text-white"
              >
                View Projects
                <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] px-6 py-3 text-sm font-medium text-neutral-500 transition-all duration-300 hover:border-accent-500/30 hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp(0.35)}
              initial="hidden"
              animate="visible"
              className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-hover glass rounded-xl px-3 py-3 text-center sm:px-4 sm:py-4"
                >
                  <div className="font-display text-lg font-bold text-white sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium text-neutral-500 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-500/30 via-purple-500/20 to-cyan-500/20 opacity-40 blur-2xl animate-float" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 to-transparent" />
                <Image
                  className="h-auto w-[300px] object-cover sm:w-[350px] md:w-[400px]"
                  src="/images/Hero.jpg"
                  alt="Akshay Pawar"
                  width={450}
                  height={450}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
