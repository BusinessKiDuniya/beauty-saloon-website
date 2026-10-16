import React from "react";
import type { Metadata } from "next";
import ServicesDirectoryContent from "@/components/ServicesDirectoryContent";

export const metadata: Metadata = {
  title: "Services & Treatment Menu | Hair, Spa, Nails & Lashes",
  description:
    "Explore the complete service menu: hair color, balayage, cuts, holistic facials, therapeutic massage, clean nails, and lash extensions."
};

export default function ServicesPage() {
  return <ServicesDirectoryContent />;
}
