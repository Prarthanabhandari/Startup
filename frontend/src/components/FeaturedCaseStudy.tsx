import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, TrendingUp, Zap, Users } from 'lucide-react';

interface CountUpProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ value, decimals = 0, suffix = '', duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const increment = end / (duration * 60); // 60fps
    const stepTime = 1000 / 60;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, decimals, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

export default function FeaturedCaseStudy() {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'outcome'>('challenge');

  const stats = [
    { label: 'Conversion Lift', value: 3.2, decimals: 1, suffix: 'x', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-500/10' },
    { label: 'User Engagement', value: 48, decimals: 0, suffix: '%', icon: Users, color: 'text-brand-primary bg-indigo-500/10' },
    { label: 'Avg Loading Time', value: 2.1, decimals: 1, suffix: 's', icon: Zap, color: 'text-brand-orange bg-orange-500/10' },
    { label: 'Drop-off Reduction', value: 60, decimals: 0, suffix: '%', icon: CheckCircle, color: 'text-luminous-violet bg-purple-500/10' },
  ];

  return (
    <section id="case-study" className="py-24 bg-obsidian border-b border-white/5 relative overflow-hidden">
      {/* Background neon orb */}
      <div className="absolute bottom-0 right-[15%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 font-mono block">
            DEEP DIVE REPORT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
            Featured <span className="bg-gradient-to-r from-brand-orange to-brand-accent bg-clip-text text-transparent text-glow-indigo">Case Study</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            How we refactored the design system and data layer of a leading Fintech player.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-black text-slate-800 tracking-wide font-sans">
              Project: Zenith Finance Platform
            </h3>
            
            {/* Tabs */}
            <div className="flex border-b border-slate-200/50">
              {(['challenge', 'solution', 'outcome'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 pr-6 text-xs font-black uppercase tracking-wider transition-colors relative cursor-pointer ${
                    activeTab === tab ? 'text-slate-800' : 'text-slate-400 hover:text-slate-650'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="case-tab" className="absolute bottom-0 left-0 right-6 h-0.5 bg-brand-orange" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[140px] py-2">
              <AnimatePresence mode="wait">
                {activeTab === 'challenge' && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Zenith had a legacy multi-step checkout workflow with severe drop-offs on mobile. Their server-side rendering loading speed exceeded 6.5s, resulting in low conversions and frustrated traders.
                    </p>
                    <ul className="text-slate-500 text-xs space-y-2 list-disc list-inside">
                      <li>Laggy interactive analytics charting widgets</li>
                      <li>High rates of drop-offs during authorization flows</li>
                      <li>Poor branding layouts leading to lack of trust</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'solution' && (
                  <motion.div
                    key="solution"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      VOXOR LAB engineered a complete frontend rebuild. We implemented a headless Next.js architecture with custom canvas charts and optimized biometric verification routers.
                    </p>
                    <ul className="text-slate-500 text-xs space-y-2 list-disc list-inside">
                      <li>WebAssembly-driven lightweight rendering grids</li>
                      <li>Single-session biometric OAuth logins</li>
                      <li>Immersive custom luxury animations and interface assets</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'outcome' && (
                  <motion.div
                    key="outcome"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      The rebuild was deployed in 8 weeks. Loading speeds dropped below 2.2s, resulting in a dramatic increase in trading signups and absolute operational reliability.
                    </p>
                    <ul className="text-slate-500 text-xs space-y-2 list-disc list-inside">
                      <li>Cleared security compliance audits</li>
                      <li>Immediate press features on top design galleries</li>
                      <li>99.98% customer satisfactions rating</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services provided badges */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block">Services Provided</span>
              <div className="flex flex-wrap gap-1.5">
                {['Premium Web Design', 'UI/UX Design Systems', 'AI Automation', 'Digital Strategy'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-200/50 text-[9px] text-slate-500 rounded-full font-mono font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Dashboard Mockup & Stats */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Stat Counters Column */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="p-5 clay-card flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <span className="text-xl font-mono font-black text-slate-800">
                        <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                      </span>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Premium Dashboard UI Mockup Column */}
            <div className="md:col-span-7 clay-card p-4 flex flex-col justify-between h-[360px] bg-white shadow-2xl relative overflow-hidden select-none">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
                </div>
                <div className="w-[55%] h-5 bg-slate-50 rounded-full border border-slate-200/50 flex items-center px-2">
                  <span className="text-[7px] text-slate-400 font-mono">zenith.finance/dashboard</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200/50" />
              </div>

              {/* Main Content Area */}
              <div className="flex-1 grid grid-cols-12 gap-3 py-3">
                {/* Sidebar */}
                <div className="col-span-3 space-y-1.5 border-r border-slate-100 pr-2">
                  {[25, 45, 60, 30].map((w, idx) => (
                    <div key={idx} className="h-2 rounded bg-slate-50 flex items-center pl-1">
                      <div className="h-1 bg-slate-200 rounded" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                  <div className="pt-4 space-y-1">
                    <div className="h-1 w-full bg-brand-orange/30 rounded" />
                    <div className="h-1 w-[70%] bg-brand-primary/30 rounded" />
                  </div>
                </div>

                {/* Dashboard Chart Mockup */}
                <div className="col-span-9 flex flex-col justify-between">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[8px] font-bold text-slate-400 font-mono tracking-wider">PORTFOLIO EXPANSION</span>
                    <span className="text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">WEEKLY +24.8%</span>
                  </div>
                  
                  {/* Grid Lines & Chart Columns */}
                  <div className="flex-1 flex items-end justify-between px-2 pb-1 relative h-32 border-b border-l border-slate-100 mt-2">
                    {[15, 25, 30, 45, 60, 50, 75, 90, 85, 110, 130].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${(h / 140) * 100}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                        className={`w-[6%] rounded-t ${
                          i === 9 ? 'bg-brand-orange shadow-[0_0_8px_rgba(251,146,60,0.6)]' : 'bg-luminous-violet/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Footer Stats inside Dashboard */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-left">
                    {['TX CLOUD', 'APIS', 'LOAD TIME'].map((lbl, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg p-1.5 border border-slate-200/40">
                        <span className="text-[6px] text-slate-400 font-bold tracking-wider font-mono block">{lbl}</span>
                        <span className="text-[8px] text-slate-800 font-mono font-black mt-0.5 block">
                          {i === 0 ? '99.98%' : i === 1 ? '0.04ms' : '0.8s'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
