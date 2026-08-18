'use client';

import React from 'react';
import { Star, ShieldCheck, ArrowRight, Utensils, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B241B]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pavitra-main-hall.png"
          alt="The Pavitra Real Restaurant Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-110 transform transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B] via-[#0B241B]/60 to-[#0B241B]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B241B]/30 to-[#0B241B]/80" />
      </div>

      {/* Decorative Gold Border Lines */}
      <div className="absolute top-28 left-8 right-8 bottom-8 pointer-events-none border border-[#D4AF37]/15 hidden md:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F8F3E7] pt-12">
        
        {/* Pure Vegetarian Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#12372A]/90 border border-[#D4AF37]/40 backdrop-blur-md mb-8 animate-fade-in shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
            100% PURE VEGETARIAN
          </span>
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.05em] text-[#F8F3E7] mb-6 drop-shadow-2xl leading-none">
          THE PAVITRA
        </h1>

        {/* Headline Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#E9DFC8] max-w-3xl mx-auto mb-6 leading-relaxed font-serif">
          Pure Vegetarian Dining, Crafted With Tradition
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#E9DFC8]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Experience thoughtfully prepared vegetarian cuisine, elegant ambience, and warm hospitality at <span className="text-[#D4AF37] font-medium">The Pavitra</span>, Metro Walk Mall, Rohini.
        </p>

        {/* Google Rating Display Badge */}
        <div className="inline-flex items-center justify-center space-x-3 px-6 py-2.5 rounded-sm bg-[#12372A]/80 border border-[#D4AF37]/30 mb-10 shadow-lg backdrop-blur-md">
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
            ))}
          </div>
          <div className="h-4 w-[1px] bg-[#D4AF37]/30" />
          <span className="text-xs sm:text-sm font-bold text-[#F8F3E7] tracking-wider">
            4.3 / 5 Rating
          </span>
          <span className="text-xs text-[#E9DFC8]/70 font-sans">
            (434 Google Reviews)
          </span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => handleScrollTo('#reservations')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-sm uppercase tracking-widest rounded-sm transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 group"
          >
            <Calendar className="w-4 h-4 mr-2.5 text-[#0B241B]" />
            Reserve a Table
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleScrollTo('#menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37] text-[#F8F3E7] hover:text-[#D4AF37] hover:bg-[#12372A]/60 font-bold text-sm uppercase tracking-widest rounded-sm transition-all duration-300 backdrop-blur-sm"
          >
            <Utensils className="w-4 h-4 mr-2.5 text-[#D4AF37]" />
            Explore Menu
          </button>
        </div>

      </div>

      {/* Decorative Bottom Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#E9DFC8]/60">
        <span className="text-[10px] uppercase tracking-widest mb-1 text-[#D4AF37]">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border border-[#D4AF37]/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
