"use client";

import React from "react";
import { Sparkles, Leaf, Shield, Award, Droplets, HeartHandshake } from "lucide-react";

export default function LuxuryMarquee() {
  const marqueeItems = [
    { label: "L'ANZA HEALING COLOR", icon: Droplets },
    { label: "ORGANIC AYURVEDIC DOSHA CARE", icon: Leaf },
    { label: "VIDAL SASSOON PRECISION", icon: Award },
    { label: "9-FREE DAZZLE DRY POLISH", icon: Sparkles },
    { label: "GREEN CIRCLE 95% RECYCLED", icon: Shield },
    { label: "DAVINES SUSTAINABLE BEAUTY", icon: Leaf },
    { label: "FUME-FREE CLEAN NAIL LOUNGE", icon: HeartHandshake },
    { label: "100% CRUELTY-FREE BOTANICALS", icon: Sparkles }
  ];

  // Duplicate list to achieve continuous, infinite loop
  const displayItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-label="Salon Certifications and Luxury Formulations"
      className="relative overflow-hidden py-4 bg-[#2B4035] text-[#FFFDF8] border-y border-[#3D5648] select-none"
    >
      {/* Left/Right Vignette Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#2B4035] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#2B4035] to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-8 sm:gap-12">
        {displayItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-medium text-[#EDE7DD] hover:text-[#FFFDF8] transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-[#B5A18D] shrink-0" />
              <span>{item.label}</span>
              <span className="text-[#A8B39F] ml-4 text-[10px]">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
