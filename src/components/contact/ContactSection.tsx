"use client";

import React, { useState } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { 
  Terminal, 
  Send, 
  Mail, 
  Globe, 
  Copy, 
  Check, 
  ExternalLink,
  Radio,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export function ContactSection() {
  const { setResumeModalOpen, setTerminalOpen } = useDuality();
  const [copied, setCopied] = useState<boolean>(false);
  const [msgInput, setMsgInput] = useState({ name: "", email: "", message: "" });
  const [dispatched, setDispatched] = useState<boolean>(false);

  const copyEmail = () => {
    SoundEngine.playClick();
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    SoundEngine.playClick();
    setDispatched(true);
    setTimeout(() => {
      setDispatched(false);
      setMsgInput({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="elsewhere" className="py-24 sm:py-36 relative bg-[#030408] border-t border-white/10 overflow-hidden">
      {/* Background cybernetic grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>SECTION 06 // COMMS & NETWORK NODES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              06 / <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">ELSEWHERE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Connect across technical hubs, inspect live code repositories, review continuous deployments, or start an infrastructure conversation.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 hidden md:block text-right space-y-1">
            <span className="text-emerald-400 font-bold block">OPERATOR // SAI RAM R</span>
            <span className="text-slate-400">COIMBATORE, TN // IN</span>
          </div>
        </div>

        {/* 3 Primary External Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Live Portfolio */}
          <a
            href={PROFILE.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundEngine.playClick()}
            className="p-8 bg-[#050812] border border-white/15 hover:border-emerald-400 transition-all font-mono group block select-none shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-500 text-xs mb-6">
              <span className="text-emerald-400 font-bold">NODE 01 // PRODUCTION</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-black text-white uppercase font-tech">
                PORTFOLIO
              </h3>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
              Live production deployment on Vercel with WebGL engine views and interactive hardware testbeds.
            </p>

            <span className="text-[11px] text-emerald-400 underline underline-offset-4 break-all">
              {PROFILE.links.portfolio}
            </span>
          </a>

          {/* 2. LinkedIn */}
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundEngine.playClick()}
            className="p-8 bg-[#050812] border border-white/15 hover:border-cyan-400 transition-all font-mono group block select-none shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-500 text-xs mb-6">
              <span className="text-cyan-400 font-bold">NODE 02 // PROFESSIONAL</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <LinkedinIcon className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-black text-white uppercase font-tech">
                LINKEDIN
              </h3>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
              Professional history, internship availability, collegiate hackathon leadership, and engineering updates.
            </p>

            <span className="text-[11px] text-cyan-400 underline underline-offset-4 break-all">
              linkedin.com/in/sairam-r-7900b136b
            </span>
          </a>

          {/* 3. GitHub */}
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundEngine.playClick()}
            className="p-8 bg-[#050812] border border-white/15 hover:border-amber-400 transition-all font-mono group block select-none shadow-lg"
          >
            <div className="flex items-center justify-between text-slate-500 text-xs mb-6">
              <span className="text-amber-400 font-bold">NODE 03 // SOURCE CODE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <GithubIcon className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-black text-white uppercase font-tech">
                PROJECTS
              </h3>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
              20+ public repositories: REMoWser, REMoAINTER, REMoErminal, OpenGL rendering testbeds, and security tools.
            </p>

            <span className="text-[11px] text-amber-400 underline underline-offset-4 break-all">
              github.com/SAIRAMSSSS
            </span>
          </a>
        </div>

        {/* Transmission & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-white/10">
          {/* Left: Email Quick Copy & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                DIRECT COMMS FREQUENCY:
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-tech uppercase">
                START A CONVERSATION
              </h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Open for internship and full-time opportunities in DevOps, Cloud Infrastructure, Platform Engineering, or AI/GPU systems.
              </p>
            </div>

            {/* 1-Click Copy Email Box */}
            <div className="p-4 bg-black/60 border border-white/15 flex items-center justify-between font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 block">PRIMARY INBOX:</span>
                <span className="text-white font-bold">{PROFILE.links.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 bg-white/10 hover:bg-emerald-500 hover:text-black text-white transition-all flex items-center gap-1.5 cursor-pointer font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>

            {/* Quick Terminal Launch CTA */}
            <div className="p-4 bg-[#070b14] border border-white/10 space-y-2 font-mono text-xs">
              <span className="text-slate-400 text-[11px] block">PREFER A CLI?</span>
              <p className="text-slate-500 text-[11px] font-sans">
                Press the <kbd className="px-1.5 py-0.5 bg-white/10 text-white rounded text-[10px]">~</kbd> key anywhere on this site to open the system terminal emulator.
              </p>
              <button
                onClick={() => {
                  SoundEngine.playClick();
                  setTerminalOpen(true);
                }}
                className="text-cyan-400 hover:underline flex items-center gap-1 font-bold pt-1 cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Launch Interactive Shell</span>
              </button>
            </div>
          </div>

          {/* Right: Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleTransmit} className="blueprint-box p-6 sm:p-8 bg-[#060912] border border-white/15 space-y-4 font-mono text-xs">
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">
                  SEND TELEMETRY PACKET // COMMS
                </span>
                <span className="text-slate-500 text-[10px]">ENCRYPTED TRANSMISSION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-400 text-[10px] uppercase font-bold">NAME / SENDER:</label>
                  <input
                    type="text"
                    required
                    value={msgInput.name}
                    onChange={(e) => setMsgInput({ ...msgInput, name: e.target.value })}
                    placeholder="e.g. Linus Torvalds"
                    className="w-full p-2.5 bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:border-emerald-400 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 text-[10px] uppercase font-bold">RETURN EMAIL:</label>
                  <input
                    type="email"
                    required
                    value={msgInput.email}
                    onChange={(e) => setMsgInput({ ...msgInput, email: e.target.value })}
                    placeholder="e.g. engineer@infrastructure.com"
                    className="w-full p-2.5 bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:border-emerald-400 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 text-[10px] uppercase font-bold">TRANSMISSION PAYLOAD:</label>
                <textarea
                  rows={4}
                  required
                  value={msgInput.message}
                  onChange={(e) => setMsgInput({ ...msgInput, message: e.target.value })}
                  placeholder="Details regarding roles, open source collaboration, or infrastructure discussions..."
                  className="w-full p-2.5 bg-black/60 border border-white/15 text-white placeholder-slate-600 focus:border-emerald-400 outline-none resize-none font-sans text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                {dispatched ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>PACKET TRANSMITTED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT PACKET TO SAI RAM R</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* GIANT EDITORIAL SIGN-OFF MOTTO */}
        <div className="text-center pt-16 border-t border-white/10 space-y-4">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 font-tech tracking-tight uppercase leading-snug">
            &ldquo;{PROFILE.motto}&rdquo;
          </p>
          <div className="text-xs font-mono text-slate-500 tracking-widest uppercase">
            SAI RAM R // DEVOPS & INFRASTRUCTURE · AI SYSTEMS · LOW-LEVEL COMPUTING
          </div>
        </div>
      </div>
    </section>
  );
}
