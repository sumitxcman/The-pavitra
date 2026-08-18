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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 overflow-hidden bg-[#FAF9F6]">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pavitra-main-hall.png"
          alt="The Pavitra Real Restaurant Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.9] contrast-105 transform transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 to-[#FAF9F6]/70" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center text-[#111113] w-full flex flex-col items-center">
        
        {/* TOP MOBILE SINGLE BIG FEATURED PHOTO CARD (MOBILE PHONE VIEW ONLY) */}
        <div className="w-full max-w-xl mx-auto mb-6 sm:mb-8 relative z-20 block lg:hidden">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-[#FFFFFF] p-1.5">
            
            {/* Storefront Entrance Single Big Image */}
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/pavitra-entrance.png"
                alt="The Pavitra Gold Glowing Storefront Entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/85 via-transparent to-transparent" />
              
              {/* Quote text overlay */}
              <div className="absolute bottom-3.5 left-4 right-4 text-left">
                <p className="font-serif italic text-xs sm:text-sm text-[#FFFFFF] drop-shadow-lg font-medium">
                  "Purity in every ingredient, perfection on every platter."
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Badges Bar */}
        <div className="inline-flex items-center space-x-2 bg-[#FFFFFF]/90 border border-[#D4AF37] px-4 py-1.5 rounded-full mb-4 shadow-md backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-[#B38F24]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B38F24]">
            100% PURE VEGETARIAN
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#111113] leading-[1.05] drop-shadow-sm">
          THE PAVITRA
        </h1>
        
        {/* Caption */}
        <p className="mt-2 text-xs sm:text-base md:text-lg text-[#3F3F46] font-serif italic max-w-xl mx-auto font-medium">
          Metro Walk Mall, Rohini — Pure Flavours & Luxury Ambience
        </p>

        {/* Action CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
          <button
            onClick={handleScrollToReserve}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-xl flex items-center justify-center space-x-2 border border-[#FFFFFF]/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto px-7 py-3 border border-[#D4AF37] bg-[#FFFFFF]/90 hover:bg-[#F5F3EF] text-[#111113] font-bold text-xs uppercase tracking-widest rounded-md transition-all backdrop-blur-md flex items-center justify-center space-x-2 shadow-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#B38F24]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Rating Pill */}
        <div className="mt-6 inline-flex items-center space-x-2.5 bg-[#FFFFFF]/90 border border-[#D4AF37] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#111113]">4.3 / 5</span>
          <span className="text-[11px] text-[#52525B] font-medium">| 434 Google Reviews</span>
        </div>

      </div>
    </section>
  );
};
