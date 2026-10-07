import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import RitualsClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "rituals",
  title: "Sacred Puja, Havan & Vastu Shanti Rituals",
  description:
    "Vastu Shanti, Graha Shanti, Navagraha Havan, Greh Pravesh and Ganesh puja performed by Acharya KK Nagaich with proper Vedic vidhi to neutralise dosha and bless a new home or business.",
  serviceName: "Vastu Rituals & Puja",
  alternateName: "वास्तु पूजा व हवन",
  serviceType: "Vedic Ritual Service",
  keywords: ["vastu shanti puja", "greh pravesh muhurat", "havan for home", "navagraha shanti", "griha pravesh vidhi"],
  faqs: [
    { q: "Which rituals do you perform?", a: "Vastu Shanti, Graha and Navagraha Shanti, Greh Pravesh (house warming), Bhoomi Pujan, Ganesh Puja and sankalp-based havans, following Vedic vidhi." },
    { q: "Do you choose the muhurat?", a: "Yes. Dates and muhurat are fixed from the Panchang and the residents' Kundali so the ritual aligns with favourable planetary periods." },
    { q: "Can rituals be done remotely?", a: "Sankalp-based havans can be performed with your gotra and details, and guidance for home rituals is provided over video call." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function RitualsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <RitualsClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
