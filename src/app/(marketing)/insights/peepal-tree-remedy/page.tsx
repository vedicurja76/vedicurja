import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["peepal-tree-remedy"];

const seo: ArticleSeo = {
  slug: "peepal-tree-remedy",
  title: "Peepal Tree Growing on Walls — Signs & Remedies",
  description:
    "Traditional Vastu view of a Peepal tree growing on a house wall — considered the abode of the Pitras — the signs people watch for, why it is regarded as inauspicious, and remedies and etiquette by AstroVastu Expert KK Nagaich.",
  headline: "Peepal Tree Growing on House Walls — Signs and Remedies",
  keywords: ["peepal tree on wall", "peepal vastu", "tree growing on house", "pitra dosh remedy", "vriksh vastu"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function PeepalTreeRemedyArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}