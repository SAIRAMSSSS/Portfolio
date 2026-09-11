"use client";

import React, { useState, useEffect } from "react";
import { SoundEngine } from "@/components/audio/SoundEffects";
import { 
  Cpu, 
  Activity, 
  Play, 
  RotateCw, 
  Sliders, 
  Sparkles, 
  GitCommit, 
  Terminal,
  Brain
} from "lucide-react";

export function IntelligenceLab() {
  const [epoch, setEpoch] = useState<number>(100);
  const [learningRate, setLearningRate] = useState<number>(0.005);
  const [activeNode, setActiveNode] = useState<string>("fc1_weight");
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [lossData, setLossData] = useState<number[]>([
    1.42, 1.15, 0.92, 0.76, 0.61, 0.49, 0.38, 0.31, 0.24, 0.18, 0.14, 0.11
  ]);

  // Simulate gradient descent training loop
  useEffect(() => {
    if (!isTraining) return;
    const interval = setInterval(() => {
      setLossData((prev) => {
        const last = prev[prev.length - 1];
        const next = Math.max(0.04, last * (0.92 + (Math.random() - 0.5) * 0.04));
        const updated = [...prev.slice(1), Number(next.toFixed(4))];
        return updated;
      });
      setEpoch((p) => p + 10);
    }, 400);

    return () => clearInterval(interval);
  }, [isTraining]);

  const toggleTraining = () => {
    SoundEngine.playClick();
    setIsTraining(!isTraining);
  };

  const layers = [
    { name: "Input Tensor", shape: "[Batch, 128]", type: "Linear Features", desc: "Normalized numerical & protocol telemetry vectors." },
    { name: "FC_1 (Dense)", shape: "[128, 64]", type: "Weight + Bias", desc: "He-initialized linear projection with ReLU activation." },
    { name: "BatchNorm", shape: "[64]", type: "Norm Layer", desc: "Normalizes mini-batch activations to accelerate convergence." },
    { name: "FC_2 (Dense)", shape: "[64, 32]", type: "Weight + Bias", desc: "Non-linear feature extraction & manifold compression." },
    { name: "Dropout", shape: "[32]", type: "p = 0.2", desc: "Stochastic node zeroing to prevent model overfitting." },
    { name: "Output Head", shape: "[Batch, 4]", type: "Logits / Softmax", desc: "Multiclass anomaly probability distribution." }
  ];

  return (
    <section id="intelligence-lab" className="py-24 sm:py-32 relative bg-[#04060b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-widest uppercase">
              <Brain className="w-3.5 h-3.5" />
              <span>THE EXPLORATORY EXPERIMENTATION LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              INTELLIGENCE <span className="text-slate-500 font-light">LAB</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Exploring machine learning with systems engineering discipline: dissecting tensor shapes, 
              gradient backpropagation dynamics, and loss convergence in PyTorch and NumPy without the hype.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-black/60 p-3 border border-white/10 space-y-1">
            <div className="text-white font-bold">STACK: PYTORCH 2.x // NUMPY</div>
            <div>AUTOGRAD: COMPUTATIONAL GRAPH ACTIVE</div>
          </div>
        </div>

        {/* Interactive Neural Network & Training Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Model Architecture Flow */}
          <div className="lg:col-span-7 space-y-6">
            <div className="blueprint-box p-6 bg-[#060913] space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-white tracking-wider">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>NEURAL NETWORK TENSOR FLOW GRAPH</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">
                  FORWARD_PASS: FP32
                </span>
              </div>

              {/* Layer Pipeline Diagram */}
              <div className="space-y-3">
                {layers.map((layer, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      SoundEngine.playClick();
                      setActiveNode(layer.name);
                    }}
                    className={`p-3.5 border transition-all cursor-pointer font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      activeNode === layer.name
                        ? "border-purple-400 bg-purple-950/40 text-white"
                        : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold text-[10px]">
                        L{idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-slate-200">{layer.name}</div>
                        <div className="text-[10px] text-slate-400 font-sans">{layer.desc}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                      <span className="px-2 py-0.5 bg-white/5 text-purple-300 text-[10px] border border-white/10">
                        {layer.shape}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {layer.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-Time Training Convergence Monitor */}
          <div className="lg:col-span-5 space-y-6">
            <div className="blueprint-box p-6 bg-[#060913] space-y-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white tracking-wider">LOSS CONVERGENCE MONITOR</span>
                </div>
                <button
                  onClick={toggleTraining}
                  className={`px-3 py-1 border text-[10px] tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isTraining
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>{isTraining ? "PAUSE TRAINING" : "RUN STEP"}</span>
                </button>
              </div>

              {/* Loss Curve Visual Graph (SVG) */}
              <div className="p-4 bg-black/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>OBJECTIVE: CrossEntropyLoss()</span>
                  <span className="text-emerald-400 font-bold">
                    CURRENT LOSS: {lossData[lossData.length - 1]}
                  </span>
                </div>

                <div className="h-40 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                    <polyline
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2.5"
                      points={lossData
                        .map((val, i) => {
                          const x = (i / (lossData.length - 1)) * 300;
                          const y = 90 - (val / 1.5) * 80;
                          return `${x},${y}`;
                        })
                        .join(" ")}
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 border-t border-white/10 pt-1">
                  <span>EPOCH: {epoch - 120}</span>
                  <span>EPOCH: {epoch}</span>
                </div>
              </div>

              {/* Hyperparameters & Metrics */}
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-slate-500 text-[10px] block">OPTIMIZER</span>
                  <span className="text-white font-bold">AdamW</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-slate-500 text-[10px] block">LEARNING RATE</span>
                  <span className="text-white font-bold">{learningRate}</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-slate-500 text-[10px] block">BATCH SIZE</span>
                  <span className="text-white font-bold">64 Samples</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-slate-500 text-[10px] block">DEVICE ACCELERATOR</span>
                  <span className="text-emerald-400 font-bold">CUDA / DirectML</span>
                </div>
              </div>

              {/* Mathematical Stance */}
              <div className="p-3 bg-purple-950/20 border border-purple-900/40 text-[10px] text-slate-300 leading-relaxed font-sans">
                <strong className="text-purple-300 font-mono block mb-1">ENGINEERING PERSPECTIVE:</strong>
                &ldquo;I explore AI models deeply as analytical systems and shader/compute targets, 
                not as buzzword replacements for solid engineering fundamentals.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
