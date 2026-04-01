import ScrollReveal from './ScrollReveal';
import profilePic from '../assets/profile.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 px-6 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Intro Card */}
        <ScrollReveal delay={0} className="md:col-span-2 bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center relative overflow-hidden group min-h-[320px] transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
          
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Debugging & Optimization
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors duration-500">
                I diagnose, fix, and <span className="text-blue-600 dark:text-blue-400">optimize systems.</span>
              </h1>
              
              {/* 🔥 NEW: THE CRITICAL IMPACT HOOK */}
              <p className="text-slate-600 dark:text-slate-300 text-xl font-bold max-w-xl transition-colors duration-500 border-l-4 border-blue-500 pl-4 py-1 mb-4">
                "I help fix backend issues, optimize performance, and ensure reliable API integrations in production systems."
              </p>

              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl">
                Hi, I'm Abishek V. I focus on identifying root causes and delivering bulletproof technical solutions.
              </p>
            </div>
            
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full border-4 border-white dark:border-slate-700 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-slate-100 dark:bg-slate-700">
              <img 
                src={profilePic} 
                alt="Abishek V Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Abishek+V&background=2563eb&color=fff";
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Signals / Stats Card */}
        <ScrollReveal delay={150} className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 dark:border-slate-800/50 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[320px] transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-5xl font-black text-white mb-1">10<span className="text-blue-500">+</span></h2>
          <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-6">Production Systems</p>
          
          <div className="w-12 h-px bg-slate-700 mb-6"></div>
          
          <h2 className="text-5xl font-black text-white mb-1">30<span className="text-emerald-500">+</span></h2>
          <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-6">APIs Integrated</p>

          <div className="w-12 h-px bg-slate-700 mb-6"></div>

          <h2 className="text-4xl font-black text-white mb-1">100<span className="text-amber-500">%</span></h2>
          <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase">Debugging Focus</p>
        </ScrollReveal>

        {/* 🔥 NEW: "WHAT I DO" BLOCK (Replacing generic skills) */}
        <ScrollReveal delay={300} className="md:col-span-2 bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center min-h-[160px] transition-colors duration-500">
          <h3 className="text-slate-400 dark:text-slate-500 text-xs font-black tracking-widest uppercase mb-6">What I Actually Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span className="text-slate-700 dark:text-slate-200 font-bold">Fix backend issues & API failures</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-700 dark:text-slate-200 font-bold">Debug frontend ↔ backend flow</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              <span className="text-slate-700 dark:text-slate-200 font-bold">Optimize performance bottlenecks</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-slate-700 dark:text-slate-200 font-bold">Ensure stable production deployments</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Action Card */}
        <ScrollReveal delay={450} className="bg-blue-600 dark:bg-blue-700 rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center text-white relative overflow-hidden group min-h-[160px] transition-colors duration-500 text-center">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>
          <div className="relative z-10 mb-6">
            <h3 className="text-2xl font-bold mb-1">Got a Broken System?</h3>
            <p className="text-blue-200 text-sm font-medium">Let's debug it together.</p>
          </div>
          <a href="#contact" className="relative z-10 bg-white text-blue-600 px-8 py-3 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Fix It Now
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;