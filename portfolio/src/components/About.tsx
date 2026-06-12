"use client";

import Image from "next/image";
import { About_text } from "@/constants";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: FaCode, label: "Frontend", desc: "React, Next.js, TypeScript" },
  { icon: FaServer, label: "Backend", desc: "Node.js, APIs, Databases" },
  { icon: FaRocket, label: "Performance", desc: "Scalable Architecture" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-accent-500/20 to-cyan-500/10 opacity-50 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                className="h-auto w-[350px] object-cover"
                src="/images/About.webp"
                alt="about"
                width={400}
                height={400}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="leading-relaxed text-neutral-400">{About_text}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass glass-hover rounded-xl p-4 text-center"
              >
                <item.icon className="mx-auto mb-2 h-5 w-5 text-accent-400" />
                <h3 className="text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
