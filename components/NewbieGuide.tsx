"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Coffee,
  CheckCircle2,
  HelpCircle,
  Calendar,
  Phone,
  ShieldCheck,
  HeartHandshake,
  Car,
  Clock,
  ArrowRight
} from "lucide-react";
import { businessInfo as fallbackBusinessInfo } from "@/data/siteData";
import { useClient } from "@/context/ClientContext";

export default function NewbieGuide() {
  const { client } = useClient();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Booking & Stylist Level",
      subtitle: "Transparent tiers that fit your budget & goals",
      description:
        "Never feel intimidated by salon tiers! Level 1 stylists offer exceptional value and fresh mastery. Level 2 & 3 are experienced specialists with established blonding techniques. Level 4 (Master Stylist Jessica) brings Vidal Sassoon NYC educator-level expertise. All stylists share the same high standards and natural product lines.",
      tips: [
        "Unsure which level to pick? Select 'Any Available Artist' for maximum scheduling flexibility.",
        "Free consultations are gladly offered before any major color correction or extensions."
      ],
      icon: ShieldCheck
    },
    {
      step: "02",
      title: "Arrival & Welcome Tea",
      subtitle: "Stress-free parking & calm sanctuary atmosphere",
      description:
        "We are located at 7475 E Arapahoe Rd with convenient free storefront parking right outside our entrance. When you arrive, be greeted by calming aromas and complimentary herbal tea. Our space is completely fume-free (we do not offer acrylics or dip), ensuring pure, breathable comfort.",
      tips: [
        "Please arrive 5–10 minutes early to unwind and enjoy your welcoming tea.",
        "Sensory-friendly and quiet appointments are warmly supported upon request."
      ],
      icon: Coffee
    },
    {
      step: "03",
      title: "Personalized Consultation & Dosha Quiz",
      subtitle: "We actively listen before touching a single strand",
      description:
        "Every haircut, color, or spa ritual starts with an in-depth conversation. We assess your hair texture, lifestyle, and facial contours, or conduct a brief Ayurvedic Dosha quiz (Vata, Pitta, Kapha) to customize botanical serums and massage pressures specifically for you.",
      tips: [
        "Feel free to bring inspiration photos or screenshots of what you love (and what you don't!).",
        "We discuss maintenance timelines so you know exactly how long your style will last."
      ],
      icon: HeartHandshake
    },
    {
      step: "04",
      title: "Zero Hidden Add-Ons",
      subtitle: "All-inclusive highlights, treatments & honest care",
      description:
        `Unlike salons that surprise you at checkout with extra fees for toner, blowdries, or bond protectors, ${client.shortName} includes toner, bond protection, and deep conditioning treatment in all highlighting and balayage packages.`,
      tips: [
        "Dazzle Dry nail polish dries 100% hard in just 5 minutes without UV rays.",
        "All salon waste is recycled through Green Circle Salons—your visit heals the planet too."
      ],
      icon: CheckCircle2
    }
  ];

  const phone = client?.businessInfo?.phone || fallbackBusinessInfo.phone;
  const cityState = `${client?.businessInfo?.address?.city || "Centennial"}, ${client?.businessInfo?.address?.state || "CO"}`;

  return (
    <section className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE7DD] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> FIRST TIME AT {client.shortName.toUpperCase()}?
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium leading-tight">
            A Welcoming Guide for New Guests & Freshers
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
            Visiting a new salon or spa shouldn&apos;t feel stressful. Here is exactly what happens from the moment you book to when you walk out feeling renewed.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            role="button"
            aria-disabled="true"
            className="px-5 py-2.5 rounded-full bg-[#2B4035] text-[#FFFDF8] text-xs font-semibold flex items-center gap-1.5 shadow-sm pointer-events-auto select-none booking-disabled-cursor opacity-95"
            title="Online appointment booking opening soon"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B5A18D]" /> Book Your First Visit
          </span>
          <a
            href={`tel:${phone}`}
            className="px-4 py-2.5 rounded-full bg-[#EDE7DD] text-[#292A27] text-xs font-semibold hover:bg-[#DACFC2] transition-colors"
          >
            <Phone className="w-3 h-3 inline mr-1 text-[#2B4035]" /> Call/Text
          </a>
        </div>
      </div>

      {/* Step Tabs & Interactive Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Buttons List (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                  isActive
                    ? "bg-[#2B4035] text-[#FFFDF8] border-[#2B4035] shadow-md scale-[1.01]"
                    : "bg-[#F8F6F1] text-[#292A27] border-[#EDE7DD] hover:bg-[#EDE7DD]/60"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-sm font-extrabold not-italic shrink-0 ${
                    isActive
                      ? "bg-[#A8B39F] text-[#1E2D25]"
                      : "bg-[#EDE7DD] text-[#2B4035]"
                  }`}
                >
                  {s.step}
                </div>
                <div className="truncate">
                  <div className="font-semibold text-xs sm:text-sm truncate">
                    {s.title}
                  </div>
                  <div
                    className={`text-[11px] truncate mt-0.5 ${
                      isActive ? "text-[#DDE3D9]" : "text-[#5C5E58]"
                    }`}
                  >
                    {s.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card (8 cols) */}
        <div className="lg:col-span-8 bg-[#F8F6F1] rounded-2xl p-6 sm:p-8 border border-[#EDE7DD] space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              STEP {steps[activeStep].step} OF 04
            </span>
            <span className="text-xs text-[#A8B39F] font-semibold bg-[#FFFDF8] px-3 py-1 rounded-full border border-[#EDE7DD]">
              {cityState} Experience
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B4035] font-medium leading-snug">
            {steps[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
            {steps[activeStep].description}
          </p>

          <div className="bg-[#FFFDF8] p-4 rounded-xl border border-[#EDE7DD] space-y-2">
            <div className="text-[11px] uppercase tracking-wider text-[#2B4035] font-semibold">
              Helpful Pro-Tips for Freshers:
            </div>
            <ul className="space-y-1.5 text-xs text-[#5C5E58]">
              {steps[activeStep].tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B39F] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs text-[#A8B39F]">
              Next Step: {steps[(activeStep + 1) % steps.length].title}
            </div>
            <button
              onClick={() => setActiveStep((activeStep + 1) % steps.length)}
              className="text-xs font-semibold text-[#2B4035] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Continue to next step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
