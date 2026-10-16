"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Recycle,
  Calendar
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from "@/components/SocialIcons";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo, serviceCategories as defaultServiceCategories } from "@/data/siteData";

export default function Footer() {
  const currentYear = 2026;
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const shortName = client?.shortName || "Prana";
  const fullName = client?.name || "Prana Beauty & Wellness Salon";
  const categories = client?.services || defaultServiceCategories;
  const sustain = client?.businessInfo?.sustainability || defaultBusinessInfo.sustainability;

  return (
    <footer className="bg-[#1E2D25] text-[#F8F6F1] pt-16 pb-12 border-t border-[#2B4035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2B4035]/80">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A8B39F] flex items-center justify-center text-[#1E2D25] font-serif text-xl font-bold">
                {shortName.charAt(0)}
              </div>
              <div>
                <span className="font-serif text-2xl tracking-wider text-[#FFFDF8] font-bold block">
                  {shortName.toUpperCase()}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8B39F] font-medium block">
                  {client?.tagline?.split("•")[0]?.trim() || "Beauty & Wellness Salon"}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DDE3D9] leading-relaxed max-w-sm">
              {client?.aboutStory?.paragraphs?.[0] ||
                `Rooted in intentional care, ${shortName} brings together thoughtful beauty services and restorative wellness in ${info.address.city}, ${info.address.state}. Beauty with intention and sustainable self-care.`}
            </p>

            {/* Green Circle Salons Partner Badge */}
            <div className="bg-[#2B4035]/70 border border-[#3D5648] p-3.5 rounded-xl flex items-start gap-3 max-w-sm">
              <Recycle className="w-5 h-5 text-[#A8B39F] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-[#FFFDF8]">
                  {sustain?.partner || "Certified Sustainable Salon"}
                </div>
                <div className="text-[11px] text-[#A8B39F] mt-0.5 leading-snug">
                  {sustain?.description || "Dedicated to environmental responsibility, clean beauty, and zero waste."}
                </div>
              </div>
            </div>

            {/* Social Accounts */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={info.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2B4035] hover:bg-[#A8B39F] hover:text-[#1E2D25] flex items-center justify-center transition-colors text-[#F8F6F1]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={info.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2B4035] hover:bg-[#A8B39F] hover:text-[#1E2D25] flex items-center justify-center transition-colors text-[#F8F6F1]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              {info.socials.youtube && (
                <a
                  href={info.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2B4035] hover:bg-[#A8B39F] hover:text-[#1E2D25] flex items-center justify-center transition-colors text-[#F8F6F1]"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
              {info.socials.tiktok && (
                <a
                  href={info.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2B4035] hover:bg-[#A8B39F] hover:text-[#1E2D25] flex items-center justify-center transition-colors text-[#F8F6F1]"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#DDE3D9]">
              <li>
                <Link href="/services/hair" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Hair & Healing Color
                </Link>
              </li>
              <li>
                <Link href="/services/skincare" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Ayurvedic Skincare
                </Link>
              </li>
              <li>
                <Link href="/services/massage" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Massage & Prenatal
                </Link>
              </li>
              <li>
                <Link href="/services/nails" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Clean Nail Lounge
                </Link>
              </li>
              <li>
                <Link href="/services/lashes-brows-waxing" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Lashes, Brows & Waxing
                </Link>
              </li>
              <li>
                <Link href="/services/makeup" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Makeup & Lessons
                </Link>
              </li>
              <li>
                <Link href="/services/bridal" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Bridal Experiences
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-[#A8B39F] font-medium inline-flex items-center gap-1 hover:text-[#FFFDF8]">
                  Full Menu & Prices <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Salon & Community */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              Discover
            </h3>
            <ul className="space-y-2 text-sm text-[#DDE3D9]">
              <li>
                <Link href="/about" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  About Prana & Story
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Prana Plans ($100 & $150)
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Join Our Team & Booth Rental
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFFDF8] hover:underline transition-colors">
                  Location & Hours
                </Link>
              </li>
              <li className="pt-2">
                <span
                  role="button"
                  aria-disabled="true"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#A8B39F] text-[#1E2D25] pointer-events-auto select-none booking-disabled-cursor opacity-90"
                  title="Online appointment booking opening soon"
                >
                  <Calendar className="w-3 h-3" /> Book Online
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-[#DDE3D9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed">
                  {info.address.street} {info.address.suite}
                  <br />
                  {info.address.city}, {info.address.state} {info.address.zip}
                  <br />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(info.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8B39F] underline hover:text-[#FFFDF8] inline-block mt-0.5"
                  >
                    Get Directions
                  </a>
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A8B39F] shrink-0" />
                <a
                  href={`tel:${info.phone}`}
                  className="text-xs hover:text-[#FFFDF8] transition-colors font-medium"
                >
                  {info.displayPhone} (Call or Text)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A8B39F] shrink-0" />
                <a
                  href={`mailto:${info.email}`}
                  className="text-xs hover:text-[#FFFDF8] transition-colors truncate max-w-[200px]"
                >
                  {info.email}
                </a>
              </div>

              <div className="pt-2 border-t border-[#2B4035]">
                <div className="flex items-center gap-1.5 text-xs text-[#B5A18D] font-medium mb-1.5">
                  <Clock className="w-3.5 h-3.5" /> Hours of Operation
                </div>
                <div className="text-[11px] space-y-0.5 text-[#DDE3D9]">
                  <div className="flex justify-between">
                    <span>Mon, Wed, Thu, Fri:</span>
                    <span>9am – 8pm (Wed 10am)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat & Sun:</span>
                    <span>9am – 6pm</span>
                  </div>
                  <div className="flex justify-between text-[#A8B39F]">
                    <span>Tuesday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A8B39F]">
          <div>
            © {currentYear} {info.name}. All rights reserved. {info.address.city}, {info.address.state}.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Vidal Sassoon & Paul Mitchell Trained</span>
            <span>•</span>
            <span>Green Circle Salons</span>
            <span>•</span>
            <span>Sundari & Davines</span>
            <span>•</span>
            <Link href="/contact#policies" className="hover:text-[#FFFDF8] underline">
              Policies & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
