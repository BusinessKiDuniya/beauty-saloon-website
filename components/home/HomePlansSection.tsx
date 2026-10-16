import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MembershipCard from "@/components/MembershipCard";
import { PranaPlan } from "@/types";

interface HomePlansSectionProps {
  plans: PranaPlan[];
}

export default function HomePlansSection({ plans }: HomePlansSectionProps) {
  return (
    <section className="bg-[#EDE7DD]/40 py-20 sm:py-28 border-y border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WELLNESS MEMBERSHIPS"
          title="Make Self-Care Part of Your Routine."
          description="Designed to make high-quality beauty and spa care a regular, stress-free ritual. Enjoy guaranteed monthly treatments, member discounts, and permanent rollover protection."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
          {plans[0] && <MembershipCard plan={plans[0]} isFeatured={false} />}
          {plans[1] && <MembershipCard plan={plans[1]} isFeatured={true} />}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B4035] hover:underline"
          >
            <span>Compare full plan inclusions, upgrade rules & FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
