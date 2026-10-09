import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Code2, 
  Layout, 
  Smartphone, 
  BookOpen, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Award,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('prarthanabhandari2003@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Clean, maintainable, and type-safe code using React, TypeScript, Node.js, and Express.',
    },
    {
      icon: Layout,
      title: 'UI/UX & Web Aesthetics',
      description: 'Crafting warm, intuitive interfaces with balanced typography, subtle animations, and thoughtful layouts.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Accessible',
      description: 'Ensuring seamless responsiveness across mobile, tablet, and desktop with accessible markup.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Curiosity',
      description: 'Actively studying MCA, exploring modern tools, and converting theory into production-ready repositories.',
    },
  ];

  const milestones = [
    {
      number: '01',
      title: 'Startup (VOXOR Studio)',
      category: 'Web Platform & 3D Design',
      description: 'A full-scale agency application featuring claymorphic design, layered Express backend, and 3D scenes.',
      link: 'https://github.com/Prarthanabhandari/Startup',
    },
    {
      number: '02',
      title: 'BookVerse',
      category: 'Community & Review Platform',
      description: 'A dedicated reading platform engineered to help book lovers discover, review, and manage digital bookshelves.',
      link: 'https://github.com/Prarthanabhandari/BookVerse-Book-Review-Community-Platform',
    },
    {
      number: '03',
      title: 'MERN Dining Experience',
      category: 'Full-Stack Web App',
      description: 'A modern restaurant website featuring interactive menus, reservations, and swift client-side routing.',
      link: 'https://github.com/Prarthanabhandari/MERN_PROJECT',
    },
  ];

  const mentorContributions = [
    {
      title: 'Architectural Guidance',
      desc: 'Teaching clean code patterns, modular folder structures, and robust API design.',
    },
    {
      title: 'Hands-on Code Reviews',
      desc: 'Challenging edge cases, improving TypeScript precision, and tuning performance.',
    },
    {
      title: 'Real-world Problem Solving',
      desc: 'Debugging complex full-stack workflows and sharing practical engineering experience.',
    },
    {
      title: 'Continuous Encouragement',
      desc: 'Fostering confidence to tackle ambitious projects and celebrate every milestone.',
    },
  ];

  return (
    <div className="pt-[72px] bg-[#faf7f5] text-[#2d2625] min-h-screen selection:bg-rose-100 selection:text-rose-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO (Warm Editorial Portrait & Personal Intro)
         ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 border-b border-[#ede4df] overflow-hidden">
        {/* Soft background radial glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede4df] shadow-sm text-xs font-semibold text-[#8b5e56]">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="tracking-wide uppercase text-[11px] font-bold">Hey, I'm Prarthana</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.15] text-[#2d2625] tracking-tight">
                I design digital experiences that{' '}
                <span className="font-serif italic text-rose-600 font-normal underline decoration-rose-300 decoration-wavy decoration-1 underline-offset-4">
                  inspire
                </span>
                .
              </h1>

              {/* Genuine, human biography */}
              <div className="space-y-4 text-base sm:text-lg text-[#5a4d4b] leading-relaxed max-w-xl font-normal">
                <p>
                  I'm an <strong className="font-semibold text-[#2d2625]">MCA student</strong> and web developer based in{' '}
                  <strong className="font-semibold text-[#2d2625]">Pune, Maharashtra</strong>. I spend my days turning raw ideas into tangible, clean, and meaningful web applications.
                </p>
                <p className="text-sm sm:text-base text-[#786b69]">
                  No unnecessary jargon or vanity metrics — just genuine curiosity, clean code, and a dedication to building products that feel effortless and warm to use.
                </p>
              </div>

              {/* Location & Status pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#786b69]">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#ede4df] shadow-2xs font-medium">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
                  Pune, Maharashtra, India
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                  Always learning & open to collaborations
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/work"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2d2625] text-white text-xs font-bold uppercase tracking-wider hover:bg-black hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://github.com/Prarthanabhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero Workspace Photograph */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Back decorative border card */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-200/50 via-amber-100/40 to-white rounded-[36px] blur-sm -z-10" />

                <div className="relative bg-white p-3 sm:p-4 rounded-[32px] border border-[#ede4df] shadow-xl overflow-hidden group">
                  <img
                    src="/about/prarthana-workspace.jpg"
                    alt="Prarthana Bhandari at desk coding"
                    className="w-full h-[360px] sm:h-[420px] object-cover rounded-[24px] group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Aesthetic Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg text-left">
                    <div className="flex items-center space-x-2 text-xs font-bold text-rose-600 font-serif italic mb-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>Creating with purpose. Coding with heart.</span>
                    </div>
                    <p className="text-[11px] text-[#786b69] leading-tight font-sans">
                      Building real-world web apps step-by-step with focus, curiosity, and persistence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: ABOUT ME & CORE PILLARS (Clean, Genuine, 3-Col)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Aesthetic Notebook Flatlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 flex flex-col justify-between p-4 sm:p-5 rounded-[32px] bg-white border border-[#ede4df] shadow-sm"
            >
              <div className="relative rounded-[24px] overflow-hidden mb-5">
                <img
                  src="/about/focus-notebook.jpg"
                  alt="Notes and dreams notebook"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-[#8b5e56]">
                  Focus • Plan • Grow
                </div>
              </div>
              <div className="p-2 space-y-2 text-left">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-500 font-bold block">
                  DAILY PRACTICE
                </span>
                <h4 className="text-lg font-medium text-[#2d2625]">
                  Small steps every day turn into strong foundations.
                </h4>
                <p className="text-xs text-[#786b69] leading-relaxed">
                  Every commit in my repositories represents a real lesson learned: debugging asynchronous states, styling with Tailwind, or restructuring SQL schemas.
                </p>
              </div>
            </motion.div>

            {/* Center: Story & Philosophy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 p-8 rounded-[32px] bg-white border border-[#ede4df] shadow-sm flex flex-col justify-between text-left space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-bold font-mono tracking-wider uppercase border border-rose-200/60">
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <span>ABOUT ME</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium text-[#2d2625] leading-tight">
                  I'm <span className="font-serif italic text-rose-600">Prarthana</span>, a developer turning ideas into{' '}
                  <span className="font-serif italic text-rose-600">digital realities</span>.
                </h3>

                <p className="text-sm text-[#5a4d4b] leading-relaxed">
                  I believe in honest work. As an MCA student exploring modern full-stack web engineering, I enjoy the harmony between clean architectural logic in TypeScript and subtle, aesthetic design in CSS.
                </p>

                <p className="text-xs text-[#786b69] leading-relaxed">
                  Rather than hiding behind overly complex jargon, I prefer to focus on what matters: does the application load fast? Does it solve the user's need cleanly? Is the code written so others can read and extend it?
                </p>
              </div>

              <div className="pt-4 border-t border-[#ede4df]">
                <a
                  href="https://github.com/Prarthanabhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-rose-600 hover:text-rose-700 uppercase tracking-wider group"
                >
                  <span>Explore My GitHub Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right: 4 Core Pillars Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col justify-between space-y-3.5"
            >
              {skills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-[24px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 text-left flex items-start space-x-4 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#2d2625]">{s.title}</h4>
                      <p className="text-xs text-[#786b69] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: WHO IS HELPING ME (Mentor & Guide Spotlight)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#faf7f5] relative overflow-hidden">
        {/* Soft background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/40 via-rose-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#ede4df] text-[11px] font-mono font-bold tracking-wider uppercase text-[#8b5e56]">
              <Compass className="w-3.5 h-3.5 text-rose-500" />
              <span>GUIDANCE & COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
              The People Who Help Me <span className="font-serif italic text-rose-600">Grow</span>
            </h2>
            <p className="text-sm sm:text-base text-[#786b69] leading-relaxed">
              Great software is never built in isolation. Behind my progress is genuine mentorship, patient guidance, and someone who continuously pushes my standards higher.
            </p>
          </div>

          {/* Main Mentor Card Container */}
          <div className="max-w-5xl mx-auto bg-white rounded-[36px] border border-[#ede4df] shadow-lg p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Mentor Avatar / Spotlight */}
              <div className="lg:col-span-5 text-center lg:text-left space-y-6">
                <div className="relative inline-block mx-auto lg:mx-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-[28px] bg-gradient-to-tr from-rose-200 via-amber-100 to-rose-100 border-2 border-white shadow-md flex items-center justify-center p-1.5 overflow-hidden">
                    {/* Stylized mentor initials or avatar icon */}
                    <div className="w-full h-full rounded-[22px] bg-[#2d2625] text-white flex flex-col items-center justify-center space-y-1">
                      <Award className="w-8 h-8 text-rose-300" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-200">
                        MENTOR
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold font-mono tracking-wider shadow">
                    GUIDE
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#2d2625]">
                    Technical Mentor & Advisor
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-rose-600 font-medium">
                    "Guiding architecture, code hygiene & engineering mindset"
                  </p>
                </div>

                {/* Mentor Quote Box */}
                <div className="p-5 rounded-2xl bg-[#faf7f5] border border-[#ede4df] text-left relative">
                  <span className="text-3xl text-rose-400 font-serif leading-none absolute -top-2 left-3">“</span>
                  <p className="text-xs sm:text-sm text-[#5a4d4b] italic leading-relaxed pt-2">
                    Learning to code isn't just about syntax; it's about developing the discipline to build with care, test thoroughly, and understand why things work under the hood.
                  </p>
                </div>
              </div>

              {/* Right Column: Key Areas of Support */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8b5e56] font-bold block">
                    HOW THEY SUPPORT MY JOURNEY
                  </span>
                  <h4 className="text-xl font-bold text-[#2d2625]">
                    Pillars of Our Technical Collaboration
                  </h4>
                  <p className="text-xs text-[#786b69]">
                    Having an experienced guide has shortened my learning curve and helped me write production-grade code with confidence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mentorContributions.map((c, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-2xl bg-[#fcf9f7] border border-[#ede4df] space-y-1.5 hover:border-rose-200 transition-colors"
                    >
                      <div className="flex items-center space-x-2 text-rose-600">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <h5 className="text-xs font-bold text-[#2d2625]">{c.title}</h5>
                      </div>
                      <p className="text-[11px] text-[#786b69] leading-relaxed pl-6">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                  <span>
                    A sincere thank you to my mentor and everyone who takes time to review my pull requests, suggest improvements, and cheer on every step.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: FEATURED MILESTONES & WORK (Authentic showcase)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-500 font-bold block">
                PROJECT HIGHLIGHTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
                Projects that define my <span className="font-serif italic text-rose-600">journey</span>
              </h2>
              <p className="text-sm text-[#786b69]">
                Real GitHub repositories built from scratch, tackling database modeling, user interfaces, and state management.
              </p>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2d2625] hover:text-rose-600 group"
            >
              <span>View All Repositories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((project) => (
              <a
                key={project.number}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-[30px] bg-white border border-[#ede4df] shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 text-left flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-rose-500">
                      {project.number}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-rose-600 transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5e56]">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#2d2625] group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#786b69] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ede4df] flex items-center justify-between text-[11px] font-mono text-[#8b5e56]">
                  <span>Explore on GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: CONTACT & LET'S CONNECT BANNER (Warm Still Life)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-white border border-[#ede4df] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Contact details & CTA */}
              <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between text-left space-y-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-[11px] font-mono font-bold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                    <span>GET IN TOUCH</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2d2625] leading-tight">
                    Let's create something{' '}
                    <span className="font-serif italic text-rose-600">meaningful</span> together.
                  </h2>

                  <p className="text-sm sm:text-base text-[#786b69] leading-relaxed max-w-lg">
                    Whether you're looking for an enthusiastic developer to join your engineering team, need an ambitious project built, or simply want to connect — my inbox is always open.
                  </p>
                </div>

                {/* Contact information details */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono">prarthanabhandari2003@gmail.com</span>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Copy Email"
                      aria-label="Copy Email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Pune, Maharashtra, India / Remote</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5a4d4b]">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span>Open for Junior Roles, Internships & Freelance Work</span>
                  </div>
                </div>

                {/* Primary Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-[#d48275] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-rose-500/20"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="mailto:prarthanabhandari2003@gmail.com"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Send Email Direct</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Aesthetic Flowers & Candle Banner Image */}
              <div className="lg:col-span-5 relative bg-[#faf7f5] border-t lg:border-t-0 lg:border-l border-[#ede4df] overflow-hidden min-h-[300px] lg:min-h-full">
                <img
                  src="/about/flowers-candle.jpg"
                  alt="Aesthetic flowers and candle on studio table"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
