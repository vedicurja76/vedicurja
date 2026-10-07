import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";
import { ARTICLE_SEO_META } from "@/features/blog/data/articleSeoMetadata";

const meta = ARTICLE_SEO_META["numerology-beginners"];

const seo: ArticleSeo = {
  slug: "numerology-beginners",
  title: "Numerology for Beginners — Mulank, Bhagyank & Lucky Numbers",
  description:
    "A beginner-friendly introduction to Vedic and Chaldean numerology — Mulank, Bhagyank, name numbers, lucky digits and how numbers influence life path, explained simply by AstroVastu Expert KK Nagaich.",
  headline: "Numerology for Beginners",
  keywords: ["numerology for beginners", "mulank bhagyank", "lucky number", "name number numerology", "chaldean numerology"],
  datePublished: "2026-09-30",
  dateModified: "2026-10-06",
  faqs: meta.faqs,
};

export const metadata: Metadata = articleMetadata(seo);

export default function NumerologyBeginnersArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}