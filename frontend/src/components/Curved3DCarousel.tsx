import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  BarChart3,
  Star,
  ArrowRight
} from 'lucide-react';

export interface ServiceCardData {
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
  theme: 'white' | 'dark' | 'image' | 'chart';
  link: string;
}

export type ProjectCardData = ServiceCardData;

const CAROUSEL_SERVICES: ServiceCardData[] = [
  {
    id: 'web-engineering',
    title: 'Full-Stack Web Engineering',
    category: 'Web Platforms',
    subtitle: 'Blazing-fast Single Page Apps and Server-Driven sites with sub-80ms TTFB.',
    badge: 'CORE CAPABILITY',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    metricLabel: 'TTFB Latency',
    metricValue: '< 75ms',
    metricTrend: 'Lighthouse 99+',
    tags: ['React 19', 'TypeScript', 'Next.js'],
    theme: 'chart',
    link: '#web-apps',
  },
  {
    id: 'spatial-3d',
    title: '3D Spatial & WebGL Computing',
    category: 'Spatial 3D',
    subtitle: 'Physics-driven 3D environments, particle systems, and ray-traced materials.',
    badge: 'IMMERSIVE 3D',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    image: '/projects/startup-preview.jpg',
    tags: ['Babylon.js', 'Three.js', 'WebGL / WebGPU'],
    theme: 'image',
    link: '#web-apps',
  },
  {
    id: 'database-systems',
    title: 'Relational Database Architecture',
    category: 'PostgreSQL Cloud',
    subtitle: 'Normalized relational schemas, connection pooling, and B-tree indexing.',
    badge: 'POSTGRESQL 15',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    metricLabel: 'Query Speed',
    metricValue: '< 5ms',
    metricTrend: '99.99% Uptime SLA',
    tags: ['PostgreSQL', 'UUID v4', 'Connection Pool'],
    theme: 'chart',
    link: '#database-systems',
  },
  {
    id: 'saas-cloud',
    title: 'Enterprise SaaS Platforms',
    category: 'High-Scale Cloud',
    subtitle: 'Multi-tenant database architectures, rate-limited APIs, and billing engines.',
    badge: 'HIGH SCALE',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    metricLabel: 'Scale Capacity',
    metricValue: '500k+ users',
    metricTrend: '99.99% Uptime SLA',
    tags: ['Node.js', 'PostgreSQL', 'Redis'],
    theme: 'chart',
    link: '#backend-apis',
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Apps',
    category: 'Mobile Systems',
    subtitle: 'High-fidelity iOS & Android applications with native device bridging and fluid 120Hz gestures.',
    badge: 'MOBILE CORE',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    metricLabel: 'Gesture Fluidity',
    metricValue: '120 Hz',
    metricTrend: 'Zero dropped frames',
    tags: ['React Native', 'Capacitor', 'iOS / Android'],
    theme: 'white',
    link: '#mobile-apps',
  },
  {
    id: 'design-systems',
    title: 'Claymorphic UI/UX Systems',
    category: 'Design Engineering',
    subtitle: 'Tactile pastel design tokens, accessible contrast, micro-interactions, and Figma libraries.',
    badge: 'DESIGN TOKENS',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    image: '/images/contact-bg.jpg',
    tags: ['Figma Tokens', 'Fluid Motion', 'WCAG AAA'],
    theme: 'image',
    link: '#design-systems',
  },
  {
    id: 'api-architecture',
    title: 'High-Throughput APIs & Microservices',
    category: 'Backend Architecture',
    subtitle: 'Rate-limited REST and GraphQL endpoints, event-driven streaming, and Zero-Trust auth.',
    badge: 'API PLATFORMS',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    metricLabel: 'Peak Throughput',
    metricValue: '120k req/s',
    metricTrend: 'Sub-15ms P99',
    tags: ['GraphQL', 'gRPC', 'PostgreSQL'],
    theme: 'chart',
    link: '#backend-apis',
  },
  {
    id: 'devops-infra',
    title: 'DevOps & Zero-Trust Cloud Infra',
    category: 'Cloud Infrastructure',
    subtitle: 'Zero-downtime automated deployment pipelines, container orchestration, and security audits.',
    badge: 'DEV-OPS INFRA',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    metricLabel: 'Deployment Velocity',
    metricValue: '< 3 mins',
    metricTrend: 'Zero-Downtime Rollout',
    tags: ['Docker', 'Kubernetes', 'CI/CD'],
    theme: 'white',
    link: '#performance-audit',
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

  const totalCards = CAROUSEL_SERVICES.length;
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

  const handleNavigate = (e: React.MouseEvent, targetLink: string) => {
    e.stopPropagation();
    const id = targetLink.startsWith('#') ? targetLink.substring(1) : targetLink;
    const targetElement =
      document.getElementById(id) ||
      document.getElementById('services-catalog') ||
      document.getElementById('services');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
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
        className="w-full h-[330px] sm:h-[360px] md:h-[375px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        
        {/* Soft Ambient Depth Background Lights */}
        <div className="absolute w-[600px] h-[240px] bg-purple-300/20 rounded-full blur-[90px] pointer-events-none -translate-y-2" />
        <div className="absolute w-[450px] h-[200px] bg-violet-300/15 rounded-full blur-[80px] pointer-events-none translate-y-4" />

        {/* The 3D Curved Cards Track */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {CAROUSEL_SERVICES.map((project, idx) => {
            // Shortest angular offset relative to current scrollProgress
            let offset = idx - scrollProgress;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            // Only render cards within visible arc
            const isVisible = Math.abs(offset) < 3.8;
            if (!isVisible) return null;

            // 3D Cylindrical Curved Geometry Math:
            const x = offset * 295;
            const rotateY = -offset * 14;
            const z = -Math.pow(Math.abs(offset), 1.85) * 52;
            const scale = Math.max(0.82, 1 - Math.abs(offset) * 0.075);
            const opacity = Math.max(0.25, 1 - Math.pow(Math.abs(offset) / 3.6, 2));
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
                className="absolute w-[235px] sm:w-[250px] h-[300px] sm:h-[320px] select-none rounded-[28px] p-4 flex flex-col justify-between text-left transition-all duration-300 shadow-[0_14px_36px_-8px_rgba(168,85,247,0.18),0_4px_12px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_46px_-6px_rgba(168,85,247,0.32)] cursor-pointer border-2 border-purple-400/85 hover:border-purple-500 bg-white"
              >
                {/* ---------------- CARD INNER CONTENT (Based on Theme) ---------------- */}

                {/* THEME 1: DARK ROYAL LAVENDER CARD */}
                {project.theme === 'dark' && (
                  <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#1e1338] via-[#2a174a] to-[#1c1233] text-white p-5 flex flex-col justify-between overflow-hidden shadow-inner border border-purple-400/30">
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/25 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Cpu className="w-3.5 h-3.5 text-purple-300" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black tracking-tight leading-tight font-sans">
                        {project.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-purple-200/80 leading-snug font-medium line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 relative z-10 pt-2.5 border-t border-purple-900/60">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-purple-300/80 uppercase">{project.metricLabel}</span>
                        <span className="text-base font-black font-mono text-white">{project.metricValue}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((t) => (
                            <span key={t} className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-purple-900/70 text-purple-200 border border-purple-700/40">
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          onClick={(e) => handleNavigate(e, project.link)}
                          className="inline-flex items-center space-x-1 text-[9px] font-mono font-bold text-purple-300 hover:text-white transition-colors"
                        >
                          <span>Specs</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* THEME 2: IMAGE PREVIEW CARD */}
                {project.theme === 'image' && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                    </div>

                    {/* Image Box */}
                    <div className="w-full h-28 sm:h-32 rounded-2xl overflow-hidden relative shadow-xs border border-purple-100 group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-lg bg-purple-950/70 backdrop-blur-md border border-purple-300/20">
                        <span>{project.category}</span>
                        <a
                          href={project.link}
                          onClick={(e) => handleNavigate(e, project.link)}
                          className="hover:underline flex items-center space-x-0.5 text-purple-200 hover:text-white"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1 border-t border-purple-100/70">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 font-semibold border border-purple-100">
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
                        <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                    </div>

                    {/* Stylized Metric Chart Graphic in Lavender */}
                    <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-50/80 via-violet-50/30 to-white border border-purple-100 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-purple-900/60 uppercase">{project.metricLabel}</span>
                        <span className="text-[9px] font-mono font-bold text-purple-700 bg-purple-100/80 px-1.5 py-0.5 rounded-md border border-purple-200/80">
                          {project.metricTrend}
                        </span>
                      </div>
                      <div className="text-xl font-black font-mono text-slate-900">
                        {project.metricValue}
                      </div>

                      {/* Mini Bar Sparklines in Lavender Tones */}
                      <div className="flex items-end justify-between h-8 gap-1 pt-0.5">
                        <span className="w-full bg-purple-200/70 rounded-t h-[40%]" />
                        <span className="w-full bg-purple-300/80 rounded-t h-[60%]" />
                        <span className="w-full bg-purple-300 rounded-t h-[45%]" />
                        <span className="w-full bg-purple-400 rounded-t h-[75%]" />
                        <span className="w-full bg-purple-500 rounded-t h-[90%]" />
                        <span className="w-full bg-purple-600 rounded-t h-[100%]" />
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 font-medium leading-snug line-clamp-1">
                      {project.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-purple-100/70">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((t) => (
                          <span key={t} className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 font-semibold border border-purple-100">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        onClick={(e) => handleNavigate(e, project.link)}
                        className="inline-flex items-center space-x-0.5 text-[8.5px] font-mono font-bold text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        <span>Specs</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* THEME 4: CLEAN WHITE SAAS CARD WITH LAVENDER ACCENTS */}
                {project.theme === 'white' && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <Layers className="w-3.5 h-3.5 text-purple-600" />
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Metric Box */}
                    <div className="p-2.5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-0.5">
                      <div className="text-[9px] font-mono text-purple-900/60 uppercase">{project.metricLabel}</div>
                      <div className="text-lg font-black font-mono text-slate-900 flex items-center justify-between">
                        <span>{project.metricValue}</span>
                        <span className="text-[9px] font-sans font-bold text-purple-700 bg-purple-100/80 px-1.5 py-0.5 rounded-full border border-purple-200/70">
                          {project.metricTrend}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-purple-100/70">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((t) => (
                          <span key={t} className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 font-semibold border border-purple-100">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        onClick={(e) => handleNavigate(e, project.link)}
                        className="inline-flex items-center space-x-0.5 text-[8.5px] font-mono font-bold text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        <span>Specs</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      {/* ---------------- CONTROLS & SOCIAL PROOF BADGE RIBBON ---------------- */}
      <div className="max-w-4xl mx-auto px-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
        
        {/* Navigation Arrow Scrub Controls */}
        <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-100 shadow-xs">
          <button
            type="button"
            onClick={handlePrev}
            className="w-6 h-6 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Service"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-purple-900/60 px-1.5">
            Drag or Scroll to Orbit Services
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="w-6 h-6 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Service"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Rating & Social Proof Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center space-x-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-800 text-[11px]">SLA Guaranteed</span>
          <span className="text-purple-200">•</span>
          <span className="text-slate-500 text-[10.5px]">40+ Enterprise Deployments</span>
          <span className="text-purple-200">•</span>
          <Link to="/work" className="text-purple-600 hover:text-purple-800 hover:underline text-[10.5px] font-bold inline-flex items-center space-x-1">
            <span>View Client Case Studies</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
