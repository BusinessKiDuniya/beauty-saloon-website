import React from "react";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import TransformationShowcase from "@/components/TransformationShowcase";
import { LookbookItem } from "@/types";

interface HomeLookbookSectionProps {
  lookbookItems: LookbookItem[];
  cityState: string;
}

export default function HomeLookbookSection({ lookbookItems, cityState }: HomeLookbookSectionProps) {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* LOOKBOOK & BEAUTY GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SEASONAL LOOKBOOK"
          title="Beauty in Motion."
          description={`A glimpse inside our salon sanctuary, recent hair transformations, clean nail artistry, and bridal moments in ${cityState}. Click any image to open in full screen.`}
          align="split"
        />

        <GalleryLightbox items={lookbookItems} />
      </section>

      {/* REAL TRANSFORMATIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransformationShowcase />
      </section>
    </div>
  );
}
