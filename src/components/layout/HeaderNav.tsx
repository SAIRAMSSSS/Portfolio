"use client";

import React, { useState, useEffect } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Layers, 
  Code2, 
  FileText, 
  Compass,
  Menu,
  X,
  Play,
  Activity
} from "lucide-react";

export function HeaderNav() {
  const { 
    mode, 
    toggleMode, 
    audioMuted, 
    toggleAudio, 
    setTerminalOpen, 
    setResumeModalOpen,
    activeSection 
  } = useDuality();

  const [fps, setFps] = useState<number>(60);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(144, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "WORK", href: "#projects", id: "projects" },
    { label: "ENV_REEL", href: "#environment-art", id: "art" },
    { label: "GL_LAB", href: "#rendering-lab", id: "lab" },
    { label: "AI_TENSORS", href: "#intelligence-lab", id: "ai" },
    { label: "BATTLE_LOG", href: "#hackathons", id: "hackathons" },
    { label: "SYNTRIX", href: "#syntrix", id: "syntrix" },
    { label: "PHILOSOPHY", href: "#philosophy", id: "philosophy" },
    { label: "TRANSMIT", href: "#contact", id: "contact" }
  ];

  const handleNavClick = (href: string) => {
    SoundEngine.playClick();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040609]/90 backdrop-blur-md border-b border-white/10 text-xs font-mono select-none">
      {/* Top Telemetry Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 border-b border-white/5 text-[10px] text-slate-500 tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OPERATOR: SAIRAM R // ARCH_KERNEL_6.x
          </span>
          <span className="text-slate-700">|</span>
          <span>LAT: 11.0168° N, LNG: 76.9558° E</span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">CLK: {timeStr || "12:00:00"}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">ENV: C++ • OPENGL • BLENDER • UE5</span>
          <span className="text-slate-700">|</span>
          <span className="text-emerald-400 font-bold">{fps} FPS</span>
          <span className="text-slate-700">|</span>
          <span className="text-amber-400">PURSUING BE CSE</span>
        </div>
      </div>

      {/* Main Tactical Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-14">
        {/* Left: Identity Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              SoundEngine.playClick();
            }}
            className="group flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center font-bold text-amber-400 group-hover:border-amber-400 transition-colors font-dot text-sm">
              SR
            </div>
            <div>
              <div className="font-bold tracking-wider text-sm flex items-center gap-2">
                <span className="text-white font-tech tracking-wider">{PROFILE.name}</span>
                <span className="text-[9px] px-1.5 py-0.2 bg-white/10 text-amber-300 rounded-xs font-mono">
                  {mode}
                </span>
              </div>
              <div className="text-[9px] text-slate-500 font-mono tracking-tighter">
                TECHNICAL ENVIRONMENT ARTIST // GRAPHICS PROGRAMMER
              </div>
            </div>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-[11px] font-mono">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              onMouseEnter={() => SoundEngine.playHover()}
              className={`px-3 py-1.5 tracking-wider transition-all duration-150 rounded-xs relative ${
                activeSection === item.id
                  ? "text-white bg-white/10 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-amber-400" />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Controls & Duality Switch */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* DUALITY MODE TOGGLE */}
          <button
            onClick={toggleMode}
            onMouseEnter={() => SoundEngine.playHover()}
            title="Toggle Art vs Code Perspective"
            className={`flex items-center gap-1.5 px-3 py-1.5 border text-[11px] font-semibold tracking-wider transition-all cursor-pointer font-mono ${
              mode === "ART"
                ? "border-amber-500/60 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 shadow-sm"
                : "border-cyan-500/60 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 shadow-sm"
            }`}
          >
            {mode === "ART" ? (
              <>
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">ART MODE</span>
              </>
            ) : (
              <>
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">CODE MODE</span>
              </>
            )}
            <span className="text-[10px] opacity-60">⇄</span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              SoundEngine.playClick();
              setTerminalOpen(true);
            }}
            onMouseEnter={() => SoundEngine.playHover()}
            title="Launch Terminal (`~`)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 border border-white/15 hover:border-white/35 text-slate-300 hover:text-white transition-colors bg-white/5 cursor-pointer font-mono"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline text-[10px]">TERM [~]</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => SoundEngine.playHover()}
            title={audioMuted ? "Unmute Audio Feedback" : "Mute Audio"}
            className="p-2 border border-white/15 hover:border-white/35 text-slate-400 hover:text-white transition-colors bg-white/5 cursor-pointer"
            aria-label="Toggle Audio"
          >
            {audioMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            )}
          </button>

          {/* Resume Viewer */}
          <button
            onClick={() => {
              SoundEngine.playClick();
              setResumeModalOpen(true);
            }}
            onMouseEnter={() => SoundEngine.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-[11px] tracking-wider transition-colors cursor-pointer font-mono"
          >
            <FileText className="w-3 h-3 text-amber-400" />
            <span>RESUME</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070a12] border-b border-white/10 px-6 py-4 space-y-2 font-mono">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400 border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setResumeModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2 text-amber-400 text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </button>
            <button
              onClick={() => {
                setTerminalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2 text-emerald-400 text-xs"
            >
              <Terminal className="w-4 h-4" />
              <span>OPEN TERMINAL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
