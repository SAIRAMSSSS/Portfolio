"use client";

import React, { useState, useRef } from "react";
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
  Box,
  Play,
  Pause,
  Video,
  Film,
  Volume2,
  VolumeX,
  RotateCcw
} from "lucide-react";

type PassType = "BEAUTY" | "WIREFRAME" | "NORMALS" | "MATIDS" | "REFERENCE";

export function EnvironmentArtShowcase() {
  const [activePass, setActivePass] = useState<PassType>("BEAUTY");
  const [activeAsset, setActiveAsset] = useState<"LANTERN" | "ORGANIC">("LANTERN");
  
  // Real Environment Walkthrough Videos State
  const [activeVideo, setActiveVideo] = useState<"LIFESUPPORT" | "MOVIE009">("LIFESUPPORT");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleVideoSelect = (vid: "LIFESUPPORT" | "MOVIE009") => {
    SoundEngine.playClick();
    setActiveVideo(vid);
    setIsPlaying(true);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    SoundEngine.playClick();
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    SoundEngine.playClick();
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="environment-art" className="py-24 sm:py-32 relative bg-[#04060c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Film className="w-3.5 h-3.5" />
              <span>REAL-TIME ENVIRONMENT REELS & TECHNICAL ART</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              ENVIRONMENT <span className="text-slate-500 font-light">SHOWCASE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Real-time 3D environments and assets executed from raw architectural blockout to finalized cinematic lighting. 
              Watch recorded camera flythroughs below, followed by multi-pass topology and PBR texture audits.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-black/60 p-3 border border-white/10 space-y-1 text-right">
            <div className="text-amber-400 font-bold">UE5 LUMEN & NANITE WORKFLOW</div>
            <div className="text-slate-500">BLENDER 5.x // SUBSTANCE // INSTAMAT</div>
          </div>
        </div>

        {/* 1. CINEMATIC ENVIRONMENT VIDEO REELS (REAL-TIME WALKTHROUGHS) */}
        <div className="blueprint-box p-6 sm:p-10 bg-[#060914] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                REAL-TIME ENVIRONMENT REEL // {activeVideo === "LIFESUPPORT" ? "LIFESUPPORT ROOM" : "MOVIE_009 ENVIRONMENT WALKTHROUGH"}
              </span>
            </div>

            {/* Video Selector Tabs */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => handleVideoSelect("LIFESUPPORT")}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  activeVideo === "LIFESUPPORT"
                    ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                    : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/30"
                }`}
              >
                01 // LIFESUPPORT ROOM
              </button>
              <button
                onClick={() => handleVideoSelect("MOVIE009")}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  activeVideo === "MOVIE009"
                    ? "border-amber-400 bg-amber-400/20 text-white font-bold"
                    : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/30"
                }`}
              >
                02 // MOVIE_009 WALKTHROUGH
              </button>
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative aspect-16/9 bg-black border border-white/20 overflow-hidden shadow-2xl flex items-center justify-center group">
            <video
              ref={videoRef}
              key={activeVideo}
              src={activeVideo === "LIFESUPPORT" ? "/videos/lifesupport_room.mp4" : "/videos/movie_009.mp4"}
              poster={activeVideo === "LIFESUPPORT" ? "/videos/lifesupport_poster.jpg" : "/videos/movie_009_poster.jpg"}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Floating Top Telemetry */}
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/20 font-mono text-[11px] text-amber-300 tracking-wider flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FEED: {activeVideo === "LIFESUPPORT" ? "LIFESUPPORT_ROOM.MP4" : "MOVIE_009.MP4"}</span>
              <span className="text-slate-500">//</span>
              <span className="text-slate-300">REAL-TIME CAPTURE</span>
            </div>

            {/* Hover Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 border border-white/20 flex items-center justify-between font-mono text-xs z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleVideoPlay}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer rounded-xs"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-amber-400" />}
                </button>
                <button
                  onClick={toggleVideoMute}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer rounded-xs"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  {isPlaying ? "PLAYING [LOOP]" : "PAUSED"}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-slate-400">
                <span className="text-emerald-400">LUMEN GI ENABLED</span>
                <span className="text-slate-600">|</span>
                <span className="hidden md:inline">VOLUMETRIC ATMOSPHERE</span>
              </div>
            </div>
          </div>

          {/* Video Technical Commentary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs border-t border-white/10 pt-4">
            <div className="p-3 bg-black/60 border border-white/10 space-y-1">
              <span className="text-amber-400 font-bold block text-[10px]">ATMOSPHERE & LIGHTING</span>
              <p className="text-slate-300 text-[11px] font-sans">
                Dynamic emissive fixtures interacting with volumetric fog cards and real-time indirect bounces.
              </p>
            </div>
            <div className="p-3 bg-black/60 border border-white/10 space-y-1">
              <span className="text-cyan-400 font-bold block text-[10px]">MODULAR ARCHITECTURE</span>
              <p className="text-slate-300 text-[11px] font-sans">
                Constructed with snapping grid boundaries, reusable trim sheet textures, and structural conduits.
              </p>
            </div>
            <div className="p-3 bg-black/60 border border-white/10 space-y-1">
              <span className="text-emerald-400 font-bold block text-[10px]">PERFORMANCE BUDGET</span>
              <p className="text-slate-300 text-[11px] font-sans">
                Targeting smooth 60+ FPS playback with optimized draw call batching and Level-of-Detail culling.
              </p>
            </div>
          </div>
        </div>

        {/* 2. MULTI-PASS 3D ASSET INSPECTION STAGE */}
        <div className="blueprint-box p-6 sm:p-10 space-y-8 bg-[#05070d]">
          {/* Top Pass Selector Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-amber-400 font-bold tracking-wider uppercase block">
                STATIC ASSET MULTI-PASS INSPECTOR
              </span>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Inspect high-poly subdivs, wireframe topology, normal cage bakes, and material ID masks.
              </p>
            </div>

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
                HERO LANTERN
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
                BEETLE SCULPT
              </button>
            </div>
          </div>

          {/* Pass Buttons */}
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

          {/* Viewport Inspection Image */}
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
              <span className="text-[10px] text-slate-400 block">ENGINE TARGET</span>
              <span className="text-white font-bold text-sm">Unreal Engine 5</span>
              <span className="text-[9px] text-amber-400 block mt-0.5">Lumen GI Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
