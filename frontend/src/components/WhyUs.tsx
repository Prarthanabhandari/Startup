import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
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
} from 'lucide-react';

interface MethodologyCardData {
  id: string;
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
    cardBorder: string;
    topRail: string;
  };
  visualType: 'creativity' | 'code' | 'strategy' | 'product';
}

function Interactive3DCard({
  card,
}: {
  card: MethodologyCardData;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Mouse tilt tracking with fluid spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-6deg', '6deg']);

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

  const { step, badge, title, subtitle, shortDesc, tags, colorTheme, visualType } = card;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/architecture/${card.id}`)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`clay-card bg-white p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] flex flex-col justify-between text-left relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer select-none border-2 ${colorTheme.cardBorder} hover:border-indigo-300 hover:-translate-y-1.5`}
    >
      {/* Top Luminous Light-Rail */}
      <div
        className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${colorTheme.topRail} opacity-70 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`}
      />

      {/* 3D Parallax Container */}
      <div
        style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
        className="flex flex-col justify-between h-full space-y-4"
      >
        <div>
          {/* Step indicator & badge */}
          <div className="flex items-center justify-between mb-3.5">
            <span className="font-mono text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
              {step}
            </span>
            <span
              className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider font-mono shadow-xs border ${colorTheme.pillBg} ${colorTheme.pillText} ${colorTheme.accentBorder}`}
            >
              {badge}
            </span>
          </div>

          {/* Architectural Viewport Canvas */}
          <div
            className={`relative h-[175px] w-full rounded-2xl overflow-hidden border border-slate-200/80 p-3 flex flex-col items-center justify-center transition-all duration-500 ${colorTheme.archBg}`}
            style={{ transform: 'translateZ(14px)' }}
          >
            {/* Subtle inner hairline border */}
            <div className="absolute inset-1.5 rounded-xl border border-white/60 pointer-events-none" />

            {/* Ambient Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 pointer-events-none"
              style={{ backgroundColor: colorTheme.glowColor }}
            />

            {/* Visual 1: CRAFT & DESIGN */}
            {visualType === 'creativity' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-28 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md p-2.5 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1.5">
                      <Palette className="w-3 h-3 text-rose-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-800">Design System</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200/50">
                      8pt Grid
                    </span>
                  </div>

                  {/* Luxury Color Swatches */}
                  <div className="grid grid-cols-4 gap-1.5 py-1">
                    <div className="h-4 rounded bg-indigo-500/90 shadow-2xs" />
                    <div className="h-4 rounded bg-rose-500/90 shadow-2xs" />
                    <div className="h-4 rounded bg-sky-500/90 shadow-2xs" />
                    <div className="h-4 rounded bg-amber-500/90 shadow-2xs" />
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between items-center border-t border-slate-100 pt-1">
                    <span>Spatial Canvas</span>
                    <span className="text-rose-600 font-bold">120 FPS Fluidity</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Sparkles className="w-2.5 h-2.5 text-rose-500" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    BESPOKE UI / UX
                  </span>
                </div>
              </div>
            )}

            {/* Visual 2: FULLSTACK CODE */}
            {visualType === 'code' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-28 rounded-xl bg-slate-900 border border-slate-800 shadow-md p-2.5 flex flex-col justify-between relative overflow-hidden text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Code2 className="w-2.5 h-2.5 text-sky-400" />
                      <span className="font-mono text-[7.5px] font-bold text-slate-300">engine.ts</span>
                    </div>
                  </div>

                  <div className="space-y-0.5 font-mono text-[7px] text-slate-300">
                    <div className="text-sky-300 font-bold">const studio = await init()</div>
                    <div className="text-emerald-400">// Strict type validation</div>
                  </div>

                  <div className="flex items-center justify-between text-[6.5px] font-mono text-slate-400 border-t border-slate-800 pt-0.5">
                    <span>Sub-10ms API</span>
                    <span className="text-sky-300 font-bold">Encrypted REST</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Cpu className="w-2.5 h-2.5 text-sky-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    CLEAN ARCHITECTURE
                  </span>
                </div>
              </div>
            )}

            {/* Visual 3: CLOUD & DATA */}
            {visualType === 'strategy' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-28 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <Database className="w-3 h-3 text-amber-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-800">Relational Vault</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                      99.99% SLA
                    </span>
                  </div>

                  <div className="space-y-0.5 font-mono text-[7px] text-slate-600">
                    <div className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>inquiries_vault (UUID)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>project_telemetry (JSONB)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[6.5px] font-mono text-slate-400 border-t border-slate-100 pt-0.5">
                    <span>Connection Pool</span>
                    <span className="text-amber-600 font-bold">Encrypted</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Server className="w-2.5 h-2.5 text-amber-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    SECURE DATA CLOUD
                  </span>
                </div>
              </div>
            )}

            {/* Visual 4: DIGITAL IMPACT */}
            {visualType === 'product' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-28 rounded-xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 shadow-md p-2.5 flex flex-col justify-between relative text-white text-left"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-1">
                    <div className="flex items-center space-x-1">
                      <Laptop className="w-3 h-3 text-violet-400" />
                      <span className="font-mono text-[8px] font-bold text-slate-200">Live Production</span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[7px] text-emerald-300 font-bold">READY</span>
                    </span>
                  </div>

                  <div className="py-1 text-center space-y-0.5">
                    <span className="font-sans text-[10px] font-black tracking-tight text-white block">
                      VOXOR LAB PRODUCT
                    </span>
                    <span className="font-mono text-[6.5px] text-violet-300 block">
                      Zero-Downtime Deployment
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[6.5px] font-mono text-slate-400 border-t border-white/10 pt-0.5">
                    <span>Global Edge CDN</span>
                    <span className="text-violet-300 font-bold">120 FPS</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-violet-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    COMMERCIAL SCALE
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Titles & Descriptions */}
          <div className="pt-4 space-y-1.5">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
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

        {/* Tags & Action Link */}
        <div className="pt-3 border-t border-slate-150/80 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[8.5px] font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/architecture/${card.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] font-black text-brand-primary group-hover:text-brand-orange transition-colors flex items-center space-x-1 font-mono uppercase tracking-wider"
          >
            <span>View Full Specs</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const cards: MethodologyCardData[] = [
    {
      id: 'design',
      step: 'PILLAR 01',
      badge: 'DESIGN ATELIER',
      title: 'Spatial & Visual Systems',
      subtitle: 'Fluid Motion & Tactile 3D',
      shortDesc:
        'Bespoke visual identities designed with claymorphic depth, balanced typography, and responsive WebGL micro-interactions.',
      fullDesc:
        'We engineer bespoke design systems that break through digital monotony. By pairing thoughtful layout hierarchy with real-time 3D physics, every surface feels tactile, intuitive, and elevated for your brand.',
      specs: [
        'Mathematical claymorphic lighting & tactile token system',
        'High-fidelity typography scales and geometric hierarchy',
        'Fluid spring motion with zero-latency cursor response',
        'Adaptive layouts tailored for ultra-wide, desktop & mobile',
      ],
      deliverables: [
        'Complete bespoke brand design system & component token suite',
        'Interactive 3D viewport canvas & custom GLSL shaders',
        'Responsive design prototypes tested across real devices',
      ],
      tags: ['Design Tokens', 'WebGL 3D', 'Tactile Motion', 'UI Architecture'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#FDF6F0] to-[#F7ECE1]',
        pillBg: 'bg-rose-50',
        pillText: 'text-rose-900 font-bold',
        accentBorder: 'border-rose-200',
        glowColor: 'rgba(244, 114, 182, 0.2)',
        iconColor: '#e11d48',
        cardBorder: 'border-rose-200/90',
        topRail: 'from-rose-400 via-pink-500 to-indigo-500',
      },
      visualType: 'creativity',
    },
    {
      id: 'backend',
      step: 'PILLAR 02',
      badge: 'ENGINEERING',
      title: 'Precision Backend Code',
      subtitle: 'Clean TypeScript & REST Services',
      shortDesc:
        'Engineered for rock-solid reliability, sub-second API responses, and strict runtime type security.',
      fullDesc:
        'A production-grade backend engineered with layered architecture, strict schema validation, and secure authentication pipelines. Every request is verified, sanitized, and processed with predictable performance.',
      specs: [
        'Strict schema validation on every inbound request payload',
        'Layered separation of Controllers, Services & Repositories',
        'Encrypted JWT authentication and cryptographic route guards',
        'Standardized JSON telemetry and resilient error handlers',
      ],
      deliverables: [
        'Production REST endpoints for seamless frontend hydration',
        'Secure lead capture and real-time consultation intake engine',
        'Zero-crash runtime resilience and automated health checks',
      ],
      tags: ['TypeScript', 'Node.js', 'REST Endpoints', 'Clean Code'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#F0F7FA] to-[#E2F0F7]',
        pillBg: 'bg-sky-50',
        pillText: 'text-sky-950 font-bold',
        accentBorder: 'border-sky-200',
        glowColor: 'rgba(56, 189, 248, 0.2)',
        iconColor: '#0284c7',
        cardBorder: 'border-sky-200/90',
        topRail: 'from-sky-400 via-cyan-500 to-indigo-500',
      },
      visualType: 'code',
    },
    {
      id: 'database',
      step: 'PILLAR 03',
      badge: 'INFRASTRUCTURE',
      title: 'Resilient Cloud & Data',
      subtitle: 'PostgreSQL Relational Storage',
      shortDesc:
        'Scalable relational schema design with connection pooling, transactional integrity, and automated backups.',
      fullDesc:
        'Enterprise-grade relational database architecture on PostgreSQL. Built with resilient connection pooling, B-tree indexes, UUID primary keys, and automated migrations that ensure transactional consistency across all client data.',
      specs: [
        'Optimized connection pooling supporting high concurrent traffic',
        'B-tree indexes on lookup columns for sub-10ms query speeds',
        'JSONB schemas for dynamic, flexible project parameters',
        'Automated zero-downtime migration pipelines',
      ],
      deliverables: [
        'Structured relational tables for client inquiries & projects',
        'Parameterized SQL preventing injection vulnerabilities',
        'Encrypted persistent vaults for confidential estimates',
      ],
      tags: ['PostgreSQL', 'Data Modeling', 'Connection Pool', 'Cloud Security'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#F7F6EE] to-[#EFEEDE]',
        pillBg: 'bg-amber-50',
        pillText: 'text-amber-950 font-bold',
        accentBorder: 'border-amber-200',
        glowColor: 'rgba(245, 158, 11, 0.2)',
        iconColor: '#d97706',
        cardBorder: 'border-amber-200/90',
        topRail: 'from-amber-400 via-orange-500 to-rose-400',
      },
      visualType: 'strategy',
    },
    {
      id: 'scale',
      step: 'PILLAR 04',
      badge: 'COMMERCIAL SCALE',
      title: 'Turnkey Digital Products',
      subtitle: 'Built for Conversion & Growth',
      shortDesc:
        'Harmonized fullstack web applications that captivate visitors, elevate brand status, and drive measurable revenue.',
      fullDesc:
        'The synthesis of bespoke spatial aesthetics and resilient engineering. Every touchpoint is optimized to turn visitors into qualified leads and paying clients, providing your company with a distinct competitive advantage.',
      specs: [
        '100% bespoke design system tailored to your unique market',
        'Lightning-fast sub-second loading speed on global CDNs',
        'Fluid micro-interactions driving higher user engagement',
        'Seamless end-to-end user journeys engineered for conversion',
      ],
      deliverables: [
        'Launch-ready digital platform built to scale effortlessly',
        'Integrated lead capture and interactive client intake flow',
        'Production-grade architecture ready for marketing campaigns',
      ],
      tags: ['Turnkey Launch', 'High Conversion', 'Ultra Fast', 'Custom Studio'],
      colorTheme: {
        archBg: 'bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE]',
        pillBg: 'bg-violet-50',
        pillText: 'text-violet-950 font-bold',
        accentBorder: 'border-violet-200',
        glowColor: 'rgba(167, 139, 250, 0.25)',
        iconColor: '#7c3aed',
        cardBorder: 'border-violet-200/90',
        topRail: 'from-violet-500 via-indigo-600 to-pink-500',
      },
      visualType: 'product',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            We Combine <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-orange via-pink-500 to-brand-primary bg-clip-text text-transparent">
              Creativity, Code & Strategy
            </span>
          </h2>

          <p className="text-slate-650 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            How we create: thoughtful design, handcrafted precision, and custom code engineered to give your brand an unfair advantage.
          </p>
        </div>

        {/* Four Engineering & Design Pillars Grid (Clean, Luxurious 4-Col Layout - Direct Full Page Specs Navigation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {cards.map((card) => (
            <Interactive3DCard
              key={card.title}
              card={card}
            />
          ))}
        </div>

        {/* Professional Studio Technical Guarantee Strip */}
        <div className="mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-[28px] clay-card bg-gradient-to-r from-white via-slate-50 to-white border border-slate-200/90 shadow-lg text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-[9.5px] font-black uppercase tracking-wider text-indigo-600 block">
              CRAFTED WITH INTENTION
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-sans">
              Handcrafted Architecture. Zero Shortcuts.
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-650 font-medium max-w-lg leading-relaxed">
              Every detail is custom-built from the ground up — tailored to your brand's unique identity, engineered for scale, and optimized for real conversion.
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
    </section>
  );
}