import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/client-stories`;

export const metadata: Metadata = {
  title: "Client Stories & Vastu Results",
  description:
    "Real experiences from AstroVastu Expert clients — homes, businesses and lives transformed through Vastu corrections, remedies without demolition, Kundali and numerology guidance by Acharya KK Nagaich.",
  alternates: { canonical: URL },
  openGraph: { title: "Client Stories & Results", description: "Real experiences from AstroVastu Expert Vastu and astrology clients.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Client Stories", description: "Vastu results from real clients." },
};

export default function ClientStoriesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: "Client Stories", isPartOf: { "@id": `${SEO_BASE}/#website` } }) }} />
      <Client />
    </>
  );
}
