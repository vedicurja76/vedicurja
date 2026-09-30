import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/services`;

export const metadata: Metadata = {
  title: "Vastu & Astrology Services — Consultation, Remedies & Analysis",
  description:
    "Explore AstroVastu Expert services: residential, commercial and industrial Vastu, land selection, Kundali analysis, numerology and Namakaran, remedies without demolition, rituals and online consultation by Acharya KK Nagaich.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Vastu & Astrology Services",
    description:
      "Residential, commercial and industrial Vastu, Kundali, numerology, remedies and online consultation by AstroVastu Expert Acharya KK Nagaich.",
    url: URL,
    type: "website",
    siteName: "AstroVastu Expert",
  },
  twitter: { card: "summary_large_image", title: "Vastu & Astrology Services", description: "Book authentic Vedic Vastu and astrology consultations." },
};

const services = [
  ["Residential Vastu", "/services/residential"],
  ["Commercial Vastu", "/services/commercial"],
  ["Industrial Vastu", "/services/industrial"],
  ["Land & Plot Selection", "/services/land"],
  ["Kundali Analysis", "/services/kundali"],
  ["Numerology & Namakaran", "/services/numerology-namakaran"],
  ["Vastu Remedies", "/services/remedies"],
  ["Sacred Rituals & Puja", "/services/rituals"],
  ["Spiritual Vastu & Pooja Room", "/services/spiritual"],
  ["Geopathic Stress Survey", "/services/geopathic"],
  ["Crystal & Colour Therapy", "/services/crystal-color"],
  ["Mercury (Parad) Therapy", "/services/mercury-parad"],
  ["Pyramidology", "/services/pyramidology"],
  ["Online Vastu Consultation", "/services/virtual-consult"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#collection`,
      url: URL,
      name: "Vastu & Astrology Services",
      isPartOf: { "@id": `${SEO_BASE}/#website` },
      publisher: { "@id": `${SEO_BASE}/#organization` },
    },
    {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: services.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name,
          url: `${SEO_BASE}${path}`,
          provider: { "@id": `${SEO_BASE}/#organization` },
          areaServed: "India",
        },
      })),
    },
  ],
};

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
