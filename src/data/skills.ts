export interface ToolkitItem {
  id: string;
  name: string;
  category: "DEVOPS_INFRA" | "AI_GPU" | "LANGUAGES" | "SYSTEMS" | "APP_DEV" | "GRAPHICS_GAMES";
  status: "USED_IN_PROJECTS" | "CURRENTLY_DEVELOPING";
  shortDescription: string;
  usedForOrFocus: string;
  evidenceNotes: string;
  relevantProjects: string[];
  levelBadge: string;
}

export const TOOLKIT_CATEGORIES = [
  { id: "ALL", label: "ALL ARSENAL", subtitle: "Full Technical Matrix" },
  { id: "DEVOPS_INFRA", label: "DEVOPS & INFRASTRUCTURE", subtitle: "Linux, Containers & Automation" },
  { id: "AI_GPU", label: "AI & GPU COMPUTING", subtitle: "Local LLMs, Tensors & CUDA" },
  { id: "LANGUAGES", label: "LANGUAGES", subtitle: "C++, Rust, Python, TS" },
  { id: "SYSTEMS", label: "SYSTEMS & TOOLCHAINS", subtitle: "Git, CMake, POSIX, Networks" },
  { id: "APP_DEV", label: "APPLICATION DEV", subtitle: "React, Next.js, Django, Postgres" },
  { id: "GRAPHICS_GAMES", label: "GRAPHICS & 3D (LONG-TERM)", subtitle: "Vulkan, OpenGL, Shaders, Blender" }
] as const;

export const TOOLKIT_DISTINCTION_STATEMENT =
  "The distinction matters: technologies already used in projects are not the same as technologies currently being learned. Honesty in engineering builds lasting trust.";

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  // --- DEVOPS & INFRASTRUCTURE ---
  {
    id: "linux-systems",
    name: "Linux (Kernel & CLI)",
    category: "DEVOPS_INFRA",
    status: "USED_IN_PROJECTS",
    shortDescription: "Daily driver operating system, POSIX environments, shell scripting, process control.",
    usedForOrFocus: "Configuring development environments, managing system daemons, debugging network sockets, and process signaling.",
    evidenceNotes: "Arch Linux daily driver with extensive shell scripting, POSIX system calls, and automated task execution.",
    relevantProjects: ["REMoErminal", "IoT Vulnerability Analyzer", "System Workstation"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "docker-containers",
    name: "Docker Fundamentals",
    category: "DEVOPS_INFRA",
    status: "USED_IN_PROJECTS",
    shortDescription: "Containerization basics, multi-stage builds, layer caching, Dockerfile authoring.",
    usedForOrFocus: "Isolating runtime dependencies, containerizing web/database applications, and reproducible test environments.",
    evidenceNotes: "Authored multi-container Docker compose setups for local PostgreSQL, Next.js, and Python backend services.",
    relevantProjects: ["Web Services", "Dev Environment Setup"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "cicd-pipelines",
    name: "CI/CD & Automated Testing",
    category: "DEVOPS_INFRA",
    status: "CURRENTLY_DEVELOPING",
    shortDescription: "Automated build, test, and release validation pipelines via GitHub Actions.",
    usedForOrFocus: "Constructing matrix builds for C++, Rust, and Node.js with automated test gates and artifact uploads.",
    evidenceNotes: "Actively engineering automated test and lint pipelines with zero-downtime deployment triggers.",
    relevantProjects: ["Infrastructure Milestone 1", "REMoWser CI"],
    levelBadge: "CURRENTLY DEVELOPING"
  },
  {
    id: "kubernetes-cloud",
    name: "Kubernetes & Cloud Infrastructure",
    category: "DEVOPS_INFRA",
    status: "CURRENTLY_DEVELOPING",
    shortDescription: "Pod orchestration, service definitions, ingress, and Infrastructure as Code (IaC).",
    usedForOrFocus: "Learning cloud deployment topologies, declarative manifests, service discovery, and cluster scaling.",
    evidenceNotes: "Building local k3s / minikube test environments to master pods, deployments, configmaps, and persistent volumes.",
    relevantProjects: ["Infrastructure Milestone 1", "Cloud Trajectory"],
    levelBadge: "CURRENTLY DEVELOPING"
  },
  {
    id: "monitoring-observability",
    name: "Monitoring & Deployment Reliability",
    category: "DEVOPS_INFRA",
    status: "CURRENTLY_DEVELOPING",
    shortDescription: "Telemetry collection, structured log aggregation, health checks, and failure recovery.",
    usedForOrFocus: "Monitoring service availability, error rates, and hardware memory consumption under load.",
    evidenceNotes: "Studying Prometheus metric collection, Grafana dashboards, and automated rollback triggers.",
    relevantProjects: ["Infrastructure Milestone 1"],
    levelBadge: "CURRENTLY DEVELOPING"
  },

  // --- AI & GPU COMPUTING ---
  {
    id: "local-llm-ollama",
    name: "Local LLMs & Ollama",
    category: "AI_GPU",
    status: "USED_IN_PROJECTS",
    shortDescription: "Local model hosting, streaming token evaluation, and structured JSON function calling.",
    usedForOrFocus: "Powering autonomous desktop browser agents with local quantized models without external API latency.",
    evidenceNotes: "Integrated Ollama directly into Electron via asynchronous IPC channels in REMoWser with live tool logging.",
    relevantProjects: ["REMoWser — Local AI Browser"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "playwright-automation",
    name: "Playwright Browser Automation",
    category: "AI_GPU",
    status: "USED_IN_PROJECTS",
    shortDescription: "Headless browser control, DOM inspection, event synthesis, and screenshot capture.",
    usedForOrFocus: "Executing multi-step agent actions: form interaction, selector extraction, and page navigation.",
    evidenceNotes: "Programmed resilient browser interaction drivers with dynamic waiting, retries, and failure recovery.",
    relevantProjects: ["REMoWser — Local AI Browser"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "pytorch-cuda-perf",
    name: "PyTorch & CUDA Fundamentals",
    category: "AI_GPU",
    status: "CURRENTLY_DEVELOPING",
    shortDescription: "Tensor memory allocation, GPU compute kernels, and latency/bandwidth measurement.",
    usedForOrFocus: "Measuring how neural operations execute on physical CPU vs GPU hardware and profiling memory bottlenecks.",
    evidenceNotes: "Active hands-on exploration of PyTorch tensor operations, CUDA execution streams, and FP32/FP16 performance gaps.",
    relevantProjects: ["Hardware Benchmark Milestone", "Intelligence Lab"],
    levelBadge: "CURRENTLY DEVELOPING"
  },

  // --- LANGUAGES ---
  {
    id: "cpp-lang",
    name: "C++ (C++20)",
    category: "LANGUAGES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Modern C++ with concepts, RAII, memory management, and high-performance algorithms.",
    usedForOrFocus: "Authoring native desktop terminal applications, OpenGL graphics engines, and decoupled game state systems.",
    evidenceNotes: "Wrote REMoErminal from scratch with C++20, and built the OpenGL 4.6 rendering lab with zero memory leaks.",
    relevantProjects: ["REMoErminal", "OpenGL Rendering Lab", "Retropunk Game Jam"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "rust-lang",
    name: "Rust",
    category: "LANGUAGES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Memory safety without garbage collection, ownership semantics, and low-level GPU interfacing.",
    usedForOrFocus: "Engineering a native 3D texture painting application architected directly on top of the Vulkan API.",
    evidenceNotes: "Utilized Rust's type system and cargo toolchain to architect REMoAINTER with modular Vulkan pipeline passes.",
    relevantProjects: ["REMoAINTER — Texture Painting"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "python-lang",
    name: "Python",
    category: "LANGUAGES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Scripting, system automation, network packet analysis, and machine learning pipelines.",
    usedForOrFocus: "Rapid network protocol dissection, Scapy socket sniffing, CVE parsing, and AI experimentation.",
    evidenceNotes: "Constructed the award-winning IoT network vulnerability scanner and tensor analysis testbeds in Python.",
    relevantProjects: ["IoT Vulnerability Analyzer", "Intelligence Lab"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "ts-js-lang",
    name: "JavaScript / TypeScript",
    category: "LANGUAGES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Strict typing, asynchronous runtimes, browser environments, and modern web application development.",
    usedForOrFocus: "Building responsive web interfaces, Next.js server components, and Electron desktop agent controllers.",
    evidenceNotes: "TypeScript codebase powering REMoWser, this tactical Next.js portfolio, and full-stack web applications.",
    relevantProjects: ["REMoWser", "Digital Portfolio"],
    levelBadge: "USED IN PROJECTS"
  },

  // --- SYSTEMS & TOOLCHAINS ---
  {
    id: "git-workflows",
    name: "Git & Version Control",
    category: "SYSTEMS",
    status: "USED_IN_PROJECTS",
    shortDescription: "Branching strategies, atomic commits, submodule management, and release tagging.",
    usedForOrFocus: "Maintaining disciplined repository histories, reproducible releases, and collaboration workflows.",
    evidenceNotes: "Maintains clean Git workflows across 20+ active GitHub repositories with verified commit histories.",
    relevantProjects: ["All Public Repositories"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "cmake-build",
    name: "CMake & Build Systems",
    category: "SYSTEMS",
    status: "USED_IN_PROJECTS",
    shortDescription: "Cross-platform C++ build configuration, target management, and dependency integration.",
    usedForOrFocus: "Configuring clean compile targets, strict compiler warnings, and linking SDL3/OpenGL libraries.",
    evidenceNotes: "Structured multi-target CMakeLists.txt with debug sanitizers and static analysis flags in REMoErminal.",
    relevantProjects: ["REMoErminal", "OpenGL Rendering Lab"],
    levelBadge: "USED IN PROJECTS"
  },

  // --- APPLICATION DEVELOPMENT ---
  {
    id: "react-nextjs",
    name: "React & Next.js",
    category: "APP_DEV",
    status: "USED_IN_PROJECTS",
    shortDescription: "Component composition, Server Side Rendering, hooks, and responsive user interfaces.",
    usedForOrFocus: "Designing interactive web interfaces, telemetry dashboards, and client-side agent visualizers.",
    evidenceNotes: "Engineered this real-time portfolio with Next.js Turbopack, Tailwind CSS, and WebGL Three.js canvas.",
    relevantProjects: ["Digital Portfolio", "REMoWser UI"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "django-postgres",
    name: "Django & PostgreSQL",
    category: "APP_DEV",
    status: "USED_IN_PROJECTS",
    shortDescription: "Relational database schema modeling, ACID transactions, and secure REST APIs.",
    usedForOrFocus: "Building backend services with structured data persistence and database migrations.",
    evidenceNotes: "Implemented relational databases with foreign-key constraints, index tuning, and ORM abstractions.",
    relevantProjects: ["Full-Stack Prototypes", "IoT Backend"],
    levelBadge: "USED IN PROJECTS"
  },

  // --- GRAPHICS & 3D (LONG-TERM) ---
  {
    id: "vulkan-api",
    name: "Vulkan API Exploration",
    category: "GRAPHICS_GAMES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Explicit modern GPU programming: command buffers, memory staging, pipelines, and render passes.",
    usedForOrFocus: "Laying the low-level rendering foundation for REMoAINTER in Rust.",
    evidenceNotes: "Hands-on experience with Vulkan device initialization, swapchain creation, and pipeline barrier layouts.",
    relevantProjects: ["REMoAINTER — Texture Painting"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "opengl-glsl",
    name: "OpenGL 4.6 & Shaders (GLSL)",
    category: "GRAPHICS_GAMES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Hardware pipeline abstraction, VAO/VBO/EBO buffers, and Blinn-Phong/PBR shader mathematics.",
    usedForOrFocus: "Building raw C++ graphics testbeds to master GPU draw calls and matrix transformations.",
    evidenceNotes: "Developed real-time C++ rendering testbed running at 240+ FPS with live GLSL hot reloading.",
    relevantProjects: ["OpenGL Lab"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "sdl3-gui",
    name: "SDL3 Framework",
    category: "GRAPHICS_GAMES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Next-gen cross-platform hardware windowing, input events, and hardware-accelerated 2D renderers.",
    usedForOrFocus: "Window creation, keystroke event loops, and text glyph rasterization in native applications.",
    evidenceNotes: "Integrated SDL3 into C++20 for REMoErminal, achieving instant input response and clean window management.",
    relevantProjects: ["REMoErminal"],
    levelBadge: "USED IN PROJECTS"
  },
  {
    id: "blender-substance",
    name: "Blender & 3D Asset Creation",
    category: "GRAPHICS_GAMES",
    status: "USED_IN_PROJECTS",
    shortDescription: "Sub-D modeling, UV unwrapping, high-to-low cage baking, and PBR texture creation.",
    usedForOrFocus: "Crafting AAA-ready game assets, modular environment kits, and testing material pipelines.",
    evidenceNotes: "Sculpted and baked the LANTERN hero asset with 4K PBR textures and verified 10.24 px/cm texel density.",
    relevantProjects: ["LANTERN Hero Asset", "Environment Reels"],
    levelBadge: "USED IN PROJECTS"
  }
];
