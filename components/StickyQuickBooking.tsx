"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Phone, MapPin, X, Sparkles, ChevronUp } from "lucide-react";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function StickyQuickBooking() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside aria-label="Quick booking shortcuts" className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 z-40 max-w-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#1E2D25]/95 backdrop-blur-md text-[#FFFDF8] rounded-2xl p-3 sm:p-4 shadow-2xl border border-[#3D5648] flex items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#2B4035] flex items-center justify-center text-[#B5A18D] shrink-0 border border-[#3D5648]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#FFFDF8]">
              Ready to Reserve?
            </div>
            <div className="text-[10px] text-[#A8B39F] truncate">
              {info.address.city}, {info.address.state} • Free Consult
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${info.phone}`}
            className="p-2 rounded-xl bg-[#2B4035] hover:bg-[#3D5648] text-[#DDE3D9] hover:text-[#FFFDF8] transition-colors"
            title="Call salon directly"
            aria-label="Call salon"
          >
            <Phone className="w-4 h-4" />
          </a>

          <span
            role="button"
            aria-disabled="true"
            className="px-4 py-2 rounded-xl bg-[#FFFDF8] text-[#1E2D25] text-xs font-bold shadow flex items-center gap-1.5 pointer-events-auto select-none booking-disabled-cursor opacity-95"
            title="Online appointment booking opening soon"
          >
            <Calendar className="w-3.5 h-3.5 text-[#2B4035]" />
            <span>Book Now</span>
          </span>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-[#A8B39F] hover:text-[#FFFDF8] p-1 transition-colors"
            aria-label="Close booking shortcut"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
