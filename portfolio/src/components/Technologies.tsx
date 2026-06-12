"use client";

import { motion } from "framer-motion";
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiLinux,
  SiNetlify,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs, FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const waveVariant = (delay: number) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut" as const,
      repeat: Infinity,
      delay,
    },
  },
});

const technologies = [
  <RiJavascriptFill key="js" className="text-yellow-400" />,
  <SiTypescript key="ts" className="text-blue-500" />,
  <RiReactjsLine key="react" className="text-cyan-400" />,
  <TbBrandNextjs key="next" />,
  <FaNodeJs key="node" className="text-green-500" />,
  <SiExpress key="express" />,
  <SiMongodb key="mongo" className="text-green-500" />,
  <SiPostgresql key="pg" className="text-blue-400" />,
  <DiMysql key="mysql" className="text-[#2c7749]" />,
  <SiPrisma key="prisma" />,
  <SiDocker key="docker" className="text-blue-400" />,
  <SiTailwindcss key="tw" className="text-cyan-400" />,
  <SiCplusplus key="cpp" className="text-blue-600" />,
  <FaGit key="git" className="text-orange-500" />,
  <SiGithub key="gh" />,
  <SiNetlify key="net" className="text-green-400" />,
  <SiVercel key="vercel" />,
  <SiPostman key="postman" className="text-orange-400" />,
  <VscVscode key="vsc" className="text-blue-500" />,
  <SiLinux key="linux" className="text-yellow-500" />,
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {technologies.map((icon, index) => (
          <motion.div
            key={index}
            variants={waveVariant(index * 0.15)}
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-5 text-5xl"
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
