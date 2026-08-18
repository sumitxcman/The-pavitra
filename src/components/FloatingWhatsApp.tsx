'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleOpenWhatsApp = () => {
    const defaultMsg = encodeURIComponent('Hello The Pavitra, I would like to enquire about table reservations and dining menu.');
    window.open(`https://wa.me/918700087329?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      
      {/* Tooltip text on hover */}
      <span className="mr-3 px-3 py-1.5 bg-[#0B241B] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with The Pavitra
      </span>

      {/* Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none animate-gold-pulse"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0B241B] rounded-full animate-ping" />
      </button>

    </div>
  );
};
