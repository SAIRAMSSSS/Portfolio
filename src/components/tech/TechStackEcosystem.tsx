"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { 
  TOOLKIT_CATEGORIES, 
  TOOLKIT_ITEMS, 
  TOOLKIT_DISTINCTION_STATEMENT, 
  ToolkitItem 
} from "@/data/skills";
import { 
  Cpu, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Hourglass, 
  Sparkles, 
  AlertCircle,
  FolderGit2,
  ExternalLink
} from "lucide-react";

export function TechStackEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "USED_IN_PROJECTS" | "CURRENTLY_DEVELOPING">("ALL");
  const [hoveredTech, setHoveredTech] = useState<ToolkitItem>(TOOLKIT_ITEMS[0]);

  const filteredItems = TOOLKIT_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    return matchesCategory && matchesStatus;
  });

  const handleTechHover = (item: ToolkitItem) => {
    SoundEngine.playHover();
    setHoveredTech(item);
  };

  return (
    <section id="toolkit" className="py-24 sm:py-32 relative bg-[#04060a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>SECTION 03 // ARSENAL MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              03 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">ENGINEERING TOOLKIT</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Technical tools grouped with uncompromising honesty. Real software engineering begins by distinguishing what has been battle-tested in running code from what is currently being mastered.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-amber-400 font-bold block">TRANSPARENT CLASSIFICATION</span>
            <span className="text-slate-400">ZERO FAKE SKILL PERCENTAGES</span>
          </div>
        </div>

        {/* CORE DISTINCTION MANDATE NOTICE */}
        <div className="p-6 sm:p-8 bg-[#090e18] border border-amber-500/30 relative">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                THE ENGINEERING PRINCIPLE
              </span>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                &ldquo;{TOOLKIT_DISTINCTION_STATEMENT}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Status Mode Tabs (Used in Projects vs Currently Developing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          {/* Status Split Toggle */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => {
                SoundEngine.playClick();
                setStatusFilter("ALL");
              }}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                statusFilter === "ALL"
                  ? "border-white bg-white/15 text-white font-bold"
                  : "border-white/10 text-slate-400 hover:text-white bg-black/40"
              }`}
            >
              ALL ITEMS ({TOOLKIT_ITEMS.length})
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setStatusFilter("USED_IN_PROJECTS");
              }}
              className={`px-3 py-1.5 border transition-all flex items-center gap-1.5 cursor-pointer ${
                statusFilter === "USED_IN_PROJECTS"
                  ? "border-emerald-400 bg-emerald-500/15 text-emerald-300 font-bold"
                  : "border-white/10 text-slate-400 hover:text-white bg-black/40"
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>USED IN PROJECTS ({TOOLKIT_ITEMS.filter((i) => i.status === "USED_IN_PROJECTS").length})</span>
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setStatusFilter("CURRENTLY_DEVELOPING");
              }}
              className={`px-3 py-1.5 border transition-all flex items-center gap-1.5 cursor-pointer ${
                statusFilter === "CURRENTLY_DEVELOPING"
                  ? "border-amber-400 bg-amber-500/15 text-amber-300 font-bold"
                  : "border-white/10 text-slate-400 hover:text-white bg-black/40"
              }`}
            >
              <Hourglass className="w-3 h-3 text-amber-400" />
              <span>CURRENTLY DEVELOPING ({TOOLKIT_ITEMS.filter((i) => i.status === "CURRENTLY_DEVELOPING").length})</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            SHOWING {filteredItems.length} OF {TOOLKIT_ITEMS.length} ARSENAL ITEMS
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {TOOLKIT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                SoundEngine.playClick();
                setActiveCategory(cat.id);
                const first = TOOLKIT_ITEMS.find((i) => cat.id === "ALL" || i.category === cat.id);
                if (first) setHoveredTech(first);
              }}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                  : "border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/25"
              }`}
            >
              <div>{cat.label}</div>
            </button>
          ))}
        </div>

        {/* Interactive Matrix & Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technology Badges */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredItems.map((tech) => {
              const isSelected = hoveredTech.id === tech.id;
              const isDev = tech.status === "CURRENTLY_DEVELOPING";
              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => handleTechHover(tech)}
                  onClick={() => handleTechHover(tech)}
                  className={`p-4 border transition-all cursor-pointer font-mono text-xs relative select-none ${
                    isSelected
                      ? isDev
                        ? "border-amber-400 bg-amber-950/30 text-white shadow-md shadow-amber-950/50"
                        : "border-emerald-400 bg-emerald-950/30 text-white shadow-md shadow-emerald-950/50"
                      : "border-white/10 bg-black/50 text-slate-300 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">{tech.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 border font-mono ${
                      isDev 
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                        : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                    }`}>
                      {isDev ? "DEVELOPING" : "USED IN PROJ"}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 font-sans line-clamp-2">
                    {tech.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Live Detailed Inspector Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="blueprint-box p-6 sm:p-8 bg-[#060912] border border-white/15 space-y-6 font-mono text-xs">
              {/* Header */}
              <div className="border-b border-white/10 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                    ARSENAL SPECIFICATION // {hoveredTech.category}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 border font-bold ${
                    hoveredTech.status === "CURRENTLY_DEVELOPING"
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                      : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  }`}>
                    {hoveredTech.levelBadge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase font-tech">
                  {hoveredTech.name}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  {hoveredTech.shortDescription}
                </p>
              </div>

              {/* Application / Learning Focus */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  {hoveredTech.status === "CURRENTLY_DEVELOPING" ? "LEARNING TRAJECTORY:" : "PRACTICAL APPLICATION:"}
                </span>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {hoveredTech.usedForOrFocus}
                </p>
              </div>

              {/* Evidence & Implementation Notes */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  TECHNICAL EVIDENCE:
                </span>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {hoveredTech.evidenceNotes}
                </p>
              </div>

              {/* Connected Repos / Projects */}
              {hoveredTech.relevantProjects.length > 0 && (
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                    CONNECTED PROJECTS / REPOSITORIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredTech.relevantProjects.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 bg-black/60 border border-white/10 text-[10px] text-slate-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
