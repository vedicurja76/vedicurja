import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import VirtualConsultClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "virtual-consult",
  title: "Online Vastu Consultation — Video Call with Acharya Ji",
  description:
    "Book a live online Vastu or Astrology consultation by video call with 4th-generation Vastu Guru Acharya KK Nagaich. Share your plan or questions and get a personalised analysis and remedies — from anywhere in India or abroad.",
  serviceName: "Online Vastu Consultation",
  alternateName: "वर्चुअल वास्तु परामर्श",
  serviceType: "Vastu Consultation",
  keywords: ["online vastu consultation", "vastu video call", "astrologer online consultation", "virtual vastu expert", "consultation from abroad"],
  faqs: [
    { q: "How does the online consultation work?", a: "Choose a service and plan, pay securely or continue on WhatsApp, then join a video call. Share your floor plan, photos or birth details, and Acharya ji reviews them live." },
    { q: "Is online Vastu as effective as an on-site visit?", a: "For plan review, remedies and Q&A it is highly effective; complex site or land doshas may still need a physical survey, which can be arranged separately." },
    { q: "Can NRI and clients abroad book?", a: "Yes. Acharya ji serves clients across 50+ countries; sessions are scheduled across time zones and confirmed within 12 hours." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function VirtualConsultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <VirtualConsultClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
