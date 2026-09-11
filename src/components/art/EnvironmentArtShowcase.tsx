"use client";

import React, { useState } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { 
  Layers, 
  Sliders, 
  Eye, 
  Compass, 
  Grid, 
  Sparkles, 
  CheckCircle2, 
  Maximize2,
  Box
} from "lucide-react";

type PassType = "BEAUTY" | "WIREFRAME" | "NORMALS" | "MATIDS" | "REFERENCE";

export function EnvironmentArtShowcase() {
  const [activePass, setActivePass] = useState<PassType>("BEAUTY");
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeAsset, setActiveAsset] = useState<"LANTERN" | "ORGANIC">("LANTERN");

  const passMap = {
    BEAUTY: {
      image: activeAsset === "LANTERN" ? "/images/art/block_beauty.png" : "/images/art/beetle_beauty.png",
      label: "FINAL BEAUTY PASS",
      desc: "Cook-Torrance PBR shading with ambient occlusion, directional lighting, and surface cavity details.",
      color: "text-amber-400"
    },
    WIREFRAME: {
      image: activeAsset === "LANTERN" ? "/images/art/block_wireframe.png" : "/images/art/block_wireframe.png",
      label: "SUB-D TOPOLOGY & WIREFRAME",
      desc: "Clean quad-dominant polygon topology optimized for deformation, bevel normals, and tight triangle budgets.",
      color: "text-cyan-400"
    },
    NORMALS: {
      image: activeAsset === "LANTERN" ? "/images/art/block_matids.png" : "/images/art/block_normals.png",
      label: "TANGENT SPACE NORMALS",
      desc: "High-to-low cage baked normal maps capturing subtle hard-surface bevels with zero skewing.",
      color: "text-purple-400"
    },
    MATIDS: {
      image: "/images/art/block_matids.png",
      label: "MATERIAL ID MASKS",
      desc: "Vertex color / material ID masks separating brass chassis, glass core, iron bolts, and weathered trim.",
      color: "text-emerald-400"
    },
    REFERENCE: {
      image: "/images/art/primary_ref.jpg",
      label: "CONCEPT & ORTHO REFERENCE",
      desc: "Primary industrial design reference sheets establishing real-world proportions and silhouette balance.",
      color: "text-rose-400"
    }
  };

  const handlePassSelect = (p: PassType) => {
    SoundEngine.playClick();
    setActivePass(p);
  };

  return (
    <section id="environment-art" className="py-24 sm:py-32 relative bg-[#070a12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>TECHNICAL ART DIRECTOR INSPECTOR</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              ENVIRONMENT <span className="text-slate-500 font-light">ART SHOWCASE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Game environment assets subjected to rigorous production scrutiny: examining high-poly sculpts, 
              topology edge-flow, UV unwrap efficiency, PBR material channels, and real-time engine budgets.
            </p>
          </div>

          {/* Model Switcher */}
          <div className="flex items-center gap-2 font-mono text-xs bg-black/60 p-1 border border-white/10">
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveAsset("LANTERN");
              }}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                activeAsset === "LANTERN"
                  ? "bg-amber-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ASSET: HERO LANTERN
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveAsset("ORGANIC");
              }}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                activeAsset === "ORGANIC"
                  ? "bg-amber-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ASSET: BEETLE SCULPT
            </button>
          </div>
        </div>

        {/* The Art Director Inspection Stage */}
        <div className="blueprint-box p-6 sm:p-10 space-y-8 bg-[#05070d]">
          {/* Top Pass Selector Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {(["BEAUTY", "WIREFRAME", "NORMALS", "MATIDS", "REFERENCE"] as PassType[]).map((p) => (
                <button
                  key={p}
                  onClick={() => handlePassSelect(p)}
                  className={`px-3 py-1.5 border tracking-wider transition-all cursor-pointer ${
                    activePass === p
                      ? "border-amber-400 bg-amber-400/20 text-white font-bold shadow-sm"
                      : "border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  [{p}]
                </button>
              ))}
            </div>

            <div className="font-mono text-xs text-slate-400 flex items-center gap-3">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ZEN_UV VALIDATED
              </span>
              <span className="text-slate-600">|</span>
              <span>DCC: BLENDER 5.2.1 LTS</span>
            </div>
          </div>

          {/* Main Viewport Inspection Image */}
          <div className="relative aspect-16/9 bg-black border border-white/20 overflow-hidden shadow-2xl flex items-center justify-center group">
            <img
              src={passMap[activePass].image}
              alt={passMap[activePass].label}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Active Pass Telemetry Badge */}
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/20 p-3 max-w-sm space-y-1 font-mono text-xs">
              <div className={`font-bold ${passMap[activePass].color} flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                {passMap[activePass].label}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                {passMap[activePass].desc}
              </p>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-3 right-3 font-mono text-[10px] text-white/30">
              FRAME_BUFFER: RGBA16F // D32_SFLOAT
            </div>
            <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/30">
              ASPECT: 16:9 // FOV: 45°
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-amber-400/80">
              ACTIVE_PASS: {activePass}
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs border-t border-white/10 pt-6">
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">TRIANGLE COUNT</span>
              <span className="text-white font-bold text-sm">8,420 Tris</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">Budget: 10,000</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">TEXEL DENSITY</span>
              <span className="text-white font-bold text-sm">10.24 px/cm</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">Target: 4K 1st Person</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">UV ISLANDS</span>
              <span className="text-white font-bold text-sm">0-1 Packed</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">78.4% Efficiency</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">MATERIAL SLOTS</span>
              <span className="text-white font-bold text-sm">1 Master Inst.</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">1 Draw Call</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">TEXTURE CHANNELS</span>
              <span className="text-white font-bold text-sm">ORM Packed</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">R:AO G:Rough B:Metal</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block">ENGINE INTEGRATION</span>
              <span className="text-white font-bold text-sm">Unreal Engine 5</span>
              <span className="text-[9px] text-amber-400 block mt-0.5">Lumen GI Ready</span>
            </div>
          </div>

          {/* Workflow Pipeline Breakdown */}
          <div className="p-6 bg-black/40 border border-white/10 space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
              <Grid className="w-3.5 h-3.5 text-amber-400" />
              AAA PRODUCTION WORKFLOW PIPELINE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-white/5 border-l-2 border-amber-400 space-y-1">
                <span className="text-amber-400 font-bold block">01. BLOCKOUT & SCALE</span>
                <p className="text-slate-300 text-[11px] font-sans">
                  Rigorous reference scale checking against 180cm mannequin. Testing primary, secondary, and tertiary read.
                </p>
              </div>

              <div className="p-3 bg-white/5 border-l-2 border-cyan-400 space-y-1">
                <span className="text-cyan-400 font-bold block">02. SUB-D & TOPOLOGY</span>
                <p className="text-slate-300 text-[11px] font-sans">
                  High-poly subdivision sculpting with weighted bevels. Retopologizing quad-dominant game-ready mesh.
                </p>
              </div>

              <div className="p-3 bg-white/5 border-l-2 border-emerald-400 space-y-1">
                <span className="text-emerald-400 font-bold block">03. UV & CAGE BAKE</span>
                <p className="text-slate-300 text-[11px] font-sans">
                  ZenUV unwrapping, seam placement along non-visible silhouettes, 16-bit float normal map cage baking.
                </p>
              </div>

              <div className="p-3 bg-white/5 border-l-2 border-purple-400 space-y-1">
                <span className="text-purple-400 font-bold block">04. PBR & ENGINE SHADER</span>
                <p className="text-slate-300 text-[11px] font-sans">
                  InstaMAT and Substance Painter smart materials. Master material instances with Lumen real-time bounce in UE5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
