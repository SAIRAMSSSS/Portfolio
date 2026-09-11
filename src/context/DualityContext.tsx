"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export type Mode = "ART" | "CODE";

interface DualityContextType {
  mode: Mode;
  isCodeMode: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
  audioMuted: boolean;
  toggleAudio: () => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  resumeModalOpen: boolean;
  setResumeModalOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

const DualityContext = createContext<DualityContextType | undefined>(undefined);

export function DualityProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("ART");
  const [audioMuted, setAudioMuted] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    // Keyboard shortcut for Terminal: Backtick / Tilde
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setTerminalOpen(false);
        setResumeModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMode = () => {
    const nextMode = mode === "ART" ? "CODE" : "ART";
    setModeState(nextMode);
    SoundEngine.playDualitySwitch(nextMode === "CODE");
  };

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    SoundEngine.playDualitySwitch(newMode === "CODE");
  };

  const toggleAudio = () => {
    const next = SoundEngine.toggleMute();
    setAudioMuted(next);
  };

  return (
    <DualityContext.Provider
      value={{
        mode,
        isCodeMode: mode === "CODE",
        toggleMode,
        setMode,
        audioMuted,
        toggleAudio,
        terminalOpen,
        setTerminalOpen,
        resumeModalOpen,
        setResumeModalOpen,
        activeSection,
        setActiveSection
      }}
    >
      <div className={mode === "CODE" ? "mode-code" : "mode-art"}>
        {children}
      </div>
    </DualityContext.Provider>
  );
}

export function useDuality() {
  const context = useContext(DualityContext);
  if (!context) {
    throw new Error("useDuality must be used within a DualityProvider");
  }
  return context;
}
