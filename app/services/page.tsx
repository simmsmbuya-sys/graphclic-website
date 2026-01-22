import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Video Production Services DC | B2B Corporate & Documentary | GraphClic",
  description: "Professional B2B video production services in DMV: brand storytelling, product demos, testimonials, documentaries. GraphClic Studios & Films.",
  keywords: [
    "Video production services DC",
    "B2B video production Washington DC",
    "Corporate video production DMV",
    "Documentary filmmaking DC",
    "Brand storytelling video production",
    "Product video production",
    "Customer testimonial videos",
    "Video production Maryland",
    "Video production Virginia",
    "Corporate video services",
    "Event video coverage",
    "Social media video content",
    "GraphClic Studios",
    "GraphClic Films"
  ],
  openGraph: {
    title: "Video Production Services DC | B2B Corporate & Documentary | GraphClic",
    description: "Professional B2B video production services in DMV: brand storytelling, product demos, testimonials, documentaries.",
    url: "https://graphclic.com/services",
    siteName: "GraphClic",
    type: "website",
    images: [
      {
        url: "https://graphclic.com/images/hero/image3.jpg",
        width: 1200,
        height: 630,
        alt: "GraphClic Video Production Services Washington DC",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Services DC | B2B Corporate & Documentary | GraphClic",
    description: "Professional B2B video production services in DMV: brand storytelling, product demos, testimonials.",
    images: ["https://graphclic.com/images/hero/image3.jpg"],
  },
  alternates: {
    canonical: "https://graphclic.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
