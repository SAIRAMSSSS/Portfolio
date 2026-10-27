"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export function HeroSection() {
  const scrollTo = (id: string) => {
    SoundEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Header Name & Role */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-100">
              {PROFILE.name}
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mt-2 font-normal">
              {PROFILE.primaryTitle}
            </p>
          </div>

          {/* Lead bio */}
          <div className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl space-y-3 font-normal">
            <p>
              I build practical software tools, explore how systems work under the hood, and turn experiments into reproducible projects.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base">
              Currently focused on <span className="text-neutral-200">Linux, Docker, deployment workflows, infrastructure automation, and the foundations of AI systems and GPU computing</span>. Graphics programming and game technology remain long-term interests.
            </p>
          </div>

          {/* Clean Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-neutral-400 font-mono">
            <a
              href={PROFILE.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={`mailto:${PROFILE.links.email}`}
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
