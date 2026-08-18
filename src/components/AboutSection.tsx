'use client';

import React from 'react';
import { Award, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#050507] text-[#FFFFFF] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#121215] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block mb-3">
            PURE VEGETARIAN DINING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight">
            A Celebration of Pure Flavours
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F4EFE6]/80 max-w-lg mx-auto font-sans font-light">
            Metro Walk Mall, Sector 10, Rohini's most loved pure vegetarian culinary destination.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Unique Wide Entrance Gate & Stained Glass Art Hall Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 group">
              <img
                src="/images/pavitra-wide-entrance.png"
                alt="The Pavitra Wide Storefront Entrance"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                <p className="font-serif italic text-sm sm:text-base text-[#F4EFE6]">
                  "Purity in every ingredient, perfection on every platter."
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Image: Unique Stained Glass Art Hall */}
            <div className="absolute -bottom-6 -right-4 w-44 sm:w-60 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl hidden sm:block z-20 group">
              <img
                src="/images/cultural-art-hall.png"
                alt="Stained Glass Art Hall at The Pavitra"
                className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Key Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                <ShieldCheck className="w-7 h-7 text-[#D4AF37] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#FFFFFF]">100% Pure Veg</h3>
                <p className="text-xs text-[#F4EFE6]/80 font-light mt-1">Zero non-veg & zero cross-contamination.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                <Heart className="w-7 h-7 text-[#D4AF37] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#FFFFFF]">Family Dining</h3>
                <p className="text-xs text-[#F4EFE6]/80 font-light mt-1">Warm pink marble lounge for family celebrations.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                <Award className="w-7 h-7 text-[#D4AF37] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#FFFFFF]">4.3 Google Rating</h3>
                <p className="text-xs text-[#F4EFE6]/80 font-light mt-1">Loved by 434 verified guest reviews.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#D4AF37] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#FFFFFF]">Jain Options</h3>
                <p className="text-xs text-[#F4EFE6]/80 font-light mt-1">No onion & garlic prepared on request.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
