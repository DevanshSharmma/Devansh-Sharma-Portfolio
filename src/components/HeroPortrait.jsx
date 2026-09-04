import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Sparkles, 
  Cpu, 
  Zap, 
  Compass, 
  Activity, 
  Radio 
} from "lucide-react";
import { 
  SiPython, 
  SiFastapi, 
  SiReact, 
  SiPostgresql 
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

export default function HeroPortrait({ onStartDrive }) {
  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center select-none">
      {/* 1. Ambient Background Glow Spots */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-600/25 via-cyan-500/15 to-neon-500/20 blur-[80px] -z-10" />
      <div className="absolute -inset-6 rounded-full bg-electric-500/10 blur-[90px] -z-20" />

      {/* 2. Rotating Orbital Sci-Fi Rings */}
      <div className="absolute inset-3 sm:inset-6 rounded-full border border-dashed border-electric-500/20 animate-spin-slow pointer-events-none" />
      <div className="absolute inset-10 sm:inset-14 rounded-full border border-neon-500/15 animate-spin-reverse pointer-events-none" />
      
      {/* Decorative Crosshair Grid Markers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-electric-400/40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-electric-400/40" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-electric-400/40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-electric-400/40" />

      {/* 3. Central Holographic Cyber Car Cockpit Frame */}
      <div className="relative w-[84%] h-[88%] rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-electric-500/40 via-cyan-500/20 to-neon-500/30 shadow-[0_0_60px_rgba(37,99,235,0.25)] group">
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-dark-950/95 flex flex-col items-center justify-between p-6">
          {/* Subtle Cyber Grid Texture */}
          <div className="absolute inset-0 bg-cyber-grid-dense opacity-30 pointer-events-none" />

          {/* Top Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between w-full border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                CYBER DRIVE CORE
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-electric-500/10 border border-electric-500/30 text-[9px] font-racing text-electric-300">
              <Radio className="w-2.5 h-2.5 text-electric-400 animate-pulse" />
              <span>V8.2 DUAL-TURBO</span>
            </div>
          </div>

          {/* Centerpiece: Holographic Cyber Car Illustration */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center">
            {/* Pulsing neon ground ring */}
            <div className="absolute w-56 h-28 rounded-full bg-cyan-500/15 blur-xl -z-10" />
            <div className="absolute w-44 h-16 rounded-full border border-cyan-400/30 -z-10" />

            {/* Futuristic Cyber Vehicle Graphic (SVG) */}
            <svg
              className="w-56 h-36 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-transform duration-500 group-hover:scale-105"
              viewBox="0 0 240 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ground Shadow & Neon Glow */}
              <ellipse cx="120" cy="118" rx="85" ry="12" fill="rgba(34, 211, 238, 0.25)" filter="blur(6px)" />
              
              {/* Underglow bar */}
              <rect x="50" y="105" width="140" height="4" rx="2" fill="#22d3ee" filter="drop-shadow(0 0 8px #22d3ee)" />

              {/* Rear Tires */}
              <rect x="36" y="80" width="22" height="36" rx="6" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
              <rect x="42" y="86" width="10" height="24" rx="3" fill="#1e293b" />
              
              {/* Front Tires */}
              <rect x="182" y="80" width="22" height="36" rx="6" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
              <rect x="188" y="86" width="10" height="24" rx="3" fill="#1e293b" />

              {/* Main Body Aero Chassis */}
              <path
                d="M30 92L42 74L72 58L108 48L156 50L186 64L208 84L212 96L198 100L40 100L30 92Z"
                fill="#0c1427"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />

              {/* Tinted Cockpit Windshield & Roof */}
              <path
                d="M74 58L106 48L148 50L172 64L104 64L74 58Z"
                fill="#1e293b"
                stroke="#22d3ee"
                strokeWidth="1.5"
              />

              {/* Rear Aerofoil Spoiler */}
              <path d="M26 68L44 68L40 76L22 76Z" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
              <line x1="28" y1="76" x2="30" y2="88" stroke="#ec4899" strokeWidth="2" />

              {/* Headlights (Laser Cyan) */}
              <polygon points="206,86 216,90 206,94" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)" />
              <line x1="216" y1="90" x2="238" y2="92" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round" />

              {/* Tail Light Strip (Neon Rose) */}
              <line x1="30" y1="90" x2="38" y2="90" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" filter="drop-shadow(0 0 6px #f43f5e)" />

              {/* Cyber Body Accents & Circuit Lines */}
              <path d="M60 84H180" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="120" cy="84" r="3" fill="#22d3ee" />
            </svg>

            {/* Quick Drive Mode Call To Action */}
            <button
              onClick={onStartDrive}
              className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-electric-500 to-neon-500 text-dark-950 font-racing font-extrabold text-xs shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>START ENGINE / DRIVE</span>
            </button>
          </div>

          {/* Bottom Diagnostics Bar */}
          <div className="relative z-10 flex items-center justify-between w-full border-t border-white/10 pt-2.5 font-mono text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>STATIONS: 6 READY</span>
            </span>
            <span className="text-electric-400">WASD / ARROW KEYS</span>
          </div>
        </div>
      </div>

      {/* 4. Floating Decorative Live Code & Tech Snippets */}
      {/* Top Left Code Snippet */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 left-0 sm:-left-4 z-20 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-electric-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono text-electric-300"
      >
        <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
        <code>&gt; drive.engage()</code>
      </motion.div>

      {/* Top Right Code Snippet */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-12 -right-2 sm:-right-6 z-20 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-cyber-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono text-cyber-300"
      >
        <Terminal className="w-3.5 h-3.5 text-cyber-400" />
        <code>&gt; AI core active</code>
      </motion.div>

      {/* Bottom Left Code Snippet */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-16 -left-4 sm:-left-8 z-20 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-neon-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono text-neon-300"
      >
        <span className="text-neon-400 font-bold">&gt;</span>
        <code>Crash Guard telemetry...</code>
      </motion.div>

      {/* 5. Floating Animated Technology Badges */}
      {/* Python Badge */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 -left-3 sm:-left-7 z-20 p-2.5 rounded-2xl bg-dark-900/90 border border-blue-500/30 backdrop-blur-lg shadow-xl shadow-blue-500/10 flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer hover:border-blue-400 hover:scale-110 transition-all"
      >
        <SiPython className="w-5 h-5 text-blue-400" />
        <span className="hidden sm:inline text-blue-200">Python</span>
      </motion.div>

      {/* AI / ML Brain Badge */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-36 -right-2 sm:-right-8 z-20 p-2.5 rounded-2xl bg-dark-900/90 border border-purple-500/30 backdrop-blur-lg shadow-xl shadow-purple-500/10 flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer hover:border-purple-400 hover:scale-110 transition-all"
      >
        <GiBrain className="w-5 h-5 text-purple-400" />
        <span className="hidden sm:inline text-purple-200">AI / ML</span>
      </motion.div>

      {/* FastAPI Badge */}
      <motion.div
        animate={{ y: [0, -7, 0], x: [0, -3, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-28 -right-3 sm:-right-6 z-20 p-2.5 rounded-2xl bg-dark-900/90 border border-teal-500/30 backdrop-blur-lg shadow-xl shadow-teal-500/10 flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer hover:border-teal-400 hover:scale-110 transition-all"
      >
        <SiFastapi className="w-5 h-5 text-teal-400" />
        <span className="hidden sm:inline text-teal-200">FastAPI</span>
      </motion.div>

      {/* React Badge */}
      <motion.div
        animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-2 right-12 sm:right-20 z-20 p-2.5 rounded-2xl bg-dark-900/90 border border-cyan-500/30 backdrop-blur-lg shadow-xl shadow-cyan-500/10 flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer hover:border-cyan-400 hover:scale-110 transition-all"
      >
        <SiReact className="w-5 h-5 text-cyan-400 animate-spin-slow" />
        <span className="hidden sm:inline text-cyan-200">React</span>
      </motion.div>

      {/* PostgreSQL Badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute bottom-6 -left-3 sm:-left-5 z-20 p-2.5 rounded-2xl bg-dark-900/90 border border-indigo-500/30 backdrop-blur-lg shadow-xl shadow-indigo-500/10 flex items-center gap-2 text-xs font-semibold text-white group cursor-pointer hover:border-indigo-400 hover:scale-110 transition-all"
      >
        <SiPostgresql className="w-5 h-5 text-indigo-400" />
        <span className="hidden sm:inline text-indigo-200">PostgreSQL</span>
      </motion.div>

      {/* 6. "AVAILABLE FOR OPPORTUNITIES" Pill */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-dark-950/90 border border-emerald-500/40 backdrop-blur-xl shadow-2xl shadow-emerald-500/20 flex items-center gap-2.5 text-xs font-semibold tracking-wider text-emerald-300 whitespace-nowrap"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="tracking-wider uppercase font-mono text-[10px] sm:text-xs text-emerald-300">
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </motion.div>
    </div>
  );
}
