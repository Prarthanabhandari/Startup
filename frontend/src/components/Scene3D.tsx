import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleCloud from './ParticleCloud';
import FloatingScreens from './FloatingScreens';

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[650px] lg:h-[750px] relative">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full bg-transparent"
      >
        <Suspense fallback={null}>
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <pointLight position={[-10, -10, 10]} intensity={1.0} color="#a855f7" />
          <directionalLight position={[0, 5, 5]} intensity={1.2} />

          {/* Interactive 3D Mockups */}
          <FloatingScreens />

          {/* Background Space Dust */}
          <ParticleCloud count={1500} />

          {/* Orbit Controls with limited drag capability to avoid flipping screen completely upside down */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 6}
            rotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>

      {/* Floating Interactive Badge overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2 text-xs font-semibold text-slate-300 pointer-events-none select-none animate-pulse shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
        <span>Drag to Orbit • Click Screen Links</span>
      </div>
    </div>
  );
}
