import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: "GraphClic | B2B Video Production DC | Corporate Video DMV | Documentary Films",
  description: "Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, customer testimonials. Emmy-award winning team serving DMV businesses.",
  keywords: [
    "B2B video production DC",
    "corporate video DMV",
    "video production Washington DC",
    "documentary filmmaking DC",
    "business video Maryland Virginia",
    "GraphClic",
    "GraphClic Studios",
    "GraphClic Films",
    "Emmy award winning video production",
    "corporate video marketing DMV",
    "brand storytelling video production",
    "SaaS product video production",
    "customer testimonial video services",
    "documentary films Washington DC"
  ],
  openGraph: {
    title: "GraphClic | B2B Video Production & Documentary Films DMV",
    description: "Emmy-award winning B2B video production in Washington DC, Maryland & Virginia",
    url: "https://graphclic.com",
    siteName: "GraphClic",
    type: "website",
    images: [
      {
        url: "https://graphclic.com/images/hero/image1.jpg",
        width: 1200,
        height: 630,
        alt: "GraphClic B2B Video Production & Documentary Films Washington DC",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphClic | B2B Video Production DC",
    description: "Emmy-award winning video production serving DMV businesses",
    images: ["https://graphclic.com/images/hero/image1.jpg"],
  },
  alternates: {
    canonical: "https://graphclic.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
