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
    <section className="py-24 bg-[#0B241B] text-[#F8F3E7] relative overflow-hidden border-t border-[#D4AF37]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#12372A] px-4 py-1.5 rounded-full inline-flex items-center space-x-2 mb-3">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>GUEST INFORMATION</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F3E7] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#E9DFC8]/80 max-w-xl mx-auto font-sans font-light">
            Everything you need to know about dining at Rohini's favourite pure vegetarian destination.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
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
                    ? 'bg-[#12372A] border-[#D4AF37] shadow-xl'
                    : 'bg-[#12372A]/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-[#F8F3E7]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-[#0B241B]' : 'bg-[#0B241B]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D4AF37]/20 font-sans text-sm sm:text-base text-[#E9DFC8]/90 leading-relaxed font-light animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Footer */}
        <div className="mt-12 text-center bg-[#12372A]/70 p-6 rounded-xl border border-[#D4AF37]/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-lg text-[#F8F3E7]">Have another question?</h4>
            <p className="text-xs text-[#E9DFC8]/80">Our hospitality team is happy to assist you directly.</p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+918700087329"
              className="px-4 py-2 bg.transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B241B] rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Call Us
            </a>
            <a
              href="https://wa.me/918700087329?text=Hello%20The%20Pavitra,%20I%20have%20a%20query%20regarding%20dining."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center shadow-lg"
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
