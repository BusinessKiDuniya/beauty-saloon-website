"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowRight } from "lucide-react";
import BookButton from "@/components/BookButton";

interface BeforeAfterSliderProps {
  shortName?: string;
}

export default function BeforeAfterSlider({ shortName = "Prana" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-lg space-y-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE7DD] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> INTERACTIVE TRANSFORMATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium">
              See the Artistry in Action
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
              Drag the golden slider to reveal the difference between brassy, un-toned hair and our signature lived-in dimensional balayage with botanical gloss.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#2B4035] bg-[#EDE7DD]/60 px-3.5 py-1.5 rounded-full border border-[#DACFC2]">
            <MoveHorizontal className="w-4 h-4 animate-pulse text-[#B5A18D]" />
            <span>Drag slider to compare</span>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Interactive Drag View (8 Cols) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative h-[360px] sm:h-[480px] w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize border border-[#EDE7DD] shadow-xl group"
            >
              {/* AFTER IMAGE (Background / Full Width) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/balayage_hair_art.jpg"
                  alt="After: Lived-in Dimensional Balayage and Gloss"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <span className="absolute top-4 right-4 bg-[#2B4035]/90 text-[#FFFDF8] backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FFFDF8]/20 shadow">
                  AFTER: {shortName} Ritual
                </span>
              </div>

              {/* BEFORE IMAGE (Clipped / Dynamic Width) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full w-[100vw] max-w-[1200px]">
                  <Image
                    src="/images/before_hair_transformation.jpg"
                    alt="Before: Un-toned brassy hair texture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <span className="absolute top-4 left-4 bg-[#1E2D25]/85 text-[#EDE7DD] backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#EDE7DD]/20 shadow">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* SLIDER DIVIDER LINE */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#FFFDF8] shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFFDF8] border-2 border-[#2B4035] shadow-2xl flex items-center justify-center text-[#2B4035] hover:scale-110 active:scale-95 transition-transform group-hover:bg-[#2B4035] group-hover:text-[#FFFDF8]">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Transformation Breakdown (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#EDE7DD] space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#B5A18D] font-bold">
                TRANSFORMATION BLUEPRINT
              </span>
              <h3 className="font-serif text-2xl text-[#2B4035] font-medium leading-snug">
                Lived-In Dimensional Honey Balayage
              </h3>
              <p className="text-xs text-[#5C5E58] leading-relaxed">
                Notice the seamless transition from root to ends without harsh grow-out demarcation lines. The botanical gloss seals cuticles for reflective, mirror-like shine.
              </p>

              <div className="pt-2 border-t border-[#EDE7DD] space-y-2 text-xs text-[#292A27]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035] shrink-0" />
                  <span><strong>Technique:</strong> Hand-Painted Foilayage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035] shrink-0" />
                  <span><strong>Formulation:</strong> L&apos;ANZA Healing Color</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035] shrink-0" />
                  <span><strong>Includes:</strong> Toner, Olaplex & Restorative Mask</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2B4035] shrink-0" />
                  <span><strong>Maintenance:</strong> 3–5 Months Between Touch-ups</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <BookButton variant="primary" className="w-full justify-center py-3.5">
                Book a Balayage Consultation
              </BookButton>
              <Link
                href="/services/hair"
                className="text-xs font-semibold text-[#2B4035] hover:underline flex items-center justify-center gap-1 text-center py-2"
              >
                <span>Explore all hair color tiers & pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
