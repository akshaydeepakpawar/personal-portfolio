import React from "react";
import { Hero_content } from "../constants";
import profilePic from "../assets/Hero.webp";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Akshay Pawar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 vai-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {Hero_content}
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              onClick={handleDownload}
              className="mb-4 cursor-pointer group relative inline-flex items-center justify-center px-7 py-3 rounded-xl border border-neutral-700 bg-neutral-900 text-white font-medium tracking-wide overflow-hidden transition duration-300 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              {/* subtle shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700"></span>
              </span>
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              width="450px"
              src={profilePic}
              alt="Akshay Pawar"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
