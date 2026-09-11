export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "ART" | "GRAPHICS" | "SECURITY" | "GAMES" | "AI";
  featured: boolean;
  role: string;
  techStack: string[];
  summary: string;
  problem: string;
  idea: string;
  process: string[];
  technicalChallenges: string[];
  whatWasLearned: string[];
  result: string;
  visuals: {
    hero: string;
    wireframe?: string;
    normals?: string;
    detail?: string;
    caption: string;
    badge: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  interactiveLabId?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "lantern-hero-asset",
    number: "001",
    title: "LANTERN: HERO ENVIRONMENT ASSET",
    subtitle: "AAA Real-Time PBR Prop & Material Exploration",
    category: "ART",
    featured: true,
    role: "Environment Artist / Technical Artist",
    techStack: ["Blender", "Substance Painter", "InstaMAT", "Unreal Engine 5", "PBR Workflow"],
    summary: "A high-fidelity gothic-industrial luminary prop built with modular topology, high-to-low baking passes, multi-channel PBR texturing, and custom emissive shader graphs in Unreal Engine 5.",
    problem: "Real-time production assets must balance micro-detail silhouettes, tight polygon budgets (under 10k tris), zero baking distortions across sharp 90° chamfers, and physically plausible roughness response under dynamic Lumen lighting.",
    idea: "Craft a standalone hero environment centerpiece demonstrating industrial design discipline: Sub-D hard-surface sculpting, ZenUV texel density matching (10.24 px/cm at 4K), procedural weathering in InstaMAT, and realistic glass transmission in UE5.",
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
    result: "Production-ready game asset optimized for 60+ FPS in UE5 deferred rendering pipelines, featuring 4K PBR texture maps and zero visual baking artifacts.",
    visuals: {
      hero: "/images/projects/lantern_hero.jpg",
      wireframe: "/images/art/block_wireframe.png",
      normals: "/images/art/block_matids.png",
      detail: "/images/art/primary_ref.jpg",
      caption: "High-Poly PBR Hero Render & Topology Inspector",
      badge: "HERO ASSET // UE5 READY"
    },
    metrics: [
      { label: "Triangles", value: "8,420" },
      { label: "Texel Density", value: "10.24 px/cm" },
      { label: "Texture Maps", value: "4K PBR" },
      { label: "LOD Levels", value: "4 Custom" }
    ],
    interactiveLabId: "lantern-inspector"
  },
  {
    id: "opengl-rendering-lab",
    number: "002",
    title: "OPENGL LAB: REAL-TIME C++ PIPELINE",
    subtitle: "Hardware Abstraction & Shader Testbed",
    category: "GRAPHICS",
    featured: true,
    role: "Graphics Programmer",
    techStack: ["C++", "OpenGL 4.6", "GLFW", "GLAD", "GLM", "GLSL Shaders", "EBO / VBO / VAO"],
    summary: "A modern C++ graphics testbed engineered from scratch to dissect the OpenGL rendering pipeline: vertex buffer layouts, indexed element drawing, camera transform matrices, and real-time GLSL lighting shaders.",
    problem: "Commercial game engines obscure the underlying mechanics of draw calls, memory strides, state machines, and GPU-CPU synchronization, creating a black box for technical developers.",
    idea: "Strip away engine abstractions to construct a raw C++ rendering framework with modular classes for VertexArrays, Buffers, Shader compilation, Texture sampling, and camera matrix math.",
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
    result: "Lightweight C++ rendering engine running at 240+ FPS with live GLSL shader reload, indexed mesh rendering, and zero memory leaks.",
    visuals: {
      hero: "/images/projects/opengl_lab.jpg",
      wireframe: "/images/art/block_wireframe.png",
      normals: "/images/art/block_beauty.png",
      caption: "Real-Time Pipeline Buffer Inspection & Shading Architecture",
      badge: "C++ // OPENGL 4.6 CORE"
    },
    metrics: [
      { label: "Target Profile", value: "OpenGL 4.6 Core" },
      { label: "Draw Performance", value: "~240 FPS" },
      { label: "Memory Footprint", value: "< 32 MB" },
      { label: "Shader Hot-Reload", value: "< 15 ms" }
    ],
    interactiveLabId: "opengl-canvas"
  },
  {
    id: "iot-vulnerability-analyzer",
    number: "003",
    title: "IoT VULNERABILITY ANALYZER",
    subtitle: "Network Threat Detection & Protocol Inspection",
    category: "SECURITY",
    featured: true,
    role: "Lead Systems & Security Engineer",
    techStack: ["Python", "Network Sockets", "Scapy", "IoT Protocols (MQTT, CoAP, UPnP)", "Security Analysis"],
    summary: "An automated real-time network vulnerability analyzer designed to identify unencrypted telemetry, default credentials, exposed ports, and configuration flaws across IoT devices on LAN infrastructures.",
    problem: "Smart IoT hardware ubiquitously exposes critical LAN vulnerabilities through unauthenticated protocol endpoints, unencrypted cleartext sensor payloads, and obsolete firmware implementations.",
    idea: "Build a rapid, non-intrusive network inspector that captures live packet flows, parses proprietary IoT headers, benchmarks known CVE signatures, and provides actionable remediation guidance.",
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
    result: "Award-winning cybersecurity tool recognized at collegiate hackathons (CMS College 3rd Place among 50+ teams; SRCAS National Hackathon Runner-up).",
    visuals: {
      hero: "/images/projects/iot_analyzer.jpg",
      wireframe: "/images/art/block_matids.png",
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
  {
    id: "game-systems-architecture",
    number: "004",
    title: "GAME SYSTEMS & MECHANICS FRAMEWORK",
    subtitle: "Decoupled C++ Gameplay State Machines & Game Jam Engine",
    category: "GAMES",
    featured: true,
    role: "Gameplay Systems Programmer",
    techStack: ["C++", "Unreal Engine 5", "Blueprints", "Enhanced Input", "Game Jam Sprints", "Retropunk"],
    summary: "A modular, event-driven gameplay systems architecture built for high responsiveness: state-machine movement mechanics, decoupled interaction interfaces, dynamic hitboxes, and game jam-proven systems.",
    problem: "Rapid game development frequently degrades into brittle actor spaghetti code, causing desynchronization, unresponsive player input, and severe debugging bottlenecks during 48-hour sprints.",
    idea: "Formulate a clean component-based gameplay layer in C++ with Blueprint exposure, providing robust character state machines, interaction interfaces, and modular ability systems.",
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
    result: "Rock-solid gameplay framework powering 3 game jam submissions (Retropunk and others) with fluid movement and zero gameplay desyncs.",
    visuals: {
      hero: "/images/projects/game_systems.jpg",
      wireframe: "/images/art/beetle_beauty.png",
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
  {
    id: "ai-ml-intelligence-lab",
    number: "005",
    title: "INTELLIGENCE LAB: NEURAL EXPERIMENTS",
    subtitle: "Gradient Dynamics & Feature Activation Visualizer",
    category: "AI",
    featured: true,
    role: "ML Explorer & Systems Programmer",
    techStack: ["Python", "PyTorch", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
    summary: "An exploratory machine learning lab dissecting deep neural network representations, loss landscape convergence, gradient flow, and data preprocessing pipelines.",
    problem: "Machine learning architectures are often implemented without intuitive tactile comprehension of tensor transformations, gradient vanishing thresholds, or feature space representations.",
    idea: "Construct an interactive experimental workbench tracking forward and backward propagation dynamics, tensor shapes, and loss minimization across custom neural models.",
    process: [
      "Engineered automated data cleaning, normalization, and split pipelines with NumPy and Pandas.",
      "Implemented custom Multi-Layer Perceptrons (MLPs) and Convolutional models from mathematical first principles.",
      "Instrumented gradient tracking across backward passes to visualize layer-by-layer gradient magnitudes.",
      "Evaluated hyperparameter sensitivity across varied learning rates, optimizers (Adam, SGD), and regularizers.",
      "Connected real-time metrics visualizations displaying loss curves and decision boundary partitions."
    ],
    technicalChallenges: [
      "Preventing exploding gradients in deeper layers through proper Xavier/He initialization and gradient clipping.",
      "Optimizing batch tensor operations for vectorized execution without GPU memory thrashing."
    ],
    whatWasLearned: [
      "First-principles understanding of backpropagation and automatic differentiation.",
      "The practical gap between theoretical model accuracy and real-world noisy inference.",
      "Bridging machine learning inference with real-time interactive software pipelines."
    ],
    result: "Robust visual testbed providing deep architectural visibility into neural training mechanics and convergence behaviors.",
    visuals: {
      hero: "/images/projects/intelligence_lab.jpg",
      wireframe: "/images/art/block_normals.png",
      caption: "Neural Network Architecture & Gradient Flow Dynamics",
      badge: "PYTORCH // NUMPY PIPELINE"
    },
    metrics: [
      { label: "Framework", value: "PyTorch & NumPy" },
      { label: "Validation Metric", value: "Convergence Visualized" },
      { label: "Tensor Tracking", value: "Full Precision (FP32)" },
      { label: "Architecture", value: "MLP & CNN Experiments" }
    ],
    interactiveLabId: "intelligence-lab"
  }
];
