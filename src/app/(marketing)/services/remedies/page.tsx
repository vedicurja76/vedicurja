import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import RemediesClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "remedies",
  title: "Vastu Remedies Without Demolition — Yantra, Gemstone & Upay",
  description:
    "Practical Vastu remedies that need no breaking or reconstruction — yantras, gemstones, mirrors, colours, plants and directional corrections by Acharya KK Nagaich, including Pitru-dosh and Naga-dosh upay.",
  serviceName: "Vastu Remedies",
  alternateName: "वास्तु उपाय",
  serviceType: "Vastu Consultation",
  keywords: ["vastu remedies without demolition", "vastu upay", "yantra for home", "gemstone vastu", "pitru dosh remedy"],
  faqs: [
    { q: "Are Vastu remedies possible without breaking walls?", a: "Yes. The majority of corrections use yantra placement, gemstones, mirrors, colour therapy, plants and re-orientation of objects, so demolition is rarely needed." },
    { q: "Do you recommend gemstones or yantras to buy?", a: "Recommendations are directional and personal. Confirm with Acharya ji before buying expensive stones or consecrated yantras so you avoid overpriced or unsuitable items." },
    { q: "How quickly do remedies show effect?", a: "Effects vary with the dosha and the resident's own karma and Kundali; simple placement remedies often settle the space within days, while deeper doshas take a longer, guided period." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function RemediesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <RemediesClient />
    </>
  );
}
