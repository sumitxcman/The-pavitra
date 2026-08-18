'use client';

import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menuData';
import { MenuCategory, MenuItem } from '@/types';
import { Search, Sparkles, Flame, Check } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#0A0A0C] text-[#FFFFFF] relative border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#141417] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block mb-3">
            EXPLORE OUR DELICIOUS MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight">
            Pure Vegetarian Menu
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F4EFE6]/80 max-w-md mx-auto font-sans font-light">
            Starters, North Indian Curries, Tandoori Breads, Chinese & Beverages.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Search Input Box */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search dish name (e.g. Dal Makhani, Pizza)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#141417] border border-[#D4AF37]/40 rounded-full text-sm text-[#FFFFFF] placeholder-[#F4EFE6]/50 focus:outline-none focus:border-[#D4AF37] shadow-lg transition-colors"
          />
          <Search className="w-5 h-5 text-[#D4AF37] absolute left-4 top-3.5" />
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto space-x-2 pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0A0A0C] shadow-lg scale-105'
                : 'bg-[#141417] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/20'
            }`}
          >
            All Items
          </button>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0A0A0C] shadow-lg scale-105'
                  : 'bg-[#141417] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid (Image-First Cards) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#141417] rounded-xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Dish Photo */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-70" />

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#0A0A0C]/90 backdrop-blur-md text-[#D4AF37] font-serif text-base font-bold px-3 py-0.5 rounded border border-[#D4AF37]/50">
                    ₹{item.price}
                  </div>

                  {/* 100% Pure Veg Badge */}
                  <div className="absolute top-3 left-3 bg-[#0A0A0C]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-semibold text-[#D4AF37]">PURE VEG</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#F4EFE6]/75 leading-relaxed line-clamp-2 font-sans font-light mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#1C1C21] flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {item.category}
                    </span>
                    <a
                      href="#reservations"
                      className="text-[10px] uppercase font-bold text-[#FFFFFF] hover:text-[#D4AF37] transition-colors flex items-center"
                    >
                      <span>Order / Reserve</span>
                      <span className="ml-1 text-[#D4AF37]">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#F4EFE6]/70 font-sans">
            <p className="text-base">No dishes found matching your search query.</p>
          </div>
        )}

      </div>
    </section>
  );
};
