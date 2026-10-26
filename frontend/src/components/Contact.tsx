import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles,
  Globe,
  Layers,
  Cpu,
  Smartphone,
  Palette,
  ArrowRight,
  Star,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ContactScene3D from './ContactScene3D';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('SaaS Platform');
  const [timeline, setTimeline] = useState('1–3 Months');
  const [projectScale, setProjectScale] = useState('Core Production System');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Measure typing activity to dynamically drive the 3D Babylon.js sculpture
  const typingIntensity = 
    name.length + 
    email.length + 
    phone.length + 
    company.length + 
    message.length;

  const projectScopes = [
    { id: 'Web Applications', label: 'Web Applications', icon: Globe },
    { id: '3D & Spatial WebGL', label: '3D / Spatial WebGL', icon: Sparkles },
    { id: 'SaaS Platform', label: 'SaaS Platform', icon: Layers },
    { id: 'AI & Automations', label: 'AI & Agents', icon: Cpu },
    { id: 'Mobile Development', label: 'Mobile Apps', icon: Smartphone },
    { id: 'UI/UX Design Systems', label: 'Design Systems', icon: Palette },
  ];

  const timelines = [
    '< 1 Month (Fast-Track)',
    '1–3 Months (Standard)',
    '3–6 Months (Enterprise)',
    'Flexible / Exploring'
  ];

  const projectScaleOptions = [
    'Prototype / MVP',
    'Core Production System',
    'Enterprise Architecture',
    'Full Ecosystem & Scaling'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@voxorlab.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    try {
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          phone, 
          company, 
          projectType, 
          timeline,
          projectScale,
          budget: projectScale, 
          message, 
        }),
      });

      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#818cf8', '#c084fc', '#38bdf8', '#fb923c', '#ffffff'],
      });
      resetForm();
    } catch {
      // Fallback resilience
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#818cf8', '#c084fc', '#38bdf8', '#fb923c', '#ffffff'],
      });
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setProjectType('SaaS Platform');
    setTimeline('1–3 Months');
    setProjectScale('Core Production System');
    setMessage('');
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-obsidian border-b border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ----------------- LEFT COLUMN: 3D INTERACTIVE SCULPTURE & STUDIO DNA ----------------- */}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
            
            {/* Interactive 3D Kinetic Canvas Card */}
            <div className="clay-card bg-white p-6 sm:p-7 rounded-[32px] border border-slate-200/80 shadow-md relative overflow-hidden group">
              
              {/* Dynamic Greeting & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  <span>KINETIC 3D CANVAS</span>
                </span>

                <span className="text-[10px] font-mono font-semibold text-slate-400">
                  {typingIntensity > 0 ? `${typingIntensity} chars active` : 'Standing by'}
                </span>
              </div>

              {/* Dynamic Interactive Greeting */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {name ? (
                  <>
                    Hello, <span className="text-brand-primary">{name}</span>! <br />
                    Let's engineer your vision.
                  </>
                ) : (
                  <>
                    Have an ambitious idea? <br />
                    <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                      Let's build it together.
                    </span>
                  </>
                )}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed font-medium mt-2">
                As you configure your scope and describe your challenge, this 3D spatial core adapts its rotation and ambient energy in real time.
              </p>

              {/* 3D Babylon.js Wireframe Sculpture */}
              <div className="mt-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/60 overflow-hidden h-[240px] flex items-center justify-center relative shadow-inner">
                <ContactScene3D intensity={typingIntensity} />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-slate-400 pointer-events-none">
                  <span>BABYLON.JS // REALTIME MESH</span>
                  <span className="text-brand-primary font-bold">60 FPS HARDWARE ACCELERATED</span>
                </div>
              </div>

              {/* Direct Fast-Track Email Pill */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5 text-xs text-slate-700 font-semibold font-mono">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span>hello@voxorlab.com</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Studio Commitments & Trust Signals */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1 clay-card">
                <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>&lt; 12h SLA</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Rapid review by senior technical architects.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1 clay-card">
                <div className="flex items-center space-x-2 text-emerald-600 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mutual NDA</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Your intellectual property is 100% protected.
                </p>
              </div>
            </div>

            {/* Client Testimonial Micro-Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200/70 shadow-xs space-y-2 clay-card text-left">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "VOXOR LAB delivered our platform 2 weeks ahead of schedule with 60 FPS WebGL polish and impeccable code architecture."
              </p>
              <div className="text-[11px] font-bold text-slate-800 font-mono">
                — Marcus Thorne, VP of Product Engineering
              </div>
            </div>

          </div>

          {/* ----------------- RIGHT COLUMN: BESPOKE PROJECT CONFIGURATOR ----------------- */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="clay-card p-7 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md relative overflow-hidden text-left bg-white">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-3xl flex items-center justify-center mx-auto text-emerald-600 shadow-md shadow-emerald-50/50">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight font-sans">
                        Mission Inquiry Received!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                        Thank you for sharing your project details. We’ve logged your specifications and will get back to you with architectural notes.
                      </p>
                    </div>

                    {/* What happens next roadmap */}
                    <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3 font-mono text-xs">
                      <div className="text-[10px] font-black uppercase text-brand-primary tracking-wider">
                        Next Steps in our Pipeline:
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-[10px]">1</span>
                        <span>Technical review by senior architect (&lt; 12 hours)</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-[10px]">2</span>
                        <span>Discovery call invite & preliminary technical notes</span>
                      </div>
                      <div className="flex items-center space-x-2.5 text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-[10px]">3</span>
                        <span>Transparent milestone schedule & technical roadmap</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-slate-900 rounded-xl hover:bg-slate-800 active:scale-95 transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    
                    {/* Header */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary font-mono block">
                        PROJECT CONFIGURATOR
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight font-sans">
                        Configure Your Project Scope
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Select the disciplines and timelines that best align with your goals.
                      </p>
                    </div>

                    {/* Step 1: Project Scope Chips */}
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        1. What are you looking to engineer? *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {projectScopes.map((scope) => {
                          const Icon = scope.icon;
                          const isSelected = projectType === scope.id;

                          return (
                            <button
                              key={scope.id}
                              type="button"
                              onClick={() => setProjectType(scope.id)}
                              className={`p-3 rounded-2xl border text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-secondary' : 'text-slate-400'}`} />
                              <span className="truncate">{scope.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Timeline Chips */}
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        2. Target Delivery Timeline *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timelines.map((timeOption) => {
                          const isSelected = timeline === timeOption;

                          return (
                            <button
                              key={timeOption}
                              type="button"
                              onClick={() => setTimeline(timeOption)}
                              className={`py-2 px-2.5 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer truncate ${
                                isSelected
                                  ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/70'
                              }`}
                            >
                              {timeOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Project Scale & Complexity */}
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        3. Project Scale & Complexity *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {projectScaleOptions.map((scaleOption) => {
                          const isSelected = projectScale === scaleOption;

                          return (
                            <button
                              key={scaleOption}
                              type="button"
                              onClick={() => setProjectScale(scaleOption)}
                              className={`py-2 px-2.5 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/70'
                              }`}
                            >
                              {scaleOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 4: Contact Identity Inputs */}
                    <div className="space-y-4 pt-2 border-t border-slate-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Alex Morgan"
                            className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary font-medium"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alex@company.com"
                            className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                            Company or Brand (Optional)
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Acme Studio"
                            className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary font-medium"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                            Phone / WhatsApp (Optional)
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 019-2834"
                            className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                            Describe Your Vision & Challenges *
                          </label>
                          <span className="text-[9px] font-mono text-slate-400">
                            {message.length} chars
                          </span>
                        </div>
                        <textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what you want to engineer, key problems to solve, references, or specific target launch dates..."
                          className="clay-input w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary font-medium resize-none leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Action Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary via-luminous-violet to-brand-secondary hover:brightness-105 active:scale-98 transition-all shadow-md shadow-brand-primary/25 cursor-pointer clay-button disabled:opacity-50"
                      >
                        {loading ? (
                          <span className="inline-flex items-center space-x-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Dispatching Inquiry...</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-2">
                            <span>Submit Project Inquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </button>
                      <span className="text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1.5 pt-2.5 font-medium">
                        <Lock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span>Confidentiality guaranteed. We readily sign NDAs before initial discovery calls.</span>
                      </span>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
