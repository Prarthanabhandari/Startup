import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  const directChannels = [
    {
      icon: Mail,
      title: 'Direct Inquiries',
      value: 'hello@voxorlab.com',
      desc: 'Send RFPs, architecture specs, or general questions.',
    },
    {
      icon: Clock,
      title: 'Response SLA',
      value: '< 12 Hours',
      desc: 'Guaranteed rapid review by a senior technical architect.',
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      value: 'Bengaluru / Global Remote',
      desc: 'Collaborating across North America, Europe, and APAC time zones.',
    },
    {
      icon: ShieldCheck,
      title: 'Confidentiality',
      value: 'Mutual NDAs',
      desc: 'We readily sign NDAs before discussing proprietary technology.',
    },
  ];

  const contactFaqs = [
    {
      q: 'What should I prepare before our first call?',
      a: 'A high-level summary of your product, target audience, preferred timeline, and approximate budget is ideal. Wireframes or technical specs are welcome, but not required.',
    },
    {
      q: 'Do you offer fixed-price quotes or time & materials?',
      a: 'We provide transparent fixed-price quotes with defined milestones for new product builds, ensuring you know your exact investment upfront.',
    },
    {
      q: 'What happens after I submit the form?',
      a: 'A technical lead will review your submission and reply with initial questions and a direct calendar link to schedule an introductory discovery call.',
    },
  ];

  return (
    <div className="pt-[72px] bg-obsidian">
      {/* Dedicated Page Hero Banner */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-b border-slate-200/50 bg-gradient-to-b from-white via-slate-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black font-mono tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>START A PROJECT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-sans">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-orange bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              Have a product, redesign, or platform in mind? Share your goals below and let’s engineer an exceptional digital reality together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Channels */}
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
                  className="p-6 rounded-[22px] bg-white border border-slate-200/60 shadow-md text-left space-y-2 clay-card"
                >
                  <div className="flex items-center space-x-3 text-brand-primary">
                    <div className="p-2 rounded-xl bg-brand-primary/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold font-mono tracking-wider uppercase text-slate-500">
                      {c.title}
                    </span>
                  </div>
                  <div className="text-base font-black text-slate-800 font-mono">
                    {c.value}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Component with 3D Canvas and Form */}
      <Contact />

      {/* Pre-Inquiry FAQ */}
      <section className="py-20 bg-white/70 border-t border-slate-200/50 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
              BEFORE YOU REACH OUT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-[22px] bg-white border border-slate-200/60 shadow-md text-left space-y-2 clay-card"
              >
                <h4 className="text-base font-black text-slate-800 font-sans tracking-tight">
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
    </div>
  );
}
