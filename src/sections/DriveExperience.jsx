import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  HelpCircle, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Compass, 
  Zap,
  Layers,
  ChevronDown
} from "lucide-react";
import CyberCarCanvas from "../components/CyberCarCanvas";
import CarHUD from "../components/CarHUD";
import StationModal from "../components/StationModal";
import { driveStations, personalInfo } from "../data/portfolioData";

export default function DriveExperience({ onSwitchToClassic }) {
  const [activeStation, setActiveStation] = useState(null);
  const [dismissedStationId, setDismissedStationId] = useState(null);
  const [autopilotTarget, setAutopilotTarget] = useState(null);
  const [telemetry, setTelemetry] = useState({
    speedKmH: 0,
    gear: "P",
    isNitro: false,
    closestStation: null,
    distanceToStation: 999
  });
  const [controls, setControls] = useState({
    gas: false,
    brake: false,
    left: false,
    right: false,
    nitro: false
  });
  const [isMuted, setIsMuted] = useState(true);
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [underglowColor, setUnderglowColor] = useState("#22d3ee"); // cyan default

  // When car docks inside station zone
  const handleDockStation = useCallback((station) => {
    setActiveStation(station);
    setDismissedStationId(null);
  }, []);

  // When user selects GPS target station
  const handleSelectGPSStation = useCallback((station) => {
    setDismissedStationId(null);
    setAutopilotTarget(station);
  }, []);

  // When autopilot reaches destination
  const handleAutopilotComplete = useCallback((station) => {
    setAutopilotTarget(null);
    setActiveStation(station);
  }, []);

  // Update virtual controls
  const handleControlChange = useCallback((controlName, isActive) => {
    setControls((prev) => ({ ...prev, [controlName]: isActive }));
  }, []);

  // Close modal with dismissal state
  const handleCloseModal = useCallback(() => {
    if (activeStation) {
      setDismissedStationId(activeStation.id);
    }
    setActiveStation(null);
  }, [activeStation]);

  return (
    <section id="drive-arena" className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-dark-950">
      {/* Background cyber lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neon-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex-1 flex flex-col gap-4">
        {/* Top Header & Mode Toggle Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-racing text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">
                CYBER CAR INTERACTIVE SIMULATOR
              </span>
            </div>
            <h1 className="font-racing font-black text-2xl sm:text-4xl text-white tracking-tight mt-0.5">
              Drive Through My Portfolio
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-0.5">
              Navigate the cyber circuit. Drive into any station to inspect projects, skills, certifications, and links.
            </p>
          </div>

          {/* Underglow Color Picker & Classic View Button */}
          <div className="flex items-center gap-3">
            {/* Color pills */}
            <div className="hidden sm:flex items-center gap-1.5 p-1.5 rounded-2xl bg-dark-900 border border-white/10">
              <span className="font-mono text-[9px] uppercase text-slate-400 px-1">
                GLOW:
              </span>
              {[
                { name: "Cyan", color: "#22d3ee" },
                { name: "Electric Blue", color: "#3b82f6" },
                { name: "Neon Purple", color: "#a855f7" },
                { name: "Amber", color: "#f59e0b" }
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => setUnderglowColor(c.color)}
                  title={c.name}
                  style={{ backgroundColor: c.color }}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    underglowColor === c.color ? "scale-125 ring-2 ring-white" : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            {/* Switch to Classic View button */}
            <button
              onClick={onSwitchToClassic}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900 hover:bg-dark-850 border border-white/10 hover:border-electric-400 text-xs font-racing text-slate-200 hover:text-white transition-all shadow-md active:scale-95"
            >
              <Layers className="w-4 h-4 text-electric-400" />
              <span>Classic Scroll View</span>
            </button>
          </div>
        </div>

        {/* The Interactive Driving Arena Canvas + Cockpit HUD */}
        <div className="relative flex-1 w-full min-h-[560px] sm:min-h-[640px] md:min-h-[720px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <CyberCarCanvas
            dismissedStationId={dismissedStationId}
            onDockStation={handleDockStation}
            activeStation={activeStation}
            autopilotTarget={autopilotTarget}
            onAutopilotComplete={handleAutopilotComplete}
            controls={controls}
            isMuted={isMuted}
            headlightsOn={headlightsOn}
            underglowColor={underglowColor}
            onTelemetryUpdate={setTelemetry}
          />

          <CarHUD
            telemetry={telemetry}
            isMuted={isMuted}
            onToggleMute={() => setIsMuted((prev) => !prev)}
            headlightsOn={headlightsOn}
            onToggleHeadlights={() => setHeadlightsOn((prev) => !prev)}
            onSelectGPSStation={handleSelectGPSStation}
            activeStation={activeStation}
            onInspectStation={(st) => {
              setDismissedStationId(null);
              setActiveStation(st);
            }}
            onControlChange={handleControlChange}
          />
        </div>

        {/* Station Inspection Popup Modal */}
        <StationModal
          station={activeStation}
          isOpen={!!activeStation}
          onClose={handleCloseModal}
          onDriveToNext={(nextSt) => {
            handleCloseModal();
            handleSelectGPSStation(nextSt);
          }}
        />
      </div>
    </section>
  );
}
