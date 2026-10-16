"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import BookButton from "@/components/BookButton";

export default function StylistTierInteractive() {
  const [selectedTier, setSelectedTier] = useState<number>(3); // Default to Level 4 Master (index 3)

  const tiers = [
    {
      level: "Level 1",
      title: "Rising Artists",
      subtitle: "Licensed professionals with refined foundational mastery",
      cutPrice: "$80",
      colorTouchUp: "$95",
      balayage: "$260",
      blowout: "$50",
      experience: "1 – 3 Years / Apprenticeship Complete",
      idealFor:
        "Guests looking for exceptional salon quality, meticulous attention to detail, and top-tier organic products at our most accessible pricing.",
      education: "Emily Griffith Cosmetology, Avalon Institute, continuous in-house Vidal Sassoon cutting theory.",
      stylists: ["Erika Martinez", "Yvonne Renee"]
    },
    {
      level: "Level 2",
      title: "Specialist Stylists",
      subtitle: "Experienced artists with advanced blonding & precision cutting skills",
      cutPrice: "$85",
      colorTouchUp: "$100",
      balayage: "$285",
      blowout: "$55",
      experience: "3 – 6 Years Experience",
      idealFor:
        "Clients seeking dimensional blonding, textured layers, tailored beard/clipper cuts, and reliable style refreshes.",
      education: "Paul Mitchell Honor Graduate, Surface Pure Color Specialist Certification.",
      stylists: ["Billy Conklin"]
    },
    {
      level: "Level 3",
      title: "Senior Stylists",
      subtitle: "Established masters with extensive color correction expertise",
      cutPrice: "$90",
      colorTouchUp: "$105",
      balayage: "$310",
      blowout: "$60",
      experience: "6 – 10+ Years Experience",
      idealFor:
        "Guests requiring complex color correction, heavy highlight transformations, or specialized gray blending formulations.",
      education: "Advanced L'ANZA Healing Color formulations, Vidal Sassoon architectural bob & shape cutting.",
      stylists: ["Senior Resident Stylists"]
    },
    {
      level: "Level 4",
      title: "Master Educator & Founder",
      subtitle: "Salon founder with Vidal Sassoon NYC Master training",
      cutPrice: "$95",
      colorTouchUp: "$110",
      balayage: "$330",
      blowout: "$65",
      experience: "14+ Years (Vidal Sassoon NYC & Kripalu Ayurveda)",
      idealFor:
        "Transformational haircuts for thick, unruly hair, bespoke high-impact lived-in blondes, and full holistic consultation.",
      education: "Vidal Sassoon Master Academy New York City, Kripalu Holistic Health Institute, Aveda Ayurveda Immersion.",
      stylists: ["Jessica De Somma (Founder & Master Stylist)"]
    }
  ];

  const current = tiers[selectedTier];

  return (
    <section className="bg-[#EDE7DD]/40 rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#DACFC2]/80 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DACFC2] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#2B4035] font-semibold block mb-1">
            RADICAL PRICE TRANSPARENCY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium leading-tight">
            Our 4-Tier Stylist Structure Explained
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
            At Prana, prices reflect each stylist&apos;s years of advanced education, demand, and technical mastery. Regardless of level, all artists use the exact same organic, health-first botanical color lines.
          </p>
        </div>

        {/* Tier Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
          {tiers.map((t, idx) => (
            <button
              key={t.level}
              onClick={() => setSelectedTier(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                selectedTier === idx
                  ? "bg-[#2B4035] text-[#FFFDF8] shadow-md scale-102"
                  : "bg-[#FFFDF8] text-[#5C5E58] border border-[#DACFC2] hover:bg-[#EDE7DD]"
              }`}
            >
              <div className="font-bold">{t.level}</div>
              <div className="text-[10px] opacity-80 truncate">{t.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Tier Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 border border-[#EDE7DD] shadow-sm">
        {/* Tier Overview (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-bold uppercase tracking-wider">
              {current.level} • {current.title}
            </span>
            <span className="text-xs text-[#A8B39F]">{current.experience}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B4035] font-medium">
            {current.subtitle}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-[#5C5E58]">
            <div>
              <span className="font-semibold text-[#292A27]">Who this tier is best for:</span>
              <p className="mt-0.5 leading-relaxed">{current.idealFor}</p>
            </div>
            <div>
              <span className="font-semibold text-[#292A27]">Advanced Education & Accreditations:</span>
              <p className="mt-0.5 leading-relaxed">{current.education}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#EDE7DD]">
            <span className="text-[11px] uppercase tracking-wider text-[#A8B39F] font-semibold">
              Artists at this level:
            </span>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {current.stylists.map((name, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#F8F6F1] border border-[#EDE7DD] text-xs font-medium text-[#292A27]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Card for Selected Tier (5 cols) */}
        <div className="lg:col-span-5 bg-[#2B4035] text-[#FFFDF8] rounded-2xl p-6 sm:p-7 space-y-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-[#3D5648] pb-3">
            <span className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold">
              {current.level} Rates
            </span>
            <span className="text-[11px] text-[#A8B39F]">All-Inclusive</span>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between py-1 border-b border-[#3D5648]/60">
              <span className="text-[#DDE3D9]">Custom Precision Haircut</span>
              <span className="font-serif font-bold text-base text-[#FFFDF8]">{current.cutPrice}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#3D5648]/60">
              <span className="text-[#DDE3D9]">Botanical Color Touch-Up</span>
              <span className="font-serif font-bold text-base text-[#FFFDF8]">{current.colorTouchUp}+</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#3D5648]/60">
              <span className="text-[#DDE3D9]">Full Balayage / Highlighting</span>
              <span className="font-serif font-bold text-base text-[#FFFDF8]">{current.balayage}+</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-[#DDE3D9]">Signature Wash & Blowout</span>
              <span className="font-serif font-bold text-base text-[#FFFDF8]">{current.blowout}</span>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#A8B39F] leading-tight">
            *All highlighting and balayage appointments include your toner, bond protector, and deep conditioning treatment.
          </div>

          <div className="pt-1">
            <BookButton variant="white" className="w-full text-xs py-2.5">
              Reserve with {current.level} Stylist
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
