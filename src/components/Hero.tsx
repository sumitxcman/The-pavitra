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
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-[#F8F4EC]">
      
      {/* Real Dining Hall Background Image (Clear, Warm & Rich) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pavitra-main-hall.png"
          alt="The Pavitra Real Restaurant Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.92] contrast-105 transform transition-transform duration-10000 ease-out"
        />
        {/* Subtle, warm vignette overlay - NOT washed out */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EC] via-[#F8F4EC]/50 to-[#F8F4EC]/30" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center text-[#111113] w-full flex flex-col items-center">
        
        {/* Badges Bar */}
        <div className="inline-flex items-center space-x-2 bg-[#FFFFFF]/95 border border-[#D4AF37] px-4 py-1.5 rounded-full mb-4 shadow-md backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-[#B38F24]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B38F24]">
            100% PURE VEGETARIAN
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-[#111113] leading-[1.05] drop-shadow-sm">
          THE PAVITRA
        </h1>
        
        {/* Caption */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#27272A] font-serif italic max-w-xl mx-auto font-semibold">
          Metro Walk Mall, Rohini — Pure Flavours & Luxury Ambience
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md mx-auto">
          <button
            onClick={handleScrollToReserve}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-xl flex items-center justify-center space-x-2 border border-[#FFFFFF]/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#D4AF37] bg-[#FFFFFF]/95 hover:bg-[#F5F3EF] text-[#111113] font-bold text-xs uppercase tracking-widest rounded-md transition-all backdrop-blur-md flex items-center justify-center space-x-2 shadow-md"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#B38F24]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Rating Pill */}
        <div className="mt-8 inline-flex items-center space-x-2.5 bg-[#FFFFFF]/95 border border-[#D4AF37] px-4 py-2 rounded-full backdrop-blur-md shadow-md">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#111113]">4.3 / 5</span>
          <span className="text-[11px] text-[#3F3F46] font-semibold">| 434 Google Reviews</span>
        </div>

      </div>
    </section>
  );
};
