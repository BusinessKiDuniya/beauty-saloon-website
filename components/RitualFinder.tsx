"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, RotateCcw, Calendar, Check, Star } from "lucide-react";

interface Recommendation {
  title: string;
  category: string;
  href: string;
  price: string;
  duration: string;
  description: string;
  idealFor: string;
  stylistMatch: string;
}

export default function RitualFinder() {
  const [goal, setGoal] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);

  const goalOptions = [
    { id: "hair", label: "Hair Color, Balayage or Cut", icon: "✨" },
    { id: "skin", label: "Ayurvedic Facial & Skin Radiance", icon: "🌿" },
    { id: "massage", label: "Deep Tension Relief & Massage", icon: "💆" },
    { id: "nails", label: "Clean, Fast-Drying Nails", icon: "💅" },
    { id: "lashes", label: "Lash Extensions or Brow Lift", icon: "👁️" }
  ];

  const getPriorityOptions = (selectedGoal: string) => {
    switch (selectedGoal) {
      case "hair":
        return [
          { id: "blonding", label: "Low-maintenance blonding or balayage that grows out seamlessly" },
          { id: "haircut", label: "Precision haircut tailored to natural wavy/thick texture" },
          { id: "gray", label: "Gentle plant-based root touch-up for gray coverage" }
        ];
      case "skin":
        return [
          { id: "antiaging", label: "Firming, anti-aging & elasticity with Gotu Kola" },
          { id: "sensitive", label: "Calming sensitive, reactive or acne-prone skin with Neem" },
          { id: "glow", label: "Instant luminous glow & lymphatic drainage before an event" }
        ];
      case "massage":
        return [
          { id: "dosha", label: "Full-body harmony & balancing my Ayurvedic Dosha" },
          { id: "knot", label: "Relieving deep neck, shoulder or computer desk stiffness" },
          { id: "prenatal", label: "Gentle prenatal nurturing with certified doula support" }
        ];
      case "nails":
        return [
          { id: "fast", label: "Non-toxic polish that dries rock-hard in 5 minutes (Dazzle Dry)" },
          { id: "art", label: "Intricate hand-painted nail art & Apres Gel-X tips" },
          { id: "russian", label: "European/Russian dry cuticle detailing with durable gel" }
        ];
      case "lashes":
        return [
          { id: "classic", label: "Natural mascara-free look with featherweight faux mink" },
          { id: "perm", label: "Perming natural lashes with zero extension maintenance (Lash Lift & Tint)" },
          { id: "brow", label: "Full, feathery brushed-up look with Brow Lamination & Tint" }
        ];
      default:
        return [];
    }
  };

  const getRecommendation = (): Recommendation => {
    if (goal === "hair") {
      if (priority === "haircut") {
        return {
          title: "Customized Precision Haircut & Scalp Wash",
          category: "Hair Services",
          href: "/services/hair",
          price: "$80 – $95",
          duration: "60 min",
          description: "Tailored to your natural wave, lifestyle, and facial structure. Includes organic wash, scalp massage, and blowout.",
          idealFor: "Anyone needing an intentional haircut that effortlessly grows out.",
          stylistMatch: "Jessica De Somma or Billy Conklin"
        };
      }
      return {
        title: "Full / Partial Balayage with Healing Color",
        category: "Hair Services",
        href: "/services/hair",
        price: "$220 – $330",
        duration: "135 – 180 min",
        description: "Dimensional lived-in blonding with L'ANZA Healing Color. Automatically includes toner, bond protector, and deep conditioning treatment.",
        idealFor: "Sun-kissed, lived-in blonde with zero brassiness or damage.",
        stylistMatch: "Master Stylist Jessica De Somma or Billy Conklin"
      };
    }

    if (goal === "skin") {
      if (priority === "sensitive") {
        return {
          title: "Intensive Healing Neem Facial",
          category: "Ayurvedic Skincare",
          href: "/services/skincare",
          price: "$65 (30m) – $125 (50m)",
          duration: "30 / 50 min",
          description: "Infused with organic Neem ('the pharmacy tree') and soothing botanical oils to heal irritated, red, or reactive skin without aggressive peeling.",
          idealFor: "Sensitive, easily flushed, or breakout-prone skin.",
          stylistMatch: "Ashley Izaguirre or Erika Martinez"
        };
      }
      return {
        title: "Brightening Glow Facial with Kansa Wand",
        category: "Ayurvedic Skincare",
        href: "/services/skincare",
        price: "$65 – $175",
        duration: "30 / 50 / 80 min",
        description: "Deep hydration, botanical skin-illuminators, and traditional bronze Kansa wand massage to stimulate circulation and radiance.",
        idealFor: "Dullness, uneven tone, and immediate pre-event glow.",
        stylistMatch: "Ashley Izaguirre"
      };
    }

    if (goal === "massage") {
      if (priority === "prenatal") {
        return {
          title: "Prenatal Nurturing Massage",
          category: "Therapeutic Massage",
          href: "/services/massage",
          price: "$115",
          duration: "50 min",
          description: "Administered by a licensed massage therapist who is also a certified doula. Supportive side-lying bolsters relieve lumbar and hip strain safely.",
          idealFor: "Expectant mothers in any trimester seeking relief and connection.",
          stylistMatch: "Cassandra Johnson (LMT & Doula)"
        };
      }
      return {
        title: "Signature Ayurveda Massage",
        category: "Therapeutic Massage",
        href: "/services/massage",
        price: "$150",
        duration: "75 min",
        description: "Personalized to balance your Dosha (Vata, Pitta, Kapha) with warm herbalized oils, Marma acupressure, and choice of hot stones or cupping.",
        idealFor: "Whole-body nervous system grounding and stress dissolution.",
        stylistMatch: "Cassandra Johnson"
      };
    }

    if (goal === "nails") {
      if (priority === "art") {
        return {
          title: "Full Apres Gel-X Set with Custom Nail Art",
          category: "Clean Nail Lounge",
          href: "/services/nails",
          price: "$90 + Art ($5 – $35)",
          duration: "90 – 120 min",
          description: "Soft gel full extensions with zero acrylic odor or filing damage, combined with intricate hand-painted 3D art, chrome, or charms.",
          idealFor: "Creative expression, trendy sets, and sensory-friendly appointments.",
          stylistMatch: "Rhys Orion"
        };
      }
      return {
        title: "Dazzle Dry 5-Minute Quick-Dry Manicure",
        category: "Clean Nail Lounge",
        href: "/services/nails",
        price: "$45",
        duration: "45 min",
        description: "9-Free clean polish that dries rock-hard in 5 minutes with no UV lamps. Wears chip-free for up to 3 weeks and removes with normal polish remover.",
        idealFor: "Natural nail health, zero smudging, and clean beauty lovers.",
        stylistMatch: "Davina Hunter or Yvonne Renee"
      };
    }

    // Default to Lashes
    if (priority === "perm") {
      return {
        title: "Lash Lift & Tint",
        category: "Lashes & Brows",
        href: "/services/lashes-brows-waxing",
        price: "$110",
        duration: "60 min",
        description: "Elevates and curls your natural lashes for 6 to 8 weeks with deep black tint. Zero extensions or fills required.",
        idealFor: "Low-maintenance daily morning routine.",
        stylistMatch: "Ashley Izaguirre"
      };
    }
    return {
      title: "Borboleta Hybrid Lash Full Set ($50 Off New Set)",
      category: "Lashes & Brows",
      href: "/services/lashes-brows-waxing",
      price: "$200 ($150 with special)",
      duration: "135 min",
      description: "Featherweight faux mink fans mixed with classic lashes using climate-resistant adhesive formulated for Colorado's dry air.",
      idealFor: "Full, fluttery wake-up-ready eyes.",
      stylistMatch: "Ashley Izaguirre"
    };
  };

  const recommendation = goal && priority ? getRecommendation() : null;

  const handleReset = () => {
    setGoal(null);
    setPriority(null);
  };

  return (
    <section className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#3D5648] shadow-xl space-y-8">
      {/* Quiz Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D5648] pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#A8B39F] font-semibold block mb-1">
            INTERACTIVE RITUAL FINDER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF8] font-medium">
            Find Your Ideal Service in 30 Seconds
          </h2>
          <p className="text-xs sm:text-sm text-[#DDE3D9] mt-1 max-w-xl">
            Unsure where to start? Tell us what you&apos;re looking to experience, and we&apos;ll match you with the exact treatment, pricing, and certified artist.
          </p>
        </div>

        {goal && (
          <button
            onClick={handleReset}
            className="text-xs text-[#A8B39F] hover:text-[#FFFDF8] flex items-center gap-1.5 cursor-pointer underline self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Start over
          </button>
        )}
      </div>

      {/* Step 1: Goal Selection */}
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#1E2D25] text-[#A8B39F] flex items-center justify-center text-xs">
            1
          </span>
          <span>What type of experience are you looking for?</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {goalOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setGoal(opt.id);
                setPriority(null);
              }}
              className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex flex-col justify-between min-h-[78px] ${
                goal === opt.id
                  ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-md scale-[1.02]"
                  : "bg-[#1E2D25] text-[#DDE3D9] border-[#3D5648] hover:bg-[#23352B]"
              }`}
            >
              <span className="text-base">{opt.icon}</span>
              <span className="mt-2 line-clamp-2">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Priority Selection */}
      {goal && (
        <div className="space-y-3 pt-2 border-t border-[#3D5648] animate-in fade-in duration-300">
          <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#1E2D25] text-[#A8B39F] flex items-center justify-center text-xs">
              2
            </span>
            <span>What is your main priority or focus?</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {getPriorityOptions(goal).map((p) => (
              <button
                key={p.id}
                onClick={() => setPriority(p.id)}
                className={`p-4 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer leading-relaxed ${
                  priority === p.id
                    ? "bg-[#FFFDF8] text-[#1E2D25] border-[#FFFDF8] shadow-md"
                    : "bg-[#1E2D25] text-[#DDE3D9] border-[#3D5648] hover:bg-[#23352B]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Instant Matched Result */}
      {recommendation && (
        <div className="bg-[#FFFDF8] text-[#292A27] rounded-2xl p-6 sm:p-8 border border-[#EDE7DD] shadow-lg animate-in zoom-in-95 duration-300 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE7DD] pb-3">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              YOUR PERSONAL MATCH • {recommendation.category.toUpperCase()}
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2B4035]">
              <span>Estimated: {recommendation.price}</span>
              <span>•</span>
              <span>{recommendation.duration}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B4035] font-medium">
              {recommendation.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              {recommendation.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#F8F6F1] p-3.5 rounded-xl border border-[#EDE7DD]">
            <div>
              <span className="font-semibold text-[#292A27]">Why this matches you:</span>
              <p className="text-[#5C5E58] mt-0.5">{recommendation.idealFor}</p>
            </div>
            <div>
              <span className="font-semibold text-[#292A27]">Recommended Specialist:</span>
              <p className="text-[#2B4035] font-medium mt-0.5">{recommendation.stylistMatch}</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <Link
              href={recommendation.href}
              className="text-xs font-semibold text-[#2B4035] hover:underline inline-flex items-center gap-1"
            >
              <span>View full service details & pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <span
              role="button"
              aria-disabled="true"
              className="px-6 py-2.5 rounded-full bg-[#2B4035] text-[#FFFDF8] text-xs font-semibold flex items-center gap-1.5 shadow pointer-events-auto select-none booking-disabled-cursor opacity-95"
              title="Online appointment booking opening soon"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B5A18D]" /> Book This Ritual Online
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
