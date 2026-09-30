import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Check,
  Zap,
  X,
  Maximize2,
} from 'lucide-react';

export interface MissionProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  url: string;
  overview: string;
  clientChallenge: string;
  solution: string;
  impactMetric: string;
  metricLabel: string;
  techStack: string[];
  specs: string[];
  deliverables: string[];
  mainImage: string;
  secondaryImage: string;
  statusBadge: string;
  themeColor: {
    accent: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
  };
}

const signatureProjects: MissionProject[] = [
  {
    id: 'liquidedge-trading',
    number: '01',
    title: 'LiquidEdge Trading Platform',
    subtitle: 'Institutional Fintech & High-Frequency Clearing Engine',
    category: 'Fintech Platform & WebGL Terminal',
    year: '2026',
    url: 'liquidedge.trade/terminal',
    overview:
      'LiquidEdge is a high-throughput enterprise trading platform engineered for multi-asset execution across crypto, foreign exchange, commodities, and equity indexes. Built with sub-millisecond data pipelines and custom WebGL order-book visualizations.',
    clientChallenge:
      'Client required real-time tick streaming without DOM latency bottlenecks, capable of processing 250,000 parallel updates per second across global financial nodes.',
    solution:
      'We engineered a custom WebGL canvas rendering engine with Web Workers offloading ledger calculations and an active PostgreSQL connection pool streaming transactional telemetry.',
    impactMetric: '$4.2B+',
    metricLabel: 'Daily Transaction Volume',
    techStack: ['React 19', 'TypeScript', 'PostgreSQL 15', 'WebGL Canvas', 'Node.js', 'Docker'],
    specs: [
      'Sub-0.8s transactional clearing latency',
      'Hardware-accelerated WebGL candlestick charting',
      'Resilient PostgreSQL connection pool with read replicas',
      'Zod-validated biometric authentication tokens',
    ],
    deliverables: [
      'Institutional trader dashboard & multi-monitor workspace',
      'Real-time WebSocket event streaming node',
      'Automated risk management & margin calculation engine',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80',
    statusBadge: 'JUST DELIVERED // PRODUCTION READY',
    themeColor: {
      accent: '#0284c7',
      glow: 'rgba(2, 132, 199, 0.25)',
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-900 border-sky-200',
    },
  },
  {
    id: 'nebula-orchestrator',
    number: '02',
    title: 'Nebula Cloud Orchestrator',
    subtitle: 'Autonomous Multi-Region Server Intelligence Console',
    category: 'SaaS Platform & Cloud Architecture',
    year: '2026',
    url: 'nebula.cloud/orchestrate',
    overview:
      'An elite multi-region infrastructure console designed for DevOps and site reliability engineers. Offers real-time topological node mapping, predictive traffic routing, and automated failover orchestration.',
    clientChallenge:
      'Existing cloud monitoring dashboards caused cognitive fatigue with sluggish rendering times across 10,000+ distributed cluster containers.',
    solution:
      'Architected a 120 FPS spatial topological network graph with Framer Motion spring physics, integrated with a stateless Express REST backend and PostgreSQL UUID indexing.',
    impactMetric: '99.999%',
    metricLabel: 'Verified Infrastructure SLA',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL 15', 'Framer Motion'],
    specs: [
      'Zero-downtime cluster topology visualization',
      'Sub-second query analytical dashboards',
      'Automated multi-tenant database partitioning',
      'Full TypeScript end-to-end type safety',
    ],
    deliverables: [
      'Centralized multi-cloud command console',
      'Automated load-balancing & autoscaling orchestrator',
      'Incident diagnostic & telemetry event logger',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    statusBadge: 'ENTERPRISE SYSTEM // VERIFIED SCALE',
    themeColor: {
      accent: '#818cf8',
      glow: 'rgba(129, 140, 248, 0.25)',
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-900 border-indigo-200',
    },
  },
  {
    id: 'atlas-spatial-wellness',
    number: '03',
    title: 'Atlas Biometric Health Suite',
    subtitle: 'Spatial Activity Tracker & Preventive Diagnostics',
    category: 'Cross-Platform Mobile & Web Experience',
    year: '2026',
    url: 'atlashealth.io/experience',
    overview:
      'A holistic biometric intelligence application tracking user biomechanics, cardio variability, and circadian rhythm optimization with fluid spatial tactile feedback.',
    clientChallenge:
      'Transform complex clinical physiological data into intuitive, delightful mobile and web experiences that drive sustained daily habit formation.',
    solution:
      'Crafted an organic claymorphism visual language with real-time biometric charts, haptic feedback simulations, and zero-latency encrypted sync.',
    impactMetric: '1.8M+',
    metricLabel: 'Active Daily Synchronizations',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Babylon.js', 'PostgreSQL 15'],
    specs: [
      'Biometric cryptographic encryption at rest and in transit',
      'Adaptive circadian color temperature UI shifts',
      'Offline-first client caching resilience',
      '60 FPS motion transitions with spring physics',
    ],
    deliverables: [
      'Universal responsive web app & mobile UI foundations',
      'Predictive metabolic analysis graphs',
      'Custom Figma design system with 200+ components',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1510051646316-c3f272a0c482?auto=format&fit=crop&w=800&q=80',
    statusBadge: 'NATIVE BIO-HAPTICS // ACCREDITED',
    themeColor: {
      accent: '#10b981',
      glow: 'rgba(16, 185, 129, 0.25)',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-900 border-emerald-200',
    },
  },
  {
    id: 'chrono-atelier',
    number: '04',
    title: 'Chrono Horology Atelier',
    subtitle: 'Interactive 3D WebGL Configurator for Independent Watchmakers',
    category: 'Luxury Brand Experience & 3D WebGL',
    year: '2026',
    url: 'chrono-atelier.ch/configurator',
    overview:
      'A hyper-tactile digital showroom and bespoke configurator for independent Swiss watchmakers. Features photorealistic 3D ray-traced materials, custom tourbillon animations, and macro mechanical inspection.',
    clientChallenge:
      'Traditional product photographs failed to convey the exquisite micromechanical hand-finishing of $80,000+ bespoke chronographs to high-net-worth global collectors.',
    solution:
      'Developed an interactive 3D WebGL ray-marched canvas powered by Babylon.js with dynamic environment reflections and real-time movement simulations.',
    impactMetric: '+185%',
    metricLabel: 'Collector Inbound Consultations',
    techStack: ['Babylon.js 3D', 'WebGL', 'React 19', 'TypeScript', 'Vite 8'],
    specs: [
      'Physically-based rendering (PBR) metal & sapphire shaders',
      'Dynamic lighting rig responsive to cursor motion',
      'Sub-2 second full asset load optimization',
      'Direct client inquiry integration with backend API',
    ],
    deliverables: [
      'Interactive 3D bespoke timepiece configurator',
      'Private collector VIP booking portal',
      'High-fidelity digital certificate verification system',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    statusBadge: '3D SPATIAL RAYTRACING // 120 FPS',
    themeColor: {
      accent: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.25)',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-900 border-amber-200',
    },
  },
  {
    id: 'naturals-salon-commerce',
    number: '05',
    title: 'Naturals Luxury Salon Commerce',
    subtitle: 'High-Converting Multi-Location Booking & E-Commerce Storefront',
    category: 'Full-Cycle Web Platform & E-Commerce',
    year: '2026',
    url: 'naturals.luxury/studio',
    overview:
      'A bespoke digital flagship reimagining the luxury salon experience. Combines interactive stylist availability scheduling, personalized treatment recommendations, and a headless boutique beauty storefront.',
    clientChallenge:
      'High friction in multi-city branch scheduling and sluggish cart abandonment across mobile visitors.',
    solution:
      'Engineered an instant single-page appointment booking wizard with localized availability caches, sub-second checkout transitions, and automated SMS reminders.',
    impactMetric: '+64%',
    metricLabel: 'Mobile Booking Conversion Rate',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL 15', 'Tailwind CSS v4'],
    specs: [
      'Sub-second instantaneous route changes with React Router',
      'Real-time seat reservation lock preventing double bookings',
      'Automated booking confirmation telemetry',
      'Full WCAG 2.1 AA accessibility contrast adherence',
    ],
    deliverables: [
      'Multi-branch booking engine & digital treatment menu',
      'Headless e-commerce product catalog',
      'Real-time store manager schedule management console',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    statusBadge: 'FULLSTACK APPOINTMENT ENGINE',
    themeColor: {
      accent: '#ec4899',
      glow: 'rgba(236, 72, 153, 0.25)',
      badgeBg: 'bg-pink-50',
      badgeText: 'text-pink-900 border-pink-200',
    },
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<MissionProject | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeProject = signatureProjects[activeIndex];

  // Mouse tilt tracking with fluid spring physics on the 3D device stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % signatureProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + signatureProjects.length) % signatureProjects.length);
  };

  // Keyboard navigation for power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="work" className="py-20 lg:py-24 bg-[#edf2f7] relative overflow-hidden select-none border-b border-slate-200/80">
      {/* Background Soft Ambient Studio Glows */}
      <div className="absolute top-[25%] left-1/4 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-1/4 translate-x-1/2 w-[600px] h-[300px] bg-brand-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Bar (Zolarys Atelier Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-200/80">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200 shadow-xs text-slate-800 font-mono text-[9px] font-black uppercase tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block" />
              <span>SELECTED MISSIONS // PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
              Built to <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Scale Your Vision.</span>
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-700 hover:text-brand-primary bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all self-start sm:self-end group clay-card"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Zolarys-Style Split 3D Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: 3D Dual-Device Studio Stage */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedProject(activeProject)}
            className="lg:col-span-7 relative cursor-pointer group"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-[36px] p-6 sm:p-8 bg-gradient-to-b from-white/95 to-slate-50/90 border border-white/90 shadow-2xl hover:shadow-slate-300/80 transition-all duration-300 overflow-hidden clay-card"
            >
              {/* Top floating stage metadata badge */}
              <div className="flex items-center justify-between mb-5 relative z-20">
                <span
                  className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[9px] font-black font-mono uppercase tracking-wider border shadow-xs ${activeProject.themeColor.badgeBg} ${activeProject.themeColor.badgeText}`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{activeProject.statusBadge}</span>
                </span>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    CLICK TO INSPECT FULL SPEC
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Main 3D Studio Display (Desktop Monitor Frame) */}
              <div className="relative rounded-[24px] overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl aspect-[16/10]">
                {/* Browser Top Navigation Bar */}
                <div className="h-8 bg-slate-800/95 px-4 flex items-center justify-between border-b border-slate-700/50">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-slate-900/80 text-[10px] font-mono text-slate-400 flex items-center space-x-1.5 border border-slate-700/40">
                    <span className="text-emerald-400">https://</span>
                    <span>{activeProject.url}</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Animated Project Image Screenshot */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="w-full h-[calc(100%-32px)] relative overflow-hidden"
                  >
                    <img
                      src={activeProject.mainImage}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-top filter brightness-[0.98] group-hover:brightness-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Overlapping Angled Secondary Device (Laptop / Biometric Terminal) */}
              <div
                style={{ transform: 'translateZ(36px)' }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 w-[48%] sm:w-[42%] aspect-[16/10] rounded-[18px] overflow-hidden border-2 border-white/90 shadow-2xl bg-slate-900 hidden sm:block pointer-events-none"
              >
                <div className="h-5 bg-slate-800/90 px-3 flex items-center border-b border-slate-700/50">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 block" />
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`sec-${activeProject.id}`}
                    src={activeProject.secondaryImage}
                    alt={`${activeProject.title} responsive display`}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-[calc(100%-20px)] object-cover"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Project Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-5"
              >
                {/* Project Index Counter & Year */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-black text-slate-900 tracking-wider">
                      {activeProject.number} / 0{signatureProjects.length}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {activeProject.year}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] font-black uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-md border border-brand-primary/15">
                    {activeProject.category}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-brand-primary tracking-wide">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Overview Description */}
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal">
                  {activeProject.overview}
                </p>

                {/* Key Impact Metric Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between clay-card">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                      KEY DELIVERED OUTCOME
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {activeProject.metricLabel}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 tracking-tight block text-emerald-600">
                      {activeProject.impactMetric}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                    ENGINEERING FOUNDATION
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-[9.5px] font-bold shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(activeProject)}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-primary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-orange/20 clay-button cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
                  >
                    <span>Request Similar Build</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Zolarys-Style Floating Controller & Pagination Bead Bar */}
        <div className="mt-14 max-w-xl mx-auto flex items-center justify-between p-2 rounded-full bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md clay-card">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/60"
            title="Previous project (or press Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Project Number Beads (01, 02, 03, 04, 05) */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {signatureProjects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title={project.title}
                >
                  {project.number}
                </button>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/60"
            title="Next project (or press Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Deep-Dive Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="clay-card bg-white max-w-3xl w-full rounded-[36px] p-6 sm:p-8 shadow-2xl relative border border-slate-200/90 text-left space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-150">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-slate-400">
                    MISSION {selectedProject.number}
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider font-mono shadow-xs border ${selectedProject.themeColor.badgeBg} ${selectedProject.themeColor.badgeText}`}
                  >
                    {selectedProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-primary tracking-wide">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Cover Image in Modal */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/8] border border-slate-200 shadow-md">
                <img
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview & Client Problem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                    THE ARCHITECTURAL CHALLENGE
                  </span>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {selectedProject.clientChallenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                    HOW VOXOR LAB SOLVED IT
                  </span>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Specs & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Technical Architecture Specs</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedProject.specs.map((spec, i) => (
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
                    <span>Production Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedProject.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack & Modal Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-150">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[9px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
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
