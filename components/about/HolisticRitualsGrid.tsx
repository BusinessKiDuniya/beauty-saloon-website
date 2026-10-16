import React from "react";
import SectionHeading from "@/components/SectionHeading";

export default function HolisticRitualsGrid() {
  return (
    <section className="bg-[#EDE7DD]/50 py-16 sm:py-24 border-y border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="HOLISTIC FOUNDATION"
          title="Ancient Rituals & Modern Care"
          description="We view health and beauty as deeply connected to each individual's unique constitution and daily environment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#EDE7DD] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              Hydration & Restoration
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#2B4035]">
              Botanical Deep Moisture
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              Counter atmospheric dryness with deeply penetrating organic hair and skin elixirs, cold-pressed plant oils, and gentle scalp acupressure.
            </p>
          </div>

          <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#EDE7DD] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              Balance & Calming
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#2B4035]">
              Sensitive Skin Soothing
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              Designed for sensitive, reactive, or heat-prone complexions. We soothe redness with cooling botanical herbs, cucumber hydrosols, and therapeutic touch.
            </p>
          </div>

          <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#EDE7DD] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              Detox & Radiance
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#2B4035]">
              Clarifying Scalp Detox
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              Stimulate circulation and cleanse environmental buildup with gentle exfoliating scrubs, steam misting, and lymphatic drainage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
