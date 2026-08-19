import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import ContactScene3D from './ContactScene3D';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('5k-10k');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Compute typing intensity based on sum of characters in the inputs
  const typingIntensity = name.length + email.length + message.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Celebrate with confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#a855f7', '#06b6d4'],
      });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950/60 border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] transform translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Contact Details & 3D Interactive Mesh */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">Let's Design Something Exceptional.</h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto lg:mx-0">
                Type in the fields to interact with the core telemetry mesh on the right. Submit to start your custom project.
              </p>
            </div>

            {/* 3D Telemetry Canvas */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden glass shadow-inner relative">
              <ContactScene3D intensity={typingIntensity} />
              
              <div className="absolute top-4 left-4 bg-slate-950/80 px-3 py-1 rounded border border-white/10 text-[9px] font-mono text-slate-400">
                TELEMETRY NODE: <span className={typingIntensity > 0 ? 'text-emerald-400 animate-pulse' : 'text-blue-400'}>
                  {typingIntensity > 0 ? 'STREAMING ACTIVE' : 'STANDBY'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-mono">
                INTENSITY: {typingIntensity} CPS
              </div>
            </div>

            {/* Core Info details */}
            <div className="space-y-4 pt-4 hidden sm:block">
              <div className="flex items-center space-x-3 text-slate-400 text-xs">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>projects@nexus3d.io</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="glass p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-xl"></div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Project Request Sent!</h3>
                    <p className="text-slate-300 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. We will review your application and send you a custom mockup within 24 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-white/5 rounded-lg hover:border-white/10 transition-colors"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elon Musk"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elon@spacex.com"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['5k-10k', '10k-25k', '25k+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`py-3 text-xs font-semibold rounded-xl border transition-all ${
                            budget === tier
                              ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                              : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          ${tier === '25k+' ? '25k+' : `${tier}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the website, app, or 3D project you want to build..."
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center py-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20 group disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <span>Analyzing Telemetry...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
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
