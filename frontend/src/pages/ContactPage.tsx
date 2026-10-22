import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, ShieldCheck, ChevronDown, Sparkles, Check, Copy } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directChannels = [
    {
      icon: Mail,
      title: 'Direct Studio Inquiries',
      value: 'hello@voxorlab.com',
      desc: 'Send RFPs, architecture specs, or general partner inquiries.',
      actionable: true,
    },
    {
      icon: Clock,
      title: 'Response SLA',
      value: '< 12 Hours',
      desc: 'Guaranteed rapid review by a senior technical architect.',
    },
    {
      icon: MapPin,
      title: 'Studio Headquarters',
      value: 'Bengaluru / Global Remote',
      desc: 'Collaborating across North America, Europe, and APAC time zones.',
    },
    {
      icon: ShieldCheck,
      title: 'Confidentiality',
      value: 'Mutual NDAs Ready',
      desc: 'We readily sign NDAs before discussing proprietary technology.',
    },
  ];

  const contactFaqs = [
    {
      q: 'What should I prepare before our first call?',
      a: 'A high-level summary of your product, target audience, preferred timeline, and approximate budget is ideal. Wireframes, architecture notes, or technical specs are welcome, but not required.',
    },
    {
      q: 'Do you offer fixed-price quotes or time & materials?',
      a: 'We provide transparent fixed-price quotes with defined milestones for new product builds, ensuring you know your exact investment upfront without surprise billings.',
    },
    {
      q: 'What happens after I submit the project inquiry form?',
      a: 'A senior technical architect will review your submission and reply within 12 hours with preliminary technical notes and a direct calendar link to schedule an introductory discovery call.',
    },
    {
      q: 'Can VOXOR LAB build both design and full-stack engineering?',
      a: 'Yes. We are a full-cycle studio. We handle everything from Figma design systems and 3D WebGL asset creation to high-concurrency Node.js/PostgreSQL backend architectures and cloud deployment.',
    },
    {
      q: 'Do you work with startups or enterprise clients?',
      a: 'Both! We partner with high-velocity venture-backed startups looking to launch their flagship MVP, as well as enterprise brands seeking to modernize their web platforms.',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@voxorlab.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-[72px] bg-obsidian font-sans">
      
      {/* ----------------- DEDICATED HERO BANNER ----------------- */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-b border-slate-200/50 bg-gradient-to-b from-white via-slate-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMISSIONS & PARTNERSHIPS OPEN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              Have an Ambitious Vision? <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Let's Engineer It.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              From high-concurrency web platforms and 3D WebGL spatial environments to custom AI integrations, we partner with visionary teams to build the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----------------- DIRECT CONTACT CHANNELS ----------------- */}
      <section className="py-12 bg-white/70 border-b border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directChannels.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="p-6 rounded-[24px] bg-white border border-slate-200/70 shadow-xs hover:shadow-md transition-all text-left space-y-2.5 clay-card"
                >
                  <div className="flex items-center justify-between text-brand-primary">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-xl bg-brand-primary/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500">
                        {c.title}
                      </span>
                    </div>

                    {c.actionable && (
                      <button
                        onClick={handleCopy}
                        className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-black text-slate-800 font-mono">
                    {c.value}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- MAIN INTERACTIVE CONTACT SECTION (WITH 3D CANVAS & CONFIGURATOR) ----------------- */}
      <Contact />

      {/* ----------------- INTERACTIVE EXPANDABLE FAQ ACCORDION ----------------- */}
      <section className="py-20 bg-white/70 border-t border-slate-200/50 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              BEFORE YOU REACH OUT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Everything you need to know about working with our senior engineering studio.
            </p>
          </div>

          <div className="space-y-3.5">
            {contactFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-[22px] bg-white border border-slate-200/70 shadow-xs overflow-hidden clay-card transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-slate-800 font-sans tracking-tight">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 bg-brand-primary/10 text-brand-primary' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
