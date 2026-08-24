import { useState, useEffect } from 'react';
import { Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

type ProjectType = 'business' | 'ecommerce' | 'saas' | 'ai' | 'mobile';
type TimelineType = 'standard' | 'priority' | 'express';

interface Requirement {
  id: string;
  label: string;
  minPrice: number;
  maxPrice: number;
}

export default function CostCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>('saas');
  const [selectedReqs, setSelectedReqs] = useState<string[]>(['custom-ui', 'payment']);
  const [timeline, setTimeline] = useState<TimelineType>('standard');
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const projectTypes = [
    { id: 'business', label: 'Business Website', baseMin: 3000, baseMax: 5000 },
    { id: 'ecommerce', label: 'E-commerce Website', baseMin: 6000, baseMax: 9000 },
    { id: 'saas', label: 'SaaS Platform', baseMin: 10000, baseMax: 16000 },
    { id: 'ai', label: 'AI Application', baseMin: 12000, baseMax: 20000 },
    { id: 'mobile', label: 'Mobile App', baseMin: 11000, baseMax: 18000 },
  ];

  const requirements: Requirement[] = [
    { id: 'custom-ui', label: 'Custom UI/UX', minPrice: 1500, maxPrice: 2500 },
    { id: '3d-anim', label: '3D Animations', minPrice: 2000, maxPrice: 3500 },
    { id: 'auth', label: 'User Authentication', minPrice: 1000, maxPrice: 1500 },
    { id: 'payment', label: 'Payment Integration', minPrice: 1200, maxPrice: 2000 },
    { id: 'admin-dash', label: 'Admin Dashboard', minPrice: 2500, maxPrice: 4000 },
    { id: 'ai-integ', label: 'AI Integration', minPrice: 3500, maxPrice: 6000 },
    { id: 'adv-anim', label: 'Advanced Animations', minPrice: 1800, maxPrice: 3000 },
  ];

  const timelines = [
    { id: 'standard', label: 'Standard', multiplier: 1.0, desc: '6-8 weeks delivery' },
    { id: 'priority', label: 'Priority', multiplier: 1.3, desc: '4-5 weeks delivery (+30%)' },
    { id: 'express', label: 'Express', multiplier: 1.6, desc: '2-3 weeks delivery (+60%)' },
  ];

  const toggleRequirement = (id: string) => {
    if (selectedReqs.includes(id)) {
      setSelectedReqs(selectedReqs.filter((r) => r !== id));
    } else {
      setSelectedReqs([...selectedReqs, id]);
    }
  };

  useEffect(() => {
    const selectedBase = projectTypes.find((p) => p.id === projectType);
    if (!selectedBase) return;

    let min = selectedBase.baseMin;
    let max = selectedBase.baseMax;

    selectedReqs.forEach((reqId) => {
      const req = requirements.find((r) => r.id === reqId);
      if (req) {
        min += req.minPrice;
        max += req.maxPrice;
      }
    });

    const selectedTime = timelines.find((t) => t.id === timeline);
    if (selectedTime) {
      min = Math.round(min * selectedTime.multiplier);
      max = Math.round(max * selectedTime.multiplier);
    }

    setEstimate({ min, max });
  }, [projectType, selectedReqs, timeline]);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-obsidian border-b border-white/5 relative">
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATOR TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Project Cost <span className="bg-gradient-to-r from-brand-orange via-pink-500 to-luminous-violet bg-clip-text text-transparent text-glow-cyan">Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            Select your stack parameters to estimate your budget range instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 clay-card p-6 sm:p-8 rounded-[28px] text-left space-y-8 bg-white">
            
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-450 font-mono block">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as ProjectType)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative group cursor-pointer ${
                      projectType === type.id
                        ? 'border-brand-orange bg-brand-orange/10 text-slate-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-350 hover:text-slate-800 clay-card'
                    }`}
                  >
                    <span className="text-xs font-black font-mono block tracking-wider uppercase">{type.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                      Base: {formatPrice(type.baseMin)} - {formatPrice(type.baseMax)}
                    </span>
                    {projectType === type.id && (
                      <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center text-white">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-450 font-mono block">
                2. Select Core Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {requirements.map((req) => {
                  const selected = selectedReqs.includes(req.id);
                  return (
                    <button
                      key={req.id}
                      onClick={() => toggleRequirement(req.id)}
                      className={`px-4 py-3 rounded-lg border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                        selected
                          ? 'border-brand-orange bg-brand-orange/5 text-slate-850'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-350 hover:text-slate-800 clay-card'
                      }`}
                    >
                      <span className="text-[11px] font-semibold tracking-wide font-sans">{req.label}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        selected ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-200 bg-white'
                      }`}>
                        {selected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-450 font-mono block">
                3. Select Delivery Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((time) => (
                  <button
                    key={time.id}
                    onClick={() => setTimeline(time.id as TimelineType)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                      timeline === time.id
                        ? 'border-brand-orange bg-brand-orange/10 text-slate-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-650 hover:border-slate-350 hover:text-slate-800 clay-card'
                    }`}
                  >
                    <span className="text-xs font-black font-mono block tracking-wider uppercase">{time.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block leading-tight">{time.desc}</span>
                    {timeline === time.id && (
                      <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center text-white">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[28px] clay-card bg-gradient-to-b from-white to-slate-50 relative overflow-hidden shadow-2xl border border-slate-200/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-[40px] pointer-events-none" />

            <div className="text-left space-y-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-450 font-mono">ESTIMATED INVESTMENT</span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-[38px] font-mono font-black text-slate-800 leading-none">
                  {formatPrice(estimate.min)}
                  <span className="text-slate-450 text-lg font-sans font-medium px-2">—</span>
                  {formatPrice(estimate.max)}
                </div>
                <p className="text-[10px] text-slate-450 font-mono pt-1">Estimated range in USD. Taxes and server costs calculated separately.</p>
              </div>

              <div className="pt-6 border-t border-slate-150 space-y-4">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-450 font-mono block">SCOPE SUMMARY</span>
                <div className="space-y-3 text-xs text-slate-650">
                  <div className="flex justify-between">
                    <span>Base:</span>
                    <span className="font-mono text-slate-800 capitalize font-bold">{projectType} Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Addons:</span>
                    <span className="font-mono text-slate-800 font-bold">{selectedReqs.length} Selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Velocity Class:</span>
                    <span className="font-mono text-slate-800 capitalize font-bold">{timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full text-xs font-black uppercase tracking-wider text-white bg-brand-orange hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-orange/20 cursor-pointer group clay-button"
              >
                Get a Detailed Proposal
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
