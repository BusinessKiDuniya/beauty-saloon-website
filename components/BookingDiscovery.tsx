"use client";

import React, { useState } from "react";
import { Calendar, User, Sparkles, ArrowRight, ExternalLink, Phone } from "lucide-react";
import { useClient } from "@/context/ClientContext";
import {
  businessInfo as defaultBusinessInfo,
  teamMembers as defaultTeamMembers,
  serviceCategories as defaultServiceCategories
} from "@/data/siteData";

export default function BookingDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStylist, setSelectedStylist] = useState("any");
  const [selectedDay, setSelectedDay] = useState("any");
  const { client } = useClient();

  const services = client?.services?.length ? client.services : defaultServiceCategories;
  const team = client?.team?.length ? client.team : defaultTeamMembers;
  const info = client?.businessInfo || defaultBusinessInfo;

  const days = [
    { value: "any", label: "Any Day" },
    { value: "monday", label: "Monday (9am – 8pm)" },
    { value: "wednesday", label: "Wednesday (10am – 8pm)" },
    { value: "thursday", label: "Thursday (9am – 8pm)" },
    { value: "friday", label: "Friday (9am – 8pm)" },
    { value: "saturday", label: "Saturday (9am – 6pm)" },
    { value: "sunday", label: "Sunday (9am – 6pm)" }
  ];

  return (
    <section aria-label="Book appointment" className="relative -mt-10 lg:-mt-14 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-6 shadow-xl border border-[#EDE7DD] shadow-[#2B4035]/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#EDE7DD]/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8B39F] animate-pulse" />
            <h3 className="text-xs uppercase tracking-widest text-[#2B4035] font-semibold">
              Schedule Your Appointment
            </h3>
          </div>
          <div className="text-xs text-[#5C5E58] flex items-center gap-2">
            <span>Prefer to call or text?</span>
            <a
              href={`tel:${info.phone}`}
              className="text-[#2B4035] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {info.displayPhone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
          {/* Service Category */}
          <div>
            <label htmlFor="booking-service-select" className="block text-[11px] uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
              Service Category
            </label>
            <div className="relative">
              <select
                id="booking-service-select"
                aria-label="Select service category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#F8F6F1] border border-[#EDE7DD] text-[#292A27] text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#2B4035] transition-colors appearance-none cursor-pointer font-medium"
              >
                <option value="all">All Service Offerings</option>
                {services.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.title.split("&")[0].trim()}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#5C5E58]">
                ▼
              </div>
            </div>
          </div>

          {/* Preferred Professional */}
          <div>
            <label htmlFor="booking-provider-select" className="block text-[11px] uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
              Preferred Artist / Specialist
            </label>
            <div className="relative">
              <select
                id="booking-provider-select"
                aria-label="Select preferred artist or specialist"
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="w-full bg-[#F8F6F1] border border-[#EDE7DD] text-[#292A27] text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#2B4035] transition-colors appearance-none cursor-pointer font-medium"
              >
                <option value="any">Any Available Artist</option>
                {team.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.role.split("&")[0].trim()}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#5C5E58]">
                ▼
              </div>
            </div>
          </div>

          {/* Preferred Day */}
          <div>
            <label htmlFor="booking-day-select" className="block text-[11px] uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
              Preferred Timing
            </label>
            <div className="relative">
              <select
                id="booking-day-select"
                aria-label="Select preferred timing"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full bg-[#F8F6F1] border border-[#EDE7DD] text-[#292A27] text-xs sm:text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#2B4035] transition-colors appearance-none cursor-pointer font-medium"
              >
                {days.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#5C5E58]">
                ▼
              </div>
            </div>
          </div>

          {/* Book Action */}
          <div>
            <button
              type="button"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
              className="w-full bg-[#2B4035] text-[#FFFDF8] rounded-xl px-5 py-3 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow opacity-95 pointer-events-auto select-none booking-disabled-cursor"
              title="Online appointment booking opening soon"
            >
              <Calendar className="w-4 h-4 text-[#B5A18D]" />
              <span>Continue to Book</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-3 pt-2 text-[11px] text-[#A8B39F] flex items-center justify-between flex-wrap gap-2">
          <span>Appointments opening soon • Call or text (303) 304-8077 for inquiries</span>
          <span className="hidden sm:inline text-[#5C5E58]">•</span>
          <span>Centennial, CO (Arapahoe Rd)</span>
          <span className="hidden sm:inline text-[#5C5E58]">•</span>
          <span>Free consultation with every appointment</span>
        </div>
      </div>
    </section>
  );
}
