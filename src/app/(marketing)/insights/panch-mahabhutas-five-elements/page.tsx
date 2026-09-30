import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";

const seo: ArticleSeo = {
  slug: "panch-mahabhutas-five-elements",
  title: "The Panch Mahabhutas — Five Elements of Vastu Explained",
  description:
    "Earth, Water, Fire, Air and Space (Akash) and their directions, qualities and roles in Vastu — how balancing the five elements shapes a healthy, prosperous living space, by AstroVastu Expert KK Nagaich.",
  headline: "Understanding the Panch Mahabhutas — Five Elements",
  keywords: ["panch mahabhutas", "five elements vastu", "vastu elements directions", "brahmasthan", "vastu science basics"],
};

export const metadata: Metadata = articleMetadata(seo);

export default function PanchMahabhutasArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}
