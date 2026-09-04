import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark-950/90 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: Brand / Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-electric-600 p-[1.5px]">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center font-racing font-bold text-xs">
                <span className="text-white">D</span>
                <span className="text-cyan-400">S</span>
              </div>
            </div>
            <div className="text-left">
              <p className="font-racing font-bold text-sm text-white tracking-wide">
                Devansh Sharma
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                AI/ML Developer & Cyber Car Experience
              </p>
            </div>
          </div>

          {/* Center: Social Profiles & Copyright */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                className="p-2 rounded-xl bg-dark-900 border border-amber-400/20 text-amber-400 hover:border-amber-400 transition-all hover:scale-105"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-200 hover:border-white transition-all hover:scale-105"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-xl bg-dark-900 border border-blue-400/20 text-blue-400 hover:border-blue-400 transition-all hover:scale-105"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
              <span>Crafted for high performance.</span>
              <span className="text-cyan-400 font-bold">&bull;</span>
              <span className="text-slate-400">&copy; {new Date().getFullYear()} Devansh Sharma</span>
            </div>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-cyan-400 transition-colors group focus:outline-none"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-xl bg-dark-900 border border-white/10 group-hover:border-cyan-400 flex items-center justify-center transition-all group-hover:-translate-y-1">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
