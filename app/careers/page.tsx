import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Heart,
  Users,
  ShieldCheck,
  Recycle,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CareersForm from "@/components/CareersForm";
import { businessInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Join Our Team | Hair Stylist Booth Rental & Careers in Centennial, CO",
  description:
    "Explore booth rental and hairstylist career opportunities at Prana Beauty & Wellness Salon in Centennial, CO. Join a supportive, eco-friendly community of hair, skin, massage, lash, and nail artists."
};

export default function CareersPage() {
  const perks = [
    {
      title: "Full-Service Cross-Referral Community",
      desc: "Hair, nails, skincare, massage, waxing, lashes, and makeup all share one beautiful roof—generating natural client cross-pollination."
    },
    {
      title: "Everyday Salon Amenities Included",
      desc: "Fresh towel service, sanitary stations, backbar options, break area, and welcoming client refreshment amenities."
    },
    {
      title: "Certified Sustainable Environment",
      desc: "We are an official Green Circle Salon. Your clients will love knowing their visits support environmental renewal."
    },
    {
      title: "Independence with Community Support",
      desc: "Manage your own hours, pricing, and clientele with the supportive energy and professional amenities of a premier boutique salon."
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Editorial Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B5A18D] font-semibold">
              CAREERS & BOOTH RENTAL
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#292A27] leading-tight">
              A Beautiful Space to <br />
              <span className="italic font-light text-[#2B4035]">
                Grow, Connect & Create.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#5C5E58] leading-relaxed max-w-xl">
              At Prana Beauty & Wellness, we believe the right environment can transform the way you feel about coming to work. Whether you&apos;re looking for the freedom of booth rental to grow your own business or the support of a collaborative team, there&apos;s a path for you at Prana.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="px-8 py-3.5 rounded-full bg-[#2B4035] hover:bg-[#1E2D25] text-[#FFFDF8] font-semibold text-sm shadow transition-colors"
              >
                Submit Booth Rental Inquiry
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-6 py-3.5 rounded-full bg-[#EDE7DD] hover:bg-[#DACFC2] text-[#292A27] font-semibold text-sm border border-[#DACFC2] transition-colors"
              >
                Call Jessica Directly
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7DD]">
              <Image
                src="/images/careers_team.jpg"
                alt="Prana Beauty and Wellness Salon Team Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Opportunities: Booth Rental vs Commission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CURRENT OPPORTUNITIES"
          title="Now Welcoming Hair Stylist Booth Renters"
          description="Designed for established hairstylists who love their clients and are ready for more independence—with the energy and amenities of an established full-service salon."
          align="split"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booth Rental Card */}
          <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-10 border border-[#EDE7DD] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
                ESTABLISHED STYLISTS
              </span>
              <h3 className="font-serif text-3xl font-medium text-[#2B4035]">
                Booth Rental Opportunity
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                If you have built a clientele you love and want full control over your schedule and income, booth rental at Prana provides the perfect home.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#292A27]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Manage 100% of your own schedule, client pricing, and business flow</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Station, mirror, hydraulic chair, and dedicated storage cabinetry</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Fresh towel service, shampoo bowls, backbar amenities, and client drinks</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Green Circle Salon recycling partnership included for all your waste</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#EDE7DD]">
              <a
                href="#apply"
                className="text-xs font-bold text-[#2B4035] hover:underline inline-flex items-center gap-1"
              >
                <span>Inquire about booth rental availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Commission & Growth Card */}
          <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-10 border border-[#EDE7DD] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
                GROWTH & MENTORSHIP
              </span>
              <h3 className="font-serif text-3xl font-medium text-[#2B4035]">
                Commission & Career Stylists
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
                For passionate stylists looking for client-building support, ongoing education, and a collaborative environment to advance their career.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#292A27]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Salon-provided clientele and active new guest booking support</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Vidal Sassoon and advanced cutting/color mentorship from Jessica</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Structured 4-tier pricing growth ladder as your clientele expands</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <span>Botanical backbar color and retail commission incentives</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#EDE7DD]">
              <a
                href="#apply"
                className="text-xs font-bold text-[#2B4035] hover:underline inline-flex items-center gap-1"
              >
                <span>Inquire about commission positions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Love Prana */}
      <section className="bg-[#EDE7DD]/50 py-16 sm:py-24 border-y border-[#EDE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="COMMUNITY VALUES"
            title="What Makes Prana Different"
            description="A clean, calm, supportive culture where artists thrive."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="bg-[#FFFDF8] p-6 rounded-2xl border border-[#EDE7DD] space-y-2">
                <div className="text-xs font-bold text-[#2B4035] uppercase tracking-wider">
                  0{i + 1}
                </div>
                <h4 className="font-serif text-xl font-medium text-[#292A27]">
                  {p.title}
                </h4>
                <p className="text-xs text-[#5C5E58] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-12 border border-[#EDE7DD] shadow-lg space-y-8">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292A27]">
              Start the Conversation
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5E58] leading-relaxed">
              All inquiries are strictly confidential. Fill out this brief form and our founder Jessica will reach out to schedule a private tour.
            </p>
          </div>

          <CareersForm />
        </div>
      </section>
    </div>
  );
}
