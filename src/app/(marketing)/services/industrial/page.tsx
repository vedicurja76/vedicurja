import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import IndustrialClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "industrial",
  title: "Industrial & Factory Vastu for Plants, Warehouses and Units",
  description:
    "Vastu for factories, industrial units, warehouses and machinery layout by Acharya KK Nagaich. Gate, store-room, furnace and executive-cabin directions corrected for safety, output and steady cash flow.",
  serviceName: "Industrial Vastu Consultation",
  alternateName: "औद्योगिक वास्तु",
  serviceType: "Vastu Shastra Consultation",
  keywords: ["factory vastu", "industrial vastu consultant", "warehouse vastu", "plant vastu", "manufacturing unit vastu"],
  faqs: [
    { q: "What does industrial Vastu cover?", a: "Main gate, weighbridge, store and raw-material direction, furnace/machine placement, security cabin, executive cabins and drainage — mapped to the 8 directions and Panch Mahabhutas." },
    { q: "Can existing factories be corrected?", a: "Yes. Remedies focus on directional use of zones, colours, yantras and machinery placement, avoiding costly structural demolition." },
    { q: "Is an on-site visit required?", a: "Large units usually need a site survey, but a preliminary online assessment is possible from layout drawings and a video walkthrough." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function IndustrialVastuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <IndustrialClient />
    </>
  );
}
