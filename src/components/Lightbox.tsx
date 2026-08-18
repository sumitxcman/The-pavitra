'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B241B]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-[#12372A] text-[#F8F3E7] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors z-50 focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#12372A]/80 text-[#F8F3E7] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors z-50 focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#12372A]/80 text-[#F8F3E7] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors z-50 focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Detail Card */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="relative max-h-[75vh] w-full flex items-center justify-center rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#000000]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[75vh] max-w-full object-contain"
          />
        </div>

        <div className="mt-6 text-center text-[#F8F3E7]">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-3 py-1 rounded-full inline-block mb-2">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F3E7]">
            {item.title}
          </h3>
        </div>
      </div>

    </div>
  );
};
