import React from "react";
import type { Metadata } from "next";
import ReviewsContent from "@/components/ReviewsContent";

export const metadata: Metadata = {
  title: "Client Reviews & Stories | 5-Star Testimonials",
  description:
    "Read 5-star verified reviews from loyal salon and spa guests. Hear about experiences with hair color, balayage, cuts, manicures, and facials."
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
