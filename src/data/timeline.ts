export interface TimelineNode {
  id: string;
  tag: string;
  era: string;
  title: string;
  subtitle: string;
  description: string;
  keyMilestones: string[];
  techFocus: string[];
  status: "COMPLETED" | "CURRENT" | "EXPANDING" | "TRAJECTORY";
  badge: string;
}

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: "origin",
    tag: "ORIGIN",
    era: "FOUNDATIONS",
    title: "Computer Science & Systems Thinking",
    subtitle: "Pursuing B.E. Computer Science Engineering",
    description: "Immersed in core computer science disciplines: data structures, algorithmic complexity, memory management, operating system architectures, and procedural logic in C and C++.",
    keyMilestones: [
      "Built low-level systems prototypes and memory benchmarks.",
      "Cultivated deep comfort with Linux CLI, compiler toolchains, and POSIX environments.",
      "Developed foundational algorithm visualizers to illuminate abstract computational trees."
    ],
    techFocus: ["C", "C++", "Data Structures & Algorithms", "Linux", "Git"],
    status: "COMPLETED",
    badge: "FOUNDATIONAL PHASE"
  },
  {
    id: "expansion",
    tag: "EXPANSION",
    era: "SPEED & CRUCIBLE",
    title: "Game Development & 50+ Hackathons",
    subtitle: "Rapid Prototyping Under High Pressure",
    description: "Entered competitive hackathons and game jams, learning to deliver functioning interactive applications within 24 to 48 hours. Explored Unreal Engine, Unity, character movement physics, and real-time player input state machines.",
    keyMilestones: [
      "Completed 50+ collegiate and national hackathons.",
      "Shipped 3 game jam entries including 'Retropunk' with custom retro HLSL shaders.",
      "Placed 3rd at CMS College Hackathon and Runner-up at SRCAS National Hackathon."
    ],
    techFocus: ["Unreal Engine", "Blueprints", "C++ Gameplay", "HLSL / ShaderLab", "Rapid Prototyping"],
    status: "COMPLETED",
    badge: "THE CRUCIBLE"
  },
  {
    id: "current",
    tag: "CURRENT",
    era: "THE INTERSECTION",
    title: "Environment Art + Graphics Programming",
    subtitle: "Crafting Worlds & the Engines Behind Them",
    description: "Harmonizing AAA environment art workflows with raw graphics programming. Sculpting high-poly assets in Blender, authoring PBR materials in Substance Painter and InstaMAT, and dissecting the rendering pipeline in modern OpenGL and Vulkan.",
    keyMilestones: [
      "Produced cinematic real-time environment walkthrus: 'LifeSupport Room' and 'Movie_009'.",
      "Created 'LANTERN' hero prop and modular environment blockouts.",
      "Constructed raw C++ OpenGL 4.6 rendering engine with custom GLSL shaders and MVP matrices."
    ],
    techFocus: ["Blender 5.x", "Substance Painter", "InstaMAT", "Unreal Engine 5", "OpenGL 4.6", "GLSL", "Vulkan"],
    status: "CURRENT",
    badge: "ACTIVE FOCUS // ART ↔ CODE"
  },
  {
    id: "experiments",
    tag: "EXPERIMENTS",
    era: "BREADTH & DEFENSE",
    title: "AI/ML + IoT + Cybersecurity Systems",
    subtitle: "Systems Beyond Pure Graphics",
    description: "Investigated network protocol internals, deep packet inspection, IoT security vectors, and neural network training dynamics. Built defensive security tools and machine learning gradient visualization testbeds.",
    keyMilestones: [
      "Engineered IoT Vulnerability Analyzer for automated LAN threat audits.",
      "Conducted PyTorch experiments analyzing neural gradient flow and loss landscape minimization.",
      "Contributed to secure open-source tooling and privacy masking frameworks."
    ],
    techFocus: ["Python", "PyTorch", "Scapy", "Raw Sockets", "NumPy", "Scikit-Learn"],
    status: "EXPANDING",
    badge: "LAB EXPERIMENTS"
  },
  {
    id: "community",
    tag: "COMMUNITY",
    era: "COLLECTIVE IMPACT",
    title: "Syntrix Developer Collective",
    subtitle: "Independent Builder Community Founded Outside College",
    description: "Co-founded Syntrix outside college with close friends to unite passionate builders around systems, 3D graphics, and hackathons. Grew the collective to ~250 members with vibrant weekly technical voice sessions.",
    keyMilestones: [
      "Built an independent developer collective of ~250 technical builders outside college.",
      "Hosted consistent weekly voice meetups with 20+ active participants sharing screens.",
      "Mentored junior engineers and fielded cross-disciplinary squads for national hackathons."
    ],
    techFocus: ["Community Building", "Technical Mentorship", "Peer Code Reviews", "Voice Roundtables"],
    status: "CURRENT",
    badge: "LEADERSHIP & CULTURE"
  },
  {
    id: "next",
    tag: "NEXT",
    era: "FUTURE HORIZON",
    title: "Technical Environment Art & Graphics Engineering",
    subtitle: "AAA Studios & Real-Time Engine Innovation",
    description: "Aiming to join world-class game studios or real-time simulation labs as a Technical Environment Artist or Graphics Programmer. Bridging the gap between creative art directors and low-level rendering engineers.",
    keyMilestones: [
      "Publish advanced Vulkan rendering testbed with PBR deferred shading & raytracing.",
      "Develop complete playable UE5 environment showcase highlighting modular kit architecture.",
      "Deliver impactful contributions to high-performance real-time interactive worlds."
    ],
    techFocus: ["Technical Art Direction", "Vulkan Engine Dev", "UE5 Lumen/Nanite Workflows", "Shader Optimization"],
    status: "TRAJECTORY",
    badge: "THE HORIZON"
  }
];
