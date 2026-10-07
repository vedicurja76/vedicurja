import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["bedroom-vastu-marital-harmony"];

const seo: ArticleSeo = {
  slug: "bedroom-vastu-marital-harmony",
  title: "Bedroom Vastu for Marital Harmony & Better Sleep",
  description:
    "How Vastu shapes the master bedroom for calm, intimacy and restful sleep — bed direction, mirror placement, colours, electronics and the southwest zone explained with astro-scientific reasoning by AstroVastu Expert KK Nagaich.",
  headline: "Bedroom Vastu for Marital Harmony",
  keywords: ["bedroom vastu", "master bedroom vastu", "sleep direction vastu", "vastu for married couples", "bed placement"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function BedroomVastuArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}