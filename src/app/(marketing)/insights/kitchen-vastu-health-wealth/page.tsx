import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["kitchen-vastu-health-wealth"];

const seo: ArticleSeo = {
  slug: "kitchen-vastu-health-wealth",
  title: "Kitchen Vastu for Health, Wealth & Positivity",
  description:
    "Why the kitchen's direction, fire placement, sink location and cooking orientation shape health and prosperity — the Agni-zone principles of kitchen Vastu with practical corrections by AstroVastu Expert KK Nagaich.",
  headline: "Kitchen Vastu for Health and Wealth",
  keywords: ["kitchen vastu", "cooking direction", "fire element kitchen", "kitchen layout vastu", "vastu for kitchen"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function KitchenVastuArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}