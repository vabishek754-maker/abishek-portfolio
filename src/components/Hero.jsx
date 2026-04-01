import ScrollReveal from './ScrollReveal';
import profilePic from '../assets/profile.jpeg'; // Ensure the extension is exactly .jpeg (not .jpg)

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 px-6 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Intro Card with Profile Picture */}
        <ScrollReveal delay={0} className="md:col-span-2 bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center relative overflow-hidden group min-h-[320px] transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
          
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              
              {/* NEW LIVE STATUS TAG */}
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Backend & System Optimization
              </div>

              {/* NEW PROBLEM-SOLVER HEADLINE */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors duration-500">
                I diagnose, fix, and <span className="text-blue-600 dark:text-blue-400">optimize systems.</span>
              </h1>
              
              {/* NEW IMPACT SUBTEXT */}
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-xl transition-colors duration-500">
                Hi, I'm <span className="text-slate-900 dark:text-white">Abishek V</span>. I specialize in backend architecture, API integrations, and debugging complex performance issues to deliver reliable, production-ready solutions.
              </p>
            </div>
            
            {/* THE PROFILE PICTURE */}
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

        {/* Experience Stats Card */}
        <ScrollReveal delay={150} className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 dark:border-slate-800/50 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[320px] transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="text-6xl font-black text-white mb-2">1.5<span className="text-blue-500">+</span></h2>
          <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Years Experience</p>
          <div className="w-12 h-px bg-slate-700 my-6"></div>
          <h2 className="text-5xl font-black text-white mb-2">10<span className="text-blue-500">+</span></h2>
          <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Systems Deployed</p>
        </ScrollReveal>

        {/* Core Stack Card - UPDATED FOR BACKEND/SYSTEMS */}
        <ScrollReveal delay={300} className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between min-h-[320px] transition-colors duration-500">
          <h3 className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase mb-6">Core Arsenal</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">Backend & APIs</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">Advanced</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-10/12 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">Docker & Infra</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">Proficient</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-8/12 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">Debugging</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">Expert</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-11/12 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Action Card - UPDATED TO MATCH NEW IDENTITY */}
        <ScrollReveal delay={450} className="md:col-span-2 bg-blue-600 dark:bg-blue-700 rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex flex-col sm:flex-row items-center justify-between text-white relative overflow-hidden group min-h-[160px] transition-colors duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>
          <div className="relative z-10 mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold mb-2">Explore System Architecture</h3>
            <p className="text-blue-100 font-medium">See the production backends and pipelines I've deployed.</p>
          </div>
          <a href="#projects" className="relative z-10 bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap text-center">
            View Architecture &rarr;
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;