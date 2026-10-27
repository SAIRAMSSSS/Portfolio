"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { 
  Milestone, 
  Target, 
  Server, 
  Cpu, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Zap,
  Terminal,
  Activity
} from "lucide-react";

export function BuildingTowardSection() {
  const { buildingToward } = PROFILE;
  const [activeMilestoneTab, setActiveMilestoneTab] = useState<"infra" | "gpu">("infra");

  return (
    <section id="building-toward" className="py-24 sm:py-32 relative bg-[#04060a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <Target className="w-3.5 h-3.5" />
              <span>SECTION 05 // STRATEGIC HORIZONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              05 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">WHAT I&apos;M BUILDING TOWARD</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Clear goals, verifiable deliverables, and disciplined technical roadmaps. Every milestone moves me closer to production-readiness in DevOps, Cloud Infrastructure, and AI/GPU systems.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-cyan-400 font-bold block">CAREER READINESS TARGET</span>
            <span className="text-slate-400">DEVOPS • INFRASTRUCTURE • AI/GPU</span>
          </div>
        </div>

        {/* Primary Priority Statement Box */}
        <div className="blueprint-box p-6 sm:p-10 bg-[#08101e] border border-cyan-500/30 relative">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>CORE TARGET OBJECTIVE // 2026 ROADMAP</span>
            </div>
            <p className="text-xl sm:text-3xl font-black text-white uppercase font-tech leading-snug">
              &ldquo;{buildingToward.goal}&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Milestones Hub */}
        <div className="space-y-8">
          {/* Milestone Selection Tabs */}
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveMilestoneTab("infra");
              }}
              className={`px-5 py-3 border transition-all flex items-center gap-2 cursor-pointer ${
                activeMilestoneTab === "infra"
                  ? "border-emerald-400 bg-emerald-500/15 text-white font-bold shadow-lg"
                  : "border-white/10 bg-black/40 text-slate-400 hover:text-white"
              }`}
            >
              <Server className="w-4 h-4 text-emerald-400" />
              <span>MILESTONE 01: REPRODUCIBLE INFRASTRUCTURE PROJECT</span>
            </button>

            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveMilestoneTab("gpu");
              }}
              className={`px-5 py-3 border transition-all flex items-center gap-2 cursor-pointer ${
                activeMilestoneTab === "gpu"
                  ? "border-cyan-400 bg-cyan-500/15 text-white font-bold shadow-lg"
                  : "border-white/10 bg-black/40 text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>MILESTONE 02: CPU & GPU PERFORMANCE MEASUREMENT</span>
            </button>
          </div>

          {/* Active Milestone Card */}
          {activeMilestoneTab === "infra" && (
            <div className="blueprint-box p-6 sm:p-10 bg-[#060912] border border-white/15 space-y-8">
              <div className="border-b border-white/10 pb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
                  <span>MILESTONE 01 // PRODUCTION-GRADE INFRASTRUCTURE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-tech uppercase">
                  {buildingToward.milestone1.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
                  {buildingToward.milestone1.summary}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  VERIFIED DELIVERABLES & PIPELINE GATES:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {buildingToward.milestone1.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-black/60 border border-white/10 flex items-start gap-3 font-mono text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-sans leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMilestoneTab === "gpu" && (
            <div className="blueprint-box p-6 sm:p-10 bg-[#060912] border border-white/15 space-y-8">
              <div className="border-b border-white/10 pb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                  <span>MILESTONE 02 // HARDWARE & TENSOR PROFILING</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-tech uppercase">
                  {buildingToward.milestone2.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
                  {buildingToward.milestone2.summary}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  EXPERIMENTAL MEASUREMENTS & EVIDENCE LOG:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {buildingToward.milestone2.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-black/60 border border-white/10 flex items-start gap-3 font-mono text-xs"
                    >
                      <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-sans leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
