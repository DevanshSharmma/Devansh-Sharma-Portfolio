import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { ExternalLink, CheckCircle2, Radio, Activity, ShieldAlert, Sparkles, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechIcon from "../components/TechIcon";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getTechIconName = (tech) => {
    switch (tech) {
      case "Python": return "SiPython";
      case "React":
      case "React.js": return "SiReact";
      case "FastAPI": return "SiFastapi";
      case "PostgreSQL": return "SiPostgresql";
      case "Scikit-learn": return "SiScikitlearn";
      case "SQLite": return "SiSqlite";
      case "JavaScript": return "SiJavascript";
      default: return "Cpu";
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-electric-400 uppercase">
              04 / FEATURED WORK
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-electric-500/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                Engineered for Impact.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl font-normal mt-2">
                A selection of high-performance AI systems, full-stack platforms, and analytical backend architectures.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Click any project for interactive simulation & details
            </div>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isFlagship = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 ${
                  isFlagship
                    ? "bg-gradient-to-br from-dark-900/95 via-dark-850/90 to-dark-950/95 border-2 border-electric-500/40 shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:border-electric-400"
                    : "bg-dark-900/80 border border-white/10 hover:border-electric-500/30 shadow-xl"
                }`}
              >
                {/* Decorative Cyber Grid Background for Flagship Project */}
                {isFlagship && (
                  <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                )}

                <div className="relative z-10 p-6 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Project Details */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm sm:text-base font-black px-3 py-1 rounded-lg bg-electric-500/20 text-electric-300 border border-electric-500/30">
                          {project.number}
                        </span>

                        {isFlagship && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-mono font-semibold">
                            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                            FEATURED AI FLAGSHIP
                          </span>
                        )}

                        <span className="text-xs font-mono text-slate-400">
                          {project.period}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-electric-400">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Key Capabilities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.slice(0, 4).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Icons */}
                      <div className="pt-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-950/90 border border-white/10 text-xs font-mono text-slate-200"
                            >
                              <TechIcon name={getTechIconName(tech)} className="w-4 h-4 text-electric-400" />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-electric-600 to-cyber-600 hover:from-electric-500 hover:to-cyber-500 text-white text-xs font-mono font-bold tracking-wide flex items-center gap-2 shadow-lg shadow-electric-500/20 active:scale-95 transition-all"
                        >
                          <Activity className="w-4 h-4" />
                          <span>Interactive Details & Simulation</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Visual HUD / Radar Mockup Card */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="relative rounded-2xl bg-dark-950 p-6 border border-white/10 shadow-inner overflow-hidden">
                        {/* Decorative Top Bar */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                            SYSTEM_TELEMETRY.AI
                          </span>
                        </div>

                        {/* Interactive Visual Graphic */}
                        {isFlagship ? (
                          <div className="space-y-4">
                            {/* Simulated Radar / Pulse Display */}
                            <div className="relative h-44 rounded-xl bg-dark-900 border border-electric-500/20 flex items-center justify-center overflow-hidden">
                              {/* Radar Concentric Rings */}
                              <div className="absolute w-36 h-36 rounded-full border border-electric-500/20" />
                              <div className="absolute w-24 h-24 rounded-full border border-electric-500/30" />
                              <div className="absolute w-12 h-12 rounded-full border border-electric-500/40" />
                              <div className="absolute inset-0 bg-gradient-to-t from-electric-500/10 to-transparent" />
                              
                              {/* Radar Sweep Line */}
                              <div className="absolute w-1/2 h-1 bg-gradient-to-r from-transparent to-electric-400 origin-left animate-spin" style={{ animationDuration: "3s" }} />

                              {/* Center Incident Pulse */}
                              <div className="relative z-10 flex flex-col items-center">
                                <ShieldAlert className="w-8 h-8 text-red-400 animate-bounce" />
                                <span className="font-mono text-[10px] font-bold text-red-300 mt-1 uppercase tracking-wider">
                                  CRASH MONITOR ACTIVE
                                </span>
                              </div>
                            </div>

                            {/* Live Metrics Grid */}
                            <div className="grid grid-cols-3 gap-2 text-center font-mono">
                              {project.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5">
                                  <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                                  <div className="text-sm font-bold text-electric-300 mt-0.5">{m.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 font-mono text-xs text-slate-300 space-y-2">
                              <div className="text-electric-400 font-semibold">&gt; Endpoint Analysis</div>
                              <div className="text-[11px] text-slate-400">
                                <code>POST /api/v1/{project.id.replace("-", "/")}</code>
                              </div>
                              <div className="text-[11px] text-emerald-400">
                                &bull; HTTP 200 OK — Payload Optimized
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center font-mono">
                              {project.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5">
                                  <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                                  <div className="text-sm font-bold text-electric-300 mt-0.5">{m.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
