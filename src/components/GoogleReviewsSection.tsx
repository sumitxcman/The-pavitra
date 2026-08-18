'use client';

import React from 'react';
import { REVIEWS_SUMMARY, REVIEWS_LIST, REVIEW_THEMES } from '@/data/reviewsData';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#F8F3E7] text-[#0B241B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-4 py-1.5 rounded-full inline-block mb-3">
            VERIFIED GUEST FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] tracking-tight">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Rating Score Card Banner */}
        <div className="max-w-3xl mx-auto mb-16 bg-[#12372A] text-[#F8F3E7] p-8 rounded-xl border border-[#D4AF37]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center justify-center p-4 bg-[#0B241B] rounded-lg border border-[#D4AF37]/30 min-w-[120px]">
              <span className="font-serif text-5xl font-bold text-[#D4AF37]">
                {REVIEWS_SUMMARY.rating}
              </span>
              <span className="text-xs text-[#E9DFC8]/70 mt-1">out of 5.0</span>
            </div>

            <div>
              <div className="flex items-center text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#D4AF37]" />
                ))}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">
                {REVIEWS_SUMMARY.totalReviews} Verified Google Reviews
              </h3>
              <p className="text-xs text-[#E9DFC8]/80 font-sans mt-0.5">
                The Pavitra – Pure Veg Restaurant, Rohini, Delhi
              </p>
            </div>
          </div>

          <a
            href={REVIEWS_SUMMARY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md shrink-0"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>

        </div>

        {/* Theme Pills */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-wider text-[#12372A] font-bold mb-4">
            Highlights from Customer Reviews
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {REVIEW_THEMES.map((theme, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9DFC8] text-xs font-semibold text-[#12372A] shadow-sm flex items-center space-x-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{theme}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFFFF] p-8 rounded-xl border border-[#E9DFC8] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#0B241B]/50 font-sans">{rev.date}</span>
                </div>

                <h4 className="font-serif font-bold text-lg text-[#12372A] mb-2">
                  "{rev.tagline}"
                </h4>

                <p className="text-sm text-[#0B241B]/80 leading-relaxed font-sans font-light mb-6">
                  {rev.comment}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {rev.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] bg-[#F8F3E7] text-[#12372A] font-medium px-2 py-0.5 rounded">
                      #{h}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E9DFC8] flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#12372A]">
                    {rev.author}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Google Verified
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
