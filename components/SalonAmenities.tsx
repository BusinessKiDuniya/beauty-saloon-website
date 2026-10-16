"use client";

import React from "react";
import { Coffee, Wind, Recycle, Car, VolumeX, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function SalonAmenities() {
  const amenities = [
    {
      icon: Coffee,
      title: "Complimentary Herbal Teas",
      description: "Organic Ayurvedic loose-leaf herbal teas steeped freshly upon arrival to calm the nervous system."
    },
    {
      icon: Wind,
      title: "100% Fume-Free Lounge",
      description: "Zero acrylic or dip chemical fumes. Pure breathable air protected by non-toxic clean salon policies."
    },
    {
      icon: Recycle,
      title: "Green Circle Salons Certified",
      description: "Hair clippings, foils, and color tubes are repurposed sustainably to clean ocean oil spills and renew soil."
    },
    {
      icon: Car,
      title: "Free Storefront Parking",
      description: "Convenient storefront parking directly in front of our Arapahoe Road entrance with zero parking meters."
    },
    {
      icon: VolumeX,
      title: "Sensory-Friendly Quiet Visits",
      description: "Prefer a silent appointment without small talk? Simply request a quiet visit during scheduling."
    },
    {
      icon: Leaf,
      title: "Brands That Give Back",
      description: "Featuring Surface Haircare (10% of proceeds support World Vision children) and Davines organic formulas."
    }
  ];

  return (
    <section className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-sm space-y-8">
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          GUEST HOSPITALITY & AMENITIES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium">
          A Sanctuary Built Around Your Comfort
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
          From the moment you step through our doors in Centennial, Colorado, every detail is curated to nurture your peace of mind and body.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {amenities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8F6F1] border border-[#EDE7DD] space-y-3 hover:border-[#DACFC2] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EDE7DD] flex items-center justify-center text-[#2B4035]">
                <Icon className="w-5 h-5 text-[#2B4035]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#292A27]">
                {item.title}
              </h3>
              <p className="text-xs text-[#5C5E58] leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
