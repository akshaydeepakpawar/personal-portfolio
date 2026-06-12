"use client";

import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-accent-500/50 via-purple-500/30 to-transparent" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-8 pl-12 last:mb-0"
            >
              <div className="absolute left-[11px] top-1 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-surface-950">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              </div>

              <div className="glass glass-hover rounded-xl p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-300">
                    <FaBriefcase className="h-3 w-3" />
                    {experience.year}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {experience.company}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-3 leading-relaxed text-neutral-400">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {experience.cretificate && (
                  <a
                    href={experience.cretificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-400 transition-colors hover:text-accent-300"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="h-2.5 w-2.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
