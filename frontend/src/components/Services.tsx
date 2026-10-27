import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Laptop,
  Cpu,
  Smartphone,
  Cloud,
  Palette,
  LineChart,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ServiceItemData {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  fullDesc: string;
  deliverables: string[];
  specs: string[];
  techStack: string[];
  icon: any;
  colorTheme: {
    bgGradient: string;
    borderAccent: string;
    pillBg: string;
    pillText: string;
    glowColor: string;
    iconColor: string;
    cardBorder: string;
    hoverBorder: string;
    topRailGradient: string;
    cornerColor: string;
    shadowGlow: string;
  };
  visualType: 'web' | 'ai' | 'mobile' | 'saas' | 'design' | 'strategy';
}

function ServiceCard({
  service,
}: {
  service: ServiceItemData;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // 3D Mouse Tilt Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const { number, badge, title, subtitle, description, deliverables, techStack, colorTheme, visualType } = service;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate('/services/' + service.id)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`clay-card bg-white p-6 rounded-[32px] flex flex-col justify-between text-left relative overflow-hidden group shadow-xl transition-all duration-300 cursor-pointer select-none border-2 ${colorTheme.cardBorder} ${colorTheme.hoverBorder} ${colorTheme.shadowGlow} hover:-translate-y-1.5`}
    >
      {/* Top Luminous Gradient Light-Rail */}
      <div className={`absolute top-0 left-8 right-8 h-[3.5px] rounded-b-full bg-gradient-to-r ${colorTheme.topRailGradient} opacity-80 group-hover:opacity-100 group-hover:h-[4.5px] transition-all duration-300`} />

      {/* Subtle Corner Architectural Viewfinder Brackets */}
      <div className={`absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 rounded-tl-[2px] transition-opacity duration-300 opacity-40 group-hover:opacity-90 ${colorTheme.cornerColor}`} />
      <div className={`absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 rounded-tr-[2px] transition-opacity duration-300 opacity-40 group-hover:opacity-90 ${colorTheme.cornerColor}`} />
      <div className={`absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 rounded-bl-[2px] transition-opacity duration-300 opacity-40 group-hover:opacity-90 ${colorTheme.cornerColor}`} />
      <div className={`absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 rounded-br-[2px] transition-opacity duration-300 opacity-40 group-hover:opacity-90 ${colorTheme.cornerColor}`} />

      {/* Ambient Radial Hover Aura inside the card */}
      <div
        className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: colorTheme.glowColor }}
      />
      {/* Dynamic 3D depth layer */}
      <div style={{ transform: 'translateZ(22px)', transformStyle: 'preserve-3d' }} className="flex flex-col justify-between h-full space-y-4">
        
        <div>
          {/* Top metadata row */}
          <div className="flex items-center justify-between mb-3.5">
            <span className="font-mono text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              {number}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider font-mono shadow-xs border ${colorTheme.pillBg} ${colorTheme.pillText} ${colorTheme.borderAccent}`}
            >
              {badge}
            </span>
          </div>

          {/* Architectural 3D Mini-Viewport Canvas */}
          <div
            className={`relative h-[155px] w-full rounded-2xl overflow-hidden border border-slate-200/80 p-3 flex flex-col items-center justify-center transition-all duration-500 ${colorTheme.bgGradient}`}
            style={{ transform: 'translateZ(14px)' }}
          >
            {/* Subtle inner hairline framing */}
            <div className="absolute inset-1.5 rounded-xl border border-white/60 pointer-events-none" />

            {/* Ambient Glow */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40 pointer-events-none"
              style={{ backgroundColor: colorTheme.glowColor }}
            />

            {/* Visual Type 1: Premium Website Design */}
            {visualType === 'web' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md p-2.5 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1.5">
                      <Laptop className="w-3 h-3 text-brand-primary" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">3D WebGL Canvas</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-emerald-600">120 FPS</span>
                  </div>

                  {/* Wireframe Viewport Preview */}
                  <div className="grid grid-cols-3 gap-1 py-1">
                    <div className="h-6 rounded bg-indigo-50 border border-indigo-200/60 flex items-center justify-center">
                      <span className="text-[6.5px] font-mono font-bold text-indigo-600">Shader</span>
                    </div>
                    <div className="h-6 rounded bg-sky-50 border border-sky-200/60 flex items-center justify-center">
                      <span className="text-[6.5px] font-mono font-bold text-sky-600">Babylon</span>
                    </div>
                    <div className="h-6 rounded bg-rose-50 border border-rose-200/60 flex items-center justify-center">
                      <span className="text-[6.5px] font-mono font-bold text-rose-600">Three.js</span>
                    </div>
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>GPU: Accelerated</span>
                    <span className="text-brand-primary font-bold">Interactive</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Sparkles className="w-2.5 h-2.5 text-brand-primary" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    BESPOKE 3D WEBSITES
                  </span>
                </div>
              </div>
            )}

            {/* Visual Type 2: Backend REST APIs */}
            {visualType === 'ai' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-slate-900 border border-slate-750 shadow-lg p-2.5 flex flex-col justify-between relative overflow-hidden text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <div className="flex items-center space-x-1">
                      <Cpu className="w-2.5 h-2.5 text-purple-400" />
                      <span className="font-mono text-[7.5px] font-bold text-slate-300">server/api.router.ts</span>
                    </div>
                    <span className="font-mono text-[7px] text-emerald-400 font-bold">200 OK</span>
                  </div>

                  <div className="space-y-0.5 font-mono text-[7px] text-slate-300">
                    <div className="text-purple-300 font-bold">app.use('/api/v1', router)</div>
                    <div className="text-emerald-400">// Strict Zod payload guards</div>
                  </div>

                  <div className="flex items-center justify-between text-[6.5px] font-mono text-slate-400 border-t border-slate-800 pt-0.5">
                    <span>Sub-10ms Latency</span>
                    <span className="text-purple-300 font-bold">Node.js 20 LTS</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Zap className="w-2.5 h-2.5 text-purple-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    REST API ENGINE
                  </span>
                </div>
              </div>
            )}

            {/* Visual Type 3: Mobile App Development */}
            {visualType === 'mobile' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-42 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <Smartphone className="w-3 h-3 text-orange-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">iOS & Android App</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-orange-600">120 Hz</span>
                  </div>

                  <div className="p-1 rounded bg-orange-50/80 border border-orange-200/50 space-y-0.5">
                    <div className="h-1.5 w-20 bg-orange-200 rounded" />
                    <div className="h-1.5 w-14 bg-orange-150 rounded" />
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>React Native / Swift</span>
                    <span className="text-orange-600 font-bold">Fluid Gestures</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Smartphone className="w-2.5 h-2.5 text-orange-500" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    CROSS-PLATFORM APPS
                  </span>
                </div>
              </div>
            )}

            {/* Visual Type 4: Relational PostgreSQL Vault */}
            {visualType === 'saas' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <Cloud className="w-3 h-3 text-pink-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">PostgreSQL 15 Pool</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-emerald-600">ACID SLA</span>
                  </div>

                  <div className="space-y-0.5 font-mono text-[7px] text-slate-600 py-0.5">
                    <div className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      <span>inquiries_vault (UUID v4)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>indexed B-tree lookups</span>
                    </div>
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>20 Client Pool</span>
                    <span className="text-pink-600 font-bold">&lt; 5ms Query</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Cloud className="w-2.5 h-2.5 text-pink-500" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    RELATIONAL DATA VAULT
                  </span>
                </div>
              </div>
            )}

            {/* Visual Type 5: UI/UX Design Systems */}
            {visualType === 'design' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-42 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <Palette className="w-3 h-3 text-indigo-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">Figma Token Library</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-indigo-600">WCAG AAA</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 py-1">
                    <div className="rounded bg-indigo-50 p-1 border border-indigo-150">
                      <span className="text-[6.5px] font-mono text-indigo-700 font-bold">Button.clay</span>
                    </div>
                    <div className="rounded bg-purple-50 p-1 border border-purple-150">
                      <span className="text-[6.5px] font-mono text-purple-700 font-bold">Input.radius</span>
                    </div>
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>Tokens: 120+</span>
                    <span className="text-indigo-600 font-bold">Component Kit</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Palette className="w-2.5 h-2.5 text-indigo-500" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    DESIGN SYSTEMS
                  </span>
                </div>
              </div>
            )}

            {/* Visual Type 6: Digital Strategy */}
            {visualType === 'strategy' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <LineChart className="w-3 h-3 text-emerald-600" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">Conversion Funnel</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-emerald-600">3.8x ROI</span>
                  </div>

                  <div className="space-y-1 py-1">
                    <div className="flex justify-between text-[6.5px] font-mono text-slate-600">
                      <span>Checkout Flow:</span>
                      <span className="font-bold text-emerald-600">+60% Retention</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>A/B Testing</span>
                    <span className="text-emerald-600 font-bold">Data Telemetry</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <LineChart className="w-2.5 h-2.5 text-emerald-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    GROWTH ARCHITECTURE
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Titles & Descriptions */}
          <div className="pt-4 space-y-1.5">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-sans tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                {title}
              </h3>
              <p className="text-[11px] font-bold text-slate-700 tracking-wide font-sans mt-0.5">
                {subtitle}
              </p>
            </div>

            <p className="text-slate-650 text-xs sm:text-[13px] leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="pt-3 space-y-1.5 border-t border-slate-150/70 mt-3">
            <span className="font-mono text-[8.5px] font-black uppercase tracking-wider text-slate-400 block">
              CORE DELIVERABLES
            </span>
            <div className="space-y-1">
              {deliverables.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-700 font-medium">
                  <Check className="w-3 h-3 text-brand-primary flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags & Action Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[8.5px] font-bold"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/services/${service.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] font-black text-brand-primary group-hover:text-brand-orange transition-colors flex items-center space-x-1 font-mono uppercase tracking-wider"
          >
            <span>Explore Specs</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  const services: ServiceItemData[] = [
    {
      id: 'web-apps',
      number: '01',
      badge: 'WEB ARCHITECTURE',
      title: 'Custom Web Applications',
      subtitle: 'React 19, TypeScript & Fluid Motion',
      description: 'Modern, responsive web applications engineered from scratch with clean component architecture, tactile claymorphic aesthetics, and 120 FPS fluid micro-interactions.',
      fullDesc:
        'We craft high-performance web applications built from scratch using React 19, Vite, Tailwind CSS v4, and Framer Motion. Every layout is mathematically balanced, responsive across all viewports, and optimized for sub-second loading.',
      deliverables: [
        'React 19 + TypeScript component architecture',
        'Claymorphic tactile token styling & Tailwind v4',
        'Fluid micro-interactions with Framer Motion',
        'Sub-second Core Web Vitals & responsive layouts',
      ],
      specs: [
        'Strict TypeScript 5.4 with zero any types',
        'Tree-shaken Vite 8 production build pipeline',
        'WCAG 2.1 AAA accessible contrast compliance',
        'Cross-browser verification on real devices',
      ],
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Laptop,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#F0F5FA] to-[#E5EDF6]',
        borderAccent: 'border-cyan-200',
        pillBg: 'bg-cyan-50',
        pillText: 'text-cyan-900 font-bold',
        glowColor: 'rgba(96, 165, 250, 0.2)',
        iconColor: '#0284c7',
        cardBorder: 'border-sky-200/90',
        hoverBorder: 'hover:border-sky-400',
        topRailGradient: 'from-sky-400 via-cyan-400 to-indigo-500',
        cornerColor: 'border-sky-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(56,189,248,0.22)]',
      },
      visualType: 'web',
    },
    {
      id: 'backend-apis',
      number: '02',
      badge: 'BACKEND SYSTEMS',
      title: 'Backend APIs & Architecture',
      subtitle: 'Layered Node.js, Express & Type Safety',
      description: 'Production-ready RESTful APIs engineered with layered separation of concerns, strict Zod schema validation, and secure authentication pipelines.',
      fullDesc:
        'We build rock-solid server architectures using Node.js 20 LTS, Express, and strict TypeScript. Requests are sanitized, authenticated with cryptographic JWT guards, and processed through robust business services.',
      deliverables: [
        'Layered RESTful controllers, services & repos',
        'Strict runtime payload validation with Zod',
        'Centralized enterprise error middleware',
        'Rate-limited endpoints with Helmet security headers',
      ],
      specs: [
        'Node.js 20 LTS + Express layered architecture',
        'Cryptographic JWT Bearer token authentication',
        'Sub-10ms average REST endpoint execution',
        'Clean OpenAPI / Swagger ready documentation',
      ],
      techStack: ['Node.js 20', 'Express.js', 'TypeScript', 'Zod'],
      icon: Cpu,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FAF5FF] to-[#EFE5FC]',
        borderAccent: 'border-purple-200',
        pillBg: 'bg-purple-50',
        pillText: 'text-purple-900 font-bold',
        glowColor: 'rgba(192, 132, 252, 0.2)',
        iconColor: '#9333ea',
        cardBorder: 'border-purple-200/90',
        hoverBorder: 'hover:border-purple-400',
        topRailGradient: 'from-purple-400 via-violet-500 to-indigo-500',
        cornerColor: 'border-purple-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(168,85,247,0.22)]',
      },
      visualType: 'ai',
    },
    {
      id: 'mobile-apps',
      number: '03',
      badge: 'MOBILE PLATFORMS',
      title: 'Cross-Platform Mobile Apps',
      subtitle: 'Touch-Optimized iOS & Android Experiences',
      description: 'Pixel-precise mobile applications engineered with native touch gestures, offline cache synchronization, and biometric security.',
      fullDesc:
        'We engineer cross-platform mobile apps using React Native and TypeScript that deliver true native responsiveness, smooth haptics, offline cache persistence, and direct cloud synchronization.',
      deliverables: [
        'Cross-platform iOS and Android codebase',
        'Local storage caching & offline state persistence',
        'Biometric authentication (FaceID / Fingerprint)',
        'Production build & store distribution support',
      ],
      specs: [
        'React Native + TypeScript architecture',
        'Fluid 60-120Hz gesture response physics',
        'Encrypted device token management',
        'Clean modular component library',
      ],
      techStack: ['React Native', 'TypeScript', 'Mobile Cache', 'REST Sync'],
      icon: Smartphone,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5]',
        borderAccent: 'border-orange-200',
        pillBg: 'bg-orange-50',
        pillText: 'text-orange-950 font-bold',
        glowColor: 'rgba(251, 146, 60, 0.2)',
        iconColor: '#ea580c',
        cardBorder: 'border-orange-200/90',
        hoverBorder: 'hover:border-orange-400',
        topRailGradient: 'from-amber-400 via-orange-500 to-rose-400',
        cornerColor: 'border-orange-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(249,115,22,0.22)]',
      },
      visualType: 'mobile',
    },
    {
      id: 'database-systems',
      number: '04',
      badge: 'DATA ARCHITECTURE',
      title: 'Relational Database Systems',
      subtitle: 'PostgreSQL 15 & Resilient Pooling',
      description: 'Enterprise-grade relational database design with ACID guarantees, optimized B-tree indexes, and automated schema migration tooling.',
      fullDesc:
        'Data is the foundation of dependable digital products. We architect PostgreSQL database models featuring UUID primary keys, connection pooling, normalized schemas, and parameterized queries that prevent SQL injection.',
      deliverables: [
        'Normalized PostgreSQL relational schema DDL',
        'Optimized connection pooling via node-postgres pg',
        'Sub-5ms indexed lookups on critical query paths',
        'Automated schema migration & seeding pipelines',
      ],
      specs: [
        'PostgreSQL 15 relational engine with UUID v4 keys',
        'Resilient connection pool supporting concurrent traffic',
        'Strict ACID transaction integrity',
        'Automated zero-downtime migration scripts',
      ],
      techStack: ['PostgreSQL 15', 'pg Pool', 'UUID v4', 'SQL DDL'],
      icon: Cloud,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FDF2F8] to-[#FCE7F3]',
        borderAccent: 'border-pink-200',
        pillBg: 'bg-pink-50',
        pillText: 'text-pink-950 font-bold',
        glowColor: 'rgba(244, 114, 182, 0.2)',
        iconColor: '#db2777',
        cardBorder: 'border-pink-200/90',
        hoverBorder: 'hover:border-pink-400',
        topRailGradient: 'from-pink-400 via-rose-500 to-purple-500',
        cornerColor: 'border-pink-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(236,72,153,0.22)]',
      },
      visualType: 'saas',
    },
    {
      id: 'design-systems',
      number: '05',
      badge: 'DESIGN SYSTEMS',
      title: 'UI/UX & Design Systems',
      subtitle: 'Mathematical Tokens & Component Libraries',
      description: 'Scalable design token architectures, comprehensive Figma kits, and matched React TypeScript components with tactile claymorphic depth.',
      fullDesc:
        'A design system unites your brand and engineering team. We establish shared tokens for color, typography, elevation, and spacing, enabling faster development cycles and visual consistency.',
      deliverables: [
        'Design token architecture (Color, Type, Spacing, Elevation)',
        'Comprehensive Figma component token library',
        'Matched React 19 + Tailwind CSS component code',
        'WCAG AAA accessible contrast standards',
      ],
      specs: [
        '8pt geometric layout grid system',
        'Mathematical claymorphic lighting & inset shadows',
        'Zero-runtime overhead with Tailwind CSS v4',
        'Interactive Figma prototypes tested on users',
      ],
      techStack: ['Figma Tokens', '8pt Grid', 'Tailwind CSS', 'WCAG AAA'],
      icon: Palette,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF]',
        borderAccent: 'border-indigo-200',
        pillBg: 'bg-indigo-50',
        pillText: 'text-indigo-950 font-bold',
        glowColor: 'rgba(129, 140, 248, 0.2)',
        iconColor: '#4f46e5',
        cardBorder: 'border-indigo-200/90',
        hoverBorder: 'hover:border-indigo-400',
        topRailGradient: 'from-indigo-400 via-blue-500 to-violet-500',
        cornerColor: 'border-indigo-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.22)]',
      },
      visualType: 'design',
    },
    {
      id: 'performance-audit',
      number: '06',
      badge: 'PERFORMANCE & OPS',
      title: 'Performance & Code Audits',
      subtitle: 'Sub-Second Speed & Core Web Vitals',
      description: 'Speed audits, asset optimization, security hardening, and code refactoring to maximize Google Lighthouse scores and user retention.',
      fullDesc:
        'Slow websites lose users. We audit, refactor, and tune applications to achieve 95+ Core Web Vitals, sub-second TTFB, efficient bundle tree-shaking, and enterprise security headers.',
      deliverables: [
        '95+ Core Web Vitals performance audit & refactoring',
        'Bundle tree-shaking and dynamic code splitting',
        'Security header hardening (Helmet, CORS, CSP)',
        'Automated application health monitoring setup',
      ],
      specs: [
        'Lighthouse 95+ score across Performance & Accessibility',
        'Sub-100ms first input delay on edge networks',
        'Clean modular git repository with zero debt',
        'Automated continuous delivery validation',
      ],
      techStack: ['Lighthouse 95+', 'Core Web Vitals', 'Code Audits', 'Security'],
      icon: LineChart,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5]',
        borderAccent: 'border-emerald-200',
        pillBg: 'bg-emerald-50',
        pillText: 'text-emerald-950 font-bold',
        glowColor: 'rgba(52, 211, 153, 0.2)',
        iconColor: '#059669',
        cardBorder: 'border-emerald-200/90',
        hoverBorder: 'hover:border-emerald-400',
        topRailGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
        cornerColor: 'border-emerald-400',
        shadowGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.22)]',
      },
      visualType: 'strategy',
    },
  ];

  return (
    <section
      id="services"
      className="pt-16 pb-14 sm:pt-20 sm:pb-16 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden select-none"
    >
      {/* Delicate Top-Left Corner Studio Desk Vignette ("Najuk" & Professional) */}
      <div className="absolute top-0 left-0 w-[380px] sm:w-[460px] md:w-[540px] lg:w-[620px] h-[280px] sm:h-[340px] md:h-[420px] pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/services-desk-bg.jpg"
          alt="Studio Workspace Corner Accent"
          className="w-full h-full object-cover object-left-top opacity-55"
          style={{
            maskImage: 'radial-gradient(ellipse at 10% 10%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 60%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 10% 10%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* Subtle ambient lighting gradients for the section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#edf2f7] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Crisp, Readable Typography */}
        <div className="max-w-3xl mx-auto mb-12 text-center space-y-2.5">
          <span className="font-mono text-[10.5px] font-extrabold uppercase tracking-[0.25em] text-indigo-600 block">
            CORE CAPABILITIES // WHAT WE BUILD
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Engineered with <span className="bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary bg-clip-text text-transparent">Purpose & Craft</span>
          </h2>

          <p className="text-slate-650 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            From handcrafted React 19 web platforms to resilient PostgreSQL backends, we build digital products engineered to perform without templates or shortcuts.
          </p>
        </div>

        {/* 3x2 Grid with Interactive 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard 
              key={service.number} 
              service={service} 
            />
          ))}
        </div>

        {/* Bottom Project Inquiry Banner */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 rounded-[28px] clay-card bg-gradient-to-r from-white via-slate-50 to-white border border-slate-200/90 shadow-lg text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <span className="font-mono text-[9px] font-black uppercase tracking-wider text-brand-primary block">
              CUSTOM SCOPING & ARCHITECTURE
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-sans">
              Need custom scoping for these capabilities?
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              Connect with our technical architects to configure your project parameters and map out a tailored engineering roadmap.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-secondary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-primary/20 clay-button"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
