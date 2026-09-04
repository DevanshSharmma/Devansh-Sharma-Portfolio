import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import TechIcon from "../components/TechIcon";
import SkillsMarquee from "../components/SkillsMarquee";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.name }))
  );

  const displayedSkills =
    activeTab === "all"
      ? allSkills
      : skillCategories.find((c) => c.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              05 / TECH STACK
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Tools, Runtimes & Intelligence
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-normal">
            A comprehensive overview of programming languages, modern frameworks, database engines, and AI/ML ecosystems I engineer with.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-electric-500 text-white font-bold shadow-lg shadow-electric-500/25"
                  : "bg-dark-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-electric-500 text-white font-bold shadow-lg shadow-electric-500/25"
                    : "bg-dark-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative p-5 rounded-2xl bg-gradient-to-b from-dark-900/90 to-dark-950/90 border border-white/10 hover:border-electric-500/40 backdrop-blur-xl group transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]"
              >
                {/* Tech Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 group-hover:border-electric-400/50 flex items-center justify-center mb-3 transition-colors shadow-inner group-hover:scale-110 duration-300">
                  <TechIcon name={skill.icon} className="w-6 h-6 text-slate-200 group-hover:text-electric-400 transition-colors" />
                </div>

                <h3 className="font-mono text-sm font-bold text-white group-hover:text-electric-300 transition-colors">
                  {skill.name}
                </h3>

                <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  {skill.level}
                </span>

                {/* Subtle Hover Tooltip Description */}
                <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-tight">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Infinite Moving Marquee Strip */}
      <div className="mt-20">
        <SkillsMarquee />
      </div>
    </section>
  );
}
