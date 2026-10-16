"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Coffee, HeartHandshake, Droplets, Scissors, Star, ArrowRight } from "lucide-react";
import BookButton from "@/components/BookButton";

interface SanctuaryExperienceTimelineProps {
  shortName?: string;
}

export default function SanctuaryExperienceTimeline({ shortName = "Prana" }: SanctuaryExperienceTimelineProps) {
  const [activeStage, setActiveStage] = useState(2); // Start on scalp wash

  const stages = [
    {
      num: "01",
      title: "Welcoming Tea & Sensory Grounding",
      subtitle: "Arrival & Decompression",
      icon: Coffee,
      image: "/images/welcome_tea_sanctuary.jpg",
      description:
        "Arrive to a serene, chemical-odor-free space with free storefront parking. Sip on freshly brewed organic Ayurvedic tea (customized for balance) as you shed the outside world's rush.",
      sensoryHighlight: "Ambient gentle acoustic soundscapes, cedarwood and lavender diffuser aromas.",
      fresherTip: "Feel free to request a 'Quiet Appointment' if you prefer to read, work, or relax in peaceful silence."
    },
    {
      num: "02",
      title: "In-Depth Consultation & Dosha Mapping",
      subtitle: "Active Listening First",
      icon: HeartHandshake,
      image: "/images/hair_color_alchemy.jpg",
      description:
        "Before touching a single strand, your artist conducts a 1-on-1 consultation assessing your lifestyle, face shape, hair texture, or skin energy points. We align on goals and maintenance timelines with 100% transparent pricing.",
      sensoryHighlight: "Zero intimidation; respectful, collaborative conversation.",
      fresherTip: "Bring reference photos or simply tell us your morning routine—we tailor your style to your life."
    },
    {
      num: "03",
      title: "Acupressure Scalp Wash & Botanical Mist",
      subtitle: "Restorative Reset",
      icon: Droplets,
      image: "/images/spa_scalp_acupressure.jpg",
      description:
        "Recline into our ergonomic ceramic wash lounges for a warm steam mist, therapeutic scalp acupressure massage, and deep conditioning treatment with cold-pressed botanical oils.",
      sensoryHighlight: "Tension completely dissolves from neck and temples under warm herbalized water.",
      fresherTip: "Automatically included with all haircut and color rituals at zero extra charge."
    },
    {
      num: "04",
      title: "Master Artistry & Clean Chemistry",
      subtitle: "Precision Execution",
      icon: Scissors,
      image: "/images/master_artistry_foilayage.jpg",
      description:
        "Experience Vidal Sassoon precision cutting, custom foilayage, or Dazzle Dry non-toxic manicure. Our artists formulate with L'ANZA Healing Color and Surface Pure—nourishing your hair during color application.",
      sensoryHighlight: "No stinging scalp sensations, no eye irritation from toxic fumes.",
      fresherTip: "All highlighting packages include your toner and bond protector with zero checkout surprises."
    },
    {
      num: "05",
      title: "The Radiant Reveal & Care Prescription",
      subtitle: "Empowered Renewal",
      icon: Star,
      image: "/images/bridal_radiance_suite.jpg",
      description:
        "Step up to the mirror and see your vibrant, dimensional self reflected back. We provide personalized botanical home-care guidance so your salon result lasts for months.",
      sensoryHighlight: "Silky, touchable hair that reflects natural light with mirror-like shine.",
      fresherTip: "Enjoy 10% off any home haircare or skincare products on your first visit."
    }
  ];

  const current = stages[activeStage];
  const Icon = current.icon;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-lg space-y-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE7DD] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> THE GUEST EXPERIENCE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium">
              A Day Inside the {shortName} Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
              From the moment you step through our doors to your radiant mirror reveal, experience a harmonious flow designed around your peace of mind.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <BookButton variant="primary" className="py-2.5 px-6 text-xs">
              Reserve Your Ritual
            </BookButton>
          </div>
        </div>

        {/* Step Progress Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#2B4035] text-[#FFFDF8] border-[#2B4035] shadow-md scale-[1.02]"
                    : "bg-[#F8F6F1] text-[#292A27] border-[#EDE7DD] hover:bg-[#EDE7DD]/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-sans text-xs font-bold tracking-wider not-italic ${
                      isActive ? "text-[#A8B39F]" : "text-[#B5A18D]"
                    }`}
                  >
                    STAGE {stage.num}
                  </span>
                  <StageIcon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#B5A18D]" : "text-[#5C5E58]"
                    }`}
                  />
                </div>
                <div className="mt-2 text-xs font-semibold line-clamp-1">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F6F1] rounded-2xl p-6 sm:p-8 border border-[#EDE7DD]">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-[#EDE7DD]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover img-zoom-hover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-[#FFFDF8]/90 text-[#2B4035] backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold border border-[#EDE7DD] flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-[#B5A18D]" />
              <span>Step {current.num} of 05</span>
            </div>
          </div>

          {/* Detailed Editorial Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
                {current.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2B4035] font-medium">
                {current.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              {current.description}
            </p>

            <div className="bg-[#FFFDF8] p-4 rounded-xl border border-[#EDE7DD] space-y-2 text-xs">
              <div className="text-[11px] uppercase tracking-wider text-[#2B4035] font-bold">
                Sensory Notes:
              </div>
              <p className="text-[#5C5E58] italic leading-relaxed">
                “{current.sensoryHighlight}”
              </p>
            </div>

            <div className="text-xs text-[#2B4035] bg-[#EDE7DD]/60 p-3 rounded-xl border border-[#DACFC2] flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D] shrink-0 mt-0.5" />
              <span>
                <strong>First-Time Guest Pro-Tip:</strong> {current.fresherTip}
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                className="text-xs font-semibold text-[#2B4035] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Continue to Step {(activeStage + 1) % stages.length + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href="/services"
                className="text-xs text-[#5C5E58] hover:text-[#292A27] underline"
              >
                View all service options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
