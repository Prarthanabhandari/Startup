import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Curved3DCarousel from '../components/Curved3DCarousel';

export default function ServicesPage() {
  const deliverables = [
    {
      title: 'Production-Ready Web Applications',
      desc: 'Blazing-fast Single Page Apps and Server-Driven sites built with React 19, Vite, TailwindCSS, and strict TypeScript.',
      tags: ['React 19', 'TypeScript', 'TailwindCSS v4', 'Vite'],
    },
    {
      title: 'Spatial Computing & 3D Interactive WebGL',
      desc: 'Immersive 3D environments, particle networks, and physics simulations powered by Babylon.js and Three.js.',
      tags: ['Babylon.js', 'Three.js', 'Shader Art', 'WebGL / WebGPU'],
    },
    {
      title: 'Intelligent AI Agents & LLM Integrations',
      desc: 'Domain-specific chatbots, automated RAG knowledge bases, natural language search, and autonomous agent workflows.',
      tags: ['OpenAI', 'Anthropic', 'Vector Embeddings', 'Python FastAPI'],
    },
    {
      title: 'High-Throughput SaaS Platforms & APIs',
      desc: 'Multi-tenant database architectures, rate-limited REST & GraphQL endpoints, authentication, and payment gateways.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Stripe Billing'],
    },
    {
      title: 'Cross-Platform Mobile Experiences',
      desc: 'Performant iOS and Android applications with native device capabilities, fluid gestures, and instant synchronization.',
      tags: ['React Native', 'Capacitor', 'Push Notifications', 'Offline Sync'],
    },
    {
      title: 'Bespoke Design Systems & UI/UX Foundations',
      desc: 'Scalable Figma component libraries, accessible contrast ratios, motion guidelines, and pastel claymorphism themes.',
      tags: ['Figma Tokens', 'Design Systems', 'Micro-Interactions', 'WCAG 2.1'],
    },
  ];

  return (
    <div className="pt-[72px] bg-obsidian">
      {/* Dedicated Page Hero Banner with 3D Curved Cylindrical Carousel - 1 SCREEN */}
      <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-between pt-4 pb-6 lg:pt-6 lg:pb-8 overflow-hidden border-b border-slate-200/50 bg-gradient-to-b from-white via-slate-50/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full my-auto flex flex-col justify-between space-y-2 sm:space-y-3">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto space-y-2.5"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black font-mono tracking-wider uppercase">
              <Layers className="w-3 h-3" />
              <span>CAPABILITIES & SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12] font-sans">
              What We Create. <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Engineered for Impact.
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-sans">
              From bespoke web platforms and 3D spatial scenes to production AI architectures and custom SaaS software blueprints, we engineer digital products with craft.
            </p>

            {/* Quick Action Buttons matching reference */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <a
                href="#services"
                className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-white border border-slate-200 hover:border-brand-primary shadow-xs hover:shadow-sm transition-all"
              >
                <span>Explore Capabilities</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-secondary hover:brightness-105 active:scale-95 shadow-md shadow-brand-primary/25 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          {/* 3D Curved Cylindrical Carousel Component */}
          <div className="w-full relative">
            <Curved3DCarousel />
          </div>

        </div>
      </section>

      {/* Main Services 3D Tilt Cards */}
      <Services />

      {/* Deliverables & Technology Matrix */}
      <section className="py-24 bg-white/70 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              DELIVERABLE SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Engineering Standards
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Every deliverable is crafted with clean git history, automated testing, and comprehensive documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-8 rounded-[24px] bg-white border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-6 clay-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-lg font-black text-slate-900 tracking-tight font-sans">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 text-[10px] font-mono font-semibold text-slate-600 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
