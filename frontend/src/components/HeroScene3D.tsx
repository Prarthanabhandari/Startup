import { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface HeroScene3DProps {
  scrollYProgress?: MotionValue<number>;
  introState?: 'fullscreen' | 'transitioning' | 'completed';
  setIntroState?: (state: 'fullscreen' | 'transitioning' | 'completed') => void;
}

export default function HeroScene3D({ 
  scrollYProgress,
  introState = 'completed', 
  setIntroState 
}: HeroScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Monitor desktop screen size for responsive grid translation offsets
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Compute scroll-linked canvas translations directly inside the target video container
  const fallbackProgress = new MotionValue(0);
  const canvasX = useTransform(scrollYProgress || fallbackProgress, [0, 0.35], [isDesktop ? "18%" : "0%", "0%"]);
  const canvasScale = useTransform(scrollYProgress || fallbackProgress, [0, 0.35], [0.95, 1.05]);

  // Manage body scroll locking during fullscreen intro stage
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
      }, 2500); // 2.5s slow slide morph duration
      return () => clearTimeout(timer);
    }
  }, [introState, setIntroState]);

  // Fallback timer: force transition after 6 seconds if video fails to play/load/end
  useEffect(() => {
    if (introState === 'fullscreen' && setIntroState) {
      const fallback = setTimeout(() => {
        setIntroState('transitioning');
      }, 6000);
      return () => clearTimeout(fallback);
    }
  }, [introState, setIntroState]);

  const handleVideoPlay = () => {
    setIsVideoLoaded(true);
    if (introState === 'fullscreen' && setIntroState) {
      setTimeout(() => {
        setIntroState('transitioning');
      }, 1500); // Transition begins after 1.5 seconds of video playback
    }
  };

  const handleVideoEnded = () => {
    if (introState === 'fullscreen' && setIntroState) {
      setIntroState('transitioning');
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
  const mouseXSpring = useSpring(mousePos.x * 15, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(mousePos.y * 15, { stiffness: 120, damping: 25 });

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] max-w-[840px] flex items-center justify-center select-none"
    >
      {/* Loading Skeleton */}
      {!isVideoLoaded && (
        <div className={
          introState === 'fullscreen'
            ? "fixed inset-0 m-auto w-[85vw] max-w-[1000px] aspect-[16/9] bg-slate-50 flex items-center justify-center z-50 rounded-[24px] animate-pulse"
            : "absolute inset-0 bg-slate-50 border border-slate-200/50 rounded-[32px] flex items-center justify-center z-10 shadow-2xl animate-pulse"
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
          stiffness: 25,
          damping: 14,
          mass: 1.5
        }}
        style={{
          rotateX: introState === 'completed' ? mouseYSpring : 0,
          rotateY: introState === 'completed' ? mouseXSpring : 0,
          transformStyle: 'preserve-3d',
          x: introState === 'completed'
            ? canvasX
            : (introState === 'transitioning'
              ? (isDesktop ? "18%" : "0%")
              : 0),
          scale: introState === 'completed'
            ? canvasScale
            : (introState === 'transitioning'
              ? 0.95
              : 1),
        }}
        className={
          introState === 'fullscreen'
            ? "fixed inset-0 m-auto w-[85vw] max-w-[1000px] aspect-[16/9] z-50 rounded-[24px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#eceeef]"
            : introState === 'transitioning'
            ? "w-full h-full rounded-[32px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#eceeef] relative z-50"
            : "w-full h-full rounded-[32px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#eceeef] relative z-10"
        }
      >
        <video
          ref={videoRef}
          src="/hero-motion.mp4"
          autoPlay
          loop={false}
          muted
          playsInline
          onPlay={handleVideoPlay}
          onEnded={handleVideoEnded}
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover filter brightness-[0.98]"
        />
        
        {/* Subtle chromatic lens reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      </motion.div>
    </div>
  );
}
