"use client";

import React, { useState } from "react";
import { DualityProvider } from "@/context/DualityContext";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { CurrentDirectionSection } from "@/components/direction/CurrentDirectionSection";
import { TechStackEcosystem } from "@/components/tech/TechStackEcosystem";
import { HowIThink } from "@/components/philosophy/HowIThink";
import { BuildingTowardSection } from "@/components/trajectory/BuildingTowardSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { SystemTerminalModal } from "@/components/terminal/SystemTerminalModal";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { RenderingLab } from "@/components/graphics/RenderingLab";
import { IntelligenceLab } from "@/components/ai/IntelligenceLab";
import { HackathonBattleLog } from "@/components/hackathons/HackathonBattleLog";
import { SyntrixSection } from "@/components/community/SyntrixSection";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HomePage() {
  const [showExtendedLabs, setShowExtendedLabs] = useState(false);

  return (
    <DualityProvider>
      <div className="min-h-screen bg-[#0a0a0b] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
        {/* Minimal Navigation */}
        <HeaderNav />

        <main className="flex-1">
          {/* Hero */}
          <HeroSection />

          {/* Selected Projects */}
          <ProjectArchive />

          {/* Direction */}
          <CurrentDirectionSection />

          {/* Toolkit */}
          <TechStackEcosystem />

          {/* Approach */}
          <HowIThink />

          {/* Building Toward */}
          <BuildingTowardSection />

          {/* Optional Extended Engineering Labs (OpenGL, AI Tensors, Hackathons, Syntrix) */}
          <section className="py-12 border-b border-white/[0.08]">
            <div className="max-w-4xl mx-auto px-6">
              <button
                onClick={() => setShowExtendedLabs(!showExtendedLabs)}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
              >
                <span>
                  {showExtendedLabs
                    ? "Hide interactive labs & community archives"
                    : "Explore interactive labs & community archives (OpenGL 4.6, PyTorch Lab, Syntrix, Hackathons)"}
                </span>
                {showExtendedLabs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {showExtendedLabs && (
              <div className="mt-8 space-y-12">
                <RenderingLab />
                <IntelligenceLab />
                <HackathonBattleLog />
                <SyntrixSection />
              </div>
            )}
          </section>

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
