'use client';

import React from 'react';
import { Leaf, Flame, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Pure Vegetarian',
      desc: 'A completely vegetarian dining experience where purity and quality come first.',
      icon: Leaf,
    },
    {
      title: 'Authentic Flavours',
      desc: 'Indian favourites prepared with rich, balanced flavours and authentic traditional recipes.',
      icon: Flame,
    },
    {
      title: 'Elegant Ambience',
      desc: 'A refined, tastefully lit atmosphere suitable for family meals and memorable celebrations.',
      icon: Sparkles,
    },
    {
      title: 'Warm Hospitality',
      desc: 'Friendly, courteous and highly professional service that makes every guest feel cherished.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-[#0B241B] text-[#F8F3E7] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#12372A]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-2 block">
            THE PAVITRA EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F3E7] tracking-tight">
            Why Choose The Pavitra
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-lg bg-[#12372A]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#0B241B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B241B] transition-all duration-300 shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif text-xl font-bold text-[#F8F3E7] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#E9DFC8]/80 leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Line Highlight */}
                <div className="w-0 group-hover:w-full h-0.5 bg-[#D4AF37] transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
