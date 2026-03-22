/**
 * Footer Component - PONDSEL DOJO
 * 
 * Bold footer dengan style Opsi 04.
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t-4 border-energy py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center">
            <span className="font-display text-4xl text-energy tracking-wider">
              PONDSEL
            </span>
            <span className="ml-2 text-gray-500 font-bold tracking-widest uppercase">
              DOJO
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#about" className="hover:text-energy transition">Tentang</a>
            <a href="#program" className="hover:text-energy transition">Program</a>
            <a href="#prestasi" className="hover:text-energy transition">Prestasi</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            © 2025 PONDSEL DOJO • POWERED BY PASSION
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              Karate-Do • Discipline • Power
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
