import { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useSpring } from 'framer-motion';

interface HeroScene3DProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroScene3D({}: HeroScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Track mouse coordinates for 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // [-0.5, 0.5]
      const y = (e.clientY - top) / height - 0.5; // [-0.5, 0.5]
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spring physics for smooth tilt tracking
  const mouseXSpring = useSpring(mousePos.x * 15, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(mousePos.y * 15, { stiffness: 120, damping: 25 });

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] max-w-[840px] flex items-center justify-center select-none"
    >
      {/* Loading Skeleton */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-slate-50 border border-slate-200/50 rounded-[32px] flex items-center justify-center z-10 shadow-2xl animate-pulse">
          <div className="text-center space-y-3">
            <svg className="w-8 h-8 animate-spin text-brand-primary mx-auto" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Initializing 3D Pipeline...</p>
          </div>
        </div>
      )}

      {/* 3D Motion Video Container with Mouse Tilt */}
      <motion.div
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full rounded-[32px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#eceeef] relative"
      >
        <video
          ref={videoRef}
          src="/hero-motion.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover filter brightness-[0.98]"
        />
        
        {/* Subtle chromatic lens reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      </motion.div>
    </div>
  );
}
