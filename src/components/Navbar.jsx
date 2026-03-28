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
    <div className="fixed top-6 left-0 w-full z-[100] px-6 flex justify-center">
      <nav className="relative w-full max-w-4xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 px-6 py-3 rounded-full shadow-xl flex justify-between items-center transition-all duration-500">
        
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
          ABISHEK<span className="text-blue-600">.V</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.15em]">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`transition-all duration-300 hover:scale-110 ${
                activeSection === item.toLowerCase() 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[2rem] p-4 flex flex-col gap-2 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className={`font-black text-sm uppercase tracking-widest px-6 py-4 rounded-2xl transition-all ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
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