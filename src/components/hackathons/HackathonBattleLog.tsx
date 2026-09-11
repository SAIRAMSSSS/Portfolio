"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { HACKATHON_STATS, HACKATHON_LOGS, HackathonEntry } from "@/data/hackathons";
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Terminal, 
  ChevronRight, 
  Flame, 
  Trophy, 
  X,
  Layers,
  Gamepad2
} from "lucide-react";

export function HackathonBattleLog() {
  const [selectedEntry, setSelectedEntry] = useState<HackathonEntry | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "NATIONAL", "COLLEGIATE", "GAME_JAM", "SECURITY"];

  const filteredLogs = activeCategory === "ALL"
    ? HACKATHON_LOGS
    : HACKATHON_LOGS.filter((h) => h.category === activeCategory);

  const openLog = (item: HackathonEntry) => {
    SoundEngine.playClick();
    setSelectedEntry(item);
  };

  return (
    <section id="hackathons" className="py-24 sm:py-32 relative bg-[#05070c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header & Stats Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5" />
              <span>THE 50+ CRUCIBLE LOGS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              HACKATHON <span className="text-slate-500 font-light">BATTLE LOG</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Over 50 high-pressure competitive weekend sprints. From national collegiate podiums 
              to 48-hour game jam shader marathons, this is where rapid systems architecture and debugging speed were forged.
            </p>
          </div>

          {/* Quick Category Filter */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  SoundEngine.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 border tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold"
                    : "border-white/10 text-slate-400 hover:text-white bg-white/5"
                }`}
              >
                {cat.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Podium Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CMS Podium */}
          <div className="blueprint-box p-6 bg-[#080d1a] border border-amber-500/40 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">
                [HACK_050]
              </span>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                <Trophy className="w-3 h-3" /> 3RD PLACE
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              CMS College Hackathon
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Placed 3rd among 50+ competing teams. Developed the IoT Vulnerability Analyzer sniffer.
            </p>
            <div className="font-mono text-[10px] text-slate-400 pt-2 border-t border-white/10">
              FIELD: 50+ Collegiate Teams // 24-Hour Sprint
            </div>
          </div>

          {/* SRCAS National Podium */}
          <div className="blueprint-box p-6 bg-[#080d1a] border border-cyan-500/40 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">
                [HACK_049]
              </span>
              <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                <Award className="w-3 h-3" /> NATIONAL RUNNER-UP
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              SRCAS National Hackathon
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              National Level Runner-Up against teams across India. Built real-time systems anomaly sentinel.
            </p>
            <div className="font-mono text-[10px] text-slate-400 pt-2 border-t border-white/10">
              SCALE: National Engineering Summit // 36-Hour Sprint
            </div>
          </div>

          {/* Game Jams */}
          <div className="blueprint-box p-6 bg-[#080d1a] border border-emerald-500/40 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest">
                [HACK_048 - 046]
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                <Gamepad2 className="w-3 h-3" /> 3 GAME JAMS
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              Retropunk & 3D Jams
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Authored custom screen shaders (HLSL/ShaderLab) and character movement state machines in 48 hours.
            </p>
            <div className="font-mono text-[10px] text-slate-400 pt-2 border-t border-white/10">
              DISCIPLINE: C++ // HLSL // Unreal // 48-Hour Deployed
            </div>
          </div>
        </div>

        {/* Chronological Battle Log Table */}
        <div className="blueprint-box p-4 sm:p-8 bg-[#060810] space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
            <span className="text-slate-300 font-bold uppercase tracking-wider">
              TACTICAL FLIGHT RECORDER // MISSION CHRONOLOGY
            </span>
            <span className="text-slate-500">
              SHOWING {filteredLogs.length} OF 50+ MISSIONS
            </span>
          </div>

          <div className="divide-y divide-white/5 font-mono text-xs">
            {filteredLogs.map((entry) => (
              <div
                key={entry.id}
                onClick={() => openLog(entry)}
                className="py-3.5 px-3 hover:bg-white/5 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-xs ${
                    entry.isHighlight ? "text-amber-400" : "text-slate-500"
                  }`}>
                    {entry.code}
                  </span>
                  <div>
                    <div className="text-white font-bold group-hover:text-amber-400 transition-colors flex items-center gap-2">
                      <span>{entry.title}</span>
                      {entry.placement && (
                        <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/10 text-amber-300 border border-amber-500/20 font-normal">
                          {entry.placement}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans">
                      Project: {entry.projectTitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                  <span className="hidden md:inline px-2 py-0.5 bg-white/5 border border-white/10 text-[10px]">
                    {entry.duration}
                  </span>
                  <span className="text-slate-500 hidden sm:inline">
                    {entry.organizer}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Battle Log Detail Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#0b0f19] border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-amber-400 font-bold block">{selectedEntry.code}</span>
                <h3 className="text-xl font-bold text-white">{selectedEntry.title}</h3>
                <p className="text-slate-400 text-[11px]">{selectedEntry.organizer}</p>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-1 hover:text-white text-slate-400 hover:bg-white/10 rounded-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedEntry.placement && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>ACHIEVEMENT: {selectedEntry.placement}</span>
              </div>
            )}

            <div className="space-y-2">
              <span className="text-slate-400 uppercase tracking-widest text-[10px] block">PROJECT & SUMMARY</span>
              <div className="text-white text-sm font-bold">{selectedEntry.projectTitle}</div>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                {selectedEntry.summary}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 uppercase tracking-widest text-[10px] block">TECH STACK UTILIZED</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedEntry.techStack.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-cyan-300 text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black/60 border border-white/10 space-y-1">
              <span className="text-emerald-400 uppercase tracking-widest text-[10px] block font-bold">
                ENGINEERING TAKEAWAYS //
              </span>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                {selectedEntry.takeaways}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedEntry(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
              >
                CLOSE LOG
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
