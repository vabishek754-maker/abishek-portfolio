import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: "⚙️",
      color: "text-cyan-500",
      skills: [
        "Node.js (REST APIs)",
        "API Integration & Webhooks",
        "Docker & Containerization",
        "VPS Deployment (Hostinger)",
        "Reverse Proxy (Traefik)",
        "Database Architecture (MySQL)"
      ]
    },
    {
      title: "Debugging & Optimization",
      icon: "🔧",
      color: "text-amber-500",
      skills: [
        "Performance Debugging",
        "Root Cause Analysis",
        "API Troubleshooting",
        "Network & CORS Handling",
        "Browser DevTools / Logs Analysis",
        "System Reliability"
      ]
    },
    {
      title: "Frontend Engineering",
      icon: "💻",
      color: "text-blue-500",
      skills: [
        "React.js Ecosystem",
        "Tailwind CSS / UI Optimization",
        "State Management",
        "Responsive Architecture",
        "Client-Side Performance",
        "Data Fetching Strategies"
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 px-6 max-w-6xl mx-auto w-full py-20">
      <ScrollReveal>
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="text-blue-600 font-black tracking-[0.3em] text-xs uppercase mb-3">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            Technical <span className="text-blue-600">Arsenal.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium border-l-4 border-amber-500 pl-4 text-left italic">
            "I specialize in debugging complex issues across frontend, backend, and server environments."
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 h-full hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className={`text-4xl mb-6 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                    <svg className={`w-5 h-5 ${category.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;