import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Layers,
  X,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface ServiceItemData {
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
  };
  visualType: 'web' | 'ai' | 'mobile' | 'saas' | 'design' | 'strategy';
}

function ServiceCard({
  service,
  onOpenModal,
}: {
  service: ServiceItemData;
  onOpenModal: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
      onClick={onOpenModal}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="clay-card bg-white/95 backdrop-blur-md border border-white/90 hover:border-slate-350 p-6 rounded-[32px] flex flex-col justify-between text-left relative overflow-hidden group shadow-xl hover:shadow-slate-300/60 transition-all duration-300 cursor-pointer select-none"
    >
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

            {/* Visual Type 2: AI-Powered Applications */}
            {visualType === 'ai' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-slate-900 border border-slate-750 shadow-lg p-2.5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <div className="flex items-center space-x-1">
                      <Cpu className="w-2.5 h-2.5 text-purple-400" />
                      <span className="font-mono text-[7.5px] font-bold text-slate-300">Neural Agent Console</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  <div className="space-y-0.5 font-mono text-[7px] text-slate-300">
                    <div className="text-purple-300 font-bold">&gt; agent.execute(query)</div>
                    <div className="text-emerald-400">// Streaming token output...</div>
                  </div>

                  <div className="flex items-center justify-between text-[6.5px] font-mono text-slate-400 border-t border-slate-800 pt-0.5">
                    <span>RAG Vectors</span>
                    <span className="text-purple-300 font-bold">LLM Pipeline</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Zap className="w-2.5 h-2.5 text-purple-600" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    AI AGENT WORKFLOWS
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
                  className="w-42 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative"
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

            {/* Visual Type 4: SaaS Product Development */}
            {visualType === 'saas' && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={isHovered ? { y: -4, scale: 1.04 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-44 h-26 rounded-xl bg-white shadow-md border border-slate-200 p-2.5 flex flex-col justify-between relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center space-x-1">
                      <Cloud className="w-3 h-3 text-pink-500" />
                      <span className="font-mono text-[8px] font-bold text-slate-700">SaaS Metrics Console</span>
                    </div>
                    <span className="font-mono text-[7px] font-bold text-pink-600">MRR +48%</span>
                  </div>

                  <div className="flex items-end space-x-1.5 h-7 pt-1 px-1">
                    <div className="h-3 flex-1 bg-pink-100 rounded-t" />
                    <div className="h-4 flex-1 bg-pink-200 rounded-t" />
                    <div className="h-6 flex-1 bg-pink-400 rounded-t" />
                    <div className="h-7 flex-1 bg-pink-500 rounded-t" />
                  </div>

                  <div className="font-mono text-[7px] text-slate-500 flex justify-between">
                    <span>Multi-Tenant DB</span>
                    <span className="text-pink-600 font-bold">Stripe Billing</span>
                  </div>
                </motion.div>

                <div className="absolute -bottom-1 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-1">
                  <Cloud className="w-2.5 h-2.5 text-pink-500" />
                  <span className="font-mono text-[8px] font-black text-slate-800 tracking-wider">
                    SCALABLE SAAS PRODUCTS
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

          <span className="text-[10px] font-black text-brand-primary group-hover:text-brand-orange transition-colors flex items-center space-x-1 font-mono uppercase tracking-wider">
            <span>Explore Specs</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItemData | null>(null);

  const services: ServiceItemData[] = [
    {
      number: '01',
      badge: '3D WEB EXPERIENCES',
      title: 'Premium Website Design',
      subtitle: 'Spatial WebGL & Cinematic Interactions',
      description: 'Next-generation web platforms combining custom visual identities, fluid motion rhythms, and 120 FPS 3D interactive canvases.',
      fullDesc:
        'We craft editorial, motion-rich web presences that stand out in crowded markets. Built with React 19, Babylon.js, Three.js, and Tailwind CSS v4, our websites pair architectural aesthetics with sub-second page performance.',
      deliverables: [
        'Custom 3D Scene Assembly & GLSL Shaders',
        'Framer Motion Micro-Interactions & Gestures',
        'Mobile-Responsive 3D Viewport Fallbacks',
        'SEO Metadata Architecture & Fast Core Web Vitals',
      ],
      specs: [
        'React 19 + Vite + Tailwind CSS v4',
        'Babylon.js & Three.js Canvas Orchestration',
        'WCAG 2.1 AAA Accessibility Conformance',
        'Automatic 60-120 FPS adaptive frame rates',
      ],
      techStack: ['React 19', 'Babylon.js', 'Tailwind CSS', 'Framer Motion'],
      icon: Laptop,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#F0F5FA] to-[#E5EDF6]',
        borderAccent: 'border-cyan-200',
        pillBg: 'bg-cyan-50',
        pillText: 'text-cyan-900 font-bold',
        glowColor: 'rgba(96, 165, 250, 0.2)',
        iconColor: '#0284c7',
      },
      visualType: 'web',
    },
    {
      number: '02',
      badge: 'INTELLIGENT SYSTEMS',
      title: 'AI-Powered Applications',
      subtitle: 'Neural Interfaces & Autonomous Workflows',
      description: 'Production AI applications equipped with natural language interfaces, streaming token responses, and retrieval-augmented generation.',
      fullDesc:
        'From generative intelligence copilots to autonomous agent workflows, we build end-to-end AI applications with intuitive interfaces and sub-second feedback loops.',
      deliverables: [
        'LLM Orchestration & Prompt Chains',
        'Vector Embeddings & Semantic Search Pipelines',
        'Real-Time Streaming UI with WebSockets / SSE',
        'Context-Aware Chatbots & Autonomous Tools',
      ],
      specs: [
        'OpenAI / Anthropic API Gateway Integration',
        'Vector DB Integration (pgvector / Pinecone)',
        'Node.js & FastAPI Microservices',
        'Strict Zod runtime payload validation',
      ],
      techStack: ['OpenAI', 'Anthropic', 'Node.js', 'Vector DB'],
      icon: Cpu,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FAF5FF] to-[#EFE5FC]',
        borderAccent: 'border-purple-200',
        pillBg: 'bg-purple-50',
        pillText: 'text-purple-900 font-bold',
        glowColor: 'rgba(192, 132, 252, 0.2)',
        iconColor: '#9333ea',
      },
      visualType: 'ai',
    },
    {
      number: '03',
      badge: 'MOBILE PLATFORMS',
      title: 'Mobile App Development',
      subtitle: 'Native Touch & Fluid Haptics',
      description: 'Pixel-precise iOS and Android applications crafted with native gestures, offline cache resilience, and biometric security.',
      fullDesc:
        'We engineer fluid cross-platform mobile apps using React Native and native Swift modules that feel responsive, intuitive, and seamlessly synchronized with cloud databases.',
      deliverables: [
        'Cross-Platform iOS & Android Deployments',
        'Offline Synchronization & Local Storage Cache',
        'Biometric Auth (FaceID / Fingerprint)',
        'App Store & Google Play Submission Support',
      ],
      specs: [
        'React Native + TypeScript Architecture',
        'Haptic micro-interaction choreographies',
        'Sub-100ms offline query response times',
        'Encrypted local token vaults',
      ],
      techStack: ['React Native', 'Swift', 'TypeScript', 'PostgreSQL'],
      icon: Smartphone,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5]',
        borderAccent: 'border-orange-200',
        pillBg: 'bg-orange-50',
        pillText: 'text-orange-950 font-bold',
        glowColor: 'rgba(251, 146, 60, 0.2)',
        iconColor: '#ea580c',
      },
      visualType: 'mobile',
    },
    {
      number: '04',
      badge: 'ENTERPRISE CLOUD',
      title: 'SaaS Product Development',
      subtitle: 'Multi-Tenant Hyperscale Architecture',
      description: 'Scalable multi-tenant cloud software with subscription billing, role-based access control, and intuitive analytics consoles.',
      fullDesc:
        'We build SaaS platforms from concept to hyperscale. Powered by Node.js, Express, and PostgreSQL, our software foundations handle high-frequency concurrent traffic effortlessly.',
      deliverables: [
        'Multi-Tenant Relational Database Schema',
        'Stripe & LemonSqueezy Subscription Billing',
        'Role-Based Access Control (RBAC) & Teams',
        'Real-Time Telemetry & Admin Dashboards',
      ],
      specs: [
        'PostgreSQL 15 connection pool architecture',
        'JWT authentication & session token rotation',
        'Rate-limited Express REST endpoints',
        'Database migration and seeding pipelines',
      ],
      techStack: ['Node.js', 'Express', 'PostgreSQL', 'Stripe'],
      icon: Cloud,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#FDF2F8] to-[#FCE7F3]',
        borderAccent: 'border-pink-200',
        pillBg: 'bg-pink-50',
        pillText: 'text-pink-950 font-bold',
        glowColor: 'rgba(244, 114, 182, 0.2)',
        iconColor: '#db2777',
      },
      visualType: 'saas',
    },
    {
      number: '05',
      badge: 'DESIGN ARCHITECTURE',
      title: 'UI/UX Design Systems',
      subtitle: 'Scalable Tokens & Component Libraries',
      description: 'Mathematically scaled design tokens, comprehensive Figma kits, and matched React TypeScript component systems.',
      fullDesc:
        'A design system is your product’s foundational operating system. We establish shared token vocabularies across design and engineering, accelerating feature shipping by 4x.',
      deliverables: [
        'Design Token Architecture (Color, Type, Spacing)',
        'Comprehensive Figma Component Kits',
        'Matched React / Tailwind CSS Component System',
        'Full Accessibility Documentation (WCAG AAA)',
      ],
      specs: [
        'Framer Motion interaction choreography',
        'Pastel claymorphism lighting and inset tokens',
        'Accessible color contrast ratios (> 4.5:1)',
        'Clean semantic HTML and ARIA labels',
      ],
      techStack: ['Figma', 'Design Tokens', 'Tailwind CSS', 'React 19'],
      icon: Palette,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF]',
        borderAccent: 'border-indigo-200',
        pillBg: 'bg-indigo-50',
        pillText: 'text-indigo-950 font-bold',
        glowColor: 'rgba(129, 140, 248, 0.2)',
        iconColor: '#4f46e5',
      },
      visualType: 'design',
    },
    {
      number: '06',
      badge: 'COMMERCIAL IMPACT',
      title: 'Digital Strategy',
      subtitle: 'Conversion Funnels & Market Positioning',
      description: 'Data-driven product strategy that aligns technical feasibility with commercial viability to outpace competitors and maximize ROI.',
      fullDesc:
        'We diagnose user conversion funnels, benchmark market landscapes, and architect product roadmaps that transform visitors into loyal, recurring enterprise customers.',
      deliverables: [
        'Conversion Funnel Audit & Friction Mapping',
        'Technical Architecture & Stack Selection',
        'Product Roadmap & Go-To-Market Milestones',
        'Analytics & Performance Telemetry Setup',
      ],
      specs: [
        'Real-time behavioral event logging',
        'Data-backed A/B testing frameworks',
        'Sub-second query analytical dashboards',
        'High-converting landing page optimization',
      ],
      techStack: ['Analytics', 'Telemetry', 'Funnel Design', 'Growth Engine'],
      icon: LineChart,
      colorTheme: {
        bgGradient: 'bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5]',
        borderAccent: 'border-emerald-200',
        pillBg: 'bg-emerald-50',
        pillText: 'text-emerald-950 font-bold',
        glowColor: 'rgba(52, 211, 153, 0.2)',
        iconColor: '#059669',
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
        <div className="max-w-3xl mx-auto mb-12 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200 shadow-xs text-slate-800 font-mono text-[9px] font-black uppercase tracking-[0.25em]">
            <Layers className="w-3.5 h-3.5 text-brand-primary" />
            <span>OUR CAPABILITIES // FULL-CYCLE STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            What We <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Create</span>
          </h2>

          <p className="text-slate-650 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Immersive, functional, and highly optimized digital product capabilities engineered from first principles to scale your business.
          </p>
        </div>

        {/* 3x2 Grid with Interactive 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard 
              key={service.number} 
              service={service} 
              onOpenModal={() => setSelectedService(service)}
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

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
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
                    CAPABILITY {selectedService.number}
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider font-mono shadow-xs border ${selectedService.colorTheme.pillBg} ${selectedService.colorTheme.pillText} ${selectedService.colorTheme.borderAccent}`}
                  >
                    {selectedService.badge}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-primary tracking-wide">
                  {selectedService.subtitle}
                </p>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-650 leading-relaxed font-normal">
                {selectedService.fullDesc}
              </p>

              {/* Specifications & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Technical Architecture</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedService.specs.map((spec, i) => (
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
                    <span>What We Deliver</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedService.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Badges & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-150">
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[9px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-primary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-orange/20 clay-button"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
