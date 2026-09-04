import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/portfolioData";
import { Award, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import TechIcon from "../components/TechIcon";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-neon-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              06 / CERTIFICATIONS
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-electric-500/50 to-transparent" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Verified Credentials & Accreditations
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            Professional job simulations, AI agent fundamentals, and foundational software engineering accreditations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-white/10 hover:border-electric-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-dark-950 border border-electric-500/20 text-electric-400 group-hover:scale-110 group-hover:border-electric-400 transition-all shadow-inner">
                  <TechIcon name={cert.icon} className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-300 font-semibold">
                    {cert.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-electric-400 uppercase tracking-wider font-semibold block">
                  {cert.issuer}
                </span>
                <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-electric-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              {/* Skills tags */}
              <div className="pt-6 mt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-950 border border-white/5 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
