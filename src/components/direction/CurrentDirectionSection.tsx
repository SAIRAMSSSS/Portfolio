"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { 
  Compass, 
  Server, 
  Cpu, 
  Terminal, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Flame, 
  ShieldCheck,
  Zap
} from "lucide-react";

export function CurrentDirectionSection() {
  const { currentDirection } = PROFILE;
  const [selectedTrackIdx, setSelectedTrackIdx] = useState<number>(0);

  const selectedTrack = currentDirection.tracks[selectedTrackIdx];

  const getTrackIcon = (tier: string) => {
    switch (tier) {
      case "Primary":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "Secondary":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Long-term":
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <Compass className="w-4 h-4 text-slate-400" />;
    }
  };

  const getTierBadgeClass = (tier: string) => {
    switch (tier) {
      case "Primary":
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
      case "Secondary":
        return "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
      case "Long-term":
        return "border-amber-500/40 bg-amber-500/10 text-amber-300";
      default:
        return "border-slate-500/40 bg-slate-500/10 text-slate-300";
    }
  };

  return (
    <section id="current-direction" className="py-24 sm:py-32 relative bg-[#04060a] border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with exact numbering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>SECTION 01 // TRAJECTORY MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              01 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">CURRENT DIRECTION</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Focus is a deliberate choice. DevOps & Infrastructure along with AI Systems form my active engineering priorities, while graphics programming and low-level game technology remain deep, long-term technical pursuits.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-emerald-400 font-bold block">OBJECTIVE // FIRST PRINCIPLES</span>
            <span className="text-slate-400">SYSTEMS BEYOND THE SURFACE LEVEL</span>
          </div>
        </div>

        {/* Objective Callout Card */}
        <div className="blueprint-box p-6 sm:p-8 bg-[#070b14] border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-[10px] tracking-widest uppercase border-b border-l border-emerald-500/30">
            CORE MANDATE
          </div>
          <div className="max-w-4xl space-y-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              THE MISSION STATEMENT:
            </span>
            <blockquote className="text-lg sm:text-2xl font-bold text-white leading-relaxed font-tech">
              &ldquo;{currentDirection.objective}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Interactive Track Matrix Table / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Track Selection Table */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>ACTIVE ENGINEERING TRACKS</span>
              <span className="text-[10px] text-slate-500">CLICK TO INSPECT DETAIL</span>
            </div>

            {currentDirection.tracks.map((trackItem, idx) => {
              const isSelected = selectedTrackIdx === idx;
              return (
                <div
                  key={trackItem.tier}
                  onClick={() => {
                    SoundEngine.playClick();
                    setSelectedTrackIdx(idx);
                  }}
                  onMouseEnter={() => SoundEngine.playHover()}
                  className={`p-5 sm:p-6 border transition-all cursor-pointer font-mono relative select-none ${
                    isSelected
                      ? "border-emerald-400 bg-[#09121a] shadow-lg shadow-emerald-950/40"
                      : "border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      {getTrackIcon(trackItem.tier)}
                      <span className={`text-[10px] font-bold px-2 py-0.5 border ${getTierBadgeClass(trackItem.tier)}`}>
                        {trackItem.tier.toUpperCase()} TRACK
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500">
                      {trackItem.statusBadge}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 transition-colors ${
                    isSelected ? "text-white" : "text-slate-300"
                  }`}>
                    {trackItem.track}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {trackItem.focus}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {trackItem.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-black/60 border border-white/10 text-[10px] text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive Inspector */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="blueprint-box p-6 sm:p-8 bg-[#060912] border border-white/15 space-y-6 font-mono text-xs">
              <div className="border-b border-white/10 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                    TRACK SPECIFICATION // 0{selectedTrackIdx + 1}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 border font-bold ${getTierBadgeClass(selectedTrack.tier)}`}>
                    {selectedTrack.statusBadge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase font-tech">
                  {selectedTrack.track}
                </h3>
              </div>

              {/* Focus & Scope */}
              <div className="space-y-2">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  FOCUS DOMAIN & METHODOLOGY:
                </span>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {selectedTrack.description}
                </p>
              </div>

              {/* Technologies In Play */}
              <div className="space-y-2">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  KEY TOOLING & ARTIFACTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTrack.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-white/5 border border-white/15 text-slate-200 text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware / Systems Note */}
              <div className="p-4 bg-black/60 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>MEASURED EXECUTION</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-snug">
                  Every milestone is backed by verifiable code commits, container builds, latency profiling, and reproducible instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
