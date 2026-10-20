export type ProductCategory =
  | 'Pedigree & Trees'
  | 'Census Extractors'
  | 'Digital Planners (GoodNotes)'
  | 'Cemetery & Vital Records';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  format: string;
  pagesCount: number;
  isPopular?: boolean;
  isFree?: boolean;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  includedTemplates: string[];
  coverImage: string;
  galleryImages: string[];
  badge?: string;
  checkoutUrl?: string;
  gumroadUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  verified: boolean;
  avatar: string;
  experienceYears?: string;
}

export interface GearItem {
  id: string;
  name: string;
  category: string;
  description: string;
  whyArchival: string;
  priceRange: string;
  affiliateUrl: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  iconName?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface LeadFormData {
  email: string;
  firstName?: string;
  researchFocus?: string;
}
