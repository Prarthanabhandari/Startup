import { motion } from 'framer-motion';
import { User, ShieldCheck, Zap, Terminal, HeartHandshake } from 'lucide-react';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import FinalCTA from '../components/FinalCTA';

export default function AboutPage() {
  const values = [
    {
      icon: Terminal,
      title: 'Developer-Led Precision',
      description: 'You collaborate directly with senior software architects and creative directors. No telephone games or agency bureaucracy.',
    },
    {
      icon: ShieldCheck,
      title: 'Complete IP & Code Ownership',
      description: 'You own 100% of your source code, design systems, and cloud infrastructure with clean git history and zero vendor lock-in.',
    },
    {
      icon: Zap,
      title: 'Obsessive Speed & Performance',
      description: 'We optimize for sub-second load times, fluid 60fps animations, strict TypeScript safety, and rock-solid scalability.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Partnership',
      description: 'Daily asynchronous updates, shared project boards, and direct Slack/Discord access keep everyone aligned every single day.',
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
              <User className="w-3.5 h-3.5" />
              <span>ABOUT VOXOR LAB</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              Small Team. <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Massive Impact.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              We bring together strategy, design, technology, and AI to build digital products that move businesses forward. By remaining lean and developer-led, every client project receives our undivided attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Component with Live Counters & Tech Stack */}
      <About />

      {/* Methodology Section */}
      <WhyUs />

      {/* Studio Core Principles */}
      <section className="py-24 bg-white/70 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              OUR ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Principles That Guide Every Line of Code
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              We believe quality software comes from intense craft, clear communication, and unyielding attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-[24px] bg-white border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 text-left space-y-4 clay-card"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-800 font-sans tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
