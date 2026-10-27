"use client";

import React, { useState } from "react";
import { PROJECTS, SELECTED_PROJECT_DISCLAIMER } from "@/data/projects";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers, Cpu, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export function ProjectArchive() {
  const [showOther, setShowOther] = useState(false);
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);

  const headlineProjects = PROJECTS.filter((p) => p.headline);
  const otherProjects = PROJECTS.filter((p) => !p.headline);

  const toggleArch = (id: string) => {
    SoundEngine.playClick();
    setExpandedArchitecture((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-1">
            Practical software tools, experiments in system interaction, and GPU-driven graphics.
          </p>
        </div>

        {/* 3 Main Projects */}
        <div className="space-y-12">
          {headlineProjects.map((project) => (
            <article
              key={project.id}
              className="space-y-4 pt-8 first:pt-0 border-t first:border-t-0 border-white/[0.08]"
            >
              {/* Title & Link */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-medium text-neutral-100 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400">
                    {project.techStack.join(" · ")}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleArch(project.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{expandedArchitecture === project.id ? "Hide Architecture" : "Inspect Architecture"}</span>
                    {expandedArchitecture === project.id ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <span className="text-neutral-700">/</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => SoundEngine.playClick()}
                    className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white transition-colors shrink-0"
                  >
                    <span>Source code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {project.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-400 font-normal pl-4 list-disc marker:text-neutral-600">
                {project.focusAreas.slice(0, 2).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
                {project.nextPriorities.length > 0 && (
                  <li>
                    <span className="text-neutral-300 font-medium">Next engineering priorities:</span>{" "}
                    {project.nextPriorities.join(" · ")}
                  </li>
                )}
              </ul>

              {/* Interactive Architecture Blueprint Drawer */}
              {expandedArchitecture === project.id && (
                <div className="mt-4 p-5 rounded-lg bg-[#0e0e11] border border-white/[0.1] space-y-4 font-mono text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-2 border-b border-white/[0.06]">
                    <span className="flex items-center gap-1.5 text-neutral-200">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SYSTEM ARCHITECTURE BLUEPRINT // {project.id.toUpperCase()}</span>
                    </span>
                    <span className="text-[10px] text-neutral-500">INTERACTIVE INSPECTOR</span>
                  </div>

                  {project.id === "remowser" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <div className="p-2.5 bg-black/50 border border-white/[0.06] rounded space-y-1">
                          <div className="text-[10px] text-neutral-500">STAGE 01</div>
                          <div className="font-semibold text-neutral-200">DOM Observer</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            Extracts accessibility tree &amp; interactive form elements.
                          </div>
                        </div>
                        <div className="p-2.5 bg-black/50 border border-cyan-500/30 rounded space-y-1">
                          <div className="text-[10px] text-cyan-400">STAGE 02</div>
                          <div className="font-semibold text-cyan-200">Ollama 8B Engine</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            Structured JSON output reasoning over agent objectives.
                          </div>
                        </div>
                        <div className="p-2.5 bg-black/50 border border-white/[0.06] rounded space-y-1">
                          <div className="text-[10px] text-neutral-500">STAGE 03</div>
                          <div className="font-semibold text-neutral-200">Playwright Driver</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            Dispatches mouse clicks, keystrokes, and tab switches.
                          </div>
                        </div>
                        <div className="p-2.5 bg-black/50 border border-emerald-500/30 rounded space-y-1">
                          <div className="text-[10px] text-emerald-400">STAGE 04</div>
                          <div className="font-semibold text-emerald-200">Verification</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            Asserts DOM mutations and network requests match goal.
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                        Designed for reliable local inference with zero cloud dependency. Error recovery handles unexpected modal popups, selector mismatches, and network backoff gracefully.
                      </div>
                    </div>
                  )}

                  {project.id === "remoainter" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                        <div className="p-2 bg-black/50 border border-white/[0.06] rounded">
                          <div className="text-[10px] text-neutral-500">CHANNEL 01</div>
                          <div className="text-neutral-200 font-medium">Albedo</div>
                          <div className="text-[9px] text-neutral-400 font-sans mt-0.5">sRGB → Linear</div>
                        </div>
                        <div className="p-2 bg-black/50 border border-white/[0.06] rounded">
                          <div className="text-[10px] text-neutral-500">CHANNEL 02</div>
                          <div className="text-neutral-200 font-medium">Roughness</div>
                          <div className="text-[9px] text-neutral-400 font-sans mt-0.5">Linear scalar [0,1]</div>
                        </div>
                        <div className="p-2 bg-black/50 border border-white/[0.06] rounded">
                          <div className="text-[10px] text-neutral-500">CHANNEL 03</div>
                          <div className="text-neutral-200 font-medium">Metallic</div>
                          <div className="text-[9px] text-neutral-400 font-sans mt-0.5">Conductor mask</div>
                        </div>
                        <div className="p-2 bg-black/50 border border-white/[0.06] rounded">
                          <div className="text-[10px] text-neutral-500">CHANNEL 04</div>
                          <div className="text-neutral-200 font-medium">Normal</div>
                          <div className="text-[9px] text-neutral-400 font-sans mt-0.5">MikkTSpace tangent</div>
                        </div>
                        <div className="p-2 bg-black/50 border border-white/[0.06] rounded">
                          <div className="text-[10px] text-neutral-500">CHANNEL 05</div>
                          <div className="text-neutral-200 font-medium">Height</div>
                          <div className="text-[9px] text-neutral-400 font-sans mt-0.5">Sobel gradient</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                        Implemented in pure Rust using Vulkan command buffers. Features non-destructive layer compositing in GPU linear space with channel packing presets for Unreal Engine and Unity.
                      </div>
                    </div>
                  )}

                  {project.id === "remoerminal" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="p-2.5 bg-black/50 border border-white/[0.06] rounded space-y-1">
                          <div className="text-[10px] text-neutral-500">SUBSYSTEM 01</div>
                          <div className="font-semibold text-neutral-200">SDL3 GPU Window</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            High-DPI glyph atlas caching and hardware accelerated blitting.
                          </div>
                        </div>
                        <div className="p-2.5 bg-black/50 border border-white/[0.06] rounded space-y-1">
                          <div className="text-[10px] text-neutral-500">SUBSYSTEM 02</div>
                          <div className="font-semibold text-neutral-200">POSIX PTY Master/Slave</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            openpty(), fork(), execvp(), and non-blocking stream I/O.
                          </div>
                        </div>
                        <div className="p-2.5 bg-black/50 border border-white/[0.06] rounded space-y-1">
                          <div className="text-[10px] text-neutral-500">SUBSYSTEM 03</div>
                          <div className="font-semibold text-neutral-200">Process Signals</div>
                          <div className="text-[10px] text-neutral-400 font-sans">
                            Trap handling for SIGINT, SIGWINCH terminal resizing, and graceful exit.
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                        C++20 native architecture built with CMakePresets and strict sanitizers (ASan/UBSan). Parses ANSI color codes and byte streams with predictable frame latency.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 sm:p-5 rounded-lg border border-white/[0.08] bg-[#0e0e11] text-xs sm:text-sm text-neutral-400 leading-relaxed">
          <p className="italic">
            &ldquo;{SELECTED_PROJECT_DISCLAIMER}&rdquo;
          </p>
        </div>

        {/* Other Experiments Accordion */}
        <div className="pt-2">
          <button
            onClick={() => {
              SoundEngine.playClick();
              setShowOther(!showOther);
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            <span>
              {showOther
                ? "Hide earlier projects archive"
                : "View earlier projects archive (OpenGL Renderer, IoT Analyzer, Game Jam Engine)"}
            </span>
            {showOther ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showOther && (
            <div className="mt-6 space-y-4 divide-y divide-white/[0.06] text-xs font-mono">
              {otherProjects.map((proj) => (
                <div key={proj.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-neutral-200 font-sans">{proj.title}</div>
                    <div className="text-neutral-400 font-sans mt-0.5">{proj.summary}</div>
                    <div className="text-[11px] text-neutral-400 mt-1">{proj.techStack.join(" · ")}</div>
                  </div>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white inline-flex items-center gap-1 shrink-0"
                    >
                      <span>code</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
