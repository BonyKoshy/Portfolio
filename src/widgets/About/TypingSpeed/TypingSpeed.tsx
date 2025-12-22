import React from "react";
import { Gauge } from "lucide-react";

const TypingSpeed: React.FC = () => {
  const wpm = 60;
  const maxWpm = 100; // Visual scale max
  
  // Half-circle SVG calculations
  // Radius 40, Center (50, 50). Arc from 180deg to 360deg?
  // Let's do a simple semi-circle arc.
  // Path for background: M 10 50 A 40 40 0 1 1 90 50
  // Path length implies strokeDasharray.
  // Radius 40. Circumference 2*PI*40 = ~251. Semi-circle = ~126.
  const radius = 40;
  const circumference = Math.PI * radius;
  const progress = (wpm / maxWpm) * circumference;
  
  return (
    <div className="h-full w-full flex flex-col justify-between relative bg-(--panel-bg) rounded-xl overflow-hidden group p-5">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-linear-to-br from-transparent via-(--accent)/5 to-(--accent)/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
       {/* Header - Top Left */}
       <div className="flex items-center gap-3 z-10 w-full justify-start text-(--text-secondary)">
         <Gauge className="" size={26} />
         <h3 className="text-lg font-bold m-0 whitespace-nowrap">Typing Speed</h3>
       </div>
       
       {/* Gauge Content - Bottom Center */}
       <div className="relative z-10 flex flex-col items-center w-full mt-auto">
         <div className="relative w-45 max-w-full aspect-2/1 flex items-end justify-center">
            {/* SVG Arc */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 55">
               {/* Defs for gradients */}
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--accent)" />
                    </linearGradient>
                </defs>

               {/* Track */}
               <path 
                 d="M 10 50 A 40 40 0 1 1 90 50"
                 fill="none"
                 stroke="var(--prelayer-2)"
                 strokeWidth="10"
                 strokeLinecap="round"
               />
               
               {/* Progress */}
               <path 
                 d="M 10 50 A 40 40 0 1 1 90 50"
                 fill="none"
                 stroke="url(#gaugeGradient)"
                 strokeWidth="10"
                 strokeLinecap="round"
                 strokeDasharray={circumference}
                 strokeDashoffset={circumference - progress}
                 className="transition-all duration-1000 ease-out"
               />
            </svg>
            
            {/* Centered Text */}
            <div className="absolute bottom-0 flex flex-col items-center mb-1">
               <span className="text-5xl font-black text-(--text-primary) leading-none tracking-tighter drop-shadow-sm">
                 {wpm}
               </span>
               <span className="text-xs font-bold text-(--text-secondary) uppercase tracking-widest mt-1">WPM</span>
            </div>
         </div>
       </div>
    </div>
  );
};

export default TypingSpeed;
