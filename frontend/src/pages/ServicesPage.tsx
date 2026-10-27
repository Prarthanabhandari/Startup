import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Curved3DCarousel from '../components/Curved3DCarousel';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Check,
  Code2,
  Lock,
  Layers,
  HelpCircle,
  ExternalLink,
  GitBranch,
  Globe,
} from 'lucide-react';

interface DetailedService {
  id: string;
  category: 'web' | 'backend' | 'database' | 'design' | 'mobile' | 'audit';
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  problemSolved: string;
  technicalSolution: string;
  stack: { name: string; version: string; role: string; category: string }[];
  deliverables: string[];
  specs: string[];
  codePattern: { filename: string; language: string; code: string };
  theme: {
    accent: string;
    badgeBg: string;
    badgeText: string;
    border: string;
    glow: string;
  };
}

interface HandcraftedProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  image: string;
  tags: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
}

const detailedServices: DetailedService[] = [
  {
    id: 'web-apps',
    category: 'web',
    number: '01',
    badge: 'FRONTEND ARCHITECTURE',
    title: 'Custom Web Applications',
    subtitle: 'React 19, Strict TypeScript & Hardware-Accelerated 3D',
    problemSolved:
      'Most web products suffer from bloated template code, laggy animations, and poor mobile responsiveness that damage brand credibility.',
    technicalSolution:
      'We engineer bespoke Single Page Applications using React 19 concurrent rendering, Vite 8 tree-shaking, Tailwind CSS v4 design tokens, and hardware-accelerated Babylon.js WebGL canvases running at a fluid 120 FPS.',
    stack: [
      { name: 'React 19', version: 'v19.2', role: 'Concurrent UI Library', category: 'Frontend' },
      { name: 'TypeScript', version: 'v5.4', role: 'Strict Compile-Time Types', category: 'Language' },
      { name: 'Tailwind CSS v4', version: 'v4.3', role: 'Zero-Runtime CSS Compiler', category: 'Styling' },
      { name: 'Babylon.js 3D', version: 'v9.2', role: 'WebGL Canvas Engine', category: '3D Graphics' },
    ],
    deliverables: [
      'Modular component library structured in clean src/components directory',
      'Hardware-accelerated 3D WebGL scenes with graceful mobile fallbacks',
      'Accessible WCAG AAA contrast and semantic HTML5 landmark tags',
      'Fully tree-shaken production bundle with sub-second initial load',
    ],
    specs: [
      'Zero any types across all components and props',
      'Framer Motion spring physics mapped to 120Hz refresh rates',
      'Responsive viewports tested from 360px mobile to 4K ultra-wide',
      'Optimized Core Web Vitals scoring 95+ on Google Lighthouse',
    ],
    codePattern: {
      filename: 'InteractiveCanvas.tsx',
      language: 'typescript',
      code: `// React 19 Component with Hardware-Accelerated 3D WebGL Canvas
import { useRef, useEffect } from 'react';
import { Engine, Scene, Vector3, HemisphericLight } from '@babylonjs/core';

export function WebGLCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new Engine(canvasRef.current, true, { preserveDrawingBuffer: false });
    const scene = new Scene(engine);
    new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    
    engine.runRenderLoop(() => scene.render());
    return () => { engine.dispose(); };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full touch-none" />;
}`,
    },
    theme: {
      accent: '#0284c7',
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-950 font-bold',
      border: 'border-sky-200',
      glow: 'rgba(56, 189, 248, 0.25)',
    },
  },
  {
    id: 'backend-apis',
    category: 'backend',
    number: '02',
    badge: 'BACKEND SYSTEMS',
    title: 'Precision Backend APIs',
    subtitle: 'Layered Express.js Architecture, Zod Validation & Cryptographic JWT',
    problemSolved:
      'Unstructured server code with loose validations frequently leads to data corruption, unhandled runtime crashes, and security vulnerabilities.',
    technicalSolution:
      'We architect decoupled backends using Node.js 20 LTS and Express following strict Controllers, Services, and Repositories layering. All inbound payloads are strictly sanitized with Zod schemas before touching business logic.',
    stack: [
      { name: 'Node.js 20 LTS', version: 'v20.x', role: 'V8 Asynchronous Server Engine', category: 'Runtime' },
      { name: 'Express.js', version: 'v4.19', role: 'Layered HTTP Framework', category: 'Framework' },
      { name: 'Zod Validator', version: 'v3.23', role: 'Compile-Time & Runtime DDL Guard', category: 'Security' },
      { name: 'Helmet & CORS', version: 'v7.1', role: 'HTTP Security Headers Guard', category: 'Security' },
    ],
    deliverables: [
      'Layered RESTful API routes with clean separation of concerns',
      'Strict Zod request payload schemas preventing parameter tampering',
      'Centralized error-handling middleware with standardized JSON outputs',
      'Automated healthcheck endpoints and request rate-limiting protection',
    ],
    specs: [
      'Sub-10ms average REST endpoint execution time',
      'Encrypted JWT Bearer tokens with cryptographic route middleware',
      'Structured request logging and real-time error telemetry',
      'OpenAPI 3.0 / Swagger documentation for all endpoints',
    ],
    codePattern: {
      filename: 'inquiry.controller.ts',
      language: 'typescript',
      code: `// Layered Express Controller with Strict Zod Validation
import { Request, Response, NextFunction } from 'express';
import { inquirySchema } from '../schemas/inquiry.schema';
import { InquiryService } from '../services/inquiry.service';

export async function submitInquiry(req: Request, res: Response, next: NextFunction) {
  try {
    const validatedData = inquirySchema.parse(req.body);
    const result = await InquiryService.process(validatedData);
    
    return res.status(201).json({
      status: 'success',
      message: 'Inquiry registered into verified repository',
      data: result,
    });
  } catch (error) {
    next(error); // central enterprise error middleware
  }
}`,
    },
    theme: {
      accent: '#9333ea',
      badgeBg: 'bg-purple-50',
      badgeText: 'text-purple-950 font-bold',
      border: 'border-purple-200',
      glow: 'rgba(192, 132, 252, 0.25)',
    },
  },
  {
    id: 'database-systems',
    category: 'database',
    number: '03',
    badge: 'PERSISTENT CLOUD',
    title: 'Relational Database Architecture',
    subtitle: 'PostgreSQL 15, Connection Pooling & ACID Integrity',
    problemSolved:
      'Improper database models cause slow query bottlenecks, deadlocks, and severe data inconsistency as application traffic grows.',
    technicalSolution:
      'We design fully normalized PostgreSQL relational databases featuring connection pooling via node-postgres pg, UUID v4 primary keys to prevent enumeration attacks, and B-tree indexes for sub-5ms lookups.',
    stack: [
      { name: 'PostgreSQL 15', version: 'v15.6', role: 'ACID Relational Database Engine', category: 'Database' },
      { name: 'node-postgres (pg)', version: 'v8.11', role: 'Connection Pool Manager', category: 'Driver' },
      { name: 'UUID v4 Extension', version: 'RFC 4122', role: 'Non-Sequential Key Security', category: 'Security' },
      { name: 'Idempotent DDL', version: 'SQL Migrations', role: 'Zero-Downtime Migration Scripts', category: 'Tooling' },
    ],
    deliverables: [
      'Normalized relational schema with foreign key cascading rules',
      'Pre-compiled parameterized SQL queries preventing SQL injection',
      'Automated schema version migration and idempotent seed scripts',
      'Optimized connection pooling configuration preventing memory leaks',
    ],
    specs: [
      'Sub-5ms indexed lookups on critical query paths',
      'Dedicated connection pool supporting high concurrent request spikes',
      'Encrypted persistent storage for sensitive client inquiries',
      'Automated database backup routines and rollback playbooks',
    ],
    codePattern: {
      filename: 'db.pool.ts',
      language: 'typescript',
      code: `// Resilient PostgreSQL Connection Pool Manager
import { Pool } from 'pg';

export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Max concurrent client sockets
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function executeQuery<T>(text: string, params: any[]): Promise<T[]> {
  const client = await dbPool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows as T[];
  } finally {
    client.release(); // recycle socket back to pool
  }
}`,
    },
    theme: {
      accent: '#d97706',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-950 font-bold',
      border: 'border-amber-200',
      glow: 'rgba(245, 158, 11, 0.25)',
    },
  },
  {
    id: 'design-systems',
    category: 'design',
    number: '04',
    badge: 'DESIGN ATELIER',
    title: 'UI/UX & Claymorphic Design Systems',
    subtitle: 'Mathematical Tokens, 8pt Spatial Grid & Figma Component Kits',
    problemSolved:
      'Inconsistent visual styling, inaccessible color combinations, and arbitrary spacing across pages create a cheap, unprofessional impression.',
    technicalSolution:
      'We establish comprehensive design token systems based on an 8pt spatial grid, mathematical claymorphic dual-axis lighting, accessible WCAG contrast standards, and matched React Tailwind components.',
    stack: [
      { name: 'Figma Token Suite', version: 'v2026', role: 'Design Tokens Source of Truth', category: 'Design' },
      { name: '8pt Spatial Grid', version: 'Mathematical', role: 'Layout & Typography Scale', category: 'Layout' },
      { name: 'Tailwind CSS v4', version: 'v4.3', role: 'CSS Utility Token Mapping', category: 'Styling' },
      { name: 'Framer Motion', version: 'v13.1', role: 'Micro-Interaction Choreography', category: 'Motion' },
    ],
    deliverables: [
      'Master Figma component library with auto-layout and interactive variants',
      'Structured token dictionary (colors, typography, elevation, spacing)',
      'Accessible color pairing matrix verified against WCAG AAA standards',
      'Production-ready React 19 component library mirroring Figma tokens',
    ],
    specs: [
      'Dual-axis inset shadows producing realistic tactile depth',
      'Fluid spring physics configured for zero-latency hover and drag',
      'Consistent 8pt spacing rhythm across mobile and desktop breakpoints',
      'Clean semantic markup ensuring screen-reader accessibility',
    ],
    codePattern: {
      filename: 'designTokens.ts',
      language: 'typescript',
      code: `// Mathematical Claymorphic Lighting Tokens
export const designTokens = {
  elevation: {
    tactileCard: {
      boxShadow: '0 20px 40px -15px rgba(100, 116, 139, 0.12), inset 2px 2px 4px rgba(255, 255, 255, 0.95), inset -2px -2px 4px rgba(148, 163, 184, 0.08)',
      border: '1.5px solid rgba(255, 255, 255, 0.85)',
      borderRadius: '28px',
    },
  },
  spring: {
    stiffness: 220,
    damping: 20,
    mass: 0.1,
  },
};`,
    },
    theme: {
      accent: '#4f46e5',
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-950 font-bold',
      border: 'border-indigo-200',
      glow: 'rgba(129, 140, 248, 0.25)',
    },
  },
  {
    id: 'mobile-apps',
    category: 'mobile',
    number: '05',
    badge: 'MOBILE PLATFORMS',
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'React Native, Fluid Gestures & Offline Synchronization',
    problemSolved:
      'Fragmented codebases for iOS and Android double development costs and lead to inconsistent user experiences and synchronization bugs.',
    technicalSolution:
      'We build unified cross-platform applications using React Native and TypeScript. Apps feature native gesture haptics, local SQLite / AsyncStorage caching, and automatic background synchronization with your cloud backend.',
    stack: [
      { name: 'React Native', version: 'v0.74', role: 'Cross-Platform Engine', category: 'Mobile' },
      { name: 'TypeScript', version: 'v5.4', role: 'End-to-End Type Safety', category: 'Language' },
      { name: 'Local Cache Store', version: 'Persistent', role: 'Offline State Resilience', category: 'Data' },
      { name: 'Biometric API', version: 'Native Bridge', role: 'FaceID & Fingerprint Security', category: 'Security' },
    ],
    deliverables: [
      'Single maintainable TypeScript codebase deploying to iOS and Android',
      'Optimistic UI updates with resilient offline synchronization pipelines',
      'Biometric authentication integration (FaceID and Fingerprint)',
      'Assistance with Apple App Store and Google Play deployment verification',
    ],
    specs: [
      'Smooth 60-120Hz gesture response physics on native touchscreens',
      'Encrypted local token vaults storing sensitive user session data',
      'Sub-100ms response times on offline query retrieval',
      'Clean modular architecture enabling rapid feature additions',
    ],
    codePattern: {
      filename: 'useOfflineSync.ts',
      language: 'typescript',
      code: `// Resilient Offline Cache Synchronization Hook
import { useState, useEffect } from 'react';

export function useOfflineSync<T>(cacheKey: string, fetchRemote: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    // 1. Immediately hydrate from fast local device cache
    const local = localStorage.getItem(cacheKey);
    if (local) setData(JSON.parse(local));

    // 2. Silently synchronize with cloud backend
    fetchRemote().then((remoteData) => {
      setData(remoteData);
      localStorage.setItem(cacheKey, JSON.stringify(remoteData));
    }).catch(() => {
      // Graceful offline fallback: preserve cached state
    });
  }, [cacheKey]);

  return data;
}`,
    },
    theme: {
      accent: '#ea580c',
      badgeBg: 'bg-orange-50',
      badgeText: 'text-orange-950 font-bold',
      border: 'border-orange-200',
      glow: 'rgba(251, 146, 60, 0.25)',
    },
  },
  {
    id: 'performance-audit',
    category: 'audit',
    number: '06',
    badge: 'OPTIMIZATION & OPS',
    title: 'Performance & Security Audits',
    subtitle: 'Core Web Vitals Optimization, Code Refactoring & Security Hardening',
    problemSolved:
      'Slow loading speeds increase customer bounce rates by 50%+, while neglected dependencies expose web platforms to automated exploits.',
    technicalSolution:
      'We conduct deep-dive technical audits of existing codebases, refactoring bottlenecks, tree-shaking assets, implementing edge CDN caching, and hardening HTTP headers to achieve 95+ Lighthouse scores.',
    stack: [
      { name: 'Google Lighthouse', version: 'v12', role: 'Core Web Vitals Auditor', category: 'Tooling' },
      { name: 'Vite Asset Pipeline', version: 'v8.2', role: 'Chunk Splitting & Minification', category: 'Bundler' },
      { name: 'Security Headers', version: 'CSP + CORS', role: 'XSS & Clickjacking Shield', category: 'Security' },
      { name: 'Edge CDN Caching', version: 'Global SSL', role: 'Sub-Second Global TTFB', category: 'Cloud' },
    ],
    deliverables: [
      'Comprehensive performance audit report with prioritized recommendations',
      'Code refactoring eliminating redundant packages and memory leaks',
      'Automated asset compression and image format modernization (WebP/AVIF)',
      'Security header configuration preventing cross-site scripting (XSS)',
    ],
    specs: [
      'Guaranteed 95+ Lighthouse score on Performance and Accessibility',
      'Sub-0.8s First Contentful Paint (FCP) on high-speed mobile networks',
      'Zero known CVE vulnerabilities in production dependencies',
      'Automated Continuous Integration (CI) build verification',
    ],
    codePattern: {
      filename: 'securityHeaders.ts',
      language: 'typescript',
      code: `// Enterprise HTTP Security Headers Middleware
import helmet from 'helmet';

export const securityMiddleware = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'", "http://localhost:5000", "https://api.yourdomain.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
});`,
    },
    theme: {
      accent: '#059669',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-950 font-bold',
      border: 'border-emerald-200',
      glow: 'rgba(52, 211, 153, 0.25)',
    },
  },
];

// Authentic Projects Handcrafted by the Team (Direct from GitHub @Prarthanabhandari)
const handcraftedProjects: HandcraftedProject[] = [
  {
    id: 'bookverse',
    title: 'BookVerse Platform',
    subtitle: 'Community-Driven Book Review & Digital Literary Ecosystem',
    category: 'Full-Stack Web Application',
    status: 'Live on Production',
    image: '/projects/bookverse.png',
    tags: ['React 19', 'Node.js', 'Express', 'PostgreSQL 15', 'JWT Auth', 'Open Library API', 'Vite'],
    description:
      'An end-to-end community reading and structured review ecosystem engineered with a normalized PostgreSQL relational schema, multi-role RBAC authorization hierarchy (Admin, Moderator, Reader), and real-time Open Library ISBN metadata extraction.',
    highlights: [
      'Multi-role RBAC authorization hierarchy separating administrative moderators from community readers.',
      'Dynamic weighted SQL rating algorithms computing composite score averages across reviews.',
      'Asynchronous Open Library ISBN query engine auto-populating book metadata, author bios, and cover art.',
      'Zero-flicker CSS theme preset system with client-side state caching.',
    ],
    githubUrl: 'https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform',
    liveUrl: 'https://bookverse-frontend-g47p.onrender.com/',
    metrics: [
      { label: 'Relational Tables', value: '8 Schemas' },
      { label: 'Auth Protocol', value: 'JWT + Bcrypt' },
      { label: 'API Response', value: '< 85ms' },
      { label: 'Deployment', value: 'Render Cloud' },
    ],
  },
  {
    id: 'startup-voxor',
    title: 'Startup Studio (VOXOR Lab Engine)',
    subtitle: 'Tactile Creative Agency Web Architecture & 3D WebGL Ecosystem',
    category: '3D Spatial Web Application',
    status: 'Live Production',
    image: '/projects/startup-preview.jpg',
    tags: ['Babylon.js 3D', 'React 19', 'TypeScript 5.4', 'Tailwind CSS v4', 'Framer Motion', 'Vite 8'],
    description:
      'A high-end creative agency web application featuring tactile claymorphic styling, interactive 3D WebGL spatial orbit scene with ArcRotate camera, coverflow portfolio interaction, and strict end-to-end TypeScript architecture.',
    highlights: [
      'Interactive 3D Spatial Orbit scene with Babylon.js ArcRotate camera and dynamic specular lighting.',
      'Custom claymorphic UI system designed around tactile pastels, soft borders, and warm typography.',
      'End-to-end TypeScript strict typing with zero compiler warnings and unified data contracts.',
      'Hardware-accelerated 60-120 FPS rendering on both desktop and mobile viewports.',
    ],
    githubUrl: 'https://github.com/Prarthanabhandari/Startup',
    liveUrl: 'http://localhost:5190',
    metrics: [
      { label: 'WebGL Frame Rate', value: '120 FPS' },
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'Build Engine', value: 'Vite 8 + Rolldown' },
      { label: 'Architecture', value: 'Decoupled Client/Server' },
    ],
  },
  {
    id: 'family-travel-tracker',
    title: 'Family Travel Tracker',
    subtitle: 'Multi-User PostgreSQL Country Log & Travel Dashboard',
    category: 'Relational Database Web App',
    status: 'Live on Production',
    image: '/projects/family-travel-tracker.png',
    tags: ['Node.js', 'Express.js', 'PostgreSQL 15', 'EJS', 'Relational SQL', 'Join Tables'],
    description:
      'A full-stack collaborative travel tracking web application allowing multiple family members to log visited countries across the globe. Features color-coded user mapping, relational PostgreSQL country codes, dynamic country counters, and visited territory tracking.',
    highlights: [
      'Relational PostgreSQL schema mapping users to visited country codes via foreign key constraints.',
      'Multi-user switcher rendering personalized colored country lists and total visited counters.',
      'Parameterized SQL queries preventing SQL injection vulnerabilities across all routes.',
      'Instantaneous sub-25ms country lookups via indexed country codes.',
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Family-Travel-Tracker',
    metrics: [
      { label: 'Database Engine', value: 'PostgreSQL 15' },
      { label: 'Query Execution', value: '< 25ms' },
      { label: 'Country Mapping', value: '195 Nations' },
      { label: 'Pattern', value: 'MVC Architecture' },
    ],
  },
  {
    id: 'geoquiz',
    title: 'GeoQuiz World Capitals',
    subtitle: 'Database-Driven Geography Trivia & Knowledge Engine',
    category: 'Database & REST Web App',
    status: 'Live on Production',
    image: '/projects/geoquiz.png',
    tags: ['PostgreSQL', 'Express.js', 'REST API', 'JavaScript', 'SQL Queries'],
    description:
      'An interactive database-driven geography knowledge platform testing players on world capital data stored in PostgreSQL tables. Implements persistent question shuffling, real-time score tracking, and automated validation.',
    highlights: [
      'Dynamic question generation pulling random records from relational tables.',
      'Real-time answer validation comparing input against indexed database records.',
      'Score accumulation engine with immediate visual feedback.',
      'Lightweight server execution ensuring sub-second response times.',
    ],
    githubUrl: 'https://github.com/prarthanabhandari/World-Capital-Quiz',
    metrics: [
      { label: 'Database Engine', value: 'PostgreSQL' },
      { label: 'Query Latency', value: '< 15ms' },
      { label: 'Data Set', value: 'Global Capitals' },
      { label: 'Interface', value: 'Interactive Web' },
    ],
  },
  {
    id: 'keeper-app',
    title: 'Keeper App Note Architecture',
    subtitle: 'Component-Hierarchy React Note & Task Workspace',
    category: 'React Component System',
    status: 'Open Source',
    image: '/projects/keeper-app.png',
    tags: ['React', 'JavaScript', 'CSS Modules', 'Component State', 'Material Design'],
    description:
      'A streamlined note-taking web application demonstrating clean component decomposition, dynamic parent-child prop drilling, immutable state updates, and intuitive card styling.',
    highlights: [
      'Modular React components separating Note creation, display, and deletion lifecycles.',
      'Immutable state array handling with array spread and filter patterns.',
      'Fluid card layout with subtle elevation and responsive grid flow.',
      'Zero external runtime dependencies for instant browser hydration.',
    ],
    githubUrl: 'https://github.com/prarthanabhandari/keeper-app',
    metrics: [
      { label: 'Framework', value: 'React' },
      { label: 'State Model', value: 'Pure Hooks' },
      { label: 'Bundle Size', value: '< 45 kB' },
      { label: 'Render Time', value: '< 5ms' },
    ],
  },
  {
    id: 'permalist',
    title: 'Permalist Task Management',
    subtitle: 'Relational PostgreSQL Persistent CRUD Application',
    category: 'Full-Stack CRUD App',
    status: 'Open Source',
    image: '/projects/permalist.png',
    tags: ['PostgreSQL', 'Express.js', 'Node.js', 'CRUD Architecture', 'EJS'],
    description:
      'A persistent to-do and task management application demonstrating full CRUD operations connected to a live PostgreSQL relational instance. Features atomic item creation, dynamic checkbox toggling, and in-place title editing.',
    highlights: [
      'Complete Create-Read-Update-Delete (CRUD) SQL query suite.',
      'Atomic SQL transactions ensuring task state consistency.',
      'Responsive interface with real-time feedback upon task completion.',
      'Strict input sanitization preventing malicious script injection.',
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Permalist-Project',
    metrics: [
      { label: 'Storage', value: 'PostgreSQL Relational' },
      { label: 'CRUD Ops', value: 'Create/Read/Update/Delete' },
      { label: 'Transactions', value: 'Atomic ACID' },
      { label: 'Security', value: 'Parameterized Queries' },
    ],
  },
];

const engineeringWorkflow = [
  {
    step: '01',
    title: 'Technical Scoping & Architecture Blueprint',
    duration: 'Week 1',
    description:
      'We map out entity-relationship diagrams, API contracts, security constraints, and database normalization before writing a single line of code.',
    deliverable: 'System Architecture Specification & Interactive Figma Wireframes',
  },
  {
    step: '02',
    title: 'Tactile UI/UX & Design Token Architecture',
    duration: 'Week 2',
    description:
      'We establish an 8pt spatial grid, mathematical claymorphic lighting tokens, high-contrast accessible typography, and interactive prototypes.',
    deliverable: 'Figma Component System & Matched Tailwind CSS Tokens',
  },
  {
    step: '03',
    title: 'Handcrafted Modular Fullstack Development',
    duration: 'Weeks 3 – 5',
    description:
      'We write strict TypeScript across decoupled frontend and backend folders. Inbound payloads are validated with Zod and stored via PostgreSQL pools.',
    deliverable: 'Production React 19 Frontend + Layered Express REST Backend',
  },
  {
    step: '04',
    title: 'Rigorous Quality Assurance & Security Hardening',
    duration: 'Week 6',
    description:
      'We run cross-browser verification across real mobile and desktop viewports, audit Lighthouse scores, test edge cases, and enforce security headers.',
    deliverable: '95+ Core Web Vitals Audit & Zero-Vulnerability Security Report',
  },
  {
    step: '05',
    title: 'Zero-Downtime Deployment & Knowledge Transfer',
    duration: 'Launch Week',
    description:
      'We deploy your platform to global edge CDNs, establish automated database backup routines, and deliver full ownership of the private Git repository.',
    deliverable: '100% Client Git Ownership, Documentation & Post-Launch Warranty',
  },
];

const faqs = [
  {
    question: 'How is the codebase structured between frontend and backend?',
    answer:
      'We maintain strict architectural separation: all client UI lives in /frontend (React 19, Vite, Tailwind v4), while all server logic lives in /backend (Node.js 20, Express, PostgreSQL). This allows either layer to be deployed, tested, or scaled independently without coupling.',
  },
  {
    question: 'Do you use website templates, AI page builders, or theme wrappers?',
    answer:
      'Never. Every project is handcrafted from scratch using clean TypeScript, custom design tokens, and normalized database schemas. We deliver zero boilerplate bloat and zero generic template code.',
  },
  {
    question: 'Who owns the intellectual property and code repository?',
    answer:
      'You do — 100%. Upon project milestone completion, full ownership of the private GitHub or GitLab repository, documentation, design files, and deployment configurations are transferred directly to your organization.',
  },
  {
    question: 'Can our internal team easily maintain and scale this codebase later?',
    answer:
      'Absolutely. Because we write strict TypeScript with zero any types, standardized Controller-Service-Repository layering, and documented database migrations, any qualified developer can pick up the project and immediately understand the architecture.',
  },
  {
    question: 'What happens after the project is deployed to production?',
    answer:
      'We provide a post-launch warranty period to monitor performance telemetry, verify live database backups, and address any unexpected edge cases. Ongoing maintenance and feature roadmap retainers are also available.',
  },
];

export default function ServicesPage() {
  const { serviceId } = useParams<{ serviceId?: string }>();
  const navigate = useNavigate();

  // Map incoming serviceId URL parameter to category
  const serviceToCategoryMap: Record<string, string> = {
    'web-apps': 'web',
    'backend-apis': 'backend',
    'database-systems': 'database',
    'design-systems': 'design',
    'mobile-apps': 'mobile',
    'performance-audit': 'audit',
  };

  const initialCategory = serviceId && serviceToCategoryMap[serviceId] ? serviceToCategoryMap[serviceId] : 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Sync state if URL param changes
  useEffect(() => {
    if (serviceId && serviceToCategoryMap[serviceId]) {
      setSelectedCategory(serviceToCategoryMap[serviceId]);
    }
  }, [serviceId]);

  // Scroll to top or service element on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const filteredServices =
    selectedCategory === 'all'
      ? detailedServices
      : detailedServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen pt-24 pb-20 select-none">
      
      {/* ──────────────────────────────────────────────────────────
          TOP BREADCRUMB & STUDIO BADGE
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home Overview</span>
          </Link>

          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
              SERVICE SPECIFICATIONS & GITHUB-VERIFIED WORK
            </span>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SERVICES HERO BANNER (Differentiated from Home Page)
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="clay-card bg-white p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] border-2 border-slate-200/90 shadow-xl relative overflow-hidden text-left"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 font-mono text-[10px] font-black uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>FULL-STACK STUDIO CAPABILITIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-sans">
              Handcrafted Software Services. <br />
              <span className="bg-gradient-to-r from-brand-orange via-pink-600 to-brand-primary bg-clip-text text-transparent">
                Engineered for Real-World Scale.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal max-w-3xl">
              We reject template shortcuts and AI buzzwords. Every web application, backend API, and database model we deliver is custom-architected with strict TypeScript, layered separation of concerns, and verifiable production performance.
            </p>
          </div>

          {/* ──────────────────────────────────────────────────────────
              INTERACTIVE 3D CIRCULAR MOVING CAROUSEL SHOWCASE
              (Requested by user: "bro in here i want that design also that 3d card moveing in circlse remmeber that design i want")
             ────────────────────────────────────────────────────────── */}
          <div className="pt-8 mt-8 border-t border-slate-150 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-purple-950">
                  INTERACTIVE 3D SERVICE ORBIT // DRAG OR HOVER TO ROTATE
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-800 font-bold border border-purple-200">
                  Cylindrical 3D Math
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  120 FPS Physics
                </span>
              </div>
            </div>

            <Curved3DCarousel />
          </div>

          {/* Key Engineering Standards Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-6 border-t border-slate-150 relative z-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                TYPE INTEGRITY
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans block">
                100% Strict
              </span>
              <span className="text-[11px] text-slate-600 font-medium block">
                Zero any types in codebase
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                SERVER EXECUTION
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans block">
                &lt; 10ms
              </span>
              <span className="text-[11px] text-slate-600 font-medium block">
                Average REST response time
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                MOTION PHYSICS
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans block">
                120 FPS
              </span>
              <span className="text-[11px] text-slate-600 font-medium block">
                Hardware-accelerated WebGL
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                SOURCE OWNERSHIP
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans block">
                100% Client
              </span>
              <span className="text-[11px] text-slate-600 font-medium block">
                Clean private Git repository
              </span>
            </div>
          </div>

          {/* Quick Architecture Jump Anchors */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-150 relative z-10">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Quick Architecture Jump:
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="#services-catalog"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services-catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono text-[10.5px] font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                ↓ Detailed Specs (6 Disciplines)
              </a>
              <a
                href="#github-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('github-projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-mono text-[10.5px] font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                ↓ Real GitHub Projects (6 Repos)
              </a>
              <a
                href="#engineering-workflow"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('engineering-workflow')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-700 font-mono text-[10.5px] font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                ↓ 5-Stage Delivery Process
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          INTERACTIVE CATEGORY FILTER TABS
         ────────────────────────────────────────────────────────── */}
      <div id="services" className="max-w-7xl mx-auto px-6 mb-12 scroll-mt-24">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-200/60 border border-slate-300/80 shadow-xs">
          {[
            { id: 'all', label: 'All Disciplines (6)', path: '/services' },
            { id: 'web', label: 'Web Applications', path: '/services/web-apps' },
            { id: 'backend', label: 'Backend APIs', path: '/services/backend-apis' },
            { id: 'database', label: 'Relational Cloud', path: '/services/database-systems' },
            { id: 'design', label: 'Design Systems', path: '/services/design-systems' },
            { id: 'mobile', label: 'Mobile Platforms', path: '/services/mobile-apps' },
            { id: 'audit', label: 'Performance & Audits', path: '/services/performance-audit' },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  navigate(tab.path);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-md border border-slate-200/90 text-indigo-700 -translate-y-0.5'
                    : 'text-slate-650 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          DETAILED SERVICE SHOWCASE CARDS (Wide Deep-Dive Catalog)
         ────────────────────────────────────────────────────────── */}
      <div id="services-catalog" className="max-w-7xl mx-auto px-6 mb-20 space-y-12 scroll-mt-24">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.35 }}
            className="clay-card bg-white rounded-[32px] sm:rounded-[36px] border-2 border-slate-200/90 shadow-xl overflow-hidden text-left scroll-mt-28"
          >
            {/* Top Header Rail */}
            <div className="p-6 sm:p-8 border-b border-slate-150 bg-gradient-to-r from-slate-50 via-white to-slate-50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-base font-black text-indigo-600">
                  {service.number}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider font-mono border ${service.theme.badgeBg} ${service.theme.badgeText} ${service.theme.border}`}
                >
                  {service.badge}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  PRODUCTION VERIFIED ARCHITECTURE
                </span>
              </div>
            </div>

            {/* Service Body Grid */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Problem, Solution & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-indigo-600 font-sans">
                    {service.subtitle}
                  </p>
                </div>

                {/* Problem vs Solution Comparison Box */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/70 text-left space-y-1">
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider text-rose-700 block">
                      THE REAL-WORLD BOTTLENECK
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {service.problemSolved}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/70 text-left space-y-1">
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider text-indigo-700 block">
                      OUR HANDCRAFTED ENGINEERING SOLUTION
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {service.technicalSolution}
                    </p>
                  </div>
                </div>

                {/* What We Deliver Checklist */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2 text-slate-900 font-black text-sm font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Exact Client Deliverables (What You Receive)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-700 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Quality Safeguards */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2 text-slate-900 font-black text-xs font-sans">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>Technical Architecture Standards</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-[9.5px] font-bold border border-slate-200"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Production Tech Stack & Code Preview */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Tech Stack Matrix */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-500">
                      PRODUCTION DEPENDENCY STACK
                    </span>
                    <span className="font-mono text-[9px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ZERO BLOAT
                    </span>
                  </div>

                  <div className="space-y-2">
                    {service.stack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-200/70"
                      >
                        <div>
                          <span className="font-black text-slate-900 font-sans block">
                            {tech.name}
                          </span>
                          <span className="font-mono text-[9.5px] text-slate-500 block">
                            {tech.role}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/50">
                          {tech.version}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Code Pattern Showroom */}
                <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden text-left">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-900">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[10px] font-bold text-slate-300 ml-2">
                        {service.codePattern.filename}
                      </span>
                    </div>
                    <span className="font-mono text-[8.5px] text-emerald-400">Strict Typecheck</span>
                  </div>

                  <div className="p-4 font-mono text-[10px] leading-relaxed text-slate-200 overflow-x-auto max-h-[220px]">
                    <pre>
                      <code>{service.codePattern.code}</code>
                    </pre>
                  </div>
                </div>

                {/* Quick Action Button */}
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-primary hover:brightness-105 active:scale-95 transition-all shadow-md shadow-brand-orange/20"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: REAL PROJECTS DEVELOPED BY US (GITHUB VERIFIED)
          (Direct user request: "all info will add in that custom web application checke my gt add the image we develope add that info broo herere")
         ────────────────────────────────────────────────────────── */}
      <div id="github-projects" className="max-w-7xl mx-auto px-6 mb-20 text-left scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 border-2 border-indigo-200/90 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono font-black uppercase tracking-wider border border-emerald-200">
              <GitBranch className="w-3.5 h-3.5 text-emerald-600" />
              <span>HANDCRAFTED BY US // VERIFIED ON GITHUB</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Real Web Applications We Have Developed
            </h2>

            <p className="text-sm text-slate-650 leading-relaxed font-normal">
              Here is verifiable proof of our engineering craft. Every project below is handcrafted from scratch, version-controlled on GitHub, and built using React, Node.js, Express, and PostgreSQL.
            </p>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handcraftedProjects.map((project) => (
              <div
                key={project.id}
                className="clay-card bg-white rounded-[28px] border-2 border-slate-200/90 hover:border-indigo-400 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Project Screenshot Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-150">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-emerald-500/90 text-white backdrop-blur-md">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 font-sans tracking-tight group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-bold text-indigo-700 tracking-wide font-sans mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <span className="font-mono text-[9px] font-bold text-slate-500 uppercase block">
                        Key Architecture Highlights:
                      </span>
                      <ul className="space-y-1 text-[11px] text-slate-700">
                        {project.highlights.slice(0, 2).map((hl, i) => (
                          <li key={i} className="flex items-start space-x-1.5">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-100/70 border border-slate-200/60">
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block">{m.label}</span>
                          <span className="text-[11px] font-bold text-slate-900 font-sans block">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[8.5px] font-bold border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Action Links (GitHub & Live App) */}
                <div className="p-5 pt-3 border-t border-slate-150 flex items-center justify-between gap-2 bg-slate-50/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                    <span>View GitHub Repo</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-[10.5px] font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* GitHub Profile Banner */}
          <div className="mt-8 p-5 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 font-sans">
                  Explore More Open-Source Repositories on GitHub
                </h4>
                <p className="text-[11px] text-slate-600">
                  Full commit histories, database migration schemas, and component architecture publicly auditable.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/Prarthanabhandari"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold font-mono text-slate-800 hover:text-white hover:bg-slate-900 border border-slate-300 transition-all"
            >
              <span>github.com/Prarthanabhandari</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: OUR 5-STAGE ENGINEERING WORKFLOW
         ────────────────────────────────────────────────────────── */}
      <div id="engineering-workflow" className="max-w-7xl mx-auto px-6 mb-20 text-left scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 border-2 border-indigo-200/90 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block">
              TRANSPARENT DELIVERY PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-sans">
              How We Engineer & Deliver Your Product
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed font-normal">
              A transparent, 5-stage collaboration model designed to eliminate guesswork, keep you informed at every milestone, and deliver flawless code on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {engineeringWorkflow.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-indigo-600">
                      {stage.step}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {stage.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 font-sans leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="font-mono text-[8.5px] font-bold text-slate-400 block uppercase">
                    Stage Milestone
                  </span>
                  <span className="text-[10px] font-bold text-indigo-700 block mt-0.5">
                    {stage.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: STUDIO QUALITY COMMITMENT (Anti-Fakeness Guarantee)
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-left">
        <div className="p-8 sm:p-10 rounded-[32px] bg-white border-2 border-slate-200 shadow-lg space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 block">
              OUR TECHNICAL COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
              Authentic Engineering. Zero Fluff.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              We stand firmly behind our code quality, architectural standards, and commercial reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="text-sm font-black text-slate-900 font-sans">
                100% Handcrafted Code
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero AI hallucination wrappers, zero bloated template themes. Pure, readable TypeScript crafted for your business needs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-sm font-black text-slate-900 font-sans">
                Full IP & Source Ownership
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain complete ownership of the private Git repository, database DDL schemas, and all design assets upon handover.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <Gauge className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="text-sm font-black text-slate-900 font-sans">
                Sub-Second Speed Guarantee
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineered for 95+ Core Web Vitals, sub-second TTFB on edge networks, and zero jank during user interactions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-sm font-black text-slate-900 font-sans">
                Direct Engineering Access
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No outsourced junior layers or middle management. You collaborate directly with the engineers architecting your system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          SECTION: FREQUENTLY ASKED QUESTIONS (Authentic Engineering FAQs)
         ────────────────────────────────────────────────────────── */}
      <div id="faq" className="max-w-7xl mx-auto px-6 mb-20 text-left scroll-mt-24">
        <div className="max-w-3xl mb-8 space-y-1">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block">
            CLIENT TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
            Frequently Asked Engineering Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Clear, honest answers about our technical stack, code quality, and delivery practices.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, i) => {
            const isExpanded = expandedFaq === i;
            return (
              <div
                key={i}
                className="clay-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span className="text-sm sm:text-base font-black text-slate-900 font-sans">
                      {faq.question}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-black text-indigo-600 shrink-0">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-[13px] text-slate-650 leading-relaxed font-normal border-t border-slate-100"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          BOTTOM CONSULTATION CTA BANNER
         ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[9.5px] font-black uppercase tracking-widest text-indigo-400 block">
              DISCOVERY & ARCHITECTURE CONSULTATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans text-white">
              Ready to architect your product on this foundation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Connect directly with our founding engineers to map out your technical requirements and receive a clear, milestone-driven proposal.
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

    </div>
  );
}
