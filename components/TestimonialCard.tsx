import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { ClientReview } from "@/data/siteData";

interface TestimonialCardProps {
  review: ClientReview;
  isEditorial?: boolean;
}

export default function TestimonialCard({
  review,
  isEditorial = false
}: TestimonialCardProps) {
  if (isEditorial) {
    return (
      <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-10 border border-[#EDE7DD] shadow-sm relative space-y-6">
        <Quote className="w-10 h-10 text-[#B5A18D]/40" />
        <p className="font-serif text-xl sm:text-2xl text-[#292A27] italic leading-relaxed">
          {review.text}
        </p>
        <div className="pt-4 border-t border-[#EDE7DD] flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm text-[#2B4035] flex items-center gap-1.5">
              <span>{review.author}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B39F]" />
            </div>
            <div className="text-xs text-[#5C5E58] mt-0.5">
              {review.service} {review.providerMentioned && `• With ${review.providerMentioned}`}
            </div>
          </div>
          <div className="flex text-[#B5A18D]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#EDE7DD] shadow-sm flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex text-[#B5A18D]">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed italic">
          {review.text}
        </p>
      </div>

      <div className="pt-3 border-t border-[#EDE7DD]">
        <div className="font-semibold text-xs text-[#2B4035] flex items-center gap-1">
          <span>{review.author}</span>
          <CheckCircle2 className="w-3 h-3 text-[#A8B39F]" />
        </div>
        <div className="text-[11px] text-[#A8B39F] mt-0.5">
          {review.service} {review.providerMentioned && `• ${review.providerMentioned}`}
        </div>
      </div>
    </div>
  );
}
