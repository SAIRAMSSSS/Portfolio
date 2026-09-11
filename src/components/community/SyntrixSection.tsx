"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { SYNTRIX_DATA } from "@/data/community";
import { 
  Users, 
  Mic, 
  Share2, 
  MessageSquare, 
  Flame, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  Network,
  Image as ImageIcon,
  Maximize2
} from "lucide-react";

export function SyntrixSection() {
  const [selectedNode, setSelectedNode] = useState<string>("people");
  const [bannerModal, setBannerModal] = useState<boolean>(false);

  const activeNodeData = SYNTRIX_DATA.networkNodes.find((n) => n.id === selectedNode) || SYNTRIX_DATA.networkNodes[0];

  return (
    <section id="syntrix" className="py-24 sm:py-32 relative bg-[#04060b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>LEADERSHIP & DEVELOPER ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              SYNTRIX <span className="text-slate-500 font-light">COLLECTIVE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              {SYNTRIX_DATA.tagline} Founded alongside close friends to foster a culture of active building, 
              live screen-share debugging, and competitive hackathon teamwork.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0">
            <div className="p-3 bg-black/60 border border-white/15 text-right">
              <span className="text-[10px] text-slate-500 block">COLLECTIVE SCALE</span>
              <span className="text-white font-bold text-sm">{SYNTRIX_DATA.memberCount}</span>
            </div>
            <div className="p-3 bg-black/60 border border-white/15 text-right">
              <span className="text-[10px] text-slate-500 block">WEEKLY VOICE HUDDLE</span>
              <span className="text-emerald-400 font-bold text-sm">{SYNTRIX_DATA.weeklyVoiceAttendees}</span>
            </div>
          </div>
        </div>

        {/* Visual Community Banner Artifact & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Banner Presentation Card */}
          <div className="lg:col-span-5 flex flex-col justify-between blueprint-box p-6 bg-[#060a14] space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5" />
                  OFFICIAL COMMUNITY BANNER
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10">
                  ESTABLISHED 2024
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Official community flex poster designed for events, hackathon presence, and tech summits.
              </p>
            </div>

            {/* Clickable Banner Image */}
            <div 
              onClick={() => {
                SoundEngine.playClick();
                setBannerModal(true);
              }}
              className="relative aspect-4/5 bg-black border border-white/15 overflow-hidden group cursor-pointer shadow-xl"
            >
              <img
                src={SYNTRIX_DATA.bannerImage}
                alt="Syntrix Community Banner"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full font-mono text-xs text-white">
                  <span>CLICK TO VIEW HIGH-RES</span>
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="font-mono text-[10px] text-slate-500 border-t border-white/10 pt-2 flex justify-between">
              <span>CO-FOUNDER & TECH LEAD: SAIRAM S</span>
              <span>CADENCE: WEEKLY ONLINE</span>
            </div>
          </div>

          {/* Right: Pillars & Mission Overview */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="blueprint-box p-6 sm:p-8 bg-[#060913] space-y-4">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold block">
                THE FOUNDING ETHOS // WHY WE BUILT SYNTRIX
              </span>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {SYNTRIX_DATA.mission}
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SYNTRIX_DATA.pillars.map((pillar, idx) => (
                <div key={idx} className="p-5 bg-black/50 border border-white/10 space-y-2 font-mono text-xs">
                  <span className="text-amber-400 font-bold block">0{idx + 1}. {pillar.title}</span>
                  <p className="text-slate-300 text-[11px] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="text-[10px] text-emerald-400 pt-2 border-t border-white/10">
                    {pillar.metrics}
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Voice Format */}
            <div className="p-6 bg-[#070b16] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-bold tracking-wider">
                <Mic className="w-4 h-4 text-emerald-400" />
                <span>WEEKLY TECHNICAL VOICE SESSIONS FORMAT</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {SYNTRIX_DATA.weeklyFormat.map((step) => (
                  <div key={step.step} className="p-3 bg-black/60 border border-white/5 space-y-1">
                    <span className="text-amber-400 font-bold text-[10px]">{step.step}</span>
                    <div className="text-white font-bold text-[11px]">{step.title}</div>
                    <p className="text-slate-400 text-[10px] font-sans">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL NETWORK DIAGRAM: People → Ideas → Projects → Hackathons → Collaboration → Community */}
        <div className="blueprint-box p-6 sm:p-10 bg-[#050811] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white font-bold tracking-wider">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>THE VALUE COMPOUNDING NETWORK PIPELINE</span>
            </div>
            <span className="font-mono text-xs text-slate-500">
              CLICK NODES TO INSPECT CYCLE
            </span>
          </div>

          {/* Interactive Node Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SYNTRIX_DATA.networkNodes.map((node, index) => (
              <button
                key={node.id}
                onClick={() => {
                  SoundEngine.playClick();
                  setSelectedNode(node.id);
                }}
                className={`p-4 text-left border transition-all cursor-pointer font-mono text-xs relative ${
                  selectedNode === node.id
                    ? "border-amber-400 bg-amber-950/40 text-white shadow-lg"
                    : "border-white/10 bg-black/60 text-slate-400 hover:text-white hover:border-white/30"
                }`}
              >
                <div className="text-[10px] text-slate-500 mb-1">0{index + 1} // NODE</div>
                <div className="text-white font-bold text-sm tracking-wider mb-1">{node.label}</div>
                <div className="text-[10px] text-amber-300/80 font-sans">{node.role}</div>

                {index < 5 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs z-10">
                    →
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Detailed Node Inspector Callout */}
          <div className="p-5 bg-black/80 border border-white/15 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 font-bold uppercase tracking-widest">
                INSPECTING NODE: {activeNodeData.label} // {activeNodeData.role}
              </span>
              <span className="text-slate-500 text-[10px]">
                CONNECTS TO: {activeNodeData.connections.join(", ").toUpperCase()}
              </span>
            </div>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              {activeNodeData.details}
            </p>
          </div>
        </div>
      </div>

      {/* Banner Modal */}
      {bannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-black border border-white/20 p-2">
            <button
              onClick={() => setBannerModal(false)}
              className="absolute top-4 right-4 bg-black/80 hover:bg-white/20 text-white p-2 border border-white/20 font-mono text-xs"
            >
              CLOSE [ESC]
            </button>
            <img
              src={SYNTRIX_DATA.bannerImage}
              alt="Syntrix Full Banner"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
