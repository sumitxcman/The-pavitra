export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  isVegetarian: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
}

export type MenuCategory =
  | 'Starters'
  | 'Paneer Specialities'
  | 'North Indian'
  | 'Chinese'
  | 'South Indian'
  | 'Pizza'
  | 'Breads'
  | 'Rice'
  | 'Dal & Curries'
  | 'Thali'
  | 'Desserts'
  | 'Beverages';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Ambience' | 'Dining' | 'Events' | 'Special Occasions';
  imageUrl: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  tagline: string;
  comment: string;
  verified: boolean;
  highlights: string[];
}

export interface ReservationFormData {
  fullName: string;
  mobile: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  specialRequest: string;
}
