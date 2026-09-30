import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";

const seo: ArticleSeo = {
  slug: "vastu-main-entrance-door",
  title: "Vastu for the Main Entrance & Front Door",
  description:
    "Why the main door is the most important Vastu element — best directions by orientation, size, colour, material, threshold, and remedies for entrance dosha that invite opportunity and protect the home, by AstroVastu Expert KK Nagaich.",
  headline: "Vastu for the Main Entrance Door",
  keywords: ["main door vastu", "entrance direction vastu", "front door colour", "main gate vastu", "entrance remedies"],
};

export const metadata: Metadata = articleMetadata(seo);

export default function MainEntranceArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}
