"use client";

import React, { useState } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

export function HeaderNav() {
  const { setTerminalOpen } = useDuality();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Direction", href: "#direction" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Workbench", href: "#workbench" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#elsewhere" },
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
    <header className="sticky top-0 z-40 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-medium text-sm text-neutral-200 hover:text-white transition-colors"
        >
          {PROFILE.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              SoundEngine.playClick();
              setTerminalOpen(true);
            }}
            className="px-2.5 py-1 text-xs font-mono text-neutral-400 hover:text-neutral-200 border border-white/[0.1] hover:border-white/[0.2] rounded transition-all flex items-center gap-1.5 cursor-pointer"
            title="Open terminal (~)"
          >
            <Terminal className="w-3 h-3" />
            <span>CLI</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={() => setTerminalOpen(true)}
            className="p-1.5 text-neutral-400 hover:text-white border border-white/[0.1] rounded text-xs font-mono"
            aria-label="Open Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#0a0a0b] px-6 py-4 space-y-3 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-neutral-300 hover:text-white py-1"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-4 text-xs text-neutral-400">
            <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub ↗
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
