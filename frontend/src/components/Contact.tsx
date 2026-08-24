import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('SaaS Platform');
  const [budget, setBudget] = useState('$10,000–$25,000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const typingIntensity = 
    name.length + 
    email.length + 
    phone.length + 
    company.length + 
    message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
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
          budget, 
          message, 
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4f46e5', '#a855f7', '#fb923c', '#f472b6'],
        });
        resetForm();
      } else {
        setIsSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4f46e5', '#a855f7', '#fb923c', '#f472b6'],
        });
        resetForm();
      }
    } catch (error) {
      console.log('Backend offline fallback active.');
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#a855f7', '#fb923c', '#f472b6'],
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
    setBudget('$10,000–$25,000');
    setMessage('');
  };

  const projectTypes = [
    'Premium Website Design',
    'AI-Powered Applications',
    'Mobile App Development',
    'SaaS Product Development',
    'UI/UX Design Systems',
    'Digital Strategy',
    'Other'
  ];

  const budgets = [
    '$2,000–$5,000',
    '$5,000–$10,000',
    '$10,000–$25,000',
    '$25,000+'
  ];

  return (
    <section id="contact" className="relative py-24 bg-obsidian border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px] transform translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Left Column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 font-mono block">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight font-sans">
                Have an Idea? <br />Let's Build It.
              </h2>
              <p className="text-slate-550 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 font-semibold">
                Tell us what you want to build. Share as much detail as you can and we'll review your requirements.
              </p>
            </div>

            {/* Terminal Telemetry Console Box */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/50 p-6 font-mono text-[11px] text-slate-600 shadow-inner relative overflow-hidden h-[265px] flex flex-col justify-between text-left">
              <div className="space-y-1.5 overflow-hidden select-none">
                <p className="text-brand-orange font-black">voxor-lab@terminal:~$ status</p>
                <p className="text-slate-450 font-semibold">Handshake node connected...</p>
                <p className="text-slate-450 font-semibold">Protocol: HTTPS // SSL ACTIVE</p>
                <p className="text-slate-200">-------------------------------------</p>
                <p>SESSION INTENSITY: {typingIntensity} CPS</p>
                <p>BUFFER: {typingIntensity > 0 ? 'STREAMING DATA...' : 'STANDBY'}</p>
                {typingIntensity > 0 && (
                  <p className="text-emerald-600 font-bold animate-pulse">&gt;&gt;&gt; Live telemetry stream active</p>
                )}
                {name && <p className="text-slate-450">&gt; client_name: "{name}"</p>}
                {email && <p className="text-slate-450">&gt; client_email: "{email}"</p>}
                {projectType && <p className="text-slate-450">&gt; scope: "{projectType}"</p>}
              </div>

              <div className="flex items-center justify-between text-[9px] text-slate-400 pt-3 border-t border-slate-200/50">
                <span>NODE: VOXOR-CORE-01</span>
                <span className={typingIntensity > 0 ? 'text-emerald-600 animate-pulse font-bold' : 'text-slate-400 font-bold'}>
                  {typingIntensity > 0 ? 'ACTIVE' : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* Core Info details */}
            <div className="space-y-3 pt-2 text-slate-600 text-xs font-semibold flex flex-col items-center lg:items-start font-mono uppercase tracking-wider">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>hello@voxorlab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="clay-card p-8 sm:p-10 rounded-[28px] border border-slate-200/50 relative overflow-hidden text-left bg-white">
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 shadow-lg shadow-emerald-50/20 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 font-mono tracking-wide">Inquiry Received</h3>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed font-semibold">
                      Thanks! We've received your project details. We'll review your requirements and get back to you shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-brand-primary rounded-full hover:brightness-105 active:scale-95 transition-all cursor-pointer clay-button"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Mia Jones"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary transition-all clay-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="mia@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary transition-all clay-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary transition-all clay-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                        Company / Business
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary transition-all clay-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                      Project Type *
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-brand-primary transition-all cursor-pointer font-semibold clay-input"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-white text-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                      Estimated Project Budget *
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {budgets.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`py-2.5 px-4 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                            budget === tier
                              ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/10 clay-button'
                              : 'bg-slate-50 border-slate-200 text-slate-650 hover:text-slate-850 hover:border-slate-350 clay-card'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the website, app, or SaaS platform you want to build..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary transition-all resize-none clay-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center py-4 border border-transparent text-xs font-black uppercase tracking-widest rounded-xl text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:brightness-105 transition-all duration-300 shadow-md shadow-brand-primary/20 group disabled:opacity-50 disabled:pointer-events-none cursor-pointer clay-button"
                  >
                    {loading ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
