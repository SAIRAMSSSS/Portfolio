"use client";

import React from "react";
import { TOOLKIT_DISTINCTION_STATEMENT } from "@/data/skills";

export function TechStackEcosystem() {
  const usedInProjects = [
    { label: "Languages", items: "C++, Python, JavaScript / TypeScript, Rust" },
    { label: "Systems", items: "Linux, Git, CMake, command-line workflows" },
    { label: "Containers", items: "Docker fundamentals" },
    { label: "Application development", items: "React, Next.js, Django, PostgreSQL" },
    { label: "Graphics", items: "OpenGL, Vulkan exploration, shaders and 3D workflows" },
  ];

  const currentlyDeveloping = [
    "CI/CD and automated build-and-test pipelines",
    "Kubernetes, cloud infrastructure and infrastructure as code",
    "Monitoring, logging and deployment reliability",
    "PyTorch, CUDA fundamentals and GPU performance measurement",
  ];

  return (
    <section id="toolkit" className="py-16 sm:py-20 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Engineering Toolkit
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Technologies evaluated and applied in real codebases versus active learning areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-sm">
          {/* Used in projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 border-b border-white/[0.08] pb-2">
              Used in projects and practical experiments
            </h3>
            <dl className="space-y-3">
              {usedInProjects.map((group) => (
                <div key={group.label} className="space-y-0.5">
                  <dt className="text-xs text-neutral-400 font-mono">{group.label}</dt>
                  <dd className="text-neutral-200 font-normal text-sm">{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Currently developing */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 border-b border-white/[0.08] pb-2">
              Currently developing
            </h3>
            <ul className="space-y-3">
              {currentlyDeveloping.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-300">
                  <span className="text-neutral-500 font-mono text-xs mt-0.5">↳</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Distinction note */}
        <p className="text-xs text-neutral-400 italic pt-2 border-t border-white/[0.06]">
          &ldquo;{TOOLKIT_DISTINCTION_STATEMENT}&rdquo;
        </p>
      </div>
    </section>
  );
}
