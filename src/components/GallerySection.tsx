'use client';

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { GalleryItem } from '@/types';
import { Lightbox } from './Lightbox';
import { Eye, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Food', 'Ambience', 'Dining', 'Special Occasions'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#050507] text-[#FFFFFF] relative border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#121215] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block mb-3">
            PHOTO GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight">
            The Pavitra Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F4EFE6]/80 max-w-md mx-auto font-sans font-light">
            Real food platters, pink marble dining hall, and memorable event moments.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto space-x-2 pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#050507] shadow-lg scale-105'
                  : 'bg-[#121215] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#121215] h-72 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-[#050507]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-[#FFFFFF] mt-1">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center text-xs font-semibold text-[#D4AF37]">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
};
