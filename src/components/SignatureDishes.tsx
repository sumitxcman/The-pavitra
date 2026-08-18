'use client';

import React from 'react';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, Utensils, ArrowRight } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  // Feature 6 iconic dishes to fill 2 full rows on desktop
  const signatureNames = [
    'Dal Makhani',
    'Corn Cheese Pizza',
    'Paneer Butter Masala',
    'Paneer Tikka',
    'Tandoori Grill Platter',
    'Pavitra Luxury Royal Thali',
  ];

  const signatureItems = MENU_ITEMS.filter((item) => signatureNames.includes(item.name));

  const handleScrollToMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      const navHeight = 90;
      const elementPosition = menuEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-[#F8F3E7] text-[#0B241B] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-4 py-1.5 rounded-full inline-block mb-3">
            CHEF'S HANDPICKED SPECIALTIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#12372A] tracking-tight">
            Our Signature Favourites
          </h2>
          <p className="mt-3 text-base text-[#0B241B]/75 max-w-xl mx-auto font-sans font-light">
            Indulge in our most celebrated vegetarian creations, loved by hundreds of guests across Rohini.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E9DFC8] shadow-lg hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* 100% Veg Badge */}
                <div className="absolute top-4 left-4 bg-[#12372A]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/50 flex items-center space-x-1.5 text-xs text-[#F8F3E7]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-[10px] tracking-wider uppercase text-[#D4AF37]">
                    100% PURE VEG
                  </span>
                </div>

                {/* Chef Special Badge */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0B241B] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>SIGNATURE</span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 bg-[#0B241B]/90 backdrop-blur-md text-[#D4AF37] font-serif text-lg font-bold px-4 py-1 rounded-md border border-[#D4AF37]/40 shadow-lg">
                  ₹{item.price}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#12372A] group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#0B241B]/80 leading-relaxed line-clamp-2 font-sans font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E9DFC8] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#12372A] font-semibold flex items-center">
                    <Utensils className="w-3.5 h-3.5 mr-1.5 text-[#D4AF37]" />
                    {item.category}
                  </span>
                  <button
                    onClick={handleScrollToMenu}
                    className="text-xs uppercase tracking-widest font-bold text-[#12372A] hover:text-[#D4AF37] flex items-center space-x-1 transition-colors"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleScrollToMenu}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#12372A] hover:bg-[#0B241B] text-[#F8F3E7] font-bold text-xs uppercase tracking-widest rounded-sm border border-[#D4AF37] shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 group"
          >
            <span>View Full Menu & Prices</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
