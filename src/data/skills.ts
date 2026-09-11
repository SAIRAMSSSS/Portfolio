export interface TechItem {
  id: string;
  name: string;
  category: "ENGINEERING" | "GRAPHICS" | "GAME_DEV" | "ENVIRONMENT_ART" | "AI" | "SYSTEMS_OTHER";
  shortDescription: string;
  usedFor: string;
  depthNotes: string;
  relevantProjects: string[];
  relatedTech: string[];
  levelLabel?: string; // e.g. "Primary", "Active Research", "Production"
}

export const TECH_CATEGORIES = [
  { id: "ENVIRONMENT_ART", label: "ENVIRONMENT ART", subtitle: "Visual Worlds & PBR" },
  { id: "GRAPHICS", label: "GRAPHICS PROGRAMMING", subtitle: "Pipelines, Shaders & Math" },
  { id: "GAME_DEV", label: "GAME DEVELOPMENT", subtitle: "Systems, Engines & Gameplay" },
  { id: "ENGINEERING", label: "CORE ENGINEERING", subtitle: "Languages, Toolchains & OS" },
  { id: "AI", label: "INTELLIGENCE / ML", subtitle: "Tensors, Models & Pipelines" },
  { id: "SYSTEMS_OTHER", label: "SYSTEMS & SECURITY", subtitle: "IoT, Protocols & Community" }
] as const;

export const TECH_ITEMS: TechItem[] = [
  // ENVIRONMENT ART
  {
    id: "blender",
    name: "Blender 5.x",
    category: "ENVIRONMENT_ART",
    shortDescription: "Subdivision surface modeling, blockout prototyping, retopology, UV unwrapping.",
    usedFor: "Crafting modular environment kits, hero props, LOD generation, and custom asset blockouts.",
    depthNotes: "Deep command of ZenUV, hard-surface bevel modifiers, weighted normals, and non-destructive modifier stacks.",
    relevantProjects: ["LANTERN Hero Asset", "Modular Dungeon Kit", "Organic & Hard Surface Blockouts"],
    relatedTech: ["Substance Painter", "Unreal Engine 5", "InstaMAT"],
    levelLabel: "Primary Creative Tool"
  },
  {
    id: "substance-painter",
    name: "Substance 3D Painter",
    category: "ENVIRONMENT_ART",
    shortDescription: "PBR texture authoring, high-poly cage baking, procedural smart materials.",
    usedFor: "Baking ambient occlusion, curvature, and normal maps; authoring albedo, roughness, metallic, and micro-wear masks.",
    depthNotes: "Mastery of physically plausible roughness values, micro-scratches, edge wear generators, and multi-layer channel anchors.",
    relevantProjects: ["LANTERN Hero Asset", "Hard-Surface Props"],
    relatedTech: ["Blender", "InstaMAT", "Unreal Engine 5"],
    levelLabel: "Production Workflow"
  },
  {
    id: "instamat",
    name: "InstaMAT",
    category: "ENVIRONMENT_ART",
    shortDescription: "Next-gen node-based procedural material graph generation and asset processing.",
    usedFor: "Synthesizing procedural tileable materials, automations, and material graphs for game environments.",
    depthNotes: "Utilized for procedural texturing pipelines, seamless material graphs, and rapid variation synthesis.",
    relevantProjects: ["LANTERN Hero Asset", "Surface Variations"],
    relatedTech: ["Substance Painter", "Blender", "PBR Workflow"],
    levelLabel: "Active Tool"
  },
  {
    id: "unreal-art",
    name: "Unreal Engine 5 (Art/Lighting)",
    category: "ENVIRONMENT_ART",
    shortDescription: "Lumen dynamic global illumination, Nanite geometry, master shader graphs.",
    usedFor: "World composition, material instancing, level lighting, atmospheric post-processing, and cinematic staging.",
    depthNotes: "Configuring master material graphs with PBR energy conservation, detail normals, and vertex color blending.",
    relevantProjects: ["LANTERN Hero Asset", "Environment Staging"],
    relatedTech: ["Blender", "Substance Painter", "PBR Workflow"],
    levelLabel: "Primary Engine"
  },
  {
    id: "pbr-materials",
    name: "PBR Materials & Lighting",
    category: "ENVIRONMENT_ART",
    shortDescription: "Physically Based Rendering theory: conservation of energy, microfacet Cook-Torrance.",
    usedFor: "Ensuring material values (Roughness, Metallic, Specular, BaseColor) react accurately across dynamic lighting setups.",
    depthNotes: "Trained in dielectric vs metallic reflectance standards, sRGB vs linear color spaces, and Fresnel equations.",
    relevantProjects: ["LANTERN Hero Asset", "OpenGL Lab"],
    relatedTech: ["Unreal Engine 5", "Blender", "Shaders"],
    levelLabel: "Core Standard"
  },
  {
    id: "modular-environments",
    name: "Modular Environments",
    category: "ENVIRONMENT_ART",
    shortDescription: "Grid-snapped architecture, trim sheets, tileable textures, and optimized draw-call budgets.",
    usedFor: "Building expansive game environments from reusable structural kits with zero visible seam artifacts.",
    depthNotes: "Designing on strict 50cm/100cm grid snapping metrics with shared UV trim sheets to maximize GPU batching.",
    relevantProjects: ["Modular Dungeon Prototype", "Environment Blockouts"],
    relatedTech: ["Blender", "Unreal Engine 5", "PBR Materials"],
    levelLabel: "Design Methodology"
  },

  // GRAPHICS PROGRAMMING
  {
    id: "opengl",
    name: "OpenGL 4.6 Core",
    category: "GRAPHICS",
    shortDescription: "Modern programmable graphics pipeline, buffer layouts, state machines, draw calls.",
    usedFor: "Constructing raw rendering testbeds, custom mesh renderers, and frame-rate benchmarking in C++.",
    depthNotes: "Hands-on experience with VAO, VBO, EBO stride layouts, uniform buffers, framebuffer render targets, and debug callbacks.",
    relevantProjects: ["OpenGL Lab", "Real-Time Pipeline Inspector"],
    relatedTech: ["C++", "GLSL", "GLFW", "GLAD", "Vulkan"],
    levelLabel: "Deep Implementation"
  },
  {
    id: "vulkan",
    name: "Vulkan API",
    category: "GRAPHICS",
    shortDescription: "Explicit, low-overhead GPU control, command buffers, pipeline barriers, swapchains.",
    usedFor: "Exploring modern explicit graphics architecture: physical devices, queues, memory allocation, and render passes.",
    depthNotes: "Studying explicit synchronization (semaphores, fences), memory heaps, and SPIR-V compiled shader pipelines.",
    relevantProjects: ["Vulkan Pipeline Experiments", "Graphics Progression"],
    relatedTech: ["C++", "OpenGL", "SPIR-V", "Shaders"],
    levelLabel: "Active Exploration"
  },
  {
    id: "glsl-shaders",
    name: "GLSL / Shaders",
    category: "GRAPHICS",
    shortDescription: "Programmable vertex, fragment, and compute shaders; vector/matrix mathematics.",
    usedFor: "Implementing Blinn-Phong lighting, raymarching signed distance fields, CRT scanlines, and procedural textures.",
    depthNotes: "Fluent in coordinate space transforms (Local → World → View → Clip), normal calculation, and procedural noise.",
    relevantProjects: ["OpenGL Lab", "Retropunk CRT Shaders", "Interactive Shader Lab"],
    relatedTech: ["OpenGL", "C++", "HLSL"],
    levelLabel: "High Proficiency"
  },
  {
    id: "glfw-glad",
    name: "GLFW & GLAD",
    category: "GRAPHICS",
    shortDescription: "Context creation, windowing, user input polling, and OpenGL function pointer loading.",
    usedFor: "Bootstrapping clean C++ graphics applications without bulky engine baggage.",
    depthNotes: "Handling monitor refresh rates, swap intervals (VSync), aspect ratio viewport resizing, and raw mouse delta.",
    relevantProjects: ["OpenGL Lab"],
    relatedTech: ["OpenGL", "C++", "GLM"],
    levelLabel: "Standard Stack"
  },

  // GAME DEV
  {
    id: "ue5-systems",
    name: "Unreal Engine 5 (Systems)",
    category: "GAME_DEV",
    shortDescription: "C++ Actor lifecycle, Enhanced Input, Gameplay Framework, Profiling.",
    usedFor: "Developing responsive character controllers, state machines, interaction interfaces, and game jam prototypes.",
    depthNotes: "Writing clean C++ gameplay code, exposing parameterized UPROPERTY / UFUNCTION hooks to Blueprints.",
    relevantProjects: ["Game Systems Architecture", "Descent Traversal", "3 Game Jams"],
    relatedTech: ["C++", "Blueprints", "Blender"],
    levelLabel: "Primary Engine"
  },
  {
    id: "blueprints",
    name: "Unreal Blueprints",
    category: "GAME_DEV",
    shortDescription: "Visual scripting system for rapid UI binding, gameplay event dispatching, and prototyping.",
    usedFor: "Rapid iteration during game jams, binding audio-visual feedback, and creating artist-friendly parameter exposes.",
    depthNotes: "Strict adherence to avoiding heavy tick logic in Blueprints; keeping math and state logic in native C++.",
    relevantProjects: ["Game Systems Architecture", "Game Jam Prototypes"],
    relatedTech: ["Unreal Engine 5", "C++"],
    levelLabel: "Production Workflow"
  },
  {
    id: "game-systems",
    name: "Gameplay Systems & State Machines",
    category: "GAME_DEV",
    shortDescription: "Decoupled architecture: state machines, component patterns, observer pattern, inventory.",
    usedFor: "Preventing spaghetti game code; maintaining responsive movement and deterministic state handling.",
    depthNotes: "Engineered character movement states (idle, sprint, wall-run, airborne) with clean enter/exit transitions.",
    relevantProjects: ["Game Systems Architecture", "Retropunk Game Jam"],
    relatedTech: ["C++", "Unreal Engine 5"],
    levelLabel: "Architecture Focus"
  },

  // CORE ENGINEERING
  {
    id: "cpp",
    name: "C++ (17 / 20)",
    category: "ENGINEERING",
    shortDescription: "Low-level systems language: RAII, pointer semantics, memory management, STL algorithms.",
    usedFor: "Core graphics engine development, game systems architecture, algorithmic problem solving.",
    depthNotes: "Hands-on experience with memory layout, stack vs heap allocation, move semantics, custom struct stride, and templates.",
    relevantProjects: ["OpenGL Lab", "Unreal Engine C++ Framework", "Task Schedulers"],
    relatedTech: ["C", "CMake", "OpenGL", "Linux"],
    levelLabel: "Primary Language"
  },
  {
    id: "c-lang",
    name: "C",
    category: "ENGINEERING",
    shortDescription: "Foundational procedural programming, raw memory, pointers, bitwise arithmetic.",
    usedFor: "Understanding operating systems concepts, memory structures, and hardware interfaces.",
    depthNotes: "Deep understanding of pointer arithmetic, dynamic memory allocation, and system-level calls.",
    relevantProjects: ["Operating Systems Labs", "Systems Prototyping"],
    relatedTech: ["C++", "Linux"],
    levelLabel: "Foundational"
  },
  {
    id: "python",
    name: "Python 3",
    category: "ENGINEERING",
    shortDescription: "Rapid prototyping, automation, machine learning pipelines, socket networking.",
    usedFor: "Building the IoT Vulnerability Analyzer, PyTorch experiments, Blender pipeline scripts, and data processing.",
    depthNotes: "Fluent in asynchronous I/O, socket programming, Scapy packet dissection, and NumPy vectorization.",
    relevantProjects: ["IoT Vulnerability Analyzer", "Intelligence Lab", "Blender CLI Automation"],
    relatedTech: ["PyTorch", "NumPy", "Scapy"],
    levelLabel: "Daily Tool"
  },
  {
    id: "cmake",
    name: "CMake & Build Systems",
    category: "ENGINEERING",
    shortDescription: "Cross-platform build configuration, dependency linking, compilation targets.",
    usedFor: "Configuring multi-target C++ projects linking GLFW, GLAD, GLM, and external libraries.",
    depthNotes: "Writing modular CMakeLists.txt with target_include_directories and target_link_libraries best practices.",
    relevantProjects: ["OpenGL Lab", "C++ Testbeds"],
    relatedTech: ["C++", "Git", "Linux"],
    levelLabel: "Engineering Standard"
  },
  {
    id: "linux",
    name: "Linux (CachyOS / Arch)",
    category: "ENGINEERING",
    shortDescription: "Unix environment, bash scripting, process management, POSIX tooling, performance tuning.",
    usedFor: "Primary operating system for daily development, compiling C++, running system utilities, and CLI workflows.",
    depthNotes: "Comfortable with shell scripting, systemd services, terminal multiplexers, package managers, and GCC/Clang toolchains.",
    relevantProjects: ["Daily Development", "IoT Scanner Daemons"],
    relatedTech: ["Git", "Bash", "C++"],
    levelLabel: "Primary OS"
  },
  {
    id: "git",
    name: "Git & Version Control",
    category: "ENGINEERING",
    shortDescription: "Distributed version control, branching strategies, collaborative repository management.",
    usedFor: "Version tracking across 30+ GitHub repositories, hackathon team collaboration, and asset revisioning.",
    depthNotes: "Experienced with interactive rebasing, merge conflict resolution, LFS asset tracking, and release tags.",
    relevantProjects: ["All 30+ Public Repositories", "Syntrix Community Collaboration"],
    relatedTech: ["GitHub", "Linux"],
    levelLabel: "Essential Tool"
  },

  // AI / ML
  {
    id: "pytorch",
    name: "PyTorch",
    category: "AI",
    shortDescription: "Deep learning framework: autograd, dynamic computational graphs, tensor transformations.",
    usedFor: "Designing neural networks, loss tracking, forward/backward pass dynamics, and feature representations.",
    depthNotes: "Constructing custom nn.Module classes, loss minimization, optimizer tuning, and gradient inspection.",
    relevantProjects: ["Intelligence Lab", "Neural Modeling Experiments"],
    relatedTech: ["Python", "NumPy", "Scikit-Learn"],
    levelLabel: "Lab Research"
  },
  {
    id: "numpy-pandas",
    name: "NumPy & Pandas",
    category: "AI",
    shortDescription: "Vectorized array calculations, matrix transformations, tabular data structuring.",
    usedFor: "Data ingestion, statistical preprocessing, matrix math, and telemetry analysis.",
    depthNotes: "Broadcasting rules, vectorized slicing, memory-contiguous arrays, and efficient dataframe aggregation.",
    relevantProjects: ["Intelligence Lab", "Hackathon Data Pipelines"],
    relatedTech: ["Python", "PyTorch"],
    levelLabel: "Core Math & Data"
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "AI",
    shortDescription: "Classical machine learning: classifiers, regressions, clustering, evaluation metrics.",
    usedFor: "Benchmarking baseline models, feature scaling, train/test validation splits, and ROC/F1 scoring.",
    depthNotes: "Hands-on experience with Decision Trees, Random Forests, SVMs, and PCA dimensionality reduction.",
    relevantProjects: ["Anomaly Detection Experiments", "Hackathon Prototypes"],
    relatedTech: ["Python", "NumPy"],
    levelLabel: "Practical Applied ML"
  },

  // SYSTEMS & OTHER
  {
    id: "iot-security",
    name: "IoT & Network Security",
    category: "SYSTEMS_OTHER",
    shortDescription: "Packet analysis, protocol dissection (MQTT, CoAP, UPnP), CVE audits, raw sockets.",
    usedFor: "Architecting award-winning security analyzers and penetration testing tools during national hackathons.",
    depthNotes: "Inspecting TCP/UDP packet frames, identifying cleartext broadcast vulnerabilities, and hardening LAN nodes.",
    relevantProjects: ["IoT Vulnerability Analyzer", "WifiSafe", "Cyber-Cognito"],
    relatedTech: ["Python", "Scapy", "Linux"],
    levelLabel: "Hackathon Winning Track"
  },
  {
    id: "community-building",
    name: "Community Leadership (Syntrix)",
    category: "SYSTEMS_OTHER",
    shortDescription: "Founder of Syntrix developer community (~250 members, 20+ weekly voice attendees).",
    usedFor: "Organizing weekly technical voice meetups, peer code reviews, hackathon team mentoring, and tech roundtables.",
    depthNotes: "Fostering an engineering culture prioritizing active building, live screen-shares, and real-world project delivery.",
    relevantProjects: ["Syntrix Community", "Buildathons"],
    relatedTech: ["Git", "Open Source", "Hackathons"],
    levelLabel: "Founder & Community Lead"
  }
];
