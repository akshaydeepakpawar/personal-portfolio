"use client";

import Image from "next/image";
import { Hero_content } from "@/constants";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const fadeInUp = (delay: number) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
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
    <section className="relative flex min-h-screen items-center pt-24">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={fadeInUp(0)}
            initial="hidden"
            animate="visible"
            className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium text-accent-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeInUp(0.1)}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Akshay
            <br />
            <span className="text-gradient">Pawar</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg font-medium text-neutral-400 sm:text-xl"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-4 max-w-lg leading-relaxed text-neutral-500"
          >
            {Hero_content}
          </motion.p>

          <motion.div
            variants={fadeInUp(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]"
            >
              <FaDownload className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Resume
            </button>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-accent-500/30 hover:bg-accent-500/5 hover:text-white"
            >
              View Projects
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent-500/30 via-purple-500/20 to-cyan-500/20 opacity-50 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                className="h-auto w-[320px] object-cover sm:w-[380px] md:w-[420px]"
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
    </section>
  );
};

export default Hero;
