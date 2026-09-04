import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoleSwitcher({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="inline-flex items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-extrabold h-12 sm:h-14 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-cyan tracking-tight inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="inline-block w-1.5 sm:w-2 h-7 sm:h-9 bg-electric-400 ml-2 rounded-full animate-pulse shadow-[0_0_8px_#38bdf8]" />
    </div>
  );
}
