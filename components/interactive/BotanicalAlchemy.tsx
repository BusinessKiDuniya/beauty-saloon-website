"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Leaf, ShieldCheck, Droplet, ArrowRight, CheckCircle2 } from "lucide-react";
import BookButton from "@/components/BookButton";

export default function BotanicalAlchemy() {
  const [activeIngredient, setActiveIngredient] = useState(0);

  const botanicals = [
    {
      id: "neem",
      name: "Organic Neem Extract",
      sanskrit: "Arishta ('The Infallible Healer')",
      badge: "SKINCARE & SCALP",
      origin: "Southern India & Holistic Ayurvedic Apothecary",
      keyAction: "Deep Antimicrobial & Anti-Inflammatory Soothing",
      description:
        "Revered for thousands of years as the 'village pharmacy,' Neem cools reactive, red, or acne-prone complexions without stripping moisture. Used across our Ayurvedic Clarifying Facials and calming scalp washes.",
      servicesFeatured: ["Intensive Healing Neem Facial", "Scalp Detox Treatment"],
      highlight: "Soothes Colorado dry-climate barrier sensitivity instantly."
    },
    {
      id: "gotu-kola",
      name: "Gotu Kola (Centella Asiatica)",
      sanskrit: "Brahmi ('Supreme Wisdom')",
      badge: "AGE-DEFYING RADIANCE",
      origin: "Sustainably harvested Himalayan foothills",
      keyAction: "Collagen Synthesis & Elasticity Support",
      description:
        "A powerhouse botanical adaptogen clinically celebrated for stimulating micro-circulation and collagen synthesis. We infuse it into our Age-Defying Facials and Kansa wand acupressure rituals for visible lifting and lymphatic drainage.",
      servicesFeatured: ["Age Defying Ayurvedic Facial", "Radiance Deluxe Plan"],
      highlight: "Firms contours and brightens uneven dull skin tone."
    },
    {
      id: "argan-marula",
      name: "Cold-Pressed Argan & Marula Oils",
      sanskrit: "Taila ('Pure Nourishing Essence')",
      badge: "HAIR ALCHEMY",
      origin: "Fair-trade organic seed pressings",
      keyAction: "Lipid Barrier Sealing & UV Heat Protection",
      description:
        "Rich in essential fatty acids (Omega 6 & 9) and natural antioxidants. Formulated in Surface Pure Color and L'ANZA Healing Color to replenish hair cuticle lipids during color processing, preventing frizz and brittleness.",
      servicesFeatured: ["Custom Blonding & Balayage", "Restorative Botanical Hair Mask"],
      highlight: "Enables dimensional blonding while preserving 100% cuticle integrity."
    },
    {
      id: "mahanarayan",
      name: "Classical Mahanarayan Oil",
      sanskrit: "Mahanarayan Taila ('Great Preserver')",
      badge: "THERAPEUTIC MASSAGE",
      origin: "Classical sesame decoction with 29 wildcrafted herbs",
      keyAction: "Joint Lubrication & Deep Muscle Knot Dissolution",
      description:
        "An ancient formulation stewed slowly with ashwagandha, bala, ginger, and turmeric. Deeply penetrates tight neck, shoulder, and lumbar tissues to decompress stress and calm restless Vata energy.",
      servicesFeatured: ["Signature Ayurveda Massage", "Holistic Enhancements ($25)"],
      highlight: "Warm application melts chronic computer and desk tension."
    },
    {
      id: "dazzle-dry",
      name: "Dazzle Dry 9-Free System",
      sanskrit: "Shuddha ('Pure Chemistry')",
      badge: "CLEAN NAIL LOUNGE",
      origin: "Non-toxic bio-compatible clean cosmetic chemistry",
      keyAction: "Rock-Hard Cure in 5 Minutes (Zero UV/LED Lamps)",
      description:
        "The gold standard in non-toxic nail care. Free from nitrocellulose, formaldehyde, toluene, and camphor. Dries 100% hard in 5 minutes via natural evaporation, wears chip-free for up to 3 weeks, and removes with gentle acetone.",
      servicesFeatured: ["Dazzle Dry Manicure & Pedicure", "Ayurvedic Spa Nail Duo"],
      highlight: "100% fume-free application that respects natural nail keratin."
    }
  ];

  const current = botanicals[activeIngredient];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#1E2D25] text-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#3D5648] shadow-2xl space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D5648] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B4035] text-[#A8B39F] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#3D5648]">
              <Leaf className="w-3.5 h-3.5 text-[#B5A18D]" /> BOTANICAL ALCHEMY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF8] font-medium">
              Conscious Chemistry & Pure Botanicals
            </h2>
            <p className="text-xs sm:text-sm text-[#DDE3D9] mt-1 max-w-xl">
              We never compromise your long-term health for temporary results. Explore the hero botanicals that power every formula, treatment, and ritual in our space.
            </p>
          </div>

          <div className="text-xs text-[#A8B39F] flex items-center gap-1.5 shrink-0 bg-[#141F1A] px-3.5 py-1.5 rounded-full border border-[#3D5648]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Cruelty-Free & Fume-Free</span>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {botanicals.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIngredient(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                activeIngredient === idx
                  ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-md scale-[1.02]"
                  : "bg-[#2B4035] text-[#DDE3D9] border-[#3D5648] hover:bg-[#324b3e]"
              }`}
            >
              <Droplet className={`w-3 h-3 ${activeIngredient === idx ? "text-[#2B4035]" : "text-[#B5A18D]"}`} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Botanical Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#2B4035]/60 rounded-2xl p-6 sm:p-8 border border-[#3D5648]">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-[#3D5648]">
            <Image
              src="/images/botanical_alchemy_herbs.jpg"
              alt="Organic Botanical Salon Apothecary"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141F1A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#B5A18D] font-bold">
                {current.badge}
              </span>
              <div className="font-serif text-lg font-medium text-[#FFFDF8]">
                {current.sanskrit}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3D5648] pb-3">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF8] font-medium">
                  {current.name}
                </h3>
                <span className="text-xs text-[#A8B39F] italic">
                  Origin: {current.origin}
                </span>
              </div>
              <span className="text-xs bg-[#1E2D25] text-emerald-300 font-medium px-3 py-1 rounded-full border border-emerald-500/30">
                {current.keyAction}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DDE3D9] leading-relaxed">
              {current.description}
            </p>

            <div className="bg-[#1E2D25] p-3.5 rounded-xl border border-[#3D5648] text-xs space-y-1.5">
              <div className="font-semibold text-[#B5A18D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" />
                <span>Featured in Treatments:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {current.servicesFeatured.map((s, i) => (
                  <span
                    key={i}
                    className="bg-[#2B4035] text-[#FFFDF8] px-2.5 py-0.5 rounded-md text-[11px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#A8B39F] italic">
                {current.highlight}
              </span>
              <Link
                href="/services"
                className="text-xs font-semibold text-[#FFFDF8] hover:text-[#B5A18D] inline-flex items-center gap-1 underline underline-offset-4"
              >
                <span>View matching rituals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
