"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import RitualFinder from "@/components/RitualFinder";
import { ServiceCategory } from "@/types";

interface HomeServicesPreviewProps {
  categories: ServiceCategory[];
}

export default function HomeServicesPreview({ categories }: HomeServicesPreviewProps) {
  const signatureCategory = categories[0];
  const previewCategories = categories.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="TREATMENTS & RITUALS"
        title="Find Your Ritual."
        description="Explore our complete spectrum of thoughtful hair services, Ayurvedic spa rituals, clean nails, and specialized beauty enhancements."
        align="split"
        action={
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:underline"
          >
            <span>View full service menu & price chart</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      <div className="space-y-6">
        {/* Large Photographic Feature */}
        {signatureCategory && (
          <ServiceCard category={signatureCategory} variant="feature" />
        )}

        {/* Supporting Grid of 3 Major Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewCategories.map((cat) => (
            <ServiceCard key={cat.id} category={cat} variant="standard" />
          ))}
        </div>

        {/* Remaining Categories Bar */}
        <div className="bg-[#EDE7DD]/40 rounded-2xl p-6 border border-[#EDE7DD] flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-[#292A27]">
              Looking for Lashes, Waxing, Makeup, or Bridal Packages?
            </div>
            <div className="text-xs text-[#5C5E58]">
              We offer Borboleta lash extensions, full-body waxing, event makeup, and comprehensive bridal packages.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/services/lashes-brows-waxing"
              className="text-xs font-semibold px-4 py-2 bg-[#FFFDF8] hover:bg-[#EDE7DD] border border-[#DACFC2] rounded-full text-[#292A27] transition-colors"
            >
              Lashes & Waxing
            </Link>
            <Link
              href="/services/bridal"
              className="text-xs font-semibold px-4 py-2 bg-[#2B4035] hover:bg-[#1E2D25] text-[#FFFDF8] rounded-full transition-colors"
            >
              Bridal Experience
            </Link>
          </div>
        </div>

        {/* Interactive Ritual Finder for Newbies and Guests */}
        <div className="pt-6">
          <RitualFinder />
        </div>
      </div>
    </section>
  );
}
