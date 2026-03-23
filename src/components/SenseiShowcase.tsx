import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SenseiShowcase: React.FC = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="sensei" className="py-24 md:py-32 bg-black diagonal-clip overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`flex flex-col md:flex-row items-end gap-6 mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex-1">
            <h2 className="font-display text-6xl md:text-8xl italic uppercase mb-2">
              THE <span className="text-energy">MASTERS</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Shotokan Karate Experts</p>
          </div>
          <div className="h-1 w-32 bg-energy mb-4 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* SENSEI PROFILE */}
          <div className="group relative bg-gray-900 border-l-4 border-energy p-10 overflow-hidden hover:bg-gray-800 transition-all duration-500">
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
              <div className="w-40 h-40 bg-gray-800 border-2 border-energy/30 rotate-3 group-hover:rotate-0 transition-all flex items-center justify-center text-6xl shadow-xl">
                🥋
              </div>
              <div>
                <span className="text-energy font-display text-2xl tracking-widest italic block mb-2">SENSEI HALVIS</span>
                <h3 className="font-display text-4xl mb-4 italic text-white">5TH DAN BLACK BELT</h3>
                <p className="text-gray-500 text-sm italic mb-6">"Karate is about perfection of character."</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <span className="bg-white/5 px-3 py-1 text-[10px] font-bold uppercase border border-white/10 tracking-widest text-white">
                    KATA MASTER
                  </span>
                  <span className="bg-white/5 px-3 py-1 text-[10px] font-bold uppercase border border-white/10 tracking-widest text-white">
                    KUMITE COACH
                  </span>
                </div>
              </div>
            </div>
            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 -right-10 font-display text-[100px] lg:text-[140px] text-stroke-energy opacity-5 uppercase group-hover:opacity-10 transition-opacity pointer-events-none">
              HALVIS
            </div>
          </div>
          
          {/* DOJO FACILITIES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-energy/5 border border-energy/10 p-8 flex flex-col justify-center text-center group cursor-pointer hover:bg-energy/10 transition-all duration-300">
              <span className="font-display text-4xl text-energy italic mb-2 block group-hover:scale-110 transition-transform">MATS</span>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Premium Tatami</p>
            </div>
            <div className="bg-power/5 border border-power/10 p-8 flex flex-col justify-center text-center group cursor-pointer hover:bg-power/10 transition-all duration-300">
              <span className="font-display text-4xl text-power italic mb-2 block group-hover:scale-110 transition-transform">ZEN</span>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Meditation Space</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 flex flex-col justify-center text-center group cursor-pointer hover:bg-white/10 transition-all duration-300 col-span-2">
              <span className="font-display text-4xl text-white italic mb-2 block group-hover:scale-110 transition-transform">GEAR</span>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Complete Training Equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenseiShowcase;
