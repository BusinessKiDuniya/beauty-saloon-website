"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MoveHorizontal,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import BookButton from "@/components/BookButton";

interface BeforeAfterSliderProps {
  shortName?: string;
}

export default function BeforeAfterSlider({
  shortName = "Prana",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0) return;

    const percentage = ((clientX - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(95, Math.max(5, percentage)));
  }, []);

  // const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  //   handleMove(e.touches[0].clientX);
  // };

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (!isDragging && e.buttons !== 1) return;
  //   handleMove(e.clientX);
  // };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EDE7DD] shadow-lg space-y-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE7DD] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE7DD] text-[#2B4035] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A18D]" /> INTERACTIVE
              TRANSFORMATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-medium">
              See the Artistry in Action
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5E58] mt-1 max-w-xl">
              Drag the golden slider to reveal the difference between brassy,
              un-toned hair and our signature lived-in dimensional balayage with
              botanical gloss.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#2B4035] bg-[#EDE7DD]/60 px-3.5 py-1.5 rounded-full border border-[#DACFC2]">
            <MoveHorizontal className="w-4 h-4 animate-pulse text-[#B5A18D]" />
            <span>Drag slider to compare</span>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 min-w-0">
            <div
              ref={containerRef}
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onPointerMove={(e) => {
                if (isDragging) handleMove(e.clientX);
              }}
              onPointerUp={() => setIsDragging(false)}
              onPointerCancel={() => setIsDragging(false)}
              onLostPointerCapture={() => setIsDragging(false)}
              className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden select-none border border-[#EDE7DD] shadow-xl cursor-ew-resize"
              style={{ touchAction: "pan-y" }}
              role="group"
              aria-label="Before and after hairstyle comparison. Drag horizontally to compare."
            >
              {/* AFTER IMAGE: Full container */}
              <div className="absolute inset-0">
                <Image
                  src="/images/after.png"
                  alt="After: Shoulder-length dimensional highlighted hairstyle"
                  fill
                  priority
                  draggable={false}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center pointer-events-none"
                />

                <span className="absolute top-4 right-4 z-10 bg-[#2B4035]/90 text-[#FFFDF8] backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 shadow">
                  AFTER
                </span>
              </div>

              {/* BEFORE IMAGE: Identical dimensions and positioning */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <Image
                  src="/images/before.png"
                  alt="Before: Long, straight brown-to-blonde hairstyle"
                  fill
                  priority
                  draggable={false}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center pointer-events-none"
                />

                <span className="absolute top-4 left-4 z-10 bg-[#1E2D25]/85 text-[#EDE7DD] backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 shadow">
                  BEFORE
                </span>
              </div>

              {/* DIVIDER */}
              <div
                className="absolute inset-y-0 z-20 w-0.5 bg-[#FFFDF8] shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFDF8] border-2 border-[#2B4035] shadow-xl flex items-center justify-center text-[#2B4035]">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-[#5C5E58]">
              Drag the divider left or right to compare both hairstyles.
            </p>
          </div>

          {/* Keep your existing transformation details in this column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Move your existing blueprint card and booking buttons here */}
          </div>
        </div>
      </div>
    </section>
  );
}
