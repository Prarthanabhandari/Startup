import { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  BarChart3,
  Star
} from 'lucide-react';

export interface ProjectCardData {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  metricLabel?: string;
  metricValue?: string;
  metricTrend?: string;
  image?: string;
  tags: string[];
  theme: 'white' | 'dark' | 'gradient' | 'image' | 'chart';
  link: string;
}

const CAROUSEL_PROJECTS: ProjectCardData[] = [
  {
    id: 'liquid-edge',
    title: 'LiquidEdge WebGL',
    category: 'Fintech & Trading',
    subtitle: 'High-frequency WebGL trading terminal with sub-10ms render latency.',
    badge: 'LIVE PLATFORM',
    badgeColor: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/25',
    metricLabel: 'Render Latency',
    metricValue: '8.4ms',
    metricTrend: '+62% throughput',
    tags: ['React 19', 'WebGL 60FPS'],
    theme: 'chart',
    link: '/work',
  },
  {
    id: 'startup-engine',
    title: 'VOXOR Spatial Engine',
    category: '3D Web Experience',
    subtitle: 'Physics-driven spatial 3D studio architecture and canvas shaders.',
    badge: '3D SPATIAL',
    badgeColor: 'bg-brand-primary/15 text-indigo-700 border-brand-primary/25',
    image: '/projects/startup-preview.jpg',
    tags: ['Babylon.js', 'Shader Art'],
    theme: 'image',
    link: '/work',
  },
  {
    id: 'bookverse',
    title: 'BookVerse Platform',
    category: 'Full-Stack Ecosystem',
    subtitle: 'Decentralized literary review platform with real-time sync.',
    badge: 'FULL-STACK',
    badgeColor: 'bg-sky-500/15 text-sky-700 border-sky-500/25',
    image: '/projects/bookverse-preview.jpg',
    metricLabel: 'Active Readers',
    metricValue: '48.2k',
    metricTrend: '99.98% uptime',
    tags: ['Next.js', 'PostgreSQL'],
    theme: 'white',
    link: '/work',
  },
  {
    id: 'nlp-engine',
    title: 'Autonomous AI Agents',
    category: 'Artificial Intelligence',
    subtitle: 'RAG knowledge engines and multi-agent workflow orchestration.',
    badge: 'AI & NLP',
    badgeColor: 'bg-purple-500/15 text-purple-700 border-purple-500/25',
    image: '/projects/nlp-preview.jpg',
    metricLabel: 'Inference Speed',
    metricValue: '420 tok/s',
    metricTrend: 'Zero Hallucination',
    tags: ['FastAPI', 'Vector Embeddings'],
    theme: 'white',
    link: '/work',
  },
  {
    id: 'dark-strategy',
    title: 'Enterprise Architecture',
    category: 'Core Strategy & Code',
    subtitle: 'Combining 3D spatial computing, strict TypeScript, and high-scale SaaS pipelines.',
    badge: 'ARCHITECTURE',
    badgeColor: 'bg-white/20 text-white border-white/30',
    metricLabel: 'Scale Capacity',
    metricValue: '520k+',
    metricTrend: 'Multi-region cluster',
    tags: ['Docker', 'Kubernetes'],
    theme: 'dark',
    link: '/services',
  },
  {
    id: 'design-system',
    title: 'Claymorphism Tokens',
    category: 'UI/UX Design Systems',
    subtitle: 'WCAG 2.1 compliant pastel clay cards, kinetic gestures & micro-interactions.',
    badge: 'DESIGN SYSTEM',
    badgeColor: 'bg-amber-500/15 text-amber-700 border-amber-500/25',
    image: '/images/contact-bg.jpg',
    tags: ['Figma Tokens', 'Fluid Motion'],
    theme: 'image',
    link: '/work',
  },
  {
    id: 'saas-cloud',
    title: 'Nebula Cloud Orchestrator',
    category: 'Cloud Infrastructure',
    subtitle: 'Autonomous distributed server monitoring and dynamic load routing.',
    badge: 'HIGH SCALE',
    badgeColor: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/25',
    metricLabel: 'Monthly Events',
    metricValue: '1.4B+',
    metricTrend: '100% failover',
    tags: ['GraphQL', 'WebSockets'],
    theme: 'chart',
    link: '/work',
  },
  {
    id: 'mobile-runtime',
    title: 'Cross-Platform Native',
    category: 'Mobile Applications',
    subtitle: 'Seamless iOS & Android native device bridging with 60 FPS gesture fluidics.',
    badge: 'MOBILE CORE',
    badgeColor: 'bg-pink-500/15 text-pink-700 border-pink-500/25',
    metricLabel: 'FPS Rate',
    metricValue: '60 FPS',
    metricTrend: 'Zero dropped frames',
    tags: ['React Native', 'Capacitor'],
    theme: 'white',
    link: '/services',
  },
];

export default function Curved3DCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  const totalCards = CAROUSEL_PROJECTS.length;
  // Speed in card units per millisecond (smooth, continuous orbit)
  const AUTO_SCROLL_SPEED = 0.00020;

  // Continuous auto-scroll loop
  const animate = useCallback((timestamp: number) => {
    if (lastTimeRef.current !== null && !isHovered && !isDragging) {
      const delta = timestamp - lastTimeRef.current;
      setScrollProgress((prev) => (prev + delta * AUTO_SCROLL_SPEED) % totalCards);
    }
    lastTimeRef.current = timestamp;
    animFrameIdRef.current = requestAnimationFrame(animate);
  }, [isHovered, isDragging, totalCards]);

  useEffect(() => {
    animFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [animate]);

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartScroll.current = scrollProgress;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX.current;
    // 300px drag moves 1 full card
    const cardOffset = -diff / 300;
    let newProgress = (dragStartScroll.current + cardOffset) % totalCards;
    if (newProgress < 0) newProgress += totalCards;
    setScrollProgress(newProgress);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePrev = () => {
    setScrollProgress((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setScrollProgress((prev) => (prev + 1) % totalCards);
  };

  const handleCardClick = (cardIndex: number) => {
    setScrollProgress(cardIndex);
  };

  return (
    <div className="w-full relative select-none overflow-hidden">
      
      {/* 3D Curved Panorama Stage Viewport (Compact Height to fit in 1 screen) */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
        className="w-full h-[320px] sm:h-[350px] md:h-[365px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        
        {/* Soft Ambient Depth Background Lights */}
        <div className="absolute w-[500px] h-[220px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none -translate-y-4" />
        <div className="absolute w-[400px] h-[200px] bg-brand-secondary/10 rounded-full blur-[70px] pointer-events-none translate-y-4" />

        {/* The 3D Curved Cards Track */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {CAROUSEL_PROJECTS.map((project, idx) => {
            // Shortest angular offset relative to current scrollProgress
            let offset = idx - scrollProgress;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            // Only render cards within visible arc
            const isVisible = Math.abs(offset) < 3.8;
            if (!isVisible) return null;

            // 3D Cylindrical Curved Geometry Math:
            // Arc spacing: 300px horizontal displacement per card unit
            // Card width is 245px, leaving a clear, visible ~55px distance between cards!
            const x = offset * 295;
            
            // Y-Rotation: Facing inward along the cylinder
            const rotateY = -offset * 14;

            // Z-Translation: Parabolic depth curve (center closest Z=0, edges recede into -Z)
            const z = -Math.pow(Math.abs(offset), 1.85) * 52;

            // Scale & Opacity falloff
            const scale = Math.max(0.82, 1 - Math.abs(offset) * 0.075);
            const opacity = Math.max(0.25, 1 - Math.pow(Math.abs(offset) / 3.6, 2));

            // Z-Index for stacking order
            const zIndex = Math.round(100 - Math.abs(offset) * 15);

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(idx)}
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: 'preserve-3d',
                  transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                }}
                className="absolute w-[228px] sm:w-[245px] h-[290px] sm:h-[315px] select-none rounded-[24px] p-4 flex flex-col justify-between text-left transition-shadow duration-300 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_45px_-6px_rgba(99,102,241,0.2)] clay-card cursor-pointer border border-white/95"
              >
                {/* ---------------- CARD INNER CONTENT (Based on Theme) ---------------- */}

                {/* THEME 1: DARK GLASS CARD */}
                {project.theme === 'dark' && (
                  <div className="absolute inset-0 rounded-[24px] bg-slate-900 text-white p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-primary/30 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-2.5 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Cpu className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black tracking-tight leading-tight font-sans">
                        {project.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 leading-snug font-medium line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 relative z-10 pt-3 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-slate-400 uppercase">{project.metricLabel}</span>
                        <span className="text-base font-black font-mono text-white">{project.metricValue}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((t) => (
                          <span key={t} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* THEME 2: IMAGE PREVIEW CARD */}
                {project.theme === 'image' && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Sparkles className="w-3 h-3 text-brand-primary" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                    </div>

                    {/* Image Box */}
                    <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden relative shadow-xs border border-slate-200/80 group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-md">
                        <span>{project.category}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-white/80" />
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* THEME 3: CHART / ANALYTICS UI CARD */}
                {project.theme === 'chart' && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <BarChart3 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                    </div>

                    {/* Stylized Metric Chart Graphic */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-slate-200/70 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-slate-400 uppercase">{project.metricLabel}</span>
                        <span className="text-[9px] font-mono font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {project.metricTrend}
                        </span>
                      </div>
                      <div className="text-xl font-black font-mono text-slate-900">
                        {project.metricValue}
                      </div>

                      {/* Mini Bar Sparklines */}
                      <div className="flex items-end justify-between h-8 gap-1 pt-0.5">
                        <span className="w-full bg-slate-200 rounded-t h-[40%]" />
                        <span className="w-full bg-slate-300 rounded-t h-[60%]" />
                        <span className="w-full bg-indigo-200 rounded-t h-[45%]" />
                        <span className="w-full bg-indigo-400 rounded-t h-[75%]" />
                        <span className="w-full bg-brand-primary rounded-t h-[90%]" />
                        <span className="w-full bg-emerald-500 rounded-t h-[100%]" />
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 font-medium leading-snug line-clamp-1">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* THEME 4: CLEAN WHITE SAAS CARD */}
                {project.theme === 'white' && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Layers className="w-3 h-3 text-sky-600" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Metric Box */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-0.5">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">{project.metricLabel}</div>
                      <div className="text-lg font-black font-mono text-slate-900 flex items-center justify-between">
                        <span>{project.metricValue}</span>
                        <span className="text-[9px] font-sans font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                          {project.metricTrend}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      {/* ---------------- CONTROLS & SOCIAL PROOF BADGE RIBBON ---------------- */}
      <div className="max-w-3xl mx-auto px-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
        
        {/* Navigation Arrow Scrub Controls */}
        <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
          <button
            type="button"
            onClick={handlePrev}
            className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500 px-1.5">
            Drag or Scroll to Orbit
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Rating & Social Proof Ribbon (Matching Reference Design) */}
        <div className="inline-flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
          <div className="flex items-center space-x-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-800 text-[11px]">Rated 4.9/5</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 text-[10.5px]">40+ Enterprise & Startup Missions</span>
        </div>

      </div>

    </div>
  );
}
