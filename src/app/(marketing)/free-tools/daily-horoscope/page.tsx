import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/free-tools/daily-horoscope`;

export const metadata: Metadata = {
  title: "Daily Horoscope — 12 Rashi Predictions Today",
  description:
    "Read today's daily horoscope for all 12 Rashis (Mesha to Meena) — love, career, health, finance and lucky colour and number guidance, prepared from authentic Vedic principles by AstroVastu Expert.",
  alternates: { canonical: URL },
  openGraph: { title: "Daily Horoscope — 12 Rashi", description: "Today's Vedic rashi predictions — free daily horoscope.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Daily Horoscope", description: "12 Rashi predictions today." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${URL}#app`,
  name: "Daily Horoscope — 12 Rashi",
  url: URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  provider: { "@id": `${SEO_BASE}/#organization` },
};

export default function DailyHoroscopeIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
