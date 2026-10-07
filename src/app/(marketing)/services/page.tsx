import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/services`;

export const metadata: Metadata = {
  title: "Vastu & Astrology Services — Consultation, Remedies & Analysis",
  description:
    "Explore AstroVastu Expert services: residential, commercial and industrial Vastu, land selection, Kundali analysis, numerology and Namakaran, remedies without demolition, rituals and online consultation by Acharya KK Nagaich.",
  alternates: { canonical: URL },
  keywords: [
    "vastu services", "residential vastu consultant", "commercial vastu for office",
    "industrial vastu", "kundali analysis online", "numerology consultation",
    "vastu remedies without demolition", "grah shanti puja", "online vastu consultation",
  ],
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

const faqs = [
  { q: "Which Vastu service do I need?", a: "For a home or flat choose Residential Vastu; for offices and shops choose Commercial; for factories choose Industrial. If you are buying land, take the Land & Plot Selection service first. Kundali, numerology and remedies are separate services." },
  { q: "Can Vastu problems be fixed without demolition?", a: "Yes. Acharya KK Nagaich specialises in non-invasive remedies — yantras, crystals, colour, direction correction and parad — so walls rarely need to be broken. See the Vastu Remedies service for details." },
  { q: "Do you consult online?", a: "Yes. The Online Vastu Consultation (virtual) service works from your floor plan and photographs over video call, for clients across India and 50+ countries." },
  { q: "How are consultations priced?", a: "Pricing depends on the service, property size and city. Select a service and open its booking plan on the Bookings page — plans are listed with clear amounts, and Acharya ji confirms every booking personally within 12 hours." },
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

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
      <ServiceFaq faqs={faqs} />
    </>
  );
}
