"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Phone,
  HelpCircle,
  Flower2,
  User
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import BookButton from "@/components/BookButton";
import { useClient } from "@/context/ClientContext";
import { ServiceCategory } from "@/data/siteData";

export default function ServiceCategoryDetailContent({
  category
}: {
  category: ServiceCategory;
}) {
  const { client } = useClient();
  const shortName = client?.shortName || "Prana";
  const info = client?.businessInfo;
  const team = client?.team || [];

  // Find stylists relevant to this service category
  const relevantTeam = team.filter((t) => {
    const roleLower = (t.role + " " + t.levelTitle + " " + t.specialties.join(" ")).toLowerCase();
    const slug = category.slug;
    if (slug === "hair") return roleLower.includes("hair") || roleLower.includes("stylist") || roleLower.includes("color");
    if (slug === "skincare") return roleLower.includes("esthetician") || roleLower.includes("skincare") || roleLower.includes("facial");
    if (slug === "massage") return roleLower.includes("massage") || roleLower.includes("lmt") || roleLower.includes("doula");
    if (slug === "nails") return roleLower.includes("nail");
    if (slug === "lashes-brows-waxing") return roleLower.includes("lash") || roleLower.includes("wax") || roleLower.includes("esthetician");
    if (slug === "makeup") return roleLower.includes("makeup") || roleLower.includes("hair") || roleLower.includes("esthetician");
    if (slug === "bridal") return true;
    return false;
  });

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-[#5C5E58]">
          <Link href="/" className="hover:text-[#2B4035] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A8B39F]" />
          <Link href="/services" className="hover:text-[#2B4035] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A8B39F]" />
          <span className="font-semibold text-[#292A27]">{category.title}</span>
        </nav>
      </div>

      {/* Hero Category Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
              {category.subtitle}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] leading-tight">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-xl">
              {category.description}
            </p>

            {/* Philosophy Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#EDE7DD]/40 border border-[#EDE7DD] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2B4035] flex items-center gap-1.5">
                <Flower2 className="w-4 h-4 text-[#A8B39F]" /> The {shortName} Standard
              </div>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                {category.philosophy}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <BookButton>
                Book This Service
              </BookButton>
              {info && (
                <a
                  href={`tel:${info.phone}`}
                  className="text-xs font-semibold text-[#5C5E58] hover:text-[#2B4035] flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" /> Call or Text {info.displayPhone}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7DD]">
              <Image
                src={category.heroImage}
                alt={category.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Treatment & Pricing Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
            COMPREHENSIVE MENU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292A27]">
            Treatments & Transparent Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5E58]">
            Prices reflect artist experience tier and service duration.
          </p>
        </div>

        <div className="space-y-12">
          {category.serviceGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <div className="border-b border-[#EDE7DD] pb-3">
                <h3 className="font-serif text-2xl font-medium text-[#2B4035]">
                  {group.name}
                </h3>
                {group.description && (
                  <p className="text-xs sm:text-sm text-[#5C5E58] mt-1">
                    {group.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item, itemIdx) => (
                  <ServiceCard key={itemIdx} variant="compact" item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Specialists for this Category */}
      {relevantTeam.length > 0 && (
        <section className="bg-[#EDE7DD]/40 py-16 border-y border-[#EDE7DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
                OUR ARTISTS
              </span>
              <h2 className="font-serif text-3xl font-medium text-[#292A27]">
                Meet Your {category.title.split("&")[0].trim()} Specialists
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relevantTeam.slice(0, 3).map((artist) => (
                <TeamCard key={artist.id} member={artist} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EDE7DD] rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-[#DACFC2]">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#292A27]">
            Ready to Experience {category.title.split("&")[0].trim()}?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5E58] max-w-lg mx-auto leading-relaxed">
            Choose your preferred specialist and select an appointment time that works for your schedule.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookButton>
              Book an Appointment
            </BookButton>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-full bg-[#FFFDF8] text-[#292A27] font-semibold text-sm hover:bg-[#F8F6F1] border border-[#DACFC2]"
            >
              Browse Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
