'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { DiningPerksBanner } from '@/components/DiningPerksBanner';
import { WhyChooseUs } from '@/components/WhyChooseUs';
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
    <main className="min-h-screen bg-[#050507] text-[#FFFFFF] relative">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenReservation={handleScrollToReservation} />

      {/* 1. Hero Section with Top Photo Collage */}
      <Hero />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Dining Perks Banner */}
      <DiningPerksBanner />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Signature Dishes */}
      <SignatureDishes />

      {/* 6. Complete Interactive Menu */}
      <MenuSection />

      {/* 7. Gallery & Lightbox */}
      <GallerySection />

      {/* 8. Private Dining & Celebrations */}
      <CelebrationsSection />

      {/* 9. Reservation Form & WhatsApp Booking */}
      <ReservationSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Google Reviews & Social Proof */}
      <GoogleReviewsSection />

      {/* 12. Contact Details & Interactive Map */}
      <ContactSection />

      {/* 13. Dark Luxury Footer */}
      <Footer />

      {/* 14. Floating Action Button */}
      <FloatingWhatsApp />

    </main>
  );
}
