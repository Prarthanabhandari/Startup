import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Maximize2 
} from 'lucide-react';
import type { PortfolioProject } from './WorkPortfolioGrid';
import { portfolioProjects } from './WorkPortfolioGrid';

interface Work3DCoverflowProps {
  onSelectProject?: (project: PortfolioProject) => void;
}

// Display title shortcuts for wide, architectural geometric typography (NEOTECH style)
const DISPLAY_TITLES: Record<string, string> = {
  'bookverse': 'BOOKVERSE',
  'startup-voxor': 'VOXOR 3D',
  'linguistic-chatbot': 'LINGUA NLP',
  'liquidedge-trading': 'LIQUIDEDGE',
  'chrono-atelier': 'CHRONO 3D',
  'nebula-orchestrator': 'NEBULA CLOUD',
  'atlas-spatial-wellness': 'ATLAS HEALTH',
  'naturals-salon-commerce': 'NATURALS',
};

export default function Work3DCoverflow({ onSelectProject }: Work3DCoverflowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const dragStartX = useRef(0);
  const total = portfolioProjects.length;

  // Window resize listener for responsive card distances
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic Rotation (Autoplay every 3.5s, pauses on hover / drag)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Mouse Drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    if (diff > 55) {
      handlePrev();
      setIsDragging(false);
    } else if (diff < -55) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handling for mobile
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 45) handlePrev();
    if (diff < -45) handleNext();
  };

  const activeProject = portfolioProjects[activeIndex];
  const activeLink = activeProject?.liveUrl || activeProject?.githubUrl || null;

  // Responsive horizontal spacing ensuring clean visible distance between cards
  const stepX = windowWidth < 640 ? 270 : windowWidth < 1024 ? 350 : 430;

  return (
    <div 
      className="w-full my-6 sm:my-12 select-none font-sans overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Stage - Light & Airy (Not Dark) */}
      <div 
        className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1300px', transformStyle: 'preserve-3d' }}
      >
        {portfolioProjects.map((project, idx) => {
          // Circular offset for continuous wrap-around rotation
          const rawOffset = idx - activeIndex;
          let offset = ((rawOffset % total) + total) % total;
          if (offset > total / 2) offset -= total;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Trigonometric circular spacing with clear distance between containers
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 30;

          if (isCenter) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (offset === -1) {
            translateX = -stepX;
            translateZ = -130;
            rotateY = 30;
            scale = 0.88;
            opacity = 0.85;
            zIndex = 20;
          } else if (offset === 1) {
            translateX = stepX;
            translateZ = -130;
            rotateY = -30;
            scale = 0.88;
            opacity = 0.85;
            zIndex = 20;
          } else if (offset === -2) {
            translateX = -stepX * 1.85;
            translateZ = -260;
            rotateY = 40;
            scale = 0.74;
            opacity = 0.45;
            zIndex = 10;
          } else if (offset === 2) {
            translateX = stepX * 1.85;
            translateZ = -260;
            rotateY = -40;
            scale = 0.74;
            opacity = 0.45;
            zIndex = 10;
          }

          const displayTitle = DISPLAY_TITLES[project.id] || project.title.toUpperCase();

          return (
            <motion.div
              key={project.id}
              onClick={() => {
                if (!isCenter) {
                  setActiveIndex(idx);
                } else if (onSelectProject) {
                  onSelectProject(project);
                }
              }}
              className={`absolute w-[280px] sm:w-[330px] md:w-[370px] h-[330px] sm:h-[390px] md:h-[440px] rounded-[32px] overflow-hidden transition-all duration-700 ease-out cursor-pointer ${
                isCenter 
                  ? 'border-2 border-purple-400/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_35px_rgba(168,85,247,0.2)]' 
                  : 'border border-white/80 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] hover:brightness-105'
              }`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Full Bleed Tactile Card Artwork */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />

              {/* Gentle Light Vignette - Light & Airy (Not Dark) */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isCenter 
                    ? 'bg-gradient-to-t from-black/60 via-black/20 to-black/10' 
                    : 'bg-black/20 hover:bg-black/10'
                }`} 
              />

              {/* Extended Display Sans Logotype Across Active Center Card (NEOTECH Style) */}
              <AnimatePresence>
                {isCenter && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 pointer-events-none"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[0.16em] uppercase font-sans drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                      {displayTitle}
                    </h3>

                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12, duration: 0.25 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectProject) onSelectProject(project);
                      }}
                      className="mt-4 px-6 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-[11px] font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all pointer-events-auto cursor-pointer"
                    >
                      VIEW CASE
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand Icon on Right Flanking Card (As shown in reference image) */}
              {offset === 1 && (
                <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
                  <div className="w-10 h-10 rounded-2xl bg-white/80 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Floating Control Bar - Light & Premium (Not Heavy Dark) */}
      <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-10 flex items-center justify-between">
        
        {/* Left: Visit Site Pill Button */}
        <div>
          {activeLink ? (
            <a
              href={activeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/95 hover:bg-white text-slate-900 text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 border border-slate-200/80 group"
            >
              <span>↗ Visit site</span>
            </a>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectProject && activeProject) onSelectProject(activeProject);
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/95 hover:bg-white text-slate-900 text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 border border-slate-200/80"
            >
              <span>↗ View case</span>
            </button>
          )}
        </div>

        {/* Center: Neon Lime Navigation Capsule */}
        <div className="flex items-center space-x-2 p-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-md backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="w-9 h-9 rounded-full bg-[#ccff00] text-black hover:bg-[#b8e600] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="w-9 h-9 rounded-full bg-[#ccff00] text-black hover:bg-[#b8e600] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            aria-label="Next project"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Right: Expand / Spec Action Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onSelectProject && activeProject) onSelectProject(activeProject);
            }}
            className="w-12 h-12 rounded-2xl bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg border border-slate-200/80"
            title="Inspect project specification"
            aria-label="Inspect project"
          >
            <Maximize2 className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
