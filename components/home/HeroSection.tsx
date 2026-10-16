"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import BookButton from "@/components/BookButton";
import { ClientHero } from "@/types";

interface HeroSectionProps {
  hero: ClientHero;
  shortName: string;
}

export default function HeroSection({ hero, shortName }: HeroSectionProps) {
  return (
    <section className="relative pt-8 sm:pt-14 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Column: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DD] border border-[#DACFC2] text-xs font-semibold text-[#2B4035] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal text-[#292A27] leading-[1.08] tracking-tight">
              {hero.titleLine1} <br />
              <span className="italic font-light text-[#2B4035]">
                {hero.titleItalic}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C5E58] leading-relaxed max-w-lg">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <BookButton
                variant="primary"
                className="py-4 px-8 text-sm justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Book an Appointment
              </BookButton>

              <Link
                href="/services"
                className="px-7 py-4 rounded-full border border-[#2B4035] text-[#2B4035] hover:bg-[#2B4035] hover:text-[#FFFDF8] font-semibold text-sm transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span>Explore Services & Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 border-t border-[#EDE7DD] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5C5E58]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035]" />
                <span>Vidal Sassoon & Paul Mitchell Trained</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035]" />
                <span>Fume-Free & Non-Toxic Space</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2B4035]" />
                <span>95% Salon Waste Diverted</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Layered Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative h-[440px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#EDE7DD]">
                <Image
                  src={hero.heroImage}
                  alt={`${shortName} Salon Sanctuary`}
                  fill
                  priority
                  className="object-cover img-zoom-hover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/40 via-transparent to-transparent" />
              </div>

              {/* Secondary Floating Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-60 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8]">
                <Image
                  src={hero.secondaryImage}
                  alt="Artisan Styling Detail"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-[#2B4035]/20 backdrop-blur-[1px]" />
                <div className="absolute bottom-3 left-3 right-3 text-[#FFFDF8] text-[11px] font-medium leading-tight drop-shadow">
                  Hand-crafted dimensional artistry & organic care
                </div>
              </div>

              {/* Floating Pill Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FFFDF8] px-4 py-2.5 rounded-2xl shadow-xl border border-[#EDE7DD] flex items-center gap-2.5 animate-bounce-subtle">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#5C5E58] font-bold">
                    Now Welcoming
                  </div>
                  <div className="text-xs font-sans font-bold text-[#292A27]">
                    New Guests & Consultations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
