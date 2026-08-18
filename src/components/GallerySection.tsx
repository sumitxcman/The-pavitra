'use client';

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { GalleryItem } from '@/types';
import { Lightbox } from './Lightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Ambience', 'Dining', 'Events', 'Special Occasions'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const currentItem =
    selectedItemIndex !== null && filteredItems[selectedItemIndex]
      ? filteredItems[selectedItemIndex]
      : null;

  return (
    <section id="gallery" className="py-24 bg-[#F8F3E7] text-[#0B241B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-4 py-1.5 rounded-full inline-block mb-3">
            VISUAL EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] tracking-tight">
            Our Gallery & Atmosphere
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0B241B]/75 max-w-xl mx-auto font-sans font-light">
            Take a visual tour of our culinary art, refined interiors, and joyful moments at The Pavitra.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#12372A] text-[#D4AF37] border border-[#D4AF37] shadow-md scale-105'
                  : 'bg-[#FFFFFF] text-[#0B241B]/80 hover:bg-[#E9DFC8] border border-[#E9DFC8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#0B241B] h-72 border border-[#E9DFC8]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B]/90 via-[#0B241B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F8F3E7] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-3 inline-flex items-center text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                  <Maximize2 className="w-4 h-4 mr-1.5" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Component */}
      <Lightbox
        item={currentItem}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
