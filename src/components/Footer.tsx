'use client';

import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0C] text-[#FFFFFF] border-t border-[#D4AF37]/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#141417]">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block group">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                THE PAVITRA
              </h3>
              <p className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-sans font-semibold">
                PURE VEG RESTAURANT
              </p>
            </a>

            <p className="text-xs sm:text-sm text-[#F4EFE6]/80 leading-relaxed font-sans font-light max-w-md">
              Metro Walk Mall, Rohini's signature pure vegetarian restaurant. Prepared with tradition, served with warmth.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#141417] rounded-full border border-[#D4AF37]/30 text-[11px] text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Certified Pure Vegetarian Kitchen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#D4AF37]">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-sans">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#F4EFE6]/80 hover:text-[#D4AF37] transition-colors flex items-center"
                  >
                    <span className="text-[#D4AF37] mr-1.5">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#D4AF37]">Visit Us</h4>
            <ul className="space-y-3 text-xs text-[#F4EFE6]/80 font-sans font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Metro Walk Mall, GA-14, Sector 10, Rohini, Delhi – 110085</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+918700087329" className="hover:text-[#D4AF37] font-semibold text-[#FFFFFF]">087000 87329</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>11:00 AM – 11:00 PM (Mon – Sun)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EFE6]/60 font-sans font-light gap-2 text-center sm:text-left">
          <p>© 2026 The Pavitra – Pure Veg Restaurant. All Rights Reserved.</p>
          <p>Metro Walk Mall, Sector 10, Rohini, Delhi</p>
        </div>

      </div>
    </footer>
  );
};
