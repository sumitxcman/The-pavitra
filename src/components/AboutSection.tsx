'use client';

import React from 'react';
import { Award, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#F8F4EC] text-[#111113] relative overflow-hidden border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37] inline-block mb-3 shadow-md">
            PURE VEGETARIAN DINING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111113] tracking-tight">
            A Celebration of Pure Flavours
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3F3F46] max-w-lg mx-auto font-sans font-medium">
            Metro Walk Mall, Sector 10, Rohini's most loved pure vegetarian culinary destination.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Photo & Highlights Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: High-Clarity Storefront Entrance Photo Showcase (Desktop View Showcase) */}
          <div className="lg:col-span-6 relative hidden lg:block">
            
            {/* Storefront Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-[#FFFFFF] p-1.5 group">
              <div className="relative h-[360px] sm:h-[420px] rounded-xl overflow-hidden">
                <img
                  src="/images/pavitra-entrance.png"
                  alt="The Pavitra Glowing Storefront Entrance"
                  className="w-full h-full object-cover filter contrast-[1.12] brightness-[1.04] saturate-[1.05] group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Dark to Transparent Gradient Overlay for Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/90 via-transparent to-transparent" />
                
                {/* Quote Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="font-serif italic text-sm sm:text-base text-[#FFFFFF] drop-shadow-md font-medium">
                    "Purity in every ingredient, perfection on every platter."
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image: Unique Pink Dining Lounge */}
            <div className="absolute -bottom-6 -right-4 w-44 sm:w-60 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl hidden sm:block z-20 group bg-[#FFFFFF] p-1">
              <img
                src="/images/pink-hall-wide.png"
                alt="Pink Dining Lounge at The Pavitra"
                className="w-full h-36 sm:h-44 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

          {/* Right Column: Key Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                <ShieldCheck className="w-7 h-7 text-[#B38F24] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#111113]">100% Pure Veg</h3>
                <p className="text-xs text-[#52525B] font-light mt-1">Zero non-veg & zero cross-contamination.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                <Heart className="w-7 h-7 text-[#B38F24] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#111113]">Family Dining</h3>
                <p className="text-xs text-[#52525B] font-light mt-1">Warm pink marble lounge for family celebrations.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                <Award className="w-7 h-7 text-[#B38F24] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#111113]">4.3 Google Rating</h3>
                <p className="text-xs text-[#52525B] font-light mt-1">Loved by 434 verified guest reviews.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                <CheckCircle2 className="w-7 h-7 text-[#B38F24] mb-2" />
                <h3 className="font-serif font-bold text-base text-[#111113]">Jain Options</h3>
                <p className="text-xs text-[#52525B] font-light mt-1">No onion & garlic prepared on request.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
