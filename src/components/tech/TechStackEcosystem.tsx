"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { TECH_CATEGORIES, TECH_ITEMS, TechItem } from "@/data/skills";
import { Cpu, Layers, Terminal, Sparkles, ChevronRight, Check } from "lucide-react";

export function TechStackEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string>("ENVIRONMENT_ART");
  const [hoveredTech, setHoveredTech] = useState<TechItem>(TECH_ITEMS[0]);

  const currentCategoryItems = TECH_ITEMS.filter((item) => item.category === activeCategory);

  const handleTechHover = (item: TechItem) => {
    SoundEngine.playHover();
    setHoveredTech(item);
  };

  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative bg-[#050810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE TECHNICAL ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              TECH <span className="text-slate-500 font-light">ARSENAL</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              No generic logo strips. Hover any technology in the matrix to inspect real-world project applications, 
              implementation depth, and cross-discipline integration notes.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right">
            <span>METHOD: ZERO FAKE PERCENTAGES</span><br />
            <span className="text-slate-400">PRACTICAL PRODUCTION MASTERY ONLY</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                SoundEngine.playClick();
                setActiveCategory(cat.id);
                const first = TECH_ITEMS.find((i) => i.category === cat.id);
                if (first) setHoveredTech(first);
              }}
              className={`px-4 py-2 border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                  : "border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/25"
              }`}
            >
              <div>{cat.label}</div>
              <div className="text-[9px] text-slate-500 font-normal">{cat.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Interactive Matrix & Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technology Badges in Active Category */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentCategoryItems.map((tech) => (
              <div
                key={tech.id}
                onMouseEnter={() => handleTechHover(tech)}
                onClick={() => handleTechHover(tech)}
                className={`p-4 border transition-all cursor-pointer font-mono text-xs relative ${
                  hoveredTech.id === tech.id
                    ? "border-amber-400 bg-amber-950/30 text-white shadow-md"
                    : "border-white/10 bg-black/50 text-slate-300 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">{tech.name}</span>
                  {tech.levelLabel && (
                    <span className="text-[9px] px-1.5 py-0.2 bg-white/10 text-amber-300">
                      {tech.levelLabel}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 font-sans line-clamp-2 mt-1">
                  {tech.shortDescription}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Live Detailed Inspector Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="blueprint-box p-6 sm:p-8 bg-[#070a14] space-y-6 font-mono text-xs">
              {/* Header */}
              <div className="border-b border-white/10 pb-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold tracking-widest text-[10px] uppercase">
                    TECHNOLOGY DOSSIER // {hoveredTech.category}
                  </span>
                  {hoveredTech.levelLabel && (
                    <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
                      {hoveredTech.levelLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white font-mono">
                  {hoveredTech.name}
                </h3>
              </div>

              {/* What it is used for */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  WHAT I USE IT FOR:
                </span>
                <p className="text-slate-200 text-xs font-sans leading-relaxed">
                  {hoveredTech.usedFor}
                </p>
              </div>

              {/* Technical Depth Notes */}
              <div className="p-4 bg-black/60 border border-white/10 space-y-1">
                <span className="text-cyan-400 text-[10px] uppercase tracking-wider block font-bold">
                  TECHNICAL DEPTH & ARCHITECTURE:
                </span>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  {hoveredTech.depthNotes}
                </p>
              </div>

              {/* Relevant Projects */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  APPLIED IN PROJECTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hoveredTech.relevantProjects.map((p) => (
                    <span key={p} className="px-2 py-0.5 bg-white/10 text-amber-300 text-[10px] border border-white/15">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Stack */}
              <div className="space-y-1.5 border-t border-white/10 pt-4">
                <span className="text-slate-500 text-[10px] uppercase tracking-wider block font-bold">
                  CONNECTED TECHNOLOGIES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hoveredTech.relatedTech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-black text-slate-400 text-[10px] border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
