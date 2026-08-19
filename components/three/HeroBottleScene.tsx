"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroBottleSceneProps {
  onRegisterSetter?: (fn: (progress: number) => void) => void;
}

export default function HeroBottleScene({ onRegisterSetter }: HeroBottleSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(8, 12, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xfff0e0, 0.6);
    dirLight2.position.set(-8, 5, -5);
    scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0xffd500, 1.0, 15);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    const glassMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      shininess: 160,
      specular: 0xffffff,
      reflectivity: 0.9,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xffcc00,
      metalness: 0.85,
      roughness: 0.25,
    });

    const redMat = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      metalness: 0.2,
      roughness: 0.4,
    });

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c1c,
      metalness: 0.6,
      roughness: 0.35,
    });

    const bodyGeo = new THREE.BoxGeometry(2.4, 3.0, 1.3);
    const coreGeo = new THREE.BoxGeometry(1.9, 2.2, 0.9);
    const heartGeo = new THREE.BoxGeometry(2.4, 0.85, 1.3);
    const capGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.7, 32);
    const studGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 20);

    const baseMesh = new THREE.Mesh(bodyGeo, glassMat);
    const coreMesh = new THREE.Mesh(coreGeo, redMat);
    const heartMesh = new THREE.Mesh(heartGeo, goldMat);
    const capMesh = new THREE.Mesh(capGeo, blackMat);

    for (let i = 0; i < 2; i++) {
      const stud1 = new THREE.Mesh(studGeo, glassMat);
      stud1.position.set(i === 0 ? -0.55 : 0.55, 1.55, 0);
      baseMesh.add(stud1);

      const stud2 = new THREE.Mesh(studGeo, goldMat);
      stud2.position.set(i === 0 ? -0.55 : 0.55, 0.48, 0);
      heartMesh.add(stud2);
    }

    const assembly = new THREE.Group();
    assembly.add(baseMesh, coreMesh, heartMesh, capMesh);
    scene.add(assembly);

    baseMesh.position.set(0, -9, -4);
    // Start each piece above or below its final position, rather than sending
    // pieces through the centre of the hero where they would cover the heading.
    coreMesh.position.set(0, 6, -3);
    heartMesh.position.set(0, 7, -2);
    capMesh.position.set(0, 12, 4);

    const targetBase = new THREE.Vector3(0, -0.6, 0);
    const targetCore = new THREE.Vector3(0, -0.6, 0);
    const targetHeart = new THREE.Vector3(0, 1.35, 0);
    const targetCap = new THREE.Vector3(0, 2.15, 0);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    let animationFrameId: number;
    let time = 0;
    let isVisible = true;
    let isRunning = true;

    let scrollProgress = 0;
    if (onRegisterSetter) {
      onRegisterSetter((p: number) => { scrollProgress = p; });
    }

    // Keep the fully assembled bottle inside the camera frame while leaving the
    // centre clear for the heading. The horizontal view size depends on the
    // viewport aspect ratio, so derive the resting positions from the camera.
    const halfViewWidth = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z * camera.aspect;
    const bottleHalfWidth = 1.35;
    const edgeGap = 0.35;
    const desktopX = halfViewWidth - bottleHalfWidth - edgeGap;
    const sideX = width > 768 ? Math.min(desktopX, 7.6) : 4.2;
    const LEFT_X = -sideX;
    const RIGHT_X = sideX;

    // Start bottle at the left position immediately
    assembly.position.x = LEFT_X;


    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    function animate() {
      if (!isRunning) return;

      if (isVisible) {
        time += 0.012;

        const speed = 0.035;
        baseMesh.position.lerp(targetBase, speed);
        coreMesh.position.lerp(targetCore, speed);
        heartMesh.position.lerp(targetHeart, speed);
        capMesh.position.lerp(targetCap, speed);

        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        assembly.rotation.y = Math.sin(time * 0.4) * 0.12 + mouse.x * 0.22;
        assembly.rotation.x = Math.cos(time * 0.3) * 0.04 - mouse.y * 0.12;

        // scrollProgress 0→1: bottle travels LEFT_X → RIGHT_X (smoothstep eased)
        const t    = Math.max(0, Math.min(1, scrollProgress));
        const ease = t * t * (3 - 2 * t); // smoothstep
        const targetX = LEFT_X + (RIGHT_X - LEFT_X) * ease;

        // Subtle vertical bob — Y stays centred throughout
        const bob = Math.sin(time * 0.8) * 0.1;

        assembly.position.x = THREE.MathUtils.lerp(
          assembly.position.x,
          targetX,          // no mouse parallax on X so it doesn't drift past edges
          0.07
        );
        assembly.position.y = THREE.MathUtils.lerp(
          assembly.position.y,
          bob,
          0.07
        );

        renderer.render(scene, camera);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      bodyGeo.dispose();
      coreGeo.dispose();
      heartGeo.dispose();
      capGeo.dispose();
      studGeo.dispose();

      glassMat.dispose();
      goldMat.dispose();
      redMat.dispose();
      blackMat.dispose();

      renderer.dispose();
    };
  }, [onRegisterSetter]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] md:min-h-[550px] relative pointer-events-none transform-gpu"
      style={{ willChange: "transform" }}
      aria-label="3D Interactive Assembling LEGO ÉLAN Fragrance Bottle"
    />
  );
}
