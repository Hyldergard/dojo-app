/**
 * CTA Component - PONDSEL DOJO
 * 
 * Section CTA dengan zigzag pattern, bold typography,
 * dan sinkronisasi detail sesuai Opsi 04.
 */

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTA: React.FC = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      id="join" 
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      {/* Zigzag Pattern (Option 1) */}
      <div className="absolute inset-0 zigzag opacity-5"></div>
      
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative max-w-4xl mx-auto text-center ${
          isVisible ? 'animate-reveal-up' : 'opacity-0'
        }`}
      >
        <h2 className="font-display text-6xl md:text-8xl text-white mb-6">
          READY TO <span className="text-energy italic">FIGHT?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Trial class GRATIS! Gak perlu pengalaman, cukup bawa semangat dan kemauan untuk belajar!
        </p>
        
        <button className="bg-energy text-black px-16 py-6 font-bold text-xl uppercase tracking-wider hover:bg-energy-light transition transform hover:scale-110 shadow-2xl shadow-energy/50 border-2 border-transparent active:scale-95">
          DAFTAR SEKARANG!
        </button>
        
        {/* Additional decorative element */}
        <div className="mt-16 flex justify-center gap-8 opacity-20">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-white"></div>
          <div className="font-display text-white tracking-[1em]">OSS</div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
