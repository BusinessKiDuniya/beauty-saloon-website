import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Our Story & Holistic Philosophy | Clean Beauty & Wellness",
  description:
    "Learn about our salon story, mission, founder journey, sustainable practices, and holistic beauty rituals."
};

export default function AboutPage() {
  return <AboutContent />;
}
