"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Clock, User, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import BookButton from "@/components/BookButton";

interface Transformation {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  artist: string;
  duration: string;
  description: string;
  inclusions: string[];
  image: string;
  tag: string;
}

export default function TransformationShowcase() {
  const [activeTab, setActiveTab] = useState("hair");

  const transformations: Record<string, Transformation> = {
    hair: {
      id: "hair",
      category: "Hair Artistry",
      title: "Dimensional Honey Lived-In Balayage",
      subtitle: "Customized formulation using L'ANZA Healing Color & bond fortification",
      artist: "Jessica De Somma (Master Stylist Level 4)",
      duration: "3.5 Hours",
      description:
        "Designed to grow out naturally for 4 to 6 months without harsh root lines. Every lightening formula is blended with bond protectors and finished with a restorative deep moisture bath.",
      inclusions: [
        "Pre-color strand health & porosity assessment",
        "Custom hand-painted lived-in placement",
        "Gloss glaze toner (cancels brass, adds shine)",
        "Deep conditioning treatment & blowout finish"
      ],
      image: "/images/balayage_hair_art.jpg",
      tag: "Signature Lived-In Color"
    },
    skincare: {
      id: "skincare",
      category: "Ayurvedic Skincare",
      title: "Sacred Bronze Kansa Radiance Ritual",
      subtitle: "5,000-year-old healing metallurgy paired with organic Gotu Kola",
      artist: "Ashley Izaguirre (Licensed Esthetician)",
      duration: "80 Minutes",
      description:
        "The sacred bronze Kansa wand draws excess acidity and heat from facial tissue, activates Marma vitality points, and sculpts facial contours while botanical oils soothe sensitivity.",
      inclusions: [
        "Dosha skin analysis (Vata, Pitta, or Kapha)",
        "Gentle botanical enzyme purification",
        "Bronze Kansa wand lymphatic drainage",
        "Calming organic herbal masque & barrier seal"
      ],
      image: "/images/ayurvedic_kansa_ritual.jpg",
      tag: "Holistic Skin Revival"
    },
    nails: {
      id: "nails",
      category: "Clean Nail Lounge",
      title: "Dazzle Dry 5-Minute Rock-Hard Manicure",
      subtitle: "Clean 9-Free chemistry with European Russian cuticle detail",
      artist: "Davina Hunter (Nail Wellness Specialist)",
      duration: "50 Minutes",
      description:
        "Zero acrylic fumes, no aggressive drill filing, and no UV lamps required. Dries 100% rock-hard in exactly 5 minutes and wears chip-free for up to 3 weeks.",
      inclusions: [
        "Gentle Russian E-file dry cuticle perfection",
        "Natural nail plate strengthening prep",
        "9-Free non-toxic vitamin-infused polish",
        "100% hard dry in 5 mins (smudge-proof guarantee)"
      ],
      image: "/images/clean_dazzle_manicure.jpg",
      tag: "Fume-Free Clean Nails"
    },
    bridal: {
      id: "bridal",
      category: "Bridal Sanctuary",
      title: "Romantic Colorado Mountain Bridal Styling",
      subtitle: "Intimate bridal party suite overlooking Arapahoe foothills",
      artist: "Prana Master Bridal Team",
      duration: "Full Morning Experience",
      description:
        "Stress-free wedding morning pampering featuring soft textured boho updos, radiant climate-proof makeup, organic tea service, and private salon suite comfort.",
      inclusions: [
        "Comprehensive preview trial & color consultation",
        "High-definition climate-resistant makeup",
        "Custom floral hairpiece / veil placement",
        "Complimentary herbal tea & bridal refreshments"
      ],
      image: "/images/bridal_radiance_suite.jpg",
      tag: "Wedding Day Glow"
    }
  };

  const current = transformations[activeTab];

  return (
    <section className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE7DD] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> CRAFTED EXCELLENCE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium leading-tight">
            Real Transformations, Intentional Care
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
            Explore how our master artists blend science, ancient Ayurvedic herbs, and Vidal Sassoon precision to create effortless, healthy beauty.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {[
            { id: "hair", label: "Hair & Blonding" },
            { id: "skincare", label: "Ayurvedic Skin" },
            { id: "nails", label: "Clean Nails" },
            { id: "bridal", label: "Bridal Suite" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#2B4035] text-[#FFFDF8] shadow-sm"
                  : "bg-[#F8F6F1] text-[#5C5E58] hover:bg-[#EDE7DD] hover:text-[#292A27]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Feature Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Visual Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#EDE7DD]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover img-zoom-hover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-[#2B4035]/90 backdrop-blur-sm text-[#FFFDF8] text-xs font-semibold px-3 py-1 rounded-full border border-[#FFFDF8]/20">
              {current.tag}
            </div>
          </div>
        </div>

        {/* Right Column: In-Depth Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              {current.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#292A27] font-medium leading-snug">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B39F] font-medium">
              {current.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
            {current.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 bg-[#F8F6F1] p-3.5 rounded-xl border border-[#EDE7DD] text-xs">
            <div className="flex items-center gap-2 text-[#292A27]">
              <User className="w-4 h-4 text-[#2B4035] shrink-0" />
              <div>
                <div className="text-[10px] text-[#A8B39F] uppercase font-semibold">Artist</div>
                <div className="font-medium truncate">{current.artist}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#292A27]">
              <Clock className="w-4 h-4 text-[#2B4035] shrink-0" />
              <div>
                <div className="text-[10px] text-[#A8B39F] uppercase font-semibold">Session Time</div>
                <div className="font-medium">{current.duration}</div>
              </div>
            </div>
          </div>

          {/* Inclusions List */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-[#2B4035] font-semibold">
              Signature Inclusions:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C5E58]">
              {current.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#A8B39F] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <BookButton variant="primary" className="px-6 py-3 text-xs sm:text-sm">
              Reserve This Transformation
            </BookButton>
            <Link
              href="/services"
              className="text-xs font-semibold text-[#2B4035] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all {current.category} options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
