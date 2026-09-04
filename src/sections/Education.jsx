import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              02 / EDUCATION
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-electric-500/50 to-transparent" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Academic Foundation & Growth
          </h2>
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-900/90 via-dark-850/80 to-dark-950/90 border border-electric-500/25 hover:border-electric-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 group"
        >
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-dark-950 border border-electric-500/30 text-electric-400 shadow-lg group-hover:scale-110 group-hover:border-electric-400 transition-all duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {education.institution}
                </h3>
                <p className="font-mono text-base text-electric-300 font-semibold mt-1">
                  {education.degree}
                </p>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-electric-500/15 border border-electric-500/30 text-white w-max">
              <Award className="w-5 h-5 text-electric-400" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Academic Score</span>
                <span className="font-mono font-black text-base text-electric-300">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Meta Information Bar */}
          <div className="flex flex-wrap items-center gap-6 py-4 text-xs sm:text-sm font-mono text-slate-300 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{education.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{education.location}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-electric-400" />
              Curriculum Highlights & Initiatives
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {education.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-dark-950/60 border border-white/5 text-xs text-slate-300 leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
