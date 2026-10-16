import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { BusinessInfo } from "@/types";

interface HomeLocationSectionProps {
  info: BusinessInfo;
  shortName: string;
}

export default function HomeLocationSection({ info, shortName }: HomeLocationSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFDF8] rounded-3xl overflow-hidden border border-[#EDE7DD] shadow-lg grid grid-cols-1 lg:grid-cols-12">
        {/* Info Side */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B5A18D] font-semibold">
              {info.address.city.toUpperCase()}, {info.address.state.toUpperCase()}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292A27]">
              Visit Our Salon Sanctuary.
            </h2>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              Conveniently located in {info.address.city}, with easy storefront parking directly outside our entrance for a stress-free arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2B4035]" /> Address
              </div>
              <div className="text-sm text-[#292A27] font-medium leading-relaxed">
                {info.address.street} {info.address.suite}
                <br />
                {info.address.city}, {info.address.state} {info.address.zip}
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(info.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#2B4035] hover:underline inline-block mt-1"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#2B4035]" /> Contact
              </div>
              <div className="text-sm text-[#292A27] font-medium">
                <a href={`tel:${info.phone}`} className="hover:underline block">
                  {info.displayPhone} (Call / Text)
                </a>
                <a href={`mailto:${info.email}`} className="text-xs text-[#5C5E58] hover:underline block mt-0.5">
                  {info.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours Table */}
          <div className="pt-4 border-t border-[#EDE7DD]">
            <div className="text-xs uppercase tracking-wider text-[#A8B39F] font-semibold mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2B4035]" /> Operating Hours
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {info.hours.map((h, i) => (
                <div key={i} className="bg-[#F8F6F1] p-2.5 rounded-lg border border-[#EDE7DD]">
                  <div className="font-semibold text-[#292A27]">{h.day}</div>
                  <div className={h.isOpen ? "text-[#5C5E58] mt-0.5" : "text-amber-700 font-medium mt-0.5"}>
                    {h.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-[#5C5E58] bg-[#F8F6F1] p-3 rounded-xl border border-[#EDE7DD]">
            <strong className="text-[#292A27]">Arrival Note:</strong> Please arrive 5–10 minutes prior to your appointment to enjoy complimentary herbal tea and settle comfortably into the space.
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
          <Image
            src="/images/massage_ayurvedic_spa.jpg"
            alt={`${shortName} Welcoming Lounge`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[#2B4035]/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-[#FFFDF8]">
            <div className="space-y-2 max-w-xs drop-shadow-md">
              <div className="font-serif text-3xl font-medium">A Fume-Free Sanctuary</div>
              <p className="text-xs text-[#EDE7DD]">
                Breathing ease with 100% non-toxic nail polish, organic botanical haircare, and serene ambient comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
