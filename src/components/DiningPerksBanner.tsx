'use client';

import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const DiningPerksBanner: React.FC = () => {
  const perks = [
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian',
      desc: 'Zero cross-contamination. Pure ingredients cooked with love.',
    },
    {
      icon: Award,
      title: '4.3 Google Rating',
      desc: 'Trusted by over 434 verified diners across Delhi Rohini.',
    },
    {
      icon: HeartHandshake,
      title: 'Family & Group Banquets',
      desc: 'Spacious pink marble dining hall for grand family reunions.',
    },
    {
      icon: Sparkles,
      title: 'Jain Food Available',
      desc: 'Specialized onion & garlic-free dishes available upon request.',
    },
  ];

  return (
    <section className="bg-[#F5F3EF] border-y border-[#D4AF37]/30 py-10 text-[#111113] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 p-4 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-md group"
              >
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#D4AF37]/40 text-[#B38F24] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#111113] group-hover:text-[#B38F24] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-[#52525B] font-sans font-light mt-1 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
