"use client";

import React from "react";
import { DualityProvider } from "@/context/DualityContext";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { CurrentDirectionSection } from "@/components/direction/CurrentDirectionSection";
import { TechStackEcosystem } from "@/components/tech/TechStackEcosystem";
import { InteractiveWorkbench } from "@/components/workbench/InteractiveWorkbench";
import { HowIThink } from "@/components/philosophy/HowIThink";
import { BuildingTowardSection } from "@/components/trajectory/BuildingTowardSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { SystemTerminalModal } from "@/components/terminal/SystemTerminalModal";
import { ResumeModal } from "@/components/resume/ResumeModal";

export default function HomePage() {
  return (
    <DualityProvider>
      <div className="min-h-screen bg-[#0a0a0b] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
        {/* Minimal Navigation */}
        <HeaderNav />

        <main className="flex-1">
          {/* Hero */}
          <HeroSection />

          {/* Selected Projects with Interactive Architecture Blueprints */}
          <ProjectArchive />

          {/* Current Focus (Currently Doing vs Side Quest) */}
          <CurrentDirectionSection />

          {/* Engineering Toolkit */}
          <TechStackEcosystem />

          {/* Signature Interactive Engineering Workbench */}
          <InteractiveWorkbench />

          {/* Engineering Principles */}
          <HowIThink />

          {/* Building Toward & Milestones */}
          <BuildingTowardSection />

          {/* Elsewhere & Contact */}
          <ContactSection />
        </main>

        {/* Modals & CLI Terminal */}
        <SystemTerminalModal />
        <ResumeModal />
      </div>
    </DualityProvider>
  );
}
