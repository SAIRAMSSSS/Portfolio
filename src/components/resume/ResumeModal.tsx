"use client";

import React from "react";
import { useDuality } from "@/context/DualityContext";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { HACKATHON_STATS, HACKATHON_LOGS } from "@/data/hackathons";
import { SYNTRIX_DATA } from "@/data/community";
import { X, Download, Printer, ExternalLink, ShieldCheck, Award, Terminal, Layers } from "lucide-react";

export function ResumeModal() {
  const { resumeModalOpen, setResumeModalOpen } = useDuality();

  if (!resumeModalOpen) return null;

  const handlePrint = () => {
    SoundEngine.playClick();
    window.print();
  };

  const handleDownload = () => {
    SoundEngine.playClick();
    const content = `
===================================================================
${PROFILE.name} - RESUME MANIFEST
${PROFILE.primaryTitle}
Intersection: ART ↔ CODE ↔ GAMES
Location: ${PROFILE.coordinates.label}
Email: ${PROFILE.links.email}
LinkedIn: ${PROFILE.links.linkedin}
GitHub: ${PROFILE.links.github}
===================================================================

[EDUCATION]
${PROFILE.degree}

[CORE SUMMARY]
${PROFILE.bio}

[FEATURED TECHNICAL PROJECTS & REELS]
* Real-Time Environment Reels: 'LifeSupport Room' and 'Movie_009' Walkthroughs
  High-fidelity real-time lighting, Lumen GI, modular kits, volumetric atmosphere.

${PROJECTS.map(p => `
* ${p.title} (${p.category})
  Role: ${p.role} | Tech: ${p.techStack.join(", ")}
  Summary: ${p.summary}
  Result: ${p.result}
`).join("\n")}

[COMPETITIVE HACKATHONS & ACHIEVEMENTS]
* Total Hackathons Completed: ${HACKATHON_STATS.total}
* CMS College Hackathon: ${HACKATHON_STATS.cmsResult}
* SRCAS National Level Hackathon: ${HACKATHON_STATS.srcasResult}
* Game Jams: ${HACKATHON_STATS.gameJams} (Retropunk & others)

[LEADERSHIP & INDEPENDENT COMMUNITY]
* Co-Founder of ${SYNTRIX_DATA.name} (${SYNTRIX_DATA.memberCount} outside college)
  ${SYNTRIX_DATA.mission}
  Weekly Voice Meetups: ${SYNTRIX_DATA.weeklyVoiceAttendees}

[TECHNICAL ARSENAL]
* Environment Art: Blender 5.x, Substance Painter, InstaMAT, Unreal Engine 5, PBR Materials, ZenUV
* Graphics Programming: OpenGL 4.6 Core, GLSL Shaders, C++, Vulkan API, GLFW, GLAD
* Systems & Languages: C++, C, Python, Linux, CMake, Git
* AI & Analytics: PyTorch, NumPy, Pandas, Scikit-Learn
* Security: IoT Protocol Inspection, Raw Sockets, Scapy
===================================================================
`.trim();

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Sairam_R_Technical_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b0e17] border border-white/20 shadow-2xl text-slate-200 overflow-hidden relative">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#111726] border-b border-white/10 select-none">
          <div className="flex items-center gap-2 font-mono text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white tracking-wider font-tech">
              VERIFIED RESUME MANIFEST // {PROFILE.name}
            </span>
            <span className="hidden sm:inline text-[10px] px-2 py-0.5 bg-white/10 text-amber-300">
              C++ • OPENGL • BLENDER • UE5 • AI
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs text-amber-300 transition-colors cursor-pointer"
              title="Download Verified Resume Text"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME</span>
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setResumeModalOpen(false);
              }}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-sm space-y-8 bg-[#07090f]">
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-tech">
                {PROFILE.name}
              </h1>
              <p className="text-amber-400 font-mono text-sm tracking-wide mt-1 font-bold">
                {PROFILE.primaryTitle}
              </p>
              <p className="text-slate-300 text-xs mt-1 font-mono">
                {PROFILE.degree}
              </p>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1 sm:text-right">
              <div>Email: <a href={`mailto:${PROFILE.links.email}`} className="text-amber-300 hover:underline">{PROFILE.links.email}</a></div>
              <div>LinkedIn: <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">sairam-r-7900b136b</a></div>
              <div>GitHub: <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-white hover:underline">{PROFILE.handle}</a></div>
              <div>Location: {PROFILE.coordinates.label}</div>
            </div>
          </div>

          {/* Core Summary */}
          <div>
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              PROFESSIONAL TRAJECTORY
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>

          {/* Real-time Video Reels */}
          <div className="p-4 bg-black/60 border border-amber-500/30 space-y-2">
            <h3 className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">
              REAL-TIME ENVIRONMENT WALKTHROUGHS
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              • <strong>LifeSupport Room:</strong> Cinematic sci-fi industrial chamber with dynamic emissive conduits and volumetric lighting.<br />
              • <strong>Movie_009 Environment Reel:</strong> Real-time walkthrough featuring modular assets, trim sheets, and Lumen GI.
            </p>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              KEY TECHNICAL PROJECTS & EXPERIMENTS
            </h2>
            <div className="space-y-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l-2 border-white/15 pl-4 py-1 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-base font-mono">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 bg-white/5 text-amber-300/90 border border-white/10 w-fit">
                      {proj.role}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400">
                    Stack: {proj.techStack.join(" • ")}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="text-xs text-emerald-400/90 font-mono">
                    <strong>Result:</strong> {proj.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Competitions */}
          <div>
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              COMPETITIVE HACKATHONS & GAME JAMS ({HACKATHON_STATS.total} COMPLETED)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white">CMS College Hackathon</div>
                <div className="text-amber-400 text-[11px]">3rd Place (Out of 50+ Teams)</div>
                <div className="text-slate-400 text-[11px] mt-1">
                  Built real-time IoT Vulnerability & Threat Inspector using Python and Scapy.
                </div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white">SRCAS National Hackathon</div>
                <div className="text-cyan-400 text-[11px]">National Level Runner-Up</div>
                <div className="text-slate-400 text-[11px] mt-1">
                  Engineered systems anomaly detector competing against national engineering teams.
                </div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white">Retropunk 48-Hour Game Jam</div>
                <div className="text-emerald-400 text-[11px]">Deployed 3D Game Build</div>
                <div className="text-slate-400 text-[11px] mt-1">
                  Authored custom HLSL / ShaderLab post-processing shaders and character state machines.
                </div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white">Syntrix Internal Buildathons</div>
                <div className="text-purple-400 text-[11px]">Host & Technical Architect</div>
                <div className="text-slate-400 text-[11px] mt-1">
                  Led 48-hour build sprints for ~25 community engineers delivering working utilities.
                </div>
              </div>
            </div>
          </div>

          {/* Community Leadership */}
          <div>
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-2">
              COMMUNITY LEADERSHIP
            </h2>
            <div className="p-4 bg-white/5 border border-white/10 space-y-1 text-xs">
              <div className="font-bold text-white text-sm font-mono flex items-center justify-between">
                <span>{SYNTRIX_DATA.name} DEVELOPER COLLECTIVE (FOUNDED OUTSIDE COLLEGE)</span>
                <span className="text-amber-400">{SYNTRIX_DATA.memberCount}</span>
              </div>
              <p className="text-slate-400 font-mono">{SYNTRIX_DATA.founderRole} — {SYNTRIX_DATA.cadence}</p>
              <p className="text-slate-300 mt-1">
                {SYNTRIX_DATA.mission}
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-3">
              TECHNICAL PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-amber-400 font-bold">Environment Art & DCC:</span>
                <p className="text-slate-300">Blender 5.x, Substance Painter, InstaMAT, Unreal Engine 5, PBR Texturing, UV Optimization, Modular Kit Architecture.</p>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">Graphics & Low-Level:</span>
                <p className="text-slate-300">Modern OpenGL 4.6 Core, GLSL Shaders, C++, Vulkan API, GLFW, GLAD, GLM, VAO/VBO/EBO Memory Buffers.</p>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">Game Systems:</span>
                <p className="text-slate-300">Unreal Engine 5 C++, Blueprints, Movement State Machines, Enhanced Input, Gameplay Framework.</p>
              </div>
              <div>
                <span className="text-purple-400 font-bold">AI & Systems:</span>
                <p className="text-slate-300">Python 3, PyTorch, NumPy, Pandas, Scikit-Learn, Scapy, Raw Sockets, Linux (CachyOS/Arch), Git, CMake.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 bg-[#111726] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>VERIFIED ACCURACY: SAIRAM R // GENUINE DATA ONLY</span>
          <button
            onClick={() => setResumeModalOpen(false)}
            className="text-white hover:text-amber-400 underline cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
