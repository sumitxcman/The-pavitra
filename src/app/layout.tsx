import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Pavitra – Pure Veg Restaurant | Premium Vegetarian Dining in Rohini',
  description:
    'Experience premium pure vegetarian dining at The Pavitra, Metro Walk Mall, Rohini. Enjoy delicious Indian cuisine, elegant pink hall ambience, family dining and warm hospitality.',
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
        url: '/images/pavitra-entrance.png',
        width: 1200,
        height: 630,
        alt: 'The Pavitra Pure Veg Restaurant Entrance',
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#050507] text-[#FFFFFF] font-sans selection:bg-[#D4AF37] selection:text-[#050507]">
        {children}
      </body>
    </html>
  );
}
