"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreePosSceneProps {
  mode: "retail" | "cafe" | "bakery";
  theme: "dark" | "light";
}

export default function ThreePosScene({ mode, theme }: ThreePosSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(
      theme === "dark" ? 0x241d4f : 0xffffff,
      theme === "dark" ? 1.4 : 1.8
    );
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x8b6cff, 2.2);
    dirLight.position.set(4, 6, 5);
    scene.add(dirLight);

    const accentLight = new THREE.PointLight(
      mode === "retail" ? 0x10b981 : mode === "cafe" ? 0xf97316 : 0xf43f5e,
      3,
      8
    );
    accentLight.position.set(0, 0.5, 1.8);
    scene.add(accentLight);

    // 3. Central Pivot Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // A. Pedestal / Desk Mat
    const deskGeo = new THREE.CylinderGeometry(2.4, 2.5, 0.08, 48);
    const deskMat = new THREE.MeshStandardMaterial({
      color: theme === "dark" ? 0x0f111a : 0xe2e8f0,
      metalness: 0.6,
      roughness: 0.3,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = -1.2;
    rootGroup.add(desk);

    // Glowing Ring around desk
    const ringGeo = new THREE.RingGeometry(2.42, 2.48, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: mode === "retail" ? 0x10b981 : mode === "cafe" ? 0xf97316 : 0x8b6cff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -1.15;
    rootGroup.add(ring);

    // B. Stylized 3D POS Terminal Monitor
    const terminalGroup = new THREE.Group();
    rootGroup.add(terminalGroup);

    // Monitor Base
    const baseGeo = new THREE.BoxGeometry(0.8, 0.06, 0.7);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d29,
      metalness: 0.85,
      roughness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, darkMetalMat);
    baseMesh.position.set(0, -1.05, 0);
    terminalGroup.add(baseMesh);

    // Monitor Stand Neck
    const standGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.7, 16);
    const standMesh = new THREE.Mesh(standGeo, darkMetalMat);
    standMesh.position.set(0, -0.7, -0.15);
    standMesh.rotation.x = 0.2;
    terminalGroup.add(standMesh);

    // Monitor Body Frame
    const screenFrameGeo = new THREE.BoxGeometry(2.0, 1.35, 0.1);
    const frameMesh = new THREE.Mesh(screenFrameGeo, darkMetalMat);
    frameMesh.position.set(0, -0.15, 0);
    frameMesh.rotation.x = -0.12; // tilt back slightly
    terminalGroup.add(frameMesh);

    // Monitor Glass Screen (Emissive POS Dashboard glow)
    const screenGeo = new THREE.PlaneGeometry(1.86, 1.22);
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const ctx = screenCanvas.getContext("2d")!;

    function drawScreenTexture(brandColor: string, mName: string) {
      ctx.fillStyle = theme === "dark" ? "#0b0f19" : "#ffffff";
      ctx.fillRect(0, 0, 512, 320);

      // Top bar
      ctx.fillStyle = brandColor;
      ctx.fillRect(0, 0, 512, 42);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText("Shop-Admin POS", 20, 28);

      ctx.font = "14px sans-serif";
      ctx.fillText(mName.toUpperCase() + " REJIMI", 380, 28);

      // Left column: categories
      ctx.fillStyle = theme === "dark" ? "#151c2e" : "#f1f5f9";
      ctx.fillRect(16, 56, 130, 248);

      // Category items
      const cats = ["Barchasi", "Yangi", "Top tovar", "Aksiyalar"];
      cats.forEach((cat, idx) => {
        ctx.fillStyle = idx === 0 ? brandColor : theme === "dark" ? "#94a3b8" : "#64748b";
        ctx.font = "bold 14px sans-serif";
        ctx.fillText(cat, 32, 90 + idx * 46);
      });

      // Right: 4 product cards grid
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 2; c++) {
          const x = 162 + c * 165;
          const y = 56 + r * 120;
          ctx.fillStyle = theme === "dark" ? "#1e293b" : "#e2e8f0";
          ctx.beginPath();
          ctx.roundRect(x, y, 150, 108, 8);
          ctx.fill();

          ctx.fillStyle = brandColor;
          ctx.beginPath();
          ctx.arc(x + 35, y + 40, 20, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = theme === "dark" ? "#ffffff" : "#0f172a";
          ctx.font = "bold 13px sans-serif";
          ctx.fillText(`Mahsulot #${r * 2 + c + 1}`, x + 65, y + 36);

          ctx.fillStyle = "#10b981";
          ctx.font = "bold 14px sans-serif";
          ctx.fillText("24 000 so‘m", x + 65, y + 60);
        }
      }
    }

    const brandColorHex = mode === "retail" ? "#10b981" : mode === "cafe" ? "#f97316" : "#f43f5e";
    drawScreenTexture(brandColorHex, mode);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, -0.15, 0.055);
    screenMesh.rotation.x = -0.12;
    terminalGroup.add(screenMesh);

    // C. Mode-Specific 3D Props Group
    const propsGroup = new THREE.Group();
    rootGroup.add(propsGroup);

    // Retail: 3D Apple + Scanner beam
    if (mode === "retail") {
      const appleGeo = new THREE.SphereGeometry(0.35, 24, 24);
      const appleMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        roughness: 0.2,
        metalness: 0.1,
      });
      const appleMesh = new THREE.Mesh(appleGeo, appleMat);
      appleMesh.position.set(-1.4, -0.6, 0.6);
      propsGroup.add(appleMesh);

      // Banana yellow curve proxy
      const bananaGeo = new THREE.TorusGeometry(0.3, 0.09, 12, 24, Math.PI / 1.5);
      const bananaMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        roughness: 0.3,
      });
      const bananaMesh = new THREE.Mesh(bananaGeo, bananaMat);
      bananaMesh.position.set(-1.1, -0.7, 0.9);
      bananaMesh.rotation.z = 0.8;
      propsGroup.add(bananaMesh);

      // Laser scanning beam
      const laserGeo = new THREE.BoxGeometry(0.8, 0.015, 0.015);
      const laserMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const laserMesh = new THREE.Mesh(laserGeo, laserMat);
      laserMesh.position.set(-1.3, -0.4, 0.7);
      propsGroup.add(laserMesh);
    } else if (mode === "cafe") {
      // Cafe: 3D Coffee Cup & Saucer
      const saucerGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.04, 32);
      const cupWhiteMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
      });
      const saucer = new THREE.Mesh(saucerGeo, cupWhiteMat);
      saucer.position.set(-1.4, -0.9, 0.6);
      propsGroup.add(saucer);

      const cupGeo = new THREE.CylinderGeometry(0.28, 0.22, 0.4, 32);
      const cup = new THREE.Mesh(cupGeo, cupWhiteMat);
      cup.position.set(-1.4, -0.68, 0.6);
      propsGroup.add(cup);

      // Coffee liquid
      const liquidGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.02, 32);
      const liquidMat = new THREE.MeshStandardMaterial({
        color: 0x451a03,
        roughness: 0.4,
      });
      const liquid = new THREE.Mesh(liquidGeo, liquidMat);
      liquid.position.set(-1.4, -0.5, 0.6);
      propsGroup.add(liquid);

      // Burger proxy
      const bunGeo = new THREE.SphereGeometry(0.32, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const bunMat = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        roughness: 0.5,
      });
      const bun = new THREE.Mesh(bunGeo, bunMat);
      bun.position.set(1.4, -0.7, 0.6);
      propsGroup.add(bun);
    } else {
      // Bakery: 3D Layered Cake
      const tier1Geo = new THREE.CylinderGeometry(0.5, 0.5, 0.28, 32);
      const cakeMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        roughness: 0.3,
      });
      const tier1 = new THREE.Mesh(tier1Geo, cakeMat);
      tier1.position.set(-1.4, -0.75, 0.6);
      propsGroup.add(tier1);

      const tier2Geo = new THREE.CylinderGeometry(0.35, 0.35, 0.22, 32);
      const creamMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      });
      const tier2 = new THREE.Mesh(tier2Geo, creamMat);
      tier2.position.set(-1.4, -0.5, 0.6);
      propsGroup.add(tier2);

      // Strawberry on top
      const berryGeo = new THREE.ConeGeometry(0.12, 0.2, 16);
      const berryMat = new THREE.MeshStandardMaterial({
        color: 0xe11d48,
        roughness: 0.2,
      });
      const berry = new THREE.Mesh(berryGeo, berryMat);
      berry.position.set(-1.4, -0.32, 0.6);
      berry.rotation.x = Math.PI;
      propsGroup.add(berry);
    }

    // D. Orbiting Hologram Particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: mode === "retail" ? 0x10b981 : mode === "cafe" ? 0xf97316 : 0x8b6cff,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 4. Mouse Interactive Parallax
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = y * 0.25;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Render Loop with smooth damping
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / root parallax
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      // Gentle floating animation
      rootGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06;

      // Rotate particles slowly
      particlePoints.rotation.y = elapsedTime * 0.05;

      // Subtle pulse on ring
      ring.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.02);

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize handling
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      deskGeo.dispose();
      deskMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      baseGeo.dispose();
      darkMetalMat.dispose();
      standGeo.dispose();
      screenFrameGeo.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [mode, theme]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] relative pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
}
