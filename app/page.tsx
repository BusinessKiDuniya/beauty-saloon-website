"use client";

import React from "react";
import { useClient } from "@/context/ClientContext";
import {
  businessInfo as defaultBusinessInfo,
  serviceCategories,
  teamMembers,
  pranaPlans,
  clientReviews,
  lookbookItems
} from "@/data/siteData";
import {
  BookingDiscovery,
  NewbieGuide,
  SalonAmenities,
  LuxuryMarquee,
  BeforeAfterSlider,
  BotanicalAlchemy,
  SanctuaryExperienceTimeline,
  DoshaWellnessQuiz,
  SanctuaryAmbienceBar
} from "@/components";
import {
  HeroSection,
  BrandPillars,
  BrandStorySection,
  HomeServicesPreview,
  StylistStructureSection,
  TheDifferenceSection,
  HomeLookbookSection,
  HomeTeamSection,
  HomePlansSection,
  HomeReviewsSection,
  HomeLocationSection,
  HomeCtaSection
} from "@/components/home";

export default function HomePage() {
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const shortName = client?.shortName || "Prana";

  const hero = client?.hero || {
    badge: "BEAUTY • WELLNESS • INTENTION",
    titleLine1: "Beauty That",
    titleItalic: "Feels Like You.",
    subtitle: `Thoughtful beauty services and restorative wellness experiences, shaped around your individual needs in ${info.address.city}, ${info.address.state}.`,
    heroImage: "/images/luxury_salon_sanctuary.jpg",
    secondaryImage: "/images/lookbook_2.jpg",
    stats: [
      { number: "95%", label: "Salon Waste Diverted" },
      { number: "100%", label: "Cruelty-Free Products" },
      { number: "15+", label: "Years Master Artistry" },
      { number: "5.0 ★", label: "Client Satisfaction" }
    ]
  };

  const categories = client?.services?.length ? client.services : serviceCategories;
  const plans = client?.plans?.length ? client.plans : pranaPlans;
  const team = client?.team?.length ? client.team : teamMembers;
  const reviews = client?.reviews?.length ? client.reviews : clientReviews;
  const lookbooks = client?.lookbook?.length ? client.lookbook : lookbookItems;
  const cityState = `${info.address.city}, ${info.address.state}`;

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-20 sm:pb-28">
      {/* 1. Editorial Hero */}
      <HeroSection hero={hero} shortName={shortName} />

      {/* 2. Interactive Sanctuary Ambience Soundscape Bar */}
      <SanctuaryAmbienceBar />

      {/* 3. Infinite Brand & Certification Marquee */}
      <LuxuryMarquee />

      {/* 4. Interactive Booking Discovery Bar */}
      <BookingDiscovery />

      {/* 5. Brand Pillars / Stats Row */}
      <BrandPillars stats={hero.stats} />

      {/* 6. Brand Philosophy & Sanskrit Roots */}
      <BrandStorySection shortName={shortName} />

      {/* 7. Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider shortName={shortName} />

      {/* 8. Services Directory Preview & Ritual Quiz */}
      <HomeServicesPreview categories={categories} />

      {/* 9. Interactive Botanical Alchemy Shelf */}
      <BotanicalAlchemy />

      {/* 10. Interactive 45-Second Ayurvedic Dosha Diagnostic Quiz */}
      <DoshaWellnessQuiz />

      {/* 11. Signature 4-Tier Stylist Structure Spotlight */}
      <StylistStructureSection shortName={shortName} />

      {/* 12. The Salon Difference (Dark Forest Green) */}
      <TheDifferenceSection shortName={shortName} />

      {/* 13. Interactive A Day at the Sanctuary Timeline */}
      <SanctuaryExperienceTimeline shortName={shortName} />

      {/* 12. Visual Lookbook & Transformation Showcase */}
      <HomeLookbookSection lookbookItems={lookbooks} cityState={cityState} />

      {/* 13. Master Artists & Specialists */}
      <HomeTeamSection teamMembers={team} shortName={shortName} />

      {/* 14. Wellness Membership Plans */}
      <HomePlansSection plans={plans} />

      {/* 15. First-Time Guest & Newbie Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewbieGuide />
      </section>

      {/* 16. Verified Guest Experiences */}
      <HomeReviewsSection reviews={reviews} />

      {/* 17. Guest Comfort & Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SalonAmenities />
      </section>

      {/* 18. Location Sanctuary & Operating Hours */}
      <HomeLocationSection info={info} shortName={shortName} />

      {/* 19. Final Booking Call to Action */}
      <HomeCtaSection shortName={shortName} />
    </div>
  );
}
