import React from "react";
import Image from "next/image";
import { ClientAboutStory, BusinessInfo } from "@/types";

interface AboutHeroNarrativeProps {
  story?: ClientAboutStory;
  shortName: string;
  info: BusinessInfo;
}

export default function AboutHeroNarrative({ story, shortName, info }: AboutHeroNarrativeProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          {story?.badge || "OUR STORY & INTENTION"}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] leading-tight">
          Vital Energy, Honest Beauty & <br />
          <span className="italic font-light text-[#2B4035]">
            Respect for Nature.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-2xl mx-auto">
          {story?.paragraphs?.[0] ||
            `${shortName} brings positive, restorative, and eco-conscious energy to the luxury beauty experience in ${info.address.city}, ${info.address.state}.`}
        </p>
      </div>

      {/* Hero Double Image Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 sm:mt-16 items-center">
        <div className="md:col-span-7 relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7DD]">
          <Image
            src="/images/hero_wellness.jpg"
            alt={`${shortName} Holistic Wellness Atmosphere`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        <div className="md:col-span-5 relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-[#EDE7DD]">
          <Image
            src={story?.founderImage || "/images/team_jessica.jpg"}
            alt={story?.founderName || "Salon Founder"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF8]">
            <div className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              {story?.founderRole || "Founder & Artistic Director"}
            </div>
            <div className="font-serif text-2xl font-medium">
              {story?.founderName || "Jessica De Somma"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
