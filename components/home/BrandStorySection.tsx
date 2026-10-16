import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Recycle, ArrowRight } from "lucide-react";

interface BrandStorySectionProps {
  shortName: string;
}

export default function BrandStorySection({ shortName }: BrandStorySectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Asymmetrical Image Composition */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7DD]">
            <Image
              src="/images/salon_interior_1.jpg"
              alt={`${shortName} Salon Interior Sanctuary`}
              fill
              className="object-cover img-zoom-hover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          {/* Float badge */}
          <div className="absolute top-6 -right-4 sm:-right-6 bg-[#FFFDF8] border border-[#EDE7DD] shadow-lg rounded-2xl p-4 max-w-[200px]">
            <div className="font-sans font-extrabold text-2xl text-[#2B4035] not-italic">100%</div>
            <div className="text-[11px] text-[#5C5E58] font-medium leading-tight">
              Recycled salon waste & plant-based botanical care
            </div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              Our Philosophy & Roots
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292A27] leading-tight">
              A More Thoughtful <br />
              <span className="italic font-light text-[#2B4035]">
                Kind of Self-Care.
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#5C5E58] leading-relaxed">
            <p>
              In ancient tradition, <strong className="text-[#292A27]">{shortName}</strong> represents the vital life energy that sustains and connects us all. Founded as an antidote to noisy, rushed, and chemical-heavy salons, our space unites high-performance hair artistry with deep respect for nature and health-first salon practices.
            </p>
            <p>
              We believe that true beauty shouldn&apos;t compromise your health or the planet. Our team of educated artists pairs cutting-edge color formulation with botanical lines like Surface Pure Color and L&apos;ANZA Healing Color. Under one serene roof, you&apos;ll find hair artistry, holistic skincare, therapeutic massage, clean non-toxic nails, and lash extensions designed to help you prosper inside and out.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#EDE7DD]/50 border border-[#DACFC2]/50">
              <div className="font-semibold text-sm text-[#2B4035] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A8B39F]" /> Vidal Sassoon Precision
              </div>
              <p className="text-xs text-[#5C5E58] mt-1">
                Master-trained precision cutting and customized blonding techniques.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#EDE7DD]/50 border border-[#DACFC2]/50">
              <div className="font-semibold text-sm text-[#2B4035] flex items-center gap-2">
                <Recycle className="w-4 h-4 text-[#A8B39F]" /> Green Circle Salons
              </div>
              <p className="text-xs text-[#5C5E58] mt-1">
                Hair clippings, foils, and chemical waste repurposed sustainably.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:text-[#1E2D25] group"
            >
              <span>Read Our Full Story & Salon Mission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
