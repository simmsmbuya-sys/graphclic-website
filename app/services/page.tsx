import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Video Production Services DC | Corporate & Documentary | GraphClic",
  description: "Professional video production services in Washington DC, Maryland & Virginia. Corporate video production DMV, B2B video production DC, documentary filmmaking services. GraphClic Studios and GraphClic Films.",
  keywords: [
    "Video production services DC",
    "Corporate video production DMV",
    "B2B video production Washington DC",
    "Documentary filmmaking DC",
    "Video production Maryland",
    "Video production Virginia",
    "Corporate video services",
    "Brand storytelling video production",
    "Product video production",
    "Customer testimonial videos",
    "Event video coverage",
    "Social media video content"
  ],
  openGraph: {
    title: "Video Production Services DC | Corporate & Documentary | GraphClic",
    description: "Professional video production services in Washington DC, Maryland & Virginia. Corporate video production DMV, B2B video production DC.",
    url: "https://graphclic.com/services",
    siteName: "GraphClic",
    images: [
      {
        url: "/images/hero/image3.jpg",
        width: 1200,
        height: 630,
        alt: "GraphClic Video Production Services Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Services DC | Corporate & Documentary | GraphClic",
    description: "Professional video production services in Washington DC, Maryland & Virginia.",
    images: ["/images/hero/image3.jpg"],
  },
  alternates: {
    canonical: "https://graphclic.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
