'use client';

import React from 'react';
import { Star, Shield, ArrowRight, Calendar, UtensilsCrossed } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToReserve = () => {
    const resEl = document.querySelector('#reservations');
    if (resEl) {
      const navHeight = 70;
      const elementPosition = resEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      const navHeight = 70;
      const elementPosition = menuEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#0A0A0C]">
      
      {/* Real Interior Dining Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pavitra-main-hall.png"
          alt="The Pavitra Real Restaurant Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-110 transform transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-[#0A0A0C]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0C]/40 to-[#0A0A0C]/90" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center text-[#FFFFFF] w-full">
        
        {/* Badges Bar */}
        <div className="inline-flex items-center space-x-2 bg-[#141417]/90 border border-[#D4AF37]/40 px-3.5 sm:px-4 py-1.5 rounded-full mb-4 shadow-xl backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            100% PURE VEGETARIAN
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#FFFFFF] leading-[1.05] drop-shadow-2xl">
          THE PAVITRA
        </h1>
        
        {/* Short 1-Line Caption */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl text-[#F4EFE6]/90 font-serif italic max-w-2xl mx-auto">
          Metro Walk Mall, Rohini — Pure Flavours & Luxury Ambience
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
          <button
            onClick={handleScrollToReserve}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#0A0A0C] font-bold text-xs uppercase tracking-widest rounded-md transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 border border-[#FFFFFF]/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#D4AF37]/70 hover:border-[#D4AF37] bg-[#141417]/80 hover:bg-[#1C1C21] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all duration-300 backdrop-blur-md flex items-center justify-center space-x-2"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Rating Pill */}
        <div className="mt-8 inline-flex items-center space-x-3 bg-[#141417]/80 border border-[#D4AF37]/30 px-4 py-2 rounded-full backdrop-blur-md">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#FFFFFF]">4.3 / 5</span>
          <span className="text-xs text-[#E9DFC8]/70 font-light">| 434 Google Reviews</span>
        </div>

      </div>
    </section>
  );
};
