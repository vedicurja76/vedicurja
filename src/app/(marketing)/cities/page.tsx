import type { Metadata } from "next";
import { CITIES } from "@/features/cities/data";
import CitiesIndexClient from "@/features/cities/CitiesIndexClient";
import ServiceFaq from "@/features/shared/components/ServiceFaq";

const BASE = "https://www.vedivastuurja.com";

export const metadata: Metadata = {
  title: "Vastu Consultant Near You — City Guide",
  description:
    "AstroVastu Expert KK Nagaich offers authentic Vedic Vastu consultation across Lucknow, Mumbai, Delhi, Noida, Gurugram, Pune, Bengaluru, Hyderabad, Ahmedabad and Kolkata — on-site and virtual, with non-invasive remedies.",
  alternates: { canonical: `${BASE}/cities` },
  keywords: [
    "vastu consultant near me", "vastu consultant in delhi", "vastu expert in mumbai",
    "vastu consultant in lucknow", "vastu bengaluru", "vastu consultant hyderabad",
    "vastu expert pune", "vastu consultant ahmedabad kolkata noida gurugram",
  ],
  openGraph: {
    title: "Vastu Consultant Near You — City Guide | AstroVastu Expert",
    description:
      "Find trusted Vastu consultation in your city — on-site and virtual, remedies without demolition.",
    url: `${BASE}/cities`,
    type: "website",
    siteName: "AstroVastu Expert",
  },
};

const faqs = [
  { q: "Do you offer on-site Vastu consultation in my city?", a: "Yes — Acharya KK Nagaich conducts on-site Vastu surveys in Lucknow, Mumbai, Delhi, Noida, Gurugram, Pune, Bengaluru, Hyderabad, Ahmedabad and Kolkata, and virtual consultations for the rest of India and abroad." },
  { q: "What is the difference between online and on-site Vastu consultation?", a: "In a virtual consultation Acharya ji analyses your floor plan and photographs over video call; on-site visits include a physical direction-by-direction survey of the property with dowsing and energy assessment." },
  { q: "How do I find a trusted vastu consultant near me?", a: "Choose your city above to see local client results, then book directly on the Bookings page or via WhatsApp — every booking is confirmed personally by Acharya ji within 12 hours." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      itemListElement: CITIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: `${c.taglineEn}`,
          serviceType: "Vastu Consultation",
          url: `${BASE}/cities/${c.slug}`,
          areaServed: [{ "@type": "City", name: c.name }, { "@type": "State", name: c.state }],
          provider: { "@id": `${BASE}/#organization` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE}/cities#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function CitiesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CitiesIndexClient />
      <ServiceFaq faqs={faqs} />
    </>
  );
}
