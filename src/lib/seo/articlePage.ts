import type { Metadata } from "next";
import { SEO_BASE } from "./servicePage";

export interface ArticleSeo {
  slug: string;
  title: string;
  description: string;
  headline: string;
  keywords?: string[];
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function articleMetadata(a: ArticleSeo): Metadata {
  const url = `${SEO_BASE}/insights/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      type: "article",
      siteName: "AstroVastu Expert",
      images: a.image ? [a.image] : undefined,
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description },
  };
}

export function articleJsonLd(a: ArticleSeo) {
  const url = `${SEO_BASE}/insights/${a.slug}`;
  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.headline,
    description: a.description,
    url,
    inLanguage: ["en", "hi"],
    author: { "@id": `${SEO_BASE}/#organization` },
    publisher: { "@id": `${SEO_BASE}/#organization` },
    isPartOf: { "@type": "WebPage", "@id": `${SEO_BASE}/insights#webpage` },
    mainEntityOfPage: url,
  };
  if (a.image) article.image = a.image;
  if (a.datePublished) article.datePublished = a.datePublished;
  if (a.dateModified) article.dateModified = a.dateModified;

  return {
    "@context": "https://schema.org",
    "@graph": [
      article,
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SEO_BASE },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SEO_BASE}/insights` },
          { "@type": "ListItem", position: 3, name: a.headline, item: url },
        ],
      },
    ],
  };
}
