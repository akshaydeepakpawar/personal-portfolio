"use client";

import Image from "next/image";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${
        isFeatured
          ? "lg:col-span-2"
          : ""
      }`}
    >
      <div
        className={`glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.15)] ${
          isFeatured ? "hover:-translate-y-1" : "h-full hover:-translate-y-1"
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "aspect-[21/9] sm:aspect-[3/1]" : "aspect-video"
          }`}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-950/80 via-surface-950/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-accent-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {isFeatured && (
            <div className="absolute left-4 top-4 z-20 rounded-full bg-accent-500/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-accent-300 border border-accent-500/30">
              Featured Project
            </div>
          )}
        </div>

        <div className={`${isFeatured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
          <h3
            className={`font-display font-bold text-white ${
              isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-2 leading-relaxed text-neutral-400 ${
              isFeatured ? "text-base" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          <div
            className={`mt-4 grid gap-2 ${
              isFeatured
                ? "sm:grid-cols-2"
                : ""
            }`}
          >
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-xs text-neutral-500"
              >
                <FaCheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-accent-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-neutral-400 transition-colors hover:bg-accent-500/10 hover:text-accent-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-white/[0.04] pt-5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-medium transition-all duration-300 ${
                isFeatured
                  ? "rounded-xl bg-accent-500 px-5 py-2.5 text-sm text-white hover:bg-accent-600 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
                  : "text-xs text-accent-400 hover:text-accent-300"
              }`}
            >
              <FaExternalLinkAlt className="h-3 w-3" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 transition-all duration-300 hover:text-white"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <motion.section
      id="projects"
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
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProjectCard project={featured} index={0} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
