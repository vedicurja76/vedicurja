import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["spiritual-vastu-pooja-room-design"];

const seo: ArticleSeo = {
  slug: "spiritual-vastu-pooja-room-design",
  title: "Spiritual Vastu & Pooja Room Design Guide",
  description:
    "Designing a pooja room or meditation corner with correct Vastu — direction, deity placement, materials, colour and light for a calm, energetic sacred space, with practical guidance by AstroVastu Expert KK Nagaich.",
  headline: "Spiritual Vastu & Pooja Room Design",
  keywords: ["pooja room design", "mandir vastu", "meditation room vastu", "ishaan corner", "spiritual home setup"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function SpiritualPoojaArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}