"use client";

import React from "react";
import { DualityProvider } from "@/context/DualityContext";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { CurrentDirectionSection } from "@/components/direction/CurrentDirectionSection";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { TechStackEcosystem } from "@/components/tech/TechStackEcosystem";
import { HowIThink } from "@/components/philosophy/HowIThink";
import { BuildingTowardSection } from "@/components/trajectory/BuildingTowardSection";
import { RenderingLab } from "@/components/graphics/RenderingLab";
import { IntelligenceLab } from "@/components/ai/IntelligenceLab";
import { HackathonBattleLog } from "@/components/hackathons/HackathonBattleLog";
import { SyntrixSection } from "@/components/community/SyntrixSection";
import { EnvironmentArtShowcase } from "@/components/art/EnvironmentArtShowcase";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";
import { ContactSection } from "@/components/contact/ContactSection";
import { SystemTerminalModal } from "@/components/terminal/SystemTerminalModal";
import { ResumeModal } from "@/components/resume/ResumeModal";

export default function HomePage() {
  return (
    <DualityProvider>
      <main className="relative min-h-screen bg-[#040609] text-slate-100 flex flex-col">
        {/* Persistent Tactical HUD Header */}
        <HeaderNav />

        {/* Cinematic Hero Section with 3D WebGL Canvas */}
        <HeroSection />

        {/* 01 / CURRENT DIRECTION: Primary DevOps & AI, Long-term Graphics */}
        <CurrentDirectionSection />

        {/* 02 / SELECTED PROJECTS: REMoWser, REMoAINTER, REMoErminal */}
        <ProjectArchive />

        {/* 03 / ENGINEERING TOOLKIT: Used in Projects vs Currently Developing */}
        <TechStackEcosystem />

        {/* 04 / HOW I APPROACH ENGINEERING: 4 Core Operational Axioms */}
        <HowIThink />

        {/* 05 / WHAT I'M BUILDING TOWARD: DevOps/Infra Target & Hardware Profiling */}
        <BuildingTowardSection />

        {/* Specialized Interactive Labs & Evidence */}
        {/* The Rendering Lab (C++, OpenGL 4.6, Shaders) */}
        <RenderingLab />

        {/* Intelligence Lab (PyTorch, NumPy, Loss Convergence) */}
        <IntelligenceLab />

        {/* Hackathon Battle Log (50+ Sprints & Podiums) */}
        <HackathonBattleLog />

        {/* Syntrix Community Leadership (~250 Members) */}
        <SyntrixSection />

        {/* Environment Art & Long-Term 3D Technology */}
        <EnvironmentArtShowcase />

        {/* Evolutionary Timeline */}
        <InteractiveTimeline />

        {/* 06 / ELSEWHERE & Direct Communications Transmission */}
        <ContactSection />

        {/* Interactive Modals & Terminal Engine */}
        <SystemTerminalModal />
        <ResumeModal />
      </main>
    </DualityProvider>
  );
}
