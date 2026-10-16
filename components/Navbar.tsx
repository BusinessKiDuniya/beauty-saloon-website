"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  Phone,
  ArrowRight,
  ExternalLink,
  Scissors,
  Flower2,
  Heart,
  Eye,
  Crown
} from "lucide-react";
import { businessInfo as defaultBusinessInfo, serviceCategories } from "@/data/siteData";
import { useClient } from "@/context/ClientContext";
import BookButton from "@/components/BookButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  const { client } = useClient();

  const info = client?.businessInfo || defaultBusinessInfo;
  const shortName = client?.shortName || "Prana";
  const brandInitial = shortName.charAt(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    {
      label: "Services",
      href: "/services",
      isDropdown: true,
      subItems: [
        { title: "All Services Overview", href: "/services", desc: "Complete service directory & pricing" },
        { title: "Hair Services & Healing Color", href: "/services/hair", desc: "Balayage, blonding, L'ANZA & plant color" },
        { title: "Ayurvedic Skincare", href: "/services/skincare", desc: "Dosha facials, Kansa wand & Marma therapy" },
        { title: "Therapeutic & Prenatal Massage", href: "/services/massage", desc: "Herbal oils, Swedish & deep tissue" },
        { title: "Clean Nail Lounge", href: "/services/nails", desc: "Dazzle Dry, Gel-X & Russian manicures" },
        { title: "Lashes, Brows & Waxing", href: "/services/lashes-brows-waxing", desc: "Borboleta faux mink & brow lamination" },
        { title: "Makeup Artistry & Lessons", href: "/services/makeup", desc: "Event makeup & 1-on-1 technique classes" },
        { title: "Bridal Experience", href: "/services/bridal", desc: "Luxury wedding packages & on-location travel" }
      ]
    },
    { label: `${shortName} Plans`, href: "/plans" },
    { label: "About", href: "/about" },
    { label: "Artists", href: "/team" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#F8F6F1]/95 backdrop-blur-md shadow-sm border-b border-[#EDE7DD]"
          : "bg-[#F8F6F1] border-b border-[#EDE7DD]/60"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#FFFDF8] font-serif text-xl group-hover:scale-105 transition-transform shrink-0 shadow-xs"
              style={{ backgroundColor: client?.accentColor || "#2B4035" }}
            >
              {brandInitial}
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-serif text-xl sm:text-2xl tracking-wider text-[#292A27] font-semibold group-hover:text-[#2B4035] transition-colors leading-none">
                {shortName.toUpperCase()}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#5C5E58] font-medium mt-1">
                {client?.tagline?.split("•")[0]?.trim() || "Beauty & Wellness"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md whitespace-nowrap ${pathname.startsWith("/services")
                          ? "text-[#2B4035] font-semibold"
                          : "text-[#292A27] hover:text-[#2B4035]"
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform shrink-0" />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-80 bg-[#FFFDF8] border border-[#EDE7DD] shadow-xl rounded-xl p-3 transition-all duration-200 z-50 ${servicesDropdown
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      <div className="space-y-1">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block p-2.5 rounded-lg transition-colors ${pathname === sub.href
                                ? "bg-[#EDE7DD] text-[#2B4035]"
                                : "hover:bg-[#F8F6F1] text-[#292A27] hover:text-[#2B4035]"
                              }`}
                          >
                            <div className="text-xs font-semibold">{sub.title}</div>
                            <div className="text-[11px] text-[#5C5E58] mt-0.5 line-clamp-1">{sub.desc}</div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-[#EDE7DD] flex items-center justify-between px-2 text-[11px]">
                        <span className="text-[#A8B39F] font-medium">Eco-friendly salon</span>
                        <Link
                          href="/services"
                          className="text-[#2B4035] font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          All services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap ${pathname === link.href
                      ? "text-[#2B4035] font-semibold"
                      : "text-[#292A27] hover:text-[#2B4035]"
                    }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2B4035] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Phone + Booking Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
            <a
              href={`tel:${info.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#5C5E58] hover:text-[#2B4035] transition-colors font-medium whitespace-nowrap shrink-0"
              title="Call or text salon directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B4035] shrink-0" />
              <span>{info.displayPhone}</span>
            </a>

            <BookButton variant="navbar" className="shrink-0 whitespace-nowrap">
              Book Appointment
            </BookButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <BookButton variant="sm" className="px-3 py-1.5 text-xs">
              Book
            </BookButton>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#292A27] hover:text-[#2B4035] hover:bg-[#EDE7DD] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#FFFDF8] z-50 overflow-y-auto border-t border-[#EDE7DD] p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#A8B39F] font-semibold">
                Explore Services
              </div>
              <div className="grid grid-cols-1 gap-1">
                <Link
                  href="/services"
                  className="px-3 py-2 text-sm font-semibold text-[#2B4035] bg-[#EDE7DD]/50 rounded-lg flex items-center justify-between"
                >
                  <span>Services Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/hair"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Hair Services & Healing Color
                </Link>
                <Link
                  href="/services/skincare"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Ayurvedic Skincare & Facials
                </Link>
                <Link
                  href="/services/massage"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Therapeutic & Prenatal Massage
                </Link>
                <Link
                  href="/services/nails"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Clean Nail Lounge (Dazzle Dry & Gel-X)
                </Link>
                <Link
                  href="/services/lashes-brows-waxing"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Lashes, Brows & Waxing
                </Link>
                <Link
                  href="/services/makeup"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Makeup Artistry & Lessons
                </Link>
                <Link
                  href="/services/bridal"
                  className="px-3 py-2 text-sm text-[#292A27] hover:bg-[#EDE7DD]/30 rounded-lg"
                >
                  Bridal & Wedding Experiences
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#EDE7DD]">
              <div className="text-[11px] uppercase tracking-wider text-[#A8B39F] font-semibold">
                Salon Information
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link
                  href="/plans"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">{shortName} Plans</span>
                  <span className="text-xs text-[#5C5E58] mt-1">Monthly VIP perks</span>
                </Link>
                <Link
                  href="/team"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">Our Artists</span>
                  <span className="text-xs text-[#5C5E58] mt-1">Meet our specialists</span>
                </Link>
                <Link
                  href="/about"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">About {shortName}</span>
                  <span className="text-xs text-[#5C5E58] mt-1">Our story & vision</span>
                </Link>
                <Link
                  href="/careers"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">Join Our Team</span>
                  <span className="text-xs text-[#5C5E58] mt-1">Booth rental & jobs</span>
                </Link>
                <Link
                  href="/reviews"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">Client Reviews</span>
                  <span className="text-xs text-[#5C5E58] mt-1">5-star stories</span>
                </Link>
                <Link
                  href="/contact"
                  className="p-3 bg-[#EDE7DD]/40 rounded-xl font-medium text-[#292A27] flex flex-col justify-between"
                >
                  <span className="font-semibold text-[#2B4035]">Contact & Visit</span>
                  <span className="text-xs text-[#5C5E58] mt-1">Hours & location</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#EDE7DD] space-y-3">
            <BookButton variant="primary" className="w-full py-3.5 text-sm">
              Book an Appointment
            </BookButton>
            <div className="text-center text-xs text-[#5C5E58]">
              Call or text:{" "}
              <a href={`tel:${info.phone}`} className="font-semibold text-[#2B4035] underline">
                {info.displayPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
