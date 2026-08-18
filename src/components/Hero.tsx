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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 overflow-hidden bg-[#050507]">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pavitra-main-hall.png"
          alt="The Pavitra Real Restaurant Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.3] contrast-110 transform transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/75 to-[#050507]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050507]/40 to-[#050507]/90" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center text-[#FFFFFF] w-full flex flex-col items-center">
        
        {/* TOP MOBILE & DESKTOP FEATURED PHOTO COLLAGE CARD */}
        <div className="w-full max-w-xl mx-auto mb-6 sm:mb-8 relative z-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-[#121215] p-1">
            
            {/* Storefront Entrance Main Image */}
            <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden">
              <img
                src="/images/pavitra-entrance.png"
                alt="The Pavitra Gold Glowing Storefront Entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-transparent to-transparent" />
              
              {/* Quote text overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="font-serif italic text-xs sm:text-sm text-[#F4EFE6] drop-shadow-md">
                  "Purity in every ingredient, perfection on every platter."
                </p>
              </div>
            </div>

            {/* Overlapping Pink Lounge Photo */}
            <div className="absolute -bottom-3 -right-3 w-36 sm:w-48 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
              <img
                src="/images/pink-hall-wide.png"
                alt="Pink Dining Lounge at The Pavitra"
                className="w-full h-24 sm:h-32 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Badges Bar */}
        <div className="inline-flex items-center space-x-2 bg-[#121215]/90 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full mb-4 shadow-xl backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            100% PURE VEGETARIAN
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#FFFFFF] leading-[1.05] drop-shadow-2xl">
          THE PAVITRA
        </h1>
        
        {/* Caption */}
        <p className="mt-2 text-xs sm:text-base md:text-lg text-[#F4EFE6]/90 font-serif italic max-w-xl mx-auto">
          Metro Walk Mall, Rohini — Pure Flavours & Luxury Ambience
        </p>

        {/* Action CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
          <button
            onClick={handleScrollToReserve}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#050507] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-xl flex items-center justify-center space-x-2 border border-[#FFFFFF]/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto px-7 py-3 border border-[#D4AF37]/60 hover:border-[#D4AF37] bg-[#121215]/90 hover:bg-[#1C1C21] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all backdrop-blur-md flex items-center justify-center space-x-2"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Rating Pill */}
        <div className="mt-6 inline-flex items-center space-x-2.5 bg-[#121215]/90 border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#FFFFFF]">4.3 / 5</span>
          <span className="text-[11px] text-[#F4EFE6]/70 font-light">| 434 Google Reviews</span>
        </div>

      </div>
    </section>
  );
};
