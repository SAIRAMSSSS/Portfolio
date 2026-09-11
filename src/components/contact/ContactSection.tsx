"use client";

import React, { useState } from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { 
  Terminal, 
  Send, 
  Mail, 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Globe,
  Radio
} from "lucide-react";

export function ContactSection() {
  const { setResumeModalOpen, setTerminalOpen } = useDuality();
  const [copied, setCopied] = useState<boolean>(false);
  const [msgInput, setMsgInput] = useState({ name: "", email: "", message: "" });
  const [dispatched, setDispatched] = useState<boolean>(false);

  const copyEmail = () => {
    SoundEngine.playClick();
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    SoundEngine.playClick();
    setDispatched(true);
    setTimeout(() => {
      setDispatched(false);
      setMsgInput({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-[#030408] border-t border-white/10 overflow-hidden">
      {/* Background cybernetic grid & radar circle */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Cinematic Title & Disciplines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 font-mono text-xs text-amber-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>COMMUNICATION CHANNEL OPEN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
            HAVE A WORLD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              TO BUILD?
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-slate-400">
            <span>Environment Art</span>
            <span className="text-slate-600">•</span>
            <span>Graphics Programming</span>
            <span className="text-slate-600">•</span>
            <span>Game Systems</span>
            <span className="text-slate-600">•</span>
            <span>Technical Art</span>
            <span className="text-slate-600">•</span>
            <span>Collaboration</span>
          </div>
        </div>

        {/* Transmission Terminal & Direct Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left: Interactive Message Dispatcher */}
          <div className="lg:col-span-7 blueprint-box p-6 sm:p-8 bg-[#070a14] space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white tracking-wider">DIRECT DISPATCH TRANSMITTER</span>
              </div>
              <span className="text-slate-500 text-[10px]">ENCRYPTION: AES-256</span>
            </div>

            {dispatched ? (
              <div className="p-8 bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-300">
                  ✓
                </div>
                <h4 className="text-white font-bold text-sm">TRANSMISSION RECEIVED</h4>
                <p className="text-slate-300 text-xs font-sans">
                  Your signal has been routed to Sairam&apos;s primary workstation. Expect a direct response shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTransmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold">OPERATOR / STUDIO</label>
                    <input
                      type="text"
                      required
                      value={msgInput.name}
                      onChange={(e) => setMsgInput({ ...msgInput, name: e.target.value })}
                      placeholder="e.g. Studio Art Director / Recruiter"
                      className="w-full bg-black/60 border border-white/10 p-2.5 text-white outline-hidden focus:border-amber-400 font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold">RETURN FREQUENCY / EMAIL</label>
                    <input
                      type="email"
                      required
                      value={msgInput.email}
                      onChange={(e) => setMsgInput({ ...msgInput, email: e.target.value })}
                      placeholder="name@studio.com"
                      className="w-full bg-black/60 border border-white/10 p-2.5 text-white outline-hidden focus:border-amber-400 font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 text-[10px] uppercase font-bold">PROJECT BRIEF / MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={msgInput.message}
                    onChange={(e) => setMsgInput({ ...msgInput, message: e.target.value })}
                    placeholder="Describe your 3D world, graphics pipeline need, or technical opportunity..."
                    className="w-full bg-black/60 border border-white/10 p-2.5 text-white outline-hidden focus:border-amber-400 font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT SIGNAL</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels & Manifest */}
          <div className="lg:col-span-5 flex flex-col justify-between blueprint-box p-6 sm:p-8 bg-[#070a14] space-y-6 font-mono text-xs">
            <div className="border-b border-white/10 pb-4 space-y-1">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
                OFFICIAL REPOSITORIES & COMMS
              </span>
              <h3 className="text-xl font-bold text-white">DIRECT CHANNELS</h3>
            </div>

            <div className="space-y-3">
              {/* GitHub */}
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 bg-black/60 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <div>
                    <div className="font-bold text-white">GITHUB</div>
                    <div className="text-[10px] text-slate-500">{PROFILE.handle} (30+ Repos)</div>
                  </div>
                </div>
                <span className="text-slate-500 text-[10px]">VISIT →</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 bg-black/60 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-bold text-white">LINKEDIN</div>
                    <div className="text-[10px] text-slate-500">Professional Network</div>
                  </div>
                </div>
                <span className="text-slate-500 text-[10px]">VISIT →</span>
              </a>

              {/* Email Copy */}
              <div 
                onClick={copyEmail}
                className="flex items-center justify-between p-3 bg-black/60 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="font-bold text-white">EMAIL</div>
                    <div className="text-[10px] text-slate-500">{PROFILE.links.email}</div>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-white text-[10px] flex items-center gap-1">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              {/* Resume Button */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="w-full flex items-center justify-between p-3 bg-white/5 border border-amber-500/40 hover:bg-white/10 text-slate-200 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div className="font-bold text-white">RESUME MANIFEST</div>
                    <div className="text-[10px] text-slate-400">View & Download Dossier</div>
                  </div>
                </div>
                <span className="text-amber-400 text-[10px]">VIEW →</span>
              </button>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>LOCATION: {PROFILE.coordinates.label}</span>
              <span>TIMEZONE: UTC+05:30 [IST]</span>
            </div>
          </div>
        </div>

        {/* Footer Copyright Strip */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. ENGINEERED WITH NEXT.JS, THREE.JS & TAILWIND.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTerminalOpen(true)}
              className="hover:text-white underline cursor-pointer"
            >
              LAUNCH SYS_TERMINAL [`]
            </button>
            <span>•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white cursor-pointer"
            >
              RETURN TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
