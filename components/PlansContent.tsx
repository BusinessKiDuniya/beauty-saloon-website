"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Check,
  RefreshCw,
  Gift,
  HelpCircle,
  Phone,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MembershipCard from "@/components/MembershipCard";
import BookButton from "@/components/BookButton";
import { useClient } from "@/context/ClientContext";
import { pranaPlans as defaultPlans, businessInfo as defaultBusinessInfo } from "@/data/siteData";

export default function PlansContent() {
  const { client } = useClient();
  const plans = client?.plans?.length ? client.plans : defaultPlans;
  const shortName = client?.shortName || "Prana";
  const info = client?.businessInfo || defaultBusinessInfo;

  const faqs = [
    {
      q: "What happens if I miss a month or can't make an appointment?",
      a: "You never lose a treatment! With guaranteed Rollover Protection, any unused monthly service credits automatically roll over into subsequent months for as long as your membership is active."
    },
    {
      q: "Can I gift or transfer my membership credit to a friend or family member?",
      a: `Yes! Tier 1 members may transfer up to 1 unused rollover treatment per year to a loved one. Tier 2 VIP members may transfer up to 2 unused credits per year.`
    },
    {
      q: "Can I upgrade my monthly service to a longer duration or specialty service?",
      a: "Absolutely. You can easily upgrade any included treatment simply by paying the modest upgrade difference."
    },
    {
      q: "Are there any long-term contracts or cancellation penalties?",
      a: `No long-term commitments. ${shortName} Plans are billed monthly and you may pause or cancel your membership with 14 days written notice before your next billing cycle.`
    },
    {
      q: "Do I get a discount on retail products?",
      a: `Yes! Tier 1 members receive 10% off all retail products, while Tier 2 VIP members receive 15% off all boutique purchases.`
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
          SUSTAINABLE SELF-CARE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] mt-3 mb-6 leading-tight">
          Make Well-Being a <br />
          <span className="italic text-[#2B4035] font-light">Consistent Ritual.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-2xl mx-auto">
          {shortName} Plans were created to make holistic beauty and restorative spa care an effortless, affordable part of your monthly routine. Choose your plan, enjoy premium inclusions across hair, skin, massage, nails, and lashes—with guaranteed rollover protection.
        </p>
      </div>

      {/* Membership Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <MembershipCard plan={plans[0]} isFeatured={false} />
          <MembershipCard plan={plans[1] || plans[0]} isFeatured={true} />
        </div>
      </section>

      {/* Plan Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 border border-[#EDE7DD] shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              SIDE-BY-SIDE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#292A27]">
              Compare Plan Privileges
            </h2>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-[#EDE7DD] text-[#5C5E58]">
                  <th className="py-3 px-4 font-semibold">Feature / Benefit</th>
                  <th className="py-3 px-4 font-semibold text-[#2B4035]">{plans[0]?.name} ({plans[0]?.price}/mo)</th>
                  <th className="py-3 px-4 font-semibold text-[#2B4035]">{plans[1]?.name || "VIP Plan"} ({plans[1]?.price || "$150"}/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE7DD]/60 text-[#292A27]">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Monthly Core Treatment</td>
                  <td className="py-3.5 px-4">Choice of 50-min massage, facial, mani/pedi, haircut, or classic fill</td>
                  <td className="py-3.5 px-4 font-medium text-[#2B4035]">Choice of 75-80 min deluxe massage/facial, color touchup, or hybrid fill</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Retail Product Discount</td>
                  <td className="py-3.5 px-4">10% off all retail</td>
                  <td className="py-3.5 px-4 font-semibold text-[#2B4035]">15% off all retail</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Additional Service Discount</td>
                  <td className="py-3.5 px-4">10% off extra bookings</td>
                  <td className="py-3.5 px-4 font-semibold text-[#2B4035]">15% off extra bookings</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Rollover Protection</td>
                  <td className="py-3.5 px-4">Yes (Permanent while active)</td>
                  <td className="py-3.5 px-4 font-medium">Yes (Permanent while active)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Annual Friend/Family Credit Transfer</td>
                  <td className="py-3.5 px-4">1 transfer per year</td>
                  <td className="py-3.5 px-4 font-semibold text-[#2B4035]">2 transfers per year</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Birthday Treat Enhancement</td>
                  <td className="py-3.5 px-4">—</td>
                  <td className="py-3.5 px-4 text-[#2B4035] font-semibold">Complimentary upgrade in birth month</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Priority Seasonal Booking</td>
                  <td className="py-3.5 px-4">Included</td>
                  <td className="py-3.5 px-4 font-semibold text-[#2B4035]">VIP Priority Access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How Plans Work */}
      <section className="bg-[#EDE7DD]/50 py-16 sm:py-20 border-y border-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="SIMPLE & FLEXIBLE"
            title="How Our Memberships Work"
            subtitle="Designed for complete peace of mind with zero lock-in contracts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#DACFC2] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2B4035] text-[#FFFDF8] flex items-center justify-center font-extrabold text-lg font-sans not-italic">
                1
              </div>
              <h3 className="font-serif text-xl font-medium text-[#292A27]">
                Automatic Monthly Credit
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                Your monthly plan dues are charged automatically once per month, instantly loading a full service credit to your account.
              </p>
            </div>

            <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#DACFC2] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2B4035] text-[#FFFDF8] flex items-center justify-center font-extrabold text-lg font-sans not-italic">
                2
              </div>
              <h3 className="font-serif text-xl font-medium text-[#292A27]">
                Book Any Service
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                Redeem your credit for your choice of massage, facial, haircut, nails, or lash fill. Need something extra? Enjoy your member discount.
              </p>
            </div>

            <div className="bg-[#FFFDF8] p-8 rounded-2xl border border-[#DACFC2] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2B4035] text-[#FFFDF8] flex items-center justify-center font-extrabold text-lg font-sans not-italic">
                3
              </div>
              <h3 className="font-serif text-xl font-medium text-[#292A27]">
                Credits Never Expire
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                Busy schedule or out of town? Unused credits permanently roll over for as long as your membership remains active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our memberships."
        />

        <div className="space-y-4">
          {faFAQs(faqs)}
        </div>
      </section>

      {/* Final Enrollment CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B4035] text-[#FFFDF8] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#A8B39F] font-semibold">
            ENROLL IN SECONDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">
            Begin Your {shortName} Plan Today.
          </h2>
          <p className="text-xs sm:text-sm text-[#DDE3D9] max-w-xl mx-auto leading-relaxed">
            Enroll online or speak with our front desk team during your next visit. We&apos;ll set up your membership in seconds.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton variant="white" title="Online enrollment opening soon">
              Enroll Online
            </BookButton>
            <a
              href={`tel:${info.phone}`}
              className="text-xs text-[#FFFDF8] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B5A18D]" /> Call to Enroll: {info.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function faFAQs(faqs: { q: string; a: string }[]) {
  return faqs.map((faq, i) => (
    <details
      key={i}
      className="group bg-[#FFFDF8] rounded-xl border border-[#EDE7DD] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
    >
      <summary className="flex items-center justify-between text-sm sm:text-base font-medium text-[#292A27] group-hover:text-[#2B4035] transition-colors">
        <span>{faq.q}</span>
        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#B5A18D]">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-xs sm:text-sm text-[#5C5E58] leading-relaxed border-t border-[#EDE7DD] pt-3">
        {faq.a}
      </p>
    </details>
  ));
}
