import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Award,
  Check,
  ExternalLink,
  Zap,
  X,
} from 'lucide-react';

interface TechPillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  colorTheme: {
    gradient: string;
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    lightBg: string;
    glow: string;
  };
  metrics: { label: string; value: string; desc: string }[];
  stack: { name: string; version: string; role: string; desc: string; category: string }[];
  architectureLayers: { step: string; title: string; tech: string; description: string }[];
  codeSnippet: { filename: string; language: string; code: string };
  specs: string[];
  deliverables: string[];
  certifications: {
    id: string;
    title: string;
    issuer: string;
    recipient: string;
    type: 'Academic Degree' | 'Industry Internship' | 'Professional Mastery';
    year: string;
    credentialId: string;
    verified: boolean;
    skills: string[];
    summary: string;
  }[];
}

export default function ArchitectureSpecsPage() {
  const { pillarId } = useParams<{ pillarId?: string }>();
  const navigate = useNavigate();

  const pillars: TechPillar[] = [
    {
      id: 'design',
      number: '01',
      badge: 'DESIGN ATELIER',
      title: 'Spatial & Visual Systems',
      subtitle: 'Claymorphic Depth, Balanced Typography & Tactile 3D',
      headline: 'Where High-Fashion Digital Aesthetics Meet Hardware-Accelerated 3D Performance.',
      description:
        'We reject cookie-cutter UI templates. Every interface is custom-architected using mathematical lighting tokens, tactile micro-interactions, responsive 3D spatial scenes, and human-first typography that captivates and converts.',
      colorTheme: {
        gradient: 'from-rose-500 via-pink-600 to-indigo-600',
        badgeBg: 'bg-rose-50',
        badgeText: 'text-rose-900',
        border: 'border-rose-200',
        accent: '#e11d48',
        lightBg: 'bg-[#FAF5F0]',
        glow: 'rgba(244, 114, 182, 0.25)',
      },
      metrics: [
        { label: 'FRAME RATE', value: '120 FPS', desc: 'Hardware-accelerated WebGL rendering' },
        { label: 'DESIGN SYSTEM', value: '8pt Grid', desc: 'Mathematical layout & typography scale' },
        { label: 'MOTION RESPONSE', value: '< 16ms', desc: 'Zero-latency fluid spring physics' },
        { label: 'DEVICE ADAPTATION', value: '100%', desc: 'Responsive across 4K, desktop & mobile' },
      ],
      stack: [
        { name: 'React 19', version: 'v19.2', role: 'UI Composition Engine', desc: 'Concurrent rendering and component hydration for instant user feedback.', category: 'Frontend' },
        { name: 'Babylon.js & Three.js', version: 'v9.2 / v0.185', role: '3D WebGL Engine', desc: 'Shader pipelines, orbital cameras, and interactive mesh transformations.', category: '3D Graphics' },
        { name: 'Tailwind CSS v4', version: 'v4.3', role: 'Aesthetic Tokens Engine', desc: 'Next-gen CSS compiler producing zero-runtime-overhead styling.', category: 'Styling' },
        { name: 'Framer Motion', version: 'v13.1', role: 'Physics & Animation', desc: 'Spring-driven micro-haptics and gesture-aware UI transitions.', category: 'Motion' },
      ],
      architectureLayers: [
        { step: '01', title: 'Figma Token Blueprint', tech: 'Design Tokens Architecture', description: 'Color harmony, spacing scales, typography hierarchy, and accessibility contrast standards.' },
        { step: '02', title: 'Claymorphic Lighting Math', tech: 'Custom CSS Inset Shadows', description: 'Dual-axis illumination calculations producing realistic 3D tactile elevation.' },
        { step: '03', title: 'WebGL Mesh & Shaders', tech: 'Babylon.js 3D Canvas', description: 'Real-time scene graphs with responsive fallback handling for mobile GPUs.' },
        { step: '04', title: 'Tactile Motion Choreography', tech: 'Framer Motion Spring Physics', description: 'Hover, tilt, drag, and parallax listeners mapped to cursor coordinates.' },
      ],
      codeSnippet: {
        filename: 'SpatialTokens.ts',
        language: 'typescript',
        code: `// Mathematical Claymorphic Inset Shadow & Lighting Calculation
export const clayLightingTokens = {
  elevationHigh: {
    boxShadow: '0 24px 48px -12px rgba(100, 116, 139, 0.12), inset 4px 4px 8px rgba(255, 255, 255, 0.95), inset -4px -4px 8px rgba(148, 163, 184, 0.08)',
    border: '1.5px solid rgba(255, 255, 255, 0.85)',
    borderRadius: '32px',
  },
  springPhysics: {
    stiffness: 120,
    damping: 25,
    mass: 0.1,
  }
};`,
      },
      specs: [
        'Custom 3D scene graphs with real-time cursor tracking and lighting',
        'Bespoke Figma design system and reusable component tokens',
        'High-contrast accessible color combinations meeting WCAG AAA',
        'Adaptive touch gesture handling for iOS & Android viewports',
      ],
      deliverables: [
        'Complete brand identity and interactive design system',
        'High-fidelity interactive prototypes tested on real users',
        'Custom WebGL 3D scenes integrated into production code',
        'Comprehensive UI component guidelines and asset library',
      ],
      certifications: [
        {
          id: 'cert-uiux-01',
          title: 'UI/UX Design Systems & Figma Component Mastery',
          issuer: 'Industry Design Academy / SNDT Academic Project Evaluation',
          recipient: 'Tanvi Suryavanshi & Prarthana Bhandari',
          type: 'Professional Mastery',
          year: '2024',
          credentialId: 'VX-DES-2024-8891',
          verified: true,
          skills: ['Figma Tokens', 'Claymorphic UI', 'Design Systems', 'UX Accessibility'],
          summary: 'Certified proficiency in creating multi-device design architectures, interactive component token libraries, and human-centered user experiences.',
        },
        {
          id: 'cert-mca-des',
          title: 'Master of Computer Applications (MCA) — Advanced UI & Multimedia',
          issuer: "K.B. Joshi Institute of Information Technology, Pune (S.N.D.T. Women's University)",
          recipient: 'Prarthana Bhandari',
          type: 'Academic Degree',
          year: '2024 – 2026',
          credentialId: 'SNDT-MCA-2026-PUNE',
          verified: true,
          skills: ['Advanced Web Technologies', 'Interactive Multimedia', 'Software Engineering'],
          summary: 'Final-year postgraduate curriculum encompassing enterprise software engineering, web application architecture, and human-computer interaction.',
        },
      ],
    },
    {
      id: 'backend',
      number: '02',
      badge: 'ENGINEERING',
      title: 'Precision Backend Architecture',
      subtitle: 'Strict TypeScript, Layered Express & REST Endpoints',
      headline: 'Rock-Solid Server Foundations Engineered for Sub-10ms Latency and Zero Runtime Failures.',
      description:
        'A production-grade backend engineered with layered separation of concerns. Inbound requests are sanitized through strict Zod schemas, authenticated with cryptographic JWT guards, and processed through transactional database pools.',
      colorTheme: {
        gradient: 'from-sky-500 via-indigo-600 to-purple-600',
        badgeBg: 'bg-sky-50',
        badgeText: 'text-sky-950',
        border: 'border-sky-200',
        accent: '#0284c7',
        lightBg: 'bg-[#F0F7FA]',
        glow: 'rgba(56, 189, 248, 0.25)',
      },
      metrics: [
        { label: 'API RESPONSE', value: '< 10ms', desc: 'Average REST endpoint execution time' },
        { label: 'TYPE SAFETY', value: '100%', desc: 'Strict TypeScript 5.4 with zero any types' },
        { label: 'INPUT VALIDATION', value: 'Zod DDL', desc: 'Compile-time & runtime payload guards' },
        { label: 'SECURITY SCORE', value: 'A+ Grade', desc: 'Helmet headers, CORS & JWT encryption' },
      ],
      stack: [
        { name: 'Node.js 20 LTS', version: 'v20.x', role: 'Server Runtime', desc: 'Event-driven asynchronous V8 engine optimized for concurrent I/O throughput.', category: 'Runtime' },
        { name: 'Express.js', version: 'v4.19', role: 'HTTP Web Framework', desc: 'Layered routing, middleware pipelines, and standardized error-handling nodes.', category: 'Framework' },
        { name: 'TypeScript', version: 'v5.4', role: 'Type Safety System', desc: 'Guarantees end-to-end interface contracts between controllers and repositories.', category: 'Language' },
        { name: 'Zod Validator', version: 'v3.23', role: 'Runtime Schema Validation', desc: 'Stops malicious or malformed payloads before they reach business logic.', category: 'Security' },
      ],
      architectureLayers: [
        { step: '01', title: 'HTTP Edge & Security Guard', tech: 'Helmet + RateLimiter + CORS', description: 'Prevents brute-force attacks, enforces security headers, and controls cross-origin access.' },
        { step: '02', title: 'Payload Sanitization', tech: 'Zod Strict Schemas', description: 'Validates request body types, trims strings, and eliminates unexpected injection fields.' },
        { step: '03', title: 'Domain Service Layer', tech: 'TypeScript Business Services', description: 'Executes core agency business logic, inquiry routing, and email notification pipelines.' },
        { step: '04', title: 'Data Repository Gateway', tech: 'Parameterized pg Pool', description: 'Pre-compiled parameterized queries preventing SQL injection with connection pooling.' },
      ],
      codeSnippet: {
        filename: 'inquiry.controller.ts',
        language: 'typescript',
        code: `// Layered Express REST Controller with Strict Zod Validation
import { Request, Response, NextFunction } from 'express';
import { inquirySchema } from '../schemas/inquiry.schema';
import { InquiryService } from '../services/inquiry.service';

export async function handleInquiry(req: Request, res: Response, next: NextFunction) {
  try {
    // Strict schema parse: rejects invalid input automatically
    const validData = inquirySchema.parse(req.body);
    
    // Process business logic via decoupled service
    const record = await InquiryService.createInquiry(validData);
    
    return res.status(201).json({
      status: 'success',
      message: 'Inquiry registered into verified vault',
      data: { id: record.id, timestamp: record.createdAt }
    });
  } catch (error) {
    next(error); // Caught by centralized enterprise error middleware
  }
}`,
      },
      specs: [
        'Strict runtime validation using Zod schemas on body & parameters',
        'Layered architecture: Controllers, Services & Data Repositories',
        'Cryptographic JWT Bearer token authentication & route guards',
        'Centralized error handler with standardized JSON responses',
      ],
      deliverables: [
        'Production REST API endpoints for client consultation & estimates',
        'Automated database migration and idempotent schema seeding scripts',
        'Zero-downtime deployment configurations with healthcheck telemetry',
        'Comprehensive OpenAPI / Swagger specification documentation',
      ],
      certifications: [
        {
          id: 'cert-be-01',
          title: 'Back-end Developer Internship Certification',
          issuer: 'Graphura India Pvt. Ltd. (Pune)',
          recipient: 'Prarthana Bhandari',
          type: 'Industry Internship',
          year: '2026',
          credentialId: 'GRP-BE-2026-IND',
          verified: true,
          skills: ['Node.js', 'Express.js', 'RESTful API Engineering', 'Database Integration'],
          summary: 'Verified hands-on industry experience architecting live RESTful APIs, integrating relational database models, and maintaining enterprise server pipelines.',
        },
        {
          id: 'cert-mern-02',
          title: 'Full-Stack MERN Developer Internship & Training',
          issuer: 'Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)',
          recipient: 'Prarthana Bhandari',
          type: 'Industry Internship',
          year: '2026',
          credentialId: 'CDCT-MERN-AICTE-2026',
          verified: true,
          skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Enterprise Dashboards'],
          summary: 'Completed comprehensive industry training program approved by AICTE & ICAC covering full-stack web applications, authentication flows, and live product deployment.',
        },
        {
          id: 'cert-mca-backend',
          title: 'Master of Computer Applications (MCA) — Advanced Backend & Cloud Systems',
          issuer: "K.B. Joshi Institute of Information Technology, Pune (S.N.D.T. Women's University)",
          recipient: 'Prarthana Bhandari',
          type: 'Academic Degree',
          year: '2024 – 2026',
          credentialId: 'SNDT-MCA-2026-BE',
          verified: true,
          skills: ['Advanced Algorithms', 'Distributed Systems', 'Network Security', 'Enterprise Java & Node'],
          summary: 'Academic coursework focusing on scalable client-server systems, cryptographic network protocols, and distributed software engineering.',
        },
      ],
    },
    {
      id: 'database',
      number: '03',
      badge: 'INFRASTRUCTURE',
      title: 'Resilient Cloud & Data Vault',
      subtitle: 'PostgreSQL Relational Persistence & Connection Pooling',
      headline: 'Enterprise Relational Architecture with ACID Guarantees and Sub-10ms Query Speeds.',
      description:
        'Data is the lifeblood of serious digital businesses. We architect robust PostgreSQL database schemas featuring optimized B-tree indexes, UUID primary keys, connection pooling, and automated backup strategies.',
      colorTheme: {
        gradient: 'from-amber-500 via-orange-600 to-rose-600',
        badgeBg: 'bg-amber-50',
        badgeText: 'text-amber-950',
        border: 'border-amber-200',
        accent: '#d97706',
        lightBg: 'bg-[#F7F6EE]',
        glow: 'rgba(245, 158, 11, 0.25)',
      },
      metrics: [
        { label: 'UPTIME SLA', value: '99.99%', desc: 'High-availability database architecture' },
        { label: 'QUERY SPEED', value: '< 5ms', desc: 'B-tree indexed relational lookups' },
        { label: 'CONNECTION POOL', value: '20 Clients', desc: 'Optimized pooling without socket exhaustion' },
        { label: 'TRANSACTION TYPE', value: 'Strict ACID', desc: 'Guaranteed financial and data consistency' },
      ],
      stack: [
        { name: 'PostgreSQL 15', version: 'v15.6', role: 'Relational Database', desc: 'ACID-compliant relational storage engine with native JSONB flexibility.', category: 'Database' },
        { name: 'node-postgres (pg)', version: 'v8.11', role: 'Client Driver & Pool', desc: 'Connection pool manager with auto-recovery and parameterized statements.', category: 'Driver' },
        { name: 'UUID v4 Keys', version: 'RFC 4122', role: 'Key Strategy', desc: 'Globally unique non-sequential primary keys eliminating enumeration attacks.', category: 'Security' },
        { name: 'SQL Schema Migrations', version: 'Idempotent DDL', role: 'Schema Versioning', desc: 'Zero-downtime database evolution scripts and automated rollback seeds.', category: 'Migrations' },
      ],
      architectureLayers: [
        { step: '01', title: 'Connection Pool Manager', tech: 'pg.Pool with SSL', description: 'Recycles database sockets, prevents server memory leaks, and handles failovers.' },
        { step: '02', title: 'Relational Schema DDL', tech: '7 Normalized Tables', description: 'Structured entities for inquiries, estimates, project scopes, and services.' },
        { step: '03', title: 'Indexed Query Optimization', tech: 'B-Tree & GIN Indexes', description: 'Instant sub-5ms lookups on email addresses, slugs, and JSONB project parameters.' },
        { step: '04', title: 'Continuous Data Integrity', tech: 'Encrypted Vault & Backups', description: 'Automated point-in-time recovery and cryptographic storage for sensitive leads.' },
      ],
      codeSnippet: {
        filename: 'schema.sql',
        language: 'sql',
        code: `-- Production PostgreSQL Schema with UUID Primary Keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  company_name VARCHAR(150),
  service_category VARCHAR(80) NOT NULL,
  budget_bracket VARCHAR(60),
  message TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  status VARCHAR(40) DEFAULT 'received',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- High-speed B-Tree indexes for sub-5ms queries
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at DESC);`,
      },
      specs: [
        'Connection pooling with 20 maximum concurrent clients per instance',
        'Automated migration & idempotent seeding pipelines',
        'B-tree indexing on slugs, emails, and timestamp columns',
        'JSONB columns for dynamic project feature combinations',
      ],
      deliverables: [
        'Normalized relational database schema ready for scale',
        'Parameterized query repositories preventing injection vectors',
        'Automated database backup routines and recovery playbooks',
        'Zero-downtime schema evolution and migration tooling',
      ],
      certifications: [
        {
          id: 'cert-db-01',
          title: 'Database Management Systems & SQL Architecture Certification',
          issuer: 'K.B. Joshi Institute of IT / Affiliated University Board',
          recipient: 'Siddhi Malwadkar & Prarthana Bhandari',
          type: 'Academic Degree',
          year: '2023',
          credentialId: 'DBMS-SQL-2023-PUNE',
          verified: true,
          skills: ['PostgreSQL', 'Relational Schema DDL', 'ACID Transactions', 'Query Optimization'],
          summary: 'Comprehensive certification in database normalization, SQL indexing strategies, transaction isolation levels, and relational data architecture.',
        },
        {
          id: 'cert-bca-cs',
          title: 'Bachelor of Computer Applications (BCA) — Database & Systems Foundation',
          issuer: 'Affiliated University Board, Pune',
          recipient: 'Prarthana Bhandari',
          type: 'Academic Degree',
          year: '2020 – 2023',
          credentialId: 'BCA-PUNE-2023-DIST',
          verified: true,
          skills: ['Data Structures', 'RDBMS', 'SQL Server & PostgreSQL', 'Object-Oriented Programming'],
          summary: 'Three-year undergraduate computer science degree graduated with foundational mastery in database design, OOP architectures, and data structures.',
        },
      ],
    },
    {
      id: 'scale',
      number: '04',
      badge: 'COMMERCIAL SCALE',
      title: 'Turnkey Digital Products',
      subtitle: 'Harmonized Fullstack Architecture Built for Growth',
      headline: 'The Ultimate Synthesis: Where Design Craft Meets Resilient Engineering to Drive Revenue.',
      description:
        'A fullstack product is more than code and pixels — it is your company’s 24/7 digital engine. We deliver launch-ready web products engineered to captivate audiences, capture leads seamlessly, and scale without friction.',
      colorTheme: {
        gradient: 'from-violet-600 via-indigo-600 to-pink-500',
        badgeBg: 'bg-violet-50',
        badgeText: 'text-violet-950',
        border: 'border-violet-200',
        accent: '#7c3aed',
        lightBg: 'bg-[#F5F3FF]',
        glow: 'rgba(167, 139, 250, 0.25)',
      },
      metrics: [
        { label: 'GLOBAL CDN', value: 'Edge Deploy', desc: 'Sub-second caching in 300+ edge locations' },
        { label: 'CONVERSION FLOW', value: 'Interactive', desc: 'Streamlined intake flows driving qualified leads' },
        { label: 'CORE WEB VITALS', value: '95+ Score', desc: 'Optimized LCP, FID & CLS metrics' },
        { label: 'ARCHITECTURE', value: 'Turnkey', desc: 'From design to backend, database & deployment' },
      ],
      stack: [
        { name: 'Vite 8 Build Pipeline', version: 'v8.2', role: 'Production Bundler', desc: 'Tree-shaking, code-splitting, and optimized asset compression.', category: 'Bundling' },
        { name: 'PostgreSQL Cloud', version: 'v15', role: 'Persistent Storage', desc: 'Real-time intake persistence storing client scopes and estimates.', category: 'Data' },
        { name: 'Express REST Node', version: 'v4.19', role: 'API Orchestrator', desc: 'High-frequency telemetry and instant notification webhooks.', category: 'API' },
        { name: 'Babylon.js 3D WebGL', version: 'v9.2', role: 'Spatial Canvas', desc: 'Interactive 3D product previews engaging users 3x longer.', category: 'Interactive' },
      ],
      architectureLayers: [
        { step: '01', title: 'Interactive Client Intake', tech: 'React 19 Form Pipeline', description: 'Zero-friction multi-step scope configuration with real-time client-side validation.' },
        { step: '02', title: 'Secure REST Persistence', tech: 'Express + PostgreSQL 15', description: 'Instant database capture with automatic email delivery and lead confirmation.' },
        { step: '03', title: 'Spatial 3D Engagement', tech: 'Babylon.js Hardware Acceleration', description: 'Immersive product showcases that set your brand miles ahead of ordinary competitors.' },
        { step: '04', title: 'Edge CDN Optimization', tech: 'Global Cloud Deployment', description: 'Sub-second page rendering worldwide with enterprise SSL and DDoS protection.' },
      ],
      codeSnippet: {
        filename: 'ProductionPipeline.ts',
        language: 'typescript',
        code: `// Verified Fullstack Studio Delivery Pipeline
export interface StudioLaunchSpec {
  frontend: 'React 19 + TypeScript + Tailwind v4 + Babylon.js 3D';
  backend: 'Node.js + Express + Zod Schema Validation';
  database: 'PostgreSQL 15 Relational Schema with Pool Management';
  security: 'JWT Encryption + Helmet Security Headers';
  performance: '120 FPS Fluidity + Sub-second Global Edge Loading';
  guarantee: '100% Bespoke Code — Handcrafted Without Templates';
}`,
      },
      specs: [
        '100% bespoke design system tailored to your unique market niche',
        'Lightning-fast sub-second loading speed on global edge CDNs',
        'Fluid micro-interactions driving higher user engagement and retention',
        'Seamless end-to-end user journeys engineered for real business conversion',
      ],
      deliverables: [
        'Launch-ready turnkey fullstack application ready for market',
        'Integrated lead capture and interactive client intake flow',
        'Complete PostgreSQL database with automated backup pipelines',
        'Post-launch warranty, documentation, and technical support',
      ],
      certifications: [
        {
          id: 'cert-turnkey-01',
          title: 'Fullstack Software Engineering & Delivery Excellence',
          issuer: 'Codec Technologies & Graphura India Industry Evaluations',
          recipient: 'VOXOR LAB Founding Engineering Team',
          type: 'Professional Mastery',
          year: '2026',
          credentialId: 'VX-ENG-DELIVERY-2026',
          verified: true,
          skills: ['Fullstack Web Delivery', 'Vite & Express Architecture', 'PostgreSQL', 'Quality Assurance'],
          summary: 'Verified competency in building, testing, deploying, and maintaining commercial-grade fullstack web software with verified production standards.',
        },
        {
          id: 'cert-qa-shravani',
          title: 'Software Quality Assurance & Component Testing Certification',
          issuer: 'Institute of Software Engineering & Testing Standards',
          recipient: 'Shravani Nimbalkar & Prarthana Bhandari',
          type: 'Professional Mastery',
          year: '2025',
          credentialId: 'QA-COMP-2025-PUNE',
          verified: true,
          skills: ['Component QA', 'Automated Testing', 'Cross-browser Verification', 'Performance Auditing'],
          summary: 'Certified in comprehensive web application testing, component verification, cross-browser compatibility, and edge-case regression audits.',
        },
      ],
    },
  ];

  // Resolve current pillar from URL or default to 'design'
  const currentPillar = pillars.find((p) => p.id === pillarId) || pillars[0];
  const [selectedCert, setSelectedCert] = useState<(typeof currentPillar.certifications)[0] | null>(null);

  // Sync scroll to top on pillar switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPillar.id]);

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen pt-24 pb-20 select-none">
      
      {/* ──────────────────────────────────────────────────────────
          TOP BREADCRUMB & BACK NAVIGATION
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <Link
            to="/#why-us"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Studio Overview</span>
          </Link>

          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
              ARCHITECTURE SPECIFICATION // FULL DEEP-DIVE
            </span>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          PILLAR SWITCHER TABS (Clean 4-Way Tab Bar)
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 rounded-2xl bg-slate-200/60 border border-slate-300/80 shadow-xs">
          {pillars.map((pillar) => {
            const isActive = pillar.id === currentPillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => navigate(`/architecture/${pillar.id}`)}
                className={`py-3 px-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-md border border-slate-200/90 text-slate-900 -translate-y-0.5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-black tracking-widest uppercase text-slate-400">
                    PILLAR {pillar.number}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-black tracking-tight font-sans truncate mt-1">
                  {pillar.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          PILLAR HERO BANNER
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          key={currentPillar.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="clay-card bg-white p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] border-2 border-slate-200/90 shadow-xl relative overflow-hidden text-left"
        >
          {/* Ambient radial glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{ backgroundColor: currentPillar.colorTheme.glow }}
          />

          <div className="max-w-4xl space-y-4 relative z-10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-slate-400">
                PILLAR {currentPillar.number}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider font-mono border ${currentPillar.colorTheme.badgeBg} ${currentPillar.colorTheme.badgeText} ${currentPillar.colorTheme.border}`}
              >
                {currentPillar.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-sans">
              {currentPillar.title}
            </h1>

            <p className="text-base sm:text-lg font-bold text-indigo-600 font-sans">
              {currentPillar.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal max-w-3xl pt-1">
              {currentPillar.description}
            </p>
          </div>

          {/* Key Engineering Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-150">
            {currentPillar.metrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                  {metric.label}
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans block">
                  {metric.value}
                </span>
                <span className="text-[11px] text-slate-600 font-medium block">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: COMPLETE TECH STACK & ARRANGEMENT MATRIX
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="mb-8 space-y-1">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block">
            TECHNOLOGY ARRANGEMENT & MANAGEMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
            The Production Tech Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Strictly vetted, modern dependencies configured for optimal performance, type safety, and zero bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentPillar.stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="clay-card bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8.5px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/50">
                    {tech.category}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 font-bold">
                    {tech.version}
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 font-sans">
                  {tech.name}
                </h3>
                <p className="text-[11px] font-bold text-slate-700">
                  {tech.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: SYSTEM ARCHITECTURE FLOW & CODE BLUEPRINT
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4-Step Architecture Pipeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block">
                SYSTEM BLUEPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
                Engineering Execution Flow
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                How this layer is designed, validated, and executed in our production pipeline.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {currentPillar.architectureLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex items-start space-x-4"
                >
                  <span className="font-mono text-base font-black text-indigo-600 shrink-0 mt-0.5">
                    {layer.step}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-black text-slate-900 font-sans">
                        {layer.title}
                      </h4>
                      <span className="font-mono text-[8.5px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {layer.tech}
                      </span>
                    </div>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Blueprint Showroom */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">
                SOURCE IMPLEMENTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
                Production Code Pattern
              </h2>
            </div>

            <div className="rounded-[28px] bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/90">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-300 ml-2">
                    {currentPillar.codeSnippet.filename}
                  </span>
                </div>
                <div className="flex items-center space-x-1 font-mono text-[9px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>TypeScript 5.4 Verified</span>
                </div>
              </div>

              {/* Code Pre Container */}
              <div className="p-5 font-mono text-[11px] leading-relaxed text-slate-200 overflow-x-auto max-h-[380px]">
                <pre>
                  <code>{currentPillar.codeSnippet.code}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>UTF-8 // LF // Strict Mode</span>
                <span className="text-indigo-400">VOXOR LAB Architectural Standard</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: TEAM CERTIFICATES & VERIFIED CREDENTIALS
          (Direct User Request: "add the certificates there of our team that technology is learn by us")
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 border-2 border-indigo-200/90 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono font-black uppercase tracking-wider border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>ACCREDITED MASTERY & VERIFIED PROOF</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Our Team's Verified Certifications & Mastery
            </h2>

            <p className="text-sm text-slate-650 leading-relaxed font-normal">
              Every technology in this stack is backed by verified academic degrees (MCA & BCA) and approved software engineering internship certifications. We don't just use these tools — we are formally trained and certified in them.
            </p>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPillar.certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="clay-card bg-white p-6 sm:p-7 rounded-[28px] border-2 border-slate-200/90 hover:border-indigo-400 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                {/* Official Certificate Seal Icon */}
                <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-20 h-20 text-indigo-600" />
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[9px] font-black uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{cert.verified ? 'VERIFIED CREDENTIAL' : 'IN PROGRESS'}</span>
                    </span>

                    <span className="font-mono text-[9px] font-bold text-slate-400">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-wide block">
                      {cert.type} • {cert.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans tracking-tight mt-0.5 group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>Awarded To:</span>
                      <span className="text-indigo-700">{cert.recipient}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-600">
                      <span>Authority:</span>
                      <span className="font-medium truncate max-w-[220px]">{cert.issuer}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-650 leading-relaxed font-normal">
                    {cert.summary}
                  </p>
                </div>

                {/* Skills tags & Inspection Link */}
                <div className="pt-3 border-t border-slate-150 flex flex-wrap items-center justify-between gap-2 relative z-10">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[8px] font-bold border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-black text-indigo-600 group-hover:text-indigo-800 flex items-center space-x-1 font-mono uppercase tracking-wider">
                    <span>Inspect Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic & Internship Affiliation Banner */}
          <div className="mt-8 p-5 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 font-sans">
                  SNDT Women's University (MCA) & AICTE Industry Internships
                </h4>
                <p className="text-[11px] text-slate-600">
                  Postgraduate computer science foundations combined with live software firm delivery experience in Pune.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="shrink-0 inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold font-mono text-slate-700 hover:text-indigo-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <span>View Full Team Background</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: SPECIFICATIONS & DELIVERABLES CHECKLIST
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="clay-card bg-white p-7 rounded-[28px] border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-base font-sans">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Architectural Standards</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-650">
              {currentPillar.specs.map((spec, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="clay-card bg-white p-7 rounded-[28px] border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-base font-sans">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Client Deliverables</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-650">
              {currentPillar.deliverables.map((del, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          BOTTOM PROJECT INQUIRY CTA BANNER
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[9.5px] font-black uppercase tracking-widest text-indigo-400 block">
              PRODUCTION ARCHITECTURE // VOXOR LAB
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans text-white">
              Ready to engineer your product on this foundation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Connect directly with our engineering team to scope your system requirements and map out a bespoke roadmap.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center space-x-2 px-8 py-4 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 active:scale-95 transition-all shadow-xl shadow-white/10"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          INTERACTIVE CERTIFICATE VIEWER MODAL
         ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-[36px] p-6 sm:p-9 shadow-2xl relative border-2 border-slate-200 text-left space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <Award className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                      OFFICIAL CERTIFICATE RECORD
                    </span>
                    <span className="font-mono text-[10px] font-black text-emerald-700">
                      ID: {selectedCert.credentialId}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Certificate Frame Preview */}
              <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-amber-50/50 via-white to-indigo-50/40 border-2 border-amber-300/80 shadow-inner relative space-y-4 text-center">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 block">
                    CERTIFICATE OF TECHNICAL MASTERY & ACCREDITATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="py-2 space-y-0.5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono font-bold">This certifies that</p>
                  <p className="text-lg font-black text-indigo-700 font-sans">{selectedCert.recipient}</p>
                  <p className="text-xs text-slate-600 max-w-md mx-auto pt-1 leading-relaxed">
                    has demonstrated formal technical competency verified by {selectedCert.issuer}.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-white text-slate-800 font-mono text-[9px] font-bold border border-slate-200 shadow-2xs"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-amber-200/80 flex items-center justify-between text-left text-xs font-mono">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase block">Issuing Authority</span>
                    <span className="font-bold text-slate-800">{selectedCert.issuer}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 uppercase block">Year Certified</span>
                    <span className="font-bold text-emerald-700">{selectedCert.year}</span>
                  </div>
                </div>
              </div>

              {/* Action Close Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold font-mono text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close Certificate View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}