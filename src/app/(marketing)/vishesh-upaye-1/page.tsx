import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/vishesh-upaye-1`;

export const metadata: Metadata = {
  title: "Vishesh Upaye — Special Vastu & Astrology Remedies",
  description:
    "Special, lesser-known Vastu and astrology remedies (Vishesh Upaye) by Acharya KK Nagaich — practical upay for dosha, protection, prosperity and harmony using yantras, herbs, metals and directional corrections.",
  alternates: { canonical: URL },
  openGraph: { title: "Vishesh Upaye — Special Remedies", description: "Practical special Vastu and astrology remedies by AstroVastu Expert.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Vishesh Upaye", description: "Special Vastu and astrology remedies." },
};

export default function VisheshUpayeIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: "Vishesh Upaye — Special Remedies", isPartOf: { "@id": `${SEO_BASE}/#website` } }) }} />
      <Client />
    </>
  );
}
