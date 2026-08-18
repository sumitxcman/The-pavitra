'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShoppingBag, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B241B]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0B241B]/95 via-[#0B241B]/70 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col group focus:outline-none shrink-0"
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-3xl tracking-[0.2em] font-bold text-[#F8F3E7] group-hover:text-[#D4AF37] transition-colors duration-300">
              THE PAVITRA
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-sans font-semibold mt-0.5">
              PURE VEG RESTAURANT
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm uppercase tracking-[0.15em] font-semibold text-[#E9DFC8] hover:text-[#D4AF37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <a
              href="#reservations"
              onClick={(e) => {
                handleNavClick(e, '#reservations');
                if (onOpenReservation) onOpenReservation();
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#E6C65c] to-[#D4AF37] text-[#0B241B] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/40 hover:-translate-y-0.5 border border-[#F8F3E7]/40"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reserve a Table
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-[#D4AF37]/70 hover:border-[#D4AF37] bg-[#12372A]/70 hover:bg-[#12372A] text-[#F8F3E7] hover:text-[#D4AF37] font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              <ShoppingBag className="w-4 h-4 mr-2 text-[#D4AF37]" />
              Order Online
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="#reservations"
              onClick={(e) => handleNavClick(e, '#reservations')}
              className="px-3 py-2 rounded-md bg-[#D4AF37] text-[#0B241B] font-bold text-[10px] uppercase tracking-wider flex items-center shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Reserve
            </a>
            <a
              href="tel:+918700087329"
              className="p-2 rounded-md border border-[#D4AF37]/60 text-[#D4AF37] bg-[#12372A]"
              title="Call The Pavitra"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#F8F3E7] hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0B241B]/98 backdrop-blur-xl border-b border-[#D4AF37]/40 shadow-2xl animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm uppercase tracking-widest text-[#F8F3E7] hover:text-[#D4AF37] font-semibold py-2.5 border-b border-[#12372A]/80 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#D4AF37]/60 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="#reservations"
                onClick={(e) => {
                  handleNavClick(e, '#reservations');
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full text-center py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#E6C65c] to-[#D4AF37] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-md shadow-xl flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table Now</span>
              </a>
              <a
                href="tel:+918700087329"
                className="w-full text-center py-3 border border-[#D4AF37]/70 text-[#D4AF37] bg-[#12372A] font-bold text-xs uppercase tracking-widest rounded-md flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 087000 87329</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
