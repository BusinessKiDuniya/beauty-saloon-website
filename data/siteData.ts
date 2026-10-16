export * from "@/types";

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  bookingUrl: string;
  isBookingDisabled: boolean;
  hours: { day: string; hours: string; isOpen: boolean }[];
  socials: {
    instagram: string;
    facebook: string;
    youtube?: string;
    tiktok?: string;
  };
  sustainability: {
    partner: string;
    description: string;
    initiatives: string[];
  };
}

export const businessInfo: BusinessInfo = {
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
    { day: "Saturday", hours: "9:00 AM – 6:00 PM", isOpen: true },
  ],
  socials: {
    instagram: "https://www.instagram.com/pranabeautyandwellnessalon?igsh=MTc1ZjI3dTNycjNndg==",
    facebook: "https://www.facebook.com/Prana-Beauty-and-Wellness-Salon-105664497696648/",
    youtube: "https://www.youtube.com/channel/UCbIVDd7Q1A-wbb28UX1fHMA",
    tiktok: "https://www.tiktok.com/@hairbyjessica_co"
  },
  sustainability: {
    partner: "Green Circle Salons Certified",
    description: "We are proud to repurpose up to 95% of our salon waste through Green Circle Salons, supporting environmental renewal with every service.",
    initiatives: [
      "Hair clippings repurposed to clean up ocean and environmental oil spills",
      "Foils, color tubes, and salon metals recycled and diverted from landfills",
      "Excess color, lightener, and chemicals neutralized and safely recycled",
      "Clean product lines with low carbon footprints: Surface Pure Color, Davines, and L'ANZA"
    ]
  }
};

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  levels?: string; // Level 1 | 2 | 3 | 4 pricing if applicable
  note?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  philosophy: string;
  heroImage: string;
  featuredBadge?: string;
  serviceGroups: {
    name: string;
    description?: string;
    items: ServiceItem[];
  }[];
  productsUsed: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    slug: "hair",
    title: "Hair Services & Healing Color",
    subtitle: "Custom Blonding, Balayage, Precision Cuts & Plant-Based Color",
    description: "At Prana, beautiful hair starts with healthy hair. We use L'ANZA Healing Color and Surface Pure Color botanical formulations for vibrant, luminous, long-lasting results with minimal chemical impact.",
    philosophy: "We offer a four-tier stylist pricing system that reflects each stylist's experience, advanced Vidal Sassoon and Paul Mitchell training, performance, and booking demand. Every stylist is held to our elevated standards of intentional, health-first care.",
    heroImage: "/images/hair_color_alchemy.jpg",
    featuredBadge: "Signature Category",
    productsUsed: ["L'ANZA Healing Color", "Surface Pure Color (10% donated to World Vision)", "Pravana Vivids", "Davines Haircare", "Loma Organic"],
    serviceGroups: [
      {
        name: "Hair Color & Blonding",
        description: "All highlights include toner, bond protector, and deep conditioning treatment. Prices reflect our 4-level stylist structure (Level 1 | Level 2 | Level 3 | Master Level 4).",
        items: [
          {
            name: "Color Touch Up",
            price: "$95+",
            levels: "$95 | $100 | $105 | $110",
            duration: "90 min",
            description: "Root maintenance and color refresh using healing botanical color."
          },
          {
            name: "Color All Over",
            price: "$135+",
            levels: "$135 | $145 | $155 | $165",
            duration: "105 min",
            description: "Full head rich color from roots to ends with luminous shine."
          },
          {
            name: "Glaze / Toner",
            price: "$60",
            duration: "45 min",
            description: "Refreshes tone, cancels brassiness, and seals the hair cuticle with glossy shine."
          },
          {
            name: "Full Balayage / Highlight",
            price: "$260+",
            levels: "$260 | $285 | $310 | $330",
            duration: "180 min",
            description: "Comprehensive dimensional blonding tailored to your face shape and personal growth pattern. Includes toner, bond protector, and deep treatment."
          },
          {
            name: "Partial Balayage / Highlight",
            price: "$220+",
            levels: "$220 | $240 | $260 | $280",
            duration: "135 min",
            description: "Crown and framing dimensional placement for lived-in natural lightness."
          },
          {
            name: "T-Section Highlight",
            price: "$200+",
            levels: "$200 | $210 | $220 | $230",
            duration: "105 min",
            description: "Targeted parting and hairline highlighting for effortless maintenance between full appointments."
          },
          {
            name: "Face Frame Highlight",
            price: "$180+",
            levels: "$180 | $190 | $200 | $210",
            duration: "90 min",
            description: "Bright 'money piece' and delicate brightening around the facial contours."
          },
          {
            name: "Lightener Retouch (< 1 inch)",
            price: "$190+",
            levels: "$190 | $200 | $210 | $220",
            duration: "120 min",
            description: "On-scalp bleach retouch under 1 inch of regrowth, with toner and conditioning treatment included."
          },
          {
            name: "Add-On Haircut with Highlight",
            price: "$35+",
            levels: "$35 | $40 | $45 | $50",
            duration: "30 min",
            description: "Discounted precision cut combined seamlessly with any blonding service."
          },
          {
            name: "Add-On Root / Gray Coverage with Highlight",
            price: "$65+",
            levels: "$65 | $70 | $75 | $80",
            duration: "30 min",
            description: "Seamless gray coverage applied concurrently with dimensional highlights."
          },
          {
            name: "Corrective Color",
            price: "$80 / hr",
            duration: "Consultation required",
            description: "Specialized color correction requiring prior consultation and customized formulation plan."
          }
        ]
      },
      {
        name: "Precision Haircuts",
        description: "Each haircut includes a thorough consultation, organic wash, scalp massage, and tailored blowout.",
        items: [
          {
            name: "Women's / Customized Haircut",
            price: "$80+",
            levels: "$80 | $85 | $90 | $95",
            duration: "60 min",
            description: "Precision haircut tailored to natural texture, lifestyle, and facial structure."
          },
          {
            name: "Clipper Haircut",
            price: "$50+",
            levels: "$50 | $55 | $60 | $65",
            duration: "45 min",
            description: "Clean tapered or faded clipper cut with scissor detailing."
          },
          {
            name: "Kid's Haircut (Under 8)",
            price: "$40+",
            levels: "$40 | $45 | $50 | $55",
            duration: "30 min",
            description: "Gentle, patient haircut for young ones. Optional shampoo blowdry (+$15) or fade (+$10)."
          }
        ]
      },
      {
        name: "Styling, Keratin & Restorative Treatments",
        description: "Transformative treatments that nourish, strengthen, and smooth.",
        items: [
          {
            name: "Shampoo & Signature Blowdry",
            price: "$50+",
            levels: "$50 | $55 | $60 | $65",
            duration: "45 min",
            description: "Relaxing wash with organic products followed by a bouncy, polished blowout."
          },
          {
            name: "GK Keratin Smoothing Treatment (Formaldehyde-Free)",
            price: "$275+",
            levels: "$275 | $300 | $325 | $350",
            duration: "150 min",
            description: "Clean, formaldehyde-free keratin smoothing to eliminate frizz, seal the cuticle, and restore manageable silkiness for up to 5 months."
          },
          {
            name: "Deep Conditioning Treatment",
            price: "$30",
            duration: "20 min",
            description: "Intensive moisture bath for dry, damaged, or chemically processed strands."
          },
          {
            name: "Bond Protector Add-On",
            price: "$30",
            duration: "15 min",
            description: "Strengthens and preserves internal hair bonds during lifting."
          },
          {
            name: "Curl or Flat Iron Finish",
            price: "$35",
            duration: "30 min",
            description: "Hot tool beach waves, vintage curls, or sleek glass finish."
          },
          {
            name: "Babe Hair Extensions",
            price: "Custom",
            duration: "Free Consult",
            description: "Sew-ins, tape-ins, keratin fusion, clip-ins, and halo extensions. Consultation required."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "How does your 4-tier stylist pricing work?",
        answer: "Our 4-tier pricing (Level 1, Level 2, Level 3, Master Stylist Level 4) reflects each professional's years of experience, specialized training (such as Vidal Sassoon master classes), and booking demand. All Prana stylists participate in continuous advanced education and uphold identical standards of service quality."
      },
      {
        question: "What makes your hair color eco-friendly?",
        answer: "We formulate with L'ANZA Healing Color and Surface Pure Color (plant-based and botanical). We are certified by Green Circle Salons, meaning 100% of our excess color, foils, tubes, and even hair clippings are collected and repurposed rather than poured into waterways or dumped into landfills."
      },
      {
        question: "Do highlights include toner and conditioning?",
        answer: "Yes! Unlike many salons that charge separately for each add-on, all Prana highlighting services automatically include toner, bond protector, and a deep conditioning treatment for optimal hair health."
      }
    ]
  },
  {
    id: "skincare",
    slug: "skincare",
    title: "Holistic & Ayurvedic Skincare",
    subtitle: "Dosha-Personalized Facials, Marma Therapy & Botanical Healing",
    description: "Skin care deeply rooted in Ayurvedic wisdom and holistic science. We formulate exclusively with Sundari organic botanicals and herbs, crafting calm, restorative treatments that heal from within without abrasive stripping.",
    philosophy: "Rather than aggressive peels that leave skin sensitized and vulnerable, our philosophy focuses on calming, nourishing, and strengthening the moisture barrier. Every facial begins with a personal Dosha evaluation (Vata, Pitta, Kapha) and integrates Marma point acupressure for natural radiance.",
    heroImage: "/images/service_skincare.jpg",
    featuredBadge: "Ayurvedic Ritual",
    productsUsed: ["Sundari Ayurvedic Skincare", "Banyan Botanicals Organic Oils", "Kansa Wand Ayurvedic Bronze Metals", "Gotu Kola & Organic Neem"],
    serviceGroups: [
      {
        name: "Ayurvedic Facial Therapies",
        description: "Choose your ideal duration. Each treatment is tailored to your unique skin constitution.",
        items: [
          {
            name: "Age Defying Firming Facial",
            price: "$70 – $180",
            duration: "30 / 50 / 80 min",
            levels: "30 min: $70 | 50 min: $135 | 80 min: $180",
            description: "Reclaim skin vitality with regenerative Gotu Kola. Instantly firms, exfoliates, and improves tone and texture with focused Marma massage therapies and a potent skin-tightening botanical mask."
          },
          {
            name: "Brightening Glow Facial",
            price: "$65 – $175",
            duration: "30 / 50 / 80 min",
            levels: "30 min: $65 | 50 min: $125 | 80 min: $175",
            description: "A luminous multi-faceted treatment that hydrates and restores clarity. Fades dark spots using illuminating botanicals and traditional bronze Kansa wand massage to stimulate lymphatic drainage."
          },
          {
            name: "Intensive Healing Facial",
            price: "$65 – $175",
            duration: "30 / 50 / 80 min",
            levels: "30 min: $65 | 50 min: $125 | 80 min: $175",
            description: "Purify delicate, stressed skin with organic Neem—India's sacred 'pharmacy tree.' Soothes inflammation, calms sensitivity, and restores the natural lipid barrier."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Can I receive a facial right before a big event?",
        answer: "Yes! Because our Ayurvedic treatments emphasize nourishing botanicals, lymphatic drainage, and barrier repair rather than aggressive chemical burning, you will experience radiant, glowing skin with zero downtime or redness."
      },
      {
        question: "What is an Ayurvedic Dosha quiz?",
        answer: "Before your facial begins, we identify whether your constitution is currently exhibiting Vata (dry/cooling), Pitta (sensitive/inflammatory), or Kapha (congested/oil-prone) tendencies. We customize all serums, herbal masques, and massage oils to bring your unique constitution into perfect balance."
      }
    ]
  },
  {
    id: "massage",
    slug: "massage",
    title: "Therapeutic & Ayurvedic Massage",
    subtitle: "Custom Herbal Oils, Marma Energy Therapy & Prenatal Care",
    description: "Inspired by ancient Ayurvedic principles that view body, mind, and spirit as interconnected. Each massage is customized with warm botanical herbal oils that penetrate the skin to soothe nervous system strain, release deep fascial tension, and restore vitality.",
    philosophy: "Led by Licensed Massage Therapists and trained doulas, our treatments combine intuitive touch, intentional pacing, and healing modalities like cupping, hot stones, and Mahanarayan herbal oils.",
    heroImage: "/images/massage_ayurvedic_spa.jpg",
    featuredBadge: "Restorative Bodywork",
    productsUsed: ["Banyan Botanicals Herbal Oils", "Mahanarayan Joint & Muscle Oil", "Organic Essential Aromatherapy", "Natural Basalt Warm Stones"],
    serviceGroups: [
      {
        name: "Signature Massage Rituals",
        description: "Tailored pressures and directional strokes aligned with your physical tension and elemental constitution.",
        items: [
          {
            name: "Signature Ayurveda Massage",
            price: "$150",
            duration: "75 min",
            description: "Personalized to balance your unique Dosha (Vata, Pitta, or Kapha). Includes consultation, directional Marma strokes, warm hand-selected herbal oils, and customizable enhancements (dry brushing, scrubs, cupping, or hot stones)."
          },
          {
            name: "Swedish Relaxation Massage",
            price: "$110 – $160",
            duration: "60 / 90 min",
            levels: "60 min: $110 | 90 min: $160",
            description: "Classic full-body relaxation using long, flowing strokes and gentle pressure to calm the central nervous system, boost circulation, and relieve everyday stress."
          },
          {
            name: "Therapeutic Deep Tissue",
            price: "$125 – $175",
            duration: "60 / 90 min",
            levels: "60 min: $125 | 90 min: $175",
            description: "Focused results targeting chronic tension, postural strain, and trigger points in deeper muscle and fascial layers. Mindful, restorative pacing without unnecessary trauma."
          },
          {
            name: "Prenatal Nurturing Massage",
            price: "$115",
            duration: "50 min",
            description: "Specialized nurturing massage for expectant mothers, performed by a licensed therapist who is also a certified doula. Supported pillow positioning eases lumbar strain, hip tension, and fluid retention safely through all trimesters."
          },
          {
            name: "Herbal Foot Bath & Reflexology",
            price: "$65",
            duration: "30 min",
            description: "Warm botanical herbal soak infused with detoxifying minerals followed by targeted Marma point reflexology to stimulate whole-body harmony."
          },
          {
            name: "Tension Relief (Neck, Back & Shoulders)",
            price: "$65",
            duration: "30 min",
            description: "Rapid relief for desk strain, computer tension, and upper-back tightness."
          }
        ]
      },
      {
        name: "Holistic Enhancements",
        description: "Enrich any massage session with targeted therapeutic upgrades ($25 each).",
        items: [
          { name: "Warm Basalt Hot Stones", price: "$25", description: "Melts deep muscle knots with soothing thermal energy." },
          { name: "Mahanarayan Herbal Oil", price: "$25", description: "Classical Ayurvedic blend of 29 herbs for joints and sore muscles." },
          { name: "Myofascial Cupping", price: "$25", description: "Decompresses tight fascia and enhances localized blood circulation." },
          { name: "Herbal Healing Salve", price: "$25", description: "Infused with arnica and soothing organic botanicals." },
          { name: "Exfoliating Sugar Scrub", price: "$25", description: "Smooths skin on back or feet with nourishing raw sugar and oils." }
        ]
      }
    ],
    faqs: [
      {
        question: "Is prenatal massage safe during my first or third trimester?",
        answer: "Yes. Our prenatal massage is administered by a licensed therapist who is also a certified doula. We utilize supportive side-lying bolster arrangements and gentle, safe pressure tailored specifically for the comfort of both mother and child."
      },
      {
        question: "What is Mahanarayan oil?",
        answer: "Mahanarayan is a revered Ayurvedic formulation composed of sesame oil infused with dozens of organic herbs (including ashwagandha, bala, and ginger). It deeply nourishes muscles, lubricates joints, and grounds restless energy."
      }
    ]
  },
  {
    id: "nails",
    slug: "nails",
    title: "Clean & High-Performance Nails",
    subtitle: "Dazzle Dry, HEMA-Free Gel, Gel-X & Russian Cuticle Care",
    description: "A completely clean, fume-free nail lounge. We proudly omit acrylic and dip powders to protect client respiratory health and preserve the natural nail matrix, utilizing innovative non-toxic systems that dry in 5 minutes and wear up to 3 weeks.",
    philosophy: "We pair clean chemistry—Dazzle Dry (9-Free) and Sundara (21-Free, HEMA-Free)—with precision European/Russian cuticle care, Gel-X extensions, and intricate custom hand-painted nail artistry.",
    heroImage: "/images/clean_dazzle_manicure.jpg",
    featuredBadge: "Clean Beauty Lounge",
    productsUsed: ["Dazzle Dry 9-Free Quick-Dry Polish (Dries in 5 min)", "Sundara 21-Free & HEMA-Free Gel", "Apres Gel-X Full Tips", "Organic Paraffin & Botanical Oils"],
    serviceGroups: [
      {
        name: "Manicures & Extensions",
        description: "All manicures include shaping, detailed cuticle care, hydrating massage, and non-toxic finish.",
        items: [
          { name: "Manicure with Polish (Dazzle Dry)", price: "$45", duration: "45 min", description: "Dries 100% hard in 5 minutes with no UV light and lasts up to 2-3 weeks chip-free." },
          { name: "Manicure with Gel (Sundara 21-Free)", price: "$60", duration: "60 min", description: "Clean HEMA-free gel cured under LED for high gloss and zero damage." },
          { name: "Natural Manicure (No Polish)", price: "$40", duration: "40 min", description: "Precision shaping, gentle cuticle detail, buffing, and cuticle nourishment." },
          { name: "Full Gel-X Set Extensions", price: "$90", duration: "90 min", description: "Soft gel tip extensions that cover the full nail without harsh chemical odors or filing damage." },
          { name: "Hard Gel Tips Russian Manicure", price: "$110", duration: "105 min", description: "High-precision E-file Russian dry cuticle care paired with hard gel tip sculpting." },
          { name: "Hard Gel Fill / Overlay Russian Manicure", price: "$95", duration: "90 min", description: "Maintenance fill and reinforcement for long-lasting natural nail strength." },
          { name: "Child Manicure (Under 10)", price: "$25", duration: "30 min", description: "Gentle nail file and kid-safe Dazzle Dry non-toxic polish." }
        ]
      },
      {
        name: "Pedicures & Spa Rituals",
        description: "Sanitary, pipeless pedicure basins with relaxing foot soaks and massage.",
        items: [
          { name: "Pedicure with Dazzle Dry Polish", price: "$55", duration: "50 min", description: "Foot soak, organic scrub, callus softening, massage, and 5-minute quick-dry polish." },
          { name: "Pedicure with Gel", price: "$70", duration: "60 min", description: "Long-lasting gel finish ready to slide into boots or shoes immediately." },
          { name: "Natural Pedicure (No Polish)", price: "$45", duration: "45 min", description: "Thorough grooming, exfoliation, hydration, and high-shine natural buff." },
          { name: "Ayurvedic Spa Pedicure Upgrade", price: "+$25", duration: "+20 min", description: "Extended massage, organic scrub, warm paraffin wrap, and Dosha herbal oil (Vata vanilla calming, Pitta peppermint cooling, or Kapha bergamot fresh)." },
          { name: "Russian Cuticle Care Upgrade", price: "+$15", duration: "+15 min", description: "Flawless E-file cuticle detailing for immaculate borders." },
          { name: "Organic Warm Paraffin Upgrade", price: "+$15", duration: "+15 min", description: "Intense therapeutic warmth for cracked heels and dry cuticles." }
        ]
      },
      {
        name: "Custom Hand-Painted Nail Art",
        description: "Specialized creative designs by our resident nail artists Davina Hunter and Rhys Orion.",
        items: [
          { name: "French Tips", price: "$10", duration: "15 min", description: "Crisp classic, micro, or colored french smile lines." },
          { name: "Cat Eye Magnetic Polish", price: "$5", duration: "10 min", description: "Velvet magnetic optical shimmer effect." },
          { name: "Chrome Dusting", price: "$5", duration: "10 min", description: "Mirrored glazed donut, silver, or rose gold chrome." },
          { name: "Tier 1 Nail Art (1–2 Nails)", price: "$5 – $10", duration: "15 min", description: "Minimalist accent art, geometric lines, or single charms." },
          { name: "Tier 2 Nail Art (3–4 Nails)", price: "$15", duration: "30 min", description: "Multiple accent designs, florals, foils, or marbling." },
          { name: "Tier 3 Nail Art (Full Set)", price: "$25", duration: "45 min", description: "Custom hand-painted designs on every nail, basic 3D gems, or intricate swirls." },
          { name: "Tier 4 Nail Art (Master Editorial)", price: "$35+", duration: "60+ min", description: "Advanced 3D character art, extensive bling, multi-technique chrome and charms." }
        ]
      }
    ],
    faqs: [
      {
        question: "Why does Prana not offer acrylic or dip powder?",
        answer: "Traditional acrylic and dip powder systems contain strong chemical fumes (MMA, EMA) and require aggressive electric sanding that weakens the natural nail plate over time. We choose Dazzle Dry, Sundara HEMA-free gel, and Gel-X full tips to preserve natural nail integrity and maintain a clean, breathable salon atmosphere."
      },
      {
        question: "How long does Dazzle Dry really take to dry?",
        answer: "Dazzle Dry dries completely rock-hard within 5 minutes of your top coat application—with zero UV lamp needed! You can dig for keys or put on closed-toe shoes right away without smudging."
      }
    ]
  },
  {
    id: "lashes-brows-waxing",
    slug: "lashes-brows-waxing",
    title: "Lashes, Eyebrows & Full Body Waxing",
    subtitle: "Borboleta Faux Mink Extensions, Brow Lamination & Gentle Waxing",
    description: "Enhance your natural features with precision lash artistry and gentle hair removal. We use premium Borboleta ultra-soft faux mink lashes and climate-resilient adhesives tailored for Colorado's dry elevation.",
    philosophy: "From undetectable classic lashes to bold volume and architectural brow lamination, our licensed estheticians customize every curve, length, and shade to highlight your natural eyes without daily makeup.",
    heroImage: "/images/service_lashes.jpg",
    featuredBadge: "Brow & Lash Studio",
    productsUsed: ["Borboleta Faux Mink Lashes", "Borboleta Climate-Resistant Adhesives", "Gentle Strip & Hard Body Waxes", "Vegetable-Based Brow Tints"],
    serviceGroups: [
      {
        name: "Lash Extensions & Lifts",
        description: "Soft, feather-light lashes customized to your eye shape. (Special: $50 off new full sets!).",
        items: [
          { name: "Full Set Classic Lashes", price: "$160", duration: "120 min", description: "One lash extension applied to each natural lash for an elegant, mascara-free look." },
          { name: "Full Set Hybrid Lashes", price: "$200", duration: "135 min", description: "A balanced blend of classic single lashes and fluffy volume fans for texture and fullness." },
          { name: "Full Set Volume Lashes", price: "$245", duration: "150 min", description: "Lightweight handmade fans applied to each lash for dramatic fluff and depth." },
          { name: "Lash Fill (< 14 Days)", price: "$85 – $95", duration: "60 min", levels: "Classic $85 | Hybrid $90 | Volume $95", description: "Bi-weekly fill to replace naturally shed lashes." },
          { name: "Lash Fill (< 21 Days)", price: "$95 – $115", duration: "75 min", levels: "Classic $95 | Hybrid $105 | Volume $115", description: "3-week maintenance fill to restore full density." },
          { name: "Lash Lift & Tint", price: "$110", duration: "60 min", description: "Perms your natural lashes upwards and tints them deep black for 6-8 weeks of natural curl." },
          { name: "Lash Lift Only", price: "$85", duration: "45 min", description: "Elevates and curls natural lashes." },
          { name: "Lash Tint Only", price: "$30", duration: "25 min", description: "Deep black or dark brown tint for natural lashes." },
          { name: "Lash Removal", price: "$40", duration: "30 min", description: "Gentle solvent removal that preserves natural lash health." }
        ]
      },
      {
        name: "Eyebrows & Facial Waxing",
        description: "Framing your facial structure with clean symmetry.",
        items: [
          { name: "Brow Wax & Mapping", price: "$30", duration: "20 min", description: "Custom eyebrow shaping and mapping to flatter your brow bone." },
          { name: "Brow Tint", price: "$30", duration: "20 min", description: "Defines pale or sparse brows with custom semi-permanent tint." },
          { name: "Brow Lamination", price: "$75", duration: "45 min", description: "Realigns hair direction for a fuller, feathery, brushed-up brow shape." },
          { name: "Brow Lamination & Tint", price: "$100", duration: "60 min", description: "Complete brow transformation: lamination, shaping, and rich tint." },
          { name: "Lip Wax", price: "$15", duration: "15 min", description: "Smooth, quick upper lip hair removal." }
        ]
      },
      {
        name: "Full Body Waxing",
        description: "Professional body hair removal using soothing waxes that protect skin sensitivity.",
        items: [
          { name: "Bikini Line", price: "$35", duration: "25 min", description: "Clean removal along the panty line." },
          { name: "Bikini Full", price: "$45", duration: "35 min", description: "Front bikini area cleaned with minimal leave-behind." },
          { name: "Brazilian Wax", price: "$75", duration: "45 min", description: "Complete hair removal from front to back with gentle soothing care." },
          { name: "Underarms", price: "$30", duration: "20 min", description: "Quick and clean underarm waxing." },
          { name: "Half Arm / Full Arm", price: "$45 / $60", duration: "30 / 45 min", description: "Smooth hair removal for both arms." },
          { name: "Lower Leg / Full Leg", price: "$50 / $80", duration: "45 / 60 min", description: "Silky legs with ingrown-minimizing aftercare." },
          { name: "Chest / Back Wax", price: "$55 / $65", duration: "40 min", description: "Broad area smoothing for men and women." }
        ]
      }
    ],
    faqs: [
      {
        question: "How long should my hair be before waxing?",
        answer: "For both body and bikini waxing, hair should be roughly 1/4 inch long (about the length of a grain of rice), typically 2 to 3 weeks after your last shave."
      },
      {
        question: "How do I take care of my lash extensions in Colorado's dry climate?",
        answer: "We use adhesives formulated to perform in Colorado's dry atmosphere. We advise avoiding water and steam for the first 24 hours, brushing lashes daily with a clean spoolie, and using only oil-free facial cleansers."
      }
    ]
  },
  {
    id: "makeup",
    slug: "makeup",
    title: "Professional Makeup Artistry & Lessons",
    subtitle: "Custom Event Makeup, Natural Bridal Looks & Hands-On Education",
    description: "Makeup tailored to highlight your natural features rather than masking them. From glowing event makeup to personalized 1-on-1 artistry lessons that give you everyday confidence.",
    philosophy: "Whether you want effortless everyday minimalism or long-lasting glam for an editorial shoot or gala, our artist creates photo-ready looks tailored to your complexion and comfort level.",
    heroImage: "/images/service_makeup.jpg",
    featuredBadge: "Artistry Studio",
    productsUsed: ["Clean & Mineral Cosmetics", "Hypoallergenic Formulations", "Professional Photo-Ready Setting Sprays", "Weightless Strip Lashes"],
    serviceGroups: [
      {
        name: "Application Services",
        description: "Flawless applications for events, photography, and celebrations.",
        items: [
          { name: "Full Face Makeup", price: "$135", duration: "60 min", description: "A professional, polished look customized to your skin and outfit for any special occasion." },
          { name: "Bridal Makeup (In-Salon)", price: "$150", duration: "75 min", description: "Luxurious, photo-stable bridal makeup designed to wear flawlessly through tears, hugs, and dancing." },
          { name: "Child Makeup Application", price: "$75", duration: "30 min", description: "A light, age-appropriate touch for flower girls, dancers, or milestones." },
          { name: "Add-On Strip Lashes", price: "$25", duration: "15 min", description: "Hand-applied natural or fluttery strip lashes with comfortable flex band." }
        ]
      },
      {
        name: "Personalized Makeup Lessons",
        description: "Hands-on guidance where you learn the actual techniques, brush handling, and color theory for your face.",
        items: [
          { name: "60-Minute Lesson (2 Techniques)", price: "$105", duration: "60 min", description: "Learn 2 key techniques (e.g., flawless everyday skin and natural brow mapping) to streamline your morning ritual." },
          { name: "90-Minute Lesson (3 Techniques)", price: "$150", duration: "90 min", description: "Master 3 customized techniques: complexion correction, eye contouring, and blush placement." },
          { name: "120-Minute Masterclass (Full Face)", price: "$200", duration: "120 min", description: "A comprehensive head-to-toe masterclass creating a complete, wearable full face with your personal makeup bag reviewed." }
        ]
      }
    ],
    faqs: [
      {
        question: "Should I bring my own makeup to a makeup lesson?",
        answer: "Yes! We encourage clients to bring their current makeup bag and brushes. We'll show you what to keep, what might not be suiting your skin tone, and how to utilize what you already own alongside professional artist techniques."
      }
    ]
  },
  {
    id: "bridal",
    slug: "bridal",
    title: "Bridal Experience & Wedding Packages",
    subtitle: "Complete Bridal Hair, Makeup, Pre-Wedding Spa & On-Location Travel",
    description: "Full-service wedding beauty packages in Centennial, Colorado and the Denver Tech Center (DTC). We specialize in calm, punctual wedding timelines so you feel completely radiant, pampered, and grounded on your wedding day.",
    philosophy: "We can host your bridal party in our spacious boutique salon or travel throughout Colorado upon request. Every package is curated to take the stress out of wedding preparations.",
    heroImage: "/images/bridal_radiance_suite.jpg",
    featuredBadge: "Luxury Wedding Packages",
    productsUsed: ["L'ANZA & Davines Long-Wear Styling", "Photo-Grade Clean Makeup", "Sundari Pre-Wedding Skincare", "Borboleta Hybrid Lashes"],
    serviceGroups: [
      {
        name: "Curated Bridal Packages",
        description: "Comprehensive beauty journeys from engagement shoots to honeymoon departure.",
        items: [
          {
            name: "Wedding Day Glow",
            price: "$300 (+$50 for bride)",
            duration: "Day-of priority",
            description: "Flawless wedding hairstyle + long-wear bridal makeup application. Includes detailed consultation and day-of priority timing."
          },
          {
            name: "Renew & Relax Pre-Wedding Spa",
            price: "$205 (Value: $230 • Save $25)",
            duration: "120 min",
            description: "Prepare skin and mind before the big day: 60-Minute Custom Facial + 60-Minute Therapeutic Relaxation Massage."
          },
          {
            name: "Honeymoon Prep Package",
            price: "$275 (Value: $315 • Save $40)",
            duration: "150 min",
            description: "Smooth skin and wake-up ready beauty: Brow Wax + Lip Wax + Underarm Wax + Bikini Wax + Hybrid Lash Extensions."
          },
          {
            name: "The Complete Prana Bridal Experience",
            price: "$900 (Value: $1,000 • Save $100)",
            duration: "Multi-day journey",
            description: "The ultimate luxury bridal prep: Bridal Hair + Bridal Makeup + 60-min Massage + 60-min Facial + Brow, Lip, Underarm & Bikini Wax + Hybrid Lash Extensions + Gel Manicure & Dazzle Dry Spa Pedicure."
          }
        ]
      },
      {
        name: "Bridal A La Carte & Enhancements",
        description: "Custom add-ons for brides and bridal parties.",
        items: [
          { name: "Bridal Trial Hairstyle", price: "$125", duration: "75 min", description: "Test updo, romantic waves, or veil placement before the wedding day." },
          { name: "Bridal Trial Makeup", price: "$125", duration: "75 min", description: "Full preview makeup application to perfect your exact wedding day look." },
          { name: "Volume Lash Extension Upgrade", price: "+$75", description: "Adds lush volume fans to pre-wedding lash sets." },
          { name: "Extend Massage or Facial to 90 Min", price: "+$50", description: "Deepen relaxation leading up to wedding festivities." }
        ]
      }
    ],
    faqs: [
      {
        question: "Does your bridal team travel on-site?",
        answer: "Yes! While we love hosting bridal parties in our private salon in Centennial, our team travels to venues throughout Centennial, Denver Tech Center, Denver Metro, and Colorado mountain destinations upon inquiry."
      },
      {
        question: "How far in advance should I book my bridal services?",
        answer: "We recommend reserving your wedding date 4 to 9 months in advance, especially for prime Colorado summer and autumn wedding weekends. Trials are typically scheduled 4 to 8 weeks before the wedding."
      }
    ]
  }
];

export interface PranaPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  tagline: string;
  description: string;
  monthlyInclusions: string[];
  memberPerks: string[];
  rolloverPolicy: string;
  upgradeOptions: string[];
  recommendedFor: string;
}

export const pranaPlans: PranaPlan[] = [
  {
    id: "essential-glow",
    name: "Essential Glow Plan",
    price: "$100",
    period: "per month",
    badge: "Most Popular",
    tagline: "Monthly restorative rituals to maintain healthy beauty routines.",
    description: "Designed for consistent, foundational self-care. Choose one core salon or spa ritual each month, plus enjoy exclusive retail savings and priority booking.",
    monthlyInclusions: [
      "Choice of ONE monthly core service:",
      "• 50-Minute Swedish Relaxation Massage",
      "• 50-Minute Custom Ayurvedic Facial (Age-Defying, Brightening, or Healing)",
      "• Classic / Dazzle Dry Spa Manicure & Pedicure Duo",
      "• Bi-weekly Lash Fill (Classic)",
      "• Haircut & Deep Conditioning Blowout Experience"
    ],
    memberPerks: [
      "10% off all retail products (Davines, Surface, Sundari, Loma, Banyan)",
      "10% off any additional services booked during the month",
      "Unused monthly treatments roll over as long as membership is active",
      "Option to gift 1 rollover service per year to a friend or family member",
      "Priority seasonal booking for holidays and prime weekend slots"
    ],
    rolloverPolicy: "Never lose a treatment. If life gets busy, your monthly service credits roll over into the next month without expiration as an active member.",
    upgradeOptions: [
      "Upgrade to Deep Tissue or 75-min Ayurvedic Massage: +$25",
      "Upgrade to Gel-X or Hard Gel Nails: +$25",
      "Upgrade to Hybrid / Volume Lash Fill: +$15–$25"
    ],
    recommendedFor: "Anyone committed to monthly wellness, low-stress skin maintenance, and consistent relaxation."
  },
  {
    id: "radiance-deluxe",
    name: "Radiance Deluxe Plan",
    price: "$150",
    period: "per month",
    badge: "Ultimate Wellness",
    tagline: "Expanded, multi-category luxury care with premium inclusions.",
    description: "Our premier membership offering full access to extended massages, advanced Ayurvedic skincare, custom nail art, and higher-tier lash services.",
    monthlyInclusions: [
      "Choice of ONE premier deluxe service each month:",
      "• 75-Minute Signature Ayurveda Massage with herbal oils & custom enhancements",
      "• 80-Minute Age Defying or Brightening Glow Facial with Kansa wand & Marma therapy",
      "• Gel Manicure + Dazzle Dry Pedicure with Ayurvedic Spa Upgrade",
      "• Hybrid or Volume Lash Fill",
      "• All-Over Hair Color Touch-Up with Botanical Gloss & Scalp Treatment"
    ],
    memberPerks: [
      "15% off all retail products in our boutique",
      "15% off all additional services and add-on treatments",
      "Complimentary birthday upgrade or add-on enhancement during your birth month",
      "Unused service credits roll over indefinitely while active",
      "Transfer up to 2 unused credits per year to loved ones",
      "Complimentary beverage service & priority VIP rescheduling"
    ],
    rolloverPolicy: "All monthly credits accumulate automatically. Credits never expire while membership is active.",
    upgradeOptions: [
      "Upgrade to 90-Minute Therapeutic Deep Tissue: +$25",
      "Tier 3 / Tier 4 Custom Nail Art: +$15",
      "Haircut add-on with color service: +$35"
    ],
    recommendedFor: "Clients who prioritize comprehensive, multi-service beauty rituals and want the highest level of savings and personalization."
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  levelTitle: string;
  bio: string;
  specialties: string[];
  instagramHandle: string;
  instagramUrl: string;
  image: string;
  bookingUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jessica-de-somma",
    name: "Jessica De Somma",
    role: "Founder & Master Hair Stylist",
    levelTitle: "Master Stylist Level 4",
    bio: "Jessica began styling hair in 2012 along the beaches of New Jersey, refining techniques on thick, wavy hair and blonding in Philadelphia before taking master classes at Vidal Sassoon in New York for precision cutting and creative color. After a life-changing journey through southern India and studies in Ayurvedic holistic health at Kripalu, Jessica founded Prana to unite high-performance hair artistry with deep respect for nature and health-first salon practices.",
    specialties: ["Lived-In Balayage", "Corrective Color", "Vidal Sassoon Precision Cutting", "Ayurvedic Holistic Health", "Sustainable Salon Leadership"],
    instagramHandle: "@pranabeautyandwellnessalon",
    instagramUrl: "https://www.instagram.com/pranabeautyandwellnessalon?igsh=MTc1ZjI3dTNycjNndg==",
    image: "/images/team_jessica.jpg",
    bookingUrl: "#"
  },
  {
    id: "ashley-izaguirre",
    name: "Ashley Izaguirre",
    role: "Lead Esthetician & Lash Artist",
    levelTitle: "Licensed Esthetician & Wax Specialist",
    bio: "Educated at Avalon Institute, Ashley turned her lifelong love of skincare and aesthetics into a passionate career. She specializes in Borboleta faux mink lash extensions, precision eyebrow lamination, custom mapping, and gentle waxing, creating personalized looks ranging from natural enhancement to glamorous drama.",
    specialties: ["Borboleta Lash Extensions", "Lash Lifts & Tints", "Eyebrow Lamination & Mapping", "Full Body Waxing", "Ayurvedic Facials"],
    instagramHandle: "@ashley.thelashstylist",
    instagramUrl: "https://www.instagram.com/ashley.thelashstylist?igsh=MWg1aWF2Yjh2NjNobw==",
    image: "/images/team_ashley.jpg",
    bookingUrl: "#"
  },
  {
    id: "billy-conklin",
    name: "Billy Conklin",
    role: "Hair Stylist",
    levelTitle: "Hair Stylist Level 2",
    bio: "Originally from New York, Billy spent years in Breckenridge in culinary management before moving to Denver to follow his passion for hair. Trained at Paul Mitchell and sharpened through intensive salon apprenticeships, Billy specializes in blonding, dimensional color, rich toning, long layered cuts, and crisp clipper cuts.",
    specialties: ["Blonding & Highlights", "Color Correction & Filling", "Long Layered Haircuts", "Clipper Cuts", "Toning & Glazing"],
    instagramHandle: "@getyourhurdid",
    instagramUrl: "https://www.instagram.com/getyourhurdid/",
    image: "/images/team_billy.jpg",
    bookingUrl: "#"
  },
  {
    id: "davina-hunter",
    name: "Davina Hunter",
    role: "Nail Artist",
    levelTitle: "Nail Artist & Natural Nail Specialist",
    bio: "A Colorado native with a heart for nail wellness, Davina guides clients along their natural nail journey. Known for meticulous European cuticle care, long-wearing Dazzle Dry systems, and beautiful bridal sets, Davina creates a soothing VIP atmosphere for every client.",
    specialties: ["Natural Nail Health", "Dazzle Dry 5-Minute Polish", "Sundara HEMA-Free Gel", "Bridal Nails", "Spa Pedicures"],
    instagramHandle: "@davinacamille",
    instagramUrl: "https://www.instagram.com/davinacamille/",
    image: "/images/team_davina.jpg",
    bookingUrl: "#"
  },
  {
    id: "erika-martinez",
    name: "Erika Martinez",
    role: "Skincare Specialist & Stylist",
    levelTitle: "Skincare Specialist, Hair Stylist Level 1",
    bio: "Trained at Emily Griffith Technical College, Erika pairs cosmetology with targeted skincare expertise. She crafts empowering hairstyles, customized haircuts, and soothing botanical skincare treatments designed to elevate clients' daily confidence.",
    specialties: ["Botanical Skincare", "Hair Styling & Blowouts", "Custom Haircuts", "Facial Treatments"],
    instagramHandle: "@glammbyerika",
    instagramUrl: "https://www.instagram.com/glammbyerika?igsh=YnowY3lreWQwNDUw",
    image: "/images/team_erika.jpg",
    bookingUrl: "#"
  },
  {
    id: "cassandra-johnson",
    name: "Cassandra Johnson",
    role: "Licensed Massage Therapist & Doula",
    levelTitle: "LMT & Certified Doula",
    bio: "Cassandra has over 7 years of clinical massage experience and is also a certified doula. Known for her calm, deeply respectful demeanor, she personalizes every session to client tension patterns—blending Ayurvedic herbal oils, cupping, and nurturing prenatal care.",
    specialties: ["Signature Ayurveda Massage", "Prenatal & Postnatal Care", "Deep Tissue Therapy", "Myofascial Cupping", "Reflexology"],
    instagramHandle: "@pranabeautyandwellnessalon",
    instagramUrl: "https://www.instagram.com/pranabeautyandwellnessalon?igsh=MTc1ZjI3dTNycjNndg==",
    image: "/images/team_cassandra.jpg",
    bookingUrl: "#"
  },
  {
    id: "yvonne-renee",
    name: "Yvonne Renee",
    role: "Senior Hair Stylist & Nail Artist",
    levelTitle: "Hair Stylist Level 1 & Nail Artist (29 Years Exp.)",
    bio: "With 29 years of distinguished salon experience, Yvonne graduated from Aveda Institute in Denver under the inspiration of Horst Rechelbacher's Ayurvedic philosophy. She brings decades of blonding expertise, designer haircuts, barbering, and sustainable product mastery.",
    specialties: ["Lived-In Color", "Custom Blonding", "Designer Updos", "Barbering & Precision Cuts", "Ayurvedic Hair Philosophy"],
    instagramHandle: "@yvonne_renee_hologram",
    instagramUrl: "https://www.instagram.com/yvonne_renee_hologram/",
    image: "/images/team_yvonne.jpg",
    bookingUrl: "#"
  },
  {
    id: "rhys-orion",
    name: "Rhys Orion",
    role: "Master Nail Artist & Gel-X Specialist",
    levelTitle: "Gel-X & Hand-Painted Nail Art Specialist",
    bio: "Growing up in a salon environment and licensed since 2017, Rhys brings sensory-friendly, accessible care and boundary-pushing creativity to Prana. Rhys thrives in detailed hand-painted 3D art, chrome aesthetics, and durable Gel-X extensions.",
    specialties: ["Apres Gel-X Extensions", "Intricate Hand-Painted Nail Art", "3D Nail Design & Charms", "Sensory-Inclusive Appointments"],
    instagramHandle: "@nineinchnail.ed",
    instagramUrl: "https://www.instagram.com/nineinchnail.ed/",
    image: "/images/team_rhys.jpg",
    bookingUrl: "#"
  }
];

export interface ClientReview {
  id: string;
  author: string;
  service: string;
  text: string;
  rating: number;
  providerMentioned?: string;
}

export const clientReviews: ClientReview[] = [
  {
    id: "review-1",
    author: "Ashley M.",
    service: "Color Correction & Blonding",
    rating: 5,
    providerMentioned: "Billy Conklin",
    text: "I came in with a serious color correction need and Billy BLEW AWAY ANY EXPECTATIONS I had going in. I figured it would take at least 3 visits to go back to Blonde and I can't begin to tell you how amazed and thrilled I am at the magic he created! I feel like myself again, I'm so happy! I've barely left the salon and have received so many compliments. DON'T HESITATE! Book with Billy ❤️"
  },
  {
    id: "review-2",
    author: "Rachel K.",
    service: "Hair Extensions & Lived-in Color",
    rating: 5,
    providerMentioned: "Jessica De Somma",
    text: "I've been going to Prana Beauty and Wellness Salon since it opened. I've actually been an extension and highlight client of Jessica even before she opened Prana. She is so meticulous with her services and actively listens to what you are looking to achieve with your hair style, a true master stylist. And you will have a great time while you are there! Jessica is ethical and takes immense pride in her salon, services, and her team. I'm telling everyone!"
  },
  {
    id: "review-3",
    author: "Sarah L.",
    service: "Bridal Nails & Gel Care",
    rating: 5,
    providerMentioned: "Davina Hunter",
    text: "Davina is the only person I trust with my nails anymore. She even did my nails for my wedding and they were perfect! She is so talented and her passion for her art shows! Plus I love going to Prana in general. It is always such a relaxing and fun experience! Everyone there is so friendly and always makes me feel like a VIP! Can't recommend Davina or Prana enough!"
  },
  {
    id: "review-4",
    author: "Elena G.",
    service: "Dazzle Dry Manicure & Pedicure",
    rating: 5,
    providerMentioned: "Nail Care Team",
    text: "I was so excited to try Dazzle Dry nail polish that is carried at Prana Salon. My manicure lasted close to 3 weeks! I did not have any chips and could remove it with regular polish remover. Dazzle Dry is clean, fast drying, and long lasting. The salon atmosphere is peaceful and natural."
  },
  {
    id: "review-5",
    author: "Megan T.",
    service: "Haircut & Custom Consultation",
    rating: 5,
    providerMentioned: "Jessica De Somma",
    text: "Jessica, the owner of Prana, is a perfect match for anyone looking for a knowledgeable, talented and caring hair stylist! She takes time to consult with you about what hair care needs you have and what she thinks she should do to meet those needs. I had a cut that needed fixed and Jessica not only fixed it, she gave me one of the best cuts I have ever had! I felt taken care of and trusted her. Still loving my haircut a month later!"
  },
  {
    id: "review-6",
    author: "Kendra W.",
    service: "Salon Environment & Healing Haircare",
    rating: 5,
    text: "Unbelievably satisfying customer service and atmosphere. Healing haircare and fashionable earth-minded choices. Truly a sanctuary in Centennial."
  }
];

export interface LookbookItem {
  id: string;
  title: string;
  category: "Hair" | "Skincare" | "Nails" | "Lashes" | "Bridal" | "Atmosphere";
  image: string;
  description: string;
  stylist?: string;
}

export const lookbookItems: LookbookItem[] = [
  {
    id: "lb-1",
    title: "Lived-In Dimensional Honey Balayage",
    category: "Hair",
    image: "/images/balayage_hair_art.jpg",
    description: "Seamless dimensional blonde with soft natural waves and botanical shine.",
    stylist: "Jessica De Somma & Billy Conklin"
  },
  {
    id: "lb-2",
    title: "Centennial Salon Sanctuary",
    category: "Atmosphere",
    image: "/images/luxury_salon_sanctuary.jpg",
    description: "Arched illuminated mirrors, travertine stone, and calming potted olive trees.",
  },
  {
    id: "lb-3",
    title: "Traditional Bronze Kansa & Herbal Oils",
    category: "Skincare",
    image: "/images/ayurvedic_kansa_ritual.jpg",
    description: "Ayurvedic bronze Kansa wand massage with organic neem, Brahmi, and warm herbal oils.",
    stylist: "Ashley Izaguirre & Erika Martinez"
  },
  {
    id: "lb-4",
    title: "Clean Dazzle Dry Botanical Manicure",
    category: "Nails",
    image: "/images/clean_dazzle_manicure.jpg",
    description: "Flawless cuticle Russian care with 5-minute rock-hard non-toxic polish.",
    stylist: "Davina Hunter & Rhys Orion"
  },
  {
    id: "lb-5",
    title: "Colorado Mountain Bridal Suite",
    category: "Bridal",
    image: "/images/bridal_radiance_suite.jpg",
    description: "Romantic bridal updo, glowing natural makeup, and bespoke floral accents.",
    stylist: "Prana Bridal Team"
  },
  {
    id: "lb-6",
    title: "Serene Ayurvedic Spa Sanctuary",
    category: "Atmosphere",
    image: "/images/massage_ayurvedic_spa.jpg",
    description: "Warm basalt stones, aromatic jasmine, and organic linen massage table.",
    stylist: "Cassandra Johnson"
  },
  {
    id: "lb-7",
    title: "Organic Hair Color Alchemy Bar",
    category: "Hair",
    image: "/images/hair_color_alchemy.jpg",
    description: "Handcrafted plant-based color formulations with L'ANZA Healing Color.",
    stylist: "Jessica De Somma"
  },
  {
    id: "lb-8",
    title: "Borboleta Fluffy Volume Lashes",
    category: "Lashes",
    image: "/images/lookbook_4.jpg",
    description: "Lightweight faux mink lash fans customized for eye shape.",
    stylist: "Ashley Izaguirre"
  }
];
