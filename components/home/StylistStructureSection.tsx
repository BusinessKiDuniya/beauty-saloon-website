"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookButton from "@/components/BookButton";
import StylistTierInteractive from "@/components/StylistTierInteractive";

interface StylistStructureSectionProps {
  shortName: string;
}

export default function StylistStructureSection({ shortName }: StylistStructureSectionProps) {
  return (
    <section className="bg-[#EDE7DD]/60 py-16 sm:py-24 border-y border-[#DACFC2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#2B4035] font-semibold">
              Signature Salon Feature
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292A27] font-medium leading-tight">
              Healing Color & <br />
              <span className="italic font-light text-[#2B4035]">
                4-Tier Stylist Structure.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed">
              At {shortName}, we believe you should never have to choose between rich, luminous hair color and the health of your scalp. We formulate with botanical, health-first ingredients that nourish hair cuticles.
            </p>
            <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed">
              Every highlighting and balayage appointment automatically includes toner, bond protector, and restorative deep conditioning treatment—no hidden add-on fees. Choose from our 4-level stylist structure based on your schedule and budget.
            </p>

            {/* Quick Pricing Snippet */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#FFFDF8] p-3.5 rounded-xl border border-[#DACFC2]">
                <div className="text-[11px] text-[#A8B39F] font-semibold uppercase">Color Touch Up</div>
                <div className="text-base font-bold text-[#2B4035] mt-0.5">$95+</div>
                <div className="text-[10px] text-[#5C5E58]">Levels 1 – 4</div>
              </div>
              <div className="bg-[#FFFDF8] p-3.5 rounded-xl border border-[#DACFC2]">
                <div className="text-[11px] text-[#A8B39F] font-semibold uppercase">Balayage / Light</div>
                <div className="text-base font-bold text-[#2B4035] mt-0.5">$220+</div>
                <div className="text-[10px] text-[#5C5E58]">Includes Toner & Bond</div>
              </div>
              <div className="bg-[#FFFDF8] p-3.5 rounded-xl border border-[#DACFC2]">
                <div className="text-[11px] text-[#A8B39F] font-semibold uppercase">Precision Haircut</div>
                <div className="text-base font-bold text-[#2B4035] mt-0.5">$80+</div>
                <div className="text-[10px] text-[#5C5E58]">Scalp Wash & Blowout</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/services/hair"
                className="px-6 py-3 rounded-full bg-[#2B4035] hover:bg-[#1E2D25] text-[#FFFDF8] font-semibold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Explore All Hair Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <BookButton variant="link">
                Book with a Stylist
              </BookButton>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#DACFC2]">
              <Image
                src="/images/stylist_precision_cut.jpg"
                alt="Master Stylist Precision Haircut & Creative Color Artistry"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Interactive 4-Tier Stylist Structure Breakdown */}
        <div className="mt-12 sm:mt-16">
          <StylistTierInteractive />
        </div>
      </div>
    </section>
  );
}
