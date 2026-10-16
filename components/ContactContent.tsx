"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import BookButton from "@/components/BookButton";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function ContactContent() {
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const shortName = client?.shortName || "Prana";

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          WE ARE HERE FOR YOU
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] mt-3 mb-6 leading-tight">
          Connect With Our <br />
          <span className="italic text-[#2B4035] font-light">{info.address.city} Sanctuary.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-xl mx-auto">
          Have a question about a treatment, need a consultation, or ready to book your visit? Reach out by phone, text, or through our online booking portal.
        </p>
      </div>

      {/* Main Contact Grid: Information + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFDF8] rounded-3xl p-8 border border-[#EDE7DD] shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-medium text-[#292A27]">
                Salon Details
              </h2>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#2B4035] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold">
                      Location
                    </div>
                    <address className="not-italic text-sm text-[#292A27] font-medium mt-0.5 leading-relaxed">
                      {info.address.street} {info.address.suite}
                      <br />
                      {info.address.city}, {info.address.state} {info.address.zip}
                    </address>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(info.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#2B4035] hover:underline inline-block mt-1"
                    >
                      Get Directions via Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#2B4035] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold">
                      Telephone / Text
                    </div>
                    <a
                      href={`tel:${info.phone}`}
                      className="text-sm text-[#292A27] font-semibold hover:underline block mt-0.5"
                    >
                      {info.displayPhone}
                    </a>
                    <span className="text-xs text-[#5C5E58]">
                      Call or text anytime for scheduling assistance
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#2B4035] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold">
                      Email
                    </div>
                    <a
                      href={`mailto:${info.email}`}
                      className="text-sm text-[#292A27] font-semibold hover:underline block mt-0.5"
                    >
                      {info.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Grid */}
              <div className="pt-6 border-t border-[#EDE7DD] space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B5A18D] font-bold">
                  <Clock className="w-4 h-4 text-[#2B4035]" />
                  <span>Hours of Operation</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#292A27]">
                  {info.hours.map((h, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1 px-2.5 rounded-lg ${
                        !h.isOpen
                          ? "bg-amber-50/70 text-amber-900 font-medium"
                          : "bg-[#F8F6F1]"
                      }`}
                    >
                      <span>{h.day}</span>
                      <span className="font-semibold">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-2">
                <BookButton className="w-full justify-center">
                  Online Booking Opening Soon
                </BookButton>
              </div>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] rounded-3xl p-8 sm:p-12 border border-[#EDE7DD] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
                MESSAGE OUR TEAM
              </span>
              <h2 className="font-serif text-3xl font-medium text-[#292A27]">
                Send an Inquiry or Request a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                Whether you have questions regarding color correction, holistic scalp rituals, or bridal party bookings, our front desk concierge team responds within 24 hours.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Guest Policies & Helpful Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EDE7DD]/50 rounded-3xl p-8 sm:p-12 border border-[#DACFC2] space-y-8">
          <SectionHeading
            badge="PEACE OF MIND"
            title="Salon Policies & Guest Etiquette"
            subtitle="Transparent policies designed to respect your time, our artists' livelihoods, and a calm sanctuary atmosphere."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#5C5E58]">
            <div className="space-y-2">
              <div className="font-bold text-[#292A27] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2B4035]" />
                <span>Cancellation & Rescheduling</span>
              </div>
              <p className="leading-relaxed">
                We kindly request a minimum of 24 to 48 hours notice for cancellations or appointment adjustments. This allows us to offer the reserved time to our waiting list guests.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#292A27] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2B4035]" />
                <span>Sanctuary Atmosphere</span>
              </div>
              <p className="leading-relaxed">
                To preserve a restorative, low-sensory environment for all guests receiving facials and massages, we ask that cell phones be silenced and headphones used during styling sessions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-[#292A27] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#2B4035]" />
                <span>Health & Safety Standards</span>
              </div>
              <p className="leading-relaxed">
                All implements, pedicure bowls, and facial instruments undergo hospital-grade sterilization between every service. We run commercial HEPA filtration to maintain pristine indoor air.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
