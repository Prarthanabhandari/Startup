import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkPortfolioGrid from '../components/WorkPortfolioGrid';

export default function WorkPage() {
  const highlights = [
    {
      metric: '$40M+',
      label: 'Capital Processed',
      desc: 'Across fintech infrastructure and algorithmic trading portals we engineered.',
    },
    {
      metric: '3.4x',
      label: 'Average Conversion Lift',
      desc: 'Measured across redesigned SaaS landing flows and spatial checkout funnels.',
    },
    {
      metric: '99.99%',
      label: 'Production Uptime',
      desc: 'Guaranteed across cloud clusters, microservices, and live WebGL experiences.',
    },
    {
      metric: '60 FPS',
      label: 'Sustained Rendering',
      desc: 'Flawless 3D shader and particle execution across both desktop and mobile devices.',
    },
  ];

  return (
    <div className="pt-[72px] bg-obsidian">
      {/* Interactive Filterable Portfolio Grid */}
      <WorkPortfolioGrid />

      {/* Measurable Outcomes Banner */}
      <section className="py-20 bg-white/70 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-[22px] bg-white border border-slate-200/60 shadow-md text-left space-y-2 clay-card"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-brand-primary">
                  {h.metric}
                </div>
                <div className="text-sm font-black text-slate-800 font-sans uppercase tracking-wider">
                  {h.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Bridge - Connects Work to Services */}
      <section className="py-16 bg-slate-50/80 border-t border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-brand-primary/10 via-luminous-violet/10 to-brand-orange/10 border border-brand-primary/20 text-slate-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-2.5 text-left max-w-2xl">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/15 border border-brand-primary/25 text-brand-primary text-[10px] font-mono font-bold tracking-widest uppercase">
                <Layers className="w-3 h-3 text-brand-primary" />
                <span>STUDIO CAPABILITIES & SERVICES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans">
                Ready to build something exceptional for your company?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Review our comprehensive engineering offerings—from 3D WebGL spatial environments and autonomous AI agents to enterprise SaaS architectures.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-wider hover:bg-brand-primary transition-all shadow-lg flex-shrink-0 group"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
