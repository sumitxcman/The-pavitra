'use client';

import React from 'react';
import { ShieldCheck, Flame, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian',
      desc: 'Strict vegetarian kitchen with uncompromised hygiene and pure ingredients.',
    },
    {
      icon: Flame,
      title: 'Authentic Tandoori Flavours',
      desc: 'Traditional clay tandoor chargrilled paneer,chaap & aromatic biryanis.',
    },
    {
      icon: Sparkles,
      title: 'Luxury Pink Ambience',
      desc: 'Elegant pink marble dining hall, soft chandeliers & memorable photo setups.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Hospitality',
      desc: 'Prompt attentive service for family dinners, birthdays & group banquets.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#141417] text-[#FFFFFF] border-y border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0A0A0C] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#141417] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#F4EFE6]/80 font-sans font-light mt-1.5 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
