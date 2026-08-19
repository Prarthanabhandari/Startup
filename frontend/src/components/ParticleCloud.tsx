import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleCloudProps {
  count?: number;
}

export default function ParticleCloud({ count = 1200 }: ParticleCloudProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random positions and colors for particles
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const blueColor = new THREE.Color('#3b82f6');
    const purpleColor = new THREE.Color('#a855f7');
    const cyanColor = new THREE.Color('#06b6d4');

    for (let i = 0; i < count; i++) {
      // Position particles in a spherical/ellipsoid cloud
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 25; // radius with distribution density towards center

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Mix colors based on distance from center
      const distPercent = r / 25;
      let finalColor = blueColor;
      if (distPercent < 0.4) {
        finalColor = cyanColor;
      } else if (distPercent < 0.8) {
        finalColor = purpleColor;
      }

      cols[i * 3] = finalColor.r;
      cols[i * 3 + 1] = finalColor.g;
      cols[i * 3 + 2] = finalColor.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      // Slow constant ambient rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
