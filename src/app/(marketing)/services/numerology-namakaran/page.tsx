import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import NumerologyClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "numerology-namakaran",
  title: "Numerology & Namakaran — Name Correction and Lucky Numbers",
  description:
    "Chaldean and Vedic numerology with name correction (Namakaran) by Acharya KK Nagaich. Mulank, Bhagyank, name number, lucky digits and a business or baby name aligned to your life path.",
  serviceName: "Numerology & Namakaran",
  alternateName: "अंक ज्योतिष व नामकरण",
  serviceType: "Numerology Consultation",
  keywords: ["numerology consultant", "name correction numerology", "namakaran", "lucky number", "business name numerology", "baby name numerology"],
  faqs: [
    { q: "How does name correction work?", a: "Each letter carries a Chaldean number. Acharya ji sums the name, compares it with your Mulank and Bhagyank, and suggests spelling or a new name whose compound number supports your goals." },
    { q: "Is Namakaran different from a naming ceremony?", a: "Namakaran here is the numerological selection of an auspicious name or spelling for a child, adult or business, based on birth numbers and desired life-path vibrations." },
    { q: "Can numerology be done online?", a: "Yes. Share your full date of birth and current name; you receive the number analysis and remedies over WhatsApp or a video call." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function NumerologyNamakaranPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <NumerologyClient />
    </>
  );
}
