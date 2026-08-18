'use client';

import React from 'react';
import { Leaf, Sparkles, Users, ChefHat, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: '100% Vegetarian',
      desc: 'Completely vegetarian dining crafted with immaculate purity and devotion.',
      icon: Leaf,
    },
    {
      title: 'Premium Ambience',
      desc: 'Refined decor, soothing lighting and comfortable seating for every occasion.',
      icon: Sparkles,
    },
    {
      title: 'Family Friendly',
      desc: 'Warm and welcoming environment designed for memorable family gatherings.',
      icon: Users,
    },
    {
      title: 'Freshly Prepared',
      desc: 'Made to order using handpicked farm-fresh ingredients and rich authentic spices.',
      icon: ChefHat,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F3E7] text-[#0B241B] relative overflow-hidden">
      
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E9DFC8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header Subtitle */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-4 py-1.5 rounded-full inline-block mb-3">
            OUR STORY & HERITAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#12372A] tracking-tight">
            A Celebration of Pure Vegetarian Cuisine
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFFFFF]">
              <img
                src="/images/pavitra-entrance.png"
                alt="The Pavitra Gold Glowing Storefront Entrance"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F3E7]">
                <p className="font-serif italic text-lg text-[#E9DFC8]">
                  "Purity in every ingredient, perfection on every platter."
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-8 -right-6 w-48 sm:w-64 rounded-lg overflow-hidden border-4 border-[#D4AF37] shadow-xl hidden sm:block z-20">
              <img
                src="/images/pink-hall-wide.png"
                alt="Pink Dining Lounge at The Pavitra"
                className="w-full h-44 object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -left-4 bg-[#12372A] text-[#F8F3E7] p-5 rounded-lg border border-[#D4AF37]/40 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-serif font-bold text-[#D4AF37]">4.3★</span>
                <div className="text-xs">
                  <p className="font-bold text-[#F8F3E7]">Top Rated</p>
                  <p className="text-[#E9DFC8]">in Rohini, Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A] leading-snug">
              Welcome to <span className="text-[#D4AF37]">The Pavitra</span>, where tradition meets contemporary culinary craftsmanship.
            </h3>

            <p className="text-base text-[#0B241B]/80 leading-relaxed font-sans font-normal">
              Located conveniently in <strong className="text-[#12372A]">Metro Walk Mall, Rohini</strong>, The Pavitra is dedicated to celebrating the rich heritage of authentic Indian vegetarian dining. We believe that pure vegetarian food is an art form—one that combines farm-fresh ingredients, fragrant spices, and timeless recipes.
            </p>

            <p className="text-base text-[#0B241B]/80 leading-relaxed font-sans font-normal">
              Whether you are enjoying a casual lunch with colleagues, a lavish dinner with family, or hosting a special celebration, our refined ambience and attentive hospitality ensure an unforgettable dining experience.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-md bg-[#FFFFFF] border border-[#E9DFC8] shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-3"
                  >
                    <div className="p-2.5 rounded-full bg-[#12372A] text-[#D4AF37] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#12372A]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#0B241B]/70 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Checklist */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#12372A]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Zero Non-Veg Allowed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Generous Portion Sizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Hygienic Kitchen Standard</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
