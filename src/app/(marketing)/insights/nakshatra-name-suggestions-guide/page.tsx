import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";

const seo: ArticleSeo = {
  slug: "nakshatra-name-suggestions-guide",
  title: "Nakshatra-Based Name Suggestion Guide",
  description:
    "How the 27 Nakshatras and their auspicious starting syllables guide naming a child or correcting a name in Vedic tradition — a clear guide to birth-star syllables, meaning and numerology by AstroVastu Expert KK Nagaich.",
  headline: "Nakshatra and Name Suggestion Guide",
  keywords: ["nakshatra name suggestion", "name by birth star", "vedic naming", "namakaran guide", "auspicious syllables"],
};

export const metadata: Metadata = articleMetadata(seo);

export default function NakshatraNameArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}
