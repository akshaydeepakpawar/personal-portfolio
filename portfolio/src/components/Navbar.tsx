"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshaydeepakpawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-pawar-5b4b5819a/", label: "LinkedIn" },
  { icon: FaSquareXTwitter, href: "https://x.com/akshay_jsx", label: "Twitter" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/akshay_deepak_pawar/", label: "LeetCode" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of sectionIds.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.04] bg-surface-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={scrollToTop} className="group relative">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            AP
          </span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-accent-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-white/[0.04]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
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

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/[0.04] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/[0.04] bg-surface-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-accent-500/10 text-accent-400"
                      : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 border-t border-white/[0.04] pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg p-2 text-neutral-500 transition-colors hover:text-accent-400"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
