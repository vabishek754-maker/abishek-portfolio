import ScrollReveal from './ScrollReveal';

// I added high-quality placeholder images to your array!
const projects = [
  { 
    title: "Privy Direct", 
    desc: "A premium business platform focused on direct connectivity and professional networking.", 
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind"], 
    link: "https://privydirect.in/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  { 
    title: "Swarnalagna", 
    desc: "A specialized matrimony platform featuring advanced search and secure profile management.", 
    tech: ["PHP", "MySQL", "Architecture", "CSS3"], 
    link: "https://swarnalagna.com/",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500"
  },
  { 
    title: "AG Samooham", 
    desc: "Community organizational system designed for high-scale member management and data handling.", 
    tech: ["PHP", "Database Design", "HTML5"], 
    link: "https://agsamooham.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
  },
  { 
    title: "Neoera Infotech", 
    desc: "Corporate website for a tech solution provider, featuring modern UI and seamless user experience.", 
    tech: ["PHP", "Responsive Design", "SEO"], 
    link: "https://neoerainfotech.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-6 max-w-6xl mx-auto w-full">
      <ScrollReveal>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-500">Selected Work.</h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            {/* Added overflow-hidden to crop the image corners perfectly */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full group">
              
              {/* THE NEW IMAGE CONTAINER */}
              <div className="h-56 overflow-hidden relative border-b border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* The Text Content below the image */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow font-medium leading-relaxed transition-colors duration-500">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-slate-600 transition-colors duration-500">{t}</span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2 mt-auto"
                >
                  View Live Site <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;