import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyQuickBooking from "@/components/StickyQuickBooking";
import { ClientProvider } from "@/context/ClientContext";
import { businessInfo } from "@/data/siteData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pranabeautyandwellnesssalon.com"),
  title: {
    default: "Prana Beauty & Wellness Salon | Centennial, CO",
    template: "%s | Prana Beauty & Wellness Salon"
  },
  description:
    "Sophisticated, natural, and sustainable hair salon and holistic Ayurvedic spa in Centennial, Colorado. Balayage, precision cuts, Ayurvedic facials, therapeutic massage, clean Dazzle Dry nails, and lash extensions.",
  keywords: [
    "hair salon Centennial CO",
    "balayage Centennial",
    "Ayurvedic spa Denver",
    "organic hair color Centennial",
    "Green Circle Salon Colorado",
    "Dazzle Dry nails Centennial",
    "lash extensions Centennial",
    "prenatal massage Centennial",
    "bridal hair and makeup Denver Tech Center"
  ],
  authors: [{ name: "Jessica De Somma" }],
  creator: "Prana Beauty and Wellness Salon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pranabeautyandwellnesssalon.com",
    siteName: "Prana Beauty and Wellness Salon",
    title: "Prana Beauty & Wellness Salon | Centennial, Colorado",
    description:
      "A modern organic luxury beauty and wellness sanctuary in Centennial, CO. Healing color, holistic facials, massage, non-toxic nails, and lash artistry.",
    images: [
      {
        url: "/images/prana_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Prana Beauty and Wellness Salon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prana Beauty & Wellness Salon",
    description: "Modern organic luxury salon and holistic spa in Centennial, Colorado."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "DaySpa"],
    "name": businessInfo.name,
    "description": "Natural and sustainable hair salon and holistic Ayurvedic spa in Centennial, CO offering balayage, haircuts, facials, massage, clean nails, and lashes.",
    "url": "https://www.pranabeautyandwellnesssalon.com",
    "telephone": "+1-303-304-8077",
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7475 E Arapahoe Rd. Ste #2",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5956,
      "longitude": -104.8967
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Apple Pay",
    "founder": {
      "@type": "Person",
      "name": "Jessica De Somma",
      "jobTitle": "Owner & Master Hair Stylist"
    }
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F6F1] text-[#292A27]">
        <ClientProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyQuickBooking />
        </ClientProvider>
      </body>
    </html>
  );
}
