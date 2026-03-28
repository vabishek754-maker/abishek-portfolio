// Build Fix v1.0
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Preloader from './components/Preloader.jsx'; // 👈 Import it here

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600/20 selection:text-blue-900 transition-colors duration-500">
      
      <Preloader /> {/* 👈 Drop it right here at the very top! */}
      <ThemeToggle /> 
      <Navbar />
      
      <main className="pb-32 flex flex-col gap-24 md:gap-32">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
        <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">© 2026 Abishek V. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;