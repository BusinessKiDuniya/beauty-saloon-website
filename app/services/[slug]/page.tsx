import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCategoryDetailContent from "@/components/ServiceCategoryDetailContent";
import {
  serviceCategories,
  ServiceCategory
} from "@/data/siteData";

export const instant = false;

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({
    slug: c.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${category.title} | Services & Treatment Menu`,
    description: category.description,
    openGraph: {
      title: `${category.title} | Treatment Menu`,
      description: category.description,
      images: [{ url: category.heroImage }]
    }
  };
}

export default async function ServiceCategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return <ServiceCategoryDetailContent category={category} />;
}
