'use client';

import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, Check } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '2',
    occasion: 'Regular Dining',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello The Pavitra,%0A%0AI would like to reserve a table:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AGuests: ${formData.guests} Persons%0AOccasion: ${formData.occasion}%0ASpecial Requests: ${formData.notes || 'None'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/918700087329?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <section id="reservations" className="py-20 sm:py-24 bg-[#FAF9F6] text-[#111113] relative border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B38F24] bg-[#FFFFFF] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 inline-block mb-3 shadow-sm">
            ONLINE TABLE RESERVATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111113] tracking-tight">
            Reserve Your Table
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-md mx-auto font-sans font-light">
            Book online or send a instant table reservation request on WhatsApp.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column Booking Info */}
          <div className="lg:col-span-4 bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#D4AF37]/40 space-y-6 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#111113]">Direct Phone Booking</h3>
              
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#D4AF37]/40 space-y-3">
                <div className="flex items-center space-x-3 text-[#B38F24]">
                  <Phone className="w-5 h-5" />
                  <span className="font-serif font-bold text-lg text-[#111113]">087000 87329</span>
                </div>
                <p className="text-xs text-[#52525B] font-light leading-relaxed">
                  Call our host manager directly for immediate table confirmations or group party bookings.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#B38F24]">Reservation Perks</h4>
                <ul className="space-y-2 text-xs text-[#52525B] font-light">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#D4AF37]">✓</span>
                    <span>100% Pure Vegetarian Certified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#D4AF37]">✓</span>
                    <span>Jain Food Available on Request</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#D4AF37]">✓</span>
                    <span>Pink Marble Lounge Family Seating</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5F3EF]">
              <a
                href="https://wa.me/918700087329?text=Hello%20The%20Pavitra,%20I%20want%20to%20reserve%20a%20table."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:brightness-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>

          {/* Right Column Reservation Form */}
          <div className="lg:col-span-8 bg-[#FFFFFF] p-6 sm:p-10 rounded-xl border border-[#D4AF37]/40 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#D4AF37] text-[#FFFFFF] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111113]">Reservation Request Received!</h3>
                <p className="text-sm text-[#52525B] max-w-md mx-auto">
                  Opening WhatsApp to instantly send your booking details to The Pavitra team...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] placeholder-[#71717A] focus:outline-none focus:border-[#B38F24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] placeholder-[#71717A] focus:outline-none focus:border-[#B38F24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] focus:outline-none focus:border-[#B38F24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Time *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] focus:outline-none focus:border-[#B38F24]"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:00">09:00 PM (Dinner)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Guests *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] focus:outline-none focus:border-[#B38F24]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8+">8+ Group Party</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B38F24] mb-2">Special Requests (Optional)</label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Jain food required, birthday celebration, high chair needed..."
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#D4AF37]/40 rounded-md text-sm text-[#111113] placeholder-[#71717A] focus:outline-none focus:border-[#B38F24]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-md transition-all shadow-md flex items-center justify-center space-x-2 hover:brightness-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
