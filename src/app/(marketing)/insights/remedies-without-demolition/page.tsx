import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["remedies-without-demolition"];

const seo: ArticleSeo = {
  slug: "remedies-without-demolition",
  title: "Vastu Remedies Without Demolition — Practical Corrections",
  description:
    "How to fix most Vastu doshas without breaking walls — directional shifts, yantras, gemstones, mirrors, colours, plants and placement remedies that work in homes and offices, by AstroVastu Expert KK Nagaich.",
  headline: "Vastu Remedies Without Demolition",
  keywords: ["vastu remedies without demolition", "vastu upay", "no demolition vastu", "vastu correction at home", "yantra remedy"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function RemediesWithoutDemolitionArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}