import ScrollReveal from './ScrollReveal';

const projects = [
  { 
    id: "01",
    title: "Privy Direct", 
    desc: "A high-performance connectivity hub for professional networking and direct B2B communication.", 
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind"], 
    link: "https://privydirect.in/",
    glow: "group-hover:shadow-blue-500/20"
  },
  { 
    id: "02",
    title: "Swarnalagna", 
    desc: "A secure, architecture-driven matrimony platform with advanced filtering and profile matching.", 
    tech: ["PHP", "MySQL", "Architecture", "CSS3"], 
    link: "https://swarnalagna.com/",
    glow: "group-hover:shadow-purple-500/20"
  },
  { 
    id: "03",
    title: "AG Samooham", 
    desc: "Scalable community management system designed for heavy data handling and member organization.", 
    tech: ["PHP", "Database", "HTML5"], 
    link: "https://agsamooham.com/",
    glow: "group-hover:shadow-emerald-500/20"
  },
  { 
    id: "04",
    title: "Neoera Infotech", 
    desc: "A modern corporate digital ecosystem focused on high-speed performance and SEO optimization.", 
    tech: ["PHP", "Responsive", "SEO"], 
    link: "https://neoerainfotech.com/",
    glow: "group-hover:shadow-orange-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-6 max-w-6xl mx-auto w-full">
      <ScrollReveal>
        <div className="flex flex-col mb-16">
          <span className="text-blue-600 font-black tracking-[0.3em] text-xs uppercase mb-3">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Selected Work<span className="text-blue-600">.</span>
          </h2>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <div className={`group relative bg-white dark:bg-[#0f172a] 
  border border-slate-200 dark:border-white/10 
  rounded-[2rem] p-8 md:p-10 transition-all duration-500 
  flex flex-col h-full hover:-translate-y-2 shadow-sm 
  ${project.glow} hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]`}>
              
              <div className="flex items-center gap-1.5 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors"></div>
                
                {/* 🟢 NEW: Live Pulsing Status Dot */}
                <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-100 dark:border-slate-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 tracking-widest uppercase">Live</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-10 flex-grow leading-relaxed font-medium text-lg">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800/40 text-slate-500 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-800 transition-all group-hover:border-blue-500/30 group-hover:text-blue-500">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800/50">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-4 text-slate-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] group/link"
                  >
                    <span className="relative">
                      Explore Case Study
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:border-blue-600 group-hover/link:text-white transition-all duration-500 scale-90 group-hover/link:scale-110">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;