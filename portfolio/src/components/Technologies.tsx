"use client";

import { SKILLS } from "@/constants";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  MongoDB: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  Docker: FaDocker,
  Git: FaGitAlt,
  "C++": SiCplusplus,
  Python: FaPython,
};

const Technologies = () => {
  return (
    <section id="skills" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Skills &amp; <span className="text-gradient">Technologies</span>
      </motion.h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((skill, index) => {
          const Icon = iconMap[skill.name];
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass glass-hover rounded-xl p-4 text-center"
            >
              {Icon && (
                <Icon className="mx-auto mb-3 h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-accent-400" />
              )}
              <h3 className="text-sm font-medium text-white">
                {skill.name}
              </h3>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-500 to-purple-500"
                />
              </div>
              <span className="mt-1 block text-xs text-neutral-600">
                {skill.level}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
