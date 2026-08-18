'use client';

import React, { useEffect } from 'react';
import { GalleryItem } from '@/types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/galleryData';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
  const currentItem = GALLERY_ITEMS[currentIndex] || item;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050507]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-[#121215] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors z-50 focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="max-w-4xl w-full bg-[#121215] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative">
        <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-[#050507]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        <div className="p-6 bg-[#121215] border-t border-[#1C1C21]">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#050507] px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-block mb-2">
            {currentItem.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF]">
            {currentItem.title}
          </h3>
        </div>
      </div>

    </div>
  );
};
