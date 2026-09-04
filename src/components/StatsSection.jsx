import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/portfolioData";
import { Layers, Cpu, Award, Zap } from "lucide-react";

function CounterItem({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = stat.value;
    const duration = 1800;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(start + easedProgress * (end - start));
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, stat.value]);

  const icons = [Layers, Cpu, Award, Zap];
  const IconComponent = icons[index % icons.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-dark-900/80 to-dark-950/80 border border-white/5 hover:border-electric-500/30 backdrop-blur-xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)]"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity text-electric-400">
        <IconComponent className="w-12 h-12" />
      </div>
      
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white group-hover:text-gradient-cyan transition-all">
          {count < 10 && stat.value < 10 ? `0${count}` : count}
        </span>
        <span className="font-mono font-bold text-2xl sm:text-3xl text-electric-400">
          {stat.suffix}
        </span>
      </div>

      <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-semibold mb-1">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-400">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative z-10 py-12 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <CounterItem key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
