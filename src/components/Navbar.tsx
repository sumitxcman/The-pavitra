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
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-md py-2.5 sm:py-3.5'
          : 'bg-gradient-to-b from-[#FFFFFF]/95 via-[#FFFFFF]/80 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col group focus:outline-none shrink-0"
          >
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] font-bold text-[#111113] group-hover:text-[#B38F24] transition-colors duration-300">
              THE PAVITRA
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-xs tracking-[0.3em] text-[#B38F24] uppercase font-sans font-bold">
              PURE VEG RESTAURANT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm uppercase tracking-[0.15em] font-bold text-[#111113]/90 hover:text-[#B38F24] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <a
              href="#reservations"
              onClick={(e) => {
                handleNavClick(e, '#reservations');
                if (onOpenReservation) onOpenReservation();
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[#D4AF37]/40 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reserve a Table
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-[#D4AF37] bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#111113] hover:text-[#B38F24] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2 text-[#D4AF37]" />
              Menu
            </a>
          </div>

          {/* Mobile Phone Compact Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="#reservations"
              onClick={(e) => handleNavClick(e, '#reservations')}
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#FFFFFF] font-bold text-[10px] uppercase tracking-wider flex items-center shadow-md shrink-0"
            >
              <Calendar className="w-3 h-3 mr-1" />
              Reserve
            </a>
            <a
              href="tel:+918700087329"
              className="p-1.5 rounded-md border border-[#D4AF37] text-[#B38F24] bg-[#FFFFFF] shrink-0 shadow-sm"
              title="Call The Pavitra"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-[#111113] hover:text-[#B38F24] focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Phone Full Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-[#FFFFFF]/98 backdrop-blur-xl border-b border-[#D4AF37]/40 shadow-2xl animate-fade-in z-50 max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="px-5 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-widest text-[#111113] hover:text-[#B38F24] font-bold py-2.5 border-b border-[#F5F3EF] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#D4AF37] text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col space-y-2.5">
              <a
                href="#reservations"
                onClick={(e) => {
                  handleNavClick(e, '#reservations');
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full text-center py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md shadow-xl flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table Now</span>
              </a>
              <a
                href="tel:+918700087329"
                className="w-full text-center py-2.5 border border-[#D4AF37] text-[#B38F24] bg-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md flex items-center justify-center space-x-2 shadow-sm"
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
