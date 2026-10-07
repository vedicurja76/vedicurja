import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import LandClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "land",
  title: "Land & Plot Selection Vastu — Check Before You Buy",
  description:
    "Vastu for land and plot selection by Acharya KK Nagaich. Shape, entry, slope, road-formation and Brahmasthan of a site assessed before purchase to avoid dosha, losses and disputes.",
  serviceName: "Land & Plot Vastu Selection",
  alternateName: "भूमि चयन वास्तु",
  serviceType: "Vastu Shastra Consultation",
  keywords: ["land vastu", "plot selection vastu", "bhumi vastu", "vastu for buying land", "plot shape vastu"],
  faqs: [
    { q: "When should I consult Vastu for land?", a: "Before paying token or registering. Acharya ji evaluates plot shape, directions of roads and entry, slope, water bodies and the Brahmasthan so you reject dosha-affected plots early." },
    { q: "Can a Vastu-defective plot be corrected?", a: "Some doshas are remediable through boundary, fencing, planting and construction-zone planning, but severe cuts or Brahmas-than faults are best avoided at selection." },
    { q: "What details do you need?", a: "A site map or khata with dimensions, compass directions of each road, photos of the plot and adjacent streets. Online review is available." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function LandVastuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <LandClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
