import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { TeamMember } from "@/types";

interface HomeTeamSectionProps {
  teamMembers: TeamMember[];
  shortName: string;
}

export default function HomeTeamSection({ teamMembers, shortName }: HomeTeamSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="AUTHENTIC MASTERY"
        title="Meet Our Dedicated Artists."
        description="Experienced, licensed specialists in hair color, precision cuts, skincare, massage therapy, lash extensions, and clean nail artistry."
        align="split"
        action={
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:underline"
          >
            <span>View full team directory & bios</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* 4 Featured Team Members on Homepage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.slice(0, 4).map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EDE7DD] hover:bg-[#DACFC2] text-[#292A27] text-sm font-semibold transition-colors border border-[#DACFC2]"
        >
          <span>Meet All {shortName} Artists & Specialists</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
