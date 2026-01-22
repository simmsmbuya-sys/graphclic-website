import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://graphclic.com'),
  title: {
    default: "GraphClic | B2B Video Production & Documentary Films DMV | Washington DC",
    template: "%s | GraphClic"
  },
  description: "Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials. GraphClic serves DMV businesses with award-winning video production services.",
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
    "corporate video marketing DMV",
    "brand storytelling video production",
    "SaaS product video production",
    "customer testimonial video services",
    "video production",
    "corporate video",
    "documentary films",
    "B2B video production",
    "Washington DC video production",
    "DMV video production",
    "brand story videos",
    "impact documentaries",
    "product video production",
    "testimonial videos",
    "corporate video marketing",
    "video marketing services"
  ],
  authors: [{ name: "GraphClic" }],
  creator: "GraphClic",
  publisher: "GraphClic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphclic.com",
    siteName: "GraphClic",
    title: "GraphClic | B2B Video Production & Documentary Films DMV | Washington DC",
    description: "Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials. GraphClic serves DMV businesses.",
    images: [
      {
        url: "/images/graphclic-logo.png",
        width: 1200,
        height: 630,
        alt: "GraphClic - B2B Video Production & Documentary Films Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphClic | B2B Video Production & Documentary Films DMV | Washington DC",
    description: "Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials.",
    images: ["/images/graphclic-logo.png"],
    creator: "@graphclic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification
    // Get your code from: https://search.google.com/search-console
    // After adding property, choose HTML tag method and copy the content value
    // Example: google: "ABC123XYZ789..."
    // google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://graphclic.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GraphClic",
              "alternateName": ["Graphclic", "GraphClic Studios", "GraphClic Films"],
              "url": "https://graphclic.com",
              "logo": "https://graphclic.com/images/graphclic-logo.png",
              "description": "GraphClic - Leading B2B video production company in Washington DC, Maryland & Virginia. Corporate videos, documentaries, testimonials.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Washington DC",
                "addressRegion": "DC",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "team@graphclicgroup.com",
                "contactType": "Customer Service",
                "areaServed": ["US-DC", "US-MD", "US-VA"],
                "availableLanguage": "en"
              },
              "sameAs": [],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 38.9072,
                  "longitude": -77.0369
                },
                "geoRadius": {
                  "@type": "Distance",
                  "name": "DMV Area"
                }
              }
            })
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://graphclic.com/#business",
              "name": "GraphClic",
              "alternateName": ["Graphclic", "GraphClic Studios", "GraphClic Films", "GraphClic Video Production", "GraphClic DMV"],
              "image": "https://graphclic.com/images/hero/image1.jpg",
              "description": "B2B video production and documentary filmmaking in Washington DC",
              "url": "https://graphclic.com",
              "telephone": "+1-202-000-0000",
              "email": "team@graphclicgroup.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Washington",
                "addressRegion": "DC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.9072,
                "longitude": -77.0369
              },
              "areaServed": ["Washington DC", "Maryland", "Virginia"],
              "priceRange": "$$$",
              "serviceType": ["B2B Video Production", "Documentary Filmmaking", "Corporate Video"],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Video Production Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "B2B Video Production",
                      "description": "GraphClic corporate video production services for businesses in Washington DC, Maryland, and Virginia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentary Filmmaking",
                      "description": "GraphClic documentary filmmaking services for social impact and cultural storytelling"
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* Breadcrumb Schema for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "GraphClic",
                  "item": "https://graphclic.com"
                }
              ]
            })
          }}
        />
      </head>
      <body className={plusJakartaSans.variable}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
