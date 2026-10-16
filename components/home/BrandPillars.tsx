import React from "react";
import { Sparkles } from "lucide-react";
import { ClientHeroStat } from "@/types";

interface BrandPillarsProps {
  stats: ClientHeroStat[];
}

export default function BrandPillars({ stats }: BrandPillarsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 border border-[#EDE7DD] shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EDE7DD]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center space-y-1 ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2B4035] tracking-tight not-italic">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#5C5E58] font-semibold flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B5A18D]" />
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
