'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
}