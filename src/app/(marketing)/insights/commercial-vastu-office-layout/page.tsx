import type { Metadata } from "next";
import { articleMetadata, articleJsonLd, type ArticleSeo } from "@/lib/seo/articlePage";
import Client from "./ClientPage";

const seo: ArticleSeo = {
  slug: "commercial-vastu-office-layout",
  title: "Commercial Vastu for Office & Showroom Layout",
  description:
    "Designing an office or showroom for cash flow and growth — entrance, reception, cabin, cash-counter and workstation directions, meeting-room placement and colour strategy explained with Vastu logic by AstroVastu Expert KK Nagaich.",
  headline: "Commercial Vastu for Office Layout",
  keywords: ["office vastu", "commercial vastu", "showroom vastu", "cash counter direction", "business layout vastu"],
};

export const metadata: Metadata = articleMetadata(seo);

export default function CommercialOfficeArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(seo)) }} />
      <Client />
    </>
  );
}
