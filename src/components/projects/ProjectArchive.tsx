"use client";

import React, { useState } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { 
  Box, 
  ExternalLink, 
  Layers, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Sparkles, 
  ChevronRight,
  Maximize2,
  X,
  Sliders
} from "lucide-react";

export function ProjectArchive() {
  const { mode } = useDuality();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "ART", "GRAPHICS", "SECURITY", "GAMES", "AI"];

  const filteredProjects = activeFilter === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeFilter);

  const openArtifact = (proj: ProjectItem) => {
    SoundEngine.playClick();
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#04060a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Box className="w-3.5 h-3.5" />
              <span>THE DIGITAL MUSEUM // REPOSITORIES OF WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              PROJECT <span className="text-slate-500 font-light">ARCHIVE</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Every project is treated as an engineered artifact: complete with architectural constraints, 
              hardware bottlenecks, design iterations, and measured results.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  SoundEngine.playClick();
                  setActiveFilter(cat);
                }}
                className={`px-3 py-1.5 border tracking-wider transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? "border-amber-400 bg-amber-400/15 text-amber-300 font-bold"
                    : "border-white/10 text-slate-400 hover:text-white hover:border-white/30 bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large-Format Museum Artifacts Grid */}
        <div className="space-y-24">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="blueprint-box p-6 sm:p-10 lg:p-12 relative transition-all duration-300 group"
            >
              {/* Background Accent Lines */}
              <div className="absolute top-0 right-12 text-7xl sm:text-9xl font-black font-mono text-white/5 select-none pointer-events-none">
                {project.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Left: Project Imagery & Visual Artifact */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="relative aspect-16/10 bg-black/90 border border-white/20 overflow-hidden shadow-2xl group/img">
                    <img
                      src={project.visuals.hero}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-90 group-hover/img:opacity-100"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/20 font-mono text-[10px] text-amber-300 tracking-wider">
                      {project.visuals.badge}
                    </div>

                    {/* Expand Trigger */}
                    <button
                      onClick={() => openArtifact(project)}
                      className="absolute bottom-3 right-3 bg-black/85 hover:bg-amber-500 hover:text-black text-white p-2 border border-white/20 transition-colors font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>INSPECT ARTIFACT</span>
                    </button>
                  </div>

                  {/* Caption & Metrics Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400 border-t border-white/10 pt-3">
                    <span className="text-slate-300">{project.visuals.caption}</span>
                    {project.metrics && (
                      <div className="flex items-center gap-4">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="text-right">
                            <span className="text-[10px] text-slate-500 block">{m.label}</span>
                            <span className="text-white font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Technical Narrative & Execution */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Category & Project Number */}
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                        PROJECT {project.number}
                      </span>
                      <span className="text-slate-500">//</span>
                      <span className="text-slate-400">{project.category}</span>
                      <span className="text-slate-500">//</span>
                      <span className="text-slate-400">{project.role}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-amber-400/90">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed pt-2">
                      {project.summary}
                    </p>

                    {/* Problem vs Solution High-level callout */}
                    <div className="p-3.5 bg-black/60 border-l-2 border-amber-400 space-y-1 text-xs">
                      <span className="font-mono text-[10px] text-amber-400 font-bold tracking-wider uppercase block">
                        THE CHALLENGE //
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-xs border-t border-white/10">
                    <button
                      onClick={() => openArtifact(project)}
                      className="px-4 py-2 bg-white text-black font-bold hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>READ FULL MANIFEST</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>SOURCE</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DETAILED ARTIFACT INSPECTOR MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b0e17] border border-white/20 shadow-2xl text-slate-200 overflow-hidden relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#111726] border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white tracking-wider">
                  ARTIFACT SPECIFICATION // [{selectedProject.number}] {selectedProject.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:text-white text-slate-400 hover:bg-white/10 rounded-xs"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#07090f] text-sm">
              {/* Media Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-16/10 bg-black border border-white/15 overflow-hidden">
                  <img 
                    src={selectedProject.visuals.hero} 
                    alt="Hero Visual" 
                    className="w-full h-full object-cover"
                  />
                  <div className="p-1.5 bg-black/75 text-[10px] font-mono text-slate-400 border-t border-white/10">
                    PASS 1: BEAUTY / COMPOSITION RENDER
                  </div>
                </div>
                {selectedProject.visuals.wireframe && (
                  <div className="aspect-16/10 bg-black border border-white/15 overflow-hidden">
                    <img 
                      src={selectedProject.visuals.wireframe} 
                      alt="Wireframe Pass" 
                      className="w-full h-full object-cover"
                    />
                    <div className="p-1.5 bg-black/75 text-[10px] font-mono text-slate-400 border-t border-white/10">
                      PASS 2: WIREFRAME & TOPOLOGY INSPECTION
                    </div>
                  </div>
                )}
              </div>

              {/* Problem & Idea */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase">
                    1. THE PROBLEM
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                    2. THE ARCHITECTURAL IDEA
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {selectedProject.idea}
                  </p>
                </div>
              </div>

              {/* Engineering Process Steps */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase">
                  3. EXECUTION PROCESS & METHODOLOGY
                </h4>
                <div className="space-y-2">
                  {selectedProject.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-black/50 border border-white/10 text-xs">
                      <span className="font-mono text-amber-400 font-bold shrink-0">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & What Was Learned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-rose-400 tracking-wider uppercase">
                    4. TECHNICAL BOTTLENECKS
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedProject.technicalChallenges.map((ch, i) => (
                      <li key={i} className="p-3 bg-rose-950/20 border border-rose-900/30">
                        • {ch}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase">
                    5. WHAT WAS LEARNED
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedProject.whatWasLearned.map((wl, i) => (
                      <li key={i} className="p-3 bg-emerald-950/20 border border-emerald-900/30">
                        ✓ {wl}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Final Result */}
              <div className="p-5 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30 space-y-1">
                <h4 className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase">
                  6. MEASURABLE RESULT
                </h4>
                <p className="text-white font-medium text-xs sm:text-sm">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-[#111726] border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">STATUS: VERIFIED PRODUCTION ARTIFACT</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                CLOSE MANIFEST
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
