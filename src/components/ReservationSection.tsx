'use client';

import React, { useState } from 'react';
import { ReservationFormData } from '@/types';
import { Calendar, Clock, Users, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    mobile: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '2 Guests',
    occasion: 'Casual Dining',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello The Pavitra, I would like to reserve a table.
*Name:* ${formData.fullName || 'Guest'}
*Mobile:* ${formData.mobile || 'N/A'}
*Date:* ${formData.date || 'Today'}
*Time:* ${formData.time || '7:30 PM'}
*Guests:* ${formData.guests}
*Occasion:* ${formData.occasion}
${formData.specialRequest ? `*Special Request:* ${formData.specialRequest}` : ''}`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppReserve = () => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/918700087329?text=${message}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="py-24 bg-[#0B241B] text-[#F8F3E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-2 block">
            TABLE BOOKING & ENQUIRIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F3E7] tracking-tight">
            Reserve Your Table
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#E9DFC8]/80 max-w-xl mx-auto font-sans font-light">
            Book your pure vegetarian dining experience at Metro Walk Mall, Rohini.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Details Box */}
          <div className="lg:col-span-4 bg-[#12372A] p-8 rounded-xl border border-[#D4AF37]/30 space-y-6 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-[#F8F3E7] flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span>Reservation Information</span>
            </h3>

            <div className="space-y-4 text-sm text-[#E9DFC8]/90 font-sans font-light">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#F8F3E7]">Opening Hours</p>
                  <p>11:00 AM – 11:00 PM (Daily)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#F8F3E7]">Seating Policy</p>
                  <p>Reservations held for 15 minutes past scheduled time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <PhoneCall className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#F8F3E7]">Direct Line</p>
                  <a href="tel:+918700087329" className="text-[#D4AF37] hover:underline font-semibold">
                    087000 87329
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA Button */}
            <div className="pt-4 border-t border-[#D4AF37]/20">
              <p className="text-xs text-[#E9DFC8]/70 mb-3">Prefer instant WhatsApp booking?</p>
              <button
                onClick={handleWhatsAppReserve}
                type="button"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Reserve via WhatsApp
              </button>
            </div>
          </div>

          {/* Main Reservation Form */}
          <div className="lg:col-span-8 bg-[#12372A]/90 p-8 sm:p-10 rounded-xl border border-[#D4AF37]/40 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#D4AF37] text-[#0B241B] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F8F3E7]">
                  Reservation Request Received!
                </h3>
                <p className="text-sm text-[#E9DFC8]/90 max-w-md mx-auto">
                  Thank you, <strong className="text-[#D4AF37]">{formData.fullName}</strong>. We have received your table request for <strong className="text-[#D4AF37]">{formData.guests}</strong> on <strong className="text-[#D4AF37]">{formData.date || 'today'}</strong>. Our staff will call you shortly on <strong>{formData.mobile}</strong> to confirm table availability.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={handleWhatsAppReserve}
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send details on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#D4AF37] text-[#F8F3E7] hover:text-[#D4AF37] font-bold text-xs uppercase tracking-widest rounded-sm"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] placeholder-[#E9DFC8]/40 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] placeholder-[#E9DFC8]/40 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rajesh@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] placeholder-[#E9DFC8]/40 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:00">01:00 PM (Lunch)</option>
                      <option value="14:00">02:00 PM (Lunch)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:00">09:00 PM (Dinner)</option>
                      <option value="21:30">09:30 PM (Dinner)</option>
                      <option value="22:00">10:00 PM (Late Dinner)</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="6 Guests">6 Guests</option>
                      <option value="8 Guests">8 Guests</option>
                      <option value="10+ Guests">10+ Guests (Group)</option>
                    </select>
                  </div>

                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Family Celebration">Family Celebration</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Corporate Meal">Corporate Meal</option>
                    <option value="Kitty Party">Kitty Party</option>
                  </select>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E9DFC8] font-semibold mb-2">
                    Special Requests / Dietary Needs
                  </label>
                  <textarea
                    name="specialRequest"
                    rows={3}
                    placeholder="e.g. Jain food preference, high chair required, window table request..."
                    value={formData.specialRequest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0B241B] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F8F3E7] placeholder-[#E9DFC8]/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#D4AF37] hover:bg-[#E6C65c] text-[#0B241B] font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Reservation</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppReserve}
                    className="py-4 px-6 border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Reserve via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
