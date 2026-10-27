"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    SoundEngine.playClick();
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: "Portfolio", href: PROFILE.links.portfolio, display: "portfolio-gamma-ten-1m75emxn99.vercel.app" },
    { label: "LinkedIn", href: PROFILE.links.linkedin, display: "linkedin.com/in/sairam-r-7900b136b" },
    { label: "GitHub", href: PROFILE.links.github, display: "github.com/SAIRAMSSSS" },
  ];

  return (
    <footer id="elsewhere" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
            Elsewhere
          </h2>
          <p className="text-sm text-neutral-400">
            Open to conversations regarding DevOps, infrastructure, and engineering opportunities.
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          {links.map((link) => (
            <div
              key={link.label}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-white/[0.06] text-neutral-400 hover:text-white transition-colors"
            >
              <span className="text-neutral-500 font-sans text-xs">{link.label}</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => SoundEngine.playClick()}
                className="inline-flex items-center gap-1 hover:underline text-neutral-300 hover:text-white"
              >
                <span>{link.display}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}

          {/* Email row with 1-click copy */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-white/[0.06] text-neutral-400">
            <span className="text-neutral-500 font-sans text-xs">Direct Email</span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.links.email}`}
                className="text-neutral-300 hover:text-white hover:underline"
              >
                {PROFILE.links.email}
              </a>
              <button
                onClick={copyEmail}
                className="text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quiet, confident sign-off */}
        <div className="pt-8 border-t border-white/[0.06] text-center sm:text-left space-y-2">
          <p className="text-sm sm:text-base text-neutral-300 italic font-serif">
            &ldquo;{PROFILE.motto}&rdquo;
          </p>
          <div className="text-xs text-neutral-400 font-mono">
            {PROFILE.name} · {PROFILE.coordinates.label}
          </div>
        </div>
      </div>
    </footer>
  );
}
