import { motion } from 'framer-motion';
import { Clock, ShieldCheck, GitCommit, Users } from 'lucide-react';
import Process from '../components/Process';

export default function ProcessPage() {
  const commitments = [
    {
      icon: Clock,
      title: 'Milestone Precision & Punctuality',
      desc: 'We map out exact deliverables and deliver clickable prototypes within the very first 7 business days of onboarding.',
    },
    {
      icon: GitCommit,
      title: 'Continuous Git Transparency',
      desc: 'You have full access to the repository and preview staging URLs from day one. You see real progress on every single commit.',
    },
    {
      icon: Users,
      title: 'Direct Engineering Sync',
      desc: 'No account managers or delayed email chains. You communicate in dedicated Slack or Discord channels directly with the developers.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Post-Launch Warranty',
      desc: 'After production deployment, we stand behind our code with 30 days of complimentary performance audits and bug triage.',
    },
  ];

  return (
    <div className="pt-[72px] bg-obsidian">
      {/* Main Process Interactive Scrollytelling Roadmap */}
      <Process />

      {/* Studio Commitments & Guarantees */}
      <section className="py-24 bg-white/70 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              STUDIO COMMITMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Predictability You Can Rely On
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              We operate with complete accountability so you never wonder about deadlines, code quality, or progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
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
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
