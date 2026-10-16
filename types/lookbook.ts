export interface LookbookItem {
  id: string;
  title: string;
  category: "Hair" | "Skincare" | "Nails" | "Lashes" | "Bridal" | "Atmosphere";
  image: string;
  description: string;
  stylist?: string;
}
