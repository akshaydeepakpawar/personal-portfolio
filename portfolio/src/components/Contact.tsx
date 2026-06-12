"use client";

import { CONTACT } from "@/constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const contactDetails = [
  { icon: FaMapMarkerAlt, label: "Location", value: CONTACT.address },
  { icon: FaPhoneAlt, label: "Phone", value: CONTACT.phoneNo },
  { icon: FaEnvelope, label: "Email", value: CONTACT.email },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshaydeepakpawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/", label: "LinkedIn" },
  { icon: FaSquareXTwitter, href: "https://x.com/akshay_jsx", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/akshay_deepak_pawar/", label: "LeetCode" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
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
        <div className="grid gap-6 sm:grid-cols-3">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass glass-hover rounded-xl p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                <detail.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-medium text-white">
                {detail.label}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{detail.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="font-display text-lg font-semibold text-white">
              Let&apos;s Connect
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition-all duration-300 hover:border-accent-500/30 hover:bg-accent-500/10 hover:text-accent-400 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
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
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center text-sm text-neutral-600"
      >
        &copy; {new Date().getFullYear()} Akshay Pawar. All rights reserved.
      </motion.div>
    </section>
  );
};

export default Contact;
