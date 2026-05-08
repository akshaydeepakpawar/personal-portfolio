import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-[1.7rem] mx-2 w-10">Ap</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/akshaydeepakpawar" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-pawar-5b4b5819a/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://x.com/akshay_jsx" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/akshay_deepak_pawar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
