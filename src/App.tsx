/**
 * DOJO-APP - Main App Component
 * 
 * PONDSEL DOJO Landing Page - Bold & Dynamic Theme
 * Konsep: Energik, powerful, menggunakan warna-warna kuat dan layout asimetris
 * Warna: Orange/Red (energy) + Black + Yellow (contrast)
 * Target: Anak muda, remaja, yang suka energi dan action
 * 
 * @author Halvis Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import BeltJourney from './components/BeltJourney';
import SenseiShowcase from './components/SenseiShowcase';
import Achievements from './components/Achievements';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

/**
 * App Component
 * Root component yang merender landing page PONDSEL DOJO
 * dengan style Bold & Dynamic
 */
function App(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans antialiased bg-gray-900 text-white overflow-x-hidden pt-14">
      {/* Top Bar (Countdown) */}
      <TopBar onOpenModal={openModal} />

      {/* Navigation */}
      <Navbar onOpenModal={openModal} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenModal={openModal} />
        
        {/* Features Section */}
        <Features />
        
        {/* Programs Section */}
        <Programs onOpenModal={openModal} />
        
        {/* Belt Journey Section (New) */}
        <BeltJourney />

        {/* Sensei Showcase Section (New) */}
        <SenseiShowcase />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Call to Action Section */}
        <CTA onOpenModal={openModal} />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Trial Modal */}
      <TrialModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
