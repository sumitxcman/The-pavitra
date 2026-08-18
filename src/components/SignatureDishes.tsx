'use client';

import React from 'react';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, ShoppingBag } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
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
      const navHeight = 70;
      const elementPosition = menuEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6] text-[#111113] relative border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 inline-block mb-3 shadow-sm">
            CHEF'S HANDPICKED SPECIALTIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111113] tracking-tight">
            Our Signature Favourites
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-md mx-auto font-sans font-light">
            Indulge in our most celebrated vegetarian creations.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Badge */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Pure Veg Badge */}
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37] flex items-center space-x-1.5 text-xs shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="font-bold text-[9px] tracking-wider uppercase text-[#B38F24]">
                    100% PURE VEG
                  </span>
                </div>

                {/* Chef Special Badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#FFFFFF] font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>SIGNATURE</span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-[#FFFFFF]/95 backdrop-blur-md text-[#B38F24] font-serif text-lg font-bold px-3.5 py-0.5 rounded-md border border-[#D4AF37] shadow-lg">
                  ₹{item.price}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111113] group-hover:text-[#B38F24] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed line-clamp-2 font-sans font-light mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F3EF] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#B38F24] font-bold">
                    {item.category}
                  </span>
                  <button
                    onClick={handleScrollToMenu}
                    className="text-xs uppercase tracking-wider text-[#111113] hover:text-[#B38F24] font-bold flex items-center transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" />
                    <span>View in Menu</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
