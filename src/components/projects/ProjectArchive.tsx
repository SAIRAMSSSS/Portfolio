"use client";

import React, { useState } from "react";
import { PROJECTS, SELECTED_PROJECT_DISCLAIMER } from "@/data/projects";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export function ProjectArchive() {
  const [showOther, setShowOther] = useState(false);

  const headlineProjects = PROJECTS.filter((p) => p.headline);
  const otherProjects = PROJECTS.filter((p) => !p.headline);

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Practical software tools, experiments in system interaction, and GPU-driven graphics.
          </p>
        </div>

        {/* 3 Main Projects */}
        <div className="space-y-12">
          {headlineProjects.map((project) => (
            <article
              key={project.id}
              className="group space-y-4 pt-8 first:pt-0 border-t first:border-t-0 border-white/[0.06]"
            >
              {/* Title & Link */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-medium text-neutral-100">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400">
                    {project.techStack.join(" · ")}
                  </div>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => SoundEngine.playClick()}
                  className="inline-flex items-center gap-1 text-sm font-mono text-neutral-400 hover:text-white transition-colors shrink-0"
                >
                  <span>Source code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
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
            </article>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 sm:p-5 rounded border border-white/[0.08] bg-white/[0.02] text-xs sm:text-sm text-neutral-400 leading-relaxed">
          <p className="italic">
            &ldquo;{SELECTED_PROJECT_DISCLAIMER}&rdquo;
          </p>
        </div>

        {/* Other Experiments Accordion */}
        <div className="pt-4">
          <button
            onClick={() => {
              SoundEngine.playClick();
              setShowOther(!showOther);
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            <span>{showOther ? "Hide earlier projects" : "View earlier projects (OpenGL, IoT Analyzer, Game Jam)"}</span>
            {showOther ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showOther && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded border border-white/[0.06] bg-white/[0.01] space-y-2 text-xs"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-neutral-200 text-sm">{p.title}</span>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white flex items-center gap-0.5 font-mono text-[11px]"
                    >
                      <span>repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="font-mono text-[11px] text-neutral-500">
                    {p.techStack.slice(0, 4).join(" · ")}
                  </div>
                  <p className="text-neutral-400 leading-relaxed line-clamp-2">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
