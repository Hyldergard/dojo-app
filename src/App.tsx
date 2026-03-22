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

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Achievements from './components/Achievements';
import CTA from './components/CTA';
import Footer from './components/Footer';

/**
 * App Component
 * Root component yang merender landing page PONDSEL DOJO
 * dengan style Bold & Dynamic
 */
function App(): React.ReactElement {
  return (
    <div className="font-sans antialiased bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Programs Section */}
        <Programs />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Call to Action Section */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
