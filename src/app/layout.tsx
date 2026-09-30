import type { Metadata } from "next";
import { fontSerif, fontSans, fontHindi, fontMono } from "@/styles/fonts";
import ClientProviders from "./ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vedivastuurja.com"),
  title: {
    default: "AstroVastu Expert | Premium Vastu Consultancy in Lucknow, Mumbai, Delhi",
    template: "%s | AstroVastu Expert",
  },
  description:
    "AstroVastu Expert (Vedic Vastu Urja) offers expert Vastu Shastra consultations, remedies without demolition, Kundali & Numerology analysis, and free AI Vastu tools by KK Nagaich — 4th generation Vastu Guru, MBA, Ex-CEO. Serving Lucknow, Mumbai, Delhi & 50+ countries.",
  keywords: [
    "Vastu consultant Lucknow",
    "Vastu Shastra expert",
    "online Vastu consultation",
    "Vastu remedies without demolition",
    "AstroVastu Expert",
    "KK Nagaich",
    "Kundali analysis",
    "Numerology Namakaran",
    "Vedic Vastu Urja",
  ],
  alternates: { canonical: "https://www.vedivastuurja.com/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "hi_IN",
    url: "https://www.vedivastuurja.com/",
    siteName: "AstroVastu Expert",
    title: "AstroVastu Expert | Premium Vastu Consultancy",
    description:
      "Expert Vastu Shastra consultations, remedies without demolition, Kundali & Numerology, and free AI Vastu tools by KK Nagaich — 4th generation Vastu Guru.",
    images: [{ url: "/images/home/acharya-portrait.webp", width: 1200, height: 630, alt: "AstroVastu Expert KK Nagaich" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroVastu Expert | Premium Vastu Consultancy",
    description:
      "Expert Vastu Shastra consultations, remedies without demolition, and free AI Vastu tools by KK Nagaich — 4th generation Vastu Guru.",
    images: ["/images/home/acharya-portrait.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vedivastuurja.com/#organization",
      name: "AstroVastu Expert",
      alternateName: "Vedic Vastu Urja",
      url: "https://www.vedivastuurja.com/",
      logo: { "@type": "ImageObject", url: "https://www.vedivastuurja.com/logo/logo.webp" },
      image: "https://www.vedivastuurja.com/images/home/acharya-portrait.webp",
      description:
        "Premium Vastu Shastra consultancy by KK Nagaich — 4th generation Vastu Guru, MBA, Ex-CEO. Residential, commercial & industrial Vastu, remedies without demolition, Kundali, Numerology and free AI Vastu tools.",
      email: "Vedicurja2020@gmail.com",
      telephone: "+91-6393570832",
      founder: {
        "@type": "Person",
        name: "KK Nagaich",
        jobTitle: "Vastu Guru & Numerologist",
        description: "4th Generation Vastu Guru, MBA, Ex-CEO",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rishita, Ansal Api, Celebrity Greens, P1101, Golf City, Sector B",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226030",
        addressCountry: "IN",
      },
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+91-6393570832", contactType: "customer service", availableLanguage: ["Hindi", "English"] },
        { "@type": "ContactPoint", telephone: "+91-9721082345", contactType: "sales", availableLanguage: ["Hindi", "English"] },
      ],
      areaServed: [
        { "@type": "City", name: "Lucknow" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Delhi" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: [
        "https://www.facebook.com/krishna.nagaich.7/",
        "https://www.instagram.com/vedicurja",
        "https://www.youtube.com/@vedicurja1589",
      ],
      knowsLanguage: ["hi", "en"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.vedivastuurja.com/#website",
      url: "https://www.vedivastuurja.com/",
      name: "AstroVastu Expert",
      description: "Premium Vastu Shastra consultancy, remedies and free AI Vastu tools.",
      publisher: { "@id": "https://www.vedivastuurja.com/#organization" },
      inLanguage: ["en", "hi"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${fontSerif.variable} ${fontSans.variable} ${fontHindi.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/home/acharya-portrait.webp" fetchPriority="high" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
