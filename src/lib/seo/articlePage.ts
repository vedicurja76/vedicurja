import type { Metadata } from "next";
import { SEO_BASE } from "./servicePage";

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface ArticleSeo {
  slug: string;
  title: string;
  description: string;
  headline: string;
  keywords?: string[];
  image?: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: ArticleFaq[];
}

const AUTHOR_ID = `${SEO_BASE}/#kknagaich`;
const PUBLISHER_ID = `${SEO_BASE}/#organization`;

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
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": PUBLISHER_ID },
    isPartOf: { "@type": "WebPage", "@id": `${SEO_BASE}/insights#webpage` },
    mainEntityOfPage: url,
  };
  if (a.image) article.image = a.image;
  if (a.datePublished) article.datePublished = a.datePublished;
  if (a.dateModified) article.dateModified = a.dateModified;

  const graph: unknown[] = [
    {
      "@type": "Person",
      "@id": AUTHOR_ID,
      name: "Krishna Kumar (K.K.) Nagaich",
      alternateName: "AstroVastu Expert KK Nagaich",
      jobTitle: "AstroVastu Expert & 4th Generation Vastu Guru",
      description:
        "4th generation Vastu Guru, MBA, ex-CEO, 20+ years of clinical practice and 2 lakh+ clients across 50+ countries.",
      knowsAbout: [
        "Vastu Shastra",
        "Vedic Astrology",
        "Numerology",
        "Nakshatra",
        "Geopathic Stress",
        "Panch Mahabhutas",
      ],
      url: `${SEO_BASE}/about`,
      worksFor: { "@id": PUBLISHER_ID },
      sameAs: [
        "https://www.youtube.com/@vedicurjavastu",
        "https://www.facebook.com/vedicurjavastu",
        "https://www.instagram.com/vedicurjavastu",
      ],
    },
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
  ];

  if (a.faqs && a.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: a.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}