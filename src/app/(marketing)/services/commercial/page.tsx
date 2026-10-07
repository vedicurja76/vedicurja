import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import CommercialClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "commercial",
  title: "Commercial & Shop Vastu for Offices, Showrooms and Business",
  description:
    "Vastu for shops, offices, showrooms and business premises by Acharya KK Nagaich. Cash-counter, cabin, entrance and workstation placement aligned to wealth directions — remedies without dismantling your interior.",
  serviceName: "Commercial Vastu Consultation",
  alternateName: "व्यावसायिक वास्तु",
  serviceType: "Vastu Shastra Consultation",
  keywords: ["vastu for shop", "office vastu consultant", "commercial vastu", "vastu for showroom", "business vastu online"],
  faqs: [
    { q: "Can Vastu improve my shop or office business?", a: "Correcting the entrance, cash-counter and key cabin directions removes energy blockages. Acharya ji has guided 2 lakh+ clients across 50+ countries on commercial spaces." },
    { q: "Do we have to shut the business for corrections?", a: "No. Most commercial remedies are non-invasive — placement of yantras, crystals, mirrors and colour changes that do not require construction or shutdown." },
    { q: "Is online commercial Vastu possible?", a: "Yes. Send the floor plan and a video walkthrough; you get a directional report and remedies, with Acharya ji confirming the booking within 12 hours." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function CommercialVastuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <CommercialClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
