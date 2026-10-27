"use client";

import React, { useState, useEffect, useRef } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { HACKATHON_STATS, HACKATHON_LOGS } from "@/data/hackathons";
import { SYNTRIX_DATA } from "@/data/community";
import { X, Minimize2, Terminal as TerminalIcon, Maximize2 } from "lucide-react";

interface LogEntry {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export function SystemTerminalModal() {
  const { terminalOpen, setTerminalOpen, mode, toggleMode, setResumeModalOpen } = useDuality();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", text: "SYS_KERNEL_INIT: SAI RAM R WORKSTATION v5.0 [ARCH / LINUX]" },
    { type: "system", text: "Identity: DevOps & Infrastructure · Software Systems · AI/GPU Computing" },
    { type: "system", text: "Type 'help' to inspect command registry or 'whoami' for operator profile." }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [terminalOpen, logs]);

  if (!terminalOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `$ ${rawCmd}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: [
            "AVAILABLE COMMANDS:",
            "  whoami       - Display identity, tracks & current focus",
            "  direction    - Inspect 01 / CURRENT DIRECTION tracks",
            "  projects     - List 02 / SELECTED PROJECTS (REMoWser, REMoAINTER, REMoErminal)",
            "  cat <num>    - Read project manifest (e.g. 'cat 001', 'cat 002')",
            "  toolkit      - Inspect 03 / ENGINEERING TOOLKIT (Used vs Developing)",
            "  approach     - Review 04 / HOW I APPROACH ENGINEERING (4 Axioms)",
            "  building     - Inspect 05 / WHAT I'M BUILDING TOWARD (Milestones)",
            "  contact      - Communications channels (Portfolio, LinkedIn, GitHub, Email)",
            "  graphics     - Review modern OpenGL 4.6 & Vulkan rendering lab",
            "  ai           - Machine learning & tensor experiments",
            "  hackathons   - Display 50+ hackathon battle log & podiums",
            "  syntrix      - Explore Syntrix community founded outside college",
            "  sys          - Neofetch-style system and host telemetry",
            "  clear        - Flush terminal buffer",
            "  exit         - Terminate shell session"
          ].join("\n")
        });
        break;

      case "whoami":
        newLogs.push({
          type: "output",
          text: [
            `NAME: ${PROFILE.name} (${PROFILE.handle})`,
            `TITLE: ${PROFILE.primaryTitle}`,
            `BIO: "${PROFILE.bio}"`,
            `MOTTO: "${PROFILE.motto}"`,
            `STATUS: ${PROFILE.degree}`,
            `LOCATION: ${PROFILE.coordinates.label} [${PROFILE.coordinates.lat}, ${PROFILE.coordinates.lng}]`,
            `PRIMARY: DevOps, Cloud & Infrastructure Engineering + AI Systems`,
            `COMMUNITY: Co-Founder of Syntrix (~250 members founded outside college)`
          ].join("\n")
        });
        break;

      case "direction":
        newLogs.push({
          type: "output",
          text: [
            "CURRENT FOCUS & SIDE QUEST:",
            "  [CURRENTLY DOING] DevOps, Cloud & Infrastructure Engineering",
            "                    Focus: Linux kernel, Docker containers, CI/CD pipelines, Kubernetes, reliability.",
            "",
            "  [CURRENTLY DOING] AI Systems, PyTorch & GPU Computing",
            "                    Focus: Ollama local models, browser automation agents, CUDA profiling, tensor benchmarks.",
            "",
            "  [SIDE QUEST]      C++, Graphics Programming, OpenGL & Game Development",
            "                    Focus: C++20, Rust, Vulkan API, OpenGL 4.6, shaders, decoupled state machines.",
            "",
            `OBJECTIVE: "${PROFILE.currentDirection.objective}"`
          ].join("\n")
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: PROJECTS.map(
            (p) => `[PROJECT ${p.number}] ${p.title}\n  Stack: ${p.techStack.join(" · ")}\n  Summary: ${p.summary}\n  Repo: ${p.githubUrl}`
          ).join("\n\n")
        });
        break;

      case "cat": {
        const num = arg.replace(/^0+/, "") || "1";
        const found = PROJECTS.find((p) => parseInt(p.number, 10) === parseInt(num, 10));
        if (found) {
          newLogs.push({
            type: "output",
            text: [
              `======================================================`,
              `MANIFEST: [PROJECT ${found.number}] ${found.title}`,
              `SUBTITLE: ${found.subtitle}`,
              `ROLE: ${found.role}`,
              `TECH: ${found.techStack.join(" • ")}`,
              `REPO: ${found.githubUrl}`,
              `------------------------------------------------------`,
              `SUMMARY:`,
              found.summary,
              `KEY FOCUS AREAS:`,
              ...found.focusAreas.map((f) => `  - ${f}`),
              `NEXT PRIORITIES:`,
              ...found.nextPriorities.map((p) => `  - ${p}`),
              found.reproductionCommand ? `LOCAL RUN: $ ${found.reproductionCommand}` : "",
              `======================================================`
            ].filter(Boolean).join("\n")
          });
        } else {
          newLogs.push({
            type: "error",
            text: `cat: No project found matching '${arg}'. Valid indexes: 001, 002, 003, 004, 005, 006, 007.`
          });
        }
        break;
      }

      case "toolkit":
        newLogs.push({
          type: "output",
          text: [
            "ENGINEERING TOOLKIT:",
            "",
            "DEVOPS & INFRASTRUCTURE:",
            "  • Linux, Docker (multi-stage), CI/CD pipelines, Kubernetes, monitoring & reliability.",
            "",
            "AI SYSTEMS & COMPUTING:",
            "  • PyTorch, local LLMs (Ollama), CUDA benchmarks, browser automation (Playwright), NumPy.",
            "",
            "SIDE QUEST (GRAPHICS & SYSTEMS):",
            "  • C++20, Rust, Vulkan, OpenGL 4.6, GLSL shaders, SDL3, CMakePresets.",
            "",
            "CORE APPLICATION & LANGUAGES:",
            "  • Python, Rust, C++, JavaScript/TypeScript, React, Next.js, Django, PostgreSQL, Git."
          ].join("\n")
        });
        break;

      case "approach":
        newLogs.push({
          type: "output",
          text: [
            "04 / HOW I APPROACH ENGINEERING:",
            "  1. REPRODUCIBILITY   : Document setup, dependencies, build commands, and expected results.",
            "  2. EVIDENCE OVER CLAIMS: Use tests, benchmarks, screenshots, and demonstrations.",
            "  3. UNDERSTAND THE SYSTEM: Investigate architecture, performance, failure modes, trade-offs.",
            "  4. BUILD TO LEARN    : Prefer small, testable implementations over speculative complexity."
          ].join("\n")
        });
        break;

      case "building":
      case "trajectory":
        newLogs.push({
          type: "output",
          text: [
            "05 / WHAT I'M BUILDING TOWARD:",
            `GOAL: "${PROFILE.buildingToward.goal}"`,
            "",
            "MILESTONE 01: Reproducible Infrastructure Project",
            "  Complete production workflow: containerization, automated testing, deployment, monitoring, and failure recovery.",
            "",
            "MILESTONE 02: Hardware Performance Measurement (CPU & GPU)",
            "  Measure software performance on physical CPUs and GPUs (PyTorch, CUDA, tensor throughput)."
          ].join("\n")
        });
        break;

      case "graphics":
        newLogs.push({
          type: "output",
          text: [
            "RENDERING & GRAPHICS LAB:",
            "  • C++ Modern OpenGL 4.6 Core Profile Architecture",
            "  • VertexArray, VertexBuffer (VBO), ElementBuffer (EBO) Abstractions",
            "  • Interleaved Attribute Layouts (Pos3f, Norm3f, UV2f)",
            "  • Dynamic Model-View-Projection (MVP) Matrix Calculations (GLM)",
            "  • Custom GLSL Vertex & Fragment Shaders (Blinn-Phong Lighting)",
            "  • Vulkan API Pipeline Architecture & Swapchain Exploration"
          ].join("\n")
        });
        break;

      case "hackathons":
        newLogs.push({
          type: "output",
          text: [
            "BATTLE LOG STATS:",
            `  • Total Sprints Completed: ${HACKATHON_STATS.total}`,
            `  • CMS College Hackathon: ${HACKATHON_STATS.cmsResult}`,
            `  • SRCAS National Hackathon: ${HACKATHON_STATS.srcasResult}`,
            `  • Game Jams Completed: ${HACKATHON_STATS.gameJams}`,
            "",
            "RECENT TOP SPRINT ENTRIES:",
            ...HACKATHON_LOGS.slice(0, 5).map(
              (h) => `  [${h.code}] ${h.title} → ${h.placement || "Completed"} (${h.projectTitle})`
            )
          ].join("\n")
        });
        break;

      case "syntrix":
        newLogs.push({
          type: "output",
          text: [
            `COMMUNITY: ${SYNTRIX_DATA.name}`,
            `ROLE: ${SYNTRIX_DATA.founderRole}`,
            `FOUNDED: Outside college with close friends`,
            `MEMBERS: ${SYNTRIX_DATA.memberCount}`,
            `CADENCE: ${SYNTRIX_DATA.cadence} (${SYNTRIX_DATA.weeklyVoiceAttendees})`,
            `MISSION: ${SYNTRIX_DATA.mission}`,
            `PIPELINE: People → Ideas → Projects → Hackathons → Collaboration → Community`
          ].join("\n")
        });
        break;

      case "ai":
        newLogs.push({
          type: "output",
          text: [
            "INTELLIGENCE / MACHINE LEARNING LAB:",
            "  • PyTorch Neural Network Architectures & Autograd Dynamics",
            "  • Vectorized Math & Preprocessing Pipelines (NumPy & Pandas)",
            "  • Decision Boundaries & Loss Convergence Tracking",
            "  • Local LLM Tool Integration with Ollama in REMoWser"
          ].join("\n")
        });
        break;

      case "sys":
      case "neofetch":
        newLogs.push({
          type: "output",
          text: [
            "       _.-'''''''-._       sairam_r@workstation",
            "     .'  .-------.  '.     --------------------",
            "    /   /         \\   \\    OS: Arch / Linux x86_64",
            "   |   |   DEVOPS  |   |   Host: Dual Intel/NVIDIA Precision Station",
            "   |   |    & AI   |   |   Kernel: 6.x Linux Realtime",
            "   |   |  SYSTEMS  |   |   Shell: Bash / Terminal Engine v5",
            "    \\   \\         /   /    Docker: Active Container Engine",
            "     '.  '-------'  .'     Graphics: Vulkan 1.3 / OpenGL 4.6",
            "       '-........-'        Languages: C++20, Rust, Python, TypeScript",
            "                           Community: Syntrix (~250 Builders)",
            "                           Hackathons: 50+ Completed"
          ].join("\n")
        });
        break;

      case "contact":
      case "elsewhere":
        newLogs.push({
          type: "output",
          text: [
            "06 / ELSEWHERE & COMMUNICATIONS:",
            `  • Portfolio: ${PROFILE.links.portfolio}`,
            `  • LinkedIn : ${PROFILE.links.linkedin}`,
            `  • Projects : ${PROFILE.links.github}`,
            `  • Email    : ${PROFILE.links.email}`,
            `  • Location : ${PROFILE.coordinates.label}`
          ].join("\n")
        });
        break;

      case "clear":
        setLogs([]);
        return;

      case "exit":
        setTerminalOpen(false);
        return;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' to view valid system commands.`
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInput(history[history.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl h-[560px] bg-[#0c0c0e] border border-white/[0.12] rounded-lg shadow-2xl flex flex-col font-mono text-xs overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111114] border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2 text-neutral-300 font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span>terminal — {PROFILE.handle}@workstation: ~</span>
          </div>

          <button
            onClick={() => setTerminalOpen(false)}
            className="p-1 hover:bg-white/10 text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Logs Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-xs">
          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log.type === "input" && (
                <div className="text-white font-medium flex items-center gap-1.5">
                  <span className="text-neutral-500">~</span>
                  <span className="text-emerald-400">$</span>
                  <span>{log.text.replace(/^\$\s*/, "")}</span>
                </div>
              )}
              {log.type === "output" && (
                <pre className="text-neutral-300 whitespace-pre-wrap font-mono mt-0.5 pl-3 border-l border-white/[0.1]">
                  {log.text}
                </pre>
              )}
              {log.type === "error" && (
                <div className="text-red-400 pl-3 border-l-2 border-red-500/50 mt-0.5">
                  {log.text}
                </div>
              )}
              {log.type === "system" && (
                <div className="text-emerald-400/90 italic pl-1 text-[11px]">
                  {log.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt Input Row */}
        <div className="px-4 py-3 bg-[#111114] border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-neutral-500">~</span>
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="help, projects, direction, toolkit, approach, exit..."
            className="flex-1 bg-transparent text-white outline-none placeholder-neutral-600 font-mono text-xs"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
