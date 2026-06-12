"use client";

import Image from "next/image";
import { ABOUT_CONTENT, ABOUT_HIGHLIGHTS } from "@/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
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
        About <span className="text-gradient">Me</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:col-span-2"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 via-accent-500/20 to-cyan-500/10 opacity-40 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06]">
              <Image
                className="h-auto w-[320px] object-cover sm:w-[380px]"
                src="/images/About.webp"
                alt="About Akshay Pawar"
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
          className="space-y-6 lg:col-span-3"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            {ABOUT_CONTENT.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed text-neutral-400 ${
                  i > 0 ? "mt-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="glass-hover gradient-border glass rounded-xl p-4 text-center sm:p-5"
              >
                <div
                  className={`mx-auto mb-3 h-8 w-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <div className="h-2 w-2 rotate-45 border border-white/40" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
