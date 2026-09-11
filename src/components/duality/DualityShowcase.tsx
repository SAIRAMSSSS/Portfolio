"use client";

import React, { useState, useRef } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { Layers, Code2, Sliders, Eye, Sparkles, Cpu, GitFork } from "lucide-react";

export function DualityShowcase() {
  const { mode, toggleMode } = useDuality();
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage (0 - 100)
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => {
    isDragging.current = true;
    SoundEngine.playClick();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pct = Math.round((x / rect.width) * 100);
    setSliderPos(pct);
  };

  return (
    <section id="duality" className="py-20 sm:py-28 relative border-t border-white/10 bg-[#06080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE RECURRING PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ART ↔ CODE <span className="text-slate-500 font-light">DUALITY</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              &ldquo;I don&apos;t just make the image. I understand the machinery behind it.&rdquo; 
              Drag the interactive comparison divider below to expose the underlying vertex topology, 
              shader pipelines, and buffer architectures supporting the final rendered asset.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0">
            <button
              onClick={() => {
                setSliderPos(100);
                SoundEngine.playClick();
              }}
              className="px-3 py-1.5 border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              100% ART
            </button>
            <button
              onClick={() => {
                setSliderPos(50);
                SoundEngine.playClick();
              }}
              className="px-3 py-1.5 border border-white/20 text-slate-300 hover:bg-white/10 transition-colors"
            >
              50 / 50 SPLIT
            </button>
            <button
              onClick={() => {
                setSliderPos(0);
                SoundEngine.playClick();
              }}
              className="px-3 py-1.5 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              100% CODE
            </button>
          </div>
        </div>

        {/* Interactive Dual Split Screen Viewer */}
        <div 
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] border border-white/20 overflow-hidden select-none cursor-ew-resize bg-black shadow-2xl"
        >
          {/* RIGHT SIDE: CODE & TECHNICAL BREAKDOWN (Full background) */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 bg-[#050811] text-cyan-400 font-mono">
            {/* Tech Wireframe / Shader Background Simulation */}
            <div className="absolute inset-0 bg-tech-grid opacity-30" />
            <img 
              src="/images/art/block_wireframe.png" 
              alt="Topology Wireframe"
              className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen pointer-events-none"
            />

            {/* Top Tech Telemetry */}
            <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/30 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="font-bold tracking-wider text-cyan-300">CODE MODE // HARDWARE BREAKDOWN</span>
              </div>
              <span className="px-2 py-0.5 bg-cyan-950/80 border border-cyan-500/40 text-[10px]">
                TOPOLOGY & SHADER PIPELINE
              </span>
            </div>

            {/* Middle Technical Shader & Buffer Snippet */}
            <div className="relative z-10 max-w-md bg-black/80 backdrop-blur-md border border-cyan-500/30 p-4 text-[11px] space-y-2">
              <div className="text-white font-bold tracking-wider">PIPELINE EXECUTION STATE:</div>
              <div className="text-slate-400 text-[10px]">
                VAO_STRIDE: sizeof(Vertex) = 32 bytes<br/>
                LAYOUT: Pos(vec3) + Norm(vec3) + UV(vec2)<br/>
                SHADER_PASS: BlinnPhong_PBR.frag (SPIR-V compiled)<br/>
                DRAW_CALL: glDrawElements(GL_TRIANGLES, 25260, GL_UNSIGNED_INT, 0);
              </div>
              <div className="text-cyan-300 font-mono text-[10px] bg-cyan-950/40 p-2 border border-cyan-800/40">
                float NdotL = max(dot(norm, lightDir), 0.0);<br/>
                vec3 H = normalize(lightDir + viewDir);<br/>
                float NdotH = max(dot(norm, H), 0.0);
              </div>
            </div>

            {/* Bottom Tech Status */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-cyan-400/80 border-t border-cyan-500/30 pt-3">
              <span>TRIS: 8,420 // DRAW_CALLS: 1 // VRAM: ~4.2 MB</span>
              <span>RENDERDOC CAPTURE: CLEAN</span>
            </div>
          </div>

          {/* LEFT SIDE: ART & BEAUTY RENDER (Clipped by slider percentage) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-[clip-path] duration-75"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 bg-[#0d0f17] text-amber-400 font-mono">
              <img 
                src="/images/art/block_beauty.png" 
                alt="Beauty Render"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Top Art Telemetry */}
              <div className="relative z-10 flex items-center justify-between border-b border-amber-500/30 pb-3 text-xs bg-black/40 backdrop-blur-xs p-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span className="font-bold tracking-wider text-amber-300">ART MODE // BEAUTY RENDER</span>
                </div>
                <span className="px-2 py-0.5 bg-amber-950/80 border border-amber-500/40 text-[10px]">
                  PBR MATERIALS & LUMEN GI
                </span>
              </div>

              {/* Middle Art Notes */}
              <div className="relative z-10 max-w-sm bg-black/75 backdrop-blur-md border border-amber-500/30 p-4 text-[11px] space-y-1.5 text-slate-200">
                <div className="text-amber-400 font-bold">MATERIAL ATTRIBUTES:</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Weathered bronze sub-d chassis with oxidized surface roughness channels, 
                  dielectric Fresnel reflectance, and emissive warm core lighting.
                </p>
                <div className="text-amber-300/80 text-[10px]">
                  PBR WORKFLOW: Metallic / Roughness (Cook-Torrance)
                </div>
              </div>

              {/* Bottom Art Specs */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-amber-400/80 border-t border-amber-500/30 pt-3 bg-black/40 backdrop-blur-xs p-2">
                <span>DCC: BLENDER 5.2 ↔ SUBSTANCE ↔ UE5</span>
                <span>4K PBR TEXTURE PACK</span>
              </div>
            </div>
          </div>

          {/* DRAGGABLE DIVIDER LINE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-xl cursor-grab active:cursor-grabbing">
              ⇄
            </div>
          </div>
        </div>

        {/* Duality Pillars Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Art Pillar */}
          <div className="p-6 bg-[#0a0d16] border border-amber-500/30 space-y-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold">
                <Layers className="w-4 h-4" />
                <span>THE ARTIST PERSPECTIVE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20">
                VISUAL MASTERY
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Environment art is the discipline of emotional immersion: framing the eye, establishing mood 
              through atmospheric lighting, creating believability with micro-roughness variations, and ensuring 
              modular assets click together like seamless reality.
            </p>
            <div className="font-mono text-xs text-slate-400 space-y-1 border-t border-white/5 pt-3">
              <div>• Composition, Silhouette & Proportion</div>
              <div>• Sub-D Modeling & ZenUV Density Alignment</div>
              <div>• Procedural Surface Weathering in InstaMAT & Substance</div>
              <div>• Lumen Dynamic Lighting & Volumetric Atmosphere in UE5</div>
            </div>
          </div>

          {/* Code Pillar */}
          <div className="p-6 bg-[#0a0d16] border border-cyan-500/30 space-y-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold">
                <Code2 className="w-4 h-4" />
                <span>THE SYSTEMS PERSPECTIVE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ARCHITECTURAL RIGOR
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Graphics programming is the discipline of physical truth and hardware efficiency: configuring 
              memory strides in VAOs, optimizing vertex cache reuse, avoiding GPU pipeline stalls, and calculating 
              vector dot products in custom GLSL shader stages.
            </p>
            <div className="font-mono text-xs text-slate-400 space-y-1 border-t border-white/5 pt-3">
              <div>• C++ Memory Layout & Cache Coherency</div>
              <div>• Modern OpenGL 4.6 Core Buffers (VAO, VBO, EBO)</div>
              <div>• Vector Math, MVP Matrices & Coordinate Transforms</div>
              <div>• Vulkan Pipeline Barriers & Explicit GPU Command Queues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
