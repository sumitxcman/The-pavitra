'use client';

import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Globe, ShieldCheck } from 'lucide-react';

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
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0B241B] text-[#F8F3E7] border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Background Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block group">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#F8F3E7] group-hover:text-[#D4AF37] transition-colors">
                THE PAVITRA
              </h3>
              <p className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-sans font-semibold">
                PURE VEG RESTAURANT
              </p>
            </a>

            <p className="text-xs sm:text-sm text-[#E9DFC8]/80 leading-relaxed font-sans font-light max-w-md">
              Experience thoughtfully prepared 100% vegetarian cuisine, elegant dining ambience, and warm Indian hospitality at Metro Walk Mall, Rohini.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#12372A] rounded-full border border-[#D4AF37]/30 text-[11px] text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Certified Pure Vegetarian Kitchen</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#E9DFC8]/80 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] uppercase tracking-wider">
              Contact Info
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#E9DFC8]/90 font-sans font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Metro Walk Mall, GA-14, Swarn Jayanti Park, Sector 10, Rohini, Delhi – 110085</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+918700087329" className="hover:text-[#D4AF37] font-semibold">
                  087000 87329
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>11:00 AM – 11:00 PM (Everyday)</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="https://thepavitra.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                  thepavitra.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.google.com/search?q=The+Pavitra+Pure+Veg+Restaurant+Metro+Walk+Mall+Rohini+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#12372A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B241B] transition-colors"
                title="Google Listing"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#12372A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B241B] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#12372A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B241B] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E9DFC8]/60 space-y-3 sm:space-y-0">
          <p>© 2026 The Pavitra – Pure Veg Restaurant. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
