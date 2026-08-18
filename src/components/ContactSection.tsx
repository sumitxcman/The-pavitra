'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const address = 'Metro Walk Mall, GA-14, Swarn Jayanti Park, Sector 10, Rohini, Delhi – 110085';
  const phone = '087000 87329';
  const googleMapsDirectionsUrl = 'https://www.google.com/maps/search/?api=1&query=The+Pavitra+Pure+Veg+Restaurant+Metro+Walk+Mall+GA-14+Swarn+Jayanti+Park+Sector+10+Rohini+Delhi+110085';

  return (
    <section id="contact" className="py-24 bg-[#0B241B] text-[#F8F3E7] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-2 block">
            LOCATION & CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F3E7] tracking-tight">
            Visit The Pavitra
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#E9DFC8]/80 max-w-xl mx-auto font-sans font-light">
            Conveniently situated inside Metro Walk Mall, Swarn Jayanti Park, Rohini.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column Contact Info */}
          <div className="lg:col-span-5 bg-[#12372A] p-8 sm:p-10 rounded-xl border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between space-y-8">
            <div>
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">
                  The Pavitra – Pure Veg Restaurant
                </h3>
              </div>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-[#0B241B] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#F8F3E7]">Address</h4>
                    <p className="text-xs sm:text-sm text-[#E9DFC8]/80 mt-1 leading-relaxed font-sans font-light">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-[#0B241B] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#F8F3E7]">Phone</h4>
                    <a
                      href="tel:+918700087329"
                      className="text-sm sm:text-base font-bold text-[#D4AF37] hover:underline mt-1 block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-[#0B241B] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#F8F3E7]">Opening Hours</h4>
                    <p className="text-xs sm:text-sm text-[#E9DFC8]/80 mt-1 font-sans font-light">
                      Everyday: 11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Available Services */}
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#D4AF37] mb-3">
                    Available Services
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs text-[#E9DFC8]">
                    <span className="px-3 py-1 bg-[#0B241B] rounded border border-[#D4AF37]/20 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Dine-in</span>
                    </span>
                    <span className="px-3 py-1 bg-[#0B241B] rounded border border-[#D4AF37]/20 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Takeaway</span>
                    </span>
                    <span className="px-3 py-1 bg-[#0B241B] rounded border border-[#D4AF37]/20 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>No-contact delivery</span>
                    </span>
                    <span className="px-3 py-1 bg-[#0B241B] rounded border border-[#D4AF37]/20 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Table reservation</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:+918700087329"
                className="py-3 px-4 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/918700087329"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-[#D4AF37] text-[#F8F3E7] hover:text-[#D4AF37] hover:bg-[#0B241B] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center space-x-1.5"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column Google Map Embed */}
          <div className="lg:col-span-7 bg-[#12372A] rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[400px]">
              <iframe
                title="The Pavitra Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.78919639525!2d77.1124!3d28.7188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d072b220364d9%3A0xb249339e1bb3805!2sMetro%20Walk%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Map Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-xs bg-[#0B241B]/95 p-4 rounded-lg border border-[#D4AF37]/40 backdrop-blur-md shadow-2xl space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#F8F3E7]">The Pavitra</h5>
                    <p className="text-[11px] text-[#E9DFC8]/80 font-sans">Metro Walk Mall, Rohini</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-[#0B241B] font-bold text-[10px]">
                    4.3 ★
                  </span>
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-sm inline-flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
