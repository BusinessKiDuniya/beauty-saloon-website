import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ClientAboutStory, BusinessInfo } from "@/types";

interface FounderJourneyProps {
  story?: ClientAboutStory;
  shortName: string;
  info: BusinessInfo;
}

export default function FounderJourney({ story, shortName, info }: FounderJourneyProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
            ORIGINS & INSPIRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292A27] leading-tight">
            {story?.title || `From Precision Mastery to ${info.address.city}`}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5C5E58] leading-relaxed">
            {story?.paragraphs?.map((p, idx) => (
              <p key={idx}>{p}</p>
            )) || (
              <p>
                Rooted in years of passionate artistry and continued education, our sanctuary weaves together world-class hair artistry with deep respect for natural health and client well-being.
              </p>
            )}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#2B4035] text-[#FFFDF8] flex items-center justify-center font-serif text-2xl">
              {(story?.founderName || shortName).charAt(0)}
            </div>
            <div>
              <div className="font-serif text-lg font-medium text-[#292A27]">
                {story?.founderName || "Jessica De Somma"}
              </div>
              <div className="text-xs text-[#A8B39F]">
                {story?.founderRole || "Owner & Master Stylist"}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="bg-[#EDE7DD]/50 rounded-3xl p-8 sm:p-10 border border-[#DACFC2] space-y-6">
            <h3 className="font-serif text-2xl font-medium text-[#2B4035]">
              Our Core Pillars
            </h3>
            <blockquote className="font-serif text-xl sm:text-2xl text-[#292A27] italic leading-relaxed">
              “To provide exceptional, health-first beauty care by personalizing every guest experience with clean botanical products—allowing our clients to prosper inside and out.”
            </blockquote>

            <div className="pt-4 border-t border-[#DACFC2] space-y-3 text-xs sm:text-sm text-[#5C5E58]">
              {story?.coreValues?.map((val, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2B4035] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#292A27]">{val.title}:</strong> {val.description}
                  </span>
                </div>
              )) || (
                <>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2B4035] shrink-0 mt-0.5" />
                    <span>Cutting-edge techniques with continuously educated, passionate artists.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2B4035] shrink-0 mt-0.5" />
                    <span>Eco-friendly products with non-toxic, plant-based, and botanical ingredients.</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
