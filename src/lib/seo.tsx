import type { Metadata } from 'next';

const BASE = 'https://www.vedivastuurja.com';

export interface MetaInput {
  title: string;            // WITHOUT brand suffix (layout template appends it)
  description: string;
  path: string;             // e.g. "/services/kundali"
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
}

export function makeMeta({
  title,
  description,
  path,
  image = '/images/home/acharya-portrait.webp',
  type = 'website',
  publishedTime,
  keywords,
}: MetaInput): Metadata {
  const url = `${BASE}${path}`;
  const img = image.startsWith('http') ? image : `${BASE}${image}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
      siteName: 'AstroVastu Expert',
      locale: 'en_IN',
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}

const ORG = { '@id': `${BASE}/#organization` };

export function serviceJsonLd(opts: {
  name: string;
  alternateName?: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
  faqs?: { q: string; a: string }[];
}) {
  const url = `${BASE}${opts.path}`;
  const graph: any[] = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      serviceType: opts.serviceType,
      name: opts.name,
      alternateName: opts.alternateName,
      description: opts.description,
      url,
      provider: ORG,
      areaServed: (opts.areaServed ?? ['Lucknow', 'Mumbai', 'Delhi', 'India']).map((c) => ({ '@type': 'City', name: c })),
    },
  ];
  if (opts.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: opts.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
  publishedTime?: string;
  author?: string;
}) {
  const url = `${BASE}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: `${BASE}/images/home/acharya-portrait.webp`,
    author: { '@type': 'Person', name: opts.author ?? 'KK Nagaich' },
    publisher: ORG,
    datePublished: opts.publishedTime,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: ['en', 'hi'],
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
