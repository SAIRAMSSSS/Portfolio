"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { TIMELINE_DATA, TimelineNode } from "@/data/timeline";
import { PROFILE } from "@/data/profile";
import { 
  GitCommit, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Compass,
  Layers,
  GraduationCap
} from "lucide-react";

export function InteractiveTimeline() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("current");

  const activeNode = TIMELINE_DATA.find((n) => n.id === selectedNodeId) || TIMELINE_DATA[2];

  const handleSelect = (id: string) => {
    SoundEngine.playClick();
    setSelectedNodeId(id);
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#04060c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>THE EVOLUTIONARY TRAJECTORY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              ABOUT <span className="text-slate-500 font-light">& TIMELINE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Not a passive résumé narrative. An interactive chronological ledger detailing the evolution from 
              foundational low-level systems programming to AAA-grade environment art and real-time graphics engineering.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-black/60 p-3 border border-white/10 space-y-0.5 text-right">
            <span className="text-white font-bold block">{PROFILE.name}</span>
            <span className="text-amber-400 block">{PROFILE.degree}</span>
            <span className="text-slate-500 block">COIMBATORE, TN // IN</span>
          </div>
        </div>

        {/* Interactive Timeline Stepper Strip */}
        <div className="blueprint-box p-6 bg-[#060812] space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TIMELINE_DATA.map((node, index) => (
              <button
                key={node.id}
                onClick={() => handleSelect(node.id)}
                className={`p-4 text-left border transition-all cursor-pointer font-mono text-xs relative ${
                  selectedNodeId === node.id
                    ? "border-amber-400 bg-amber-950/40 text-white shadow-lg"
                    : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/30"
                }`}
              >
                <div className="text-[10px] text-slate-500 mb-1">0{index + 1} // ERA</div>
                <div className="text-amber-400 font-bold text-xs tracking-wider mb-1 font-dot">{node.tag}</div>
                <div className="text-white text-xs font-bold font-sans line-clamp-1">{node.title}</div>
                <span className={`text-[9px] inline-block px-1.5 py-0.2 mt-2 border ${
                  node.status === "CURRENT" ? "border-emerald-500 text-emerald-300 bg-emerald-500/10" : "border-white/10 text-slate-400"
                }`}>
                  {node.status}
                </span>
              </button>
            ))}
          </div>

          {/* Active Node Deep-Dive Stage */}
          <div className="p-6 sm:p-10 bg-black/80 border border-white/15 space-y-6 font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold tracking-widest uppercase">
                  <span>[{activeNode.tag}]</span>
                  <span>//</span>
                  <span>{activeNode.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 font-tech">
                  {activeNode.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">
                  {activeNode.subtitle}
                </p>
              </div>

              <span className="text-[10px] px-3 py-1 bg-white/5 border border-white/15 text-slate-300 w-fit">
                ERA: {activeNode.era}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              {activeNode.description}
            </p>

            {/* Key Milestones */}
            <div className="space-y-3 pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-bold block">
                KEY DELIVERABLES & EXPERIENCES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeNode.keyMilestones.map((m, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 text-xs font-sans text-slate-300 space-y-1">
                    <span className="font-mono text-emerald-400 font-bold text-[10px] block">
                      ✓ MILESTONE 0{i + 1}
                    </span>
                    <p className="leading-snug">{m}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Focus Tags */}
            <div className="border-t border-white/10 pt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 text-[10px] uppercase font-bold mr-2">TECH FOCUS:</span>
              {activeNode.techFocus.map((tf) => (
                <span key={tf} className="px-2.5 py-1 bg-black border border-white/20 text-amber-300 text-[11px]">
                  {tf}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
