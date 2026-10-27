export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "AI_SYSTEMS" | "GRAPHICS_GPU" | "SYSTEMS_CORE" | "DEVOPS_SEC" | "ART_3D";
  headline: boolean;
  role: string;
  techStack: string[];
  summary: string;
  focusAreas: string[];
  nextPriorities: string[];
  reproductionCommand?: string;
  problem: string;
  idea: string;
  process: string[];
  technicalChallenges: string[];
  whatWasLearned: string[];
  result: string;
  visuals: {
    hero: string;
    caption: string;
    badge: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  interactiveLabId?: string;
}

export const SELECTED_PROJECT_DISCLAIMER =
  "These projects are active engineering work, not claims of production readiness. Feature completeness, compatibility, and performance should be judged from the source code, reproducible instructions, and available demonstrations.";

export const PROJECTS: ProjectItem[] = [
  // 001: REMoWser — Local AI Browser Automation (HEADLINE 1)
  {
    id: "remowser-ai-browser",
    number: "001",
    title: "REMoWser — Local AI Browser Automation",
    subtitle: "Local LLM Agent Interaction & Multi-Step Web Workflows",
    category: "AI_SYSTEMS",
    headline: true,
    role: "Lead Systems & AI Agent Engineer",
    techStack: ["Electron", "React", "TypeScript", "Playwright", "Ollama", "Local LLM"],
    summary:
      "An experimental browser automation project exploring how local language models can interact with web pages and assist with multi-step workflows.",
    focusAreas: [
      "Explore browser automation and local-model integration.",
      "Focus areas: reliable execution, failure handling, and transparent agent actions.",
      "Streaming local LLM tool calling across IPC channels without freezing the renderer process."
    ],
    nextPriorities: [
      "Reproducible setup with deterministic local Ollama model dependencies.",
      "Automated Playwright integration tests and end-to-end task validation.",
      "Documented end-to-end demonstrations with action trajectory logs."
    ],
    reproductionCommand:
      "git clone https://github.com/SAIRAMSSSS/REMoWser.git && cd REMoWser && npm install",
    problem:
      "Cloud-based AI agents suffer from latency, telemetry privacy leaks, and opaque failure states during complex DOM navigation. Local models need deterministic tool interfaces to interact safely with web browsers.",
    idea:
      "Design an Electron desktop container pairing Playwright's headless browser automation with a local Ollama model instance, logging every agent intention, DOM selector lookup, and retry action transparently to the user.",
    process: [
      "Engineered decoupled IPC bridge connecting Electron main process with React UI and Playwright runtime.",
      "Integrated Ollama HTTP API with structured JSON function-calling schema for browser actions (click, fill, scroll, evaluate).",
      "Built resilient error-boundary interceptors for dynamic SPAs, DOM mutation timeouts, and anti-bot obstacles.",
      "Created a live telemetry overlay showing token latency, active DOM node highlights, and plan execution trees."
    ],
    technicalChallenges: [
      "Handling asynchronous DOM mutation timing without race conditions between Ollama inference passes.",
      "Preventing Electron memory leaks during extended browser automation sessions with multiple context tabs."
    ],
    whatWasLearned: [
      "The engineering reality of local LLM agent loops: deterministic schemas beat ambiguous natural language prompts.",
      "Techniques for IPC throttling and isolated Electron security sandboxing with contextBridge.",
      "How to design automated agent recovery routines when browser state diverges from expected plan."
    ],
    result:
      "Functional experimental desktop agent executing multi-step browser tasks locally with zero external API fees and transparent step-by-step audit logs.",
    visuals: {
      hero: "/images/projects/remowser_hero.jpg",
      caption: "Electron Desktop Interface · Ollama Token Stream · Playwright DOM Controller",
      badge: "ACTIVE EXPERIMENT // LOCAL AI"
    },
    metrics: [
      { label: "Model Runtime", value: "Local Ollama" },
      { label: "Automation Driver", value: "Playwright" },
      { label: "Target Host", value: "Electron Desktop" },
      { label: "API Cost", value: "$0.00 / Local" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS/REMoWser"
  },

  // 002: REMoAINTER — GPU-Oriented Texture Painting (HEADLINE 2)
  {
    id: "remainter-gpu-texture",
    number: "002",
    title: "REMoAINTER — GPU-Oriented Texture Painting",
    subtitle: "Native Rust & Vulkan 3D Asset-Texturing Engine",
    category: "GRAPHICS_GPU",
    headline: true,
    role: "Graphics Programmer & Rust Engineer",
    techStack: ["Rust", "Vulkan", "Ash / Vulkano", "3D Graphics", "PBR Shading", "GLSL"],
    summary:
      "An ambitious experiment in building a 3D texturing application, exploring rendering architecture, material workflows, and GPU-driven graphics.",
    focusAreas: [
      "Investigates a native Rust and Vulkan application architecture.",
      "Focuses on the foundations of a practical 3D asset-texturing workflow.",
      "Low-overhead GPU command buffer recording, staging memory allocation, and texture mip generation."
    ],
    nextPriorities: [
      "Reproducible builds with automated cross-platform Vulkan SDK verification.",
      "Verified feature coverage across brush projection, layer blending, and PBR channel packing.",
      "End-to-end asset validation testing against Blender and Unreal Engine 5 import pipelines."
    ],
    reproductionCommand:
      "git clone https://github.com/SAIRAMSSSS/REMoAINTER.git && cd REMoAINTER && cargo build --release",
    problem:
      "Commercial texture painting tools (like Substance Painter) are heavyweight proprietary silos. Building an independent 3D texturing app requires mastering Vulkan render passes, memory synchronization barriers, and real-time brush projection.",
    idea:
      "Build a native Rust application harnessing Vulkan's explicit memory management to project brush stamps directly onto 3D mesh surface UV coordinates while rendering interactive Cook-Torrance PBR materials.",
    process: [
      "Structured a modular Vulkan renderer in Rust utilizing explicit device queues, swapchains, and render passes.",
      "Engineered vertex attribute layouts supporting position, normal, tangent, and UV coordinate buffers.",
      "Implemented double-buffered render targets for non-destructive layer compositing and dynamic brush rasterization.",
      "Configured GPU compute and fragment shaders for real-time metallic/roughness PBR lighting and normal map preview."
    ],
    technicalChallenges: [
      "Orchestrating Vulkan pipeline execution barriers and image memory layout transitions without GPU validation layer errors.",
      "Implementing 3D Euclidean surface projection algorithms without UV seam bleeding or distortion at triangle borders."
    ],
    whatWasLearned: [
      "Vulkan's explicit architecture: pipeline layouts, descriptor sets, command pools, and semaphore synchronization.",
      "Rust's ownership and borrow checker guarantees when handling unsafe raw GPU pointer allocations.",
      "The mathematical nuances of PBR texture packing (ORM channels) and MikkTSpace tangent integrity."
    ],
    result:
      "A fast, native Rust & Vulkan prototype rendering 3D meshes with interactive real-time material preview and brush application.",
    visuals: {
      hero: "/images/projects/remainter_hero.jpg",
      caption: "Vulkan Pipeline State Architecture & 3D Interactive Texture Surface",
      badge: "RUST // VULKAN ARCHITECTURE"
    },
    metrics: [
      { label: "Language", value: "Rust (Native)" },
      { label: "Graphics API", value: "Vulkan" },
      { label: "Rendering Mode", value: "PBR Cook-Torrance" },
      { label: "Target Build", value: "Zero Warnings" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS/REMoAINTER"
  },

  // 003: REMoErminal — Native Terminal Experiment (HEADLINE 3)
  {
    id: "remoerminal-native-terminal",
    number: "003",
    title: "REMoErminal — Native Terminal Experiment",
    subtitle: "High-Performance Native Desktop Terminal in Modern C++",
    category: "SYSTEMS_CORE",
    headline: true,
    role: "Systems Programmer",
    techStack: ["C++20", "SDL3", "CMake", "POSIX / PTY", "Process Control", "Linux"],
    summary:
      "A native desktop terminal project exploring command execution, terminal output, and a graphical interface.",
    focusAreas: [
      "Focuses on native application development and system interaction.",
      "Engineering priorities: clean builds, robust process handling, error reporting, and automated tests.",
      "Low-latency pseudo-terminal (PTY) master-slave communication and ANSI escape sequence parsing."
    ],
    nextPriorities: [
      "Clean builds across GCC/Clang with strict CMake configuration and sanitizer support (ASan/UBSan).",
      "Robust process handling for child process forks, signal traps (SIGINT, SIGWINCH), and graceful exits.",
      "Automated integration tests validating terminal emulations and process stream fidelity."
    ],
    reproductionCommand:
      "git clone https://github.com/SAIRAMSSSS/REMoErminal.git && cd REMoErminal && cmake -B build && cmake --build build",
    problem:
      "Modern terminal emulators often incur high memory footprints and frame latency from bloated web-wrapper stacks. Understanding how terminal subsystems work requires native systems programming directly against the OS kernel.",
    idea:
      "Construct a lightweight native terminal from first principles using C++20 and SDL3: spawning child shell sessions through POSIX pseudo-terminal (PTY) pairs and rendering text glyphs with hardware acceleration.",
    process: [
      "Configured modern CMake build system with strict compiler warnings (-Wall -Wextra -Werror) and debug sanitizers.",
      "Implemented Unix pseudo-terminal allocation (`posix_openpt`, `grantpt`, `unlockpt`) and child process fork/exec.",
      "Designed an asynchronous I/O loop reading child stdout/stderr byte streams and updating a circular scrollback ring buffer.",
      "Integrated SDL3 hardware-accelerated renderer with bitmap font caching for sub-millisecond keystroke responsiveness."
    ],
    technicalChallenges: [
      "Properly multiplexing non-blocking file descriptors across standard I/O channels without CPU-spinning 100% core usage.",
      "Handling terminal resize signals (SIGWINCH) and updating the master PTY terminal window size struct (`winsize`)."
    ],
    whatWasLearned: [
      "Deep understanding of Unix process life cycles, fork/exec semantics, signal masks, and file descriptor redirection.",
      "C++20 features (concepts, ranges, smart pointers) applied to robust low-level systems programming.",
      "The engineering trade-offs between rendering throughput and frame presentation latency in GUI applications."
    ],
    result:
      "Native, responsive C++20 terminal emulator with minimal memory footprint (< 25 MB), clean CMake toolchain, and robust process execution.",
    visuals: {
      hero: "/images/projects/remoerminal_hero.jpg",
      caption: "C++20 POSIX Pseudo-Terminal Buffer · SDL3 Hardware Renderer · Zero Latency",
      badge: "C++20 // SDL3 ENGINE"
    },
    metrics: [
      { label: "Core Standard", value: "C++20" },
      { label: "Window / GUI", value: "SDL3" },
      { label: "Build Tool", value: "CMake" },
      { label: "RAM Overhead", value: "< 25 MB" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS/REMoErminal"
  },

  // 004: OpenGL Lab: Real-Time C++ Pipeline (Extended Archive)
  {
    id: "opengl-rendering-lab",
    number: "004",
    title: "OPENGL LAB: REAL-TIME C++ PIPELINE",
    subtitle: "Hardware Abstraction & Shader Testbed",
    category: "GRAPHICS_GPU",
    headline: false,
    role: "Graphics Programmer",
    techStack: ["C++", "OpenGL 4.6", "GLFW", "GLAD", "GLM", "GLSL Shaders", "EBO / VBO / VAO"],
    summary:
      "A modern C++ graphics testbed engineered from scratch to dissect the OpenGL rendering pipeline: vertex buffer layouts, indexed element drawing, camera transform matrices, and real-time GLSL lighting shaders.",
    focusAreas: [
      "Hardware buffer layouts, stride calculation, and VAO binding efficiency.",
      "Direct shader compilation with error log parsing and hot reload.",
      "Model-View-Projection (MVP) transform matrices from first principles."
    ],
    nextPriorities: [
      "Extending framebuffer depth attachments for shadow mapping passes.",
      "Porting core buffer abstraction classes to Vulkan staging concepts."
    ],
    problem:
      "Commercial game engines obscure the underlying mechanics of draw calls, memory strides, state machines, and GPU-CPU synchronization, creating a black box for technical developers.",
    idea:
      "Strip away engine abstractions to construct a raw C++ rendering framework with modular classes for VertexArrays, Buffers, Shader compilation, Texture sampling, and camera matrix math.",
    process: [
      "Configured cross-platform window management and OpenGL 4.6 Core profile via GLFW and GLAD.",
      "Designed clean C++ abstraction wrappers: VertexBuffer, IndexBuffer, VertexBufferLayout, and VertexArray.",
      "Implemented dynamic Model-View-Projection (MVP) matrix mathematics utilizing GLM.",
      "Engineered a modular GLSL shader loader with automatic uniform caching and hot-reloading.",
      "Built Blinn-Phong lighting calculations, specular highlight tuning, and wireframe polygon rasterization toggles.",
      "Benchmarked memory transfer bandwidth and indexed vs non-indexed draw call performance."
    ],
    technicalChallenges: [
      "Handling vertex attribute byte offsets and stride calculations for interleaved layouts (Pos3f, Norm3f, UV2f) without memory misalignment bugs.",
      "Avoiding GPU pipeline stalls caused by frequent uniform buffer updates within the render loop.",
      "Managing OpenGL global state machine mutations cleanly across separate rendering passes."
    ],
    whatWasLearned: [
      "The precise execution order of the GPU pipeline: input assembler, vertex shader, rasterizer, fragment shader, and blending tests.",
      "Cache locality benefits of contiguous vertex buffers and index reuse via EBOs.",
      "Direct shader mathematics that form the bedrock for modern Vulkan pipeline configurations."
    ],
    result:
      "Lightweight C++ rendering engine running at 240+ FPS with live GLSL shader reload, indexed mesh rendering, and zero memory leaks.",
    visuals: {
      hero: "/images/projects/opengl_lab.jpg",
      caption: "Real-Time Pipeline Buffer Inspection & Shading Architecture",
      badge: "C++ // OPENGL 4.6 CORE"
    },
    metrics: [
      { label: "Target Profile", value: "OpenGL 4.6 Core" },
      { label: "Draw Performance", value: "~240 FPS" },
      { label: "Memory Footprint", value: "< 32 MB" },
      { label: "Shader Hot-Reload", value: "< 15 ms" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS",
    interactiveLabId: "opengl-canvas"
  },

  // 005: IoT Vulnerability Analyzer / WifiSafe (Extended Archive)
  {
    id: "iot-vulnerability-analyzer",
    number: "005",
    title: "IoT VULNERABILITY ANALYZER (WifiSafe)",
    subtitle: "Network Threat Detection & Protocol Inspection",
    category: "DEVOPS_SEC",
    headline: false,
    role: "Lead Systems & Security Engineer",
    techStack: ["Python", "Network Sockets", "Scapy", "IoT Protocols (MQTT, CoAP, UPnP)", "Security Analysis"],
    summary:
      "An automated real-time network vulnerability analyzer designed to identify unencrypted telemetry, default credentials, exposed ports, and configuration flaws across IoT devices on LAN infrastructures.",
    focusAreas: [
      "High-throughput packet sniffing using raw Python sockets and Scapy filtering.",
      "Protocol decoders for MQTT, CoAP, RTSP, and UPnP device discovery beacons.",
      "Mapping discovered vulnerabilities to standard CVSS severity levels."
    ],
    nextPriorities: [
      "Containerizing the analyzer into a single reproducible Docker image.",
      "Exporting metrics to Prometheus for integration into infrastructure monitoring."
    ],
    problem:
      "Smart IoT hardware ubiquitously exposes critical LAN vulnerabilities through unauthenticated protocol endpoints, unencrypted cleartext sensor payloads, and obsolete firmware implementations.",
    idea:
      "Build a rapid, non-intrusive network inspector that captures live packet flows, parses proprietary IoT headers, benchmarks known CVE signatures, and provides actionable remediation guidance.",
    process: [
      "Developed high-throughput packet sniffer using raw Python sockets and Scapy filtering.",
      "Engineered protocol decoders for MQTT, CoAP, RTSP, and UPnP device discovery beacons.",
      "Implemented credential auditing against known default device combinations.",
      "Created an automated vulnerability scoring matrix mapping findings to CVSS severity levels.",
      "Constructed a tactical CLI and visual telemetry dashboard for instant audit reporting."
    ],
    technicalChallenges: [
      "Preventing packet drop during high-volume packet bursts across noisy broadcast networks.",
      "Safely testing device vulnerabilities without triggering hardware watchdog restarts or network denials of service."
    ],
    whatWasLearned: [
      "Deep packet inspection (DPI) mechanics and network protocol handshakes.",
      "Concurrent asynchronous packet processing in Python for I/O-bound networking tasks.",
      "Executing rigorous systems engineering under intense hackathon time pressure."
    ],
    result:
      "Award-winning cybersecurity tool recognized at collegiate hackathons (CMS College 3rd Place among 50+ teams; SRCAS National Hackathon Runner-up).",
    visuals: {
      hero: "/images/projects/iot_analyzer.jpg",
      caption: "Live Network Traffic Packet Parsing & CVE Anomaly Detection",
      badge: "HACKATHON WINNER // SEC_NET"
    },
    metrics: [
      { label: "Protocols Parsed", value: "MQTT, RTSP, UPnP, CoAP" },
      { label: "Detection Latency", value: "< 200 ms" },
      { label: "False Positive Rate", value: "0% in test suite" },
      { label: "Hackathon Result", value: "Top 3 / Runner-Up" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS/WifiSafe"
  },

  // 006: Game Systems & Mechanics Framework (Extended Archive)
  {
    id: "game-systems-architecture",
    number: "006",
    title: "GAME SYSTEMS & MECHANICS FRAMEWORK",
    subtitle: "Decoupled C++ Gameplay State Machines & Game Jam Engine",
    category: "SYSTEMS_CORE",
    headline: false,
    role: "Gameplay Systems Programmer",
    techStack: ["C++", "Unreal Engine 5", "Blueprints", "Enhanced Input", "Game Jam Sprints", "Retropunk"],
    summary:
      "A modular, event-driven gameplay systems architecture built for high responsiveness: state-machine movement mechanics, decoupled interaction interfaces, dynamic hitboxes, and game jam-proven systems.",
    focusAreas: [
      "Decoupled character state machines and ability interaction interfaces.",
      "Sub-millisecond CPU tick overhead profiling in Unreal Engine.",
      "Custom retro post-processing and pixelation shader graphs."
    ],
    nextPriorities: [
      "Isolating gameplay state algorithms into engine-agnostic C++ libraries.",
      "Writing unit tests for player movement determinism."
    ],
    problem:
      "Rapid game development frequently degrades into brittle actor spaghetti code, causing desynchronization, unresponsive player input, and severe debugging bottlenecks during 48-hour sprints.",
    idea:
      "Formulate a clean component-based gameplay layer in C++ with Blueprint exposure, providing robust character state machines, interaction interfaces, and modular ability systems.",
    process: [
      "Designed abstract interaction contracts (IInteractable) to decouple player pawn from world entities.",
      "Implemented a custom movement component supporting wall-running, dash physics, and dynamic momentum conservation.",
      "Created an event dispatcher system for responsive UI feedback and spatial audio cues.",
      "Stress-tested the architecture across 3 competitive game jams (including Retropunk Game Jam with custom retro shaders).",
      "Profiled Unreal Engine CPU tick overhead and converted performance-critical logic to native C++."
    ],
    technicalChallenges: [
      "Eliminating input latency during complex animation state transitions.",
      "Decoupling audio-visual cues from core game logic to prevent hard dependency crashes."
    ],
    whatWasLearned: [
      "Architectural trade-offs between Blueprint velocity and C++ computational determinism.",
      "State pattern implementation for player physics and ability cooldown states.",
      "High-pressure scope prioritization during 48-hour competitive game jams."
    ],
    result:
      "Rock-solid gameplay framework powering 3 game jam submissions (Retropunk and others) with fluid movement and zero gameplay desyncs.",
    visuals: {
      hero: "/images/projects/game_systems.jpg",
      caption: "Decoupled Movement State Machine & Modular Interaction Architecture",
      badge: "3 GAME JAMS // UNREAL ENGINE"
    },
    metrics: [
      { label: "Game Jams", value: "3 Completed" },
      { label: "Tick Overhead", value: "< 0.4 ms" },
      { label: "Input Response", value: "Sub-frame latency" },
      { label: "Language Split", value: "C++ Core / BP UI" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS/Retropunk-gamejam"
  },

  // 007: LANTERN: Hero PBR Environment Asset (Extended Archive)
  {
    id: "lantern-hero-asset",
    number: "007",
    title: "LANTERN: HERO ENVIRONMENT ASSET",
    subtitle: "AAA Real-Time PBR Prop & Material Exploration",
    category: "ART_3D",
    headline: false,
    role: "Environment Artist / Technical Artist",
    techStack: ["Blender", "Substance Painter", "InstaMAT", "Unreal Engine 5", "PBR Workflow"],
    summary:
      "A high-fidelity gothic-industrial luminary prop built with modular topology, high-to-low baking passes, multi-channel PBR texturing, and custom emissive shader graphs in Unreal Engine 5.",
    focusAreas: [
      "Sub-D hard-surface modeling, weighted normals, and ZenUV texel density packing.",
      "High-to-low cage baking (Normal, Curvature, AO, Position).",
      "Physically based material authoring with micro-wear and roughness variations."
    ],
    nextPriorities: [
      "Automated mesh export scripts with custom LOD generation pipelines.",
      "Shader graph optimization for mobile deferred renderers."
    ],
    problem:
      "Real-time production assets must balance micro-detail silhouettes, tight polygon budgets (under 10k tris), zero baking distortions across sharp 90° chamfers, and physically plausible roughness response under dynamic Lumen lighting.",
    idea:
      "Craft a standalone hero environment centerpiece demonstrating industrial design discipline: Sub-D hard-surface sculpting, ZenUV texel density matching (10.24 px/cm at 4K), procedural weathering in InstaMAT, and realistic glass transmission in UE5.",
    process: [
      "Conceptual blockout and scale matching in Blender using reference ortho sheets.",
      "High-poly subdivision modeling with weighted normals and bevel modifiers.",
      "Low-poly retopology optimizing vertex cache coherency (8,420 triangles).",
      "UV layout packing into 0-1 UV space with mirrored symmetry islands to maximize texel resolution.",
      "High-to-low cage baking (Normal, World Space Normal, Curvature, Ambient Occlusion, Position).",
      "PBR material authoring in Substance Painter and InstaMAT with procedural edge wear, dust accumulation, and glass roughness variations.",
      "Integration into Unreal Engine 5 with master material instances, subsurface scattering, and emissive color curves."
    ],
    technicalChallenges: [
      "Eliminating normal map waviness along tight cylindrical bevels without inflating triangle count.",
      "Managing Lumen real-time global illumination bouncing off reflective glass without specular flickering.",
      "Balancing metallic oxidation and dirt accumulation without washing out core albedo values."
    ],
    whatWasLearned: [
      "Strict texel density budgeting across hero vs modular secondary assets.",
      "Normal map hand-smoothing and non-directional ambient occlusion baking subtleties.",
      "Energy-conserving PBR shader mathematics in modern deferred renderers."
    ],
    result:
      "Production-ready game asset optimized for 60+ FPS in UE5 deferred rendering pipelines, featuring 4K PBR texture maps and zero visual baking artifacts.",
    visuals: {
      hero: "/images/projects/lantern_hero.jpg",
      caption: "High-Poly PBR Hero Render & Topology Inspector",
      badge: "HERO ASSET // UE5 READY"
    },
    metrics: [
      { label: "Triangles", value: "8,420" },
      { label: "Texel Density", value: "10.24 px/cm" },
      { label: "Texture Maps", value: "4K PBR" },
      { label: "LOD Levels", value: "4 Custom" }
    ],
    githubUrl: "https://github.com/SAIRAMSSSS",
    interactiveLabId: "lantern-inspector"
  }
];
