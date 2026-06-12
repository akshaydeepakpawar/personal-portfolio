"use client";

import Image from "next/image";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 border-b border-neutral-900 pb-4 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={450}
                height={450}
                className="mb-6 rounded-xl"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3">
                <a
                  className="mr-2 inline-block cursor-pointer rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                  href={project.link}
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className="mr-2 inline-block cursor-pointer rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                  href={project.github}
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
