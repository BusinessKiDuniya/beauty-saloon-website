import React from "react";
import Link from "next/link";
import BookButton from "@/components/BookButton";

interface AboutCtaProps {
  shortName: string;
  city: string;
}

export default function AboutCta({ shortName, city }: AboutCtaProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
      <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292A27]">
        Experience the {shortName} Sanctuary.
      </h2>
      <p className="text-sm text-[#5C5E58] max-w-xl mx-auto leading-relaxed">
        Whether you&apos;re looking for lived-in balayage, holistic skin restoration, or an intentional haircut, we invite you to experience our space in {city}.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BookButton>
          Book an Appointment Online
        </BookButton>
        <Link
          href="/team"
          className="px-6 py-3.5 rounded-full bg-[#EDE7DD] hover:bg-[#DACFC2] text-[#292A27] font-semibold text-sm border border-[#DACFC2]"
        >
          Meet the Team
        </Link>
      </div>
    </section>
  );
}
