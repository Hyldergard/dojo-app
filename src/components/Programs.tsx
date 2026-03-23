/**
 * Programs Component - PONDSEL DOJO
 * 
 * Section program dengan dynamic cards, gradient backgrounds,
 * dan sinkronisasi detail sesuai Opsi 04.
 */

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProgramCardProps {
  ageRange: string;
  title: string;
  description: string;
  schedule: string;
  time: string;
  gradient: string;
  icon: string;
  textColor?: 'white' | 'black';
  hasBorder?: boolean;
  delay?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  ageRange, 
  title, 
  description, 
  schedule, 
  time, 
  gradient,
  icon,
  textColor = 'white',
  hasBorder = false,
  delay = '',
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden rounded-2xl ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      } ${delay}`}
    >
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{ background: gradient }}
      />
      
      {/* Content */}
      <div className={`relative p-10 h-full flex flex-col justify-between min-h-[400px] ${hasBorder ? 'border-2 border-white/10' : ''}`}>
        <div>
          <div className={`${textColor === 'black' ? 'bg-black/10' : 'bg-black/20'} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl`}>
            {icon}
          </div>
          <h3 className={`text-4xl font-display mb-2 ${textColor === 'black' ? 'text-black' : 'text-white'}`}>
            {title}
          </h3>
          <p className={`font-bold mb-4 ${textColor === 'black' ? 'text-black/80' : 'text-white/90'}`}>
            {ageRange}
          </p>
          <p className={`leading-relaxed mb-6 ${textColor === 'black' ? 'text-black/70' : 'text-white/80'}`}>
            {description}
          </p>
        </div>
        
        <div className={`flex items-center justify-between border-t pt-6 ${textColor === 'black' ? 'border-black/10' : 'border-white/20'}`}>
          <span className={`font-bold uppercase tracking-tighter ${textColor === 'black' ? 'text-black' : 'text-white'}`}>
            {schedule}
          </span>
          <span className={`px-4 py-1 rounded-full text-xs font-bold ${
            textColor === 'black' 
              ? 'bg-black/10 text-black' 
              : 'bg-black/30 text-white'
          }`}>
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

interface ProgramsProps {
  onOpenModal: () => void;
}

const Programs: React.FC<ProgramsProps> = ({ onOpenModal }) => {
  const [refHeader, isHeaderVisible] = useScrollReveal({ threshold: 0.2 });

  const programs = [
    {
      ageRange: 'Usia 5-12 Tahun',
      title: 'KIDS FIGHTER',
      description: 'Belajar dasar karate dengan cara seru! Fokus pada disiplin dan kepercayaan diri.',
      schedule: 'Senin & Rabu',
      time: '16:00 WIB',
      gradient: 'linear-gradient(to bottom, #ff6b35, #e55a2b)',
      icon: '👶',
      textColor: 'white' as const,
      hasBorder: false,
      delay: 'delay-100',
    },
    {
      ageRange: 'Usia 13-17 Tahun',
      title: 'TEEN WARRIOR',
      description: 'Latihan lebih intensif! Persiapan untuk kompetisi dan grading kenaikan sabuk.',
      schedule: 'Selasa & Kamis',
      time: '17:00 WIB',
      gradient: 'linear-gradient(to bottom, #ffcc00, #ca8a04)',
      icon: '🔥',
      textColor: 'black' as const,
      hasBorder: false,
      delay: 'delay-200',
    },
    {
      ageRange: '18+ Tahun',
      title: 'ADULT CHAMP',
      description: 'Latihan komprehensif dari teknik dasar hingga aplikasi kumite. Pemula sampai sabuk hitam!',
      schedule: 'Senin - Jumat',
      time: '19:00 WIB',
      gradient: 'linear-gradient(to bottom, #374151, #111827)',
      icon: '💪',
      textColor: 'white' as const,
      hasBorder: true,
      delay: 'delay-300',
    },
  ];

  return (
    <section id="program" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={refHeader as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-white/5 pb-8 ${
            isHeaderVisible ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          <div>
            <p className="text-energy font-bold uppercase tracking-widest mb-2">Program Latihan</p>
            <h2 className="font-display text-6xl text-white">PILIH LEVEL KAMU!</h2>
          </div>
          {/* Button Added (Option 1) */}
          <button 
            onClick={onOpenModal}
            className="mt-4 md:mt-0 border-2 border-energy text-energy px-8 py-4 font-bold uppercase tracking-widest hover:bg-energy hover:text-black transition flex items-center gap-2"
          >
            Lihat Semua <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
