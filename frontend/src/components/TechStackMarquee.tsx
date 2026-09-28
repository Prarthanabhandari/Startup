import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechItem {
  name: string;
  role: string;
  brandColor: string;
  svg: (props: { className?: string }) => React.ReactNode;
}

// 1. FRONTEND, 3D & CLIENT RUNTIME (Exclusively what is in frontend/package.json)
const frontendStack: TechItem[] = [
  {
    name: 'React 19',
    role: 'Core UI Framework',
    brandColor: '#00D8FF',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8.9-3.75C20.35 6.07 16.58 3.5 12 3.5S3.65 6.07 3.1 9.75c-.32 2.14.36 4.3 1.83 5.86 1.48 1.57 3.58 2.5 5.92 2.76 2.34.26 4.67-.32 6.42-1.61 1.76-1.28 2.91-3.15 3.19-5.18.28-2.03-.31-4.08-1.56-5.83z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    role: 'Strict Type System',
    brandColor: '#3178C6',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.27 12.33h-2.3v7.4H7.13v-7.4H4.82v-2.06h6.95v2.06zm9.32 3.14c-.17-.9-.67-1.74-2.12-2.38-.64-.28-1.33-.48-1.53-.94-.08-.27-.08-.43-.04-.58.12-.53.75-.7 1.24-.54.32.1.62.34.8.74l1.44-.92c-.22-.35-.33-.5-.48-.64-.52-.58-1.21-.88-2.33-.85l-.58.07c-.55.14-1.08.43-1.4.83-.94 1.06-.67 2.92.47 3.68 1.12.84 2.76 1.02 2.97 1.83.2.86-.53 1.27-1.58 1.18-.62-.1-1-.41-1.34-.9l-1.52.88c.22.43.53.82.91 1.09.79.55 1.8.72 2.89.56 1.25-.18 2.18-.8 2.4-1.9.05-.24.04-.5 0-.74l-.07-.28z" />
      </svg>
    ),
  },
  {
    name: 'Vite 8',
    role: 'Next-Gen Build Engine',
    brandColor: '#BD34FE',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.018 3.73l-10.4 18.56a.75.75 0 01-1.32-.02L.948 4.22a.75.75 0 01.81-1.08l10.37 1.83a.75.75 0 00.26 0l9.84-1.84a.75.75 0 01.79.6z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS v4',
    role: 'Design & Styling Engine',
    brandColor: '#38BDF8',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Babylon.js',
    role: 'Hero 3D Canvas Engine',
    brandColor: '#BB464B',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L2 6.77v10.46L12 23l10-5.77V6.77L12 1zm0 2.31l7.8 4.5-3.3 1.9-4.5-2.6-4.5 2.6-3.3-1.9L12 3.31zM4 8.08l3.3 1.9v5.2l-3.3-1.9V8.08zm4.5 2.6l3.5-2.02 3.5 2.02v4.04l-3.5 2.02-3.5-2.02V10.68zm11.5 5.2l-3.3 1.9v-5.2l3.3-1.9v5.2zM12 20.69l-3.3-1.9 4.5-2.6 4.5 2.6-3.3 1.9-2.4-1.39-2.4 1.39z" />
      </svg>
    ),
  },
  {
    name: 'Three.js',
    role: 'WebGL & Fiber Shaders',
    brandColor: '#1E293B',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.05 16.03l-9.1-15.75a.999.999 0 0 0-1.73 0l-9.1 15.75c-.39.68.1 1.53.88 1.53h18.17c.78 0 1.27-.85.88-1.53zm-10.05-12.2l7.15 12.38H4.85l7.15-12.38zM12 9.5l3.5 6.06H8.5L12 9.5z" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    role: 'Spring Physics Animations',
    brandColor: '#0055FF',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: 'React Router 7',
    role: 'Client SPA Navigation',
    brandColor: '#CA4246',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.5h3.5v-2H13V7.5h-2V11H7.5v2H11v3.5h2z" />
      </svg>
    ),
  },
  {
    name: 'Lucide Icons',
    role: 'Vector Iconography',
    brandColor: '#F56565',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    name: 'WebGL & Canvas',
    role: 'GPU Hardware Render',
    brandColor: '#990000',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 8.09L4.24 6.55 12 3.03l7.76 3.52L12 10.09zM2.5 9.5v7l9.5 5 9.5-5v-7l-2 1v5.27L12 19.82l-7.5-3.05V10.5l-2-1z" />
      </svg>
    ),
  },
  {
    name: 'Oxlint',
    role: 'Ultra-Fast Linter',
    brandColor: '#00E599',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" />
      </svg>
    ),
  },
];

// 2. BACKEND, DATABASE & SECURITY (Exclusively what is in backend/package.json & PostgreSQL)
const backendStack: TechItem[] = [
  {
    name: 'Node.js',
    role: 'Backend Runtime',
    brandColor: '#339933',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5L2.25 7.125v11.25L12 24l9.75-5.625V7.125L12 1.5zm7.5 15.375L12 21.375l-7.5-4.5V8.625L12 4.125l7.5 4.5v8.25zM12 7.5L6.75 10.5v4.5L12 18l5.25-3v-4.5L12 7.5z" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    role: 'REST Controller API',
    brandColor: '#0F172A',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.571l-4.286-4.286 4.286-4.285h-4.286l-2.143 2.143-2.143-2.143h-4.286l4.286 4.285-4.286 4.286h4.286l2.143-2.143 2.143 2.143H24zM8.571 5.714H0v12.857h8.571v-2.857H2.857V12h4.286V9.143H2.857V8.571h5.714V5.714z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL 15',
    role: 'Relational Database (voxor_db)',
    brandColor: '#336791',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09c-.61.12-1.24.18-1.88.18-1.77 0-3.41-.53-4.78-1.44.42-.58.91-1.12 1.48-1.59 1.15.7 2.48 1.11 3.9 1.11.45 0 .89-.04 1.32-.12-.04.64-.04 1.25-.04 1.86zm3.43-3.23c-.76.77-1.68 1.38-2.7 1.78-.06-.58-.19-1.14-.38-1.68 1.05-.41 1.99-1.06 2.76-1.88.12.6.23 1.19.32 1.78zm1.09-3.78c-.28 1.09-.79 2.08-1.48 2.92-.08-.59-.22-1.16-.42-1.7.67-.84 1.15-1.84 1.39-2.92.19.57.36 1.14.51 1.7zM12 4c2.21 0 4.21.9 5.66 2.34-.33.36-.69.7-1.07 1.01-1.25-.86-2.77-1.35-4.4-1.35-2.02 0-3.86.76-5.26 2.02-.38-.34-.73-.72-1.05-1.12C7.38 5.15 9.54 4 12 4z" />
      </svg>
    ),
  },
  {
    name: 'Zod Validation',
    role: 'DTO & Schema Invariants',
    brandColor: '#3E67B1',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.5 13.5l-6-7.5h5.5v-2h-8.5v2l6 7.5H9v2h8.5v-2z" />
      </svg>
    ),
  },
  {
    name: 'pg Client Pool',
    role: 'Database Connection Pool',
    brandColor: '#2E6A94',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    name: 'JWT Auth',
    role: 'Bearer Token Security',
    brandColor: '#8B5CF6',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 12.27c-2.48-.96-4.56-3.07-5.5-5.77 1.48-1.42 3.44-2.5 5.5-2.5s4.02 1.08 5.5 2.5c-.94 2.7-3.02 4.81-5.5 5.77z" />
      </svg>
    ),
  },
  {
    name: 'Helmet HTTP',
    role: 'Web Security Headers',
    brandColor: '#0EA5E9',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.8 2.12 7.12 5.25 8.84l1.25-2.16C6.18 17.39 4.5 14.89 4.5 12 4.5 7.86 7.86 4.5 12 4.5s7.5 3.36 7.5 7.5c0 2.89-1.68 5.39-4 6.68l1.25 2.16C19.88 19.12 22 15.8 22 12c0-5.52-4.48-10-10-10zm-1 5v7h2V7h-2zm0 9v2h2v-2h-2z" />
      </svg>
    ),
  },
  {
    name: 'Bcrypt.js',
    role: 'Argon/Salt Hash Engine',
    brandColor: '#6366F1',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
  },
  {
    name: 'Morgan Logger',
    role: 'HTTP Request Telemetry',
    brandColor: '#10B981',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      </svg>
    ),
  },
  {
    name: 'REST Architecture',
    role: 'Stateless JSON Endpoints',
    brandColor: '#F97316',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
      </svg>
    ),
  },
  {
    name: 'Dotenv Engine',
    role: 'Secret Environment Config',
    brandColor: '#EAB308',
    svg: ({ className = 'w-7 h-7' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.484.484 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
  },
];

function TechBadge({ item }: { item: TechItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = item.svg;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl bg-white/90 border border-slate-200/80 hover:border-slate-350 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer select-none flex-shrink-0 backdrop-blur-md clay-card"
      title={item.name}
    >
      {/* Icon with authentic brand color on hover */}
      <div
        style={{ color: isHovered ? item.brandColor : '#64748b' }}
        className="transition-colors duration-300 transform group-hover:scale-115 flex items-center justify-center"
      >
        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Interactive Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-mono font-bold whitespace-nowrap z-30 pointer-events-none shadow-xl border border-slate-700/50 flex items-center space-x-1.5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: item.brandColor }}
            />
            <span>{item.name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechStackMarquee() {
  // Triple arrays to ensure fluid, seamless infinite looping with no gaps
  const rowOneCombined = [...frontendStack, ...frontendStack, ...frontendStack];
  const rowTwoCombined = [...backendStack, ...backendStack, ...backendStack];

  return (
    <section className="py-12 sm:py-14 bg-[#edf2f7] relative overflow-hidden select-none border-y border-slate-200/80">
      {/* Subtle Luminous Studio Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-brand-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Atelier Monospace Header */}
      <div className="max-w-7xl mx-auto px-6 mb-7 text-center relative z-10">
        <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.35em] text-slate-500 uppercase block">
          THE STACK WE BUILD ON
        </span>
      </div>

      {/* Marquee Track Container with Smooth Edge Gradients */}
      <div
        className="relative w-full space-y-4 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* Row 1: Frontend & 3D WebGL Runtime (Scrolls Left) */}
        <div className="flex gap-4 sm:gap-5 animate-marquee-left">
          {rowOneCombined.map((item, index) => (
            <TechBadge key={`r1-${item.name}-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: Node.js, Express & PostgreSQL Backend (Scrolls Right) */}
        <div className="flex gap-4 sm:gap-5 animate-marquee-right">
          {rowTwoCombined.map((item, index) => (
            <TechBadge key={`r2-${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
