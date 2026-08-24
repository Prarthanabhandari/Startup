import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, ExternalLink, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  categoryName: string;
  category: 'saas' | 'ai' | 'mobile' | 'ecommerce' | 'fintech' | 'luxury';
  desc: string;
  result: string;
  tech: string[];
  image: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Parallax strength: 15px max shift
    const factor = 15;
    setImgOffset({
      x: (x / (box.width / 2)) * factor,
      y: (y / (box.height / 2)) * factor,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImgOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-slate-200/50 bg-white overflow-hidden flex flex-col justify-between h-[440px] relative group hover:border-brand-primary/30 transition-all duration-300 shadow-xl cursor-pointer clay-card"
    >
      {/* Visual Header Mockup & Project Image */}
      <div className="h-48 relative bg-slate-100 overflow-hidden border-b border-slate-200/50 flex-shrink-0">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          style={{
            x: imgOffset.x,
            y: imgOffset.y,
            scale: isHovered ? 1.12 : 1.02,
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100" 
        />
        
        {/* Header bar overlay */}
        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-slate-200/30 z-10">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 block"></span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-slate-500 bg-slate-50 border border-slate-200/50 px-3 py-1 rounded-full">
            <Laptop className="w-3 h-3 text-brand-primary" />
            <span className="font-mono tracking-wider font-bold">PROJECT CODE</span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left relative z-10">
        <div className="space-y-3">
          <span className="text-[9px] font-black tracking-widest text-luminous-violet bg-luminous-violet/10 border border-luminous-violet/20 px-2.5 py-1 rounded-full uppercase font-mono">
            {project.categoryName}
          </span>
          <h3 className="text-lg font-black text-slate-800 group-hover:text-brand-primary transition-colors font-sans">
            {project.title}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
            {project.desc}
          </p>
        </div>

        {/* Core Metric / Tech */}
        <div className="space-y-4 pt-3 border-t border-slate-100">
          {/* Performance Box */}
          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/40 flex items-center justify-between">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">IMPACT METRIC</span>
            <span className="text-[10px] font-mono font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-lg border border-brand-orange/15">
              {project.result}
            </span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-slate-50 text-[9px] text-slate-500 border border-slate-200/50 rounded font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Reveal Card Overlay Details */}
      <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto z-20 p-6">
        <div className="text-center space-y-4">
          <p className="text-slate-800 font-black text-lg font-mono tracking-wider">MISSION COMPLETED</p>
          <p className="text-slate-650 text-xs max-w-xs mx-auto leading-relaxed font-semibold">
            We engineered a bespoke, secure and scalable product for this client. Click to explore our project structures or request a similar design build.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-brand-primary rounded-full hover:brightness-105 active:scale-95 transition-all shadow-lg clay-button"
          >
            Launch Similar Project
            <ExternalLink className="w-3.5 h-3.5 ml-2 text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'Nebula Orchestrator Console',
      category: 'saas',
      categoryName: 'SaaS Platform',
      desc: 'An elite multi-region server orchestration dashboard enabling global network operations control.',
      result: '99.99% Uptime / 10M+ Users',
      tech: ['React', 'TypeScript', 'Node.js', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Krypton NLP Agent Router',
      category: 'ai',
      categoryName: 'AI Application',
      desc: 'Real-time NLP agent routing pipeline for parallelized customer telemetry diagnostics.',
      result: '-40% Client Latency Redux',
      tech: ['Next.js', 'Python', 'FastAPI', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Atlas Spatial Wellness Tracker',
      category: 'mobile',
      categoryName: 'Mobile App',
      desc: 'Spatial biomechanical activity application tracking user posture and cardio metrics.',
      result: '1.2M+ Store Downloads',
      tech: ['React Native', 'Expo', 'Three.js', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1510051646316-c3f272a0c482?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Vesper Luxury Chronographs',
      category: 'luxury',
      categoryName: 'Luxury Brand Website',
      desc: 'Rich WebGL interactive chronograph catalog with custom chromatic aberration controls.',
      result: '+45% Avg Order Value',
      tech: ['Vite', 'Three.js', 'GSAP', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Aura High-Throughput Ledger',
      category: 'fintech',
      categoryName: 'Fintech Dashboard',
      desc: 'Ultra-low latency financial dashboard plotting high-frequency ledger clearances globally.',
      result: '$2.4B Transactions / Day',
      tech: ['React', 'Rust', 'WebAssembly', 'Apache Kafka'],
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Chronos Streetwear Storefront',
      category: 'ecommerce',
      categoryName: 'E-commerce Experience',
      desc: 'Headless rapid storefront implementation for high-demand capsule clothing releases.',
      result: '0.8s Total Page Load Time',
      tech: ['React', 'Vite', 'GraphQL', 'Shopify API'],
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="work" className="relative py-24 bg-obsidian">
      {/* Background radial highlight */}
      <div className="absolute top-[35%] right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CASE ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
            Selected <span className="bg-gradient-to-r from-brand-primary to-luminous-violet bg-clip-text text-transparent text-glow-indigo">Missions</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Explore our portfolio of high-impact systems, SaaS apps, and immersive luxury commerce builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
