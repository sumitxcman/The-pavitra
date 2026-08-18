'use client';

import React from 'react';
import { MENU_ITEMS } from '@/data/menuData';
import { Sparkles, ShoppingBag, Crown, Star } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  const signatureNames = [
    'Pavitra Luxury Royal Thali',
    'Dal Makhani',
    'Corn Cheese Pizza',
    'Paneer Butter Masala',
    'Special Veg Dum Biryani',
    'Pavitra Sunset Special Mocktail',
  ];

  const signatureItems = MENU_ITEMS.filter((item) => signatureNames.includes(item.name))
    .sort((a, b) => signatureNames.indexOf(a.name) - signatureNames.indexOf(b.name));

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
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37] inline-block mb-3 shadow-md">
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
          {signatureItems.map((item) => {
            const isRoyalThali = item.name.includes('Royal Thali');

            return (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                  isRoyalThali
                    ? 'bg-[#FFFFFF] border-2 border-[#D4AF37] shadow-2xl ring-2 ring-[#D4AF37]/30 scale-[1.02]'
                    : 'bg-[#FFFFFF] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.03] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37] flex items-center space-x-1.5 text-xs shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="font-bold text-[9px] tracking-wider uppercase text-[#B38F24]">
                      100% PURE VEG
                    </span>
                  </div>

                  {/* Royal Crown Badge for Royal Thali */}
                  {isRoyalThali ? (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xl flex items-center space-x-1.5 border border-[#FFFFFF]">
                      <Crown className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>CROWN JEWEL FEAST</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#FFFFFF] font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>SIGNATURE</span>
                    </div>
                  )}

                  {/* Price Pill */}
                  <div className="absolute bottom-3 right-3 bg-[#FFFFFF]/95 backdrop-blur-md text-[#B38F24] font-serif text-lg font-bold px-4 py-1 rounded-md border border-[#D4AF37] shadow-lg">
                    ₹{item.price}
                  </div>
                </div>

                {/* Dish Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      {isRoyalThali && <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />}
                      <h3 className={`font-serif font-bold text-xl ${isRoyalThali ? 'text-[#B38F24]' : 'text-[#111113] group-hover:text-[#B38F24]'} transition-colors`}>
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-sans font-light mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F5F3EF] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#B38F24] font-extrabold">
                      {item.category}
                    </span>
                    <button
                      onClick={handleScrollToMenu}
                      className="text-xs uppercase tracking-wider text-[#111113] hover:text-[#B38F24] font-bold flex items-center transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" />
                      <span>Order / Reserve</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
