import { motion } from 'framer-motion';
import { Compass, Clock, ShieldCheck, GitCommit, Users } from 'lucide-react';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';

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

  const faqs = [
    {
      q: 'How quickly can we kick off a new project?',
      a: 'Following our initial technical discovery call and scope alignment, we typically initiate discovery and sprint planning within 3 to 5 business days.',
    },
    {
      q: 'Do you work in fixed-price sprints or hourly retainers?',
      a: 'We offer clearly scoped milestone-based fixed pricing for new builds and dedicated monthly sprint retainers for expanding products.',
    },
    {
      q: 'Who owns the code and intellectual property?',
      a: 'You do. 100% of all code, assets, Figma design systems, database schemas, and documentation are transferred to you upon milestone delivery.',
    },
    {
      q: 'Can you work with our existing backend or internal team?',
      a: 'Yes. We frequently augment in-house engineering departments, integrating seamlessly with existing GitHub organizations, Docker containers, and CI/CD pipelines.',
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
              <Compass className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PIPELINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              From Idea to Impact. <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Structured & Predictable.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              We eliminate guesswork with a proven, milestone-driven development process. Here is exactly how we take your vision from raw requirements to high-scale production.
            </p>
          </motion.div>
        </div>
      </section>

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

      {/* Process FAQ */}
      <section className="py-24 bg-obsidian relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              QUESTIONS & CLARIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Process Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 sm:p-8 rounded-[22px] bg-white border border-slate-200/60 shadow-md text-left space-y-3 clay-card"
              >
                <h4 className="text-base sm:text-lg font-black text-slate-800 font-sans tracking-tight">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
