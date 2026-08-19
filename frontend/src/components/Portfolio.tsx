import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Laptop, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  category: '3d' | 'saas' | 'ecommerce';
  desc: string;
  tags: string[];
  tech: string[];
  gradient: string;
  performance: string;
  metricLabel: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | '3d' | 'saas' | 'ecommerce'>('all');

  const projects: Project[] = [
    {
      title: 'Apex Crypto Exchange',
      category: 'saas',
      desc: 'High-frequency charting dashboard with live tickers and wallet integrations. Processes thousands of transactions per second.',
      tags: ['SaaS', 'Fintech', 'Real-Time'],
      tech: ['React', 'D3.js', 'WebSockets', 'Tailwind'],
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
      performance: '99ms',
      metricLabel: 'API Latency',
    },
    {
      title: 'Zenith Interior Space',
      category: '3d',
      desc: 'Immersive 3D architectural showcase enabling virtual walkthroughs and material customizers for luxury residences.',
      tags: ['3D Web', 'Architecture', 'WebGL'],
      tech: ['Three.js', 'React Three Fiber', 'GLSL', 'Vite'],
      gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
      performance: '60 FPS',
      metricLabel: 'Mobile Render',
    },
    {
      title: 'Velocita Hypercars',
      category: 'ecommerce',
      desc: 'Interactive 3D configurator for custom hypercars, enabling real-time paint, wheel, and interior swaps prior to purchase.',
      tags: ['E-Commerce', 'WebGL', '3D Configurator'],
      tech: ['R3F', 'Drei', 'Spline', 'Stripe'],
      gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
      performance: '+340%',
      metricLabel: 'Conversion Lift',
    },
    {
      title: 'CloudScale Telemetry',
      category: 'saas',
      desc: 'Enterprise server monitor displaying CPU, RAM, and disk utilization across thousands of edge clusters globally.',
      tags: ['SaaS', 'Cloud', 'Data Viz'],
      tech: ['React', 'Tremor', 'GraphQL', 'Tailwind'],
      gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
      performance: '0.4s',
      metricLabel: 'Time to Interactive',
    },
    {
      title: 'Nova Sound Studio',
      category: '3d',
      desc: 'A web-audio experience mapping synthesizers to dynamic 3D visuals that reactive to frequency inputs in real time.',
      tags: ['Creative Web', 'Audio API', 'WebGL'],
      tech: ['Web Audio API', 'Three.js', 'Tailwind'],
      gradient: 'from-rose-600/20 via-orange-600/10 to-transparent',
      performance: '0% Lag',
      metricLabel: 'Audio Sync',
    },
    {
      title: 'Oasis Sustainable Apparel',
      category: 'ecommerce',
      desc: 'Eco-conscious ecommerce platform with custom sizing calculators, animated cloth textures, and instant checkouts.',
      tags: ['E-Commerce', 'Svelte', 'Headless'],
      tech: ['SvelteKit', 'Shopify Graph', 'Tailwind'],
      gradient: 'from-teal-600/20 via-emerald-600/10 to-transparent',
      performance: '98/100',
      metricLabel: 'Lighthouse Core',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 bg-grid-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR DIGITAL SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Selected Digital Products We've Engineered
            </h2>
            <p className="text-slate-400 text-sm">
              Explore our record of high-performance websites, 3D configurators, and enterprise software.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-white/5 self-start md:self-auto glass">
            {(['all', '3d', 'saas', 'ecommerce'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' && 'All Work'}
                {cat === '3d' && '3D / WebGL'}
                {cat === 'saas' && 'SaaS Apps'}
                {cat === 'ecommerce' && 'E-Commerce'}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border border-white/5 glass overflow-hidden flex flex-col justify-between h-[450px] relative bg-gradient-to-br ${project.gradient} group hover:border-blue-500/20 transition-all duration-300`}
              >
                {/* Visual Header Mockup */}
                <div className="p-6 bg-slate-950/60 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 bg-slate-900/60 border border-white/5 px-3 py-1 rounded-md">
                    <Laptop className="w-3 h-3 text-blue-400" />
                    <span>Live Preview</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-blue-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Core Metric / Tech */}
                  <div className="space-y-4 mt-6">
                    {/* Performance Box */}
                    <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5 flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">
                        {project.metricLabel}
                      </div>
                      <div className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.performance}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-950 text-[10px] text-slate-400 rounded font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                  <div className="text-center space-y-4">
                    <p className="text-white font-bold text-sm">Want to see it in action?</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
                    >
                      Request Similar Build
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
