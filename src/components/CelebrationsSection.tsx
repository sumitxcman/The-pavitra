'use client';

import React from 'react';
import { Calendar, Heart, Cake, Briefcase, Users } from 'lucide-react';

export const CelebrationsSection: React.FC = () => {
  const occasions = [
    { title: 'Family Celebrations', desc: 'Spacious seating & lavish pure veg feasts.', icon: Users },
    { title: 'Anniversaries', desc: 'Romantic ambiance & celebratory desserts.', icon: Heart },
    { title: 'Birthday Parties', desc: 'Vibrant party decor & cake cutting setup.', icon: Cake },
    { title: 'Corporate Meals', desc: 'Team lunch & dinner party packages.', icon: Briefcase },
  ];

  const handleScrollToReserve = () => {
    const resEl = document.querySelector('#reservations');
    if (resEl) {
      const navHeight = 70;
      const elementPosition = resEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F5F3EF] text-[#111113] relative overflow-hidden border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Text & Photos */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 inline-block shadow-sm">
              SPECIAL OCCASIONS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111113] leading-tight">
              Celebrate Special Moments
            </h2>

            <p className="text-sm text-[#52525B] font-sans font-light leading-relaxed">
              Make your joyous occasions unforgettable at <strong className="text-[#B38F24]">The Pavitra</strong>. Family reunions, birthday parties, and festive celebrations with customized table setups.
            </p>

            {/* Real Celebration Photos */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl overflow-hidden border border-[#D4AF37] shadow-lg relative group bg-[#FFFFFF]">
                <img
                  src="/images/birthday-party-setup.png"
                  alt="Birthday Celebration Setup at The Pavitra"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/75 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-[#D4AF37]">
                  Birthday Setup
                </span>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#D4AF37] shadow-lg relative group bg-[#FFFFFF]">
                <img
                  src="/images/pavitra-party-hall.png"
                  alt="Party Hall Setup at The Pavitra"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/75 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-[#D4AF37]">
                  Festive Lights
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={handleScrollToReserve}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-md hover:shadow-[#D4AF37]/30"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan Your Event
              </button>
            </div>
          </div>

          {/* Right Column Occasions Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {occasions.map((occ, i) => {
              const IconComponent = occ.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-md group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#D4AF37]/40 flex items-center justify-center text-[#B38F24] mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#111113] group-hover:text-[#B38F24] transition-colors">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#52525B] font-sans font-light mt-1">
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
