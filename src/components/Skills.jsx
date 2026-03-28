import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend Engineering",
    icon: "⚙️",
    skills: ["PHP", "Node.js"]
  },
  {
    title: "Database Architecture",
    icon: "🗄️",
    skills: ["MySQL", "Relational Database Design"]
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Responsive Design", "SEO Basics"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32 px-6 max-w-6xl mx-auto w-full">
      <ScrollReveal delay={0}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">Technical Arsenal.</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium transition-colors duration-500">The tools and technologies I use to build scalable web applications.</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <ScrollReveal key={idx} delay={idx * 100} className="h-full">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-2xl flex items-center justify-center rounded-2xl mb-6 shadow-sm border border-blue-100 dark:border-blue-800/50 transition-colors duration-500">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-600 transition-colors duration-500">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;