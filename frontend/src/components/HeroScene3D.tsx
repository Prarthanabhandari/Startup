import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface HeroScene3DProps {
  introState?: 'fullscreen' | 'transitioning' | 'completed';
  setIntroState?: (state: 'fullscreen' | 'transitioning' | 'completed') => void;
}

export default function HeroScene3D({ 
  introState = 'completed', 
  setIntroState 
}: HeroScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Manage body scroll locking ONLY during fullscreen intro stage
  useEffect(() => {
    if (introState === 'fullscreen') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introState]);

  // Transition timeout from transitioning to completed state
  useEffect(() => {
    if (introState === 'transitioning' && setIntroState) {
      const timer = setTimeout(() => {
        setIntroState('completed');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [introState, setIntroState]);

  // Fallback timer: ensure intro doesn't block user for more than 2.5s
  useEffect(() => {
    if (introState === 'fullscreen' && setIntroState) {
      const fallback = setTimeout(() => {
        setIntroState('transitioning');
      }, 2500);
      return () => clearTimeout(fallback);
    }
  }, [introState, setIntroState]);

  const handleVideoPlay = () => {
    setIsVideoLoaded(true);
    if (introState === 'fullscreen' && setIntroState) {
      setTimeout(() => {
        setIntroState('transitioning');
      }, 1200);
    }
  };

  const handleVideoEnded = () => {
    if (setIntroState) {
      setIntroState('completed');
    }
  };

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
  const mouseXSpring = useSpring(mousePos.x * 12, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(mousePos.y * 12, { stiffness: 120, damping: 25 });

  const handleContainerClick = () => {
    if (introState !== 'completed' && setIntroState) {
      setIntroState('completed');
    }
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full aspect-[16/9] max-w-[820px] flex items-center justify-center select-none"
    >
      {/* Loading Skeleton */}
      {!isVideoLoaded && (
        <div className={
          introState === 'fullscreen'
            ? "fixed inset-0 m-auto w-[85vw] max-w-[1000px] aspect-[16/9] bg-slate-50 flex items-center justify-center z-50 rounded-[24px] animate-pulse"
            : "absolute inset-0 bg-slate-50 border border-slate-200/50 rounded-[30px] flex items-center justify-center z-10 shadow-2xl animate-pulse"
        }>
          <div className="text-center space-y-3">
            <svg className="w-8 h-8 animate-spin text-brand-primary mx-auto" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Initializing 3D Pipeline...</p>
          </div>
        </div>
      )}

      {/* 3D Motion Video Container with Mouse Tilt & Layout Transition */}
      <motion.div
        layout
        transition={{ 
          type: "spring",
          stiffness: 30,
          damping: 16,
          mass: 1.2
        }}
        style={{
          rotateX: introState === 'completed' ? mouseYSpring : 0,
          rotateY: introState === 'completed' ? mouseXSpring : 0,
          transformStyle: 'preserve-3d',
        }}
        className={
          introState === 'fullscreen'
            ? "fixed inset-0 m-auto w-[88vw] max-w-[1000px] aspect-[16/9] z-50 rounded-[28px] overflow-hidden border-2 border-indigo-200/90 shadow-2xl bg-[#eceeef] cursor-pointer"
            : "w-full h-full rounded-[30px] overflow-hidden border-2 border-slate-300/80 hover:border-indigo-300 shadow-xl hover:shadow-2xl bg-[#eceeef] relative z-10 transition-colors"
        }
      >
        {/* Live Status Badge in Corner */}
        {introState !== 'fullscreen' && (
          <div className="absolute top-3.5 left-4 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-white shadow-xs pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[8.5px] font-bold tracking-widest uppercase text-slate-200">
              LIVE 3D PREVIEW
            </span>
          </div>
        )}

        <video
          ref={videoRef}
          src="/hero-motion.mp4"
          autoPlay
          loop
          muted
          playsInline
          onPlay={handleVideoPlay}
          onEnded={handleVideoEnded}
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover filter brightness-[0.98] scale-[1.03]"
        />
        
        {/* Subtle chromatic lens reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      </motion.div>
    </div>
  );
}
