"use client";

import Image from "next/image";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.2)]"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-400 transition-colors hover:text-accent-300"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
                >
                  <FaGithub className="h-3 w-3" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
