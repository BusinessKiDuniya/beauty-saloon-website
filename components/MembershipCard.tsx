"use client";

import React from "react";
import { Check, Sparkles, Calendar, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import { PranaPlan, businessInfo } from "@/data/siteData";

interface MembershipCardProps {
  plan: PranaPlan;
  isFeatured?: boolean;
}

export default function MembershipCard({ plan, isFeatured = false }: MembershipCardProps) {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative ${
        isFeatured
          ? "bg-[#2B4035] text-[#FFFDF8] shadow-2xl border-2 border-[#A8B39F]/50 scale-[1.02]"
          : "bg-[#FFFDF8] text-[#292A27] shadow-sm hover:shadow-lg border border-[#EDE7DD]"
      }`}
    >
      {plan.badge && (
        <div
          className={`absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
            isFeatured
              ? "bg-[#B5A18D] text-[#1E2D25]"
              : "bg-[#2B4035] text-[#FFFDF8]"
          }`}
        >
          <Sparkles className="w-3 h-3" /> {plan.badge}
        </div>
      )}

      {/* Plan Header */}
      <div className="space-y-4">
        <div>
          <span
            className={`text-xs uppercase tracking-widest font-semibold ${
              isFeatured ? "text-[#A8B39F]" : "text-[#B5A18D]"
            }`}
          >
            Prana Wellness Membership
          </span>
          <h3
            className={`font-serif text-3xl sm:text-4xl font-medium mt-1 ${
              isFeatured ? "text-[#FFFDF8]" : "text-[#292A27]"
            }`}
          >
            {plan.name}
          </h3>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 pt-2">
          <span
            className={`font-sans text-4xl sm:text-5xl font-extrabold tracking-tight not-italic ${
              isFeatured ? "text-[#FFFDF8]" : "text-[#2B4035]"
            }`}
          >
            {plan.price}
          </span>
          <span
            className={`text-xs uppercase tracking-wider font-medium ${
              isFeatured ? "text-[#DDE3D9]" : "text-[#5C5E58]"
            }`}
          >
            {plan.period}
          </span>
        </div>

        <p
          className={`text-xs sm:text-sm leading-relaxed ${
            isFeatured ? "text-[#DDE3D9]" : "text-[#5C5E58]"
          }`}
        >
          {plan.description}
        </p>

        {/* Inclusions */}
        <div className="pt-4 border-t border-current/15 space-y-2.5">
          <div
            className={`text-xs font-semibold uppercase tracking-wider ${
              isFeatured ? "text-[#A8B39F]" : "text-[#2B4035]"
            }`}
          >
            Monthly Service Inclusions
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {plan.monthlyInclusions.map((inc, i) => (
              <li
                key={i}
                className={`leading-relaxed ${
                  inc.startsWith("Choice")
                    ? "font-semibold"
                    : "pl-2 opacity-90"
                }`}
              >
                {inc}
              </li>
            ))}
          </ul>
        </div>

        {/* Member Perks */}
        <div className="pt-4 border-t border-current/15 space-y-2">
          <div
            className={`text-xs font-semibold uppercase tracking-wider ${
              isFeatured ? "text-[#A8B39F]" : "text-[#2B4035]"
            }`}
          >
            Exclusive Member Privileges
          </div>
          <ul className="space-y-1.5 text-xs">
            {plan.memberPerks.map((perk, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check
                  className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                    isFeatured ? "text-[#A8B39F]" : "text-[#2B4035]"
                  }`}
                />
                <span className={isFeatured ? "text-[#DDE3D9]" : "text-[#5C5E58]"}>
                  {perk}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rollover Policy Callout */}
        <div
          className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
            isFeatured ? "bg-[#1E2D25] text-[#DDE3D9]" : "bg-[#EDE7DD]/60 text-[#5C5E58]"
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#B5A18D]" />
          <div>
            <span className="font-semibold block mb-0.5">Rollover Protection:</span>
            <span>{plan.rolloverPolicy}</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <span
          role="button"
          aria-disabled="true"
          title="Online enrollment opening soon"
          className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm pointer-events-auto select-none booking-disabled-cursor opacity-95 ${
            isFeatured
              ? "bg-[#FFFDF8] text-[#1E2D25]"
              : "bg-[#2B4035] text-[#FFFDF8]"
          }`}
        >
          <Calendar className="w-4 h-4 text-[#B5A18D]" />
          <span>Enroll in {plan.name}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </span>
        <div className="text-center text-[11px] mt-2 opacity-70">
          Cancel anytime • No long-term lock-in • Credits never expire
        </div>
      </div>
    </div>
  );
}
