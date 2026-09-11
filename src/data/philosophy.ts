export interface PhilosophyPrinciple {
  index: string;
  statement: string;
  subheading: string;
  elaboration: string;
  codeSnippet: string;
}

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    index: "01",
    statement: "BUILD > WATCH",
    subheading: "Tutorials provide comfort. Shipping working code forces reality.",
    elaboration: "You do not understand a rendering pipeline until you have diagnosed a black screen in OpenGL caused by a single wrong byte stride in an attribute pointer. True competence is forged on the terminal and in the viewport, not in passive observation.",
    codeSnippet: "// Theoretical understanding != Execution\nwhile (exploring) {\n  writeCode();\n  renderMesh();\n  shipArtifact();\n}"
  },
  {
    index: "02",
    statement: "EXPERIMENT > MEMORIZE",
    subheading: "APIs change across versions. Deep mental models of underlying hardware endure.",
    elaboration: "Memorizing function signatures is trivial. Understanding memory cache lines, GPU parallel SIMD warps, PBR Fresnel reflectance, and mathematical transforms enables you to adapt across C++, GLSL, Vulkan, Unreal, or any future paradigm.",
    codeSnippet: "// First-principles mental model\nvec3 F0 = mix(vec3(0.04), albedo, metallic);\nvec3 F = fresnelSchlick(max(dot(H, V), 0.0), F0);"
  },
  {
    index: "03",
    statement: "SYSTEMS + ART",
    subheading: "Art without technical rigor stalls. Code without aesthetic intuition remains dry.",
    elaboration: "The most captivating digital experiences emerge at the friction point where visual beauty meets mathematical execution. A 3D environment becomes ten times more striking when you know how the shader compiler processes the lighting pass.",
    codeSnippet: "// The Triad: ART ↔ CODE ↔ GAMES\nstruct DigitalWorld {\n  EnvironmentArt visuals;\n  GraphicsPipeline renderer;\n  GameplaySystems mechanics;\n};"
  },
  {
    index: "04",
    statement: "LEARN BY BREAKING THINGS",
    subheading: "A segmentation fault or a corrupted UV map is an invitation to understand the system.",
    elaboration: "I do not fear crashing the window context or corrupting vertex buffers. Breaking an engine reveals where its boundaries lie. Debugging through core dumps and RenderDoc frame captures is where actual mastery begins.",
    codeSnippet: "signal(SIGSEGV, [](int) {\n  std::cerr << \"[SYSTEM]: Core dumped at 0x7fff4a2. Time to inspect the memory layout.\\n\";\n});"
  },
  {
    index: "05",
    statement: "COMMUNITY > COMPETITION",
    subheading: "Building isolated in a silo caps your horizon. Collective knowledge compounds exponentially.",
    elaboration: "Leading Syntrix demonstrated that sharing unfinished drafts, hosting open debug nights, and bringing along fellow builders produces 10x more momentum than hoarding knowledge in isolation.",
    codeSnippet: "// Syntrix Collective\nfor (const auto& builder : SyntrixCommunity) {\n  builder.shareWorkInProgress();\n  builder.pairDebug();\n  builder.competeInHackathons();\n}"
  }
];
