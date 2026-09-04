import React from "react";
import { marqueeTech } from "../data/portfolioData";
import TechIcon from "./TechIcon";

export default function SkillsMarquee() {
  const duplicatedTech = [...marqueeTech, ...marqueeTech, ...marqueeTech];

  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-white/5 bg-dark-900/30 backdrop-blur-sm">
      {/* Edge gradient fades for seamless look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicatedTech.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-3 mx-4 px-5 py-2.5 rounded-xl bg-dark-900/80 border border-white/5 hover:border-electric-500/40 hover:bg-dark-850/90 transition-all duration-300 group cursor-default shadow-sm"
          >
            <div className="transition-transform duration-300 group-hover:scale-125">
              <TechIcon name={tech.icon} className="w-5 h-5" style={{ color: tech.color }} />
            </div>
            <span className="font-mono text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
