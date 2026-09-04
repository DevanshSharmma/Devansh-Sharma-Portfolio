import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import DriveExperience from "./sections/DriveExperience";

export default function App() {
  // Drive mode is the primary interactive experience, toggleable to classic
  const [viewMode, setViewMode] = useState("drive");

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Interactive Canvas Particle Network */}
      <ParticleBackground />

      {/* Floating Sticky Glass Navbar with Mode Switcher */}
      <Navbar viewMode={viewMode} onToggleMode={(mode) => setViewMode(mode)} />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {viewMode === "drive" ? (
          /* 🏎️ INTERACTIVE CYBER CAR DRIVING ARENA */
          <DriveExperience onSwitchToClassic={() => setViewMode("classic")} />
        ) : (
          /* 📄 CLASSIC CONTINUOUS PORTFOLIO LAYOUT */
          <>
            {/* Full-Screen Hero Section with Car Hologram & LeetCode */}
            <Hero onStartDrive={() => setViewMode("drive")} />

            {/* 01 / About Me */}
            <About />

            {/* 02 / Education */}
            <Education />

            {/* 03 / Experience */}
            <Experience />

            {/* 04 / Featured Work (Crash Guard AI) */}
            <Projects />

            {/* 05 / Tech Stack */}
            <Skills />

            {/* 06 / Certifications */}
            <Certifications />

            {/* 07 / Let's Connect */}
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
