import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 px-6 max-w-6xl mx-auto w-full">
      <ScrollReveal>
        <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative transition-colors duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Let's build something <span className="text-blue-500">together.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-md">
                Currently available for freelance projects and full-time roles. If you're looking for a developer who understands business goals, let's talk.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center border border-slate-700 dark:border-slate-800 transition-colors duration-500">📍</div>
                  <span className="font-medium">Chennai, India</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center border border-slate-700 dark:border-slate-800 transition-colors duration-500">✉️</div>
                  <span className="font-medium">vabishek754@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 transition-colors duration-500 border border-transparent dark:border-slate-700">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Name</label>
                  {/* FIX: Added placeholder-slate-400 dark:placeholder-slate-300 */}
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Email</label>
                  {/* FIX: Added placeholder-slate-400 dark:placeholder-slate-300 */}
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-500" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Message</label>
                  {/* FIX: Added placeholder-slate-400 dark:placeholder-slate-300 */}
                  <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-500 resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg mt-2 hover:bg-blue-700 transition-colors shadow-md">
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;