import type { Metadata } from "next";
import { CITIES } from "@/features/cities/data";
import CitiesIndexClient from "@/features/cities/CitiesIndexClient";

const BASE = "https://www.vedivastuurja.com";

export const metadata: Metadata = {
  title: "Vastu Consultant Near You — City Guide",
  description:
    "AstroVastu Expert KK Nagaich offers authentic Vedic Vastu consultation across Lucknow, Mumbai, Delhi, Noida, Gurugram, Pune, Bengaluru, Hyderabad, Ahmedabad and Kolkata — on-site and virtual, with non-invasive remedies.",
  alternates: { canonical: `${BASE}/cities` },
  openGraph: {
    title: "Vastu Consultant Near You — City Guide | AstroVastu Expert",
    description:
      "Find trusted Vastu consultation in your city — on-site and virtual, remedies without demolition.",
    url: `${BASE}/cities`,
    type: "website",
    siteName: "AstroVastu Expert",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
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
};

export default function CitiesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CitiesIndexClient />
    </>
  );
}
