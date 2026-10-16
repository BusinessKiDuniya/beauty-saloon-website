import {
  BusinessInfo,
  ServiceCategory,
  PranaPlan,
  TeamMember,
  ClientReview,
  LookbookItem,
  serviceCategories,
  pranaPlans,
  teamMembers,
  clientReviews,
  lookbookItems
} from "./siteData";
import { ClientProfile } from "@/types";
export type { ClientProfile };

/* ==========================================================================
   CLIENT REGISTRY — ADD / EDIT CLIENTS IN ONE SINGLE PLACE
   To add a new client:
   1. Add a new key (e.g. 'luxe-salon') to clientsRegistry below.
   2. Share the site as: https://your-domain.com/?client=luxe-salon
   ========================================================================== */

export const clientsRegistry: Record<string, ClientProfile> = {
  // --------------------------------------------------------------------------
  // CLIENT 1: PRANA BEAUTY & WELLNESS SALON (Centennial, CO)
  // --------------------------------------------------------------------------
  prana: {
    id: "prana",
    name: "Prana Beauty & Wellness Salon",
    shortName: "Prana",
    tagline: "Modern Organic Luxury • Beauty With Intention",
    badge: "Centennial, Colorado",
    accentColor: "#2B4035",
    businessInfo: {
      name: "Prana Beauty & Wellness Salon",
      tagline: "Modern Organic Luxury • Beauty With Intention",
      phone: "3033048077",
      displayPhone: "(303) 304-8077",
      email: "pranabeautyandwellness@gmail.com",
      address: {
        street: "7475 E Arapahoe Rd.",
        suite: "Ste #2",
        city: "Centennial",
        state: "CO",
        zip: "80112",
        full: "7475 E Arapahoe Rd. Ste #2, Centennial, CO 80112"
      },
      bookingUrl: "#",
      isBookingDisabled: true,
      hours: [
        { day: "Sunday", hours: "9:00 AM – 6:00 PM", isOpen: true },
        { day: "Monday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Tuesday", hours: "Closed", isOpen: false },
        { day: "Wednesday", hours: "10:00 AM – 8:00 PM", isOpen: true },
        { day: "Thursday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Friday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Saturday", hours: "9:00 AM – 6:00 PM", isOpen: true }
      ],
      socials: {
        instagram: "https://www.instagram.com/pranabeautyandwellnessalon?igsh=MTc1ZjI3dTNycjNndg==",
        facebook: "https://www.facebook.com/Prana-Beauty-and-Wellness-Salon-105664497696648/",
        youtube: "https://www.youtube.com/channel/UCbIVDd7Q1A-wbb28UX1fHMA",
        tiktok: "https://www.tiktok.com/@hairbyjessica_co"
      },
      sustainability: {
        partner: "Green Circle Salons Certified",
        description:
          "We are proud to repurpose up to 95% of our salon waste through Green Circle Salons, supporting environmental renewal with every service.",
        initiatives: [
          "Hair clippings repurposed to clean up ocean and environmental oil spills",
          "Foils, color tubes, and salon metals recycled and diverted from landfills",
          "Excess color, lightener, and chemicals neutralized and safely recycled",
          "Clean product lines with low carbon footprints: Surface Pure Color, Davines, and L'ANZA"
        ]
      }
    },
    hero: {
      badge: "BEAUTY • WELLNESS • INTENTION",
      titleLine1: "Beauty That",
      titleItalic: "Feels Like You.",
      subtitle:
        "Thoughtful beauty services and restorative wellness experiences, shaped around your individual needs in Centennial, Colorado.",
      heroImage: "/images/luxury_salon_sanctuary.jpg",
      secondaryImage: "/images/balayage_hair_art.jpg",
      stats: [
        { number: "95%", label: "Salon Waste Diverted" },
        { number: "100%", label: "Cruelty-Free Products" },
        { number: "15+", label: "Years Master Artistry" },
        { number: "5.0 ★", label: "Client Satisfaction" }
      ]
    },
    announcement: {
      locationBadge: "Centennial, CO",
      headline: "Holistic Beauty & Ayurvedic Spa Sanctuary",
      promo: "$50 Off New Full Lash Sets",
      phonePrompt: "Call or Text"
    },
    aboutStory: {
      badge: "OUR PHILOSOPHY & ROOTS",
      title: "Rooted in Vital Energy, Sustainable Care & Master Artistry",
      paragraphs: [
        "Prana (प्राण) represents the vital life force that flows through every living being. Founded by master hair stylist Jessica De Somma, our salon was created to bridge high-performance, fashion-forward hair design with deep holistic wellness and earth-minded responsibility.",
        "We believe self-care should restore rather than deplete. That is why our sanctuary operates with low-toxin, clean botanical product lines, clean air, zero harsh ammonia fumes, and a zero-waste partnership with Green Circle Salons."
      ],
      founderName: "Jessica De Somma",
      founderRole: "Founder & Master Hair Stylist (Vidal Sassoon Trained)",
      founderBio:
        "Trained at Vidal Sassoon in New York for precision cutting and advanced blonding, Jessica brought together high-end hair design and Ayurvedic medicine studied at Kripalu to create Prana in Centennial, Colorado.",
      founderImage: "/images/team_jessica.jpg",
      coreValues: [
        { title: "Vidal Sassoon Precision", description: "Intentional haircuts that fall gracefully and grow out effortlessly." },
        { title: "Ayurvedic Restorative Touch", description: "Balancing scalp oils, bronze Kansa wands, and ancient botanical nourishment." },
        { title: "Green Circle Certified", description: "Recycling 95% of foils, color tubes, and hair for environmental oil cleanup." }
      ]
    },
    services: serviceCategories,
    plans: pranaPlans,
    team: teamMembers,
    reviews: clientReviews,
    lookbook: lookbookItems
  },

  // --------------------------------------------------------------------------
  // CLIENT 2: AURORA LUXE HAIR & AESTHETIC LOUNGE (Denver / Cherry Creek, CO)
  // --------------------------------------------------------------------------
  aurora: {
    id: "aurora",
    name: "Aurora Luxe Hair & Aesthetic Lounge",
    shortName: "Aurora Luxe",
    tagline: "High-End Contemporary Glamour • Bespoke Blonding & Spa",
    badge: "Cherry Creek, Denver, CO",
    accentColor: "#1B2A32",
    businessInfo: {
      name: "Aurora Luxe Hair & Aesthetic Lounge",
      tagline: "High-End Contemporary Glamour • Bespoke Blonding & Spa",
      phone: "7205550198",
      displayPhone: "(720) 555-0198",
      email: "concierge@auroraluxesalon.com",
      address: {
        street: "2800 E 1st Avenue",
        suite: "Ste #410",
        city: "Denver",
        state: "CO",
        zip: "80206",
        full: "2800 E 1st Avenue Ste #410, Cherry Creek, Denver, CO 80206"
      },
      bookingUrl: "#",
      isBookingDisabled: true,
      hours: [
        { day: "Sunday", hours: "10:00 AM – 5:00 PM", isOpen: true },
        { day: "Monday", hours: "9:00 AM – 7:00 PM", isOpen: true },
        { day: "Tuesday", hours: "9:00 AM – 7:00 PM", isOpen: true },
        { day: "Wednesday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Thursday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Friday", hours: "9:00 AM – 8:00 PM", isOpen: true },
        { day: "Saturday", hours: "9:00 AM – 6:00 PM", isOpen: true }
      ],
      socials: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        tiktok: "https://tiktok.com"
      },
      sustainability: {
        partner: "Eco-Luxe Beauty Collective",
        description:
          "Aurora Luxe pairs pinnacle luxury with responsible clean formulations and 100% recyclable foil and color packaging.",
        initiatives: [
          "Zero-ammonia luxury French glosses and organic bond-building peptides",
          "Water-saving European micro-mist basin filtration systems",
          "Cruelty-free botanical nail systems and vegan lash fibers"
        ]
      }
    },
    hero: {
      badge: "BESPOKE BLONDING • AESTHETICS • ELEVATION",
      titleLine1: "Effortless Modern",
      titleItalic: "Luxury Hair & Glow.",
      subtitle:
        "Denver’s premier destination for seamless lived-in blonde, designer French haircuts, clinical hydration facials, and luxury nail suites.",
      heroImage: "/images/hair_color_alchemy.jpg",
      secondaryImage: "/images/clean_dazzle_manicure.jpg",
      stats: [
        { number: "10+", label: "Celebrity Master Colorists" },
        { number: "4.9 ★", label: "Over 800 Client Reviews" },
        { number: "100%", label: "Custom Formula Match" },
        { number: "VIP", label: "Private Penthouse Suites" }
      ]
    },
    announcement: {
      locationBadge: "Cherry Creek • Denver",
      headline: "Denver's Luxury Blonding & Aesthetic Atelier",
      promo: "Complimentary K-18 Hair Repair with Balayage",
      phonePrompt: "Concierge Desk"
    },
    aboutStory: {
      badge: "THE AURORA STANDARD",
      title: "Where High Fashion Meets Effortless Everyday Confidence",
      paragraphs: [
        "Founded in the heart of Cherry Creek, Aurora Luxe was born from a desire to elevate the salon journey into a bespoke hospitality experience. We blend Parisian balayage technique with cutting-edge hair science to create hair that moves with luminous vitality.",
        "From our Italian espresso bar to private styling suites and restorative head spa treatments, every detail is engineered to make you feel like the most radiant version of yourself."
      ],
      founderName: "Elena Vane & Marco Rossi",
      founderRole: "Artistic Directors & Master Blonding Educators",
      founderBio:
        "With 20+ years of editorial runways in Milan, New York, and Denver, Elena and Marco bring world-class precision and lived-in blonde artistry to every guest.",
      founderImage: "/images/team_billy.jpg",
      coreValues: [
        { title: "Bespoke Blonding Architecture", description: "Tailoring tone, shadow root, and face-framing brightness to your unique bone structure." },
        { title: "Hospitality First", description: "Champagne service, silent appointments on request, and private styling suites." },
        { title: "Bond-First Hair Chemistry", description: "Never compromising hair fiber integrity, backed by clinical bond repair." }
      ]
    },
    services: serviceCategories,
    plans: pranaPlans.map((p) => ({
      ...p,
      name: p.name.replace("Essential Glow", "Aurora Luxe Glow").replace("Prana Pure", "Atelier VIP Luxury"),
      tagline: p.tagline.replace("Prana", "Aurora Luxe"),
      description: p.description.replace("Prana", "Aurora Luxe")
    })),
    team: teamMembers,
    reviews: clientReviews.map((r) => ({
      ...r,
      text: r.text.replace(/Prana/g, "Aurora Luxe").replace(/Centennial/g, "Cherry Creek")
    })),
    lookbook: lookbookItems
  },

  // --------------------------------------------------------------------------
  // CLIENT 3: BOTANICA HERBAL PARLOR & SPA (Boulder, CO)
  // --------------------------------------------------------------------------
  botanica: {
    id: "botanica",
    name: "Botanica Herbal Parlor & Spa",
    shortName: "Botanica",
    tagline: "Pure Herbal Restorative Beauty • Earth-Minded Alchemy",
    badge: "Pearl St, Boulder, CO",
    accentColor: "#3F4F3A",
    businessInfo: {
      name: "Botanica Herbal Parlor & Spa",
      tagline: "Pure Herbal Restorative Beauty • Earth-Minded Alchemy",
      phone: "3034440280",
      displayPhone: "(303) 444-0280",
      email: "hello@botanicaboulder.com",
      address: {
        street: "1420 Pearl Street",
        suite: "Ste B",
        city: "Boulder",
        state: "CO",
        zip: "80302",
        full: "1420 Pearl Street Ste B, Boulder, CO 80302"
      },
      bookingUrl: "#",
      isBookingDisabled: true,
      hours: [
        { day: "Sunday", hours: "10:00 AM – 6:00 PM", isOpen: true },
        { day: "Monday", hours: "10:00 AM – 6:00 PM", isOpen: true },
        { day: "Tuesday", hours: "Closed", isOpen: false },
        { day: "Wednesday", hours: "9:00 AM – 7:00 PM", isOpen: true },
        { day: "Thursday", hours: "9:00 AM – 7:00 PM", isOpen: true },
        { day: "Friday", hours: "9:00 AM – 7:00 PM", isOpen: true },
        { day: "Saturday", hours: "9:00 AM – 6:00 PM", isOpen: true }
      ],
      socials: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        tiktok: "https://tiktok.com"
      },
      sustainability: {
        partner: "Certified B-Corp Salon & Zero Waste",
        description:
          "100% solar-powered sanctuary using biodynamic plant dyes, clean organic nail lacquers, and local Colorado mountain herbs.",
        initiatives: [
          "Biodynamic plant dyes, henna infusions, and 100% ammonia-free color",
          "Herbal tea dispensary complimentary for all guests with local wildflowers",
          "Carbon-neutral operations and compostable salon capes and towels"
        ]
      }
    },
    hero: {
      badge: "ORGANIC SCALP SPA • BOTANICAL COLOR • WILD BEAUTY",
      titleLine1: "Wild Botanical Care",
      titleItalic: "Rooted in Nature.",
      subtitle:
        "Boulder’s organic hair sanctuary and herbal spa retreat. Biodynamic color, Japanese scalp detox rituals, and non-toxic botanical aesthetics.",
      heroImage: "/images/ayurvedic_kansa_ritual.jpg",
      secondaryImage: "/images/massage_ayurvedic_spa.jpg",
      stats: [
        { number: "100%", label: "Clean Botanical Formulas" },
        { number: "Zero", label: "Synthetic Fragrances" },
        { number: "Solar", label: "Powered Salon Energy" },
        { number: "5.0 ★", label: "Voted Best Boulder Spa" }
      ]
    },
    announcement: {
      locationBadge: "Pearl St • Boulder",
      headline: "Certified Organic Herbal Scalp Spa & Hair Sanctuary",
      promo: "Free Wildflower Botanical Scalp Oil With Any Service",
      phonePrompt: "Herbal Care Line"
    },
    aboutStory: {
      badge: "HERBAL ALCHEMY & INTENTION",
      title: "Honoring Your Scalp, Hair, and the Living Earth",
      paragraphs: [
        "Nestled off historic Pearl Street in Boulder, Botanica is a holistic oasis devoted to non-toxic beauty. We believe that true radiance begins at the root — nurturing the scalp microbiome with raw botanicals, cold-pressed herbs, and intention.",
        "Step through our doors to find cedarwood, calming fresh mountain tea, warm herbal compresses, and master stylists who honor the integrity of your hair and the planet."
      ],
      founderName: "Aria Thorne",
      founderRole: "Clinical Herbalist & Master Scalp Specialist",
      founderBio:
        "Aria spent 15 years studying plant medicine and trichology to develop Botanica’s signature Japanese Head Spa and biodynamic color rituals.",
      founderImage: "/images/team_cassandra.jpg",
      coreValues: [
        { title: "Holistic Scalp Health", description: "Micro-circulation massages, organic botanical infusions, and steam treatments." },
        { title: "Plant-Based Mastery", description: "Clean hair colors derived from desert plants, chamomile, and walnut hulls." },
        { title: "Sanctuary of Silence", description: "Unplug, breathe clean botanical air, and unwind from digital burnout." }
      ]
    },
    services: serviceCategories,
    plans: pranaPlans.map((p) => ({
      ...p,
      name: p.name.replace("Essential Glow", "Botanica Scalp & Glow").replace("Prana Pure", "Wild Herbal Sanctuary"),
      tagline: p.tagline.replace("Prana", "Botanica"),
      description: p.description.replace("Prana", "Botanica")
    })),
    team: teamMembers,
    reviews: clientReviews.map((r) => ({
      ...r,
      text: r.text.replace(/Prana/g, "Botanica").replace(/Centennial/g, "Boulder")
    })),
    lookbook: lookbookItems
  }
};

export const DEFAULT_CLIENT_ID = "prana";

/**
 * Returns the requested client profile, falling back safely to DEFAULT_CLIENT_ID ('prana').
 */
export function getClient(clientId?: string | null): ClientProfile {
  if (!clientId) {
    return clientsRegistry[DEFAULT_CLIENT_ID];
  }

  const normalized = clientId.toLowerCase().trim();
  return clientsRegistry[normalized] || clientsRegistry[DEFAULT_CLIENT_ID];
}

/**
 * Returns a quick list of all available clients for switchers and previews.
 */
export function getAllClients() {
  return Object.values(clientsRegistry).map((c) => ({
    id: c.id,
    name: c.name,
    shortName: c.shortName,
    tagline: c.tagline,
    badge: c.badge,
    accentColor: c.accentColor
  }));
}
