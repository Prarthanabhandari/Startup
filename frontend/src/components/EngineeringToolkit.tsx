import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Box
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops';
  role: string;
  experience: string;
}

interface DisciplineCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  leadSpecialist: string;
  coreTools: string[];
  principles: string[];
}

const disciplines: DisciplineCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering & UI Systems',
    subtitle: 'Reactive Interfaces & Motion Design',
    icon: Code2,
    accentColor: '#e11d48',
    badgeBg: 'bg-rose-50 border-rose-200/60',
    badgeText: 'text-rose-700',
    description:
      'Crafting clean, accessible, and responsive user experiences with component-driven architecture, fluid micro-interactions, and strict TypeScript contracts.',
    leadSpecialist: 'Prarthana Bhandari & Tanvi Suryavanshi',
    coreTools: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'HTML5 / CSS3', 'Vite'],
    principles: [
      'Component modularity & reusable design tokens',
      'End-to-end TypeScript safety with zero implicit any',
      'Fluid 60 FPS page transitions & tactile claymorphic aesthetics'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Architecture & API Systems',
    subtitle: 'Layered Services & Secure Endpoints',
    icon: Server,
    accentColor: '#4f46e5',
    badgeBg: 'bg-indigo-50 border-indigo-200/60',
    badgeText: 'text-indigo-700',
    description:
      'Designing robust server architectures, RESTful API endpoints, request validation pipelines, and secure authentication flows.',
    leadSpecialist: 'Prarthana Bhandari & Siddhi Malwadkar',
    coreTools: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Bcrypt Encryption', 'Zod Validation'],
    principles: [
      'Layered MVC pattern separating routing from business logic',
      'HTTP-only secure cookie token authentication',
      'Strict input sanitization, error handling & logging'
    ]
  },
  {
    id: 'database',
    title: 'Databases & Relational Modeling',
    subtitle: 'ACID Integrity & Schema Design',
    icon: Database,
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50 border-emerald-200/60',
    badgeText: 'text-emerald-700',
    description:
      'Architecting normalized relational data models, indexed lookup tables, and reliable query execution for production applications.',
    leadSpecialist: 'Prarthana Bhandari & Siddhi Malwadkar',
    coreTools: ['PostgreSQL 15', 'MongoDB', 'SQL Queries', 'Foreign Key Constraints', 'Database Indexing'],
    principles: [
      'Normalized 3NF relational schemas for data integrity',
      'B-tree indexes on foreign keys and search columns',
      'ACID transaction safety for user actions & reviews'
    ]
  },
  {
    id: 'ai-spatial',
    title: 'Computational AI & Spatial Graphics',
    subtitle: 'NLP Engines & WebGL Canvas',
    icon: Box,
    accentColor: '#ea580c',
    badgeBg: 'bg-amber-50 border-amber-200/60',
    badgeText: 'text-amber-700',
    description:
      'Developing computational linguistics algorithms for grammatical sentence analysis and lightweight 3D WebGL scenes for interactive product presentation.',
    leadSpecialist: 'Prarthana Bhandari & Shravani Nimbalkar',
    coreTools: ['Python', 'Flask', 'NLTK', 'Morphological Analysis', 'Babylon.js WebGL', 'Penn Treebank'],
    principles: [
      'Rule-based morphological tokenization & affix extraction',
      'Part-of-Speech syntax validation pipelines',
      'Lightweight WebGL scenes optimized for low memory footprint'
    ]
  }
];

const allTechnologies: TechItem[] = [
  { name: 'React 19', category: 'frontend', role: 'Component Architecture', experience: 'Production' },
  { name: 'TypeScript', category: 'frontend', role: 'Strict Type Contracts', experience: 'Core' },
  { name: 'Tailwind CSS v4', category: 'frontend', role: 'Design Tokens & Claymorphism', experience: 'Core' },
  { name: 'Framer Motion', category: 'frontend', role: 'Micro-interactions', experience: 'Core' },
  { name: 'Node.js', category: 'backend', role: 'Server Runtime', experience: 'Production' },
  { name: 'Express.js', category: 'backend', role: 'RESTful API Routing', experience: 'Production' },
  { name: 'PostgreSQL', category: 'database', role: 'Relational Schemas', experience: 'Production' },
  { name: 'MongoDB', category: 'database', role: 'Document Collections', experience: 'Working' },
  { name: 'Python', category: 'ai', role: 'NLP Analysis & Scripts', experience: 'Core' },
  { name: 'Flask', category: 'ai', role: 'Microservice Endpoints', experience: 'Core' },
  { name: 'NLTK', category: 'ai', role: 'Natural Language Processing', experience: 'Research' },
  { name: 'Babylon.js', category: 'ai', role: 'Interactive 3D WebGL', experience: 'Working' },
  { name: 'Git & GitHub', category: 'devops', role: 'Version Control & Workflows', experience: 'Daily' },
  { name: 'Render Cloud', category: 'devops', role: 'Web Service Deployments', experience: 'Production' },
  { name: 'Postman', category: 'devops', role: 'API Testing & Verification', experience: 'Daily' },
];

export const EngineeringToolkit: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredTech = allTechnologies.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6] text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── Section Header (Clean, Authentic & Human) ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede4df] text-[11px] font-mono font-bold tracking-wider uppercase text-[#8b5e56] shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-rose-500" />
            <span>ENGINEERING DISCIPLINE & TOOLKIT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2625] tracking-tight leading-tight">
            Technologies & Tools We Work With{' '}
            <span className="font-serif italic text-rose-600">Daily</span>
          </h2>

          <p className="text-sm sm:text-base text-[#786b69] leading-relaxed">
            The foundational languages, frameworks, and database engines our 4-member founding team uses to build scalable, high-performance web applications.
          </p>
        </div>

        {/* ── 4 Clean Core Discipline Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {disciplines.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-[#ede4df] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-5">
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#faf7f5] border border-[#ede4df] flex items-center justify-center text-[#2d2625] shrink-0 group-hover:border-rose-300 transition-colors">
                        <Icon className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#2d2625]">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#8b5e56]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${item.badgeBg} ${item.badgeText} shrink-0`}>
                      Core Discipline
                    </span>
                  </div>

                  {/* Grounded Description */}
                  <p className="text-xs sm:text-sm text-[#5a4d4b] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Core Tools Badges */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5e56] font-bold block">
                      Primary Tooling:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coreTools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl bg-[#faf7f5] border border-[#ede4df] text-xs font-mono font-medium text-[#2d2625] hover:bg-white transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Principles */}
                  <div className="space-y-2 pt-2 border-t border-[#ede4df]/70">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5e56] font-bold block">
                      Engineering Principles:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#5a4d4b]">
                      {item.principles.map((pr, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Team Ownership */}
                <div className="pt-4 border-t border-[#ede4df] flex items-center justify-between text-xs text-[#786b69]">
                  <span className="text-[11px] font-mono">Led by:</span>
                  <span className="font-semibold text-[#2d2625] text-xs">
                    {item.leadSpecialist}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Interactive Technology Matrix Ticker / Filter ── */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-[#ede4df] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ede4df]">
            <div>
              <h3 className="text-xl font-bold text-[#2d2625]">
                Verified Skills & Practical Repertoire
              </h3>
              <p className="text-xs text-[#786b69] mt-0.5">
                Every technology listed is actively used across our live repositories and deployed applications.
              </p>
            </div>

            {/* Clean Category Filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All (15)' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend' },
                { id: 'database', label: 'Databases' },
                { id: 'ai', label: 'AI & NLP' },
                { id: 'devops', label: 'DevOps & QA' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-[#2d2625] text-white shadow-2xs'
                      : 'bg-[#faf7f5] text-[#5a4d4b] hover:bg-[#ede4df] border border-[#ede4df]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Verified Tech Pills with Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredTech.map((t) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-2xl bg-[#faf7f5] border border-[#ede4df] hover:bg-white hover:border-rose-200 hover:shadow-2xs transition-all text-left space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2d2625] group-hover:text-rose-600 transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-white border border-[#ede4df] text-[#8b5e56]">
                    {t.experience}
                  </span>
                </div>
                <p className="text-[11px] text-[#786b69] truncate">
                  {t.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Authentic footnote */}
          <div className="pt-2 text-center text-xs text-[#8b5e56] font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Demonstrated across 3 production repositories with clean git commits and 100% strict builds.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringToolkit;
