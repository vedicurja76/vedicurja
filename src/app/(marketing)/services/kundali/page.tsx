import type { Metadata } from "next";
import { serviceMetadata, serviceJsonLd, type ServicePageSeo } from "@/lib/seo/servicePage";
import KundaliClient from "./ClientPage";

const seo: ServicePageSeo = {
  slug: "kundali",
  title: "Kundali Analysis — Vedic Birth Chart & Dasha Reading",
  description:
    "Full Vedic Kundali analysis by Acharya KK Nagaich: Lagna, Navamsa, planetary positions, Vimshottari Dasha, Yogas and Doshas with remedies. 20+ page report covering career, marriage, health and finance.",
  serviceName: "Kundali Analysis",
  alternateName: "कुंडली विश्लेषण",
  serviceType: "Vedic Astrology Consultation",
  keywords: ["kundali analysis", "vedic birth chart", "dasha reading", "kundali online", "astrologer consultation"],
  faqs: [
    { q: "What is included in the Kundali report?", a: "A 20+ page report with Lagna, Navamsa chart, Vimshottari Dasha, planetary Yogas, Doshas such as Mangal and Pitru, plus remedies and a life-period overview for career, marriage, health and finance." },
    { q: "What birth details are needed?", a: "Exact date, time and place of birth. For a Janma (Moon) Kundali the birth time is essential; date-only tools give only the Surya-rashi." },
    { q: "Can I get the Kundali online?", a: "Yes. Share your birth details over WhatsApp or the booking page; you receive the written report and can book a discussion with Acharya ji." },
  ],
};

export const metadata: Metadata = serviceMetadata(seo);

export default function KundaliAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo)) }} />
      <KundaliClient />
    </>
  );
}
