"use client";

import React from "react";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo } from "@/data/siteData";
import {
  AboutHeroNarrative,
  FounderJourney,
  HolisticRitualsGrid,
  AboutCta
} from "@/components/about";
import { LuxuryMarquee, BotanicalAlchemy, DoshaWellnessQuiz } from "@/components";

export default function AboutContent() {
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const shortName = client?.shortName || "Prana";
  const story = client?.aboutStory;

  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* 1. Hero Narrative & Editorial Images */}
      <AboutHeroNarrative story={story} shortName={shortName} info={info} />

      {/* 2. Luxury Certifications & Formulation Marquee */}
      <LuxuryMarquee />

      {/* 3. Founder's Journey, Origins & Core Pillars */}
      <FounderJourney story={story} shortName={shortName} info={info} />

      {/* 4. Conscious Chemistry & Hero Botanicals Shelf */}
      <BotanicalAlchemy />

      {/* 5. Holistic Rituals & Foundation Spotlight */}
      <HolisticRitualsGrid />

      {/* 6. Interactive Ayurvedic Dosha Consultation Quiz */}
      <DoshaWellnessQuiz />

      {/* 7. Closing Sanctuary Call to Action */}
      <AboutCta shortName={shortName} city={info.address.city} />
    </div>
  );
}
