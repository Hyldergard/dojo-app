/**
 * Features Component - PONDSEL DOJO
 * 
 * Section features dengan card style bold dan border accent
 * Sinkronisasi detail sesuai Opsi 04.
 */

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  iconBg: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, borderColor, iconBg, delay }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`p-10 rounded-xl bg-gray-800 border-b-4 ${borderColor} hover:transform hover:-translate-y-2 transition duration-500 shadow-xl ${
        isVisible ? 'animate-reveal-up' : 'opacity-0'
      } ${delay}`}
    >
      <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-8 text-3xl shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-3xl font-display text-white mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: '🥊',
      title: 'Latihan INTENS!',
      description: 'No pain, no gain! Latihan keras yang bikin kamu lebih kuat secara fisik dan mental setiap hari.',
      borderColor: 'border-energy',
      iconBg: 'bg-energy',
      delay: 'delay-100',
    },
    {
      icon: '🏆',
      title: 'Juara BERKUALITAS!',
      description: 'Puluhan medali dan prestasi di berbagai kompetisi bergengsi. Kita bukan sekadar latihan!',
      borderColor: 'border-power',
      iconBg: 'bg-power text-black',
      delay: 'delay-200',
    },
    {
      icon: '⚡',
      title: 'Komunitas SOLID!',
      description: 'Satu tim, satu jiwa! Dukungan penuh dari instruktur dan teman-teman sesama fighter.',
      borderColor: 'border-white',
      iconBg: 'bg-white text-black',
      delay: 'delay-300',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-energy/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <p className="text-energy font-bold uppercase tracking-[0.3em] mb-4 text-sm">Kenapa PONDSEL?</p>
          <h2 className="font-display text-6xl md:text-7xl text-white tracking-wider">KITA BEDA!</h2>
          <div className="h-1.5 w-24 bg-energy mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
