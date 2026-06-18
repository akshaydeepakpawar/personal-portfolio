"use client";

import { SKILL_CATEGORIES } from "@/constants";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiLinux,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  SQL: SiPostgresql,
  "C++": SiCplusplus,
  HTML5: FaHtml5,
  CSS3: FaCss3,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": FaCode,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "REST APIs": FaServer,
  "AI SDK": FaCode,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: FaGitAlt,
  Docker: FaDocker,
  Linux: SiLinux,
  Postman: FaServer,
  Prisma: SiPrisma,
  Vercel: SiVercel,
  Supabase: SiSupabase,
};

const categoryIcons: Record<string, IconType> = {
  Languages: FaCode,
  Frontend: FaReact,
  Backend: FaNodeJs,
  Databases: FaDatabase,
  "Tools & DevOps": FaDocker,
  "CS Fundamentals": SiCplusplus,
};

const Technologies = () => {
  return (
    <motion.section
      id="skills"
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
        Skills &amp; <span className="text-gradient">Technologies</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, catIndex) => {
          const CategoryIcon = categoryIcons[category.category] || FaCode;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="group glass glass-hover rounded-xl p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <CategoryIcon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = iconMap[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all duration-200 hover:bg-accent-500/10 hover:text-accent-300"
                    >
                      {SkillIcon && <SkillIcon className="h-3 w-3" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Technologies;
