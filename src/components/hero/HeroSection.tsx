"use client";

import React, { useState, useEffect } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { HeroDualityCanvas } from "./HeroDualityCanvas";
import { PROFILE } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { 
  ArrowDown, 
  Terminal, 
  Compass, 
  Box, 
  Cpu, 
  Globe, 
  ArrowUpRight, 
  Zap,
  Server,
  Layers,
  Sparkles
} from "lucide-react";

export function HeroSection() {
  const { mode, toggleMode, setTerminalOpen, setResumeModalOpen } = useDuality();
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % PROFILE.status.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    SoundEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-16 sm:pt-20 flex flex-col justify-between overflow-hidden bg-tech-grid">
      {/* Background glow tailored to DevOps/Infra emerald and AI cyan */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 ${
        mode === "ART" ? "bg-emerald-600/10" : "bg-cyan-600/10"
      }`} />

      {/* Hero Header & Dev Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 w-full">
        {/* Top Tagline / Category indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/70 border border-white/15 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold font-dot tracking-wider">{PROFILE.name}</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="text-slate-300 font-mono tracking-tight">{PROFILE.degree.toUpperCase()}</span>
          </div>

          {/* Quick External Links Row */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PROFILE.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Large Editorial Title & Primary Stack Subtitle */}
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs tracking-wider uppercase">
            {PROFILE.primaryTitle}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95] font-tech max-w-5xl">
            I BUILD PRACTICAL SOFTWARE TOOLS,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-slate-200">
              EXPLORE HOW SYSTEMS WORK UNDER THE HOOD,
            </span>
            <span className="block text-slate-300">
              AND TURN EXPERIMENTS INTO REPRODUCIBLE PROJECTS.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans text-slate-300 max-w-4xl leading-relaxed pt-2">
            Currently focused on <strong className="text-white font-bold">Linux, Docker, deployment workflows, infrastructure automation, and the foundations of AI systems and GPU computing</strong>. Graphics programming and game technology remain long-term interests.
          </p>
        </div>

        {/* Status ticker */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
          <span className="text-emerald-400 font-bold tracking-widest shrink-0 font-dot flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>CURRENTLY BUILDING →</span>
          </span>
          <div className="h-6 overflow-hidden relative w-full max-w-lg">
            <div 
              key={statusIdx}
              className="text-white font-medium inline-block bg-black/80 px-3 py-0.5 border border-emerald-500/30 text-xs font-mono shadow-sm"
            >
              {PROFILE.status[statusIdx]}
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D WebGL Duality Canvas (GPU & Infrastructure Nodes) */}
      <div className="relative z-10 w-full my-2">
        <HeroDualityCanvas />
      </div>

      {/* Hero Bottom Tactical Summary & CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/10 pt-6">
          {/* Left: Current Tracks Overview */}
          <div className="md:col-span-6 space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span>THE OBJECTIVE // BEYOND THE SURFACE</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              &ldquo;Understand systems beyond the surface level — how software is built, deployed, automated, monitored, and executed on real hardware.&rdquo;
            </p>
          </div>

          {/* Right: Quick Jump Actions */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 font-mono text-xs">
            <button
              onClick={() => scrollToSection("current-direction")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Compass className="w-4 h-4" />
              <span>01 / DIRECTION</span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Box className="w-4 h-4 text-cyan-400" />
              <span>02 / PROJECTS</span>
            </button>

            <button
              onClick={() => scrollToSection("toolkit")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-slate-300 hover:text-white font-medium tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>03 / TOOLKIT</span>
            </button>

            <button
              onClick={() => {
                SoundEngine.playClick();
                setTerminalOpen(true);
              }}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-3.5 py-2.5 bg-black/60 border border-white/20 text-cyan-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Open System CLI Shell (~)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>[CLI ~]</span>
            </button>

            <button
              onClick={() => scrollToSection("current-direction")}
              className="p-2.5 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
