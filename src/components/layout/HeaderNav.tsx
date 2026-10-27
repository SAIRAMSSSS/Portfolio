"use client";

import React, { useState, useEffect } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Compass,
  Box,
  Cpu,
  Workflow,
  Target,
  Globe,
  Menu,
  X,
  Radio,
  FileText
} from "lucide-react";

export function HeaderNav() {
  const { 
    mode, 
    toggleMode, 
    audioMuted, 
    toggleAudio, 
    setTerminalOpen, 
    setResumeModalOpen 
  } = useDuality();

  const [fps, setFps] = useState<number>(60);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(144, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "01_DIR", href: "#current-direction" },
    { label: "02_PROJECTS", href: "#projects" },
    { label: "03_TOOLKIT", href: "#toolkit" },
    { label: "04_APPROACH", href: "#approach" },
    { label: "05_BUILDING", href: "#building-toward" },
    { label: "06_ELSEWHERE", href: "#elsewhere" },
    { label: "GL_LAB", href: "#rendering-lab" },
    { label: "BATTLE_LOG", href: "#hackathons" }
  ];

  const handleNavClick = (href: string) => {
    SoundEngine.playClick();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040609]/90 backdrop-blur-md border-b border-white/10 text-xs font-mono select-none">
      {/* Top Telemetry Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 border-b border-white/5 text-[10px] text-slate-500 tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OPERATOR: {PROFILE.name} {"//"} ARCH_KERNEL_6.x
          </span>
          <span className="text-slate-700">|</span>
          <span>LAT: 11.0168° N, LNG: 76.9558° E</span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">CLK: {timeStr || "12:00:00"}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 font-bold">PRIMARY: DEVOPS & INFRASTRUCTURE · AI SYSTEMS</span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">{fps} FPS</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-black/80 border border-white/20 flex items-center justify-center font-bold text-white text-sm group-hover:border-emerald-400 transition-colors">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-wider font-tech text-sm group-hover:text-emerald-400 transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-[9px] text-slate-400 font-mono tracking-tight">
                DEVOPS & AI SYSTEMS
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 font-mono text-[11px]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1 text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer rounded-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Control Tools (Terminal, Audio, Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Terminal Trigger */}
          <button
            onClick={() => {
              SoundEngine.playClick();
              setTerminalOpen(true);
            }}
            className="px-2.5 py-1 bg-black/60 border border-white/20 text-cyan-300 hover:text-white hover:border-cyan-400 font-mono text-[11px] flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            title="Open CLI Terminal (~)"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">CLI [~]</span>
          </button>

          {/* Audio Mute/Unmute */}
          <button
            onClick={() => {
              toggleAudio();
              SoundEngine.playClick();
            }}
            className="p-1.5 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title={audioMuted ? "Unmute Tactical SFX" : "Mute SFX"}
            aria-label="Toggle Audio"
          >
            {audioMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              SoundEngine.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-1.5 border border-white/10 hover:border-white/30 text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#04060a] border-b border-white/10 p-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="p-2.5 bg-black/50 border border-white/10 text-left text-slate-300 hover:text-white hover:border-emerald-400 font-mono text-xs cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <a
              href={PROFILE.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline"
            >
              Vercel Portfolio
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline"
            >
              GitHub / SAIRAMSSSS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
