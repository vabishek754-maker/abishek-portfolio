import { useState, useEffect } from 'react';

const loadingPhrases = [
  "Waking up servers...",
  "Compiling UI assets...",
  "Loading AI module...",
  "Polishing pixels...",
  "Ready to launch."
];

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShow(false);
      return;
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2; 
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(currentProgress);

      if (currentProgress < 25) setPhraseIndex(0);
      else if (currentProgress < 50) setPhraseIndex(1);
      else if (currentProgress < 75) setPhraseIndex(2);
      else if (currentProgress < 95) setPhraseIndex(3);
      else setPhraseIndex(4);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setShow(false);
            sessionStorage.setItem('hasVisited', 'true');
          }, 800); 
        }, 500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0B1120] flex flex-col items-center justify-center transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isFading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 -mt-10">
        
        {/* Branding Name */}
        <div className="text-white font-black tracking-tighter text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-12">
          ABISHEK<span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">.V</span>
        </div>

        {/* The Loader Block */}
        <div className="w-64 md:w-80 flex flex-col items-center">
          
          {/* 🌟 FIX: Tightly coupled Track & Runner Wrapper */}
          <div className="w-full relative">
            
            {/* 🏃‍♂️ The Running Man & Percentage */}
            <div 
              className="absolute bottom-full pb-2 transition-all duration-100 ease-out flex flex-col items-center z-10"
              style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
            >
              {/* Scaled down slightly for better proportions */}
              <svg 
                className="w-8 h-8 text-cyan-400 animate-[bounce_0.4s_infinite] -rotate-12 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
              </svg>
              
              <div className="text-white font-black text-xs tabular-nums tracking-widest leading-none mt-1">
                {progress}%
              </div>
            </div>

            {/* 🏁 The Gradient Glowing Track */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative z-0">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
          </div>
          
          {/* The Dynamic "Hacker" Text */}
          <div className="mt-6 h-6 text-center w-full">
            <p 
              key={phraseIndex} 
              className="text-cyan-500/80 font-bold tracking-widest text-[10px] md:text-xs uppercase animate-[pulse_1s_ease-in-out_infinite]"
            >
              {loadingPhrases[phraseIndex]}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Preloader;