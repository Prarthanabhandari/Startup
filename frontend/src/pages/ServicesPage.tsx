import { motion } from 'framer-motion';
import { Layers, CheckCircle2 } from 'lucide-react';
import Services from '../components/Services';
import CostCalculator from '../components/CostCalculator';
import FinalCTA from '../components/FinalCTA';

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
      {/* Dedicated Page Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-200/50 bg-gradient-to-b from-white via-slate-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black font-mono tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITIES & SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              What We Create. <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Engineered for Impact.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              From bespoke web platforms and 3D spatial scenes to production AI architectures and custom SaaS software blueprints, we bring digital concepts to life with uncompromising craft.
            </p>
          </motion.div>
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
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-[11px] font-bold font-mono tracking-widest uppercase text-slate-400">
                      TIER {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 font-sans tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold font-mono"
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

      {/* Interactive Project Cost Calculator */}
      <CostCalculator />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
