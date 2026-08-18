'use client';

import React from 'react';
import { PartyPopper, Users, Gift, Cake, Briefcase, Heart, Calendar } from 'lucide-react';

export const CelebrationsSection: React.FC = () => {
  const occasions = [
    { title: 'Family Celebrations', desc: 'Large seating arrangements and delicious pure veg feasts for family reunions.', icon: Users },
    { title: 'Anniversaries', desc: 'Romantic ambiance, custom table decor and celebratory desserts.', icon: Heart },
    { title: 'Birthday Parties', desc: 'Vibrant party vibes, delicious starters, and memorable cake cutting setups.', icon: Cake },
    { title: 'Corporate Gatherings', desc: 'Professional hospitality and team lunch/dinner packages for business teams.', icon: Briefcase },
    { title: 'Kitty Parties', desc: 'Fun afternoon gatherings with unlimited laughter and mouthwatering snacks.', icon: PartyPopper },
    { title: 'Special Occasions', desc: 'Festive dining, traditional milestones, and cherished life achievements.', icon: Gift },
  ];

  const handleScrollToReserve = () => {
    const resEl = document.querySelector('#reservations');
    if (resEl) {
      const navHeight = 90;
      const elementPosition = resEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-[#12372A] text-[#F8F3E7] relative overflow-hidden border-t border-b border-[#D4AF37]/30">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37] bg-[#0B241B] px-4 py-1.5 rounded-full inline-block">
              SPECIAL OCCASIONS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F3E7] leading-tight">
              Celebrate Something Special
            </h2>

            <p className="text-base text-[#E9DFC8]/90 font-sans font-light leading-relaxed">
              Make your joyous moments unforgettable at <strong className="text-[#D4AF37]">The Pavitra</strong>. Whether it is an intimate family milestone or a lively group celebration, our team ensures customized table arrangements, prompt service, and mouthwatering vegetarian banquets.
            </p>

            <p className="text-sm text-[#E9DFC8]/75 italic font-serif">
              "Gather your loved ones and let us handle the hospitality, flavours, and warmth."
            </p>

            <div className="pt-4">
              <button
                onClick={handleScrollToReserve}
                className="inline-flex items-center px-8 py-4 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan Your Celebration
              </button>
            </div>

            {/* Real Celebration Photos Showcase */}
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-lg relative group">
                <img
                  src="/images/birthday-party-setup.png"
                  alt="Birthday Celebration Setup at The Pavitra"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                  Birthday Decor Setup
                </span>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-lg relative group">
                <img
                  src="/images/pavitra-party-hall.png"
                  alt="Party Hall Setup at The Pavitra"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                  Festive Hall Lights
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Occasions Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {occasions.map((occ, i) => {
              const IconComponent = occ.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-[#0B241B]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-[#12372A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#F8F3E7] mb-1">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#E9DFC8]/75 leading-relaxed font-sans">
                    {occ.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
