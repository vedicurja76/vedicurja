import type { Metadata } from "next";
import InsightsPage from "@/features/blog/components/InsightsPage";
import { SEO_BASE } from "@/lib/seo/servicePage";

const URL = `${SEO_BASE}/insights`;

export const metadata: Metadata = {
  title: "Vastu & Astrology Insights — Guides, Articles & Knowledge",
  description:
    "Free Vastu Shastra and astrology knowledge: the science of Vastu, Panch Mahabhutas, main entrance, kitchen and bedroom Vastu, remedies without demolition, numerology and Nakshatra name guides by AstroVastu Expert KK Nagaich.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Vastu & Astrology Insights",
    description: "Practical Vedic Vastu and astrology guides written by Acharya KK Nagaich.",
    url: URL,
    type: "website",
    siteName: "AstroVastu Expert",
  },
  twitter: { card: "summary_large_image", title: "Vastu & Astrology Insights", description: "Free Vedic Vastu and astrology guides." },
};

const articles = [
  ["The Science of Vastu Shastra", "science-of-vastu"],
  ["Understanding the Panch Mahabhutas", "panch-mahabhutas-five-elements"],
  ["Vastu for the Main Entrance Door", "vastu-main-entrance-door"],
  ["Kitchen Vastu for Health and Wealth", "kitchen-vastu-health-wealth"],
  ["Bedroom Vastu for Marital Harmony", "bedroom-vastu-marital-harmony"],
  ["Commercial Vastu for Office Layout", "commercial-vastu-office-layout"],
  ["Vastu Remedies Without Demolition", "remedies-without-demolition"],
  ["Geopathic Stress: The Hidden Enemy", "geopathic-stress-hidden-enemy"],
  ["Spiritual Vastu & Pooja Room Design", "spiritual-vastu-pooja-room-design"],
  ["Peepal Tree on House Walls", "peepal-tree-remedy"],
  ["Numerology for Beginners", "numerology-beginners"],
  ["Nakshatra and Name Suggestion Guide", "nakshatra-name-suggestions-guide"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#collection`,
      url: URL,
      name: "Vastu & Astrology Insights",
      isPartOf: { "@id": `${SEO_BASE}/#website` },
      publisher: { "@id": `${SEO_BASE}/#organization` },
    },
    {
      "@type": "ItemList",
      itemListElement: articles.map(([name, slug], i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${URL}/${slug}`,
        name,
      })),
    },
  ],
};

export default function InsightsIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InsightsPage />
    </>
  );
}
