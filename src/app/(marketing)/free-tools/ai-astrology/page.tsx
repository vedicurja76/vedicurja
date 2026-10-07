import type { Metadata } from "next";
import AstroReadClient from "@/features/astrology/AstroReadClient";
import ServiceFaq from "@/features/shared/components/ServiceFaq";

const BASE = "https://www.vedivastuurja.com";
const URL = `${BASE}/free-tools/ai-astrology`;

export const metadata: Metadata = {
  title: "Free AI Astrology & Kundli Reading — Vedic Rashi + Numerology",
  description:
    "Get an instant, 100% free Vedic astrology reading: Surya-rashi (Sun sign), Mulank & Bhagyank numerology, lucky numbers, gemstone, colours, remedies and a personalised AI summary by AstroVastu Expert KK Nagaich. No login, no payment.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Free AI Astrology & Kundli Reading — Vedic Rashi + Numerology",
    description:
      "Instant free Vedic Surya-rashi, Mulank & Bhagyank numerology, lucky numbers, gemstone, remedies and an AI reading — by AstroVastu Expert KK Nagaich.",
    url: URL,
    type: "website",
    siteName: "AstroVastu Expert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Astrology & Kundli Reading",
    description: "Instant Vedic rashi + numerology reading. Free, no login.",
  },
};

const faqs = [
  { q: "Is this AI astrology reading really free?", a: "Yes — the Surya-rashi, Mulank, Bhagyank numerology, lucky numbers, gemstone and remedies are computed instantly at no cost, with no login or payment. Only the detailed 100+ page Janma Kundli (exact Moon sign, Nakshatra, Dasha) is a paid service by Acharya KK Nagaich." },
  { q: "What is the difference between Surya-rashi and Janma-rashi?", a: "Surya-rashi is your Sun sign based on the sidereal date of birth and can be computed from date alone. Janma-rashi is your Moon sign, which needs the exact birth time, place and the Moon's planetary position — that is prepared in Acharya's full Kundli report." },
  { q: "What are Mulank and Bhagyank in numerology?", a: "Mulank (Psychic number) is the single-digit root of your birth date and shows your innate nature. Bhagyank (Destiny number) is the root of the full date and indicates your life path and fortune. Both are core to Indian and Chaldean numerology." },
  { q: "Which gemstone and lucky numbers suit me?", a: "The tool recommends a gemstone, colour and lucky numbers from your Vedic Surya-rashi lord and your Mulank/Bhagyank planets. Wear or donate only after confirming with Acharya, especially before buying expensive stones like Neelam or Heera." },
  { q: "Can I use this for kundli matching or career decisions?", a: "Use it as guidance and self-reflection. For marriage Kundli-matching (Guna Milan), career or business decisions, book a personalised consultation with Acharya KK Nagaich for an accurate Dasha-aware reading." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${URL}#app`,
      name: "Free AI Astrology & Kundli Reading — AstroVastu Expert",
      url: URL,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      isAccessibleForFree: true,
      featureList: [
        "Vedic Surya-rashi (Sun sign)",
        "Mulank & Bhagyank numerology",
        "Lucky numbers, gemstone & colours",
        "Vedic remedies & mantras",
        "Personalised AI + Vedic reading",
        "Career, health & relationship guidance",
      ],
      provider: { "@id": `${BASE}/#organization` },
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

export default function AiAstrologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AstroReadClient />
      <ServiceFaq faqs={faqs} />
    </>
  );
}
