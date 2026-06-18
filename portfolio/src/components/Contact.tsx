"use client";

import { CONTACT_INFO } from "@/constants";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useContactModal } from "@/hooks/use-contact-modal";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshaydeepakpawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/", label: "LinkedIn" },
  { icon: FaSquareXTwitter, href: "https://x.com/akshay_jsx", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/akshay_deepak_pawar/", label: "LeetCode" },
];

const Contact = () => {
  const { open } = useContactModal();
  return (
    <motion.section
      id="contact"
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
        Get in <span className="text-gradient">Touch</span>
      </motion.h2>

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="gradient-border rounded-2xl"
        >
          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s Work Together
              </h3>
              <p className="mt-3 text-neutral-400">
                I&apos;m currently looking for Full-Stack Developer
                opportunities. If you have a role that matches my skills, let&apos;s
                talk.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="group glass-hover rounded-xl p-5 text-center transition-all duration-300">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>
                <p className="text-xs font-medium text-neutral-500">Location</p>
                <p className="mt-1 text-sm text-white">
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div className="group glass-hover rounded-xl p-5 text-center transition-all duration-300">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <p className="text-xs font-medium text-neutral-500">Phone</p>
                <p className="mt-1 text-sm text-white">
                  {CONTACT_INFO.phoneNo}
                </p>
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group glass-hover rounded-xl p-5 text-center transition-all duration-300"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <p className="text-xs font-medium text-neutral-500">Email</p>
                <p className="mt-1 text-sm text-white transition-colors group-hover:text-accent-400">
                  {CONTACT_INFO.email}
                </p>
              </a>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={open}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]"
              >
                Send an Email
                <FaArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm text-neutral-400">Find me on</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] text-neutral-400 transition-all duration-300 hover:border-accent-500/30 hover:bg-accent-500/10 hover:text-accent-400 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center text-sm text-neutral-600"
      >
        <p>
          &copy; {new Date().getFullYear()} Akshay Pawar. Built with Next.js &
          Tailwind CSS.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
