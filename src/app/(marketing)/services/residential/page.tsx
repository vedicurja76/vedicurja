import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import ResidentialClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "residential",
  title: "Residential Vastu Consultation for Home, Flat & Villa",
  description:
    "Vastu for homes, flats and villas by 4th-generation Vastu Guru Acharya KK Nagaich. Room-by-room analysis of master bedroom, kitchen, puja room and entrance with remedies that need no demolition. Online and on-site across India.",
  serviceName: "Residential Vastu Consultation",
  alternateName: "आवासीय वास्तु",
  serviceType: "Vastu Shastra Consultation",
  keywords: [
    "vastu for home", "residential vastu consultant", "vastu for flat",
    "house vastu online consultation", "vastu for master bedroom", "vastu consultant lucknow",
  ],
  faqs: [
    { q: "Can residential Vastu be corrected without demolition?", a: "Yes. Acharya KK Nagaich specialises in remedies without breaking walls — using directional corrections, gemstones, yantras, colours and placement of objects, so you rarely need demolition." },
    { q: "Do you offer online home Vastu consultation?", a: "Yes. Share your floor plan or a video walkthrough over WhatsApp or a video call; Acharya ji reviews it and confirms every booking personally within 12 hours." },
    { q: "Which areas of the home are checked?", a: "The main entrance, master bedroom, kitchen, puja room, bathroom placement, staircase and storage directions are analysed against the Panch Mahabhutas and 8 directions." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function ResidentialVastuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <ResidentialClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
