"use client";

import React from "react";
import { DualityProvider } from "@/context/DualityContext";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { EnvironmentArtShowcase } from "@/components/art/EnvironmentArtShowcase";
import { RenderingLab } from "@/components/graphics/RenderingLab";
import { IntelligenceLab } from "@/components/ai/IntelligenceLab";
import { HackathonBattleLog } from "@/components/hackathons/HackathonBattleLog";
import { SyntrixSection } from "@/components/community/SyntrixSection";
import { TechStackEcosystem } from "@/components/tech/TechStackEcosystem";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";
import { HowIThink } from "@/components/philosophy/HowIThink";
import { ContactSection } from "@/components/contact/ContactSection";
import { SystemTerminalModal } from "@/components/terminal/SystemTerminalModal";
import { ResumeModal } from "@/components/resume/ResumeModal";

export default function HomePage() {
  return (
    <DualityProvider>
      <main className="relative min-h-screen bg-[#05070a] text-slate-100 flex flex-col">
        {/* Persistent Tactical HUD Header */}
        <HeaderNav />

        {/* 1. Cinematic Hero Section with 3D Duality WebGL Canvas */}
        <HeroSection />

        {/* 2. Project Archive / Digital Museum Artifacts (001 - 005) */}
        <ProjectArchive />

        {/* 4. Environment Art Showcase (Art Director Inspection) */}
        <EnvironmentArtShowcase />

        {/* 5. The Rendering Lab (C++, OpenGL 4.6, Shaders & Vulkan) */}
        <RenderingLab />

        {/* 6. Intelligence Lab (PyTorch, NumPy, Loss Convergence) */}
        <IntelligenceLab />

        {/* 7. Hackathon Battle Log (50+ Sprints & Podiums) */}
        <HackathonBattleLog />

        {/* 8. Syntrix Community Leadership (~250 Members) */}
        <SyntrixSection />

        {/* 9. Interactive Tech Stack Arsenal */}
        <TechStackEcosystem />

        {/* 10. About Section (Evolutionary Timeline) */}
        <InteractiveTimeline />

        {/* 11. "How I Think" Core Axioms & Typography */}
        <HowIThink />

        {/* 12. Cinematic Contact & Comms Transmission */}
        <ContactSection />

        {/* Modals & Terminal Engine */}
        <SystemTerminalModal />
        <ResumeModal />
      </main>
    </DualityProvider>
  );
}
