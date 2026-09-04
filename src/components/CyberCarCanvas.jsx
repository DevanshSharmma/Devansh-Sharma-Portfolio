import React, { useRef, useEffect, useCallback } from "react";
import { driveStations } from "../data/portfolioData";

export default function CyberCarCanvas({
  dismissedStationId,
  onDockStation,
  activeStation,
  autopilotTarget,
  onAutopilotComplete,
  controls,
  isMuted,
  headlightsOn,
  underglowColor = "#06b6d4",
  onTelemetryUpdate
}) {
  const canvasRef = useRef(null);

  // Car Physics State
  const carState = useRef({
    x: 350,
    y: 700,
    vx: 0,
    vy: 0,
    speed: 0,
    angle: -Math.PI / 2, // facing up initially
    angularVelocity: 0,
    maxSpeed: 7.5,
    nitroMaxSpeed: 12.5,
    accel: 0.22,
    brake: 0.28,
    friction: 0.965,
    turnSpeed: 0.048,
    isNitro: false,
    gear: "D",
    skidmarks: [],
    particles: []
  });

  // Sound Synth via Web Audio
  const audioCtxRef = useRef(null);
  const engineGainRef = useRef(null);
  const engineOscRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !isMuted) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext && !audioCtxRef.current) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(45, ctx.currentTime);
          gain.gain.setValueAtTime(0.015, ctx.currentTime);

          // Low pass filter for engine hum
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(280, ctx.currentTime);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          osc.start();

          audioCtxRef.current = ctx;
          engineGainRef.current = gain;
          engineOscRef.current = osc;
        }
      } catch (e) {
        console.warn("AudioContext init skipped", e);
      }
    }

    return () => {
      if (engineOscRef.current) {
        try {
          engineOscRef.current.stop();
        } catch (_) {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
        audioCtxRef.current = null;
      }
    };
  }, [isMuted]);

  // Track & Map Dimensions
  const MAP_WIDTH = 2000;
  const MAP_HEIGHT = 1600;

  // Sound play helper
  const playChime = useCallback(() => {
    if (isMuted || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.25); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch (_) {}
  }, [isMuted]);

  // Keys active state
  const keysDown = useRef({});

  useEffect(() => {
    const onKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "KeyW", "KeyS", "KeyA", "KeyD"].includes(e.code)) {
        // Prevent window scroll when driving
        if (e.code.startsWith("Arrow") || e.code === "Space") {
          e.preventDefault();
        }
        keysDown.current[e.code] = true;
      }

      if (e.code === "KeyH") {
        // Toggle headlight with H
      }
    };

    const onKeyUp = (e) => {
      keysDown.current[e.code] = false;
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  // Main Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastDockedStationId = null;
    const dismissedStations = {};
    let dockDebounceTimer = 0;

    const loop = (timestamp) => {
      const car = carState.current;
      const rect = canvas.getBoundingClientRect();
      const viewW = rect.width;
      const viewH = rect.height;

      // 1. Controls processing (Keyboard + Touch Virtual Controls)
      const forward = keysDown.current["ArrowUp"] || keysDown.current["KeyW"] || controls?.gas;
      const backward = keysDown.current["ArrowDown"] || keysDown.current["KeyS"] || controls?.brake;
      const left = keysDown.current["ArrowLeft"] || keysDown.current["KeyA"] || controls?.left;
      const right = keysDown.current["ArrowRight"] || keysDown.current["KeyD"] || controls?.right;
      const nitro = keysDown.current["Space"] || controls?.nitro;

      car.isNitro = !!nitro;
      const currentMaxSpeed = car.isNitro ? car.nitroMaxSpeed : car.maxSpeed;

      // Autopilot handling
      if (autopilotTarget) {
        const dx = autopilotTarget.trackX - car.x;
        const dy = autopilotTarget.trackY - car.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 45) {
          // Calculate angle to target
          const targetAngle = Math.atan2(dy, dx);
          let angleDiff = targetAngle - car.angle;

          // Normalize angleDiff to [-PI, PI]
          while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
          while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

          // Steer towards target
          car.angle += Math.sign(angleDiff) * Math.min(Math.abs(angleDiff), car.turnSpeed * 1.5);

          // Accelerate
          if (Math.abs(angleDiff) < 1.2) {
            car.speed = Math.min(car.speed + car.accel * 1.3, currentMaxSpeed * 0.9);
          } else {
            car.speed *= 0.95;
          }
        } else {
          // Reached autopilot station!
          car.speed *= 0.8;
          if (Math.abs(car.speed) < 0.2) {
            car.speed = 0;
            if (onAutopilotComplete) {
              onAutopilotComplete(autopilotTarget);
            }
          }
        }
      } else {
        // Manual driving physics
        if (forward) {
          car.speed += car.accel * (car.isNitro ? 1.8 : 1.0);
          if (car.speed > currentMaxSpeed) car.speed = currentMaxSpeed;
          car.gear = car.isNitro ? "NITRO" : "D";
        } else if (backward) {
          car.speed -= car.brake;
          if (car.speed < -3.5) car.speed = -3.5;
          car.gear = "R";
        } else {
          car.speed *= car.friction;
          if (Math.abs(car.speed) < 0.05) {
            car.speed = 0;
            car.gear = "P";
          }
        }

        // Steering occurs when moving
        if (Math.abs(car.speed) > 0.1) {
          const dir = car.speed > 0 ? 1 : -1;
          const speedFactor = Math.min(Math.abs(car.speed) / 4, 1.2);
          if (left) car.angle -= car.turnSpeed * speedFactor * dir;
          if (right) car.angle += car.turnSpeed * speedFactor * dir;
        }
      }

      // Update position
      car.x += Math.cos(car.angle) * car.speed;
      car.y += Math.sin(car.angle) * car.speed;

      // Keep car inside world bounds with gentle bounce
      if (car.x < 100) { car.x = 100; car.speed *= -0.4; }
      if (car.x > MAP_WIDTH - 100) { car.x = MAP_WIDTH - 100; car.speed *= -0.4; }
      if (car.y < 100) { car.y = 100; car.speed *= -0.4; }
      if (car.y > MAP_HEIGHT - 100) { car.y = MAP_HEIGHT - 100; car.speed *= -0.4; }

      // Sound update
      if (engineOscRef.current && audioCtxRef.current && !isMuted) {
        try {
          const freq = 40 + Math.abs(car.speed) * 22 + (car.isNitro ? 35 : 0);
          engineOscRef.current.frequency.setTargetAtTime(freq, audioCtxRef.current.currentTime, 0.05);
          const vol = 0.015 + (Math.abs(car.speed) / currentMaxSpeed) * 0.04;
          engineGainRef.current.gain.setTargetAtTime(vol, audioCtxRef.current.currentTime, 0.05);
        } catch (_) {}
      }

      // Add tire skid marks if turning sharply at high speed or braking
      const isTurningSharp = (left || right) && Math.abs(car.speed) > 4.5;
      if (isTurningSharp || (backward && car.speed > 3)) {
        car.skidmarks.push({
          x: car.x - Math.cos(car.angle) * 18,
          y: car.y - Math.sin(car.angle) * 18,
          angle: car.angle,
          alpha: 0.45
        });
        if (car.skidmarks.length > 250) car.skidmarks.shift();
      }

      // Nitro / exhaust particles
      if (car.isNitro || Math.abs(car.speed) > 5) {
        for (let i = 0; i < (car.isNitro ? 3 : 1); i++) {
          car.particles.push({
            x: car.x - Math.cos(car.angle) * 26 + (Math.random() - 0.5) * 8,
            y: car.y - Math.sin(car.angle) * 26 + (Math.random() - 0.5) * 8,
            vx: -Math.cos(car.angle) * (car.speed * 0.4 + Math.random() * 2),
            vy: -Math.sin(car.angle) * (car.speed * 0.4 + Math.random() * 2),
            radius: car.isNitro ? Math.random() * 4 + 2 : Math.random() * 2.5 + 1,
            color: car.isNitro ? (Math.random() > 0.5 ? "#22d3ee" : "#3b82f6") : "#94a3b8",
            alpha: 0.8,
            decay: 0.035
          });
        }
      }

      // Update & clean particles
      for (let i = car.particles.length - 1; i >= 0; i--) {
        const p = car.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          car.particles.splice(i, 1);
        }
      }

      // Check if parent dismissed active station
      if (dismissedStationId) {
        dismissedStations[dismissedStationId] = true;
      }

      // Proximity Detection for Stations
      let closestStation = null;
      let minDistance = Infinity;

      for (const st of driveStations) {
        const dist = Math.hypot(car.x - st.trackX, car.y - st.trackY);
        if (dist < minDistance) {
          minDistance = dist;
          closestStation = st;
        }

        // Docking Trigger Zone (Radius 120px)
        if (dist < 115) {
          if (!dismissedStations[st.id] && lastDockedStationId !== st.id) {
            lastDockedStationId = st.id;
            playChime();
            if (onDockStation) {
              onDockStation(st);
            }
          }
        } else if (dist > 160) {
          // Reset dismissed station once car drives away
          delete dismissedStations[st.id];
          if (lastDockedStationId === st.id) {
            lastDockedStationId = null;
          }
        }
      }

      if (dockDebounceTimer > 0) dockDebounceTimer--;

      // Reset lastDockedStationId if moved far away (> 160px)
      if (lastDockedStationId) {
        const activeSt = driveStations.find((s) => s.id === lastDockedStationId);
        if (activeSt && Math.hypot(car.x - activeSt.trackX, car.y - activeSt.trackY) > 160) {
          lastDockedStationId = null;
        }
      }

      // Telemetry update to parent HUD
      if (onTelemetryUpdate && timestamp % 3 === 0) {
        onTelemetryUpdate({
          speedKmH: Math.round(Math.abs(car.speed) * 18),
          gear: car.gear,
          isNitro: car.isNitro,
          closestStation: minDistance < 250 ? closestStation : null,
          distanceToStation: Math.round(minDistance),
          carX: car.x,
          carY: car.y
        });
      }

      // 2. Camera Viewport calculations (Smooth center on car)
      const cameraX = Math.max(0, Math.min(MAP_WIDTH - viewW, car.x - viewW / 2));
      const cameraY = Math.max(0, Math.min(MAP_HEIGHT - viewH, car.y - viewH / 2));

      ctx.clearRect(0, 0, viewW, viewH);
      ctx.save();
      ctx.translate(-cameraX, -cameraY);

      // 3. Render Cyber City Track Background
      // Dark Base
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT);

      // Cyber Grid Pattern
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x <= MAP_WIDTH; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, MAP_HEIGHT);
        ctx.stroke();
      }
      for (let y = 0; y <= MAP_HEIGHT; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(MAP_WIDTH, y);
        ctx.stroke();
      }

      // Race Track Highway Layout (Grand Circuit loop)
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Track Outer Border Glow
      ctx.strokeStyle = "rgba(37, 99, 235, 0.2)";
      ctx.lineWidth = 210;
      ctx.beginPath();
      ctx.roundRect(220, 220, MAP_WIDTH - 440, MAP_HEIGHT - 440, 160);
      ctx.stroke();

      // Track Road Surface
      ctx.strokeStyle = "#080e1e";
      ctx.lineWidth = 190;
      ctx.beginPath();
      ctx.roundRect(220, 220, MAP_WIDTH - 440, MAP_HEIGHT - 440, 160);
      ctx.stroke();

      // Track Inner Neon Guardrails
      ctx.strokeStyle = "rgba(34, 211, 238, 0.45)";
      ctx.lineWidth = 3;
      ctx.shadowColor = "#22d3ee";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.roundRect(315, 315, MAP_WIDTH - 630, MAP_HEIGHT - 630, 120);
      ctx.stroke();

      // Track Outer Neon Guardrails
      ctx.strokeStyle = "rgba(168, 85, 247, 0.45)";
      ctx.shadowColor = "#a855f7";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.roundRect(125, 125, MAP_WIDTH - 250, MAP_HEIGHT - 250, 200);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Track Center Dashed Line (Animated feel)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.setLineDash([20, 24]);
      ctx.beginPath();
      ctx.roundRect(220, 220, MAP_WIDTH - 440, MAP_HEIGHT - 440, 160);
      ctx.stroke();
      ctx.setLineDash([]);

      // 4. Render Station Checkpoints / Docking Bays
      driveStations.forEach((st) => {
        const isCurrent = activeStation?.id === st.id;
        const isNear = minDistance < 120 && closestStation?.id === st.id;

        // Station Docking Platform Outer Ring
        ctx.save();
        ctx.translate(st.trackX, st.trackY);

        // Ambient Docking Glow
        const radGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 110);
        radGrad.addColorStop(0, `${st.color}35`);
        radGrad.addColorStop(0.7, `${st.color}10`);
        radGrad.addColorStop(1, "transparent");
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 110, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing Checkpoint Ring
        ctx.strokeStyle = isNear ? "#ffffff" : st.color;
        ctx.lineWidth = isNear ? 4 : 2;
        ctx.shadowColor = st.color;
        ctx.shadowBlur = isNear ? 24 : 12;
        ctx.beginPath();
        ctx.arc(0, 0, 75, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Rotating Tech Markers
        ctx.strokeStyle = `${st.color}80`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 12]);
        ctx.beginPath();
        ctx.arc(0, 0, 58, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.shadowBlur = 0;

        // Station Central Core
        ctx.fillStyle = "#060b18";
        ctx.beginPath();
        ctx.arc(0, 0, 36, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = st.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Station Number Label inside core
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 16px 'Orbitron', 'Syne', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(st.number, 0, 0);

        // Station Floating Holographic Banner
        ctx.fillStyle = isNear ? "#ffffff" : st.color;
        ctx.font = "bold 13px 'Orbitron', 'Syne', sans-serif";
        ctx.fillText(st.name.toUpperCase(), 0, -50);

        ctx.fillStyle = "#94a3b8";
        ctx.font = "500 10px 'Outfit', sans-serif";
        ctx.fillText(st.subtitle, 0, 54);

        if (isNear) {
          ctx.fillStyle = "#22d3ee";
          ctx.font = "bold 10px 'JetBrains Mono', monospace";
          ctx.fillText("▶ DOCKING ACTIVE - INSPECT", 0, 68);
        }

        ctx.restore();
      });

      // 5. Render Skidmarks
      for (const s of car.skidmarks) {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.fillStyle = `rgba(15, 23, 42, ${s.alpha})`;
        ctx.fillRect(-6, -7, 12, 3);
        ctx.fillRect(-6, 4, 12, 3);
        ctx.restore();
      }

      // 6. Render Exhaust / Nitro Particles
      for (const p of car.particles) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // 7. Render Headlight Cones on Road
      if (headlightsOn) {
        ctx.save();
        ctx.translate(car.x, car.y);
        ctx.rotate(car.angle);

        // Left Headlight Cone
        const leftBeam = ctx.createRadialGradient(28, -9, 5, 140, -18, 110);
        leftBeam.addColorStop(0, "rgba(255, 255, 255, 0.55)");
        leftBeam.addColorStop(0.3, "rgba(186, 230, 253, 0.25)");
        leftBeam.addColorStop(1, "transparent");

        ctx.fillStyle = leftBeam;
        ctx.beginPath();
        ctx.moveTo(25, -9);
        ctx.lineTo(190, -75);
        ctx.lineTo(210, 15);
        ctx.closePath();
        ctx.fill();

        // Right Headlight Cone
        const rightBeam = ctx.createRadialGradient(28, 9, 5, 140, 18, 110);
        rightBeam.addColorStop(0, "rgba(255, 255, 255, 0.55)");
        rightBeam.addColorStop(0.3, "rgba(186, 230, 253, 0.25)");
        rightBeam.addColorStop(1, "transparent");

        ctx.fillStyle = rightBeam;
        ctx.beginPath();
        ctx.moveTo(25, 9);
        ctx.lineTo(210, -15);
        ctx.lineTo(190, 75);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      // 8. Render Cyber Sports Car Body
      ctx.save();
      ctx.translate(car.x, car.y);
      ctx.rotate(car.angle);

      // Neon Underglow beneath vehicle
      ctx.shadowColor = underglowColor;
      ctx.shadowBlur = car.isNitro ? 32 : 20;
      ctx.fillStyle = `${underglowColor}70`;
      ctx.beginPath();
      ctx.ellipse(0, 0, 32, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Tires (4 Wheels)
      ctx.fillStyle = "#090d16";
      ctx.fillRect(-18, -17, 10, 5); // Front Left
      ctx.fillRect(-18, 12, 10, 5);  // Front Right
      ctx.fillRect(10, -17, 10, 5);   // Rear Left
      ctx.fillRect(10, 12, 10, 5);    // Rear Right

      // Car Main Body (Aerodynamic Cyber GT Chassis)
      ctx.fillStyle = "#0c1427"; // Deep obsidian cyber blue
      ctx.beginPath();
      ctx.moveTo(26, 0);       // Nose
      ctx.lineTo(20, -12);
      ctx.lineTo(5, -14);
      ctx.lineTo(-14, -14);
      ctx.lineTo(-24, -12);    // Rear Wing Left
      ctx.lineTo(-24, 12);     // Rear Wing Right
      ctx.lineTo(-14, 14);
      ctx.lineTo(5, 14);
      ctx.lineTo(20, 12);
      ctx.closePath();
      ctx.fill();

      // Neon Body Accents / Racing Decals
      ctx.strokeStyle = underglowColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Cockpit / Windshield (Tinted Cyan Glass)
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(8, -8);
      ctx.lineTo(-8, -8);
      ctx.lineTo(-8, 8);
      ctx.lineTo(8, 8);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rear Spoiler / Aerofoil
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(-27, -15, 4, 30);
      ctx.strokeStyle = car.isNitro ? "#ec4899" : "#3b82f6";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-27, -15, 4, 30);

      // Tail Lights (Red / Neon Nitro Glow)
      ctx.fillStyle = car.gear === "R" ? "#ffffff" : (car.isNitro ? "#f43f5e" : "#ef4444");
      ctx.shadowColor = car.isNitro ? "#f43f5e" : "#ef4444";
      ctx.shadowBlur = 10;
      ctx.fillRect(-25, -10, 2, 6);
      ctx.fillRect(-25, 4, 2, 6);
      ctx.shadowBlur = 0;

      // Headlight Bulbs
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(24, -9, 2, 4);
      ctx.fillRect(24, 5, 2, 4);

      // Center Racing Stripe / AI Emblem
      ctx.fillStyle = underglowColor;
      ctx.fillRect(-15, -1.5, 32, 3);

      ctx.restore(); // Restore car transform
      ctx.restore(); // Restore camera transform

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    activeStation,
    autopilotTarget,
    onAutopilotComplete,
    onDockStation,
    controls,
    isMuted,
    headlightsOn,
    underglowColor,
    onTelemetryUpdate,
    playChime
  ]);

  return (
    <div className="relative w-full h-full min-h-[560px] sm:min-h-[640px] md:min-h-[720px] rounded-3xl overflow-hidden border border-electric-500/20 shadow-2xl bg-dark-950">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing focus:outline-none"
        tabIndex={0}
      />
    </div>
  );
}
