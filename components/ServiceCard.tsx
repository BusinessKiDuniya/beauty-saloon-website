"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Clock, Check, ChevronDown } from "lucide-react";
import { ServiceCategory, ServiceItem, businessInfo } from "@/data/siteData";

interface ServiceCardProps {
  category?: ServiceCategory;
  item?: ServiceItem;
  variant?: "feature" | "standard" | "row" | "accordion" | "compact";
}

export default function ServiceCard({
  category,
  item,
  variant = "standard"
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Variant 1: Large Photographic Feature Card
  if (variant === "feature" && category) {
    return (
      <div className="group relative bg-[#FFFDF8] rounded-3xl overflow-hidden border border-[#EDE7DD] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row">
        {/* Photographic Side */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover img-zoom-hover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/60 via-transparent to-transparent lg:hidden" />
          {category.featuredBadge && (
            <div className="absolute top-4 left-4 bg-[#2B4035]/90 backdrop-blur-sm text-[#FFFDF8] text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-[#FFFDF8]/20 flex items-center gap-1.5 shadow">
              <Sparkles className="w-3 h-3 text-[#B5A18D]" /> {category.featuredBadge}
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              Category Highlight
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#292A27] font-medium leading-tight">
              {category.title}
            </h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              {category.description}
            </p>

            {/* Products Used Tag Pill */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A8B39F] font-semibold block mb-2">
                Pure Botanicals & Formulations:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.productsUsed.slice(0, 3).map((p, i) => (
                  <span
                    key={i}
                    className="inline-block text-[11px] bg-[#EDE7DD]/60 text-[#292A27] px-2.5 py-1 rounded-full font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EDE7DD] flex flex-wrap items-center justify-between gap-3">
            <Link
              href={`/services/${category.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:text-[#1E2D25] group-hover:translate-x-0.5 transition-transform"
            >
              <span>Explore Treatments & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <span
              role="button"
              aria-disabled="true"
              className="px-4 py-2 rounded-full bg-[#2B4035] text-[#FFFDF8] text-xs font-semibold flex items-center gap-1.5 shadow-sm pointer-events-auto select-none booking-disabled-cursor opacity-95"
              title="Online appointment booking opening soon"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B5A18D]" /> Book Service
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant 2: Standard Category Card
  if (variant === "standard" && category) {
    return (
      <div className="group bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#EDE7DD] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover img-zoom-hover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {category.featuredBadge && (
            <div className="absolute top-3 left-3 bg-[#2B4035]/90 backdrop-blur-sm text-[#FFFDF8] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border border-[#FFFDF8]/20">
              {category.featuredBadge}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#292A27] font-medium group-hover:text-[#2B4035] transition-colors">
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5E58] mt-2 line-clamp-3 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="pt-3 border-t border-[#EDE7DD] flex items-center justify-between text-xs">
            <Link
              href={`/services/${category.slug}`}
              className="text-[#2B4035] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>View Category</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <span
              role="button"
              aria-disabled="true"
              className="text-[#5C5E58] font-medium flex items-center gap-1 pointer-events-auto select-none booking-disabled-cursor opacity-90"
              title="Online appointment booking opening soon"
            >
              <Calendar className="w-3 h-3 text-[#A8B39F]" /> Book
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant 3: Compact Service Item Row
  if (item) {
    return (
      <div className="p-4 sm:p-5 bg-[#FFFDF8] rounded-xl border border-[#EDE7DD] hover:border-[#A8B39F]/60 transition-colors space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h4 className="font-serif text-lg sm:text-xl text-[#292A27] font-medium">
            {item.name}
          </h4>
          <div className="flex items-center gap-3">
            {item.duration && (
              <span className="text-xs text-[#A8B39F] flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.duration}
              </span>
            )}
            <span className="font-semibold text-sm sm:text-base text-[#2B4035] bg-[#EDE7DD]/50 px-2.5 py-0.5 rounded-md">
              {item.price}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
          {item.description}
        </p>

        {item.levels && (
          <div className="text-[11px] text-[#A8B39F] pt-1">
            <span className="font-semibold text-[#5C5E58]">Stylist Tier Pricing:</span> {item.levels}
          </div>
        )}

        <div className="pt-2 flex justify-end">
          <span
            role="button"
            aria-disabled="true"
            className="text-xs font-semibold text-[#2B4035] inline-flex items-center gap-1 pointer-events-auto select-none booking-disabled-cursor opacity-90"
            title="Online appointment booking opening soon"
          >
            <span>Book this treatment</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  return null;
}
