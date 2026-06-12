"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshaydeepakpawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/", label: "LinkedIn" },
  { icon: FaSquareXTwitter, href: "https://x.com/akshay_jsx", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/akshay_deepak_pawar/", label: "LeetCode" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-surface-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group relative">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            AP
          </span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-lg p-2 text-neutral-500 transition-all duration-300 hover:bg-accent-500/10 hover:text-accent-400"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
