'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#050507] text-[#FFFFFF] relative border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] bg-[#121215] px-4 py-1.5 rounded-full border border-[#D4AF37]/30 inline-block mb-3">
            VISIT & CONNECT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight">
            Find The Pavitra
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F4EFE6]/80 max-w-md mx-auto font-sans font-light">
            GA-14, Ground Floor, Metro Walk Mall, Sector 10, Rohini, Delhi.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 bg-[#121215] p-6 sm:p-8 rounded-xl border border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#FFFFFF]">Contact Details</h3>

              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-lg bg-[#050507] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#FFFFFF]">Address</h4>
                  <p className="text-xs sm:text-sm text-[#F4EFE6]/80 font-light mt-0.5 leading-relaxed">
                    Metro Walk Mall, GA-14, Swarn Jayanti Park, Sector 10, Rohini, Delhi – 110085
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-lg bg-[#050507] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#FFFFFF]">Phone Booking</h4>
                  <p className="text-xs sm:text-sm text-[#F4EFE6]/80 font-light mt-0.5">
                    <a href="tel:+918700087329" className="hover:text-[#D4AF37] font-semibold text-[#FFFFFF]">087000 87329</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-lg bg-[#050507] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#FFFFFF]">Opening Hours</h4>
                  <p className="text-xs sm:text-sm text-[#F4EFE6]/80 font-light mt-0.5">
                    11:00 AM – 11:00 PM (Every Day)
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-[#050507] rounded border border-[#D4AF37]/30 flex items-center space-x-1.5 text-[#F4EFE6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Dine-in</span>
                </span>
                <span className="px-3 py-1 bg-[#050507] rounded border border-[#D4AF37]/30 flex items-center space-x-1.5 text-[#F4EFE6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Takeaway</span>
                </span>
                <span className="px-3 py-1 bg-[#050507] rounded border border-[#D4AF37]/30 flex items-center space-x-1.5 text-[#F4EFE6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>No-Contact Delivery</span>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1C1C21]">
              <a
                href="tel:+918700087329"
                className="py-3 px-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#050507] font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center space-x-1 shadow-md"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918700087329?text=Hello%20The%20Pavitra,%20I%20want%20to%20reserve%20a%20table."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 border border-[#D4AF37] text-[#FFFFFF] hover:text-[#D4AF37] bg-[#050507] font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center space-x-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column Map Embed */}
          <div className="lg:col-span-7 bg-[#121215] rounded-xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative flex flex-col min-h-[360px]">
            <iframe
              title="The Pavitra Restaurant Metro Walk Mall Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.789123456789!2d77.1132!3d28.7185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzA2LjYiTiA3N8KwMDYnNDcuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-125 grayscale-[0.2]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
