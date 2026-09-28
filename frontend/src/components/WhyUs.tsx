import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Palette,
  Code2,
  Database,
  Sparkles,
  Laptop,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Server,
  Layers,
  X,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react';

interface MethodologyCardData {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  deliverables: string[];
  tags: string[];
  colorTheme: {
    archBg: string;
    pillBg: string;
    pillText: string;
    accentBorder: string;
    glowColor: string;
    iconColor: string;
  };
  visualType: 'creativity' | 'code' | 'strategy' | 'product';
  isFinal?: boolean;
}

function Interactive3DCard({
  card,
  onOpenModal,
}: {
  card: MethodologyCardData;
  onOpenModal: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking with fluid spring physics
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

  const { step, badge, title, subtitle, shortDesc, tags, colorTheme, visualType, isFinal } = card;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative w-full max-w-[295px] xl:max-w-[310px] min-h-[460px] rounded-[32px] p-5 sm:p-6 transition-all duration-300 cursor-pointer text-left select-none flex flex-col justify-between group ${
        isFinal
          ? 'bg-gradient-to-b from-white via-white to-amber-50/70 border-2 border-amber-300/80 shadow-2xl shadow-amber-500/10 hover:border-amber-400'
          : 'clay-card bg-white/95 backdrop-blur-md border border-white/90 hover:border-slate-350 shadow-xl hover:shadow-slate-300/60'
      }`}
    >
      {/* 3D Parallax Container */}
      <div style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }} className="flex flex-col justify-between h-full space-y-4">
        
        <div>
          {/* Step indicator & badge */}
          <div className="flex items-center justify-between mb-3.5">
            <span className="font-mono text-[10.5px] font-extrabold tracking-[0.2em] text-slate-500 uppercase">
              {step}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[9.5px] font-black uppercase tracking-wider font-mono shadow-xs border ${colorTheme.pillBg} ${colorTheme.pillText} ${colorTheme.accentBorder}`}
            >
              {badge}
            </span>
          </div>

          {/* Pinterest-Inspired Architectural Arch Portal with Spacious Height */}
          <div
            className={`relative h-[185px] sm:h-[195px] w-full rounded-t-[68px] rounded-b-2xl overflow-hidden border border-slate-200/80 p-3 flex flex-col items-center justify-center transition-all duration-500 ${colorTheme.archBg}`}
            style={{ transform: 'translateZ(16px)' }}
          >
            {/* Architectural hairline framing */}
            <div className="absolute inset-2 rounded-t-[62px] rounded-b-xl border border-white/60 pointer-events-none" />

            {/* Ambient Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-45 pointer-events-none"
              style={{ backgroundColor: colorTheme.glowColor }}
            />

            {/* Card 1: 01 // CREATIVITY & 3D DESIGN */}
            {visualType === 'creativity' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-40 h-28 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md p-3 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <div className="flex items-center space-x-1.5">
                      <Palette className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="font-mono text-[8.5px] font-bold text-slate-700">3D Design Tokens</span>
                    </div>
                    <span className="font-mono text-[8px] font-bold text-indigo-500">v4.0</span>
                  </div>

                  <div className="flex space-x-1.5 py-1">
                    <div className="h-4 flex-1 rounded bg-[#818cf8]" />
                    <div className="h-4 flex-1 rounded bg-[#38bdf8]" />
                    <div className="h-4 flex-1 rounded bg-[#fb923c]" />
                    <div className="h-4 flex-1 rounded bg-[#f472b6]" />
                  </div>

                  <div className="font-mono text-[8px] text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-150 flex items-center justify-between">
                    <span>radius: 28px;</span>
                    <span className="text-emerald-600 font-bold">120 FPS 3D</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="font-mono text-[8.5px] font-black text-slate-800 tracking-wider">
                    BABYLON.JS 3D CANVAS
                  </span>
                </div>
              </div>
            )}

            {/* Card 2: 02 // CODE: NODE.JS + EXPRESS API */}
            {visualType === 'code' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-28 rounded-2xl bg-slate-900 border border-slate-750 shadow-xl p-3 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Code2 className="w-2.5 h-2.5 text-cyan-400" />
                      <span className="font-mono text-[8px] font-bold text-slate-350">server.ts // Express</span>
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-[8px] text-slate-300 leading-tight">
                    <div className="text-cyan-400 font-bold">app.post('/api/contact', ...)</div>
                    <div className="text-emerald-400">// Port 5000: Operational</div>
                  </div>

                  <div className="flex items-center justify-between text-[7px] font-mono text-slate-400 border-t border-slate-800 pt-1">
                    <span>TypeScript 5.4</span>
                    <span className="text-cyan-400 font-bold">REST API</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-1.5">
                  <Cpu className="w-3 h-3 text-cyan-600" />
                  <span className="font-mono text-[8.5px] font-black text-slate-800 tracking-wider">
                    NODE.JS + EXPRESS API
                  </span>
                </div>
              </div>
            )}

            {/* Card 3: 03 // DATABASE STRATEGY: POSTGRESQL */}
            {visualType === 'strategy' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-42 h-28 rounded-2xl bg-white shadow-xl border border-slate-200 p-3 relative flex flex-col justify-between"
                >
                  <div className="absolute left-1.5 top-2.5 bottom-2.5 flex flex-col justify-between">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300 border border-slate-400" />
                    ))}
                  </div>

                  <div className="pl-3 space-y-1 text-left font-mono">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="text-[8.5px] font-bold text-slate-800">voxor_db.sql</span>
                      <Database className="w-3 h-3 text-amber-600" />
                    </div>

                    <div className="text-[7.5px] text-slate-600 space-y-0.5">
                      <div>• TABLE <span className="font-bold text-slate-900">inquiries</span> (UUID)</div>
                      <div>• TABLE <span className="font-bold text-slate-900">estimates</span> (JSONB)</div>
                    </div>

                    <div className="text-[7px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 inline-block">
                      POOL: 20 Active Clients
                    </div>
                  </div>

                  <div className="pl-3 text-[7px] font-mono text-slate-400 flex justify-between">
                    <span>Port: 5432</span>
                    <span className="text-amber-600 font-bold">PostgreSQL 15</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-1.5">
                  <Server className="w-3 h-3 text-amber-600" />
                  <span className="font-mono text-[8.5px] font-black text-slate-800 tracking-wider">
                    POSTGRESQL 15 DB
                  </span>
                </div>
              </div>
            )}

            {/* Card 4: 04 // THE RESULT: COMPLETE DIGITAL PRODUCT */}
            {visualType === 'product' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-42 h-28 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-850 to-indigo-950 p-2.5 shadow-2xl border-2 border-amber-300/80 relative flex flex-col justify-between text-white overflow-hidden"
                >
                  <div className="flex items-center justify-between text-[7.5px] font-mono text-slate-300 border-b border-white/10 pb-1">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-emerald-300 font-bold">FULLSTACK</span>
                    </span>
                    <Sparkles className="w-3 h-3 text-amber-300" />
                  </div>

                  <div className="my-auto text-center space-y-0.5">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-amber-400 flex items-center justify-center mx-auto shadow-xs">
                      <Laptop className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[8.5px] font-black uppercase tracking-wider block font-sans text-amber-200">
                      VOXOR LAB STUDIO
                    </span>
                  </div>

                  <div className="text-[7px] font-mono text-slate-300 flex justify-between pt-1 border-t border-white/10">
                    <span className="text-cyan-300 font-bold">Vite :5190</span>
                    <span className="text-emerald-300 font-bold">Express :5000</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-amber-400 text-slate-900 px-3 py-1 rounded-xl font-mono text-[8.5px] font-black tracking-wider shadow-md shadow-amber-400/30 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                  <span>100% OPERATIONAL</span>
                </div>
              </div>
            )}
          </div>

          {/* Content Details with Clean, Complete Text */}
          <div className="pt-4 space-y-2">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-[11px] font-bold text-slate-700 tracking-wide font-sans mt-0.5">
                {subtitle}
              </p>
            </div>

            <p className="text-slate-650 text-xs sm:text-[13px] leading-relaxed font-normal">
              {shortDesc}
            </p>
          </div>
        </div>

        {/* Tags & Click to open popup trigger */}
        <div className="pt-3 border-t border-slate-150/80 space-y-2.5">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[9px] font-bold tracking-tight"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] font-black text-brand-primary group-hover:text-brand-orange transition-colors flex items-center space-x-1 font-mono uppercase tracking-wider">
              <span>View Full Specs</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const [selectedCard, setSelectedCard] = useState<MethodologyCardData | null>(null);

  const cards: MethodologyCardData[] = [
    {
      step: 'STEP 01',
      badge: '3D & DESIGN',
      title: 'Creative Design Systems',
      subtitle: 'Claymorphic UI & Real-Time 3D',
      shortDesc: 'Custom pastel claymorphic surfaces, tactile micro-interactions, and real-time 3D scenes in Babylon.js.',
      fullDesc:
        'We engineer bespoke visual identities that break through digital monotony. By uniting Figma token architectures with Babylon.js and Three.js hardware-accelerated rendering, we deliver buttery 120 FPS claymorphic interfaces that respond to cursor physics.',
      specs: [
        '120 FPS WebGL 3D hardware-accelerated scene graphs',
        'Mathematical claymorphic inset shadows and lighting tokens',
        'Fluid spring physics powered by Framer Motion',
        'Touch-optimized responsive 3D mobile viewport fallbacks',
      ],
      deliverables: [
        'Custom 3D scene assembly & GLSL shaders',
        'Bespoke Figma design system & component library',
        'Magnetic cursor interactions & micro-haptics',
      ],
      tags: ['React 19', 'Babylon.js 3D', 'Tailwind CSS v4', 'Framer Motion'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#FAF5F0] to-[#F5ECE4]',
        pillBg: 'bg-rose-50',
        pillText: 'text-rose-800 font-bold',
        accentBorder: 'border-rose-200',
        glowColor: 'rgba(244, 114, 182, 0.2)',
        iconColor: '#f43f5e',
      },
      visualType: 'creativity',
    },
    {
      step: 'STEP 02',
      badge: 'BACKEND API',
      title: 'Fullstack TypeScript Code',
      subtitle: 'Express.js & REST Endpoints',
      shortDesc: 'Modular Node.js backend with strict Zod validation, JWT security, and sub-10ms response times.',
      fullDesc:
        'A production-grade REST API backend built with Express.js and strict TypeScript. Every inbound request is validated through Zod schemas before reaching the business layer, guaranteeing zero runtime crashes and instant data serialization.',
      specs: [
        'Strict runtime validation using Zod schemas on body & queries',
        'Layered architecture: Controllers, Services & Repositories',
        'Cryptographic JWT Bearer token authentication & route guards',
        'Centralized error handler with standardized JSON responses',
      ],
      deliverables: [
        'Live lead intake endpoints (/api/contact & /api/inquiries)',
        'Server-side project cost estimator engine (/api/estimates)',
        'Live analytics & telemetry streaming node (/api/analytics)',
      ],
      tags: ['Node.js', 'Express.js', 'TypeScript 5.4', 'Zod Validation'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#F0F5FA] to-[#E5EDF6]',
        pillBg: 'bg-cyan-50',
        pillText: 'text-cyan-900 font-bold',
        accentBorder: 'border-cyan-200',
        glowColor: 'rgba(96, 165, 250, 0.2)',
        iconColor: '#0284c7',
      },
      visualType: 'code',
    },
    {
      step: 'STEP 03',
      badge: 'DATABASE',
      title: 'Relational PostgreSQL Data',
      subtitle: 'pg Connection Pool & Schema',
      shortDesc: 'Robust PostgreSQL database (voxor_db) storing client leads, estimates, and live telemetry with UUID keys.',
      fullDesc:
        'Enterprise relational database architecture on PostgreSQL 15. Built with resilient connection pooling, B-tree indexes, UUID primary keys, and automated migrations that ensure transactional consistency across all agency operations.',
      specs: [
        'Connection pooling with 20 maximum concurrent clients',
        'Automated migration & idempotent seeding (npm run db:setup)',
        'B-tree indexing on slugs, emails, and timestamp columns',
        'JSONB columns for dynamic calculator feature combinations',
      ],
      deliverables: [
        '7 relational tables: inquiries, estimates, projects, services, etc.',
        'Zero-downtime schema evolution scripts',
        'Parameterized SQL queries preventing injection vectors',
      ],
      tags: ['PostgreSQL 15', 'pg Pool Client', 'Relational DDL', 'UUID Indexing'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#F7F6EE] to-[#EFEEDE]',
        pillBg: 'bg-amber-50',
        pillText: 'text-amber-900 font-bold',
        accentBorder: 'border-amber-200',
        glowColor: 'rgba(251, 146, 60, 0.2)',
        iconColor: '#d97706',
      },
      visualType: 'strategy',
    },
    {
      step: 'EQUALS',
      badge: 'THE RESULT',
      title: 'Fullstack Digital Product',
      subtitle: 'Engineered for Performance & Scale',
      shortDesc: 'Unified web application combining live 3D interaction, immediate PostgreSQL persistence, and 120 FPS fluidity.',
      fullDesc:
        'The synthesis of 3D spatial aesthetics and resilient backend infrastructure. Client inquiries submitted on the frontend are instantly captured and stored in PostgreSQL, offering real-time telemetry while maintaining buttery 120 FPS frame rates.',
      specs: [
        'Frontend live on Vite development port 5190',
        'Backend API listening on Express port 5000',
        'PostgreSQL running on port 5432 with active connection pool',
        '14/14 automated verification tests passing with zero errors',
      ],
      deliverables: [
        'Production-grade agency web studio platform',
        'Instant contact form persistence directly in PostgreSQL',
        'Interactive project cost estimator with dynamic pricing',
      ],
      tags: ['Turnkey Fullstack', 'Vite + Express', 'PostgreSQL 15', '120 FPS 3D'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#FFFBF2] to-[#FFF4DE]',
        pillBg: 'bg-amber-100',
        pillText: 'text-amber-950 font-black',
        accentBorder: 'border-amber-300',
        glowColor: 'rgba(245, 158, 11, 0.25)',
        iconColor: '#b45309',
      },
      visualType: 'product',
      isFinal: true,
    },
  ];

  return (
    <section
      id="why-us"
      className="pt-16 pb-14 sm:pt-20 sm:pb-16 w-full relative overflow-hidden select-none border-b border-white/5 bg-[#edf2f7]"
    >
      {/* 3D Modern Studio Desk Background Scene Scaled to Full Section Height */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/methodology-desk-3d.jpg"
          alt="3D Studio Desk Workspace"
          className="w-full h-full object-cover object-bottom opacity-85"
        />

        {/* Seamless Luminous Overlays to blend with the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#eceeef]/90 via-[#eceeef]/35 to-[#eceeef]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#eceeef]/15 to-[#eceeef]/55" />

        {/* Top & Bottom seamless gradient blending */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#eceeef] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#eceeef] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Spacious Section Header */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-xs text-slate-800 font-mono text-[9.5px] font-black uppercase tracking-[0.25em]">
            <Layers className="w-3.5 h-3.5 text-brand-primary" />
            <span>FULLSTACK ARCHITECTURE // VOXOR LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            We Combine <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-orange via-pink-500 to-brand-primary bg-clip-text text-transparent">
              Creativity, Code & Strategy
            </span>
          </h2>

          <p className="text-slate-650 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            The engineering formula powering this studio: combining <strong>React & Babylon.js 3D</strong> on the frontend with a <strong>Node.js, Express & PostgreSQL</strong> backend.
          </p>
        </div>

        {/* 3D Equation Grid (Spacious, Professional Heights) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3 items-stretch">
          {cards.map((card, index) => (
            <div key={card.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1 justify-center">
              
              {/* Interactive 3D Card with click to open popup */}
              <Interactive3DCard card={card} onOpenModal={() => setSelectedCard(card)} />

              {/* Floating Clay Operator Bead (Plus or Equals) */}
              {index < cards.length - 1 && (
                <div className="my-5 lg:my-0 lg:mx-2 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.35,
                    }}
                    className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md shadow-slate-200/50 flex items-center justify-center text-slate-700 font-mono text-xl font-black select-none clay-card"
                  >
                    {index === cards.length - 2 ? '=' : '+'}
                  </motion.div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Professional Studio Technical Guarantee Strip */}
        <div className="mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-[28px] clay-card bg-gradient-to-r from-white via-slate-50 to-white border border-slate-200/90 shadow-lg text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-[9.5px] font-black uppercase tracking-wider text-slate-500 block">
              AUTHENTIC FULLSTACK // ZERO SHORTCUTS
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-sans">
              React 19 + TypeScript + Node.js + Express + PostgreSQL 15
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-650 font-medium max-w-lg leading-relaxed">
              Every section is natively built with high-performance 3D canvas rendering and verified with an active PostgreSQL database handling inquiries in real-time.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-primary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-orange/20 clay-button"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="clay-card bg-white max-w-2xl w-full rounded-[32px] p-6 sm:p-8 shadow-2xl relative border border-slate-200/90 text-left space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-150">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {selectedCard.step}
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider font-mono shadow-xs border ${selectedCard.colorTheme.pillBg} ${selectedCard.colorTheme.pillText} ${selectedCard.colorTheme.accentBorder}`}
                  >
                    {selectedCard.badge}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCard(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {selectedCard.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-primary tracking-wide">
                  {selectedCard.subtitle}
                </p>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-650 leading-relaxed font-normal">
                {selectedCard.fullDesc}
              </p>

              {/* Specifications & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Technical Specifications</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedCard.specs.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-xs">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Studio Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedCard.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-150">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[9px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedCard(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-primary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-orange/20 clay-button"
                >
                  <span>Build This With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
