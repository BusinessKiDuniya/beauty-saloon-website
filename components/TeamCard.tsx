"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ArrowRight, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { TeamMember, businessInfo } from "@/data/siteData";
import { useClient } from "@/context/ClientContext";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [showFullBio, setShowFullBio] = useState(false);
  const { client } = useClient();
  const shortName = client?.shortName || "Prana";

  return (
    <div className="bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#EDE7DD] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Portrait Image */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#EDE7DD]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top img-zoom-hover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D25]/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8]">
          <span className="text-[10px] uppercase tracking-widest text-[#B5A18D] font-semibold block">
            {member.levelTitle}
          </span>
          <h3 className="font-serif text-2xl font-medium leading-tight">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Details & Specialties */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="text-xs font-semibold text-[#2B4035]">
            {member.role}
          </div>

          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-1">
            {member.specialties.map((s, i) => (
              <span
                key={i}
                className="text-[10px] bg-[#F8F6F1] border border-[#EDE7DD] text-[#5C5E58] px-2 py-0.5 rounded-full font-medium"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Bio snippet with expand toggle */}
          <div className="text-xs text-[#5C5E58] leading-relaxed pt-1">
            <p className={showFullBio ? "" : "line-clamp-3"}>
              {member.bio}
            </p>
            {member.bio.length > 150 && (
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-[#2B4035] font-semibold text-[11px] mt-1 inline-flex items-center gap-0.5 hover:underline cursor-pointer"
              >
                {showFullBio ? (
                  <>Show less <ChevronUp className="w-3 h-3" /></>
                ) : (
                  <>Read full bio <ChevronDown className="w-3 h-3" /></>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer: Instagram & Booking */}
        <div className="pt-4 border-t border-[#EDE7DD] flex items-center justify-between gap-2">
          {member.instagramUrl ? (
            <a
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#A8B39F] hover:text-[#2B4035] flex items-center gap-1 font-medium transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span className="truncate max-w-[100px]">{member.instagramHandle}</span>
            </a>
          ) : (
            <span className="text-[11px] text-[#A8B39F]">{shortName} Artist</span>
          )}

          <span
            role="button"
            aria-disabled="true"
            className="px-3.5 py-1.5 rounded-full bg-[#2B4035] text-[#FFFDF8] text-xs font-semibold flex items-center gap-1.5 shadow-sm pointer-events-auto select-none booking-disabled-cursor opacity-95"
            title="Online appointment booking opening soon"
          >
            <Calendar className="w-3 h-3 text-[#B5A18D]" />
            <span>Book with {member.name.split(" ")[0]}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
