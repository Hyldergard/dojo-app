import React, { useEffect, useState } from 'react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    schedule: 'pagi'
  });

  // Handle closing modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Handle outside click to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Konfigurasi Nomor WhatsApp
    const adminPhone = "6285880998853";
    
    // Format Pesan
    const message = `Halo Sensei! OSU!%0A%0ASaya ingin mendaftar untuk *KARATE FREE TRIAL* di Dojo Pondsel.%0A%0A*Detail Pendaftar:*%0A- Nama: ${formData.name}%0A- No. WA: ${formData.whatsapp}%0A- Jadwal Pilih: ${formData.schedule.toUpperCase()}%0A%0AMohon konfirmasi jadwalnya. Terima kasih!`;
    
    // Redirect ke WhatsApp
    const waUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${message}`;
    
    alert('Mengalihkan Anda ke WhatsApp untuk finalisasi pendaftaran...');
    window.open(waUrl, '_blank');
    
    onClose();
    // Reset form
    setFormData({ name: '', whatsapp: '', schedule: 'pagi' });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#1f2937] w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-700 relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* LEFT SIDE: VISUAL & TITLE */}
          <div className="md:col-span-5 bg-gradient-to-br from-gray-900 to-black relative flex flex-col justify-end p-8 min-h-[200px] md:min-h-full overflow-hidden">
            {/* Background Icon Decor */}
            <div className="absolute -top-10 -left-10 opacity-10 rotate-12 select-none pointer-events-none">
                <span className="text-[180px] font-display text-energy">🥋</span>
            </div>

            <div className="relative z-10">
              <span className="bg-power text-black font-bold px-3 py-1 text-xs tracking-widest uppercase mb-2 inline-block skew-x-[-12deg]">
                <span className="skew-x-[12deg] block">FREE SESSION</span>
              </span>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-2">
                KARATE<br /><span className="text-energy italic">TRIAL</span>
              </h2>
              <p className="text-gray-400 text-xs italic tracking-wide uppercase">"OSU! Join our legacy."</p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="md:col-span-7 p-8 md:p-10 text-white">
            <div className="mb-8">
              <h3 className="font-display text-3xl mb-1 italic tracking-tight">DAFTAR SEKARANG</h3>
              <div className="h-1.5 w-16 bg-energy"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* INPUT NAMA */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">NAMA LENGKAP</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111827] border-b-2 border-gray-700 focus:border-energy p-3 outline-none transition-colors text-white placeholder-gray-600 font-medium"
                />
              </div>

              {/* INPUT WHATSAPP */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">WHATSAPP / NO. HP</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="0812xxxx"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-[#111827] border-b-2 border-gray-700 focus:border-energy p-3 outline-none transition-colors text-white placeholder-gray-600 font-medium"
                />
              </div>

              {/* PILIH JADWAL */}
              <div>
                <label className="block text-[10px] font-bold text-energy tracking-[0.2em] uppercase mb-4">PILIH JADWAL LATIHAN</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer group">
                    <input 
                      type="radio" 
                      name="schedule" 
                      value="pagi" 
                      className="hidden peer" 
                      checked={formData.schedule === 'pagi'}
                      onChange={() => setFormData({...formData, schedule: 'pagi'})}
                    />
                    <div className="bg-[#111827] p-3 text-center border-2 border-gray-700 peer-checked:border-energy peer-checked:bg-energy/10 transition-all group-hover:border-gray-500">
                      <span className="block font-display text-xl leading-none">PAGI</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-tighter">08:00 - 10:00</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input 
                      type="radio" 
                      name="schedule" 
                      value="sore" 
                      className="hidden peer"
                      checked={formData.schedule === 'sore'}
                      onChange={() => setFormData({...formData, schedule: 'sore'})}
                    />
                    <div className="bg-[#111827] p-3 text-center border-2 border-gray-700 peer-checked:border-energy peer-checked:bg-energy/10 transition-all group-hover:border-gray-500">
                      <span className="block font-display text-xl leading-none">SORE</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-tighter">16:00 - 18:00</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit" 
                className="w-full bg-energy hover:bg-energy-dark text-black font-display text-2xl py-4 tracking-widest transition-all flex items-center justify-center group shadow-xl shadow-energy/20"
              >
                AMBIL KELAS GRATIS!
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

        </div>
        
        {/* DECORATIVE STROKE TEXT */}
        <div className="absolute -bottom-10 -right-5 opacity-[0.03] pointer-events-none select-none">
          <span className="font-display text-[150px] -webkit-text-stroke-[2px] text-energy uppercase leading-none italic">OSU!</span>
        </div>
      </div>
    </div>
  );
};

export default TrialModal;
