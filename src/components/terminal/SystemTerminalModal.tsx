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
    { type: "system", text: "SYS_KERNEL_INIT: SAIRAM WORKSTATION v4.6 [ARCH / LINUX]" },
    { type: "system", text: "Identity: Environment Artist ↔ Graphics Programmer ↔ Technical Builder" },
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
            "  whoami       - Display identity, roles & background",
            "  projects     - List visual project artifacts (001 - 005)",
            "  cat <num>    - Read project manifest (e.g. 'cat 001', 'cat 002')",
            "  art          - Inspect environment art & PBR workflow",
            "  graphics     - Review modern OpenGL & Vulkan rendering lab",
            "  ai           - Machine learning & tensor experiments",
            "  hackathons   - Display 50+ hackathon battle log & podiums",
            "  syntrix      - Explore Syntrix 250-member developer community",
            "  duality      - Toggle ART MODE ↔ CODE MODE perspective",
            "  resume       - Open full verified resume manifest",
            "  sys          - Neofetch-style system and graphics hardware telemetry",
            "  contact      - Communications channels (GitHub, Email, LinkedIn)",
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
            `PHILOSOPHY: "${PROFILE.tagline}"`,
            `EDUCATION: ${PROFILE.degree} @ ${PROFILE.institution}`,
            `LOCATION: ${PROFILE.coordinates.label} [${PROFILE.coordinates.lat}, ${PROFILE.coordinates.lng}]`,
            `INTERSECTION: ART ↔ CODE ↔ GAMES`,
            `COMMUNITY: Co-Founder of Syntrix (~250 members)`
          ].join("\n")
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: PROJECTS.map(
            (p) => `[PROJECT ${p.number}] ${p.title} // Category: ${p.category}\n  Stack: ${p.techStack.join(", ")}\n  Summary: ${p.summary}`
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
              `------------------------------------------------------`,
              `PROBLEM:`,
              found.problem,
              `IDEA:`,
              found.idea,
              `RESULT:`,
              found.result,
              `======================================================`
            ].join("\n")
          });
        } else {
          newLogs.push({
            type: "error",
            text: `cat: No project found matching '${arg}'. Valid indexes: 001, 002, 003, 004, 005.`
          });
        }
        break;
      }

      case "art":
        newLogs.push({
          type: "output",
          text: [
            "ENVIRONMENT ART CAPABILITIES:",
            "  • Subdivision Surface Sculpting & Bevels (Blender 5.x)",
            "  • Sub-D to Low-Poly Cage Baking (Normals, AO, Curvature, ID maps)",
            "  • ZenUV Packing & Texel Density Matching (10.24 px/cm)",
            "  • PBR Smart Material Authoring (Substance Painter & InstaMAT)",
            "  • Unreal Engine 5 Lumen GI, Nanite & Master Shader Graphs",
            "  • Featured Asset: LANTERN Hero Environment Asset (8,420 tris)"
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
            "  • Gradient vanishing/exploding mitigation (He/Xavier, BatchNorm)"
          ].join("\n")
        });
        break;

      case "duality":
        toggleMode();
        newLogs.push({
          type: "system",
          text: `[SYSTEM] Perspective flipped. Current state: ${mode === "ART" ? "CODE MODE" : "ART MODE"}.`
        });
        break;

      case "resume":
        setResumeModalOpen(true);
        newLogs.push({
          type: "system",
          text: "[SYSTEM] Launching verified resume viewer modal."
        });
        break;

      case "sys":
      case "neofetch":
        newLogs.push({
          type: "output",
          text: [
            "       _.-'''''''-._       sairam@workstation",
            "     .'  .-------.  '.     ------------------",
            "    /   /         \\   \\    OS: CachyOS Linux x86_64",
            "   |   |   ART     |   |   Host: Dual Intel/NVIDIA Precision Lab",
            "   |   |    ↔      |   |   Kernel: 6.x Linux Realtime",
            "   |   |   CODE    |   |   Shell: Bash / Terminal Engine v2",
            "    \\   \\         /   /    Terminal: WebGL Monospace Canvas",
            "     '.  '-------'  .'     Graphics API: OpenGL 4.6 / Vulkan 1.3",
            "       '-........-'        DCC: Blender 5.2.1 LTS / Substance",
            "                           Engine: Unreal Engine 5.4 / Custom C++",
            "                           Community: Syntrix (~250 Engineers)",
            "                           Hackathons: 50+ Completed"
          ].join("\n")
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: [
            "COMMUNICATION CHANNELS:",
            `  • GitHub:   ${PROFILE.links.github}`,
            `  • LinkedIn: ${PROFILE.links.linkedin}`,
            `  • Email:    ${PROFILE.links.email}`,
            "  • Terminal: Active session initialized"
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
          text: `zsh: command not found: '${cmd}'. Type 'help' for available commands.`
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    SoundEngine.playTerminalKey();

    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInput(history[nextIdx]);
        } else {
          setHistoryIdx(-1);
          setInput("");
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[85vh] sm:h-[600px] flex flex-col bg-[#080b12] border border-white/20 shadow-2xl font-mono text-xs overflow-hidden relative">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1320] border-b border-white/10 text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white tracking-wider">
              SAIRAM_SYS_CONSOLE // [TTY1]
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-xs">
              ONLINE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 hidden sm:inline">
              ESC or ~ to close
            </span>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setTerminalOpen(false);
              }}
              className="p-1 hover:text-white text-slate-400 hover:bg-white/10 rounded-xs"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-2 select-text bg-[#05070a]/95 text-slate-200"
        >
          {logs.map((log, index) => (
            <div key={index} className="leading-relaxed whitespace-pre-wrap">
              {log.type === "input" && (
                <span className="text-amber-400 font-bold">{log.text}</span>
              )}
              {log.type === "output" && (
                <span className="text-slate-300">{log.text}</span>
              )}
              {log.type === "error" && (
                <span className="text-rose-400">{log.text}</span>
              )}
              {log.type === "system" && (
                <span className="text-emerald-400/90">{log.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0e18] border-t border-white/10">
          <span className="text-emerald-400 font-bold">sairam@lab:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-hidden text-white font-mono text-xs placeholder:text-slate-600"
            placeholder="Type 'help', 'whoami', 'projects', 'art', 'graphics'..."
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-2 py-1 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-[10px] uppercase font-bold"
          >
            EXEC
          </button>
        </div>
      </div>
    </div>
  );
}
