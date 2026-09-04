import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Terminal, Zap } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import RoleSwitcher from "../components/RoleSwitcher";
import HeroPortrait from "../components/HeroPortrait";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Hero({ onStartDrive }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-6 overflow-hidden"
    >
      {/* Dynamic Background Gradient Spots */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-electric-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-neon-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-cyber-grid-dense opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Introductions & Headlines */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-left"
          >
            {/* Small Animated Intro Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-electric-500/30 backdrop-blur-md w-max shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
                HELLO, I'M
              </span>
            </div>

            {/* Main Name Heading with Orbitron racing font */}
            <div className="space-y-1">
              <h1 className="font-racing font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
                Devansh
                <br />
                <span className="text-gradient-silver">Sharma.</span>
              </h1>
            </div>

            {/* Animated Role Switcher */}
            <div className="pt-1">
              <RoleSwitcher roles={personalInfo.roles} />
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              I build intelligent, scalable and impactful digital solutions using{" "}
              <span className="text-white font-medium">Artificial Intelligence</span>,{" "}
              <span className="text-white font-medium">Machine Learning</span> and{" "}
              <span className="text-white font-medium">modern web technologies</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Drive Mode Primary CTA */}
              <button
                onClick={onStartDrive}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-racing font-bold tracking-wide text-dark-950 rounded-xl bg-gradient-to-r from-cyan-400 via-electric-400 to-neon-400 hover:from-cyan-300 hover:to-neon-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95 group overflow-hidden"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>🏎️ Play Drive Mode</span>
              </button>

              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide text-white rounded-xl bg-dark-900/90 hover:bg-dark-850 border border-white/10 hover:border-electric-400/40 shadow-lg transition-all duration-300 active:scale-95 group"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Resume.pdf"
                download="Devansh_Sharma_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide text-slate-300 rounded-xl bg-dark-900/80 hover:bg-dark-850 border border-white/10 hover:border-white/25 shadow-lg transition-all duration-300 active:scale-95 group hover:text-white"
              >
                <Download className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-y-0.5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons with LeetCode added */}
            <div className="flex items-center gap-3 pt-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 mr-1">
                Profiles:
              </span>

              {/* LeetCode Button */}
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900/90 border border-amber-400/20 hover:border-amber-400 text-amber-400 transition-all duration-200 hover:-translate-y-1 shadow-sm flex items-center gap-2 text-xs font-mono"
                aria-label="Devansh Sharma LeetCode Profile"
                title="LeetCode Profile"
              >
                <SiLeetcode className="w-4 h-4" />
                <span className="hidden sm:inline">LeetCode</span>
              </a>

              {/* GitHub Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900/90 border border-white/10 hover:border-white text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm flex items-center gap-2 text-xs font-mono"
                aria-label="Devansh Sharma GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              
              {/* LinkedIn Button */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900/90 border border-blue-400/20 hover:border-blue-400 text-blue-400 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                aria-label="Devansh Sharma LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-dark-900/90 border border-cyan-400/20 hover:border-cyan-400 text-cyan-400 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                aria-label="Send Email to Devansh Sharma"
                title="Email Devansh"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Centerpiece (Holographic Cyber Car) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroPortrait onStartDrive={onStartDrive} />
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
