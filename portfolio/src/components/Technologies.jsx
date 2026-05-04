import React from "react";
import { motion } from "framer-motion";

// Icons
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiTypescript, SiPostgresql, SiDocker, SiPrisma, SiTailwindcss, SiGithub, SiPostman, SiLinux, SiNetlify, SiVercel, SiCplusplus } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs, FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// 🌊 Wave animation
const waveVariant = (delay) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay,
    },
  },
});

// 🧠 Tech list
const technologies = [
  <RiJavascriptFill className="text-yellow-400" />,
  <SiTypescript className="text-blue-500" />,
  <RiReactjsLine className="text-cyan-400" />,
  <TbBrandNextjs />,
  <FaNodeJs className="text-green-500" />,
  <SiExpress />,
  <SiMongodb className="text-green-500" />,
  <SiPostgresql className="text-blue-400" />,
  <DiMysql className="text-[#2c7749]" />,
  <SiPrisma />,
  <SiDocker className="text-blue-400" />,
  <SiTailwindcss className="text-cyan-400" />,
  <SiCplusplus className="text-blue-600" />,
  <FaGit className="text-orange-500" />,
  <SiGithub />,
  <SiNetlify className="text-green-400" />,
  <SiVercel />,
  <SiPostman className="text-orange-400" />,
  <VscVscode className="text-blue-500" />,
  <SiLinux className="text-yellow-500" />,
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {technologies.map((icon, index) => (
          <motion.div
            key={index}
            variants={waveVariant(index * 0.15)} // 👈 wave delay
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