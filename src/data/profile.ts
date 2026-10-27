export interface ProfileData {
  name: string;
  handle: string;
  roles: string[];
  primaryTitle: string;
  supportingStack: string[];
  tagline: string;
  subTagline: string;
  status: string[];
  bio: string;
  motto: string;
  currentDirection: {
    objective: string;
    tracks: {
      category: "Currently Doing" | "Side Quest";
      track: string;
      focus: string;
      statusBadge: string;
      description: string;
      tools: string[];
    }[];
  };
  approach: {
    number: string;
    title: string;
    principle: string;
    detail: string;
    proof: string;
  }[];
  buildingToward: {
    goal: string;
    milestone1: {
      title: string;
      summary: string;
      deliverables: string[];
    };
    milestone2: {
      title: string;
      summary: string;
      deliverables: string[];
    };
  };
  coordinates: {
    label: string;
    lat: string;
    lng: string;
  };
  degree: string;
  links: {
    portfolio: string;
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  stats: {
    hackathons: string;
    gameJams: string;
    communityMembers: string;
    voiceSessionsCount: string;
  };
}

export const PROFILE: ProfileData = {
  name: "SAI RAM R",
  handle: "SAIRAMSSSS",
  primaryTitle: "DevOps & Infrastructure · Software Systems · AI/GPU Computing",
  roles: [
    "DevOps & Infrastructure Engineering",
    "AI Systems & GPU Computing",
    "Software Systems Developer",
    "Vulkan & Game Technology Explorer"
  ],
  supportingStack: [
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines",
    "C++20",
    "Rust",
    "Python",
    "PyTorch",
    "Vulkan",
    "TypeScript",
    "Playwright",
    "SDL3",
    "CMake"
  ],
  tagline: "I BUILD PRACTICAL SOFTWARE TOOLS, EXPLORE HOW SYSTEMS WORK UNDER THE HOOD, AND TURN EXPERIMENTS INTO REPRODUCIBLE PROJECTS.",
  subTagline: "DevOps & Infrastructure · Software Systems · AI/GPU Computing",
  status: [
    "Linux & Docker Deployment Automation Workflows",
    "AI Browser Automation Agent (REMoWser / Ollama)",
    "Rust & Vulkan 3D Texture Painting Architecture (REMoAINTER)",
    "C++20 & SDL3 Native Terminal Subsystem (REMoErminal)",
    "Automated CI/CD Build-and-Test Validation Suites",
    "PyTorch & CUDA Hardware Performance Measurement"
  ],
  bio: "I build practical software tools, explore how systems work under the hood, and turn experiments into reproducible projects. Currently doing DevOps, Cloud & Infrastructure Engineering and AI Systems, PyTorch & GPU Computing. C++, Graphics Programming, OpenGL, and game development as a side quest.",
  motto: "Learn the fundamentals. Build the system. Measure the result. Document the evidence.",
  currentDirection: {
    objective: "Understand systems beyond the surface level — how software is built, containerized, automated, monitored, and executed on real hardware.",
    tracks: [
      {
        category: "Currently Doing",
        track: "DevOps, Cloud & Infrastructure Engineering",
        focus: "Linux internals, containerization (Docker), CI/CD pipelines, automated testing, deployment reliability, monitoring & recovery.",
        statusBadge: "ACTIVE FOCUS",
        description: "Building reproducible infrastructure where setup is automated, environments are containerized, tests run continuously, and systems recover predictably from failure.",
        tools: ["Linux", "Docker", "Git Workflows", "CI/CD", "Kubernetes", "IaC Fundamentals"]
      },
      {
        category: "Currently Doing",
        track: "AI Systems, PyTorch & GPU Computing",
        focus: "Local language model pipelines (Ollama), browser automation agents, tensor operations, CUDA fundamentals & GPU benchmark instrumentation.",
        statusBadge: "ACTIVE FOCUS",
        description: "Demystifying deep learning execution: measuring how models interact with hardware, optimizing tensor throughput, and connecting local intelligence to real-world software workflows.",
        tools: ["Python", "PyTorch", "CUDA Fundamentals", "Ollama", "Playwright", "NumPy"]
      },
      {
        category: "Side Quest",
        track: "C++, Graphics Programming, OpenGL & Game Development",
        focus: "Modern C++20, Rust systems programming, Vulkan & OpenGL rendering architectures, shaders, memory allocators & game state machines.",
        statusBadge: "SIDE QUEST",
        description: "Exploring low-level graphics and systems programming: GPU hardware abstraction, custom framebuffers, cross-platform terminal engines, and real-time shader pipelines.",
        tools: ["C++20", "Rust", "Vulkan", "OpenGL 4.6", "SDL3", "CMake", "GLSL"]
      }
    ]
  },
  approach: [
    {
      number: "01",
      title: "REPRODUCIBILITY",
      principle: "Document setup, dependencies, build commands, and expected results.",
      detail: "If an experiment cannot be rebuilt from scratch with a single command or script, it is not an engineered system. Every repo contains deterministic prerequisites, step-by-step reproduction instructions, and verified environment configs.",
      proof: "Dockerfiles, CMakePresets, Cargo manifests, and step-by-step verified execution runbooks."
    },
    {
      number: "02",
      title: "EVIDENCE OVER CLAIMS",
      principle: "Use tests, benchmarks, screenshots, and working demonstrations to support technical statements.",
      detail: "No empty buzzwords or unverified production boasts. Every project is accompanied by actual test suites, frame-time latency metrics, automated workflow runs, or live screen recordings.",
      proof: "Automated test suites, reproducible benchmarks, and video/screenshot evidence."
    },
    {
      number: "03",
      title: "UNDERSTAND THE SYSTEM",
      principle: "Investigate architecture, performance, failure modes, and trade-offs.",
      detail: "Refuse black-box abstractions. Peel back engine wrappers to inspect vertex buffer strides in OpenGL, examine process signaling in Linux terminals, and trace Ollama model token streams across local sockets.",
      proof: "First-principles architecture breakdowns, latency profiling, and error-boundary isolation."
    },
    {
      number: "04",
      title: "BUILD TO LEARN",
      principle: "Prefer small, testable implementations over adding features without a clear purpose.",
      detail: "Start with a minimal viable core that compiles and tests cleanly. Expand features incrementally under strict version control rather than accumulating unmaintainable speculative complexity.",
      proof: "Modular decoupled state machines, focused commits, and scoped milestone goals."
    }
  ],
  buildingToward: {
    goal: "My current priority is to become internship- and job-ready for DevOps, Cloud, Infrastructure, or Platform Engineering roles, while building a strong foundation in AI systems and GPU computing.",
    milestone1: {
      title: "Reproducible Infrastructure Project",
      summary: "Demonstrating a complete production-grade workflow: containerization, automated testing, deployment, monitoring, and documented failure recovery.",
      deliverables: [
        "Multi-stage Docker containerization with minimal attack surface",
        "Automated CI/CD pipeline running lint, unit, and integration tests on pull requests",
        "Automated deployment script with health checks and zero-downtime rollback",
        "Prometheus/Grafana or lightweight telemetry for memory and request monitoring",
        "Documented disaster scenario and verified automated recovery procedure"
      ]
    },
    milestone2: {
      title: "Hardware Performance Measurement (CPU & GPU)",
      summary: "Measuring how software performs on CPUs and GPUs, moving from experiments toward a deeper understanding of PyTorch, CUDA, and low-level computing.",
      deliverables: [
        "Tensor operation latency and memory bandwidth profiling across CPU vs GPU",
        "Kernel execution measurement using CUDA profiling tools and PyTorch benchmark utilities",
        "Comparative evaluation of local inference pipelines (Ollama vs raw quantized models)",
        "Documented evidence log correlating batch size, precision (FP32/FP16/INT8), and throughput"
      ]
    }
  },
  coordinates: {
    label: "UTC+5:30 // ASIA",
    lat: "11.0168° N",
    lng: "76.9558° E"
  },
  degree: "Pursuing B.E. Computer Science Engineering",
  links: {
    portfolio: "https://portfolio-gamma-ten-1m75emxn99.vercel.app/",
    github: "https://github.com/SAIRAMSSSS",
    linkedin: "https://www.linkedin.com/in/sairam-r-7900b136b/",
    email: "sairam2k6proff@gmail.com",
    resume: "#resume"
  },
  stats: {
    hackathons: "50+",
    gameJams: "3",
    communityMembers: "~250",
    voiceSessionsCount: "20+ active"
  }
};
