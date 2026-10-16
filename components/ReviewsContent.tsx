"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import BookButton from "@/components/BookButton";
import { useClient } from "@/context/ClientContext";
import { clientReviews as defaultReviews } from "@/data/siteData";

export default function ReviewsContent() {
  const { client } = useClient();
  const reviews = client?.reviews?.length ? client.reviews : defaultReviews;
  const shortName = client?.shortName || "Prana";

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          AUTHENTIC PRAISE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] mt-3 mb-6 leading-tight">
          Words from Our <br />
          <span className="italic text-[#2B4035] font-light">Cherished Guests.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-xl mx-auto">
          We take immense pride in delivering exceptional artistry and restorative care. Read what our guests have to say about their experiences at {shortName}.
        </p>

        {/* Overall Rating Callout */}
        <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFFDF8] border border-[#EDE7DD] shadow-sm">
          <div className="flex text-[#B5A18D]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#292A27]">5.0 Star Average Guest Rating</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-[#292A27]">
          Ready to Experience {shortName} for Yourself?
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5E58] max-w-md mx-auto leading-relaxed">
          Join our community of satisfied guests. Reserve your appointment with our master stylists and spa practitioners today.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookButton>
            Book Online
          </BookButton>
          <Link
            href="/services"
            className="px-6 py-3.5 rounded-full bg-[#EDE7DD] text-[#292A27] font-semibold text-sm hover:bg-[#DACFC2] border border-[#DACFC2]"
          >
            Explore Services & Prices
          </Link>
        </div>
      </section>
    </div>
  );
}
