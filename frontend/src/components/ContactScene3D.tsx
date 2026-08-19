import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MorphingMeshProps {
  intensity: number;
}

function MorphingMesh({ intensity }: MorphingMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Speed up rotation based on typing intensity
      const speedMultiplier = 1.0 + intensity * 0.4;
      meshRef.current.rotation.y = time * 0.25 * speedMultiplier;
      meshRef.current.rotation.x = time * 0.15 * speedMultiplier;
      
      // Morphing scale effect using sine wave
      const scaleOsc = 1.0 + Math.sin(time * 2.0 * speedMultiplier) * (0.05 + intensity * 0.015);
      meshRef.current.scale.setScalar(scaleOsc);
    }

    if (materialRef.current) {
      // Transition colors: Blue (idle) -> Purple (active/typing) -> Cyan (full input)
      const baseBlue = new THREE.Color('#3b82f6');
      const activePurple = new THREE.Color('#a855f7');
      const maxCyan = new THREE.Color('#06b6d4');

      let targetColor = baseBlue;
      if (intensity > 0 && intensity <= 10) {
        // Interpolate between Blue and Purple
        const ratio = intensity / 10;
        targetColor = baseBlue.clone().lerp(activePurple, ratio);
      } else if (intensity > 10) {
        // Interpolate between Purple and Cyan
        const ratio = Math.min(1.0, (intensity - 10) / 20);
        targetColor = activePurple.clone().lerp(maxCyan, ratio);
      }

      materialRef.current.color.lerp(targetColor, 0.1);
      materialRef.current.emissive.lerp(targetColor, 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* TorusKnot represents data strands and complexity */}
      <torusKnotGeometry args={[1.5, 0.45, 120, 16]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color="#3b82f6"
        roughness={0.1}
        metalness={0.9}
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.8}
        clearcoat={1.0}
      />
    </mesh>
  );
}

export default function ContactScene3D({ intensity }: MorphingMeshProps) {
  return (
    <div className="w-full h-full min-h-[300px] md:h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, 10]} intensity={1.0} color="#a855f7" />
        <directionalLight position={[0, 3, 3]} intensity={1.0} />

        <MorphingMesh intensity={intensity} />
      </Canvas>
    </div>
  );
}
