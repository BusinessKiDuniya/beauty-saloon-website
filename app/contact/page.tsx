import React from "react";
import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Location | Hours, Directions & Inquiries",
  description:
    "Contact our salon and wellness sanctuary. Hours, directions, appointments, phone, email, and guest policies."
};

export default function ContactPage() {
  return <ContactContent />;
}
