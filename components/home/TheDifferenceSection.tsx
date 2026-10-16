import React from "react";
import SectionHeading from "@/components/SectionHeading";

interface TheDifferenceSectionProps {
  shortName: string;
}

export default function TheDifferenceSection({ shortName }: TheDifferenceSectionProps) {
  return (
    <section className="bg-[#2B4035] text-[#FFFDF8] py-20 sm:py-28 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`WHY ${shortName.toUpperCase()}`}
          title={`The ${shortName} Difference.`}
          description="Four foundational commitments that guide every cut, color, facial, and touch."
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {/* Diff 1 */}
          <div className="bg-[#1E2D25] p-6 sm:p-8 rounded-2xl border border-[#3D5648] space-y-4">
            <div className="font-sans font-bold text-2xl tracking-wider text-[#A8B39F] not-italic">01</div>
            <h3 className="font-serif text-2xl font-medium text-[#FFFDF8]">
              Holistic Botanical Care
            </h3>
            <p className="text-xs sm:text-sm text-[#DDE3D9] leading-relaxed">
              We personalize facials, foot baths, and massages with custom herbal oils aligned with your unique skin constitution and energy points.
            </p>
          </div>

          {/* Diff 2 */}
          <div className="bg-[#1E2D25] p-6 sm:p-8 rounded-2xl border border-[#3D5648] space-y-4">
            <div className="font-sans font-bold text-2xl tracking-wider text-[#A8B39F] not-italic">02</div>
            <h3 className="font-serif text-2xl font-medium text-[#FFFDF8]">
              Precision Artistry
            </h3>
            <p className="text-xs sm:text-sm text-[#DDE3D9] leading-relaxed">
              Ongoing master-level education in precision cutting, creative lived-in color, and seamless blonding techniques.
            </p>
          </div>

          {/* Diff 3 */}
          <div className="bg-[#1E2D25] p-6 sm:p-8 rounded-2xl border border-[#3D5648] space-y-4">
            <div className="font-sans font-bold text-2xl tracking-wider text-[#A8B39F] not-italic">03</div>
            <h3 className="font-serif text-2xl font-medium text-[#FFFDF8]">
              Certified Eco-Responsibility
            </h3>
            <p className="text-xs sm:text-sm text-[#DDE3D9] leading-relaxed">
              We repurpose hair clippings for ocean oil spills and safely recycle foils, color tubes, and salon waste through certified partners.
            </p>
          </div>

          {/* Diff 4 */}
          <div className="bg-[#1E2D25] p-6 sm:p-8 rounded-2xl border border-[#3D5648] space-y-4">
            <div className="font-sans font-bold text-2xl tracking-wider text-[#A8B39F] not-italic">04</div>
            <h3 className="font-serif text-2xl font-medium text-[#FFFDF8]">
              Clean, Fume-Free Lounge
            </h3>
            <p className="text-xs sm:text-sm text-[#DDE3D9] leading-relaxed">
              No harsh acrylic fumes or dip powders. We feature 9-Free quick-dry polish, 21-Free HEMA-free gel, and organic botanicals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
