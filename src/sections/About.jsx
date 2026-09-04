import React from "react";
import { motion } from "framer-motion";
import { aboutCards, personalInfo } from "../data/portfolioData";
import { SiPython } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { Code2, Cpu, ArrowUpRight } from "lucide-react";

export default function About() {
  const getCardIcon = (id) => {
    switch (id) {
      case "python":
        return <SiPython className="w-8 h-8 text-blue-400" />;
      case "ai-ml":
        return <GiBrain className="w-8 h-8 text-purple-400" />;
      case "fullstack":
        return <Code2 className="w-8 h-8 text-cyan-400" />;
      default:
        return <Cpu className="w-8 h-8 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-electric-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              01 / ABOUT ME
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-electric-500/50 to-transparent" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl leading-tight">
            Turning ideas into{" "}
            <span className="text-gradient-cyan">intelligent digital experiences.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal pt-2">
            {personalInfo.detailedBio}
          </p>
        </div>

        {/* 4 Interactive 3D Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-white/10 ${card.borderGlow} backdrop-blur-xl shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Subtle ambient gradient inside card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top Row: Icon and Tag */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-dark-950 border border-white/10 group-hover:border-white/20 transition-colors shadow-inner">
                  {getCardIcon(card.id)}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {card.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 space-y-2.5">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-electric-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle bottom indicator */}
              <div className="relative z-10 pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-electric-400 transition-colors">
                <span>Explore capability</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
