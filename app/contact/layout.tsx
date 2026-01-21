import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact GraphClic | Video Production Washington DC | DMV",
  description: "Contact GraphClic for professional video production services in Washington DC, Maryland & Virginia. B2B video production DC, corporate video marketing DMV. Get in touch today.",
  keywords: [
    "Contact GraphClic",
    "Video production contact Washington DC",
    "Video production contact DMV",
    "B2B video production contact",
    "Corporate video production contact",
    "Documentary film production contact",
    "GraphClic contact",
    "Video production quote"
  ],
  openGraph: {
    title: "Contact GraphClic | Video Production Washington DC | DMV",
    description: "Contact GraphClic for professional video production services in Washington DC, Maryland & Virginia.",
    url: "https://graphclic.com/contact",
    siteName: "GraphClic",
    images: [
      {
        url: "/images/graphclic-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact GraphClic Video Production Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GraphClic | Video Production Washington DC | DMV",
    description: "Contact GraphClic for professional video production services in Washington DC, Maryland & Virginia.",
    images: ["/images/graphclic-logo.png"],
  },
  alternates: {
    canonical: "https://graphclic.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
