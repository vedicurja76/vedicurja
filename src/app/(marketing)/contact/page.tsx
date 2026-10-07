import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/contact`;

export const metadata: Metadata = {
  title: "Contact — Book a Vastu or Astrology Consultation",
  description:
    "Reach AstroVastu Expert and Acharya KK Nagaich by WhatsApp, phone or email for Vastu, Kundali and numerology consultations across Lucknow, Mumbai, Delhi and worldwide. Bookings are confirmed personally within 12 hours.",
  alternates: { canonical: URL },
  keywords: [
    "vastu expert whatsapp", "kk nagaich contact", "astrologer consultation whatsapp",
    "vastu consultant contact number", "talk to astrologer online",
  ],
  openGraph: { title: "Contact AstroVastu Expert", description: "WhatsApp, call or email to book a Vastu or astrology consultation.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Contact AstroVastu Expert", description: "Book a Vastu or astrology consultation." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${URL}#webpage`,
  url: URL,
  name: "Contact AstroVastu Expert",
  isPartOf: { "@id": `${SEO_BASE}/#website` },
};

export default function ContactIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
