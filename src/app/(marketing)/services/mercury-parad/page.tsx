import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import MercuryParadClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "mercury-parad",
  title: "Mercury (Parad) Therapy & Yantra Treatments",
  description:
    "Advanced Parad (purified mercury) therapy and metallic yantra treatments by Acharya KK Nagaich for deep-rooted dosha, protection and material and career obstacles, performed with traditional safeguards.",
  serviceName: "Mercury (Parad) Therapy",
  alternateName: "पारद थेरेपी",
  serviceType: "Energy Therapy Service",
  keywords: ["parad therapy", "mercury therapy vastu", "parad yantra", "ras shastra remedy", "metal yantra"],
  faqs: [
    { q: "What is Parad therapy?", a: "Parad is purified, stabilized mercury used in Rasa Shastra. In Vastu practice it is consecrated and installed as metallic yantras or treatments to address dosha and obstacles." },
    { q: "Is it safe?", a: "Only properly prepared and sealed Parad yantras installed and handled by an experienced practitioner are used. Never attempt to prepare or handle raw mercury yourself." },
    { q: "What is it used for?", a: "Serious, long-standing problems where standard remedies fall short — material blockage, protection, and recurring difficulties — as an advanced treatment after assessment." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function MercuryParadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <MercuryParadClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
