"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Cpu, Gamepad2, Play, RotateCw, CheckCircle2, AlertTriangle, Copy, Check, Code } from "lucide-react";
import { SoundEngine } from "@/components/audio/SoundEffects";

// WebGL Shader Presets for the Graphics Side Quest
interface ShaderPreset {
  id: string;
  name: string;
  description: string;
  glslCode: string;
}

const SHADER_PRESETS: ShaderPreset[] = [
  {
    id: "blinn-phong",
    name: "Blinn-Phong Specular",
    description: "Empirical lighting computing ambient, diffuse, and half-vector specular highlight.",
    glslCode: `// Blinn-Phong Fragment Shader
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;
varying vec3 v_normal;

void main() {
    vec3 lightDir = normalize(vec3(cos(u_time * 0.9), 0.8, sin(u_time * 0.9)));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 norm = normalize(v_normal);
    
    // Ambient light
    vec3 ambient = vec3(0.1, 0.12, 0.16);
    
    // Diffuse light
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * vec3(0.5, 0.7, 1.0);
    
    // Half-vector specular
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(norm, halfDir), 0.0), 32.0);
    vec3 specular = spec * vec3(1.0, 1.0, 1.0);
    
    gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
}`,
  },
  {
    id: "raymarch-sdf",
    name: "Raymarched SDF Sphere",
    description: "Signed Distance Field sphere raymarched with analytical surface normals.",
    glslCode: `// Raymarched Sphere Distance Estimator
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;

float sdfSphere(vec3 p, float r) {
    return length(p) - r;
}

void main() {
    vec2 uv = (v_uv - 0.5) * 2.0;
    vec3 ro = vec3(0.0, 0.0, -2.5);
    vec3 rd = normalize(vec3(uv, 1.0));
    
    float t = 0.0;
    for (int i = 0; i < 48; i++) {
        vec3 p = ro + rd * t;
        float d = sdfSphere(p, 0.85 + 0.1 * sin(u_time * 2.0));
        if (d < 0.001) {
            vec3 n = normalize(p);
            float diff = max(dot(n, vec3(0.577)), 0.0);
            gl_FragColor = vec4(vec3(0.4, 0.6, 0.95) * diff + vec3(0.05, 0.08, 0.15), 1.0);
            return;
        }
        t += d;
        if (t > 10.0) break;
    }
    gl_FragColor = vec4(0.05, 0.06, 0.08, 1.0);
}`,
  },
];

export function InteractiveWorkbench() {
  const [activeTab, setActiveTab] = useState<"devops" | "ai" | "graphics">("devops");

  // --- DevOps Pipeline State ---
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "success" | "failure">("idle");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([
    "SYS_PIPE_INIT: Workstation daemon ready on arch-linux.",
    "Ready for deterministic CI/CD run.",
  ]);

  const pipelineSteps = [
    { title: "Lint & Verify", cmd: "cargo clippy && eslint --quiet" },
    { title: "Automated Tests", cmd: "pytest -v && playwright test" },
    { title: "Docker Build", cmd: "docker build --target=production" },
    { title: "Health Probe", cmd: "curl -f http://127.0.0.1:8080/health" },
    { title: "Traffic Switch", cmd: "rolling deploy (0 downtime)" },
  ];

  const runPipeline = (simulateFailure = false) => {
    SoundEngine.playClick();
    setPipelineState("running");
    setActiveStep(1);
    setPipelineLogs(["[00:00.01] CI/CD Pipeline triggered by git push [SHA 9a4ddac]"]);

    const timeouts: NodeJS.Timeout[] = [];

    // Step 1
    timeouts.push(
      setTimeout(() => {
        setActiveStep(1);
        setPipelineLogs((prev) => [...prev, "[00:00.45] ✓ Static analysis & linters passed without warnings."]);
      }, 500)
    );

    // Step 2
    timeouts.push(
      setTimeout(() => {
        setActiveStep(2);
        setPipelineLogs((prev) => [...prev, "[00:01.12] ✓ 42 unit & integration test suites passed (100% green)."]);
      }, 1100)
    );

    // Step 3
    timeouts.push(
      setTimeout(() => {
        setActiveStep(3);
        setPipelineLogs((prev) => [
          ...prev,
          "[00:01.89] ✓ Multi-stage Docker image compiled (38.4 MB layer cache hit).",
        ]);
      }, 1800)
    );

    // Step 4
    timeouts.push(
      setTimeout(() => {
        if (simulateFailure) {
          setActiveStep(4);
          setPipelineState("failure");
          setPipelineLogs((prev) => [
            ...prev,
            "[00:02.40] ✖ Health probe timeout: HTTP 504 Gateway Timeout.",
            "[00:02.45] ⚡ Automated rollback initiated: Reverting traffic to previous verified container SHA.",
          ]);
        } else {
          setActiveStep(4);
          setPipelineLogs((prev) => [...prev, "[00:02.40] ✓ Health probe: HTTP 200 OK (latency: 18ms)."]);
          
          setTimeout(() => {
            setActiveStep(5);
            setPipelineState("success");
            setPipelineLogs((prev) => [
              ...prev,
              "[00:02.85] 🚀 Live traffic switch verified. 0 dropped packets. Deployment complete.",
            ]);
          }, 600);
        }
      }, 2400)
    );
  };

  // --- AI & Tensor Profiler State ---
  const [modelType, setModelType] = useState<"ollama8b" | "attention" | "dense">("ollama8b");
  const [precision, setPrecision] = useState<"fp32" | "fp16" | "int8">("fp16");
  const [batchSize, setBatchSize] = useState<number>(1);
  const [simulatedTokens, setSimulatedTokens] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Compute calculated metrics
  const getMetrics = () => {
    let baseVramGB = 8.0;
    if (modelType === "attention") baseVramGB = 2.4;
    if (modelType === "dense") baseVramGB = 1.2;

    const mult = precision === "fp32" ? 2.0 : precision === "fp16" ? 1.0 : 0.5;
    const vram = (baseVramGB * mult + (batchSize * 0.12)).toFixed(2);
    const throughput = (1000 / (mult * 22 + batchSize * 2)).toFixed(1);
    const bandwidth = (Number(vram) * 32.5).toFixed(1);

    return { vram, throughput, bandwidth };
  };

  const metrics = getMetrics();

  const triggerTokenStream = () => {
    SoundEngine.playClick();
    setIsGenerating(true);
    setSimulatedTokens("");
    const words = [
      "Analyzing", "DOM", "mutation", "...", "Extracted", "form", "input",
      "nodes.", "Synthesizing", "Playwright", "selector", "[data-testid='submit'].",
      "Emitting", "click", "event.", "Action", "verified", "in", "24ms."
    ];
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < words.length) {
        setSimulatedTokens((prev) => (prev ? prev + " " + words[idx] : words[idx]));
        idx++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 120);
  };

  // --- Graphics Side Quest WebGL State ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeShader, setActiveShader] = useState<ShaderPreset>(SHADER_PRESETS[0]);
  const [wireframe, setWireframe] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (activeTab !== "graphics") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `
      attribute vec3 a_position;
      attribute vec3 a_normal;
      attribute vec2 a_uv;
      uniform mat4 u_mvp;
      varying vec2 v_uv;
      varying vec3 v_normal;
      void main() {
        v_uv = a_uv;
        v_normal = a_normal;
        gl_Position = u_mvp * vec4(a_position, 1.0);
      }
    `;

    // Cube vertices
    const vertices = new Float32Array([
      -1, -1,  1,   0,  0,  1,   0, 0,
       1, -1,  1,   0,  0,  1,   1, 0,
       1,  1,  1,   0,  0,  1,   1, 1,
      -1,  1,  1,   0,  0,  1,   0, 1,
      -1, -1, -1,   0,  0, -1,   1, 0,
      -1,  1, -1,   0,  0, -1,   1, 1,
       1,  1, -1,   0,  0, -1,   0, 1,
       1, -1, -1,   0,  0, -1,   0, 0,
      -1,  1, -1,   0,  1,  0,   0, 1,
      -1,  1,  1,   0,  1,  0,   0, 0,
       1,  1,  1,   0,  1,  0,   1, 0,
       1,  1, -1,   0,  1,  0,   1, 1,
      -1, -1, -1,   0, -1,  0,   1, 1,
       1, -1, -1,   0, -1,  0,   0, 1,
       1, -1,  1,   0, -1,  0,   0, 0,
      -1, -1,  1,   0, -1,  0,   1, 0,
       1, -1, -1,   1,  0,  0,   1, 0,
       1,  1, -1,   1,  0,  0,   1, 1,
       1,  1,  1,   1,  0,  0,   0, 1,
       1, -1,  1,   1,  0,  0,   0, 0,
      -1, -1, -1,  -1,  0,  0,   0, 0,
      -1, -1,  1,  -1,  0,  0,   1, 0,
      -1,  1,  1,  -1,  0,  0,   1, 1,
      -1,  1, -1,  -1,  0,  0,   0, 1
    ]);

    const indices = new Uint16Array([
      0,  1,  2,      0,  2,  3,
      4,  5,  6,      4,  6,  7,
      8,  9,  10,     8,  10, 11,
      12, 13, 14,     12, 14, 15,
      16, 17, 18,     16, 18, 19,
      20, 21, 22,     20, 22, 23
    ]);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const ebo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    function compileShader(src: string, type: number) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(activeShader.glslCode, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    gl.useProgram(program);

    const posLoc = gl.getAttribLocation(program, "a_position");
    const normLoc = gl.getAttribLocation(program, "a_normal");
    const uvLoc = gl.getAttribLocation(program, "a_uv");

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, FSIZE * 8, 0);

    gl.enableVertexAttribArray(normLoc);
    gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, FSIZE * 8, FSIZE * 3);

    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, FSIZE * 8, FSIZE * 6);

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.04, 0.04, 0.05, 1.0);

    let animId: number;
    let time = 0;

    const render = () => {
      time += 16.6 * rotationSpeed;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      const aspect = canvas.width / canvas.height;
      const rotX = time * 0.0008;
      const rotY = time * 0.0012;

      const f = 1.0 / Math.tan((45 * Math.PI) / 360);
      const proj = [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, -100.1 / 99.9, -1,
        0, 0, -20 / 99.9, 0
      ];

      const cY = Math.cos(rotY), sY = Math.sin(rotY);
      const cX = Math.cos(rotX), sX = Math.sin(rotX);
      const dist = -4.5;

      const mvp = [
        cY * proj[0], sX * sY * proj[5], -cX * sY * proj[10], sY * -dist,
        0,           cX * proj[5],      sX * proj[10],        0,
        sY * proj[0], -sX * cY * proj[5], cX * cY * proj[10], -cY * -dist,
        0,           0,                 dist * proj[10] - 2.0, -dist
      ];

      const mvpLoc = gl.getUniformLocation(program, "u_mvp");
      if (mvpLoc) gl.uniformMatrix4fv(mvpLoc, false, new Float32Array(mvp));

      const timeLoc = gl.getUniformLocation(program, "u_time");
      if (timeLoc) gl.uniform1f(timeLoc, time * 0.001);

      const resLoc = gl.getUniformLocation(program, "u_resolution");
      if (resLoc) gl.uniform2f(resLoc, canvas.width, canvas.height);

      if (wireframe) {
        gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);
      } else {
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteBuffer(vbo);
        gl.deleteBuffer(ebo);
      }
    };
  }, [activeTab, activeShader, wireframe, rotationSpeed]);

  const copyGlsl = () => {
    SoundEngine.playClick();
    navigator.clipboard.writeText(activeShader.glslCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="workbench" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
              Interactive Systems Workbench
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-1">
              Live instrumentation for container pipelines, PyTorch tensor metrics, and real-time shaders.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-[#121216] border border-white/[0.08] rounded-md text-xs font-mono">
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveTab("devops");
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === "devops"
                  ? "bg-white/10 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              DevOps CI/CD
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveTab("ai");
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === "ai"
                  ? "bg-white/10 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              AI &amp; Tensors
            </button>
            <button
              onClick={() => {
                SoundEngine.playClick();
                setActiveTab("graphics");
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === "graphics"
                  ? "bg-white/10 text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Side Quest: Shader
            </button>
          </div>
        </div>

        {/* TAB 1: DEVOPS PIPELINE */}
        {activeTab === "devops" && (
          <div className="bg-[#0e0e11] border border-white/[0.08] rounded-lg p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-sm font-semibold text-neutral-100">
                  Deterministic CI/CD &amp; Automated Recovery
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Multi-stage Docker builds, health checks, and automatic fallback.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => runPipeline(false)}
                  disabled={pipelineState === "running"}
                  className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3" />
                  <span>Run Pipeline</span>
                </button>
                <button
                  onClick={() => runPipeline(true)}
                  disabled={pipelineState === "running"}
                  className="px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-amber-300 rounded border border-white/[0.08] hover:border-amber-500/30 transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>Simulate Failure</span>
                </button>
              </div>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {pipelineSteps.map((step, idx) => {
                const stepNum = idx + 1;
                const isPassed = activeStep > stepNum || pipelineState === "success";
                const isCurrent = activeStep === stepNum && pipelineState === "running";
                const isFailed = pipelineState === "failure" && activeStep === stepNum;

                return (
                  <div
                    key={step.title}
                    className={`p-3 rounded border text-xs font-mono space-y-1 transition-all ${
                      isFailed
                        ? "border-red-500/50 bg-red-950/20 text-red-300"
                        : isPassed
                        ? "border-emerald-500/40 bg-emerald-950/10 text-emerald-300"
                        : isCurrent
                        ? "border-cyan-500/40 bg-cyan-950/20 text-cyan-200 animate-pulse"
                        : "border-white/[0.06] bg-black/40 text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span>0{stepNum}</span>
                      {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      {isFailed && <AlertTriangle className="w-3 h-3 text-red-400" />}
                    </div>
                    <div className="font-sans font-medium text-xs text-neutral-200">
                      {step.title}
                    </div>
                    <div className="text-[10px] text-neutral-500 truncate">
                      {step.cmd}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Log Console */}
            <div className="p-4 bg-black/60 border border-white/[0.08] rounded font-mono text-xs space-y-1 text-neutral-300 max-h-44 overflow-y-auto">
              <div className="text-[10px] text-neutral-500 pb-1 border-b border-white/[0.06] flex items-center justify-between">
                <span>TERMINAL LOG // REPRODUCIBLE DEPLOYMENT</span>
                <span>STATUS: {pipelineState.toUpperCase()}</span>
              </div>
              {pipelineLogs.map((log, i) => (
                <div key={i} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: AI & TENSOR PROFILER */}
        {activeTab === "ai" && (
          <div className="bg-[#0e0e11] border border-white/[0.08] rounded-lg p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-sm font-semibold text-neutral-100">
                  PyTorch &amp; Hardware Inference Profiler
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Interactive precision tradeoffs, memory bandwidth, and token stream generation.
                </p>
              </div>

              <button
                onClick={triggerTokenStream}
                disabled={isGenerating}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>Simulate Token Stream</span>
              </button>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="space-y-1.5">
                <label className="text-neutral-400 text-[11px]">Architecture</label>
                <select
                  value={modelType}
                  onChange={(e) => setModelType(e.target.value as "ollama8b" | "attention" | "dense")}
                  className="w-full bg-black/60 border border-white/[0.1] rounded px-2.5 py-1.5 text-neutral-200 outline-none focus:border-cyan-500/50"
                >
                  <option value="ollama8b">Ollama 8B (Llama 3)</option>
                  <option value="attention">Multi-Head Attention (128 Heads)</option>
                  <option value="dense">Linear Projection (4096 x 4096)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 text-[11px]">Quantization / Precision</label>
                <select
                  value={precision}
                  onChange={(e) => setPrecision(e.target.value as "fp32" | "fp16" | "int8")}
                  className="w-full bg-black/60 border border-white/[0.1] rounded px-2.5 py-1.5 text-neutral-200 outline-none focus:border-cyan-500/50"
                >
                  <option value="fp32">FP32 (32-bit float)</option>
                  <option value="fp16">FP16 (Half precision)</option>
                  <option value="int8">INT8 (Quantized)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 text-[11px]">Batch Size: {batchSize}</label>
                <input
                  type="range"
                  min="1"
                  max="64"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  className="w-full accent-cyan-400 mt-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Metrics Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-black/40 border border-white/[0.06] rounded">
                <div className="text-[10px] font-mono text-neutral-500">VRAM FOOTPRINT</div>
                <div className="text-base sm:text-lg font-semibold text-neutral-100 font-mono mt-0.5">
                  {metrics.vram} GB
                </div>
              </div>
              <div className="p-3 bg-black/40 border border-white/[0.06] rounded">
                <div className="text-[10px] font-mono text-neutral-500">THROUGHPUT</div>
                <div className="text-base sm:text-lg font-semibold text-cyan-400 font-mono mt-0.5">
                  {metrics.throughput} tok/s
                </div>
              </div>
              <div className="p-3 bg-black/40 border border-white/[0.06] rounded">
                <div className="text-[10px] font-mono text-neutral-500">EST. BANDWIDTH</div>
                <div className="text-base sm:text-lg font-semibold text-emerald-400 font-mono mt-0.5">
                  {metrics.bandwidth} GB/s
                </div>
              </div>
            </div>

            {/* Token Stream Output */}
            <div className="p-3 bg-black/60 border border-white/[0.08] rounded font-mono text-xs min-h-[60px] flex items-center">
              {simulatedTokens ? (
                <span className="text-neutral-200">{simulatedTokens}</span>
              ) : (
                <span className="text-neutral-600 italic">Click &apos;Simulate Token Stream&apos; to trigger browser agent reasoning loop.</span>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: GRAPHICS SIDE QUEST SHADER VIEWPORT */}
        {activeTab === "graphics" && (
          <div className="bg-[#0e0e11] border border-violet-500/20 rounded-lg p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-sm font-semibold text-neutral-100">
                  Real-Time WebGL Shader Viewport
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Side Quest: Programmable GPU stages, GLSL shaders &amp; matrix transforms.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWireframe(!wireframe)}
                  className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors cursor-pointer ${
                    wireframe
                      ? "bg-violet-500/20 text-violet-300 border-violet-500/40"
                      : "text-neutral-400 hover:text-white border-white/[0.08]"
                  }`}
                >
                  Wireframe: {wireframe ? "ON" : "OFF"}
                </button>
                <button
                  onClick={copyGlsl}
                  className="px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-white rounded border border-white/[0.08] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Copy GLSL code"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? "Copied" : "Copy GLSL"}</span>
                </button>
              </div>
            </div>

            {/* Viewport & Controls */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Canvas Frame */}
              <div className="md:col-span-7 aspect-[4/3] bg-black/80 rounded border border-white/[0.1] relative overflow-hidden flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={480}
                  height={360}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 text-[10px] font-mono text-neutral-500 bg-black/60 px-2 py-0.5 rounded">
                  60 FPS · GLSL 1.00 ES
                </div>
              </div>

              {/* Shader Presets & Speed */}
              <div className="md:col-span-5 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400">Shader Preset</div>
                  <div className="space-y-1.5">
                    {SHADER_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => {
                          SoundEngine.playClick();
                          setActiveShader(preset);
                        }}
                        className={`w-full text-left p-2.5 rounded border text-xs font-mono transition-colors cursor-pointer ${
                          activeShader.id === preset.id
                            ? "border-violet-500/50 bg-violet-950/20 text-neutral-100"
                            : "border-white/[0.06] bg-black/40 text-neutral-400 hover:text-neutral-200"
                        }`}
                      >
                        <div className="font-semibold">{preset.name}</div>
                        <div className="text-[10px] text-neutral-500 mt-0.5 font-sans">
                          {preset.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>Rotation Speed</span>
                    <span>{rotationSpeed.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.2"
                    value={rotationSpeed}
                    onChange={(e) => setRotationSpeed(Number(e.target.value))}
                    className="w-full accent-violet-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
