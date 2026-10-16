import React from "react";
import Link from "next/link";
import BookButton from "@/components/BookButton";

interface HomeCtaSectionProps {
  shortName: string;
}

export default function HomeCtaSection({ shortName }: HomeCtaSectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
      <div className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-8 sm:p-14 border border-[#3D5648] space-y-6 shadow-2xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A8B39F] font-semibold">
          YOUR JOURNEY BEGINS HERE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FFFDF8] max-w-2xl mx-auto leading-tight">
          Reserve Your Sanctuary Time at {shortName}.
        </h2>
        <p className="text-xs sm:text-sm text-[#DDE3D9] max-w-lg mx-auto leading-relaxed">
          Whether you&apos;re visiting us for dimensional lived-in blonding, an Ayurvedic skin revival, or clean non-toxic nails, our artists look forward to welcoming you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <BookButton
            variant="white"
            className="py-4 px-8 text-sm"
          >
            Book an Appointment Online
          </BookButton>
          <Link
            href="/services"
            className="px-6 py-3.5 rounded-full bg-[#1E2D25] hover:bg-[#23352B] text-[#FFFDF8] font-semibold text-xs sm:text-sm border border-[#3D5648] transition-colors"
          >
            Explore Complete Service Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
