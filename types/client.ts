import { BusinessInfo } from "./business";
import { ServiceCategory } from "./services";
import { PranaPlan } from "./plans";
import { TeamMember } from "./team";
import { ClientReview } from "./reviews";
import { LookbookItem } from "./lookbook";

export interface ClientHeroStat {
  number: string;
  label: string;
}

export interface ClientHero {
  badge: string;
  titleLine1: string;
  titleItalic: string;
  subtitle: string;
  heroImage: string;
  secondaryImage: string;
  stats: ClientHeroStat[];
}

export interface ClientAnnouncement {
  locationBadge: string;
  headline: string;
  promo: string;
  phonePrompt: string;
}

export interface ClientCoreValue {
  title: string;
  description: string;
}

export interface ClientAboutStory {
  badge: string;
  title: string;
  paragraphs: string[];
  founderName: string;
  founderRole: string;
  founderBio: string;
  founderImage: string;
  coreValues: ClientCoreValue[];
}

export interface ClientProfile {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  accentColor: string; // e.g. '#2B4035'
  businessInfo: BusinessInfo;
  hero: ClientHero;
  announcement: ClientAnnouncement;
  aboutStory: ClientAboutStory;
  services: ServiceCategory[];
  plans: PranaPlan[];
  team: TeamMember[];
  reviews: ClientReview[];
  lookbook: LookbookItem[];
}
