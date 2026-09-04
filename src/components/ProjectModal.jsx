import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertTriangle, Radio, Shield, Activity, Cpu, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechIcon from "./TechIcon";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [simulating, setSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  if (!project) return null;

  const handleSimulateDetection = () => {
    setSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setSimulating(false);
      setSimulationResult({
        detected: true,
        gForce: "14.8 G",
        severity: "CRITICAL SEVERE COLLISION",
        confidence: "99.4%",
        latency: "420ms",
        nearestFacility: "AIIMS Trauma Center, New Delhi (2.8 km)",
        actionTaken: "Automated SOS Alert & Geolocation Dispatched via FastAPI"
      });
    }, 1400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl rounded-3xl bg-dark-900 border border-electric-500/30 shadow-2xl shadow-electric-500/10 p-6 sm:p-8 overflow-hidden z-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-electric-500/20 text-electric-300 border border-electric-500/30">
                    PROJECT {project.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.period}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-electric-400 font-mono mt-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Overview & Architecture
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Core Implementation Features
                </h4>
                <div className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Tech Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-6 pt-5 border-t border-white/10">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 text-xs font-mono transition-colors"
              >
                Close Window
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-neon-600 hover:from-electric-500 hover:to-neon-500 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-electric-500/20"
              >
                <FaGithub className="w-4 h-4" />
                View GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
