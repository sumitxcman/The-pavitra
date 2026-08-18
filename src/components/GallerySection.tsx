'use client';

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { GalleryItem } from '@/types';
import { Lightbox } from './Lightbox';
import { Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Food', 'Ambience', 'Dining', 'Special Occasions'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FAF9F6] text-[#111113] relative border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 inline-block mb-3 shadow-sm">
            PHOTO GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111113] tracking-tight">
            The Pavitra Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-md mx-auto font-sans font-light">
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
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#FFFFFF] shadow-md scale-105'
                  : 'bg-[#FFFFFF] text-[#111113] hover:text-[#B38F24] border border-[#D4AF37]/30 shadow-sm'
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
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-[#FFFFFF] h-72 border border-[#D4AF37]/40 hover:border-[#D4AF37]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/85 via-[#111113]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#FFFFFF]">
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
