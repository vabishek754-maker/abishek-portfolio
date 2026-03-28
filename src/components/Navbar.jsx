import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' } 
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center">
      {/* Added dark:bg-slate-900/90 and dark:border-slate-700 */}
      <nav className="relative w-full max-w-4xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-between items-center transition-colors duration-500">
        
        {/* Added dark:text-white */}
        <div className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">
          ABISHEK<span className="text-blue-600">.V</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`transition-colors ${
                activeSection === item.toLowerCase() 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" aria-label="Scroll to Contact section" className="hidden md:inline-flex px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md hover:-translate-y-0.5 transform duration-200">
          Hire Me
        </a>

        <button 
          className="md:hidden text-slate-900 dark:text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          // Added dark mode dropdown styling
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-xl transition-colors duration-500">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className={`font-bold px-4 py-3 rounded-xl transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;