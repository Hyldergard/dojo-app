/**
 * Achievements Component - PONDSEL DOJO
 * 
 * Section prestasi dengan style bold dan energi
 * Dengan scroll reveal animation
 */

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatItemProps {
  value: string;
  label: string;
  delay: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-black/10 rounded-xl p-6 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      } ${delay}`}
    >
      <p className="text-5xl font-display text-black">{value}</p>
      <p className="text-black/70 font-semibold">{label}</p>
    </div>
  );
};

const Achievements: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Medali Emas', delay: 'delay-100' },
    { value: '40+', label: 'Medali Perak', delay: 'delay-200' },
    { value: '35+', label: 'Medali Perunggu', delay: 'delay-300' },
    { value: '5x', label: 'Juara Umum', delay: 'delay-400' },
  ];

  return (
    <section id="prestasi" className="py-24 px-4 bg-energy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-black/60 font-bold uppercase tracking-widest mb-2">Prestasi Kami</p>
          <h2 className="font-display text-6xl text-black">#PONDSELCHAMPIONS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
