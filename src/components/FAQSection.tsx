'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Is The Pavitra 100% Pure Vegetarian?',
    answer: 'Yes! The Pavitra is a 100% pure vegetarian restaurant. We strictly prepare all food without any non-vegetarian ingredients, eggs, or cross-contamination.',
  },
  {
    question: 'Are Jain Food Options Available?',
    answer: 'Absolutely! We offer dedicated Jain dietary options (prepared without onion, garlic, or root vegetables) across our starters, curries, and paneer dishes. Simply let your server know upon ordering.',
  },
  {
    question: 'Where is The Pavitra Located and is Parking Available?',
    answer: 'We are conveniently located at GA-14, Ground Floor, Metro Walk Mall, Swarn Jayanti Park, Sector 10, Rohini, Delhi – 110085. Ample parking is available directly inside Metro Walk Mall.',
  },
  {
    question: 'Can I Book Tables for Birthday Parties and Family Celebrations?',
    answer: 'Yes, we specialize in hosting family gatherings, anniversaries, birthday parties, corporate meals, and kitty parties. You can reserve tables online or call us directly at 087000 87329 for customized group arrangements.',
  },
  {
    question: 'What Are Your Opening Hours?',
    answer: 'We are open 7 days a week from 11:00 AM to 11:00 PM for dine-in, takeaway, and delivery orders.',
  },
  {
    question: 'What is the Average Price Range per Person?',
    answer: 'The typical dining cost is approximately ₹400 to ₹600 per person for a complete meal including starters, main course curries, breads, and beverages.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050507] text-[#FFFFFF] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#121215] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-flex items-center space-x-2 mb-3">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>GUEST INFORMATION</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F4EFE6]/80 max-w-md mx-auto font-sans font-light">
            Everything you need to know about dining at Rohini's favourite pure vegetarian destination.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121215] border-[#D4AF37] shadow-xl'
                    : 'bg-[#121215]/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#FFFFFF]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-[#050507]' : 'bg-[#050507]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#1C1C21] font-sans text-xs sm:text-sm text-[#F4EFE6]/90 leading-relaxed font-light animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Footer */}
        <div className="mt-10 text-center bg-[#121215] p-5 sm:p-6 rounded-xl border border-[#D4AF37]/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-base text-[#FFFFFF]">Have another question?</h4>
            <p className="text-xs text-[#F4EFE6]/80">Our hospitality team is happy to assist you directly.</p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+918700087329"
              className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050507] rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Call Us
            </a>
            <a
              href="https://wa.me/918700087329?text=Hello%20The%20Pavitra,%20I%20have%20a%20query%20regarding%20dining."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#050507] rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
