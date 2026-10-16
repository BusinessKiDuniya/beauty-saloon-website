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
