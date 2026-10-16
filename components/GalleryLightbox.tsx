"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react";
import { useClient } from "@/context/ClientContext";
import { LookbookItem, lookbookItems as defaultLookbookItems } from "@/data/siteData";

export default function GalleryLightbox({
  items
}: {
  items?: LookbookItem[];
}) {
  const { client } = useClient();
  const displayItems = items || (client?.lookbook?.length ? client.lookbook : defaultLookbookItems);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Hair", "Skincare", "Nails", "Bridal", "Atmosphere", "Lashes"];

  const filteredItems = selectedCategory === "All"
    ? displayItems
    : displayItems.filter((item) => item.category === selectedCategory);

  const handleClose = () => setSelectedIndex(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <div className="space-y-6">
      {/* Category Filter Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const count = cat === "All"
            ? displayItems.length
            : displayItems.filter((item) => item.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#2B4035] text-[#FFFDF8] shadow-sm"
                  : "bg-[#EDE7DD]/60 hover:bg-[#EDE7DD] text-[#5C5E58] hover:text-[#292A27]"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-[#1E2D25] text-[#A8B39F]" : "bg-[#DACFC2] text-[#5C5E58]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item, index) => {
          // Add visual rhythm: span 2 rows on certain desktop cards
          const isTall = index === 0 || index === 4;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#EDE7DD] border border-[#EDE7DD] shadow-sm hover:shadow-xl transition-all duration-500 ${
                isTall ? "sm:row-span-2 min-h-[380px] sm:min-h-[480px]" : "min-h-[280px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover img-zoom-hover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark editorial overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/85 via-[#1E2D25]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[#FFFDF8]/90 text-[#2B4035] backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF8]/90 backdrop-blur-sm text-[#2B4035] flex items-center justify-center shadow">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-xl sm:text-2xl font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#DDE3D9] mt-1 line-clamp-2">
                  {item.description}
                </p>
                {item.stylist && (
                  <span className="text-[10px] text-[#A8B39F] block mt-1">
                    Artistry by {item.stylist}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#141F1A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-[#FFFDF8] hover:text-[#A8B39F] p-2 rounded-full bg-[#2B4035]/60 hover:bg-[#2B4035] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 text-[#FFFDF8] hover:text-[#A8B39F] p-3 rounded-full bg-[#2B4035]/60 hover:bg-[#2B4035] transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 text-[#FFFDF8] hover:text-[#A8B39F] p-3 rounded-full bg-[#2B4035]/60 hover:bg-[#2B4035] transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            <div className="mt-4 text-center text-[#FFFDF8] max-w-xl px-4">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
                {filteredItems[selectedIndex].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DDE3D9] mt-1.5 leading-relaxed">
                {filteredItems[selectedIndex].description}
              </p>
              {filteredItems[selectedIndex].stylist && (
                <div className="text-xs text-[#A8B39F] mt-1">
                  Artistry by {filteredItems[selectedIndex].stylist}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
