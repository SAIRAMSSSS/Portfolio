"use client";

import React from "react";
import { Terminal, Cpu, Gamepad2, Code, Layers } from "lucide-react";

export function TechStackEcosystem() {
  const columns = [
    {
      title: "DevOps & Infrastructure",
      subtitle: "Linux, Containers & Automation",
      icon: Terminal,
      color: "border-emerald-500/20 text-emerald-400",
      items: [
        { name: "Linux Systems", detail: "Daily driver, POSIX APIs, shell scripting, process signaling" },
        { name: "Docker & Containers", detail: "Multi-stage builds, layer caching, Docker compose isolation" },
        { name: "CI/CD Pipelines", detail: "Automated test suites, deterministic builds, GitHub Actions" },
        { name: "Kubernetes & Cloud", detail: "Container orchestration, services, deployment manifests" },
        { name: "Reliability & Telemetry", detail: "Health probes, automated failure recovery, logs" },
      ],
    },
    {
      title: "AI Systems & Computing",
      subtitle: "Local LLMs, Tensors & GPU",
      icon: Cpu,
      color: "border-cyan-500/20 text-cyan-300",
      items: [
        { name: "PyTorch & Tensors", detail: "Tensor ops, model profiling, arithmetic intensity analysis" },
        { name: "Local LLMs & Ollama", detail: "Local model pipelines, JSON schema enforcement, agent workflows" },
        { name: "CUDA Fundamentals", detail: "GPU throughput measurement, memory bandwidth profiling" },
        { name: "Browser Automation", detail: "Playwright headless pipelines, multi-step agent actions" },
        { name: "Precision Benchmarks", detail: "Comparative profiling across FP32, FP16, and INT8 formats" },
      ],
    },
    {
      title: "Side Quest: Graphics & Systems",
      subtitle: "Vulkan, OpenGL & Game Tech",
      icon: Gamepad2,
      color: "border-violet-500/20 text-violet-300",
      items: [
        { name: "C++20 & SDL3", detail: "Native terminal engines, POSIX PTY forks, cross-platform GUI" },
        { name: "Rust & Vulkan", detail: "3D texture painter architecture, command buffers, pipeline caches" },
        { name: "OpenGL 4.6 & GLSL", detail: "Programmable graphics pipeline, custom fragment/vertex shaders" },
        { name: "PBR Material Pipelines", detail: "Albedo, Roughness, Metallic, MikkTSpace normal maps" },
        { name: "CMake & Build Systems", detail: "Strict compiler warnings (-Wall -Wextra), sanitizer support" },
      ],
    },
  ];

  const coreLanguages = [
    { label: "Languages", list: "C++20, Rust, Python, JavaScript / TypeScript" },
    { label: "Application & Web", list: "React, Next.js, Django, PostgreSQL, TailwindCSS" },
    { label: "Systems & Toolchains", list: "Git, CMake, Cargo, POSIX / PTY, Bash, Zsh" },
  ];

  return (
    <section id="toolkit" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Engineering Toolkit
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
            Technologies and systems applied across active infrastructure, AI pipelines, native software tools, and graphics side quests.
          </p>
        </div>

        {/* 3-Column Visual Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="bg-[#0e0e11] border border-white/[0.08] hover:border-white/[0.18] rounded-lg p-5 flex flex-col justify-between transition-colors space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-100 tracking-tight">
                        {col.title}
                      </h3>
                      <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {col.subtitle}
                      </div>
                    </div>
                    <div className={`p-1.5 rounded border ${col.color} bg-white/[0.02]`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item.name} className="space-y-0.5">
                        <div className="text-xs font-medium text-neutral-200">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                          {item.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom General Stack strip */}
        <div className="bg-[#0e0e11] border border-white/[0.08] rounded-lg p-5 divide-y divide-white/[0.06]">
          {coreLanguages.map((row) => (
            <div
              key={row.label}
              className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1"
            >
              <span className="font-mono text-neutral-400 sm:w-1/3">{row.label}</span>
              <span className="text-neutral-200 font-medium sm:w-2/3">{row.list}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-400 italic pt-2 border-t border-white/[0.06]">
          &ldquo;Build with verified fundamentals. Measure latency and memory on real hardware. Write code that compiles cleanly under strict toolchains.&rdquo;
        </p>
      </div>
    </section>
  );
}
