"use client";

import React, { useState, useEffect } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { HeroDualityCanvas } from "./HeroDualityCanvas";
import { PROFILE } from "@/data/profile";
import { ArrowDown, Terminal, Sparkles, Box, ShieldCheck, ChevronRight } from "lucide-react";

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
      {/* Background radial gradient glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
        mode === "ART" ? "bg-amber-600/10" : "bg-cyan-600/10"
      }`} />

      {/* Hero Header & Cinematic Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 w-full">
        {/* Top Tagline / Category indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-amber-400 font-bold">{PROFILE.name}</span>
            <span className="text-slate-600">//</span>
            <span className="text-slate-400">BE CSE @ KATHIR COLLEGE</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="text-slate-600 font-bold">MODE:</span>
            <span className={mode === "ART" ? "text-amber-400 font-bold" : "text-cyan-400 font-bold"}>
              {mode} PERSPECTIVE
            </span>
          </div>
        </div>

        {/* Large Editorial Title */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.92]">
            I BUILD WORLDS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              AND THE SYSTEMS
            </span>
            <span className={`block transition-colors duration-500 ${
              mode === "ART" ? "text-amber-400" : "text-cyan-400"
            }`}>
              THAT RUN THEM.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-mono text-slate-400 tracking-wide pt-3 sm:pt-4">
            {PROFILE.subTagline}
          </p>
        </div>

        {/* Status ticker */}
        <div className="mt-4 sm:mt-6 flex items-center gap-3 font-mono text-xs sm:text-sm">
          <span className="text-emerald-400 font-bold tracking-widest shrink-0">
            CURRENTLY BUILDING →
          </span>
          <div className="h-6 overflow-hidden relative w-full max-w-md">
            <div 
              key={statusIdx}
              className="text-white font-medium animate-fadeIn inline-block bg-white/5 px-2.5 py-0.5 border border-white/10"
            >
              {PROFILE.status[statusIdx]}
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D WebGL Duality Canvas */}
      <div className="relative z-10 w-full my-2">
        <HeroDualityCanvas />
      </div>

      {/* Hero Bottom Tactical Summary & CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/10 pt-6">
          {/* Left: Core Philosophy statement */}
          <div className="md:col-span-6 space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              THE MANIFESTO // DUALITY
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              &ldquo;A builder who exists in the tension between code, art, and technology. 
              I do not simply make the image — I understand the rendering machinery, memory strides, 
              and shader mathematics behind it.&rdquo;
            </p>
          </div>

          {/* Right: Quick Action Hub */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 font-mono text-xs">
            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <Box className="w-4 h-4" />
              <span>EXPLORE ARTIFACTS</span>
            </button>

            <button
              onClick={() => scrollToSection("rendering-lab")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>RENDERING LAB</span>
            </button>

            <button
              onClick={() => scrollToSection("hackathons")}
              onMouseEnter={() => SoundEngine.playHover()}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-slate-300 hover:text-white font-medium tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>50+ BATTLE LOG</span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="p-2.5 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors"
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
