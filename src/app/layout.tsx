import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Pavitra – Pure Veg Restaurant | Premium Vegetarian Dining in Rohini',
  description:
    'Experience premium pure vegetarian dining at The Pavitra, Metro Walk Mall, Rohini. Enjoy delicious Indian cuisine, elegant ambience, family dining and warm hospitality.',
  keywords: [
    'The Pavitra',
    'Pure Veg Restaurant Rohini',
    'Metro Walk Mall Restaurant',
    'Vegetarian Dining Delhi',
    'Best Veg Restaurant Sector 10 Rohini',
    'Family Dining Rohini',
    'Paneer Tikka Rohini',
    'Dal Makhani Metro Walk',
  ],
  authors: [{ name: 'The Pavitra Restaurant' }],
  openGraph: {
    title: 'The Pavitra – Pure Veg Restaurant | Rohini, Delhi',
    description:
      'Experience premium pure vegetarian dining at The Pavitra, Metro Walk Mall, Rohini. Delicious Indian cuisine & elegant ambience.',
    url: 'https://thepavitra.com',
    siteName: 'The Pavitra',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'The Pavitra Pure Veg Restaurant Ambience',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'LocalBusiness', 'VegetarianRestaurant'],
    name: 'The Pavitra – Pure Veg Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://thepavitra.com',
    url: 'https://thepavitra.com',
    telephone: '+918700087329',
    priceRange: '₹400–₹600',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Metro Walk Mall, GA-14, Swarn Jayanti Park, Sector 10',
      addressLocality: 'Rohini',
      addressRegion: 'Delhi',
      postalCode: '110085',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.7188,
      longitude: 77.1124,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '23:00',
    },
    servesCuisine: ['Pure Vegetarian', 'North Indian', 'South Indian', 'Chinese'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      reviewCount: '434',
    },
    hasMenu: 'https://thepavitra.com/#menu',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-[#0B241B] text-[#F8F3E7] font-sans selection:bg-[#D4AF37] selection:text-[#0B241B]">
        {children}
      </body>
    </html>
  );
}
