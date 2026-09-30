import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import SpiritualClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "spiritual",
  title: "Spiritual Vastu & Pooja Room Design",
  description:
    "Design of the pooja room, meditation corner and sacred spaces with correct ishaan placement, deity orientation, materials and Vastu principles by Acharya KK Nagaich.",
  serviceName: "Spiritual Vastu & Pooja Room",
  alternateName: "आध्यात्मिक वास्तु",
  serviceType: "Vastu Consultation",
  keywords: ["pooja room vastu", "mandir direction", "meditation room design", "spiritual vastu", "ishaan direction"],
  faqs: [
    { q: "Where should the pooja room be?", a: "Ideally in the east or north, with the ishaan (north-east) corner honoured; the worshipper faces east or north and deities are placed with correct orientation and spacing." },
    { q: "Can a small home have a proper sacred space?", a: "Yes. Acharya ji designs compact meditation and pooja corners that respect direction, material and cleanliness even in apartments." },
    { q: "Do you guide deity selection and placement?", a: "Yes, including which deity, facing direction, height, and the materials and colours that suit the resident's Kundali." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function SpiritualSpacesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <SpiritualClient />
    </>
  );
}
