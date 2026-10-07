import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import ServiceFaq from "@/features/shared/components/ServiceFaq";
import CrystalColorClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "crystal-color",
  title: "Crystal & Colour Therapy for Vastu Balance",
  description:
    "Advanced Vastu treatment using crystals and colour therapy — the right stones and directional colours placed to correct dosha, raise vibration and support health, wealth and calm, guided by Acharya KK Nagaich.",
  serviceName: "Crystal & Colour Therapy",
  alternateName: "क्रिस्टल व रंग थেরাপি",
  serviceType: "Energy Therapy Service",
  keywords: ["crystal therapy vastu", "colour therapy for home", "healing crystals", "direction colour vastu", "crystal grid"],
  faqs: [
    { q: "How do crystals support Vastu?", a: "Specific stones are chosen for the affected direction and the resident's numbers, then cleansed and placed as grids to balance the space's vibration alongside directional remedies." },
    { q: "Which colours suit which direction?", a: "Colours map to the five elements and directions — for example warm tones for south, light and cool tones for north-east. Acharya ji personalises them to your Kundali." },
    { q: "Is this a substitute for medical care?", a: "No. Crystal and colour therapy is a complementary, energetic practice for the living space, not a replacement for medical treatment." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function CrystalColorTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <CrystalColorClient />
      <ServiceFaq faqs={seo.faqs} />
    </>
  );
}
