import React, { useState, useEffect } from 'react';

interface TopBarProps {
  onOpenModal: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onOpenModal }) => {
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      // Simulasi hitung mundur ke jam latihan berikutnya (misal: setiap jam genap)
      const nextEvenHour = new Date(now);
      nextEvenHour.setHours(now.getHours() + (now.getHours() % 2 === 0 ? 2 : 1), 0, 0, 0);
      
      const diff = nextEvenHour.getTime() - now.getTime();
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-energy h-14 fixed top-0 w-full z-[60] flex items-center px-4 md:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3 w-full relative z-10">
        
        {/* Countdown */}
        <div className="flex items-center gap-2 md:gap-4">
          <span className="bg-black text-white px-2 md:px-3 py-0.5 font-display text-sm md:text-base italic skew-x-[-12deg] hidden sm:block">
            NEXT CLASS IN:
          </span>
          <span className="sm:hidden bg-black text-white px-2 py-0.5 font-display text-xs italic skew-x-[-12deg]">
            NEXT:
          </span>
          <div className="flex gap-2 font-display text-xl md:text-2xl italic text-black min-w-[80px]">
            {timeLeft}
          </div>
        </div>

        {/* Slot Tracker & Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex flex-col items-end hidden xs:flex">
            <span className="text-[9px] font-bold text-black uppercase tracking-widest">SLOT TERSEDIA</span>
            <div className="h-1.5 w-24 md:w-32 bg-black/20 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-black w-[40%] animate-pulse"></div>
            </div>
          </div>
          <button 
            onClick={onOpenModal}
            className="bg-black text-energy font-display text-base md:text-lg px-4 md:px-6 py-1 hover:bg-gray-900 transition-all uppercase tracking-widest whitespace-nowrap"
          >
            DAFTAR <span className="hidden sm:inline">SEKARANG</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
