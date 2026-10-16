"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Phone } from "lucide-react";
import BookButton from "@/components/BookButton";
import { useClient } from "@/context/ClientContext";
import { serviceCategories as defaultCategories, businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function ServicesDirectoryContent() {
  const { client } = useClient();
  const categories = client?.services?.length ? client.services : defaultCategories;
  const shortName = client?.shortName || "Prana";
  const info = client?.businessInfo || defaultBusinessInfo;

  return (
    <div className="py-12 sm:py-20 lg:py-24 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          TREATMENT DIRECTORY
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] mt-3 mb-6 leading-tight">
          Services Shaped Around <br />
          <span className="italic text-[#2B4035] font-light">Your Natural Rhythm.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-2xl mx-auto">
          Every service at {shortName} is crafted with intention—pairing sustainable, botanical formulations with advanced technical precision to support your long-term health and beauty.
        </p>

        {/* Quick Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              className="px-3.5 py-1.5 rounded-full bg-[#EDE7DD] hover:bg-[#2B4035] hover:text-[#FFFDF8] text-[#292A27] text-xs font-semibold transition-colors"
            >
              {cat.title.split("&")[0].trim()}
            </a>
          ))}
        </div>
      </div>

      {/* Main Categories Walkthrough */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {categories.map((cat, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <section
              key={cat.id}
              id={cat.slug}
              className="scroll-mt-28 border-t border-[#EDE7DD] pt-16 sm:pt-20 first:border-none first:pt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Photo Side */}
                <div
                  className={`lg:col-span-5 relative ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-[#EDE7DD]">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      fill
                      className="object-cover img-zoom-hover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {cat.featuredBadge && (
                      <div className="absolute top-4 left-4 bg-[#2B4035]/90 backdrop-blur-sm text-[#FFFDF8] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-[#FFFDF8]/20">
                        {cat.featuredBadge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
                      {cat.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292A27]">
                      {cat.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed pt-1">
                      {cat.description}
                    </p>
                  </div>

                  {/* Representative Services Preview */}
                  <div className="space-y-3 pt-2">
                    {cat.serviceGroups[0]?.items.slice(0, 3).map((item) => (
                      <div
                        key={item.name}
                        className="p-3.5 bg-[#FFFDF8] rounded-xl border border-[#EDE7DD] flex items-center justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <div className="font-semibold text-xs sm:text-sm text-[#292A27] truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-[#5C5E58] line-clamp-1 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {item.duration && (
                            <span className="text-[11px] text-[#A8B39F] hidden sm:flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {item.duration}
                            </span>
                          )}
                          <span className="font-semibold text-xs sm:text-sm text-[#2B4035] bg-[#EDE7DD]/50 px-2.5 py-1 rounded-md">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${cat.slug}`}
                      className="px-6 py-3 rounded-full bg-[#2B4035] hover:bg-[#1E2D25] text-[#FFFDF8] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
                    >
                      <span>Explore Dedicated {cat.title.split("&")[0].trim()} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <BookButton variant="link">
                      Book Online
                    </BookButton>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Persistent Booking Reminder Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#A8B39F] font-semibold">
            READY FOR YOUR VISIT?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">
            Personalized Beauty & Wellness Awaits.
          </h2>
          <p className="text-xs sm:text-sm text-[#DDE3D9] max-w-xl mx-auto leading-relaxed">
            Every appointment begins with a thorough personal consultation. Reserve your appointment with {shortName} or contact our front desk team directly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton variant="white">
              Book an Appointment
            </BookButton>
            <a
              href={`tel:${info.phone}`}
              className="text-xs text-[#FFFDF8] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B5A18D]" /> Call / Text {info.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
