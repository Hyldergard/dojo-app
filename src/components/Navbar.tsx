/**
 * Navbar Component - PONDSEL DOJO
 * 
 * Bold navigation dengan mobile menu dan style Opsi 04.
 */

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Prestasi', href: '#prestasi' },
  ];

  return (
    <nav 
      className={`fixed top-14 w-full z-50 transition-all duration-300 border-b-4 ${
        scrolled ? 'bg-black/95 backdrop-blur py-2 border-energy' : 'bg-black/60 backdrop-blur-sm py-4 border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-display text-4xl text-energy tracking-wider transition-transform group-hover:scale-110">
              PONDSEL
            </span>
            <span className="ml-3 bg-energy text-black px-3 py-1 text-xs font-bold transform -skew-x-12">
              DOJO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-white hover:text-energy transition font-bold text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenModal}
              className="ml-4 bg-energy text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-energy-light transition transform hover:scale-105 shadow-lg shadow-energy/20"
            >
              Join Now!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-energy focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center relative">
                <span className={`block w-6 h-1 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 absolute' : 'mb-1'}`}></span>
                <span className={`block w-6 h-1 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'}`}></span>
                <span className={`block w-6 h-1 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 absolute' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b-4 border-energy transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 text-xl font-display text-white hover:text-energy border-b border-white/5 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="block w-full mt-6 bg-energy text-black px-4 py-5 font-bold text-center uppercase tracking-widest shadow-lg"
          >
            Join Now!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
