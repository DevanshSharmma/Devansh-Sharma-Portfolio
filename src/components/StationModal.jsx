import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Navigation,
  Trophy,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { 
  personalInfo, 
  stats, 
  aboutCards, 
  projects, 
  skillCategories, 
  certifications, 
  experiences, 
  education,
  driveStations 
} from "../data/portfolioData";
import TechIcon from "./TechIcon";
import ContactForm from "./ContactForm";

export default function StationModal({ station, isOpen, onClose, onDriveToNext }) {
  const [activeSkillCat, setActiveSkillCat] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  if (!isOpen || !station) return null;

  // Find next station in cycle
  const currentIndex = driveStations.findIndex((s) => s.id === station.id);
  const nextStation = driveStations[(currentIndex + 1) % driveStations.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 25 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-dark-900/95 border border-white/15 shadow-2xl shadow-electric-500/20 overflow-hidden"
        >
          {/* Top Station Header Bar */}
          <div 
            className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-dark-950/60"
            style={{ borderTop: `3px solid ${station.color}` }}
          >
            <div className="flex items-center gap-3.5">
              <div 
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-racing font-bold text-sm shadow-lg"
                style={{ backgroundColor: `${station.color}20`, color: station.color, border: `1px solid ${station.color}50` }}
              >
                {station.number}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-racing text-xs tracking-wider uppercase" style={{ color: station.color }}>
                    STATION DOCKED
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: station.color }} />
                </div>
                <h2 className="font-racing font-black text-xl sm:text-2xl text-white tracking-tight">
                  {station.name}
                </h2>
              </div>
            </div>

            {/* Actions: Next Station & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDriveToNext && onDriveToNext(nextStation)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-950 hover:bg-dark-800 border border-white/10 text-xs font-racing text-slate-300 hover:text-white transition-all active:scale-95"
              >
                <span>Drive to {nextStation.name}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-dark-950 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 transition-all active:scale-95"
                aria-label="Close Station Inspection"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
            {/* 1. ABOUT ME STATION */}
            {station.id === "about" && (
              <div className="space-y-8">
                {/* Intro summary */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-xs font-mono text-electric-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ENGINEERING PHILOSOPHY</span>
                  </div>
                  <h3 className="font-racing font-extrabold text-2xl sm:text-3xl text-white">
                    Devansh Sharma
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {personalInfo.detailedBio}
                  </p>
                </div>

                {/* 4 Interactive Domain Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutCards.map((card) => (
                    <div
                      key={card.id}
                      className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-electric-500/40 transition-all group"
                    >
                      <span className="font-mono text-[10px] tracking-wider uppercase text-electric-400 font-semibold">
                        {card.tag}
                      </span>
                      <h4 className="font-racing font-bold text-lg text-white mt-1 group-hover:text-electric-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>


              </div>
            )}

            {/* 2. TECH GARAGE / SKILLS STATION */}
            {station.id === "skills" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-racing font-extrabold text-2xl text-white">
                    Tech Garage & Stack Modules
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Filter across 28+ languages, AI algorithms, and backend systems.
                  </p>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSkillCat("all")}
                    className={`px-3 py-1.5 rounded-xl font-racing text-xs transition-all ${
                      activeSkillCat === "all"
                        ? "bg-cyan-500 text-dark-950 font-bold"
                        : "bg-dark-950 border border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    All Skills
                  </button>
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveSkillCat(cat.id)}
                      className={`px-3 py-1.5 rounded-xl font-racing text-xs transition-all ${
                        activeSkillCat === cat.id
                          ? "bg-cyan-500 text-dark-950 font-bold"
                          : "bg-dark-950 border border-white/10 text-slate-300 hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                  {(activeSkillCat === "all"
                    ? skillCategories.flatMap((c) => c.skills)
                    : skillCategories.find((c) => c.id === activeSkillCat)?.skills || []
                  ).map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-dark-950/80 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-dark-900 text-cyan-400 group-hover:scale-110 transition-transform">
                        <TechIcon name={sk.icon} className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-racing font-bold text-xs text-white truncate">
                          {sk.name}
                        </p>
                        <p className="font-mono text-[10px] text-slate-400 truncate">
                          {sk.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. CYBER SHOWROOM / PROJECTS STATION */}
            {station.id === "projects" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-racing font-extrabold text-2xl text-white">
                    Featured Systems & Crash Guard AI
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Production-grade AI architectures and full-stack solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Project Selector List */}
                  <div className="space-y-2 lg:col-span-1">
                    {projects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => setSelectedProject(proj)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                          selectedProject.id === proj.id
                            ? "bg-purple-500/15 border-purple-500/50 shadow-lg shadow-purple-500/10"
                            : "bg-dark-950/80 border-white/5 hover:border-white/20 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-racing font-extrabold text-xs text-purple-400">
                            {proj.number}
                          </span>
                          {proj.featured && (
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[9px] font-mono text-purple-300">
                              FLAGSHIP
                            </span>
                          )}
                        </div>
                        <h4 className="font-racing font-bold text-sm text-white mt-1 line-clamp-1">
                          {proj.title}
                        </h4>
                      </button>
                    ))}
                  </div>

                  {/* Right Column: Selected Project Deep Dive */}
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-dark-950 border border-white/10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-purple-400">
                          {selectedProject.tagline}
                        </span>
                        <h4 className="font-racing font-black text-xl text-white">
                          {selectedProject.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900 hover:bg-dark-850 border border-white/10 text-xs font-mono text-white transition-all hover:scale-105"
                        >
                          <SiGithub className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        KEY CAPABILITIES:
                      </span>
                      {selectedProject.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-dark-900 border border-white/5 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. TROPHY ARENA / CERTIFICATES STATION */}
            {station.id === "certs" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-racing font-extrabold text-2xl text-white">
                    Trophy Arena & Accreditations
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Verified job simulations and enterprise AI certifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-pink-500/40 transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase text-pink-400 font-semibold">
                          {cert.issuer}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-[9px] font-mono text-pink-300">
                          {cert.badge}
                        </span>
                      </div>

                      <h4 className="font-racing font-bold text-base text-white">
                        {cert.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((s, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-dark-900 text-[9px] font-mono text-slate-400">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. PIT-STOP / EXPERIENCE & EDUCATION STATION */}
            {station.id === "experience" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-racing font-extrabold text-2xl text-white">
                    Pit-Stop Timeline
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Internship track records and academic credentials.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Experience cards */}
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-emerald-500/40 transition-all space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="font-mono text-[10px] uppercase text-emerald-400 font-semibold">
                            {exp.company} &bull; {exp.location}
                          </span>
                          <h4 className="font-racing font-bold text-lg text-white">
                            {exp.role}
                          </h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-1 pt-1">
                        {exp.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-emerald-400 font-bold">&gt;</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Education card */}
                  <div className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-cyan-400 font-semibold">
                          {education.institution}
                        </span>
                        <h4 className="font-racing font-bold text-lg text-white">
                          {education.degree} (CGPA: {education.cgpa})
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                        {education.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. FINISH LINE / CONTACT STATION */}
            {station.id === "contact" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-racing font-extrabold text-2xl text-white">
                    Finish Line & Direct Dispatch
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Connect via LeetCode, GitHub, LinkedIn, or send an instant message.
                  </p>
                </div>

                {/* Profiles Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* LeetCode Button */}
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-dark-950 border border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/10 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 group-hover:scale-110 transition-transform">
                      <SiLeetcode className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-slate-400">
                        ALGORITHMS & CODING
                      </span>
                      <h5 className="font-racing font-bold text-sm text-white">
                        LeetCode Profile
                      </h5>
                    </div>
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-dark-950 border border-white/10 hover:border-white hover:bg-white/10 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                      <SiGithub className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-slate-400">
                        REPOSITORIES & CODE
                      </span>
                      <h5 className="font-racing font-bold text-sm text-white">
                        GitHub Profile
                      </h5>
                    </div>
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-dark-950 border border-blue-400/20 hover:border-blue-400 hover:bg-blue-400/10 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                      <FaLinkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-slate-400">
                        PROFESSIONAL NETWORK
                      </span>
                      <h5 className="font-racing font-bold text-sm text-white">
                        LinkedIn Profile
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Direct message contact form */}
                <div className="p-5 rounded-2xl bg-dark-950 border border-white/10">
                  <h4 className="font-racing font-bold text-base text-white mb-3">
                    Send Instant Message to Devansh
                  </h4>
                  <ContactForm />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footer Control Bar */}
          <div className="flex items-center justify-between p-4 border-t border-white/10 bg-dark-950/90">
            <span className="font-mono text-xs text-slate-400 hidden sm:inline">
              Press [ESC] or click outside to resume driving
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => onDriveToNext && onDriveToNext(nextStation)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 font-racing font-bold text-xs text-slate-200 hover:text-white transition-all active:scale-95"
              >
                <span>Drive Next ({nextStation.name})</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 via-cyan-500 to-neon-500 text-white font-racing font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
              >
                <span>🏎️ Resume Driving</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
