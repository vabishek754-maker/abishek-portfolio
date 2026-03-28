import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);
  
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! Looking for web solutions? Ask me anything about Abishek.' }
  ]);

  // Auto-scrolls the chat window so the newest message is always visible
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // 🧠 THE ULTIMATE AI BRAIN
    setTimeout(() => {
      let reply = "I'm a virtual assistant focused on Abishek's portfolio. Try asking about his 'skills', 'projects', 'process', or 'availability'!";
      const lowerInput = userMsg.toLowerCase();
      
      // Advanced Regex: \b ensures exact word starts, [a-z]* allows plurals/suffixes
      if (lowerInput.match(/\b(time|deadline|manage|fast|speed|punctual|deliver|schedule)[a-z]*\b/)) {
        reply = "Abishek takes time management very seriously. He sets realistic deadlines, communicates progress consistently, and always ensures high-quality delivery on time.";
      } 
      else if (lowerInput.match(/\b(cost|price|budget|rate|charge|pay|money|expensive)[a-z]*\b/)) {
        reply = "Pricing depends entirely on the scope of your project! Scroll down to the Contact section, send over your requirements, and he will get back to you with a custom quote.";
      } 
      else if (lowerInput.match(/\b(available|start|freelance|full-time|hiring|hire|job)[a-z]*\b/)) {
        reply = "Yes! Abishek is currently open to freelance projects and full-time opportunities. Use the contact form below or email him at vabishek754@gmail.com.";
      } 
      else if (lowerInput.match(/\b(process|workflow|start|approach|communicate)[a-z]*\b|how do you work/)) {
        reply = "His process starts with understanding your business goals, designing robust database architecture (MySQL), building scalable backend logic (PHP), and finishing with a clean, responsive frontend.";
      } 
      else if (lowerInput.match(/\b(believe|trust|reliable|good|why|capable|dedication|dedicated|hardworking)[a-z]*\b/)) {
        reply = "Absolutely. With a proven track record of 10+ projects, he is highly dedicated, writes clean code, and solves complex bugs efficiently. Clients love his reliability.";
      } 
      else if (lowerInput.match(/\b(project|portfolio|work|build|built|made|created)[a-z]*\b/)) {
        reply = "He has delivered 10+ projects, including a business networking platform (Privy Direct) and a matrimony site (Swarnalagna). You can check out his 'Selected Work' section below!";
      } 
      else if (lowerInput.match(/\b(experience|exp|history|year)[a-z]*\b/)) {
        reply = "He has over 1.5+ years of hands-on professional experience, building everything from corporate websites to complex full-stack web platforms.";
      } 
      else if (lowerInput.match(/\b(skill|tech|stack|know|language|framework|react|php|mysql|tailwind|node|html|css)[a-z]*\b/)) {
        reply = "His core expertise is PHP, MySQL, HTML/CSS, and React. He focuses on scalable architecture and is also actively building backend systems with Node.js!";
      } 
      else if (lowerInput.match(/\b(who|about|tell|overview|background|bio|abishek)[a-z]*\b/) && !lowerInput.match(/\b(project|skill)[a-z]*\b/)) {
        reply = "Abishek V is a Full Stack Developer from Chennai. He specializes in building robust web applications that solve real-world business problems.";
      } 
      else if (lowerInput.match(/\b(location|where|based|country|from|city)[a-z]*\b/)) {
        reply = "He is based in Chennai, India, but is fully equipped to work seamlessly with remote clients worldwide.";
      } 
      else if (lowerInput.match(/\b(contact|email|message|reach|talk|call)[a-z]*\b/)) {
        reply = "You can scroll down to the Contact section to shoot him an email, or reach out directly at vabishek754@gmail.com. He usually replies very quickly!";
      } 
      // Greetings use strict \b without suffix allowance so "him" doesn't trigger "hi"
      else if (lowerInput.match(/\b(hi|hello|hey|greetings|morning|evening|howdy)\b/)) {
        reply = "Hello! I'm Abishek's virtual assistant. Are you looking to start a project, or just browsing his work?";
      } 
      else if (lowerInput.match(/\b(ok|thank|thanks|awesome|cool|great|nice|wow|good|bye)\b/)) {
        reply = "You're very welcome! Let me know if you need any other details, or feel free to use the Contact form below.";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="about" className="scroll-mt-32 px-6 max-w-6xl mx-auto w-full">
      <ScrollReveal delay={0}>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-500">About Me.</h2>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Side: Traditional Text */}
        <ScrollReveal delay={150} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col justify-center hover:-translate-y-1 transition-all duration-500">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 font-medium transition-colors duration-500">
            I am a Full Stack Developer with a strong focus on building efficient, scalable, and reliable web applications. My approach combines clean code practices with a deep understanding of business requirements.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium transition-colors duration-500">
            Whether I am designing a complex relational database in MySQL, writing robust server-side logic in PHP, or building an interactive UI, my goal is always to deliver software that solves real problems.
          </p>
        </ScrollReveal>

        {/* Right Side: Interactive AI Chat UI */}
        <ScrollReveal delay={300} className="bg-[#f8fafc] dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[400px] hover:-translate-y-1 transition-all duration-500">
          
          <div className="bg-white dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3 z-10 transition-colors duration-500">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm transition-colors duration-500">Ask about Abishek</span>
          </div>

          <div ref={chatContainerRef} className="flex-grow p-6 overflow-y-auto flex flex-col gap-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-5 py-3 rounded-2xl max-w-[85%] text-sm font-medium shadow-sm transition-colors duration-500 ${
                  msg.sender === 'user' 
                    ? 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-tr-sm' 
                    : 'bg-blue-600 text-white rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-5 py-4 bg-blue-600 rounded-2xl rounded-tl-sm flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-500">
            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your inquiry..." 
                className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 text-sm rounded-full pl-5 pr-14 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full flex items-center justify-center text-white shadow-sm"
              >
                <svg className="w-4 h-4 ml-[-2px] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;