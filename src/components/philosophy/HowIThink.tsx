"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PHILOSOPHY_PRINCIPLES } from "@/data/philosophy";
import { Sparkles, Terminal, Code2, Layers, Cpu, ArrowRight } from "lucide-react";

export function HowIThink() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activePrinciple = PHILOSOPHY_PRINCIPLES[activeIdx];

  return (
    <section id="philosophy" className="py-24 sm:py-32 relative bg-[#030509] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              HOW I <span className="text-slate-500 font-light">THINK</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Software and 3D art are grounded in first principles. These foundational tenets guide every 
              line of C++, every vertex bevel in Blender, and every community initiative.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right">
            <span>5 AXIOMS // SHIPPED SYSTEMS</span>
          </div>
        </div>

        {/* Big Kinetic Typographic Statements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Statement Selector List */}
          <div className="lg:col-span-6 space-y-3">
            {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.index}
                onClick={() => {
                  SoundEngine.playClick();
                  setActiveIdx(idx);
                }}
                className={`p-6 border transition-all cursor-pointer font-mono select-none group ${
                  activeIdx === idx
                    ? "border-amber-400 bg-[#080d1a] shadow-xl"
                    : "border-white/10 bg-black/40 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold text-amber-400">{principle.index} // AXIOM</span>
                  <span className="text-slate-600 group-hover:text-white transition-colors">
                    {activeIdx === idx ? "ACTIVE" : "SELECT"}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-black tracking-tight uppercase transition-colors ${
                  activeIdx === idx ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {principle.statement}
                </h3>

                <p className="text-xs text-slate-400 font-sans mt-2 line-clamp-1">
                  {principle.subheading}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Principle Deep Dive & Code Fragment */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="blueprint-box p-6 sm:p-10 bg-[#070a14] space-y-6 font-mono text-xs">
              <div className="border-b border-white/10 pb-4 space-y-1">
                <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
                  PRINCIPLE SPECIFICATION // {activePrinciple.index}
                </span>
                <h3 className="text-3xl font-black text-white font-mono uppercase">
                  {activePrinciple.statement}
                </h3>
                <p className="text-xs text-amber-300 font-sans mt-1">
                  {activePrinciple.subheading}
                </p>
              </div>

              {/* Elaboration */}
              <div className="space-y-2">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  THE RATIONALE:
                </span>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {activePrinciple.elaboration}
                </p>
              </div>

              {/* Code Fragment Demonstration */}
              <div className="space-y-2">
                <span className="text-cyan-400 text-[10px] uppercase tracking-wider block font-bold">
                  CODE MANIFESTATION:
                </span>
                <div className="p-4 bg-black/90 border border-white/10 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto select-text font-mono">
                  <pre>{activePrinciple.codeSnippet}</pre>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-slate-500 text-[10px]">
                <span>AXIOM VERIFIED THROUGH EXPERIENCE</span>
                <span className="text-amber-400 font-bold">ART ↔ CODE ↔ GAMES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
