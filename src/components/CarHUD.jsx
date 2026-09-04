import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Zap, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight,
  ExternalLink,
  Navigation,
  Sparkles
} from "lucide-react";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { driveStations, personalInfo } from "../data/portfolioData";

export default function CarHUD({
  telemetry,
  isMuted,
  onToggleMute,
  headlightsOn,
  onToggleHeadlights,
  onSelectGPSStation,
  activeStation,
  onInspectStation,
  onControlChange
}) {
  const speed = telemetry?.speedKmH || 0;
  const gear = telemetry?.gear || "P";
  const isNitro = telemetry?.isNitro || false;
  const closestStation = telemetry?.closestStation;
  const distance = telemetry?.distanceToStation || 0;
  const isDockable = distance < 140 && closestStation;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-5">
      {/* 1. TOP COCKPIT BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full">
        {/* Left: Speedometer & Gear Indicator */}
        <div className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-dark-900/90 border border-electric-500/30 backdrop-blur-xl shadow-2xl shadow-electric-500/10">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              TELEMETRY VELOCITY
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-racing font-black text-2xl sm:text-3xl tracking-tight text-white">
                {String(speed).padStart(3, "0")}
              </span>
              <span className="font-mono text-[10px] text-electric-400 font-semibold">
                KM/H
              </span>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-white/10 mx-1" />

          {/* Gear pill */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-[9px] uppercase text-slate-400">
              GEAR
            </span>
            <span
              className={`font-racing font-bold text-sm px-2 py-0.5 rounded ${
                gear === "NITRO"
                  ? "bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse"
                  : gear === "R"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                  : "bg-electric-500/20 text-electric-300 border border-electric-500/40"
              }`}
            >
              {gear}
            </span>
          </div>

          {/* Nitro active pulse badge */}
          {isNitro && (
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-racing text-cyan-400 px-2 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/40 animate-pulse">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>NITRO BOOST</span>
            </div>
          )}
        </div>

        {/* Center: Nearest Station Radar / Dock Prompt */}
        <AnimatePresence>
          {isDockable && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-electric-600 via-cyan-500 to-neon-500 text-white shadow-xl shadow-cyan-500/30 border border-white/20 animate-bounce"
            >
              <Navigation className="w-4 h-4 animate-spin-slow" />
              <div className="flex flex-col text-left">
                <span className="font-racing text-xs font-bold uppercase tracking-wide">
                  DOCKING AT: {closestStation.name}
                </span>
                <span className="font-mono text-[9px] text-cyan-100">
                  Click below to open station inspection
                </span>
              </div>
              <button
                onClick={() => onInspectStation && onInspectStation(closestStation)}
                className="px-3 py-1 rounded-xl bg-white text-dark-950 font-racing font-bold text-xs hover:bg-cyan-100 transition-all shadow-md active:scale-95"
              >
                OPEN
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right: Sound, Lights & Social Shortcuts */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-xl shadow-xl">
          {/* LeetCode link button */}
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="Devansh Sharma LeetCode"
            className="p-2 rounded-xl bg-dark-950 hover:bg-dark-800 text-amber-400 border border-amber-400/20 hover:border-amber-400 transition-all hover:scale-105"
          >
            <SiLeetcode className="w-4 h-4" />
          </a>

          {/* GitHub link button */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Devansh Sharma GitHub"
            className="p-2 rounded-xl bg-dark-950 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-white transition-all hover:scale-105"
          >
            <SiGithub className="w-4 h-4" />
          </a>

          {/* LinkedIn link button */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Devansh Sharma LinkedIn"
            className="p-2 rounded-xl bg-dark-950 hover:bg-dark-800 text-blue-400 border border-blue-400/20 hover:border-blue-400 transition-all hover:scale-105"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>

          <div className="h-5 w-[1px] bg-white/10 mx-0.5" />

          {/* Sound Toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Unmute Engine Sound" : "Mute Sound"}
            className="p-2 rounded-xl bg-dark-950 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Headlights Toggle */}
          <button
            onClick={onToggleHeadlights}
            title={headlightsOn ? "Turn Headlights Off" : "Turn Headlights On"}
            className="p-2 rounded-xl bg-dark-950 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
          >
            <Sun className={`w-4 h-4 ${headlightsOn ? "text-yellow-400" : "text-slate-500"}`} />
          </button>
        </div>
      </div>

      {/* 2. BOTTOM COCKPIT CONTROLS & GPS AUTOPILOT NAV */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 w-full">
        {/* Left: GPS Autopilot Quick Travel Hub */}
        <div className="pointer-events-auto flex flex-col gap-2 p-3 rounded-2xl bg-dark-900/95 border border-white/10 backdrop-blur-xl shadow-2xl max-w-full sm:max-w-md">
          <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-1.5">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-electric-400 animate-spin-slow" />
              <span className="font-racing font-bold text-[11px] tracking-wider text-white uppercase">
                GPS AUTOPILOT
              </span>
            </div>
            <span className="font-mono text-[9px] text-slate-400">
              Click to drive to station
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-0.5">
            {driveStations.map((st) => (
              <button
                key={st.id}
                onClick={() => onSelectGPSStation && onSelectGPSStation(st)}
                style={{ borderColor: `${st.color}50` }}
                className="group flex flex-col items-center justify-center p-1.5 rounded-xl bg-dark-950/80 border hover:bg-white/5 transition-all text-center active:scale-95"
              >
                <span className="font-racing font-extrabold text-xs" style={{ color: st.color }}>
                  {st.number}
                </span>
                <span className="font-mono text-[9px] text-slate-300 truncate w-full group-hover:text-white">
                  {st.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Center: Driving Controls Cheatsheet for Desktop */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-2xl bg-dark-950/80 border border-white/5 text-slate-400 text-xs font-mono backdrop-blur-md">
          <span className="text-white font-medium">Controls:</span>
          <span>[W/↑] Gas</span>
          <span>[S/↓] Reverse</span>
          <span>[A/D/←/→] Steer</span>
          <span>[Space] Nitro</span>
        </div>

        {/* Right: Mobile / Touch Virtual Pedals */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Steer Left/Right */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-xl">
            <button
              onMouseDown={() => onControlChange && onControlChange("left", true)}
              onMouseUp={() => onControlChange && onControlChange("left", false)}
              onTouchStart={() => onControlChange && onControlChange("left", true)}
              onTouchEnd={() => onControlChange && onControlChange("left", false)}
              className="p-3 rounded-xl bg-dark-950 border border-white/5 active:bg-electric-600 active:text-white text-slate-300 transition-all active:scale-90"
              aria-label="Steer Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onMouseDown={() => onControlChange && onControlChange("right", true)}
              onMouseUp={() => onControlChange && onControlChange("right", false)}
              onTouchStart={() => onControlChange && onControlChange("right", true)}
              onTouchEnd={() => onControlChange && onControlChange("right", false)}
              className="p-3 rounded-xl bg-dark-950 border border-white/5 active:bg-electric-600 active:text-white text-slate-300 transition-all active:scale-90"
              aria-label="Steer Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Gas & Brake Pedals */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-xl">
            {/* Brake / Reverse Pedal */}
            <button
              onMouseDown={() => onControlChange && onControlChange("brake", true)}
              onMouseUp={() => onControlChange && onControlChange("brake", false)}
              onTouchStart={() => onControlChange && onControlChange("brake", true)}
              onTouchEnd={() => onControlChange && onControlChange("brake", false)}
              className="px-3.5 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 active:bg-rose-500 active:text-white font-racing font-bold text-xs flex flex-col items-center gap-0.5 active:scale-90 transition-all"
              aria-label="Brake"
            >
              <ArrowDown className="w-4 h-4" />
              <span>BRAKE</span>
            </button>

            {/* Nitro Boost Button */}
            <button
              onMouseDown={() => onControlChange && onControlChange("nitro", true)}
              onMouseUp={() => onControlChange && onControlChange("nitro", false)}
              onTouchStart={() => onControlChange && onControlChange("nitro", true)}
              onTouchEnd={() => onControlChange && onControlChange("nitro", false)}
              className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 active:bg-cyan-500 active:text-dark-950 active:scale-90 transition-all"
              aria-label="Nitro Boost"
            >
              <Zap className="w-5 h-5" />
            </button>

            {/* Gas / Accelerate Pedal */}
            <button
              onMouseDown={() => onControlChange && onControlChange("gas", true)}
              onMouseUp={() => onControlChange && onControlChange("gas", false)}
              onTouchStart={() => onControlChange && onControlChange("gas", true)}
              onTouchEnd={() => onControlChange && onControlChange("gas", false)}
              className="px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 active:bg-emerald-500 active:text-dark-950 font-racing font-bold text-xs flex flex-col items-center gap-0.5 active:scale-90 transition-all"
              aria-label="Accelerate"
            >
              <ArrowUp className="w-4 h-4" />
              <span>GAS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
