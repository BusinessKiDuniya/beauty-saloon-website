import React from "react";
import type { Metadata } from "next";
import PlansContent from "@/components/PlansContent";

export const metadata: Metadata = {
  title: "Monthly Beauty & Wellness Memberships | VIP Plans & Rollover Perks",
  description:
    "Join monthly holistic beauty memberships with treatments in hair, facials, massage, nails, or lash fills. Permanent rollover protection and exclusive member discounts."
};

export default function PlansPage() {
  return <PlansContent />;
}
