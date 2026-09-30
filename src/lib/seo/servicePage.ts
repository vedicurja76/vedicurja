import type { Metadata } from "next";

export const SEO_BASE = "https://www.vedivastuurja.com";

export interface ServicePageSeo {
  slug: string;
  title: string;
  description: string;
  serviceName: string;
  serviceType: string;
  alternateName?: string;
  keywords?: string[];
  faqs?: { q: string; a: string }[];
}

export function serviceMetadata(s: ServicePageSeo): Metadata {
  const url = `${SEO_BASE}/services/${s.slug}`;
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: s.title,
      description: s.description,
      url,
      type: "website",
      siteName: "AstroVastu Expert",
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.description,
    },
  };
}

export function serviceJsonLd(s: ServicePageSeo) {
  const url = `${SEO_BASE}/services/${s.slug}`;
  const graph: unknown[] = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: s.serviceName,
      alternateName: s.alternateName,
      serviceType: s.serviceType,
      description: s.description,
      url,
      provider: { "@id": `${SEO_BASE}/#organization` },
      areaServed: [
        "Lucknow", "Mumbai", "Delhi", "Noida", "Gurugram",
        "Pune", "Bengaluru", "Hyderabad", "Ahmedabad", "Kolkata", "India",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SEO_BASE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SEO_BASE}/services` },
        { "@type": "ListItem", position: 3, name: s.serviceName, item: url },
      ],
    },
  ];
  if (s.faqs && s.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
