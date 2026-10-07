import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["geopathic-stress-hidden-enemy"];

const seo: ArticleSeo = {
  slug: "geopathic-stress-hidden-enemy",
  title: "Geopathic Stress — The Hidden Enemy in Your Home",
  description:
    "What geopathic stress is, how underground water courses and earth-energy lines disturb sleep, health and focus, and how to detect and neutralise affected zones in your home — by AstroVastu Expert KK Nagaich.",
  headline: "Geopathic Stress: The Hidden Enemy in Your Home",
  keywords: ["geopathic stress", "earth energy home", "sleep disturbance causes", "geopathic stress detection", "home health vastu"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function GeopathicStressArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}