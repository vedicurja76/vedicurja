import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/free-tools`;

export const metadata: Metadata = {
  title: "Free AI Vastu & Astrology Tools — Kundli, Horoscope, Name",
  description:
    "Try AstroVastu Expert's free online tools: AI Astrology & Kundli reading, Daily Horoscope (12 Rashi), Naam / name-suggestion by Nakshatra and Vastu basics — instant, authentic Vedic results with no signup.",
  alternates: { canonical: URL },
  openGraph: { title: "Free AI Vastu & Astrology Tools", description: "Free Kundli, horoscope and name tools with no signup.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Free AI Vastu & Astrology Tools", description: "Instant Vedic tools — no signup." },
};

const tools = [
  ["Free AI Astrology & Kundli Reading", "/free-tools/ai-astrology"],
  ["Daily Horoscope — 12 Rashi", "/free-tools/daily-horoscope"],
  ["Name Suggestion by Nakshatra", "/free-tools/name-suggestion"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: tools.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "WebApplication", name, url: `${SEO_BASE}${path}`, applicationCategory: "LifestyleApplication", operatingSystem: "Web", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
  })),
};

export default function FreeToolsIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
