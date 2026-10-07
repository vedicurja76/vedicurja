import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import GeopathicClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "geopathic",
  title: "Geopathic Stress Survey & Healing",
  description:
    "Detection and healing of geopathic stress — underground water streams, fault lines, root networks and earth energies that disturb sleep, health and prosperity, assessed by Acharya KK Nagaich.",
  serviceName: "Geopathic Stress Survey",
  alternateName: "भू-रोग तनाव सर्वेक्षण",
  serviceType: "Vastu Survey Service",
  keywords: ["geopathic stress", "geopathic stress healing", "dowsing for home", "earth energy survey", "geopathic stress removal"],
  faqs: [
    { q: "What is geopathic stress?", a: "Natural underground water courses, fault lines and root networks that emit disturbing earth energies. Prolonged exposure at sleep or work spots is linked in Vastu to fatigue, illness and obstacles." },
    { q: "How is it detected?", a: "Through a combination of dowsing, pendulum survey, observation of the site and the residents' health and sleep patterns, mapped to your floor plan." },
    { q: "How is it neutralised?", a: "With directional corrections, grid or shielding placement, yantras and suitable plants or stones so the disturbed zone is balanced without reconstruction." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function GeopathicStressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <GeopathicClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
