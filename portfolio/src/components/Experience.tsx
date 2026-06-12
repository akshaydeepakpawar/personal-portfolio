"use client";

import { JOURNEY } from "@/constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode, FaComments, FaChartLine, FaBriefcase } from "react-icons/fa";
import type { IconType } from "react-icons";

const journeyIcons: IconType[] = [
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaComments,
  FaChartLine,
  FaBriefcase,
];

const Experience = () => {
  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-padding"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        My <span className="text-gradient">Journey</span>
      </motion.h2>

      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-accent-500/50 via-purple-500/30 via-cyan-500/20 to-transparent" />

          {JOURNEY.map((entry, index) => {
            const Icon = journeyIcons[index] || FaCode;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 pl-14 last:mb-0"
              >
                <div className="absolute left-[15px] top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-surface-950">
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-accent-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                    <Icon className="h-1.5 w-1.5 text-white" />
                  </div>
                </div>

                <div className="group glass glass-hover rounded-xl p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300">
                      {entry.year}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {entry.title}
                  </h3>

                  <p className="mt-0.5 text-sm text-accent-400/80">
                    {entry.subtitle}
                  </p>

                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
