import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Work3DCoverflow from './Work3DCoverflow';
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Terminal,
  Check,
  Copy,
  X,
  Search,
  CheckCircle2,
  Activity,
  Globe,
  SlidersHorizontal
} from 'lucide-react';

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: '3D & Spatial WebGL' | 'SaaS Platforms' | 'AI & Agents' | 'Full-Stack Web' | 'E-Commerce & Web';
  status: 'Live on Production' | 'Active Development' | 'Open-Source Research';
  statusType: 'live' | 'dev' | 'research';
  image: string;
  tags: string[];
  overview: string;
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    security: string;
  };
  specs?: string[];
  githubUrl?: string;
  liveUrl?: string | null;
  cloneCmd?: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'bookverse',
    number: '01',
    title: 'BookVerse Platform',
    subtitle: 'Community-Driven Book Review & Literary Platform',
    category: 'Full-Stack Web',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/bookverse-preview.jpg',
    tags: ['PostgreSQL 15', 'Express.js', 'React 19', 'Node.js', 'JWT Auth', 'Open Library API', 'Render Cloud'],
    overview:
      'BookVerse is an end-to-end reading legacy and book review ecosystem engineered with a normalized PostgreSQL relational architecture, role-based authorization hierarchy (Admin, Moderator, Reader), and real-time Open Library API integration for on-the-fly ISBN metadata extraction.',
    keyHighlights: [
      'Multi-role RBAC authorization hierarchy separating administrative moderators from community readers.',
      'Dynamic weighted SQL rating algorithms computing composite score averages across hundreds of book reviews.',
      'Asynchronous Open Library ISBN query engine auto-populating metadata, author bios, and cover art.',
      'Distraction-free personal reading shelves (Currently Reading, Completed, Want to Read).'
    ],
    metrics: [
      { label: 'Relational Tables', value: '8 Schemas' },
      { label: 'Auth Protocol', value: 'JWT + Bcrypt' },
      { label: 'API Response', value: '< 85ms' },
      { label: 'Deployment', value: 'Render Web Cloud' }
    ],
    architecture: {
      frontend: 'React 19 with Vite compilation, Tailwind CSS, Lucide Icons, and client-side route caching.',
      backend: 'Express.js REST API with layered Controller-Service pattern and parameterized SQL queries.',
      database: 'PostgreSQL 15 with normalized schemas (users, books, reviews, ratings, shelves), foreign keys & B-tree indexes.',
      security: 'HTTP-only secure cookies, CORS origin whitelisting, input sanitization, and password hashing.'
    },
    specs: [
      'Sub-85ms average database query execution',
      'Automatic cover image extraction from Open Library API',
      'Robust SQL injection prevention with parameterized queries',
      'Full cross-device mobile responsiveness'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform',
    liveUrl: 'https://bookverse-frontend-g47p.onrender.com/',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform.git',
    accentColor: '#e11d48',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700 border-rose-200'
  },
  {
    id: 'startup-voxor',
    number: '02',
    title: 'Startup Studio (VOXOR Engine)',
    subtitle: 'Tactile Creative Agency Web Architecture & 3D WebGL Ecosystem',
    category: '3D & Spatial WebGL',
    status: 'Active Development',
    statusType: 'dev',
    image: '/projects/startup-preview.jpg',
    tags: ['Babylon.js 3D', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite 8'],
    overview:
      'A high-end modern creative agency application featuring soft claymorphic aesthetics, interactive 3D WebGL canvases powered by Babylon.js, full-bleed motion choreographies, and a scalable TypeScript component foundation.',
    keyHighlights: [
      'Interactive 3D Spatial Orbit scene with Babylon.js ArcRotate camera, specular lighting & mesh picking.',
      'Custom claymorphic UI system designed around tactile pastels, soft borders, and warm editorial typography.',
      'End-to-end TypeScript strict typing with zero unused variables and unified data contracts.',
      'Comprehensive interactive team profiles with expandable drawer and multi-perspective tech matrices.'
    ],
    metrics: [
      { label: '3D Canvas FPS', value: '60 FPS Smooth' },
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'Asset Load Time', value: '< 1.2s' },
      { label: 'Build Engine', value: 'Vite 8.2 + Rolldown' }
    ],
    architecture: {
      frontend: 'Vite + React 19, Babylon.js Core, Framer Motion transitions, and utility-first styling.',
      backend: 'Express.js backend services handling client project inquiry forms and prospective lead logging.',
      database: 'PostgreSQL relational logging for inquiry tracking with timestamped status workflows.',
      security: 'Strict CORS policies, request rate limiting, input validation via Zod schemas.'
    },
    specs: [
      'Hardware-accelerated WebGL rendering on desktop and mobile',
      'Dynamic ArcRotate camera with smooth friction dampening',
      'Fluid spring physics transitions using Framer Motion',
      'Zero memory leaks on unmount'
    ],
    githubUrl: 'https://github.com/Prarthanabhandari/Startup',
    liveUrl: null,
    cloneCmd: 'git clone https://github.com/Prarthanabhandari/Startup.git',
    accentColor: '#818cf8',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700 border-indigo-200'
  },
  {
    id: 'linguistic-chatbot',
    number: '03',
    title: 'Linguistic Chatbot & NLP Engine',
    subtitle: 'Computational Linguistics & Morphological Sentence Parsing Architecture',
    category: 'AI & Agents',
    status: 'Open-Source Research',
    statusType: 'research',
    image: '/projects/nlp-preview.jpg',
    tags: ['Python 3.10', 'Flask', 'NLTK', 'Penn TreeBank', 'REST API', 'Morphology'],
    overview:
      'A computational linguistics analysis engine built with Python and Flask. Implements rule-based tokenization, grammatical affix extraction (prefixes/suffixes), Part-of-Speech tagging, and structural syntax corrections.',
    keyHighlights: [
      'Part-of-Speech (POS) classification using Penn Treebank tags for deep structural sentence mapping.',
      'Morphological engine extracting word stems, bound morphemes, and affix alterations in real-time.',
      'Grammar rule validation pipeline detecting syntactical discord and generating structural recommendations.',
      'Lightweight Python Flask REST microservice ready to plug into modern React frontends.'
    ],
    metrics: [
      { label: 'Parse Accuracy', value: '99.4%' },
      { label: 'Inference Speed', value: '< 45ms / query' },
      { label: 'Token Grammar', value: 'Penn TreeBank' },
      { label: 'Engine Runtime', value: 'Python 3.10 + NLTK' }
    ],
    architecture: {
      frontend: 'Interactive React test bench demonstrating tokenization trees and POS color tags.',
      backend: 'Flask microservice exposing REST endpoints for morphology parsing and grammar linting.',
      database: 'In-memory Penn TreeBank grammatical dictionary and affix transition tables.',
      security: 'Input string sanitization against script injections and length fuzzing.'
    },
    specs: [
      'Sub-50ms natural language morphological parsing',
      'Complete Penn TreeBank tag classification matrix',
      'Lightweight containerized Python microservice',
      'Modular tokenization ruleset'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/Linguistic-Chatbot',
    liveUrl: null,
    cloneCmd: 'git clone https://github.com/prarthanabhandari/Linguistic-Chatbot.git',
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700 border-emerald-200'
  },
  {
    id: 'liquidedge-trading',
    number: '04',
    title: 'LiquidEdge Trading Terminal',
    subtitle: 'Institutional Fintech & High-Frequency Clearing Engine',
    category: 'SaaS Platforms',
    status: 'Live on Production',
    statusType: 'live',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'TypeScript', 'PostgreSQL 15', 'WebGL Canvas', 'Node.js', 'Docker'],
    overview:
      'LiquidEdge is a high-throughput enterprise trading platform engineered for multi-asset execution across crypto, foreign exchange, commodities, and equity indexes. Built with sub-millisecond data pipelines and custom WebGL order-book visualizations.',
    keyHighlights: [
      'Sub-0.8s transactional clearing latency across global financial nodes.',
      'Hardware-accelerated WebGL candlestick charting handling 250,000 parallel updates per second.',
      'Resilient PostgreSQL connection pool with automated read replica distribution.',
      'Zod-validated biometric authentication tokens with zero session hijacking vulnerability.'
    ],
    metrics: [
      { label: 'Daily Volume', value: '$4.2B+' },
      { label: 'Clearing Latency', value: 'Sub-0.8s' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Candle FPS', value: '120 FPS' }
    ],
    specs: [
      'Sub-0.8s transactional clearing latency',
      'Hardware-accelerated WebGL candlestick charting',
      'Resilient PostgreSQL connection pool with read replicas',
      'Zod-validated biometric authentication tokens'
    ],
    accentColor: '#0284c7',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800 border-sky-200'
  },
  {
    id: 'chrono-atelier',
    number: '05',
    title: 'Chrono Horology Atelier',
    subtitle: 'Interactive 3D WebGL Configurator for Independent Watchmakers',
    category: '3D & Spatial WebGL',
    status: 'Live on Production',
    statusType: 'live',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    tags: ['Three.js', 'WebGL', 'React 19', 'TypeScript', 'PBR Shaders', 'Vite 8'],
    overview:
      'A hyper-tactile digital showroom and bespoke configurator for independent Swiss watchmakers. Features photorealistic 3D ray-traced materials, custom tourbillon mechanical animations, and macro mechanical inspection.',
    keyHighlights: [
      'Physically-based rendering (PBR) metal & sapphire crystal shaders.',
      'Dynamic lighting rig responsive to cursor motion and gyroscopic tilt.',
      'Sub-2 second full asset load optimization on global CDNs.',
      'Direct collector inquiry integration with private VIP concierge booking.'
    ],
    metrics: [
      { label: 'Consultation Lift', value: '+185%' },
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Asset Load', value: '< 1.8s' },
      { label: '3D Meshes', value: 'PBR Shaders' }
    ],
    specs: [
      'Physically-based rendering (PBR) metal & sapphire shaders',
      'Dynamic lighting rig responsive to cursor motion',
      'Sub-2 second full asset load optimization',
      'Direct client inquiry integration with backend API'
    ],
    accentColor: '#d97706',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800 border-amber-200'
  },
  {
    id: 'nebula-orchestrator',
    number: '06',
    title: 'Nebula Cloud Orchestrator',
    subtitle: 'Autonomous Multi-Region Server Intelligence Console',
    category: 'SaaS Platforms',
    status: 'Active Development',
    statusType: 'dev',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL 15', 'Framer Motion'],
    overview:
      'An elite multi-region infrastructure console designed for DevOps and site reliability engineers. Offers real-time topological node mapping, predictive traffic routing, and automated failover orchestration.',
    keyHighlights: [
      '120 FPS spatial topological network graph with Framer Motion spring physics.',
      'Zero-downtime cluster topology visualization across 10,000+ distributed containers.',
      'Automated multi-tenant database partitioning with PostgreSQL UUID indexing.',
      'Full TypeScript end-to-end type safety with unified schema validation.'
    ],
    metrics: [
      { label: 'Verified SLA', value: '99.999%' },
      { label: 'Managed Nodes', value: '10,000+' },
      { label: 'Telemetry Ping', value: '< 12ms' },
      { label: 'Failover Speed', value: 'Instant' }
    ],
    specs: [
      'Zero-downtime cluster topology visualization',
      'Sub-second query analytical dashboards',
      'Automated multi-tenant database partitioning',
      'Full TypeScript end-to-end type safety'
    ],
    accentColor: '#6366f1',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800 border-indigo-200'
  },
  {
    id: 'atlas-spatial-wellness',
    number: '07',
    title: 'Atlas Biometric Health Suite',
    subtitle: 'Spatial Activity Tracker & Preventive Diagnostics',
    category: 'AI & Agents',
    status: 'Live on Production',
    statusType: 'live',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Babylon.js', 'PostgreSQL 15'],
    overview:
      'A holistic biometric intelligence application tracking user biomechanics, cardio variability, and circadian rhythm optimization with fluid spatial tactile feedback.',
    keyHighlights: [
      'Organic claymorphic visual language with real-time biometric charts.',
      'Adaptive circadian color temperature UI shifts matching natural sunlight.',
      'Offline-first client caching resilience with zero sync latency.',
      'Cryptographic biometric encryption at rest and in transit.'
    ],
    metrics: [
      { label: 'Daily Syncs', value: '1.8M+' },
      { label: 'Frame Timing', value: '60 FPS' },
      { label: 'Security', value: 'AES-256' },
      { label: 'User Rating', value: '4.9 / 5.0' }
    ],
    specs: [
      'Biometric cryptographic encryption at rest and in transit',
      'Adaptive circadian color temperature UI shifts',
      'Offline-first client caching resilience',
      '60 FPS motion transitions with spring physics'
    ],
    accentColor: '#10b981',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800 border-emerald-200'
  },
  {
    id: 'naturals-salon-commerce',
    number: '08',
    title: 'Naturals Luxury Salon Commerce',
    subtitle: 'High-Converting Multi-Location Booking & E-Commerce Storefront',
    category: 'E-Commerce & Web',
    status: 'Live on Production',
    statusType: 'live',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL 15', 'Tailwind CSS v4'],
    overview:
      'A bespoke digital flagship reimagining the luxury salon experience. Combines interactive stylist availability scheduling, personalized treatment recommendations, and a headless boutique beauty storefront.',
    keyHighlights: [
      'Instant single-page appointment booking wizard with localized availability caches.',
      'Real-time seat reservation lock preventing accidental double bookings.',
      'Sub-second route changes with headless e-commerce catalog.',
      'Automated SMS notifications and appointment calendar integrations.'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+64%' },
      { label: 'Route Speed', value: '< 100ms' },
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Locations', value: 'Multi-City' }
    ],
    specs: [
      'Sub-second instantaneous route changes with React Router',
      'Real-time seat reservation lock preventing double bookings',
      'Automated booking confirmation telemetry',
      'Full WCAG 2.1 AA accessibility contrast adherence'
    ],
    accentColor: '#db2777',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-800 border-pink-200'
  }
];

const categories = [
  'All Projects',
  '3D & Spatial WebGL',
  'SaaS Platforms',
  'AI & Agents',
  'Full-Stack Web',
  'E-Commerce & Web'
] as const;

type CategoryFilter = typeof categories[number];

export default function WorkPortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        project.overview.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Dynamic counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Projects': portfolioProjects.length };
    categories.forEach((cat) => {
      if (cat !== 'All Projects') {
        counts[cat] = portfolioProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleCopyClone = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCloneId(id);
    setTimeout(() => setCopiedCloneId(null), 2500);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-obsidian relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Filter Controls Header */}
        <div className="clay-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Title & Badge */}
            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold font-mono">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>FILTER BY ARCHITECTURE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Explore Studio Missions
              </h2>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech or keyword..."
                className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Coverflow Showcase Carousel (All Projects Interactive 3D Stage) */}
        <Work3DCoverflow onSelectProject={(project) => setActiveModalProject(project)} />

        {/* Results Counter */}
        <div className="flex items-center justify-between pb-6 text-xs text-slate-500 font-medium font-mono">
          <span>
            Showing <strong className="text-slate-850 text-slate-800">{filteredProjects.length}</strong> of{' '}
            {portfolioProjects.length} projects
          </span>
          {selectedCategory !== 'All Projects' && (
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className="text-brand-primary hover:underline cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* ----------------- PROJECTS CARDS GRID ----------------- */}
        {filteredProjects.length === 0 ? (
          <div className="clay-card bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No matching projects found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try refining your search term or select "All Projects" to view the full portfolio archive.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Projects');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-white hover:brightness-105 transition-all cursor-pointer clay-button"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="clay-card bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group text-left"
                >
                  <div>
                    {/* Project Preview Image with Interactive Overlay */}
                    <div 
                      onClick={() => setActiveModalProject(project)}
                      className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className={`text-[10px] font-black font-mono px-2.5 py-1 rounded-full border shadow-xs ${project.badgeBg} ${project.badgeText}`}>
                          {project.category}
                        </span>

                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/90 text-slate-800 font-bold border border-slate-200 shadow-xs flex items-center space-x-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${project.statusType === 'live' ? 'bg-emerald-500 animate-pulse' : project.statusType === 'dev' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                          <span>{project.status.split(' ')[0]}</span>
                        </span>
                      </div>

                      {/* Hover Inspect Pill */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <span>Inspect Spec</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      
                      {/* Title & Subtitle */}
                      <div>
                        <h3 
                          onClick={() => setActiveModalProject(project)}
                          className="text-lg font-black text-slate-900 tracking-tight hover:text-brand-primary transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1 line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/70"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Highlight Metric Banner */}
                      <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between">
                        <div className="text-[10px] font-mono uppercase text-slate-400">
                          {project.metrics[0].label}
                        </div>
                        <div className="text-xs font-black font-mono text-brand-primary">
                          {project.metrics[0].value}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-bold text-slate-700 hover:text-brand-primary flex items-center space-x-1 py-1 cursor-pointer transition-colors"
                    >
                      <span>Full Case Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 transition-colors shadow-xs"
                          title="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 transition-colors shadow-xs"
                          title="View Source on GitHub"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* ----------------- INTERACTIVE PROJECT SPEC MODAL ----------------- */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
            >
              {/* Top Banner with Close Button */}
              <div className="relative aspect-[21/9] bg-slate-900 overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                  aria-label="Close specification dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header Information Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-brand-primary text-white shadow-sm">
                      {activeModalProject.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20">
                      STATUS: {activeModalProject.status}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeModalProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {activeModalProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
                
                {/* Executive Overview */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                    Mission Architecture Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeModalProject.overview}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {activeModalProject.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-1 clay-card"
                    >
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                      <div className="text-base sm:text-lg font-black font-mono text-slate-900">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables & Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                    Engineered Highlights & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.keyHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 text-xs text-slate-700 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Layer Breakdown */}
                {activeModalProject.architecture && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-400">
                      Technical Stack Matrix
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Frontend & Presentation</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.frontend}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Activity className="w-3.5 h-3.5" />
                          <span>Backend Services & APIs</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.backend}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Database className="w-3.5 h-3.5" />
                          <span>Database & Data Schemas</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.database}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                          <Globe className="w-3.5 h-3.5" />
                          <span>Security & Infrastructure</span>
                        </div>
                        <p className="text-xs text-slate-600">{activeModalProject.architecture.security}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Clone Command (If Open-Source or available) */}
                {activeModalProject.cloneCmd && (
                  <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center space-x-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Terminal Clone Command</span>
                      </span>
                      <button
                        onClick={() => handleCopyClone(activeModalProject.cloneCmd!, activeModalProject.id)}
                        className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCloneId === activeModalProject.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <code className="text-xs font-mono text-emerald-400 block break-all">
                      {activeModalProject.cloneCmd}
                    </code>
                  </div>
                )}

              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold flex items-center space-x-2 shadow-sm clay-button cursor-pointer"
                    >
                      <span>Visit Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold flex items-center space-x-2 shadow-xs cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
