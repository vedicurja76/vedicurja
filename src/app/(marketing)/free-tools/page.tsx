import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/free-tools`;

export const metadata: Metadata = {
  title: "Free AI Vastu & Astrology Tools — Kundli, Horoscope, Name",
  description:
    "Try AstroVastu Expert's free online tools: AI Astrology & Kundli reading, Daily Horoscope (12 Rashi), Naam / name-suggestion by Nakshatra and Vastu basics — instant, authentic Vedic results with no signup.",
  alternates: { canonical: URL },
  keywords: [
    "free kundli online", "daily rashi bhavishya", "aj ka rashifal", "naam sujhav",
    "baby name according to nakshatra", "free astrology tools", "kundli online free",
    "ai astrology reading", "vastu tools online free",
  ],
  openGraph: { title: "Free AI Vastu & Astrology Tools", description: "Free Kundli, horoscope and name tools with no signup.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Free AI Vastu & Astrology Tools", description: "Instant Vedic tools — no signup." },
};

const tools = [
  ["Free AI Astrology & Kundli Reading", "/free-tools/ai-astrology"],
  ["Daily Horoscope — 12 Rashi", "/free-tools/daily-horoscope"],
  ["Name Suggestion by Nakshatra", "/free-tools/name-suggestion"],
];

const faqs = [
  { q: "Are these astrology and Vastu tools really free?", a: "Yes — the AI Kundli reading, daily rashi bhavishya and naam sujhav tools are 100% free, with no signup or payment needed. Results are generated instantly in your browser." },
  { q: "How accurate is the free daily horoscope?", a: "The daily horoscope is computed from classical Vedic rashi rules for all 12 rashis (Mesh to Meen) and updates every day. For personal predictions based on your full kundli, book a consultation with Acharya KK Nagaich." },
  { q: "How do I choose a baby name by nakshatra?", a: "Enter the baby's nakshatra (birth star) and pada in the Name Suggestion tool; it shows auspicious starting syllables and boy/girl names with meanings, following traditional naamakaran rules." },
  { q: "Do I need to install anything to use the tools?", a: "No. Every tool runs online in your browser on mobile or desktop, in Hindi or English, and works on any device without downloads." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      itemListElement: tools.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "WebApplication", name, url: `${SEO_BASE}${path}`, applicationCategory: "LifestyleApplication", operatingSystem: "Web", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, provider: { "@id": `${SEO_BASE}/#organization` } },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function FreeToolsIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
      <ServiceFaq faqs={faqs} />
    </>
  );
}
