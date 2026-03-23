/**
 * Hero Component - PONDSEL DOJO
 * 
 * Section hero dengan diagonal clip, text stroke, zigzag pattern, 
 * stats, dan floating badges sesuai Opsi 04.
 */

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative min-h-screen bg-black diagonal-clip pt-32 pb-40 overflow-hidden"
    >
      {/* Zigzag Background Pattern (Option 1) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 zigzag"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-energy"></div>
              <p className="text-energy font-bold uppercase tracking-widest text-sm">
                Dojo Karate Pondok Jati Selatan
              </p>
            </div>
            
            <h1 className="font-display text-7xl md:text-9xl leading-none mb-6">
              <span className="text-white">UNLEASH</span><br />
              <span className="text-energy">YOUR</span><br />
              <span className="text-stroke">POWER</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Latihan karate yang bikin kamu lebih kuat, percaya diri, dan siap hadapi tantangan!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onOpenModal}
                className="bg-energy text-black px-10 py-5 font-bold text-lg uppercase tracking-wide hover:bg-energy-light transition transform hover:scale-105 shadow-lg shadow-energy/30"
              >
                Mulai Sekarang!
              </button>
              <button className="border-2 border-white text-white px-10 py-5 font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-black transition">
                Lihat Jadwal
              </button>
            </div>
            
            {/* Stats section (Option 1) */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="border-l-4 border-energy pl-4">
                <p className="text-4xl font-display text-energy">15+</p>
                <p className="text-sm text-gray-400 uppercase">Years Strong</p>
              </div>
              <div className="border-l-4 border-power pl-4">
                <p className="text-4xl font-display text-power">500+</p>
                <p className="text-sm text-gray-400 uppercase">Fighters</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="text-4xl font-display text-white">50+</p>
                <p className="text-sm text-gray-400 uppercase">Trophies</p>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-reveal-up delay-200' : 'opacity-0'}`}>
            <div className="absolute -inset-4 bg-energy/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-lg overflow-hidden border-4 border-energy/30 transform rotate-3 hover:rotate-0 transition duration-500 shadow-2xl">
              {/* Image Placeholder */}
              <div className="h-[450px] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition duration-500">
                  <div className="w-24 h-24 bg-energy/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-energy/30">
                    <span className="text-4xl">🥋</span>
                  </div>
                  <span className="text-gray-500 text-sm font-display tracking-[0.3em] uppercase">Action Shot</span>
                </div>
              </div>
            </div>
            
            {/* Floating Badges (Option 1) */}
            <div className="absolute -top-6 -right-6 bg-power text-black px-6 py-3 font-bold text-sm transform rotate-12 shadow-xl border-2 border-black animate-bounce">
              🔥 HOT!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-energy text-black px-6 py-3 font-bold text-sm transform -rotate-6 shadow-xl border-2 border-black animate-pulse">
              💪 POWER UP!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
