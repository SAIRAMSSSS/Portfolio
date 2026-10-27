"use client";

import React from "react";
import { Terminal, Cpu, Gamepad2, ArrowRight } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export function CurrentDirectionSection() {
  const currentlyDoing = [
    {
      id: "devops-infra",
      category: "CURRENTLY DOING",
      badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      dotColor: "bg-emerald-400",
      title: "DevOps, Cloud & Infrastructure Engineering",
      icon: Terminal,
      tagline: "Linux · Docker · CI/CD Pipelines · Reliability",
      description:
        "Building reproducible infrastructure where setup is automated, environments are containerized, tests run continuously, and systems recover predictably from failure.",
      points: [
        "Linux kernel & process control, daily driver POSIX workflows",
        "Deterministic Docker containerization and multi-stage image optimization",
        "Automated CI/CD build-and-test validation pipelines with health checks",
        "Kubernetes orchestration, infrastructure as code, and deployment telemetry",
      ],
      tools: ["Linux", "Docker", "CI/CD", "Kubernetes", "Git Workflows", "IaC"],
    },
    {
      id: "ai-gpu",
      category: "CURRENTLY DOING",
      badgeColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
      dotColor: "bg-cyan-400",
      title: "AI Systems, PyTorch & GPU Computing",
      icon: Cpu,
      tagline: "Local LLMs · PyTorch · CUDA Profiling · Tensors",
      description:
        "Demystifying deep learning execution: measuring how models interact with hardware, optimizing tensor throughput, and connecting local intelligence to real-world software workflows.",
      points: [
        "Local LLM pipelines (Ollama) & deterministic browser agent automation",
        "PyTorch tensor benchmarks & memory bandwidth saturation profiling",
        "CUDA execution fundamentals and GPU inference throughput measurement",
        "Quantized model performance (FP32 vs FP16 vs INT8 precision)",
      ],
      tools: ["Python", "PyTorch", "CUDA Fundamentals", "Ollama", "Playwright", "NumPy"],
    },
  ];

  const sideQuest = {
    category: "SIDE QUEST",
    badgeColor: "border-violet-500/30 text-violet-300 bg-violet-500/10",
    title: "C++, Graphics Programming, OpenGL & Game Development",
    icon: Gamepad2,
    tagline: "C++20 · Rust · Vulkan · OpenGL 4.6 · SDL3 · Shaders",
    description:
      "Exploring low-level graphics and systems programming: GPU hardware abstraction, custom framebuffers, cross-platform terminal engines, and real-time shader pipelines.",
    points: [
      "Modern C++20 and native POSIX process execution engines (REMoErminal)",
      "Rust & Vulkan 3D texture painting and PBR material pipelines (REMoAINTER)",
      "OpenGL 4.6 programmable pipeline, GLSL shader authoring, and vertex layouts",
      "Decoupled game loops, state machines, and spatial partitioning architectures",
    ],
    tools: ["C++20", "Rust", "Vulkan", "OpenGL 4.6", "SDL3", "CMake", "GLSL"],
  };

  return (
    <section id="direction" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Current Focus &amp; Side Quest
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
            Understand systems beyond the surface level — how software is built, containerized, automated, monitored, and executed on real hardware.
          </p>
        </div>

        {/* 2-Column Grid for Currently Doing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyDoing.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#0e0e11] border border-white/[0.08] hover:border-white/[0.18] rounded-lg p-6 flex flex-col justify-between transition-colors space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${item.badgeColor}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                      {item.category}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-neutral-400 mt-0.5">
                      {item.tagline}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-xs text-neutral-300">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neutral-500 font-mono text-[11px] mt-0.5">↳</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono px-2 py-0.5 bg-white/[0.04] text-neutral-400 rounded border border-white/[0.04]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide Card for Side Quest */}
        <div className="bg-[#0e0e11] border border-violet-500/20 hover:border-violet-500/40 rounded-lg p-6 sm:p-7 transition-colors space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border ${sideQuest.badgeColor}`}
              >
                <Gamepad2 className="w-3.5 h-3.5 text-violet-400" />
                {sideQuest.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">{sideQuest.tagline}</span>
            </div>
            <span className="text-xs font-mono text-violet-400/80">Systems · Graphics · Architecture</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">
              {sideQuest.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              {sideQuest.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 pt-2">
            {sideQuest.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-violet-400 font-mono text-[11px] mt-0.5">↳</span>
                <span className="leading-relaxed">{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {sideQuest.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-mono px-2 py-0.5 bg-violet-950/20 text-violet-300/80 rounded border border-violet-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
