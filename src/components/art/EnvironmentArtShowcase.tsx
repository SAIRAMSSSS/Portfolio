"use client";

import React, { useState, useRef } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { 
  Play, 
  Pause, 
  Video, 
  Film, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Maximize,
  Sliders,
  Layers,
  Sparkles,
  Cpu,
  Eye,
  CheckCircle2,
  Box
} from "lucide-react";

interface EnvironmentReel {
  id: "LIFESUPPORT" | "MOVIE009";
  title: string;
  badge: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  engine: string;
  lighting: string;
  tagline: string;
  summary: string;
  features: {
    title: string;
    description: string;
  }[];
}

const REELS: EnvironmentReel[] = [
  {
    id: "LIFESUPPORT",
    title: "LIFESUPPORT ROOM: SCI-FI INDUSTRIAL CHAMBER",
    badge: "UE5 // LUMEN GI // REAL-TIME REEL",
    videoSrc: "/videos/lifesupport_room.mp4",
    posterSrc: "/videos/lifesupport_poster.jpg",
    duration: "REAL-TIME WALKTHROUGH",
    engine: "Unreal Engine 5.4",
    lighting: "Lumen Dynamic GI + Emissive Radiosity",
    tagline: "Atmospheric sci-fi environment engineered with high-contrast volumetric conduits and industrial detailing.",
    summary: "An atmospheric industrial interior featuring a central life-support pod chamber. Designed with modular structural trusses, corrugated floor grating, glowing emissive fluid conduits, and real-time volumetric fog responding to dynamic indirect lighting.",
    features: [
      {
        title: "Dynamic Lumen Radiosity",
        description: "Emissive coolant pipes cast physical bounce light onto weathered metallic floor grates without lightmap baking."
      },
      {
        title: "Modular Kit Geometry",
        description: "Modeled to strict 10cm grid snap points in Blender to enable seamless architectural expansion and zero geometry light leaks."
      },
      {
        title: "Volumetric Atmosphere",
        description: "Exponential height fog combined with localized fog particle cards for cinematic depth and air density."
      }
    ]
  },
  {
    id: "MOVIE009",
    title: "MOVIE_009: REAL-TIME ARCHITECTURAL SEQUENCE",
    badge: "UE5 // CINECAMERA // 60 FPS",
    videoSrc: "/videos/movie_009.mp4",
    posterSrc: "/videos/movie_009_poster.jpg",
    duration: "CINEMATIC SEQUENCE",
    engine: "Unreal Engine 5.4",
    lighting: "Lumen Hardware Raytracing",
    tagline: "Cinematic camera flythrough demonstrating spatial scale, architectural pacing, and Lumen bounce fidelity.",
    summary: "A continuous virtual camera flythrough exploring spatial hierarchy, structural framing, and surface roughness response. Highlights clean silhouette balance, physically based camera exposures, and optimized real-time render performance.",
    features: [
      {
        title: "CineCamera Rail Pacing",
        description: "Keyframed camera motion simulating weighted 35mm anamorphic physical lenses with organic focal transitions."
      },
      {
        title: "Surface Micro-Roughness",
        description: "Cook-Torrance dielectric and metallic response calibrated across concrete, painted metals, and glass."
      },
      {
        title: "Real-Time Framerate Budget",
        description: "Maintains a rock-solid 60+ FPS in Unreal Engine 5 with Nanite mesh streaming and aggressive occlusion culling."
      }
    ]
  }
];

export function EnvironmentArtShowcase() {
  const [activeReelId, setActiveReelId] = useState<"LIFESUPPORT" | "MOVIE009">("LIFESUPPORT");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = REELS.find(r => r.id === activeReelId) || REELS[0];

  const handleSelectReel = (id: "LIFESUPPORT" | "MOVIE009") => {
    SoundEngine.playClick();
    setActiveReelId(id);
    setIsPlaying(true);
  };

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (!videoRef.current) return;
    SoundEngine.playClick();
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    SoundEngine.playClick();
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    SoundEngine.playClick();
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="environment-art" className="py-24 sm:py-32 relative bg-[#04060c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Film className="w-3.5 h-3.5" />
              <span>REAL-TIME 3D PRODUCTION REELS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-tech">
              ENVIRONMENT <span className="text-slate-500 font-light">SHOWCASE</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-sans">
              Real-time 3D environments executed from architectural blockouts to finalized cinematic lighting. 
              Captured directly from live Unreal Engine 5 viewport playback with dynamic Lumen global illumination.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-black/60 p-3 border border-white/10 space-y-1 text-right">
            <div className="text-amber-400 font-bold">UE5 LUMEN & NANITE WORKFLOW</div>
            <div className="text-slate-500">BLENDER 5.x // SUBSTANCE // INSTAMAT</div>
          </div>
        </div>

        {/* Master Video Reel Stage */}
        <div className="blueprint-box p-6 sm:p-10 bg-[#060914] space-y-6">
          {/* Header Switcher & Active Reel Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                ACTIVE REEL // {activeReel.title}
              </span>
            </div>

            {/* Reel Switcher Buttons */}
            <div className="flex items-center gap-2 font-mono text-xs">
              {REELS.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => handleSelectReel(reel.id)}
                  className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeReelId === reel.id
                      ? "border-amber-400 bg-amber-400/20 text-white font-bold shadow-sm"
                      : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  <span className="text-amber-400">{`0${idx + 1}`}</span>
                  <span>//</span>
                  <span>{reel.id === "LIFESUPPORT" ? "LIFESUPPORT ROOM" : "MOVIE_009"}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Video Player Frame */}
          <div className="relative aspect-16/9 bg-black border border-white/20 overflow-hidden shadow-2xl flex items-center justify-center group">
            <video
              ref={videoRef}
              key={activeReel.id}
              src={activeReel.videoSrc}
              poster={activeReel.posterSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Floating Top Left Telemetry */}
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/20 font-mono text-[11px] text-amber-300 tracking-wider flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>STREAM: {activeReel.id === "LIFESUPPORT" ? "LIFESUPPORT_ROOM.MP4" : "MOVIE_009.MP4"}</span>
              <span className="text-slate-500">//</span>
              <span className="text-slate-300">REAL-TIME CAPTURE</span>
            </div>

            {/* Floating Top Right Specs */}
            <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/20 font-mono text-[11px] text-slate-300 hidden sm:flex items-center gap-2 pointer-events-none">
              <span>RES: 1920x1080</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">60 FPS</span>
            </div>

            {/* Bottom HUD Tactical Control Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 border border-white/20 flex items-center justify-between font-mono text-xs z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer rounded-xs"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-amber-400" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer rounded-xs"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
                <button
                  onClick={restartVideo}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer rounded-xs"
                  aria-label="Restart Video"
                  title="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  {isPlaying ? "PLAYING [LOOP]" : "PAUSED"}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-slate-400">
                <span className="text-emerald-400 hidden md:inline">LUMEN GI ENABLED</span>
                <span className="text-slate-600 hidden md:inline">|</span>
                <span className="text-amber-300">{activeReel.engine}</span>
                <button
                  onClick={handleFullscreen}
                  className="p-1 hover:text-white text-slate-400 hover:bg-white/10 rounded-xs transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Breakdown Cards for Active Reel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs border-t border-white/10 pt-4">
            {activeReel.features.map((feat, idx) => (
              <div key={idx} className="p-4 bg-black/60 border border-white/10 space-y-1.5">
                <span className="text-amber-400 font-bold block text-[11px] tracking-wider uppercase">
                  {feat.title}
                </span>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Environment Architecture & Lighting Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs border-t border-white/10 pt-6">
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">ENGINE</span>
              <span className="text-white font-bold text-xs">{activeReel.engine}</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">Deferred Pipeline</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">LIGHTING</span>
              <span className="text-white font-bold text-xs">Lumen GI</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">HW Raytracing</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">ATMOSPHERE</span>
              <span className="text-white font-bold text-xs">Volumetric Fog</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">Indirect Scatter</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">GEOMETRY</span>
              <span className="text-white font-bold text-xs">Modular Kit</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">10cm Snap Units</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">MATERIALS</span>
              <span className="text-white font-bold text-xs">4K PBR Atlases</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">Substance / InstaMAT</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">PERFORMANCE</span>
              <span className="text-white font-bold text-xs">60+ FPS</span>
              <span className="text-[9px] text-amber-400 block mt-0.5">Zero Hitching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
