import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { Globe, Shield, Zap, Sparkles, Terminal, Code, Heart, Eye } from 'lucide-react';

export default function FloatingScreens() {
  const mainScreenRef = useRef<THREE.Group>(null);
  const leftScreenRef = useRef<THREE.Group>(null);
  const rightScreenRef = useRef<THREE.Group>(null);

  const [mainHovered, setMainHovered] = useState(false);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  useFrame((state) => {
    const pointer = state.pointer; // [-1, 1] range

    // Main central screen animations (gentle floating + pointer tracking)
    if (mainScreenRef.current) {
      const hoverFactor = mainHovered ? 1.1 : 1.0;
      const targetY = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.15;
      mainScreenRef.current.position.y = THREE.MathUtils.lerp(mainScreenRef.current.position.y, targetY, 0.05);

      // Tilt slightly towards cursor
      const targetRotX = -pointer.y * 0.15;
      const targetRotY = pointer.x * 0.2;
      mainScreenRef.current.rotation.x = THREE.MathUtils.lerp(mainScreenRef.current.rotation.x, targetRotX, 0.05);
      mainScreenRef.current.rotation.y = THREE.MathUtils.lerp(mainScreenRef.current.rotation.y, targetRotY, 0.05);
      mainScreenRef.current.scale.setScalar(THREE.MathUtils.lerp(mainScreenRef.current.scale.x, hoverFactor, 0.1));
    }

    // Left Tablet animation (separate floating speed & offset)
    if (leftScreenRef.current) {
      const hoverFactor = leftHovered ? 0.85 : 0.8;
      const targetY = -0.8 + Math.sin(state.clock.getElapsedTime() * 0.9 + 1.5) * 0.12;
      leftScreenRef.current.position.y = THREE.MathUtils.lerp(leftScreenRef.current.position.y, targetY, 0.05);

      const targetRotX = 0.1 - pointer.y * 0.1;
      const targetRotY = 0.35 + pointer.x * 0.1;
      leftScreenRef.current.rotation.x = THREE.MathUtils.lerp(leftScreenRef.current.rotation.x, targetRotX, 0.05);
      leftScreenRef.current.rotation.y = THREE.MathUtils.lerp(leftScreenRef.current.rotation.y, targetRotY, 0.05);
      leftScreenRef.current.scale.setScalar(THREE.MathUtils.lerp(leftScreenRef.current.scale.x, hoverFactor, 0.1));
    }

    // Right Phone animation
    if (rightScreenRef.current) {
      const hoverFactor = rightHovered ? 0.75 : 0.7;
      const targetY = -0.6 + Math.sin(state.clock.getElapsedTime() * 1.5 + 3.0) * 0.15;
      rightScreenRef.current.position.y = THREE.MathUtils.lerp(rightScreenRef.current.position.y, targetY, 0.05);

      const targetRotX = 0.05 - pointer.y * 0.1;
      const targetRotY = -0.35 + pointer.x * 0.1;
      rightScreenRef.current.rotation.x = THREE.MathUtils.lerp(rightScreenRef.current.rotation.x, targetRotX, 0.05);
      rightScreenRef.current.rotation.y = THREE.MathUtils.lerp(rightScreenRef.current.rotation.y, targetRotY, 0.05);
      rightScreenRef.current.scale.setScalar(THREE.MathUtils.lerp(rightScreenRef.current.scale.x, hoverFactor, 0.1));
    }
  });

  return (
    <group>
      {/* ================= MAIN LAPTOP / DESKTOP SCREEN ================= */}
      <group
        ref={mainScreenRef}
        position={[0, 0, 0]}
        onPointerOver={() => setMainHovered(true)}
        onPointerOut={() => setMainHovered(false)}
      >
        {/* Sleek Bezel Mesh */}
        <RoundedBox args={[5.2, 3.4, 0.15]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#111827"
            roughness={0.2}
            metalness={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
        
        {/* Screen Stand (back plate support representation) */}
        <mesh position={[0, -1.8, -0.4]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[1.5, 0.8, 0.1]} />
          <meshPhysicalMaterial color="#374151" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, -2.1, -0.3]}>
          <boxGeometry args={[2.0, 0.1, 1.2]} />
          <meshPhysicalMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Embedded Interactive HTML Window */}
        <Html
          transform
          distanceFactor={4.5}
          position={[0, 0, 0.08]}
          occlude
        >
          <div className="w-[840px] h-[540px] rounded-lg overflow-hidden glass border border-white/10 flex flex-col shadow-2xl text-left select-none">
            {/* Window Titlebar */}
            <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-950/50 px-4 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-white/5 w-[350px] justify-center">
                <Globe className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>nexus3d.io/custom-dev-studio</span>
              </div>
              <div className="flex space-x-2 text-slate-400">
                <Eye className="w-4 h-4" />
                <span className="text-xs">Live Preview</span>
              </div>
            </div>

            {/* Split Screen Content */}
            <div className="flex-1 flex overflow-hidden bg-slate-950/70 backdrop-blur-md">
              {/* Left Code Editor Panel */}
              <div className="w-1/2 border-r border-white/5 flex flex-col font-mono text-sm">
                <div className="bg-slate-950/80 px-4 py-2 border-b border-white/5 flex items-center text-xs text-blue-400">
                  <Terminal className="w-3.5 h-3.5 mr-2" />
                  <span>DeveloperWorkspace.tsx</span>
                </div>
                <div className="flex-1 p-4 overflow-y-auto leading-relaxed text-blue-300/90 text-xs">
                  <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-amber-300">'react'</span>;</p>
                  <p><span className="text-purple-400">import</span> &#123; Canvas &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">'@react-three/fiber'</span>;</p>
                  <p className="text-slate-500 mt-2">// The core of our 3D custom experiences</p>
                  <p><span className="text-purple-400">export default function</span> <span className="text-emerald-400">InteractiveStudio</span>() &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8 text-indigo-400">&lt;<span className="text-pink-400">div</span> className=<span className="text-amber-300">"hero-canvas"</span>&gt;</p>
                  <p className="pl-12 text-blue-400">&lt;<span className="text-yellow-400">Canvas</span> camera=&#123;&#123; position: [0, 0, 5] &#125;&#125;&gt;</p>
                  <p className="pl-16 text-yellow-400">&lt;<span className="text-emerald-400">ambientLight</span> intensity=&#123;0.5&#125; /&gt;</p>
                  <p className="pl-16 text-yellow-400">&lt;<span className="text-emerald-400">pointLight</span> position=&#123;[10, 10, 10]&#125; /&gt;</p>
                  <p className="pl-16 text-yellow-400">&lt;<span className="text-teal-400">StartupShowcase</span></p>
                  <p className="pl-20 text-teal-400">speed=&#123;1.5&#125;</p>
                  <p className="pl-20 text-teal-400">glow=&#123;<span className="text-purple-400">true</span>&#125;</p>
                  <p className="pl-20 text-teal-400">message=<span className="text-amber-300">"We Build The Web"</span></p>
                  <p className="pl-16 text-teal-400">/&gt;</p>
                  <p className="pl-12 text-blue-400">&lt;/<span className="text-yellow-400">Canvas</span>&gt;</p>
                  <p className="pl-8 text-indigo-400">&lt;/<span className="text-pink-400">div</span>&gt;</p>
                  <p className="pl-4">);</p>
                  <p>&#125;</p>
                </div>
                <div className="bg-blue-600/10 px-4 py-2 border-t border-white/5 flex justify-between items-center text-[10px] text-blue-400">
                  <span className="flex items-center"><Code className="w-3 h-3 mr-1" /> TypeScript React</span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Right Output Render Panel */}
              <div className="w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/80">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>NEXUS CREATIVE STUDIO</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
                    We Create Web Systems That Perform.
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Stunning 3D graphics, seamless interactions, and sub-second load times. We bridge the gap between heavy design and lightweight execution.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-200 font-medium">Render Speeds</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono font-bold">60 FPS</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-200 font-medium">Responsive Score</span>
                    </div>
                    <span className="text-xs text-blue-400 font-mono font-bold">100/100</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                  <span className="flex items-center">Made with <Heart className="w-3 h-3 text-rose-500 mx-1" /> by Nexus3D</span>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1.5 rounded text-xs transition-colors">
                    Get Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </group>

      {/* ================= LEFT FLOATING TABLET ================= */}
      <group
        ref={leftScreenRef}
        position={[-3.6, -0.6, 1.2]}
        rotation={[0.1, 0.4, -0.05]}
        scale={0.8}
        onPointerOver={() => setLeftHovered(true)}
        onPointerOut={() => setLeftHovered(false)}
      >
        <RoundedBox args={[3.0, 4.2, 0.1]} radius={0.06} smoothness={4}>
          <meshPhysicalMaterial
            color="#1e293b"
            roughness={0.15}
            metalness={0.9}
          />
        </RoundedBox>
        
        <Html
          transform
          distanceFactor={4.5}
          position={[0, 0, 0.06]}
          occlude
        >
          <div className="w-[450px] h-[630px] rounded-lg overflow-hidden glass border border-white/10 flex flex-col shadow-2xl text-left select-none">
            {/* Status Bar */}
            <div className="bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-white/5 text-[10px] text-slate-400">
              <span className="font-semibold">N3D Device</span>
              <div className="flex space-x-1">
                <span>5G</span>
                <span>87%</span>
              </div>
            </div>

            {/* Content Mockup: Core Services */}
            <div className="flex-1 p-5 bg-slate-900/90 overflow-y-auto space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Interactive Features</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">We build highly immersive web experiences that retain client interest.</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                    <span className="text-purple-400 text-xs font-semibold block mb-1">E-Commerce in 3D</span>
                    <span className="text-[10px] text-slate-300 leading-normal block">Let users inspect products in complete 3D models before making checkouts.</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                    <span className="text-blue-400 text-xs font-semibold block mb-1">Web GL Dashboards</span>
                    <span className="text-[10px] text-slate-300 leading-normal block">Real-time data telemetry rendered as high-performance WebGL chart systems.</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                    <span className="text-cyan-400 text-xs font-semibold block mb-1">Creative Portfolios</span>
                    <span className="text-[10px] text-slate-300 leading-normal block">Showcase artistic assets, interior designs, or real estate in virtual spaces.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-center">
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 rounded text-xs transition-colors">
                  Explore Systems
                </button>
              </div>
            </div>
          </div>
        </Html>
      </group>

      {/* ================= RIGHT FLOATING MOBILE PHONE ================= */}
      <group
        ref={rightScreenRef}
        position={[3.6, -0.4, 1.3]}
        rotation={[0.08, -0.4, 0.05]}
        scale={0.7}
        onPointerOver={() => setRightHovered(true)}
        onPointerOut={() => setRightHovered(false)}
      >
        <RoundedBox args={[2.2, 4.4, 0.1]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#0f172a"
            roughness={0.1}
            metalness={0.9}
          />
        </RoundedBox>
        
        <Html
          transform
          distanceFactor={4.5}
          position={[0, 0, 0.06]}
          occlude
        >
          <div className="w-[330px] h-[660px] rounded-2xl overflow-hidden glass border border-white/15 flex flex-col shadow-2xl text-left select-none">
            {/* Status bar */}
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-white/5 text-[10px] text-slate-400">
              <span className="font-bold text-xs text-white bg-slate-800 px-2 py-0.5 rounded-full">09:41</span>
              <div className="w-20 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2 border border-slate-800"></div>
              <div className="flex space-x-1">
                <span>WiFi</span>
                <span>100%</span>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex-1 p-5 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col justify-between">
              <div className="text-center space-y-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h5 className="text-md font-bold text-white">Sub-second Speed</h5>
                  <p className="text-[10px] text-slate-400 mt-1 px-2">Fully optimized layouts loading in milliseconds on any mobile handset.</p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Performance</span>
                    <span className="text-emerald-400 font-bold font-mono">99%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[99%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 mt-2">
                    <span>SEO Score</span>
                    <span className="text-blue-400 font-bold font-mono">100%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[100%]"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-center text-[9px] text-slate-500">
                  Secure checkout powered by Nexus Cloud
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2.5 rounded-lg text-xs transition-all shadow-md shadow-blue-500/15">
                  Launch Project
                </button>
              </div>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}
