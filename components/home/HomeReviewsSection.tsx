import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ClientReview } from "@/types";

interface HomeReviewsSectionProps {
  reviews: ClientReview[];
}

export default function HomeReviewsSection({ reviews }: HomeReviewsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="AUTHENTIC REPUTATION"
        title="Guest Experiences."
        description="Real words from our loyal guests who appreciate our health-first artistry, non-toxic products, and dedicated team."
        align="center"
      />

      {/* Featured Editorial Review + 3 Column Review Grid */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {reviews[0] && (
          <TestimonialCard review={reviews[0]} isEditorial={true} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(1, 4).map((r) => (
            <TestimonialCard key={r.id} review={r} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:underline"
          >
            <span>Read more verified client stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
