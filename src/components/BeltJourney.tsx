import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type BeltColor = 'white' | 'yellow' | 'green' | 'blue' | 'brown' | 'black';

interface BeltData {
  title: string;
  desc: string;
  stages: string[];
  stroke: string;
  color: string;
  textColor: string;
}

const beltInfo: Record<BeltColor, BeltData> = {
  white: { 
    title: 'WHITE BELT', 
    desc: 'The beginning of the journey. Focusing on basics and manners.', 
    stages: ['ZENKUTSU-DACHI', 'CHOKU-ZUKI'], 
    stroke: 'WHITE',
    color: 'bg-white',
    textColor: 'text-white'
  },
  yellow: { 
    title: 'YELLOW BELT', 
    desc: 'Building power and stability.', 
    stages: ['HEIAN SHODAN', 'AGE-UKE'], 
    stroke: 'YELLOW',
    color: 'bg-yellow-400',
    textColor: 'text-yellow-400'
  },
  green: { 
    title: 'GREEN BELT', 
    desc: 'Fluid movement and combinations.', 
    stages: ['MAE-GERI', 'HEIAN NIDAN'], 
    stroke: 'GREEN',
    color: 'bg-green-600',
    textColor: 'text-green-600'
  },
  blue: { 
    title: 'BLUE BELT', 
    desc: 'Advanced timing and distance.', 
    stages: ['MAWASHI-GERI', 'HEIAN SANDAN'], 
    stroke: 'BLUE',
    color: 'bg-blue-600',
    textColor: 'text-blue-600'
  },
  brown: { 
    title: 'BROWN BELT', 
    desc: 'Refining every single detail.', 
    stages: ['KANKU DAI', 'KUMITE DRILLS'], 
    stroke: 'BROWN',
    color: 'bg-amber-900',
    textColor: 'text-amber-900'
  },
  black: { 
    title: 'BLACK BELT', 
    desc: 'A new beginning of mastery.', 
    stages: ['MASTER KATAS', 'ZEN SPIRIT'], 
    stroke: 'BLACK',
    color: 'bg-black border border-gray-600',
    textColor: 'text-white'
  }
};

const BeltJourney: React.FC = () => {
  const [activeBelt, setActiveBelt] = useState<BeltColor>('white');
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="belt-journey" className="py-24 md:py-32 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-6xl md:text-8xl italic uppercase mb-2">
            THE BELT <span className="text-energy italic">JOURNEY</span>
          </h2>
          <div className="h-1.5 w-24 bg-energy mx-auto mb-4"></div>
          <p className="text-gray-500 tracking-[0.4em] uppercase text-xs">Path from White to Black</p>
        </div>

        {/* BELT SELECTOR */}
        <div className="flex overflow-x-auto gap-4 pb-8 mb-12 no-scrollbar snap-x">
          {(Object.keys(beltInfo) as BeltColor[]).map((belt) => (
            <div 
              key={belt}
              onClick={() => setActiveBelt(belt)}
              className={`
                min-w-[140px] flex-1 border-2 bg-black p-6 text-center cursor-pointer transition-all duration-300 snap-center
                ${activeBelt === belt 
                  ? 'border-energy transform -translate-y-2 shadow-[0_10px_30px_rgba(255,107,53,0.3)]' 
                  : 'border-white/10 hover:border-white/30'
                }
              `}
            >
              <div className={`w-full h-3 mb-4 ${beltInfo[belt].color}`}></div>
              <span className={`font-display text-xl uppercase tracking-widest ${beltInfo[belt].textColor}`}>
                {belt}
              </span>
            </div>
          ))}
        </div>

        {/* BELT CONTENT */}
        <div className="bg-black border-l-8 border-energy p-8 md:p-16 relative overflow-hidden transition-all duration-500 min-h-[400px] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 relative z-10 w-full animate-in fade-in duration-500 key={activeBelt}">
            <div>
              <h3 className={`font-display text-5xl md:text-7xl italic uppercase mb-4 ${activeBelt === 'black' ? 'text-white' : 'text-energy'}`}>
                {beltInfo[activeBelt].title}
              </h3>
              <p className="text-gray-400 text-lg mb-8 italic border-l-4 border-gray-700 pl-6">
                "{beltInfo[activeBelt].desc}"
              </p>
              <div className="space-y-4">
                {beltInfo[activeBelt].stages.map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-xl font-display text-white">
                    <span className="text-energy font-bold">0{idx + 1}</span> {stage}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center opacity-10 italic font-display text-9xl uppercase select-none text-white">
              OSU!
            </div>
          </div>
          
          {/* Background Decorative Stroke Text */}
          <div className="absolute -top-10 -left-10 font-display text-[150px] md:text-[250px] text-stroke opacity-5 pointer-events-none uppercase">
            {beltInfo[activeBelt].stroke}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeltJourney;
