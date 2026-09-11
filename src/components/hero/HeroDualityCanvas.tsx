"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useDuality } from "@/context/DualityContext";

export function HeroDualityCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode, isCodeMode } = useDuality();
  const [wireframeToggled, setWireframeToggled] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [vertexStats, setVertexStats] = useState({ vertices: 4820, triangles: 2410, fps: 60 });
  const [hoverCoord, setHoverCoord] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // ROOT ASSET GROUP (Lantern / Environment Core Relic)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // PROCEDURAL HERO ARTIFACT (Gothic-Industrial Lantern / Cyber Relic)
    // 1. Lantern Cage Base & Top
    const octGeo = new THREE.CylinderGeometry(1.6, 1.9, 0.5, 8);
    const topGeo = new THREE.ConeGeometry(1.6, 1.2, 8);
    const roofCapGeo = new THREE.CylinderGeometry(0.5, 0.7, 0.6, 8);
    const ringGeo = new THREE.TorusGeometry(0.4, 0.08, 16, 32);

    // 2. Pillars
    const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8);
    // 3. Central Core Glass / Emissive Chamber
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 2);
    // 4. Inner Cyber Crystal
    const crystalGeo = new THREE.OctahedronGeometry(0.6, 0);

    // MATERIALS (Art vs Code)
    const artBronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0x221f1d,
      metalness: 0.88,
      roughness: 0.28,
      wireframe: false
    });

    const artGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xcca050,
      metalness: 0.95,
      roughness: 0.2,
      wireframe: false
    });

    const artCoreMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa22,
      emissive: 0xff7700,
      emissiveIntensity: 1.8,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.75
    });

    const codeWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    const codeGreenWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.9
    });

    // MESHES
    const baseMesh = new THREE.Mesh(octGeo, isCodeMode ? codeWireMaterial : artBronzeMaterial);
    baseMesh.position.y = -1.5;
    mainGroup.add(baseMesh);

    const roofMesh = new THREE.Mesh(topGeo, isCodeMode ? codeWireMaterial : artBronzeMaterial);
    roofMesh.position.y = 1.8;
    mainGroup.add(roofMesh);

    const roofCap = new THREE.Mesh(roofCapGeo, isCodeMode ? codeWireMaterial : artGoldMaterial);
    roofCap.position.y = 2.6;
    mainGroup.add(roofCap);

    const handleRing = new THREE.Mesh(ringGeo, isCodeMode ? codeWireMaterial : artGoldMaterial);
    handleRing.position.y = 3.1;
    handleRing.rotation.x = Math.PI / 2;
    mainGroup.add(handleRing);

    // 8 Structural Pillars
    const pillars: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 1.45;
      const pMesh = new THREE.Mesh(pillarGeo, isCodeMode ? codeWireMaterial : artGoldMaterial);
      pMesh.position.x = Math.cos(angle) * radius;
      pMesh.position.z = Math.sin(angle) * radius;
      pMesh.position.y = 0.1;
      pillars.push(pMesh);
      mainGroup.add(pMesh);
    }

    // Inner Glowing Core
    const coreMesh = new THREE.Mesh(coreGeo, isCodeMode ? codeGreenWireMaterial : artCoreMaterial);
    mainGroup.add(coreMesh);

    const innerCrystal = new THREE.Mesh(
      crystalGeo,
      isCodeMode ? codeWireMaterial : new THREE.MeshBasicMaterial({ color: 0xfff0bb })
    );
    mainGroup.add(innerCrystal);

    // TECHNICAL GIZMO COORDINATE AXES (Code mode overlay)
    const axesHelper = new THREE.AxesHelper(2.5);
    axesHelper.visible = isCodeMode;
    mainGroup.add(axesHelper);

    // BOUNDING BOX WIREFRAME
    const bboxGeo = new THREE.BoxGeometry(3.6, 5.4, 3.6);
    const bboxMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const bboxMesh = new THREE.Mesh(bboxGeo, bboxMat);
    bboxMesh.position.y = 0.6;
    bboxMesh.visible = isCodeMode;
    mainGroup.add(bboxMesh);

    // POINT CLOUD (Technical Vertex Scatter)
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: isCodeMode ? 0x00f0ff : 0xf59e0b,
      transparent: true,
      opacity: 0.6
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 1.8);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    const warmPointLight = new THREE.PointLight(0xff9900, 2.8, 8);
    warmPointLight.position.set(0, 0, 0);
    scene.add(warmPointLight);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.8;
      targetRotationX = y * 0.4;

      setHoverCoord({
        x: Number((x * 4).toFixed(2)),
        y: Number((y * 4).toFixed(2)),
        z: Number((8.5 - Math.hypot(x, y)).toFixed(2))
      });

      keyLight.position.x = 4 + x * 2;
      keyLight.position.y = 5 + y * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Continuous rotation
      mainGroup.rotation.y += 0.005 * rotationSpeed;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (targetRotationY - (mainGroup.rotation.y % (Math.PI * 2))) * 0.02;

      // Floating bobbing
      mainGroup.position.y = Math.sin(elapsed * 1.5) * 0.15;

      // Inner crystal spinning
      innerCrystal.rotation.x += 0.02;
      innerCrystal.rotation.y += 0.03;
      coreMesh.rotation.y -= 0.01;

      // Dust particle slow drift
      particlesMesh.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isCodeMode, wireframeToggled, rotationSpeed]);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] select-none flex items-center justify-center overflow-hidden">
      {/* Three.js Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* TECHNICAL TELEMETRY HUD OVERLAYS */}
      {/* Top Left: Object Telemetry */}
      <div className="absolute top-4 left-4 sm:left-8 font-mono text-[10px] text-slate-400 bg-black/60 backdrop-blur-xs p-2.5 border border-white/10 pointer-events-none space-y-1">
        <div className="text-amber-400 font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          TARGET: HERO_LANTERN_V2
        </div>
        <div>TOPOLOGY: QUAD-DOMINANT SUB-D</div>
        <div>VERTS: {vertexStats.vertices} | TRIS: {vertexStats.triangles}</div>
        <div>TEXEL_DENSITY: 10.24 px/cm @ 4K</div>
        <div>SHADER: {isCodeMode ? "GLSL_WIREFRAME_DEBUG" : "PBR_METALLIC_ROUGHNESS"}</div>
      </div>

      {/* Top Right: Real-Time Coordinate Raycaster */}
      <div className="absolute top-4 right-4 sm:right-8 font-mono text-[10px] text-slate-400 bg-black/60 backdrop-blur-xs p-2.5 border border-white/10 pointer-events-none text-right space-y-1 hidden sm:block">
        <div className="text-cyan-400 font-bold">RAYCAST_HIT: TRUE</div>
        <div>WORLD_X: {hoverCoord.x}</div>
        <div>WORLD_Y: {hoverCoord.y}</div>
        <div>WORLD_Z: {hoverCoord.z}</div>
        <div className="text-slate-500">PROJECTION: PERSPECTIVE_45°</div>
      </div>

      {/* Bottom Center: Interactive 3D Viewport Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0a0d16]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 font-mono text-[11px] z-10">
        <span className="text-slate-400 text-[10px] hidden md:inline mr-1">
          VIEWPORT:
        </span>
        <button
          onClick={() => setWireframeToggled(!wireframeToggled)}
          className={`px-2 py-0.5 border text-[10px] tracking-wider transition-colors cursor-pointer ${
            wireframeToggled
              ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
              : "border-white/20 text-slate-300 hover:text-white hover:border-white/40"
          }`}
        >
          [WIRE_PASS]
        </button>
        <button
          onClick={() => setRotationSpeed((prev) => (prev === 1 ? 2.5 : prev === 2.5 ? 0 : 1))}
          className="px-2 py-0.5 border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-[10px] tracking-wider transition-colors cursor-pointer"
        >
          SPIN: {rotationSpeed === 0 ? "PAUSED" : rotationSpeed === 1 ? "1X" : "2.5X"}
        </button>
        <span className="text-slate-600">|</span>
        <span className="text-[10px] text-amber-400/80">
          DRAG MOUSE TO ORBIT LIGHT
        </span>
      </div>

      {/* Blueprint Grid Crosshairs */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 m-4 sm:m-8">
        <span className="absolute top-0 left-0 text-[10px] font-mono text-white/20 p-1">+ (0, 0)</span>
        <span className="absolute top-0 right-0 text-[10px] font-mono text-white/20 p-1">+ (1, 0)</span>
        <span className="absolute bottom-0 left-0 text-[10px] font-mono text-white/20 p-1">+ (0, 1)</span>
        <span className="absolute bottom-0 right-0 text-[10px] font-mono text-white/20 p-1">+ (1, 1)</span>
      </div>
    </div>
  );
}
