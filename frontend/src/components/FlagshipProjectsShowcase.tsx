import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Check,
  Copy,
  X,
  Search,
  ShieldCheck,
  Server,
  Cpu,
  Users,
  LayoutGrid,
  Table,
  CheckCircle2,
  Activity,
  Globe,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | '3D Agency' | 'AI & NLP';
  status: 'Live on Production' | 'Active Development' | 'Open-Source Research';
  statusType: 'live' | 'dev' | 'research';
  image: string;
  tags: string[];
  overview: string;
  leadArchitect: string;
  teamContributors: string[];
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    security: string;
  };
  schemaOverview: string[];
  githubUrl: string;
  liveUrl: string | null;
  cloneCmd: string;
  accentColor: string;
}

const flagshipData: ProjectDetail[] = [
  {
    id: 'bookverse',
    number: '01',
    title: 'BookVerse',
    subtitle: 'Community-Driven Book Review & Literary Legacy Platform',
    category: 'Full-Stack',
    status: 'Live on Production',
    statusType: 'live',
    image: '/projects/bookverse-preview.jpg',
    tags: ['PostgreSQL', 'Express.js', 'React 19', 'Node.js', 'JWT Auth', 'Open Library API', 'Render Cloud'],
    overview:
      'BookVerse is a full-stack reading legacy and community platform engineered with normalized PostgreSQL relational architecture, role-based access control (Admin, Moderator, Reader), and seamless Open Library API integration for on-the-fly ISBN metadata extraction.',
    leadArchitect: 'Prarthana Bhandari',
    teamContributors: [
      'Prarthana Bhandari (System Architecture, PostgreSQL Schemas & API Integration)',
      'Tanvi Suryavanshi (Design System, Book Detail Typography & Card Layouts)',
      'Siddhi Malwadkar (JWT Auth Cookies & Relational Join Optimizations)',
      'Shravani Nimbalkar (Cross-Device Responsiveness & Form Validation QA)'
    ],
    keyHighlights: [
      'Multi-role RBAC authorization hierarchy separating administrative moderators from community readers.',
      'Dynamic weighted SQL rating algorithms computing composite score averages across hundreds of book reviews.',
      'Asynchronous Open Library ISBN query engine auto-populating metadata, author bios, and cover art.',
      'Responsive, distraction-free reading shelves (Currently Reading, Completed, Want to Read).'
    ],
    metrics: [
      { label: 'Relational Tables', value: '8 Tables' },
      { label: 'Auth Protocol', value: 'JWT + Salted Bcrypt' },
      { label: 'API Response', value: '< 85ms' },
      { label: 'Deployment', value: 'Render Web Service' }
    ],
    architecture: {
      frontend: 'React 19 with Vite compilation, Tailwind CSS, Lucide Icons, and client-side route caching.',
      backend: 'Express.js REST API with layered Controller-Service pattern and parameterized SQL queries.',
      database: 'PostgreSQL 15 with normalized schemas (users, books, reviews, ratings, shelves), foreign keys & B-tree indexes.',
      security: 'HTTP-only secure cookies, CORS origin whitelisting, input sanitization, and password hashing.'
    },
    schemaOverview: [
      'users (id, username, email, password_hash, role, created_at)',
      'books (id, isbn, title, author, cover_url, published_year, avg_rating)',
      'reviews (id, user_id, book_id, rating, review_text, sentiment_score, created_at)',
      'reading_shelves (id, user_id, book_id, shelf_status, progress_percentage)'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform',
    liveUrl: 'https://bookverse-frontend-g47p.onrender.com/',
    cloneCmd: 'git clone https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform.git',
    accentColor: '#e11d48'
  },
  {
    id: 'startup-voxor',
    number: '02',
    title: 'Startup Studio (VOXOR Engine)',
    subtitle: 'High-Impact Creative Agency Web Architecture & 3D WebGL Ecosystem',
    category: '3D Agency',
    status: 'Active Development',
    statusType: 'dev',
    image: '/projects/startup-preview.jpg',
    tags: ['React 19', 'TypeScript', '3D Babylon.js', 'Tailwind CSS v4', 'Framer Motion', 'Express.js'],
    overview:
      'A high-end modern creative agency application featuring soft claymorphic aesthetics, interactive 3D WebGL canvases powered by Babylon.js, full-bleed motion choreographies, and a scalable TypeScript component foundation.',
    leadArchitect: 'Prarthana Bhandari',
    teamContributors: [
      'Prarthana Bhandari (Core Application Shell, Babylon.js Scene Pipeline & State Flow)',
      'Tanvi Suryavanshi (Claymorphic Token Harmonization, Pastel Color Themes & Wireframes)',
      'Siddhi Malwadkar (Inquiry API Endpoints, Email Notification Pipeline & Data Models)',
      'Shravani Nimbalkar (Lighthouse 60 FPS Profiling, WebGL Memory Leak Tests & QA)'
    ],
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
    schemaOverview: [
      'leads (id, client_name, email, organization, project_budget, timeline, message, created_at)',
      'inquiry_status (id, lead_id, status_code, assigned_member, notes, updated_at)'
    ],
    githubUrl: 'https://github.com/Prarthanabhandari/Startup',
    liveUrl: null,
    cloneCmd: 'git clone https://github.com/Prarthanabhandari/Startup.git',
    accentColor: '#ea580c'
  },
  {
    id: 'linguistic-chatbot',
    number: '03',
    title: 'Linguistic Chatbot & NLP Engine',
    subtitle: 'Computational Linguistics & Morphological Sentence Parsing Architecture',
    category: 'AI & NLP',
    status: 'Open-Source Research',
    statusType: 'research',
    image: '/projects/nlp-preview.jpg',
    tags: ['Python', 'Flask', 'NLTK', 'Morphological Analysis', 'Penn TreeBank', 'REST Microservice'],
    overview:
      'A computational linguistics analysis engine built with Python and Flask. Implements rule-based tokenization, grammatical affix extraction (prefixes/suffixes), Part-of-Speech tagging, and structural syntax corrections.',
    leadArchitect: 'Prarthana Bhandari',
    teamContributors: [
      'Prarthana Bhandari (NLP Processing Pipeline, Tokenization & Morphological Affix Engine)',
      'Tanvi Suryavanshi (Syntax Parse Tree UI Hierarchy & Color-Coded Token Badges)',
      'Siddhi Malwadkar (Flask Microservice Routing, JSON Response Formats & Error Traps)',
      'Shravani Nimbalkar (Sentence Corpus Verification, Grammar Benchmark Accuracy Tests)'
    ],
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
      frontend: 'Terminal-inspired syntax tree viewer with interactive token inspectors and category tags.',
      backend: 'Python Flask REST API with modular NLP pipelines and tokenized sentence processors.',
      database: 'Linguistic lexicons, inflection dictionaries, and English morphological corpus datasets.',
      security: 'Request validation, character-set sanitization, rate-limited public inference endpoints.'
    },
    schemaOverview: [
      'nlp_utterance (id, input_text, cleaned_tokens, pos_tagged_json, parse_tree, timestamp)',
      'grammar_rules (id, pattern_regex, error_category, correction_suggestion, confidence_score)'
    ],
    githubUrl: 'https://github.com/prarthanabhandari/ChatBot',
    liveUrl: null,
    cloneCmd: 'git clone https://github.com/prarthanabhandari/ChatBot.git',
    accentColor: '#4f46e5'
  }
];

export const FlagshipProjectsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [activeBlueprintId, setActiveBlueprintId] = useState<string | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Filter projects by category and search query
  const filteredProjects = flagshipData.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Full-Stack' && proj.category === 'Full-Stack') ||
      (selectedCategory === '3D Agency' && proj.category === '3D Agency') ||
      (selectedCategory === 'AI & NLP' && proj.category === 'AI & NLP');

    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.overview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const activeProject = flagshipData.find((p) => p.id === activeBlueprintId);

  const handleCopyClone = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2500);
  };

  return (
    <section id="flagship-projects" className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#faf7f5] text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-mono font-bold tracking-wider uppercase border border-rose-200/60">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>FLAGSHIP PROJECTS & REPOSITORIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2625] tracking-tight leading-tight">
              Authentic Repositories & <span className="font-serif italic text-rose-600">Live Deployments</span>
            </h2>

            <p className="text-sm sm:text-base text-[#786b69] leading-relaxed">
              Explore documented production codebases, normalized relational schemas, 3D WebGL scenes, and computational NLP engines created by our team.
            </p>
          </div>

          {/* Quick link to GitHub */}
          <a
            href="https://github.com/prarthanabhandari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2d2625] hover:text-rose-600 group shrink-0 transition-colors"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* ── Interactive Controls Toolbar (Manageable & Clean) ── */}
        <div className="p-4 rounded-3xl bg-white border border-[#ede4df] shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'All', label: 'All Projects', count: flagshipData.length },
              { id: 'Full-Stack', label: 'Full-Stack Web', count: 1 },
              { id: '3D Agency', label: '3D & Creative Agency', count: 1 },
              { id: 'AI & NLP', label: 'AI & Computational NLP', count: 1 }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2d2625] text-white shadow-sm'
                    : 'bg-[#faf7f5] text-[#5a4d4b] hover:bg-[#ede4df] border border-[#ede4df]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar & View switch */}
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#786b69] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech, stack, title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#faf7f5] border border-[#ede4df] text-xs text-[#2d2625] placeholder:text-[#a0908e] focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Layout Mode Toggle */}
            <div className="flex items-center bg-[#faf7f5] p-1 rounded-full border border-[#ede4df] shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-white text-rose-600 shadow-2xs' : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Showcase Cards View"
                aria-label="Showcase Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-white text-rose-600 shadow-2xs' : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Technical Matrix Table"
                aria-label="Technical Matrix Table"
              >
                <Table className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── PROJECTS DISPLAY ── */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 rounded-3xl bg-white border border-[#ede4df] text-center space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-rose-400 mx-auto" />
            <p className="text-base font-bold text-[#2d2625]">No projects matched your criteria</p>
            <p className="text-xs text-[#786b69]">Try clearing your search query or picking another filter category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200 hover:bg-rose-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'cards' ? (
          /* ── 1. Showcase Cards View (Rich Visuals & Attractive Claymorphism) ── */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => {
              const isSelected = activeBlueprintId === proj.id;

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-[32px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl ${
                    isSelected
                      ? 'border-rose-400 ring-4 ring-rose-100/70 shadow-xl'
                      : 'border-[#ede4df] shadow-sm hover:border-rose-200'
                  }`}
                >
                  {/* Top Graphic Preview Banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-[#ede4df]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                    {/* Top Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider">
                        #{proj.number}
                      </span>

                      {proj.statusType === 'live' && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wide flex items-center space-x-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          <span>LIVE DEMO</span>
                        </span>
                      )}

                      {proj.statusType === 'dev' && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wide flex items-center space-x-1.5 shadow-sm">
                          <Activity className="w-3 h-3" />
                          <span>DEV ACTIVE</span>
                        </span>
                      )}

                      {proj.statusType === 'research' && (
                        <span className="px-3 py-1 rounded-full bg-indigo-500/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wide flex items-center space-x-1.5 shadow-sm">
                          <Terminal className="w-3 h-3" />
                          <span>NLP CORE</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Category Pill on Image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[#2d2625] text-[10px] font-bold uppercase tracking-wider shadow-2xs border border-white">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#2d2625] group-hover:text-rose-600 transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs font-medium text-[#8b5e56] line-clamp-1 mt-0.5">
                          {proj.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-[#786b69] leading-relaxed line-clamp-3">
                        {proj.overview}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.slice(0, 4).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#faf7f5] border border-[#ede4df] text-[10px] font-mono font-semibold text-[#5a4d4b]"
                          >
                            {tag}
                          </span>
                        ))}
                        {proj.tags.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-rose-50 border border-rose-200/50 text-[10px] font-mono font-bold text-rose-600">
                            +{proj.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Metrics Mini-Row */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#ede4df]">
                      {proj.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-[#faf7f5] border border-[#ede4df] text-left">
                          <p className="text-[10px] font-mono text-[#8b5e56] uppercase tracking-wider">{m.label}</p>
                          <p className="text-xs font-bold text-[#2d2625] mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-[#ede4df] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      
                      {/* Interactive Blueprint Drawer Toggle */}
                      <button
                        onClick={() => setActiveBlueprintId(isSelected ? null : proj.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                          isSelected
                            ? 'bg-rose-600 text-white shadow-md'
                            : 'bg-[#2d2625] text-white hover:bg-black shadow-2xs'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>{isSelected ? 'Close Blueprint' : 'Technical Blueprint'}</span>
                      </button>

                      {/* External Direct Links */}
                      <div className="flex items-center justify-end space-x-2">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#faf7f5] border border-[#ede4df] text-[#2d2625] hover:bg-white hover:text-rose-600 transition-colors shadow-2xs"
                          title="View GitHub Repository"
                          aria-label="View GitHub Repository"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>

                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center space-x-1.5 shadow-2xs"
                          >
                            <Globe className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Live</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* ── 2. Technical Matrix Table View (Manageable & Structured) ── */
          <div className="rounded-[32px] bg-white border border-[#ede4df] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#faf7f5] border-b border-[#ede4df] text-[11px] font-mono uppercase text-[#8b5e56] tracking-wider">
                    <th className="py-4 px-6 font-bold">Project</th>
                    <th className="py-4 px-6 font-bold">Category</th>
                    <th className="py-4 px-6 font-bold">Status</th>
                    <th className="py-4 px-6 font-bold">Tech Stack Highlights</th>
                    <th className="py-4 px-6 font-bold">Lead Architect</th>
                    <th className="py-4 px-6 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede4df] text-xs">
                  {filteredProjects.map((proj) => (
                    <tr
                      key={proj.id}
                      className="hover:bg-[#faf7f5]/80 transition-colors group cursor-pointer"
                      onClick={() => setActiveBlueprintId(proj.id)}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-10 h-10 rounded-xl object-cover border border-[#ede4df] shrink-0"
                          />
                          <div>
                            <p className="font-bold text-[#2d2625] group-hover:text-rose-600 transition-colors">
                              {proj.title}
                            </p>
                            <p className="text-[11px] text-[#786b69] line-clamp-1">{proj.subtitle}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full bg-[#faf7f5] border border-[#ede4df] text-[11px] font-medium text-[#5a4d4b]">
                          {proj.category}
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        {proj.statusType === 'live' && (
                          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Live Production</span>
                          </span>
                        )}
                        {proj.statusType === 'dev' && (
                          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>In Development</span>
                          </span>
                        )}
                        {proj.statusType === 'research' && (
                          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            <span>NLP Research</span>
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {proj.tags.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-4 px-6 font-medium text-[#2d2625]">
                        {proj.leadArchitect}
                      </td>

                      <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => setActiveBlueprintId(proj.id)}
                            className="px-3 py-1.5 rounded-lg bg-[#2d2625] text-white text-[11px] font-bold hover:bg-black transition-colors cursor-pointer"
                          >
                            Blueprint
                          </button>
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#faf7f5] border border-[#ede4df] hover:text-rose-600 transition-colors"
                            title="GitHub"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── 3. INTERACTIVE TECHNICAL BLUEPRINT DRAWER (Informative & Deep Dive) ── */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="mt-12 rounded-[36px] bg-white border-2 border-rose-200/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-500"
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveBlueprintId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#faf7f5] border border-[#ede4df] text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Close Blueprint"
                aria-label="Close Blueprint"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Blueprint Header */}
              <div className="space-y-3 pb-8 border-b border-[#ede4df]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-mono font-bold border border-rose-200/60">
                    TECHNICAL BLUEPRINT // PROJECT #{activeProject.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200/60">
                    {activeProject.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#faf7f5] text-[#5a4d4b] text-xs font-mono font-bold border border-[#ede4df]">
                    Category: {activeProject.category}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#8b5e56] mt-1">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  {/* Git Clone Bar */}
                  <div className="flex items-center space-x-2 bg-[#faf7f5] p-2 rounded-2xl border border-[#ede4df] max-w-md">
                    <Terminal className="w-4 h-4 text-rose-500 shrink-0 ml-1" />
                    <code className="text-[11px] font-mono text-[#5a4d4b] truncate select-all">
                      {activeProject.cloneCmd}
                    </code>
                    <button
                      onClick={() => handleCopyClone(activeProject.cloneCmd)}
                      className="p-1.5 rounded-lg bg-white border border-[#ede4df] hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer shrink-0"
                      title="Copy Git Clone Command"
                    >
                      {copiedCmd === activeProject.cloneCmd ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Blueprint Content Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                
                {/* Left Column: Visual Preview & Metrics */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-[#ede4df] shadow-md group relative">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white space-y-1">
                        <p className="text-xs font-mono font-bold">Lead Architect:</p>
                        <p className="text-sm font-bold">{activeProject.leadArchitect}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantitative Engineering Metrics */}
                  <div className="p-5 rounded-2xl bg-[#faf7f5] border border-[#ede4df] space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625] flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-rose-500" />
                      <span>Quantitative Benchmarks</span>
                    </h4>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {activeProject.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white border border-[#ede4df] shadow-2xs">
                          <p className="text-[10px] font-mono text-[#8b5e56] uppercase tracking-wider">{m.label}</p>
                          <p className="text-sm font-bold text-[#2d2625] mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Contributors Role Allocation */}
                  <div className="p-5 rounded-2xl bg-white border border-[#ede4df] space-y-3 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625] flex items-center space-x-2">
                      <Users className="w-4 h-4 text-rose-500" />
                      <span>Team Collaboration (We 4)</span>
                    </h4>

                    <ul className="space-y-2 pt-1 text-xs text-[#5a4d4b]">
                      {activeProject.teamContributors.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-[#2d2625] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>GitHub Codebase</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: In-depth Technical Specs & Schemas */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Overview Paragraph */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625]">
                      System Purpose & Architectural Overview
                    </h4>
                    <p className="text-sm text-[#5a4d4b] leading-relaxed">
                      {activeProject.overview}
                    </p>
                  </div>

                  {/* 4 Architectural Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#faf7f5] border border-[#ede4df] space-y-1.5">
                      <div className="flex items-center space-x-2 text-rose-600">
                        <Code2 className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold uppercase">Frontend Layer</span>
                      </div>
                      <p className="text-xs text-[#5a4d4b] leading-relaxed">{activeProject.architecture.frontend}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf7f5] border border-[#ede4df] space-y-1.5">
                      <div className="flex items-center space-x-2 text-amber-600">
                        <Server className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold uppercase">Backend API</span>
                      </div>
                      <p className="text-xs text-[#5a4d4b] leading-relaxed">{activeProject.architecture.backend}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf7f5] border border-[#ede4df] space-y-1.5">
                      <div className="flex items-center space-x-2 text-indigo-600">
                        <Database className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold uppercase">Database Model</span>
                      </div>
                      <p className="text-xs text-[#5a4d4b] leading-relaxed">{activeProject.architecture.database}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf7f5] border border-[#ede4df] space-y-1.5">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold uppercase">Security & Auth</span>
                      </div>
                      <p className="text-xs text-[#5a4d4b] leading-relaxed">{activeProject.architecture.security}</p>
                    </div>
                  </div>

                  {/* Core Engineering Accomplishments */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625] flex items-center space-x-2">
                      <Bookmark className="w-4 h-4 text-rose-500" />
                      <span>Key Engineering Implementations</span>
                    </h4>
                    <div className="space-y-2">
                      {activeProject.keyHighlights.map((hl, hlIdx) => (
                        <div
                          key={hlIdx}
                          className="p-3.5 rounded-2xl bg-white border border-[#ede4df] text-xs text-[#5a4d4b] leading-relaxed flex items-start space-x-3 shadow-2xs"
                        >
                          <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schema / Pipeline Snapshot */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625] flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-rose-500" />
                      <span>Data Schema & Pipeline Snapshot</span>
                    </h4>

                    <div className="p-4 rounded-2xl bg-[#1e1919] text-[#e8dfdb] font-mono text-xs overflow-x-auto space-y-1.5 shadow-inner">
                      {activeProject.schemaOverview.map((line, lIdx) => (
                        <div key={lIdx} className="flex items-start space-x-2 leading-relaxed">
                          <span className="text-rose-400 select-none">&gt;</span>
                          <span className="text-emerald-300 font-medium">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Tech Stack Tags */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d2625]">
                      Full Technology & Tooling Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-white border border-[#ede4df] text-xs font-mono text-[#2d2625] shadow-2xs font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FlagshipProjectsShowcase;
