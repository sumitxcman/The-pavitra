'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = 'https://wa.me/918700087329?text=Hello%20The%20Pavitra,%20I%20would%20like%20to%20reserve%20a%20table.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <span className="mr-3 px-3 py-1.5 bg-[#050507] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Book Table via WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#050507] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-[#FFFFFF] relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-[#050507]" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D4AF37] border-2 border-[#050507] rounded-full animate-ping" />
      </a>
    </div>
  );
};
