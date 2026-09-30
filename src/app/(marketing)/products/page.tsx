import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/products`;

export const metadata: Metadata = {
  title: "Vastu Products — Yantras, Gemstones, Pyramids & Remedies",
  description:
    "Authentic Vastu and astrology products from AstroVastu Expert: consecrated yantras, gemstones, copper and stone pyramids, parad treatments and remedy kits, selected and energised under Acharya KK Nagaich's guidance.",
  alternates: { canonical: URL },
  openGraph: { title: "Vastu Products — Yantras, Gemstones & Remedies", description: "Authentic Vastu and astrology remedy products by AstroVastu Expert.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Vastu Products", description: "Yantras, gemstones, pyramids and remedy kits." },
};

export default function ProductsIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${URL}#collection`, url: URL, name: "Vastu Products", isPartOf: { "@id": `${SEO_BASE}/#website` }, publisher: { "@id": `${SEO_BASE}/#organization` } }) }} />
      <Client />
    </>
  );
}
