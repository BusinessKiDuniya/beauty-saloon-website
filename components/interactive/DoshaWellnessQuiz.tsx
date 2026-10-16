"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Wind, Flame, Mountain, RotateCcw, ArrowRight, CheckCircle2 } from "lucide-react";
import BookButton from "@/components/BookButton";

interface DoshaResult {
  dosha: string;
  elements: string;
  title: string;
  qualities: string;
  recommendedHerbs: string[];
  recommendedTreatments: { name: string; href: string }[];
  description: string;
}

export default function DoshaWellnessQuiz() {
  const [hairType, setHairType] = useState<string | null>(null);
  const [skinType, setSkinType] = useState<string | null>(null);
  const [energyType, setEnergyType] = useState<string | null>(null);

  const calculateDosha = (): DoshaResult => {
    // Determine dominant dosha based on picks
    if (skinType === "pitta" || hairType === "pitta") {
      return {
        dosha: "Pitta",
        elements: "Fire & Water",
        title: "The Fire Constitution • Radiant & Heat-Sensitive",
        qualities: "Warm, reactive, sensitive to harsh lighting and chemical fumes.",
        recommendedHerbs: ["Organic Neem", "Cucumber Hydrosol", "Rosewater", "Cooling Coconut Taila"],
        recommendedTreatments: [
          { name: "Intensive Healing Neem Facial", href: "/services/skincare" },
          { name: "Low-Tox Balayage with Surface Pure Color", href: "/services/hair" },
          { name: "Dazzle Dry 5-Minute Non-Toxic Manicure", href: "/services/nails" }
        ],
        description:
          "Your skin and scalp flourish when cooled and gently shielded from high heat. Avoid harsh bleaches or heavy occlusive oils. Our clean formulations ensure luminous tone without stinging, flushing, or scalp sensitivity."
      };
    }

    if (hairType === "kapha" || skinType === "kapha") {
      return {
        dosha: "Kapha",
        elements: "Earth & Water",
        title: "The Earth Constitution • Resilient & Buildup-Prone",
        qualities: "Dense hair, sluggish lymphatic flow, moisture-retentive.",
        recommendedHerbs: ["Eucalyptus", "Stimulating Rosemary", "Sea Salt Scrub", "Bergamot"],
        recommendedTreatments: [
          { name: "Clarifying Scalp Detox & Acupressure Wash", href: "/services/hair" },
          { name: "Bronze Kansa Wand Lymphatic Facial", href: "/services/skincare" },
          { name: "Precision Weight-Removal Haircut", href: "/services/hair" }
        ],
        description:
          "Your hair and skin love invigorating, circulation-stimulating rituals. Deep clarifying scrubs, steam mists, and precision layering remove environmental heavy buildup to leave you feeling light and energized."
      };
    }

    // Default Vata
    return {
      dosha: "Vata",
      elements: "Air & Ether",
      title: "The Air Constitution • Delicate & Moisture-Seeking",
      qualities: "Naturally wavy/fine hair, dry scalp in Colorado climate, prone to frizz and stress knots.",
      recommendedHerbs: ["Gotu Kola", "Warm Mahanarayan Sesame Oil", "Argan & Marula Lipids", "Ashwagandha"],
      recommendedTreatments: [
        { name: "Signature Ayurveda Massage with Warm Herbal Oils", href: "/services/massage" },
        { name: "Deep Moisture Balayage with Bond Restorer", href: "/services/hair" },
        { name: "Warm Paraffin Deep Hydration Pedicure", href: "/services/nails" }
      ],
      description:
        "Colorado dry air depletes Vata energy first, causing hair brittleness and cuticle roughness. Your ideal sanctuary experience centers on grounding warmth, rich lipid replenishment, and soothing scalp acupressure."
    };
  };

  const isComplete = hairType && skinType && energyType;
  const result = isComplete ? calculateDosha() : null;

  const handleReset = () => {
    setHairType(null);
    setSkinType(null);
    setEnergyType(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#3D5648] shadow-2xl space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D5648] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E2D25] text-[#A8B39F] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#3D5648]">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> 45-SECOND WELLNESS DIAGNOSTIC
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF8] font-medium leading-tight">
              Discover Your Ayurvedic Dosha & Ideal Ritual
            </h2>
            <p className="text-xs sm:text-sm text-[#DDE3D9] mt-1 max-w-xl leading-relaxed">
              In Ayurveda, your Dosha (Vata, Pitta, or Kapha) defines what botanical oils, treatment temperatures, and hair products will deliver your longest-lasting results.
            </p>
          </div>

          {(hairType || skinType || energyType) && (
            <button
              onClick={handleReset}
              className="text-xs text-[#A8B39F] hover:text-[#FFFDF8] flex items-center gap-1.5 cursor-pointer underline self-start md:self-auto not-italic font-sans font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start over
            </button>
          )}
        </div>

        {/* 3 Interactive Question Blocks */}
        <div className="space-y-6">
          {/* Question 1: Hair Texture */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-sans font-bold flex items-center gap-2 not-italic">
              <span className="w-5 h-5 rounded-full bg-[#1E2D25] text-[#A8B39F] flex items-center justify-center text-xs font-bold font-sans not-italic">
                1
              </span>
              <span>How does your hair naturally behave?</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "vata", label: "Dry, wavy/curly, frizzy, or prone to Colorado static", icon: Wind, dosha: "Vata" },
                { id: "pitta", label: "Fine to medium, heat-sensitive, prone to redness", icon: Flame, dosha: "Pitta" },
                { id: "kapha", label: "Thick, coarse, heavy, or gets oily at the roots quickly", icon: Mountain, dosha: "Kapha" }
              ].map((opt) => {
                const Icon = opt.icon;
                const isSelected = hairType === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setHairType(opt.id)}
                    className={`p-4 rounded-2xl border text-left text-xs font-sans font-medium transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-lg scale-[1.02]"
                        : "bg-[#1E2D25] text-[#DDE3D9] border-[#3D5648] hover:bg-[#23352B]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? "text-[#2B4035]" : "text-[#B5A18D]"}`} />
                    <div>
                      <span className="font-bold block text-sm mb-0.5">{opt.dosha} Tendency</span>
                      <span className="leading-relaxed opacity-90">{opt.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2: Skin & Scalp Focus */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-sans font-bold flex items-center gap-2 not-italic">
              <span className="w-5 h-5 rounded-full bg-[#1E2D25] text-[#A8B39F] flex items-center justify-center text-xs font-bold font-sans not-italic">
                2
              </span>
              <span>What does your skin or scalp crave most?</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "vata", label: "Intense moisture, hydration, and softening coarse texture" },
                { id: "pitta", label: "Cooling calming relief, reducing redness, sensitive skin care" },
                { id: "kapha", label: "Deep cleansing, exfoliating buildup, and lightweight lift" }
              ].map((opt) => {
                const isSelected = skinType === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSkinType(opt.id)}
                    className={`p-4 rounded-2xl border text-left text-xs font-sans font-medium transition-all cursor-pointer leading-relaxed ${
                      isSelected
                        ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-lg"
                        : "bg-[#1E2D25] text-[#DDE3D9] border-[#3D5648] hover:bg-[#23352B]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3: Stress & Energy */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-sans font-bold flex items-center gap-2 not-italic">
              <span className="w-5 h-5 rounded-full bg-[#1E2D25] text-[#A8B39F] flex items-center justify-center text-xs font-bold font-sans not-italic">
                3
              </span>
              <span>How does daily stress show up in your body?</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "vata", label: "Restless racing thoughts, cold hands/feet, tight neck stiffness" },
                { id: "pitta", label: "Feeling overheated, irritated, inflammation or skin breakouts" },
                { id: "kapha", label: "Sluggish lethargy, heavy tired muscles, fluid retention" }
              ].map((opt) => {
                const isSelected = energyType === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setEnergyType(opt.id)}
                    className={`p-4 rounded-2xl border text-left text-xs font-sans font-medium transition-all cursor-pointer leading-relaxed ${
                      isSelected
                        ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-lg"
                        : "bg-[#1E2D25] text-[#DDE3D9] border-[#3D5648] hover:bg-[#23352B]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Personalized Diagnostic Reveal */}
        {result && (
          <div className="bg-[#FFFDF8] text-[#292A27] rounded-2xl p-6 sm:p-8 border border-[#EDE7DD] shadow-2xl animate-in zoom-in-95 duration-300 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE7DD] pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-sans font-bold not-italic">
                  YOUR BOTANICAL DIAGNOSTIC MATCH
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#2B4035] font-medium mt-1">
                  Dominant Constitution: {result.dosha} ({result.elements})
                </h3>
              </div>
              <span className="text-xs bg-[#EDE7DD] text-[#2B4035] font-sans font-bold px-3 py-1.5 rounded-full self-start sm:self-auto not-italic">
                Personalized Botanical Prescription
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              {result.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F8F6F1] p-4 rounded-xl border border-[#EDE7DD] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#2B4035] font-sans font-bold not-italic">
                  Hero Herbs For Your Constitution:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {result.recommendedHerbs.map((h, i) => (
                    <span
                      key={i}
                      className="bg-[#FFFDF8] text-[#292A27] px-2.5 py-1 rounded-md text-xs font-medium border border-[#EDE7DD]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F6F1] p-4 rounded-xl border border-[#EDE7DD] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#2B4035] font-sans font-bold not-italic">
                  Recommended Tailored Rituals:
                </span>
                <ul className="space-y-1.5 text-xs text-[#292A27]">
                  {result.recommendedTreatments.map((t, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {t.name}
                      </span>
                      <Link
                        href={t.href}
                        className="text-[#2B4035] font-bold hover:underline ml-2"
                      >
                        View →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <BookButton variant="primary" className="py-3 px-8 text-xs">
                Book This {result.dosha} Ritual Consultation
              </BookButton>

              <span className="text-xs text-[#5C5E58]">
                Every treatment starts with a complimentary hands-on consultation.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
