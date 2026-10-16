export interface AddressInfo {
  street: string;
  suite: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface OperatingHourItem {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface SocialsInfo {
  instagram: string;
  facebook: string;
  youtube?: string;
  tiktok?: string;
}

export interface SustainabilityInfo {
  partner: string;
  description: string;
  initiatives: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: AddressInfo;
  bookingUrl: string;
  isBookingDisabled: boolean;
  hours: OperatingHourItem[];
  socials: SocialsInfo;
  sustainability: SustainabilityInfo;
}
