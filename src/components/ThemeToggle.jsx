import { useEffect, useState } from 'react';
import { Lightbulb } from 'lucide-react';

const ThemeToggle = () => {
  // 1. We start with false (Light Mode)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 2. Logic Check: Only go dark if the user EXPLICITLY saved 'dark' before.
    // We removed the system preference check so it doesn't default to dark.
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <div 
      // FIX: Changed right-20 to right-4 for perfect mobile alignment
      className="fixed top-0 right-4 md:right-12 z-[100] flex flex-col items-center group cursor-pointer" 
      onClick={toggleTheme}
    >
      {/* The Hanging Wire */}
      <div className="w-[2px] bg-slate-300 dark:bg-slate-600 origin-top h-12 md:h-16 group-active:h-20 md:group-active:h-24 transition-[height] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
      
      {/* The Bulb Holder */}
      <div className="w-4 h-3 bg-slate-400 dark:bg-slate-500 rounded-sm -mt-1 z-10 transition-colors duration-500"></div>
      
      {/* The Interactive Bulb */}
      <div 
        className={`-mt-1 p-2 rounded-full transform origin-top group-hover:rotate-6 group-active:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark 
            ? 'bg-amber-400 text-amber-900 shadow-[0_15px_40px_rgba(251,191,36,0.6)]' 
            : 'bg-slate-200 text-slate-500 shadow-sm'
        }`}
      >
        <Lightbulb size={24} strokeWidth={2.5} fill={isDark ? "currentColor" : "none"} />
      </div>
    </div>
  );
};

export default ThemeToggle;