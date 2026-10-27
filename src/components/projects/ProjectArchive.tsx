"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROJECTS, ProjectItem, SELECTED_PROJECT_DISCLAIMER } from "@/data/projects";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { 
  Box, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Layers, 
  Copy, 
  Check, 
  AlertTriangle,
  ArrowRight,
  Code2,
  ChevronDown,
  ChevronUp,
  Flame,
  ShieldCheck
} from "lucide-react";

export function ProjectArchive() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showExtendedArchive, setShowExtendedArchive] = useState<boolean>(false);
  const [selectedExtendedCategory, setSelectedExtendedCategory] = useState<string>("ALL");

  const headlineProjects = PROJECTS.filter((p) => p.headline);
  const extendedProjects = PROJECTS.filter((p) => !p.headline);

  const filteredExtended = selectedExtendedCategory === "ALL"
    ? extendedProjects
    : extendedProjects.filter((p) => p.category === selectedExtendedCategory);

  const copyCommand = (id: string, cmd: string) => {
    SoundEngine.playClick();
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#030509] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <Box className="w-3.5 h-3.5" />
              <span>SECTION 02 // REPRODUCIBLE REPOSITORIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              02 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">SELECTED PROJECTS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Practical software systems, hardware-level explorations, and experimental developer tools built from first principles with public source code and reproducible setups.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-cyan-400 font-bold block">ACTIVE ENGINEERING WORK</span>
            <span className="text-slate-400">CODE • DEMONSTRATIONS • EVIDENCE</span>
          </div>
        </div>

        {/* 3 HEADLINE PROJECTS DISPLAY */}
        <div className="space-y-12">
          {headlineProjects.map((project, idx) => (
            <article
              key={project.id}
              className="blueprint-box p-6 sm:p-10 lg:p-12 relative transition-all duration-300 bg-[#050812] border border-white/15 hover:border-cyan-500/40 group"
            >
              {/* Massive subtle background number */}
              <div className="absolute top-4 right-8 text-7xl sm:text-9xl font-black font-mono text-white/5 select-none pointer-events-none">
                {project.number}
              </div>

              <div className="relative z-10 space-y-8">
                {/* Title & Metadata Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 font-mono text-xs">
                      <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
                        ARTIFACT {project.number}
                      </span>
                      <span className="text-slate-500">{"//"}</span>
                      <span className="text-slate-400">{project.role}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-tech">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-cyan-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Direct Github Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => SoundEngine.playClick()}
                    className="px-4 py-2.5 bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all border border-white/20 cursor-pointer shadow-md"
                  >
                    <span>Source code →</span>
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-black/60 border border-white/15 text-slate-300 font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Summary & Core Narrative */}
                <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-4xl">
                  {project.summary}
                </p>

                {/* Focus Areas & Next Priorities 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Left Column: Focus Areas */}
                  <div className="p-5 bg-black/50 border border-white/10 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>KEY FOCUS AREAS:</span>
                    </div>
                    <ul className="space-y-2 font-sans text-slate-300 text-xs sm:text-sm">
                      {project.focusAreas.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-mono text-xs mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Next Engineering Priorities */}
                  <div className="p-5 bg-black/50 border border-white/10 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>NEXT ENGINEERING PRIORITIES:</span>
                    </div>
                    <ul className="space-y-2 font-sans text-slate-300 text-xs sm:text-sm">
                      {project.nextPriorities.map((item, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono text-xs mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 1-Click Reproduction Terminal Command */}
                {project.reproductionCommand && (
                  <div className="p-4 bg-[#020306] border border-white/15 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>REPRODUCIBLE EXECUTION // RUN LOCALLY:</span>
                      </span>
                      <button
                        onClick={() => copyCommand(project.id, project.reproductionCommand!)}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedId === project.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY RUNBOOK</span>
                          </>
                        )}
                      </button>
                    </div>
                    <code className="block text-slate-200 overflow-x-auto py-1 text-[11px] sm:text-xs">
                      $ {project.reproductionCommand}
                    </code>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* INTEGRITY & ACTIVE WORK DISCLAIMER */}
        <div className="p-6 sm:p-8 bg-[#090e18] border border-amber-500/30 relative">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                ACTIVE ENGINEERING INTEGRITY NOTICE
              </span>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                &ldquo;{SELECTED_PROJECT_DISCLAIMER}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* EXPANDABLE EXTENDED ARCHIVE TOGGLE */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-tech">
                EXTENDED ARCHIVE // GRAPHICS, SECURITY & GAME JAMS
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Additional C++ OpenGL labs, network packet analyzers, and game jam systems.
              </p>
            </div>

            <button
              onClick={() => {
                SoundEngine.playClick();
                setShowExtendedArchive(!showExtendedArchive);
              }}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{showExtendedArchive ? "COLLAPSE ARCHIVE" : "VIEW EXTENDED ARCHIVE (4)"}</span>
              {showExtendedArchive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Extended Grid */}
          {showExtendedArchive && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {filteredExtended.map((project) => (
                <div
                  key={project.id}
                  className="blueprint-box p-6 bg-[#060912] border border-white/15 space-y-4 font-mono text-xs"
                >
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span className="text-amber-400 font-bold">{project.number} {"//"} {project.category}</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>REPO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h4 className="text-xl font-black text-white uppercase font-tech">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-black/60 border border-white/10 text-[10px] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
