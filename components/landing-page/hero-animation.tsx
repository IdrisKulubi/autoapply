'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (runs only on client)
    if (typeof window === 'undefined') return;

    setIsMobile(window.innerWidth < 768); // Simple check for mobile

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // alpha: true for transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(isMobile ? 1.5 : 2.5, 1); // Smaller on mobile
    const material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6, // Blue color to match theme
      metalness: 0.3,
      roughness: 0.4,
      flatShading: true, // Gives a modern, faceted look
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xbfdbfe, 1.5, 100); // Lighter blue
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(-5, -3, 2);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Subtle rotation
      shape.rotation.x += 0.002;
      shape.rotation.y += 0.003;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount?.removeChild(renderer.domElement);
      // Dispose Three.js objects to free memory (important!)
      geometry.dispose();
      material.dispose();
      renderer.dispose(); 
      // Potentially dispose textures if used
    };
  }, [isMobile]); // Re-run effect if isMobile changes

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 opacity-30 md:opacity-50 pointer-events-none" 
      aria-hidden="true"
    />
  );
} 