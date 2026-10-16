export interface ClientReview {
  id: string;
  author: string;
  service: string;
  text: string;
  rating: number;
  providerMentioned?: string;
}
