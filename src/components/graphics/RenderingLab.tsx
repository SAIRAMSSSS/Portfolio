"use client";

import React, { useState, useEffect, useRef } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Activity, 
  Layers, 
  Play, 
  RotateCw, 
  Sliders, 
  Sparkles,
  GitBranch,
  Box
} from "lucide-react";

interface ShaderPreset {
  id: string;
  name: string;
  description: string;
  glslCode: string;
}

const SHADER_PRESETS: ShaderPreset[] = [
  {
    id: "blinn-phong",
    name: "01 // Blinn-Phong Specular",
    description: "Classic empirical lighting model computing ambient, diffuse, and half-vector specular highlight.",
    glslCode: `// Blinn-Phong Fragment Shader
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;
varying vec3 v_normal;

void main() {
    vec3 lightDir = normalize(vec3(cos(u_time * 0.8), 0.8, sin(u_time * 0.8)));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 norm = normalize(v_normal);
    
    // Ambient
    vec3 ambient = vec3(0.08, 0.12, 0.18);
    
    // Diffuse
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * vec3(0.0, 0.85, 1.0);
    
    // Specular (Blinn-Phong half vector)
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(norm, halfDir), 0.0), 32.0);
    vec3 specular = spec * vec3(1.0, 1.0, 1.0);
    
    gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
}`
  },
  {
    id: "raymarch-sdf",
    name: "02 // Raymarched SDF Sphere",
    description: "Signed Distance Field sphere raymarched entirely in the fragment shader with surface normal calculation.",
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
            gl_FragColor = vec4(vec3(0.05, 0.9, 0.8) * diff, 1.0);
            return;
        }
        t += d;
        if (t > 10.0) break;
    }
    gl_FragColor = vec4(0.02, 0.03, 0.06, 1.0);
}`
  },
  {
    id: "neon-grid",
    name: "03 // Cyber Wireframe Grid",
    description: "Procedural antialiased screen-space coordinate grid with distance falloff.",
    glslCode: `// Procedural Screen Grid
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;

void main() {
    vec2 grid = abs(fract(v_uv * 12.0 - vec2(0.0, u_time * 0.2)) - 0.5);
    float line = min(grid.x, grid.y);
    float c = 1.0 - min(line * 16.0, 1.0);
    vec3 color = mix(vec3(0.02, 0.03, 0.07), vec3(0.0, 0.95, 0.65), c);
    gl_FragColor = vec4(color, 1.0);
}`
  }
];

const PIPELINE_STAGES = [
  { id: "ia", name: "01. INPUT ASSEMBLER", desc: "Reads raw vertex buffers (VBO) & index buffers (EBO) from GPU VRAM." },
  { id: "vs", name: "02. VERTEX SHADER", desc: "Executes MVP matrix multiplication transforms: Local → World → View → Clip." },
  { id: "pa", name: "03. PRIMITIVE ASSEMBLY", desc: "Assembles vertices into geometric primitives (Triangles, Lines, Points)." },
  { id: "rast", name: "04. RASTERIZATION", desc: "Interpolates vertex attributes across screen-space pixel fragments." },
  { id: "fs", name: "05. FRAGMENT SHADER", desc: "Computes final pixel color (PBR, lighting, textures, normal perturbation)." },
  { id: "om", name: "06. OUTPUT MERGER", desc: "Depth/stencil testing, alpha blending, and writing to final Framebuffer." }
];

export function RenderingLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePreset, setActivePreset] = useState<ShaderPreset>(SHADER_PRESETS[0]);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const [fps, setFps] = useState<number>(60);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1.2);
  const [lightColor, setLightColor] = useState<string>("CYAN");

  // WebGL Interactive Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Compile Vertex Shader
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

    // Simple Cube geometry with vertices, normals, and uvs
    const vertices = new Float32Array([
      // Front face
      -1, -1,  1,   0,  0,  1,   0, 0,
       1, -1,  1,   0,  0,  1,   1, 0,
       1,  1,  1,   0,  0,  1,   1, 1,
      -1,  1,  1,   0,  0,  1,   0, 1,
      // Back face
      -1, -1, -1,   0,  0, -1,   1, 0,
      -1,  1, -1,   0,  0, -1,   1, 1,
       1,  1, -1,   0,  0, -1,   0, 1,
       1, -1, -1,   0,  0, -1,   0, 0,
      // Top face
      -1,  1, -1,   0,  1,  0,   0, 1,
      -1,  1,  1,   0,  1,  0,   0, 0,
       1,  1,  1,   0,  1,  0,   1, 0,
       1,  1, -1,   0,  1,  0,   1, 1,
      // Bottom face
      -1, -1, -1,   0, -1,  0,   1, 1,
       1, -1, -1,   0, -1,  0,   0, 1,
       1, -1,  1,   0, -1,  0,   0, 0,
      -1, -1,  1,   0, -1,  0,   1, 0,
      // Right face
       1, -1, -1,   1,  0,  0,   1, 0,
       1,  1, -1,   1,  0,  0,   1, 1,
       1,  1,  1,   1,  0,  0,   0, 1,
       1, -1,  1,   1,  0,  0,   0, 0,
      // Left face
      -1, -1, -1,  -1,  0,  0,   0, 0,
      -1, -1,  1,  -1,  0,  0,   1, 0,
      -1,  1,  1,  -1,  0,  0,   1, 1,
      -1,  1, -1,  -1,  0,  0,   0, 1
    ]);

    const indices = new Uint16Array([
      0,  1,  2,      0,  2,  3,    // front
      4,  5,  6,      4,  6,  7,    // back
      8,  9,  10,     8,  10, 11,   // top
      12, 13, 14,     12, 14, 15,   // bottom
      16, 17, 18,     16, 18, 19,   // right
      20, 21, 22,     20, 22, 23    // left
    ]);

    // Create Buffers
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const ebo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    let program: WebGLProgram | null = null;

    const recompile = () => {
      if (program) gl.deleteProgram(program);

      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, activePreset.glslCode);
      const prog = gl.createProgram()!;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);

      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        // Fallback simple shader if syntax error in preset
        const fallbackFs = createShader(
          gl.FRAGMENT_SHADER,
          "precision mediump float; varying vec2 v_uv; void main() { gl_FragColor = vec4(v_uv, 0.8, 1.0); }"
        );
        const fbProg = gl.createProgram()!;
        gl.attachShader(fbProg, vs);
        gl.attachShader(fbProg, fallbackFs);
        gl.linkProgram(fbProg);
        program = fbProg;
      } else {
        program = prog;
      }

      gl.useProgram(program);

      const stride = 8 * 4; // 8 floats * 4 bytes
      const posLoc = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, stride, 0);

      const normLoc = gl.getAttribLocation(program, "a_normal");
      if (normLoc !== -1) {
        gl.enableVertexAttribArray(normLoc);
        gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, stride, 3 * 4);
      }

      const uvLoc = gl.getAttribLocation(program, "a_uv");
      if (uvLoc !== -1) {
        gl.enableVertexAttribArray(uvLoc);
        gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, stride, 6 * 4);
      }
    };

    recompile();

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.02, 0.03, 0.05, 1.0);

    // Matrix Helper: Perspective Projection & Rotation
    const createPerspective = (fov: number, aspect: number, near: number, far: number) => {
      const f = 1.0 / Math.tan(fov / 2);
      const nf = 1 / (near - far);
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
      ];
    };

    let rotY = 0;
    let rotX = 0.4;
    let animId: number;
    let lastTime = performance.now();
    let frames = 0;

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      frames++;
      if (time - lastTime >= 1000) {
        setFps(frames);
        frames = 0;
        lastTime = time;
      }

      rotY += 0.015 * rotationSpeed;
      rotX += 0.008 * rotationSpeed;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      if (!program) return;
      gl.useProgram(program);

      // MVP Matrix calculation
      const aspect = canvas.width / canvas.height;
      const proj = createPerspective((45 * Math.PI) / 180, aspect, 0.1, 100);

      // Simplified Model View transform
      const cY = Math.cos(rotY), sY = Math.sin(rotY);
      const cX = Math.cos(rotX), sX = Math.sin(rotX);
      const dist = -4.5;

      const mvp = [
        cY * proj[0], sX * sY * proj[5], -cX * sY * proj[10], sY * -dist,
        0,           cX * proj[5],      sX * proj[10],        0,
        sY * proj[0], -sX * cY * proj[5], cX * cY * proj[10], -cY * -dist,
        0,           0,                 dist * proj[10] + proj[14], -dist
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
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      if (program) gl.deleteProgram(program);
      gl.deleteBuffer(vbo);
      gl.deleteBuffer(ebo);
    };
  }, [activePreset, wireframe, rotationSpeed]);

  return (
    <section id="rendering-lab" className="py-24 sm:py-32 relative bg-[#030509] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE GRAPHICS PROGRAMMER&apos;S WORKSTATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              THE RENDERING <span className="text-slate-500 font-light">LAB</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              No black boxes. Direct execution of programmable GPU stages: vertex layout memory strides, 
              custom GLSL shaders, camera matrix transformations, and Vulkan command buffer architectures.
            </p>
          </div>

          {/* Real-Time Telemetry Badges */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="px-3 py-1.5 bg-black/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>GL_DRAW: {fps} FPS</span>
            </div>
            <div className="px-3 py-1.5 bg-black/60 border border-white/15 text-slate-300">
              API: OPENGL 4.6 CORE / WEBGL
            </div>
          </div>
        </div>

        {/* Graphics Progression Road */}
        <div className="p-6 bg-[#070b14] border border-cyan-500/30 space-y-4">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              GRAPHICS ROADMAP & HARDWARE PROGRESSION
            </span>
            <span className="text-slate-500">C++ → OPENGL → VULKAN</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-xs text-center">
            {[
              { title: "C++ CORE", detail: "Memory & RAII" },
              { title: "OPENGL 4.6", detail: "Context & GLAD" },
              { title: "PIPELINE", detail: "Stages & DrawCalls" },
              { title: "SHADERS", detail: "GLSL & Vectors" },
              { title: "BUFFERS", detail: "VAO / VBO / EBO" },
              { title: "LIGHTING", detail: "Blinn-Phong / PBR" },
              { title: "VULKAN", detail: "Barriers & Queues" }
            ].map((step, idx) => (
              <div key={idx} className="p-3 bg-black/60 border border-white/10 hover:border-cyan-400/50 transition-colors">
                <span className="text-cyan-400 font-bold text-xs block">{step.title}</span>
                <span className="text-[10px] text-slate-400 block mt-1">{step.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive WebGL Shader Testbed & Code Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive 3D WebGL Canvas */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square sm:aspect-16/10 bg-black border border-white/20 overflow-hidden shadow-2xl flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={700}
                height={450}
                className="w-full h-full object-contain cursor-crosshair"
              />

              {/* Top HUD Telemetry */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 border border-white/10 font-mono text-[10px] text-cyan-300">
                ACTIVE_PROGRAM: {activePreset.id.toUpperCase()}
              </div>

              {/* Viewport Control Strip */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] bg-black/85 backdrop-blur-md p-2 border border-white/15">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      SoundEngine.playClick();
                      setWireframe(!wireframe);
                    }}
                    className={`px-2 py-0.5 border transition-colors cursor-pointer ${
                      wireframe ? "border-cyan-400 bg-cyan-400/20 text-cyan-300" : "border-white/20 text-slate-300 hover:text-white"
                    }`}
                  >
                    WIREFRAME: {wireframe ? "ON" : "OFF"}
                  </button>

                  <button
                    onClick={() => {
                      SoundEngine.playClick();
                      setRotationSpeed((p) => (p === 1.2 ? 0 : 1.2));
                    }}
                    className="px-2 py-0.5 border border-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    ROTATION: {rotationSpeed === 0 ? "PAUSED" : "ACTIVE"}
                  </button>
                </div>

                <span className="text-slate-500 hidden sm:inline">
                  INDEXED DRAW // 36 INDICES // 24 VERTS
                </span>
              </div>
            </div>

            {/* Shader Preset Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
              {SHADER_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActivePreset(preset);
                  }}
                  className={`p-3 text-left border transition-all cursor-pointer ${
                    activePreset.id === preset.id
                      ? "border-cyan-400 bg-cyan-950/40 text-white font-bold"
                      : "border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  <div className="text-cyan-400 text-[11px] font-bold">{preset.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-2 mt-1 font-sans">
                    {preset.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Live GLSL Shader Code Viewer */}
          <div className="lg:col-span-5 space-y-4">
            <div className="blueprint-box p-4 sm:p-6 bg-[#060a14] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white tracking-wider">GLSL SHADER SOURCE</span>
                </div>
                <span className="text-[10px] text-emerald-400">COMPILED // READY</span>
              </div>

              {/* Code Pre block */}
              <div className="p-4 bg-black/80 border border-white/10 overflow-x-auto max-h-[360px] text-[11px] text-cyan-300 font-mono leading-relaxed select-text">
                <pre>{activePreset.glslCode}</pre>
              </div>

              {/* Memory Layout Inspector */}
              <div className="p-3 bg-black/60 border border-cyan-500/30 space-y-1.5 text-[11px]">
                <div className="text-white font-bold tracking-wider">BUFFER STRIDE LAYOUT:</div>
                <div className="text-slate-400 text-[10px] space-y-0.5">
                  <div>• Location 0: a_position (vec3) @ offset 0 bytes</div>
                  <div>• Location 1: a_normal   (vec3) @ offset 12 bytes</div>
                  <div>• Location 2: a_uv       (vec2) @ offset 24 bytes</div>
                  <div>• TOTAL VERTEX STRIDE: 32 bytes per vertex</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Graphics Pipeline Stages */}
        <div className="blueprint-box p-6 sm:p-8 bg-[#050810] space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white font-bold tracking-wider">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>THE PROGRAMMABLE HARDWARE PIPELINE</span>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              CLICK ANY STAGE TO INSPECT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 font-mono text-xs">
            {PIPELINE_STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => {
                  SoundEngine.playClick();
                  setSelectedStage(idx);
                }}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  selectedStage === idx
                    ? "border-cyan-400 bg-cyan-950/50 text-white"
                    : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/30"
                }`}
              >
                <div className="text-cyan-400 font-bold text-[11px]">{stage.name}</div>
                <p className="text-[10px] text-slate-300 font-sans mt-1 leading-snug">
                  {stage.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
