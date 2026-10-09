import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Award,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  Building2,
  Layers,
  Database,
  Terminal
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

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
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

  const education = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'K.B. Joshi Institute of Information Technology, Pune',
      university: "S.N.D.T. Women's University",
      period: '2024 – 2026',
      badge: 'Current / Final Year',
      highlight: 'Focusing on Enterprise Web Architectures, Advanced Data Structures, and Cloud Systems.',
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'Affiliated University Institute, Pune',
      university: 'State University Board',
      period: '2020 – 2023',
      badge: 'Completed',
      highlight: 'Built solid computer science foundations in Java, SQL, OOP, and Web Development basics.',
    },
  ];

  const experience = [
    {
      role: 'Back-end Developer Intern',
      company: 'Graphura India Pvt. Ltd.',
      location: 'Pune',
      period: 'March 2026 – Present',
      current: true,
      description: 'Building RESTful APIs using Node.js and Express.js for web-based enterprise applications. Integrating relational database schemas and managing server connections.',
    },
    {
      role: 'MERN Stack Developer Intern',
      company: 'Codec Technologies Pvt. Ltd.',
      location: 'Pune',
      period: 'Jan 2026 – April 2026',
      current: false,
      description: 'Completed a 3-month AICTE & ICAC-approved internship program. Built full-stack MERN (MongoDB, Express, React, Node.js) features and developed responsive dashboards.',
    },
  ];

  const coreSkills = [
    {
      category: 'Frontend Engineering',
      icon: Code2,
      items: ['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion'],
    },
    {
      category: 'Backend & APIs',
      icon: Terminal,
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT & Bcrypt Authentication', 'Python (Flask / NLP)', 'Java'],
    },
    {
      category: 'Databases & Architecture',
      icon: Database,
      items: ['PostgreSQL', 'MongoDB', 'SQL Schema Design', 'Software Architecture Patterns', 'Git & GitHub', 'AWS Cloud Basics'],
    },
  ];

  const mentors = [
    {
      title: 'Academic Project Guide',
      name: 'Prof. Manali Sapkal',
      affiliation: "K.B. Joshi Institute of IT, Pune (S.N.D.T. Women's University)",
      roleDescription: 'Academic Guide & Advisor for Major Projects including BookVerse',
      impact: 'Guided the architectural structuring, relational database integrity, and research methodology for my final year flagship project.',
      badge: 'Academic Mentor',
    },
    {
      title: 'Industry Engineering Mentors',
      name: 'Senior Engineering Team & Leads',
      affiliation: 'Graphura India & Codec Technologies, Pune',
      roleDescription: 'Production Internship Guidance & Code Reviewers',
      impact: 'Taught production-grade RESTful API patterns, asynchronous state handling, and professional software engineering hygiene.',
      badge: 'Industry Mentors',
    },
  ];

  const projects = [
    {
      number: '01',
      title: 'BookVerse',
      category: 'PostgreSQL · Express · React · Node',
      description: 'A full-stack book review & reading legacy platform with multi-role RBAC, custom SQL quality scores, and Open Library API ISBN cover fetching.',
      link: 'https://github.com/prarthanabhandari/BookVerse-Book-Review-Community-Platform',
      live: 'https://bookverse-frontend-g47p.onrender.com/',
    },
    {
      number: '02',
      title: 'Startup (VOXOR Studio)',
      category: 'React · TypeScript · 3D Babylon · Express',
      description: 'A high-end creative agency web application with claymorphic UI, 3D interactive canvases, layered backend architecture, and lead generation.',
      link: 'https://github.com/Prarthanabhandari/Startup',
      live: null,
    },
    {
      number: '03',
      title: 'Linguistic Chatbot & NLP Engine',
      category: 'Python · Flask · NLTK · Morphological Analysis',
      description: 'An NLP analysis engine performing Part-of-Speech tagging, morphological affix extraction, and real-time sentence structural corrections.',
      link: 'https://github.com/prarthanabhandari/ChatBot',
      live: null,
    },
  ];

  return (
    <div className="pt-[72px] bg-[#faf7f5] text-[#2d2625] min-h-screen selection:bg-rose-100 selection:text-rose-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO (Warm Editorial Portrait & OG Profile)
         ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 border-b border-[#ede4df] overflow-hidden">
        {/* Soft background radial glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Authentic Personal Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede4df] shadow-xs text-xs font-semibold text-[#8b5e56]">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="tracking-wide uppercase text-[11px] font-bold">Full Stack Developer & MCA Graduate</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.15] text-[#2d2625] tracking-tight">
                I build digital experiences that are{' '}
                <span className="font-serif italic text-rose-600 font-normal underline decoration-rose-300 decoration-wavy decoration-1 underline-offset-4">
                  beautiful
                </span>
                ,{' '}
                <span className="font-serif italic text-purple-600 font-normal">
                  fast
                </span>{' '}
                &{' '}
                <span className="font-serif italic text-cyan-600 font-normal">
                  meaningful
                </span>
                .
              </h1>

              {/* Authentic OG Biography directly from portfolio */}
              <div className="space-y-4 text-base sm:text-lg text-[#5a4d4b] leading-relaxed max-w-xl font-normal">
                <p>
                  I'm <strong className="font-semibold text-[#2d2625]">Prarthana Basawraj Bhandari</strong>, a Full Stack Developer and MCA student at{' '}
                  <strong className="font-semibold text-[#2d2625]">K.B. Joshi Institute of Information Technology, Pune</strong>.
                </p>
                <p className="text-sm sm:text-base text-[#786b69]">
                  I specialize in developing clean, scalable, and high-performance web applications with React, TypeScript, Node.js, and PostgreSQL. Every project is built from scratch with genuine craft, zero fluff, and strong fundamentals.
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
                  Open for Full-Stack & Backend Roles
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/work"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2d2625] text-white text-xs font-bold uppercase tracking-wider hover:bg-black hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://github.com/prarthanabhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prarthana-bhandari-ab2a5a293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#ede4df] text-[#0077b5] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all duration-200 shadow-2xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
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

                  {/* Aesthetic Floating Glass Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-left">
                    <div className="flex items-center space-x-2 text-xs font-bold text-rose-600 font-serif italic mb-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>Creating with purpose. Coding with heart.</span>
                    </div>
                    <p className="text-[11px] text-[#786b69] leading-tight font-sans">
                      MCA Scholar · Backend Developer Intern @ Graphura India · Full-Stack Builder
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: EDUCATION & INDUSTRY EXPERIENCE (Real & Grounded)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Education Journey */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-mono font-bold tracking-wider uppercase border border-rose-200/60">
                <GraduationCap className="w-3.5 h-3.5 text-rose-500" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <h2 className="text-3xl font-medium text-[#2d2625] tracking-tight">
                Academic Degrees & <span className="font-serif italic text-rose-600">Qualifications</span>
              </h2>

              <p className="text-sm text-[#786b69] leading-relaxed">
                Structured computer applications coursework combined with hands-on final-year project development.
              </p>

              <div className="space-y-4 pt-2">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[24px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 space-y-3 relative"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-rose-500 tracking-wider">
                          {edu.period}
                        </span>
                        <h3 className="text-base font-bold text-[#2d2625]">{edu.degree}</h3>
                        <p className="text-xs font-medium text-[#5a4d4b]">{edu.institution}</p>
                        <p className="text-[11px] text-[#786b69]">{edu.university}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-mono font-bold border border-rose-200/60 shrink-0">
                        {edu.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#786b69] leading-relaxed pt-2 border-t border-[#ede4df]/60">
                      {edu.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Professional Experience (Internships) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-mono font-bold tracking-wider uppercase border border-indigo-200/60">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                <span>PROFESSIONAL EXPERIENCE</span>
              </div>

              <h2 className="text-3xl font-medium text-[#2d2625] tracking-tight">
                Software Engineering <span className="font-serif italic text-indigo-600">Internships</span>
              </h2>

              <p className="text-sm text-[#786b69] leading-relaxed">
                Practical, real-world development experience in Pune-based software organizations.
              </p>

              <div className="space-y-4 pt-2">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[24px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-indigo-600 tracking-wider">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                              Active
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-[#2d2625]">{exp.role}</h3>
                        <p className="text-xs font-semibold text-[#5a4d4b] flex items-center">
                          <Building2 className="w-3 h-3 mr-1 text-slate-400" />
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[#786b69] leading-relaxed pt-2 border-t border-[#ede4df]/60">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

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
              The Mentors Who Guide My <span className="font-serif italic text-rose-600">Growth</span>
            </h2>
            <p className="text-sm sm:text-base text-[#786b69] leading-relaxed">
              No developer grows in isolation. Every major project and technical milestone is shaped by mentors who invest time into code reviews, architectural advice, and honest feedback.
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mentors.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-[32px] border border-[#ede4df] shadow-md p-8 text-left space-y-5 flex flex-col justify-between hover:shadow-xl hover:border-rose-200 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-mono font-bold uppercase tracking-wider border border-rose-200/60">
                      {m.badge}
                    </span>
                    <Award className="w-5 h-5 text-rose-400" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8b5e56] block">
                      {m.title}
                    </span>
                    <h3 className="text-xl font-bold text-[#2d2625]">{m.name}</h3>
                    <p className="text-xs font-semibold text-rose-600">{m.affiliation}</p>
                    <p className="text-xs text-[#786b69]">{m.roleDescription}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#faf7f5] border border-[#ede4df]">
                    <p className="text-xs text-[#5a4d4b] leading-relaxed italic">
                      "{m.impact}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#ede4df] flex items-center space-x-2 text-xs text-[#786b69]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Continuous guidance, code quality & problem solving</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 max-w-5xl mx-auto p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed text-center flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
            <span>
              Special gratitude to Prof. Manali Sapkal and my engineering leads at Graphura India & Codec Technologies for their invaluable mentorship.
            </span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: CORE TECHNICAL TOOLKIT (Verified Skills)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#fbf8f6]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#ede4df] text-[11px] font-mono font-bold tracking-wider uppercase text-[#8b5e56]">
              <Layers className="w-3.5 h-3.5 text-rose-500" />
              <span>TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
              Tools & Technologies I Work With <span className="font-serif italic text-rose-600">Daily</span>
            </h2>
            <p className="text-sm text-[#786b69]">
              Verified skills applied across production internships, academic research, and open-source applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreSkills.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-[28px] bg-white border border-[#ede4df] shadow-2xs hover:shadow-md transition-all duration-300 text-left space-y-5"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#2d2625]">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-[#faf7f5] border border-[#ede4df] text-xs font-medium text-[#4a3e3d] hover:bg-rose-50 hover:border-rose-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: FEATURED REAL PROJECTS (Direct Repo Links)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-[#ede4df] bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-500 font-bold block">
                FLAGSHIP PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#2d2625] tracking-tight">
                Authentic Repositories & <span className="font-serif italic text-rose-600">Live Deployments</span>
              </h2>
              <p className="text-sm text-[#786b69]">
                Live applications with documented codebases, database relational models, and production deployments.
              </p>
            </div>

            <a
              href="https://github.com/prarthanabhandari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2d2625] hover:text-rose-600 group"
            >
              <span>Explore All Repositories on GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.number}
                className="p-8 rounded-[30px] bg-white border border-[#ede4df] shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 text-left flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-rose-500">
                      {proj.number}
                    </span>
                    {proj.live && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                        Live Demo
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5e56]">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#2d2625] group-hover:text-rose-600 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#786b69] leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ede4df] flex items-center justify-between text-[11px] font-mono text-[#8b5e56]">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 hover:text-rose-600"
                  >
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-emerald-700 font-bold hover:underline"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: CONTACT & CONNECT BANNER (Matching Reference)
         ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fbf8f6]">
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
                    Whether you are looking for an ambitious full-stack / backend developer in Pune, want to collaborate on a project, or simply want to say hello — my inbox is always open.
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
                    <span>Available for Junior Developer Roles, Internships & Collaborations</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-[#d48275] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-rose-500/20"
                  >
                    <span>Send a Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="mailto:prarthanabhandari2003@gmail.com"
                    className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white border border-[#ede4df] text-[#2d2625] text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Direct Email</span>
                  </a>

                  <a
                    href="https://novaportfolio.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-[#473e3d] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    <span>NovaPortfolio ↗</span>
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
