import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: "GraphClic | B2B Video Production DC | Corporate Video DMV | Washington DC",
  description: "GraphClic - Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials. GraphClic serves DMV businesses.",
  keywords: [
    "GraphClic",
    "Graphclic",
    "graphclic",
    "GraphClic Studios",
    "GraphClic Films",
    "GraphClic video production",
    "GraphClic Washington DC",
    "GraphClic DMV",
    "B2B video production DC",
    "Corporate video production DMV",
    "Video production Washington DC",
    "Documentary filmmaking DC",
    "Business video Maryland",
    "Corporate storytelling Virginia",
    "Video marketing DMV",
    "Corporate video marketing",
    "Brand storytelling video production",
    "SaaS product video production",
    "Customer testimonial video services"
  ],
  openGraph: {
    title: "GraphClic | B2B Video Production DC | Corporate Video DMV | Washington DC",
    description: "GraphClic - Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials.",
    url: "https://graphclic.com",
    siteName: "GraphClic",
    images: [
      {
        url: "/images/graphclic-logo.png",
        width: 1200,
        height: 630,
        alt: "GraphClic B2B Video Production Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphClic | B2B Video Production DC | Corporate Video DMV | Washington DC",
    description: "GraphClic - Leading B2B video production company in Washington DC, Maryland & Virginia.",
    images: ["/images/graphclic-logo.png"],
  },
  alternates: {
    canonical: "https://graphclic.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
