'use client';

import React from 'react';
import { REVIEWS_LIST } from '@/data/reviewsData';
import { Star, Quote, ExternalLink } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#FAF9F6] text-[#111113] relative border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 inline-block mb-3 shadow-sm">
            VERIFIED GUEST FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111113] tracking-tight">
            Google Reviews & Rating
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Rating Hero Card */}
        <div className="max-w-3xl mx-auto mb-16 bg-[#FFFFFF] text-[#111113] p-6 sm:p-8 rounded-xl border border-[#D4AF37]/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-5">
            <div className="flex flex-col items-center justify-center p-4 bg-[#FAF9F6] rounded-lg border border-[#D4AF37]/40 min-w-[120px]">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B38F24]">4.3</span>
              <span className="text-[10px] text-[#71717A] uppercase tracking-widest mt-1">out of 5</span>
            </div>
            <div>
              <div className="flex text-[#D4AF37] mb-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111113]">434 Verified Google Reviews</h3>
              <p className="text-xs text-[#52525B] font-light">Rated for Pure Veg Taste, Ambience & Service in Rohini.</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Pavitra+Pure+Veg+Restaurant+Sector+10+Rohini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-md shrink-0"
          >
            <span>Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFFFF] p-6 rounded-xl border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D4AF37]/50" />
                </div>
                <p className="text-xs text-[#52525B] leading-relaxed font-sans font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F5F3EF] flex items-center justify-between">
                <span className="font-serif font-bold text-xs text-[#111113]">{rev.author}</span>
                <span className="text-[10px] text-[#71717A]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
