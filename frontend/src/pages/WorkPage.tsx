import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Portfolio from '../components/Portfolio';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

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
              <Briefcase className="w-3.5 h-3.5" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              Selected Missions. <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Proven Outcomes.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              Every project represents a commitment to technical precision, aesthetic distinction, and measurable commercial return. Browse our highlighted missions below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery with Filter Categories */}
      <Portfolio />

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

      {/* In-depth Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
