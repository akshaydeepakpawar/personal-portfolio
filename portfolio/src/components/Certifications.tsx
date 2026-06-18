"use client";

import { CERTIFICATIONS } from "@/constants";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
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
        My <span className="text-gradient">Certifications</span>
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group glass glass-hover relative overflow-hidden rounded-xl p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10">
                <FaCertificate className="h-5 w-5 text-accent-400" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300">
                {cert.year}
              </span>
            </div>

            <h3 className="font-display mb-1 text-lg font-semibold text-white">
              {cert.title}
            </h3>

            <p className="mb-4 text-sm text-neutral-400">
              {cert.issuer}
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 transition-colors group-hover:text-accent-300">
              View Certificate
              <FaExternalLinkAlt className="h-3 w-3" />
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
