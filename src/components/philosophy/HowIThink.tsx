"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  FileCode2,
  Workflow
} from "lucide-react";

export function HowIThink() {
  const { approach } = PROFILE;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeItem = approach[activeIdx];

  const getCodeSnippetForApproach = (idx: number) => {
    switch (idx) {
      case 0: // REPRODUCIBILITY
        return `# 1. Automated multi-stage Docker build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile
COPY . .
RUN npm run build && npm test -- --ci

# Verified single-command execution runbook
$ git clone https://github.com/SAIRAMSSSS/REMoWser.git
$ cd REMoWser && npm install && npm test`;

      case 1: // EVIDENCE OVER CLAIMS
        return `// Automated Playwright E2E assertion test
test("verify local Ollama agent executes browser click", async ({ page }) => {
  const agent = new LocalAgent({ model: "llama3:8b", endpoint: "http://localhost:11434" });
  await page.goto("http://localhost:3000");
  const result = await agent.executeStep(page, "click the search input and type hello");
  expect(result.status).toBe("SUCCESS");
  expect(result.latencyMs).toBeLessThan(450);
});`;

      case 2: // UNDERSTAND THE SYSTEM
        return `// Direct POSIX pseudo-terminal fork & non-blocking I/O
int masterFd = posix_openpt(O_RDWR | O_NOCTTY);
grantpt(masterFd);
unlockpt(masterFd);

fcntl(masterFd, F_SETFL, O_NONBLOCK);
struct winsize ws = { .ws_row = 24, .ws_col = 80 };
ioctl(masterFd, TIOCSWINSZ, &ws);`;

      case 3: // BUILD TO LEARN
        return `// Scoped, testable state machine core
enum class AgentState { IDLE, PARSING_DOM, STREAMING_TOKENS, EXECUTING_TOOL, RECOVERING };

void step(AgentState& state) {
  assert(validateStateInvariants(state));
  state = transition(state);
}`;

      default:
        return "";
    }
  };

  return (
    <section id="approach" className="py-24 sm:py-32 relative bg-[#030509] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase">
              <Workflow className="w-3.5 h-3.5" />
              <span>SECTION 04 // ENGINEERING AXIOMS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              04 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">HOW I APPROACH ENGINEERING</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Software craft is defined by working discipline. Rather than superficial claims, these 4 operational tenets govern every repository, build pipeline, and system architecture.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-emerald-400 font-bold block">4 OPERATIONAL PILLARS</span>
            <span className="text-slate-400">VERIFIABLE • RIGOROUS • DISCIPLINED</span>
          </div>
        </div>

        {/* 4 Pillars Grid & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Pillar List */}
          <div className="lg:col-span-6 space-y-3">
            {approach.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActiveIdx(idx);
                  }}
                  onMouseEnter={() => SoundEngine.playHover()}
                  className={`p-6 border transition-all cursor-pointer font-mono select-none group relative ${
                    isSelected
                      ? "border-emerald-400 bg-[#08121a] shadow-xl shadow-emerald-950/40"
                      : "border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-emerald-400">PILLAR {item.number} {"//"} PRINCIPLE</span>
                    <span className="text-slate-500 group-hover:text-white transition-colors text-[10px]">
                      {isSelected ? "[INSPECTING]" : "CLICK TO VIEW"}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight uppercase transition-colors font-tech ${
                    isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans mt-2 leading-relaxed">
                    {item.principle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Specification & Execution Proof */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="blueprint-box p-6 sm:p-8 bg-[#060a14] border border-white/15 space-y-6 font-mono text-xs">
              <div className="border-b border-white/10 pb-4 space-y-1">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
                  METHODOLOGY SPECIFICATION // PILLAR {activeItem.number}
                </span>
                <h3 className="text-3xl font-black text-white font-tech uppercase">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-emerald-300 font-sans mt-1">
                  {activeItem.principle}
                </p>
              </div>

              {/* Elaboration */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  THE RATIONALE:
                </span>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {activeItem.detail}
                </p>
              </div>

              {/* Concrete Proof Mechanism */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  VERIFIED IMPLEMENTATION MECHANISM:
                </span>
                <p className="text-slate-300 text-xs font-mono bg-black/60 p-3 border border-white/10">
                  {activeItem.proof}
                </p>
              </div>

              {/* Code Demonstration Snippet */}
              <div className="space-y-1.5">
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-bold">
                  EXECUTABLE EVIDENCE FRAGMENT:
                </span>
                <pre className="p-4 bg-[#020306] border border-white/10 text-[11px] text-slate-300 overflow-x-auto leading-relaxed font-mono">
                  <code>{getCodeSnippetForApproach(activeIdx)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
