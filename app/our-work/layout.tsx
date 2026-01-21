import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Work | Video Production Portfolio | GraphClic DMV",
  description: "View GraphClic's video production portfolio. Corporate videos, documentaries, and B2B video production projects in Washington DC, Maryland & Virginia. Award-winning video production DMV.",
  keywords: [
    "GraphClic portfolio",
    "Video production portfolio Washington DC",
    "Corporate video portfolio DMV",
    "Documentary film portfolio",
    "B2B video production examples",
    "Video production work samples",
    "GraphClic work",
    "Video production case studies"
  ],
  openGraph: {
    title: "Our Work | Video Production Portfolio | GraphClic DMV",
    description: "View GraphClic's video production portfolio. Corporate videos, documentaries, and B2B video production projects.",
    url: "https://graphclic.com/our-work",
    siteName: "GraphClic",
    images: [
      {
        url: "/images/hero/image1.jpg",
        width: 1200,
        height: 630,
        alt: "GraphClic Video Production Portfolio Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Video Production Portfolio | GraphClic DMV",
    description: "View GraphClic's video production portfolio. Corporate videos, documentaries, and B2B video production projects.",
    images: ["/images/hero/image1.jpg"],
  },
  alternates: {
    canonical: "https://graphclic.com/our-work",
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
