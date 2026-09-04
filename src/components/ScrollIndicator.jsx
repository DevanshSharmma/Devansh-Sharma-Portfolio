import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const handleScrollDown = () => {
    const target = document.querySelector("#about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4">
      <button
        onClick={handleScrollDown}
        className="group flex flex-col items-center gap-2 text-slate-400 hover:text-electric-400 transition-colors focus:outline-none"
        aria-label="Scroll to explore sections"
      >
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-slate-400 group-hover:text-electric-400 transition-colors">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600 group-hover:border-electric-400 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-electric-400 shadow-[0_0_6px_#38bdf8]"
          />
        </div>
      </button>
    </div>
  );
}
