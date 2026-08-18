'use client';

import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menuData';
import { MenuCategory, MenuItem } from '@/types';
import { Search, Sparkles, ShoppingBag, Leaf, Check } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (itemId: string) => {
    setAddedItems((prev) => ({ ...prev, [itemId]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [itemId]: false }));
    }, 2000);
  };

  return (
    <section id="menu" className="py-24 bg-[#0B241B] text-[#F8F3E7] relative min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-2 block">
            THE PAVITRA CULINARY SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F3E7] tracking-tight">
            Our Fine Dining Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#E9DFC8]/80 max-w-xl mx-auto font-sans font-light">
            100% Pure Vegetarian Delicacies Crafted with Traditional Recipes & Premium Ingredients.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="mb-10 space-y-6">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search dishes (e.g. Dal Makhani, Paneer Tikka, Naan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#12372A] border border-[#D4AF37]/40 rounded-full text-sm text-[#F8F3E7] placeholder-[#E9DFC8]/50 focus:outline-none focus:border-[#D4AF37] transition-all shadow-inner"
            />
            <Search className="w-5 h-5 text-[#D4AF37] absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Category Tabs Scroll Bar */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 pt-2 no-scrollbar gap-2 px-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === 'All'
                  ? 'bg-[#D4AF37] text-[#0B241B] shadow-lg scale-105'
                  : 'bg-[#12372A] text-[#E9DFC8] hover:bg-[#12372A]/80 border border-[#D4AF37]/30'
              }`}
            >
              All Categories ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#D4AF37] text-[#0B241B] shadow-lg scale-105'
                      : 'bg-[#12372A] text-[#E9DFC8] hover:bg-[#12372A]/80 border border-[#D4AF37]/30'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#12372A]/90 rounded-xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12372A] via-transparent to-transparent opacity-80" />

                  {/* Veg Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B241B]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/50 flex items-center space-x-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>PURE VEG</span>
                  </div>

                  {/* Popular/Chef Special Tag */}
                  {item.isChefSpecial && (
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0B241B] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>CHEF SPECIAL</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-serif text-lg font-bold text-[#F8F3E7] group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#D4AF37] ml-2 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#E9DFC8]/80 leading-relaxed font-sans font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 mt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#E9DFC8]/60 font-medium">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleQuickAdd(item.id)}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        addedItems[item.id]
                          ? 'bg-emerald-600 text-[#FFFFFF]'
                          : 'bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B]'
                      }`}
                    >
                      {addedItems[item.id] ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Order / Add</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#12372A]/50 rounded-xl border border-[#D4AF37]/20">
            <p className="text-lg text-[#E9DFC8] font-serif">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-[#D4AF37] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Note */}
        <div className="mt-12 text-center text-xs text-[#E9DFC8]/60 max-w-xl mx-auto">
          * Taxes applicable as per government norms. Menu selections and prices subject to availability and updates.
        </div>

      </div>
    </section>
  );
};
