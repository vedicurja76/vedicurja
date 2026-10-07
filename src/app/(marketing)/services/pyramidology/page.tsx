import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import PyramidologyClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "pyramidology",
  title: "Pyramidology — Pyramid Energy & Vastu Corrections",
  description:
    "Use of copper and stone pyramids to harmonise a space's energy field by Acharya KK Nagaich — placement by direction and purpose for calm, focus and abundance, without construction or demolition.",
  serviceName: "Pyramidology",
  alternateName: "पिरामिडोलॉजी",
  serviceType: "Energy Therapy Service",
  keywords: ["pyramid therapy", "copper pyramid vastu", "pyramid energy", "vashikar pyramid", "room energy balancing"],
  faqs: [
    { q: "How do pyramids help a home?", a: "A correctly oriented pyramid is believed to organise the ambient energy of a zone. Acharya ji places copper or stone pyramids by direction and intent to support calm and focus." },
    { q: "Where are they placed?", a: "According to the affected direction and purpose — often the north-east or the specific dosha zone — after a Vastu and numerology assessment of the resident." },
    { q: "Is this a quick fix?", a: "Pyramids are a supportive, non-invasive remedy used alongside the main Vastu corrections, not a standalone instant solution." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function PyramidologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <PyramidologyClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
