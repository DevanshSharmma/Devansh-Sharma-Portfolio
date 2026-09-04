import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              03 / EXPERIENCE
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-electric-500/50 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Industry Experience & Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
            Proven track record of engineering backend workflows, API integrations, and database automation in industrial and technology environments.
          </p>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative border-l-2 border-electric-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-electric-400 group-hover:border-white group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_#38bdf8]">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-400 mx-auto mt-0.5 group-hover:bg-white" />
              </div>

              {/* Date Marker Floating on Left for Desktop */}
              <div className="md:absolute md:-left-32 md:top-1.5 text-xs font-mono font-semibold text-electric-400 md:text-right md:w-24 mb-2 md:mb-0">
                {exp.period}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-white/10 group-hover:border-electric-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-electric-500/20 text-electric-300 border border-electric-500/30">
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        EXPERIENCE 0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-electric-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base text-electric-400 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-5 space-y-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-6 mt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Skills:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/5 text-slate-300 group-hover:border-electric-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
