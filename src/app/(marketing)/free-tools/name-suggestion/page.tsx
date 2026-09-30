import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/free-tools/name-suggestion`;

export const metadata: Metadata = {
  title: "Name Suggestion by Nakshatra — Free Vedic Naam Tool",
  description:
    "Get auspicious name suggestions from your Nakshatra and birth star — Vedic and Chaldean numerology-based Naam Suggestion for babies, people and businesses, free by AstroVastu Expert.",
  alternates: { canonical: URL },
  openGraph: { title: "Name Suggestion by Nakshatra", description: "Free Vedic auspicious-name tool by birth star.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Name Suggestion Tool", description: "Auspicious syllables from 27 Nakshatras." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${URL}#app`,
  name: "Name Suggestion by Nakshatra",
  url: URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  provider: { "@id": `${SEO_BASE}/#organization` },
};

export default function NameSuggestionIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
