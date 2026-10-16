export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  levels?: string; // Level 1 | 2 | 3 | 4 pricing if applicable
  note?: string;
}

export interface ServiceGroup {
  name: string;
  description?: string;
  items: ServiceItem[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
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
  serviceGroups: ServiceGroup[];
  productsUsed: string[];
  faqs: ServiceFaq[];
}
