import { ReviewItem } from '@/types';

export const REVIEWS_SUMMARY = {
  rating: 4.3,
  maxRating: 5.0,
  totalReviews: 434,
  location: 'Metro Walk Mall, Rohini, Delhi',
  googleMapsUrl: 'https://maps.google.com/?q=The+Pavitra+Pure+Veg+Restaurant+Metro+Walk+Mall+Rohini+Delhi',
};

export const REVIEW_THEMES = [
  'Great Pure Veg Food',
  'Prompt & Polite Service',
  'Well-Mannered Staff',
  'Elegant Ambience',
  'Family-Friendly Environment',
  'Extensive Vegetarian Variety',
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified Diner',
    rating: 5,
    date: 'Recent Google Review',
    tagline: 'Outstanding Vegetarian Food & Great Ambience',
    comment: 'The Pavitra at Metro Walk Mall delivers exceptional pure vegetarian food with incredible flavours. The Dal Makhani and Paneer Tikka were top notch. The restaurant has a truly premium feel.',
    verified: true,
    highlights: ['Great food', 'Good ambience', 'Premium feel'],
  },
  {
    id: 'rev-2',
    author: 'Local Guide',
    rating: 5,
    date: 'Recent Google Review',
    tagline: 'Perfect Family Dining Place in Rohini',
    comment: 'Wonderful family-friendly atmosphere! The staff is extremely well-mannered, polite, and attentive. Loved the Kurkure Paneer Momos and Corn Cheese Pizza.',
    verified: true,
    highlights: ['Well-mannered staff', 'Family-friendly atmosphere', 'Good service'],
  },
  {
    id: 'rev-3',
    author: 'Regular Guest',
    rating: 4,
    date: 'Recent Google Review',
    tagline: 'Prompt Service and Hygienic Vegetarian Variety',
    comment: 'Impressed by the huge menu variety ranging from North Indian curries to Chinese starters and South Indian dosas. Clean, comfortable, and quick service.',
    verified: true,
    highlights: ['Vegetarian food variety', 'Good service', 'Great food'],
  },
  {
    id: 'rev-4',
    author: 'Food Enthusiast',
    rating: 5,
    date: 'Recent Google Review',
    tagline: 'Refined Pure Veg Hospitality at Metro Walk',
    comment: 'A magnificent dining spot inside Metro Walk Mall. Rich flavours, beautiful interior ambience, and courteous staff made our celebration very special.',
    verified: true,
    highlights: ['Premium restaurant feel', 'Good ambience', 'Well-mannered staff'],
  },
];
