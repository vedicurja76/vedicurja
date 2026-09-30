import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";

const seo: ArticleSeo = {
  slug: "science-of-vastu",
  title: "The Science of Vastu Shastra — Elements & Evidence",
  description:
    "Vastu as an astro-scientific framework: the Panch Mahabhutas mapped to directions, geomagnetic resonance and sleep, passive-solar geometry, and modern computational and client evidence — by AstroVastu Expert KK Nagaich.",
  headline: "The Science of Vastu Shastra",
  keywords: ["science of vastu", "vastu scientific basis", "panch mahabhutas", "passive solar vastu", "vastu evidence"],
};

export const metadata: Metadata = articleMetadata(seo);

export default function ScienceOfVastuArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}
