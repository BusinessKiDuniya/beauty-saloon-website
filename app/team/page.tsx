"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { useClient } from "@/context/ClientContext";
import { teamMembers as defaultTeamMembers, businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function TeamPage() {
  const [filter, setFilter] = useState<string>("all");
  const { client } = useClient();
  const members = client?.team?.length ? client.team : defaultTeamMembers;
  const shortName = client?.shortName || "Prana";
  const info = client?.businessInfo || defaultBusinessInfo;

  const categories = [
    { id: "all", label: "All Artists" },
    { id: "hair", label: "Hair Stylists & Colorists" },
    { id: "skin", label: "Estheticians & Skincare" },
    { id: "massage", label: "Massage Therapists" },
    { id: "nails", label: "Nail Artists" },
    { id: "lashes", label: "Lash & Wax Specialists" }
  ];

  const filteredMembers = members.filter((m) => {
    if (filter === "all") return true;
    const text = (m.role + " " + m.levelTitle + " " + m.specialties.join(" ")).toLowerCase();
    if (filter === "hair") return text.includes("hair") || text.includes("stylist") || text.includes("color");
    if (filter === "skin") return text.includes("skincare") || text.includes("esthetician") || text.includes("facial");
    if (filter === "massage") return text.includes("massage") || text.includes("lmt") || text.includes("doula");
    if (filter === "nails") return text.includes("nail");
    if (filter === "lashes") return text.includes("lash") || text.includes("wax");
    return true;
  });

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          THE ARTISTS BEHIND {shortName.toUpperCase()}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] mt-3 mb-6 leading-tight">
          Educated Hands, <br />
          <span className="italic text-[#2B4035] font-light">Warm Hearts & Genuine Care.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-2xl mx-auto">
          At {shortName}, continued education is a cornerstone of our culture. Every stylist and specialist is certified, masterfully trained, and dedicated to personalized, health-first care.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === c.id
                  ? "bg-[#2B4035] text-[#FFFDF8] shadow-sm"
                  : "bg-[#EDE7DD] hover:bg-[#DACFC2] text-[#292A27]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 4-Tier Pricing Structure Explanation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-12 border border-[#EDE7DD] shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2B4035]" />
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              TRANSPARENT VALUE
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#292A27]">
            Understanding Our 4-Tier Stylist Structure
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
            Our 4-level pricing structure directly reflects each stylist&apos;s years of experience, advanced Vidal Sassoon and Paul Mitchell education, performance, and booking demand as they grow. While pricing varies slightly across levels, every stylist at Prana is held to identical elevated standards of technical excellence, sanitation, and intentional guest care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#EDE7DD]">
            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#EDE7DD] space-y-1">
              <div className="font-semibold text-xs text-[#2B4035]">Level 1 Stylist</div>
              <p className="text-[11px] text-[#5C5E58]">
                Talented, licensed stylists completing advanced academy training. Exceptional value.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#EDE7DD] space-y-1">
              <div className="font-semibold text-xs text-[#2B4035]">Level 2 Stylist</div>
              <p className="text-[11px] text-[#5C5E58]">
                Experienced stylists with established techniques in blonding, dimensional color, and precision cuts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#EDE7DD] space-y-1">
              <div className="font-semibold text-xs text-[#2B4035]">Level 3 Senior Stylist</div>
              <p className="text-[11px] text-[#5C5E58]">
                Highly sought-after specialists with extensive tenure and advanced mastery in color correction.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#EDE7DD] space-y-1">
              <div className="font-semibold text-xs text-[#2B4035]">Master Stylist (Level 4)</div>
              <p className="text-[11px] text-[#5C5E58]">
                Salon leadership, educator-level artistry, and comprehensive Vidal Sassoon master credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#A8B39F] font-semibold">
            GROW WITH {shortName.toUpperCase()}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">
            Are You a Dedicated Stylist or Spa Specialist?
          </h2>
          <p className="text-xs sm:text-sm text-[#DDE3D9] max-w-xl mx-auto leading-relaxed">
            We are welcoming established booth renters and passionate commission stylists into our eco-friendly, full-service {info.address.city} sanctuary.
          </p>
          <div className="pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFDF8] text-[#1E2D25] font-semibold text-sm hover:bg-[#F8F6F1] shadow"
            >
              <span>Explore Booth Rental & Careers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
