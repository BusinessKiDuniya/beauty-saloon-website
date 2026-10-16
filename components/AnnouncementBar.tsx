"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Phone, X, MapPin } from "lucide-react";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(true);
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const ann = client?.announcement || {
    locationBadge: info.address.city + ", " + info.address.state,
    headline: "Modern Luxury Beauty & Wellness Sanctuary",
    promo: "Special First-Time Guest Perks",
    phonePrompt: "Call or Text"
  };

  if (!isOpen) return null;

  return (
    <aside aria-label="Special announcements and location notice" className="bg-[#2B4035] text-[#FFFDF8] text-xs font-medium border-b border-[#3D5648] relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center space-x-2 text-center flex-wrap gap-y-1">
          <span className="inline-flex items-center gap-1 text-[#A8B39F] font-semibold tracking-wider uppercase text-[10px] bg-[#1E2D25] px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-[#B5A18D]" /> {ann.locationBadge}
          </span>
          <span className="hidden sm:inline text-[#DDE3D9]">•</span>
          <span className="text-[#F8F6F1]">
            {ann.headline}
          </span>
          <span className="hidden md:inline text-[#DDE3D9]">•</span>
          <span className="hidden md:inline text-[#DDE3D9]">
            {ann.promo}
          </span>
          <span className="hidden sm:inline text-[#DDE3D9]">•</span>
          <a
            href={`tel:${info.phone}`}
            className="inline-flex items-center gap-1 text-[#B5A18D] hover:text-[#FFFDF8] underline decoration-[#B5A18D]/50 underline-offset-2 transition-colors ml-1"
          >
            <Phone className="w-3 h-3" /> {ann.phonePrompt} {info.displayPhone}
          </a>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[#A8B39F] hover:text-[#FFFDF8] p-1 -mr-1 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
