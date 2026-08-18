'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { DiningPerksBanner } from '@/components/DiningPerksBanner';
import { SignatureDishes } from '@/components/SignatureDishes';
import { MenuSection } from '@/components/MenuSection';
import { GallerySection } from '@/components/GallerySection';
import { CelebrationsSection } from '@/components/CelebrationsSection';
import { ReservationSection } from '@/components/ReservationSection';
import { FAQSection } from '@/components/FAQSection';
import { GoogleReviewsSection } from '@/components/GoogleReviewsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  const handleScrollToReservation = () => {
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
    <main className="min-h-screen bg-[#F8F4EC] text-[#111113] relative">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenReservation={handleScrollToReservation} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Dining Perks Banner */}
      <DiningPerksBanner />

      {/* 4. Signature Dishes */}
      <SignatureDishes />

      {/* 5. Complete Interactive Menu */}
      <MenuSection />

      {/* 6. Gallery & Lightbox */}
      <GallerySection />

      {/* 7. Private Dining & Celebrations */}
      <CelebrationsSection />

      {/* 8. Online Table Reservation */}
      <ReservationSection />

      {/* 9. Verified Google Reviews */}
      <GoogleReviewsSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Location & Contact Section */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </main>
  );
}
