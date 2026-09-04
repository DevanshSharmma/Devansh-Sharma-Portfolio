import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Layers, Zap } from "lucide-react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ viewMode = "drive", onToggleMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = ["contact", "skills", "projects", "experience", "about", "home"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 via-cyan-500 to-neon-500 p-[1.5px] shadow-lg shadow-electric-500/20 group-hover:shadow-electric-500/40 transition-all duration-300">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center font-racing font-bold text-sm tracking-wider text-white">
                <span className="text-white">D</span>
                <span className="text-cyan-400">S</span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-racing font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                Devansh Sharma Portfolio
              </span>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Center: Mode Switcher Badge (Drive vs Classic) */}
          <div className="hidden md:flex items-center p-1 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md shadow-inner">
            <button
              onClick={() => onToggleMode && onToggleMode("drive")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-racing text-xs transition-all ${
                viewMode === "drive"
                  ? "bg-gradient-to-r from-cyan-500 to-electric-600 text-dark-950 font-extrabold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>🏎️ Drive Mode</span>
            </button>

            <button
              onClick={() => onToggleMode && onToggleMode("classic")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-racing text-xs transition-all ${
                viewMode === "classic"
                  ? "bg-dark-800 text-white font-bold border border-white/10 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Classic Scroll</span>
            </button>
          </div>

          {/* Right Navigation & Profiles */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Desktop Navigation Links (when in classic mode or to scroll) */}
            {viewMode === "classic" && (
              <nav className="flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      activeSection === link.name.toLowerCase()
                        ? "text-white bg-electric-600/30 border border-electric-500/40 shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            )}

            {/* LeetCode Icon */}
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Profile"
              className="p-2 rounded-xl bg-dark-900/80 border border-amber-400/20 hover:border-amber-400 text-amber-400 transition-all hover:scale-105"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>

            {/* GitHub Icon */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-xl bg-dark-900/80 border border-white/10 hover:border-white text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <SiGithub className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <a
              href="/Resume.pdf"
              download="Devansh_Sharma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-900/80 hover:bg-dark-850 border border-white/10 hover:border-electric-400 text-slate-200 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-electric-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onToggleMode && onToggleMode(viewMode === "drive" ? "classic" : "drive")}
              className="px-2.5 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-racing text-[10px] font-bold"
            >
              {viewMode === "drive" ? "📄 Classic" : "🏎️ Drive"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-dark-950/95 backdrop-blur-2xl px-4 py-6 space-y-4"
          >
            <div className="flex items-center justify-around pb-2 border-b border-white/10">
              <button
                onClick={() => {
                  onToggleMode && onToggleMode("drive");
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 mx-1 rounded-xl font-racing text-xs text-center ${
                  viewMode === "drive"
                    ? "bg-cyan-500 text-dark-950 font-bold"
                    : "bg-dark-900 text-slate-300"
                }`}
              >
                🏎️ Play Drive Mode
              </button>
              <button
                onClick={() => {
                  onToggleMode && onToggleMode("classic");
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 mx-1 rounded-xl font-racing text-xs text-center ${
                  viewMode === "classic"
                    ? "bg-cyan-500 text-dark-950 font-bold"
                    : "bg-dark-900 text-slate-300"
                }`}
              >
                📄 Classic View
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-amber-400 p-2 rounded-xl bg-dark-900 border border-amber-400/20"
              >
                <SiLeetcode className="w-4 h-4" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-200 p-2 rounded-xl bg-dark-900 border border-white/10"
              >
                <SiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="/Resume.pdf"
                download="Devansh_Sharma_Resume.pdf"
                className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 p-2 rounded-xl bg-dark-900 border border-cyan-400/20"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
