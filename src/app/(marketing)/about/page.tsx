import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/about`;

export const metadata: Metadata = {
  title: "About — Acharya KK Nagaich, 4th Generation Vastu Guru",
  description:
    "Meet Acharya KK Nagaich — 4th generation Vastu Guru, Tantra Sadhak, MBA and ex-CEO behind AstroVastu Expert. Blending authentic Vedic wisdom with modern science, he has guided 2 lakh+ clients across 50+ countries.",
  alternates: { canonical: URL },
  keywords: [
    "acharya kk nagaich", "kk nagaich vastu guru", "best vastu astrologer in india",
    "4th generation vastu guru", "vastu expert near me", "nagaich vastu consultant",
  ],
  openGraph: { title: "About AstroVastu Expert & Acharya KK Nagaich", description: "4th generation Vastu Guru, MBA & ex-CEO — 2 lakh+ clients across 50+ countries.", url: URL, type: "profile", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "About AstroVastu Expert", description: "The lineage, method and credentials behind AstroVastu Expert." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "AboutPage", "@id": `${URL}#webpage`, url: URL, name: "About AstroVastu Expert", isPartOf: { "@id": `${SEO_BASE}/#website` }, about: { "@id": `${SEO_BASE}/#organization` }, inLanguage: ["en", "hi"] },
    {
      "@type": "Person",
      "@id": `${SEO_BASE}/#acharya`,
      name: "KK Nagaich",
      jobTitle: "Vastu Guru & Vedic Astrologer",
      honorificPrefix: "Acharya",
      description: "4th generation Vastu Guru, Tantra Sadhak, MBA and former corporate CEO.",
      worksFor: { "@id": `${SEO_BASE}/#organization` },
      knowsAbout: ["Vastu Shastra", "Vedic Astrology", "Numerology", "Geopathic Stress", "Yantra & Gemstone Remedies"],
      url: URL,
    },
  ],
};

export default function AboutIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Client />
    </>
  );
}
