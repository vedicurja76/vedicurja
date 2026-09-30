import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCity, cityFaq } from "@/features/cities/data";
import CityClient from "@/features/cities/CityClient";

const BASE = "https://www.vedivastuurja.com";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) return { title: "City not found | AstroVastu Expert" };
  const title = `${c.taglineEn} | KK Nagaich`;
  const description = `${c.introEn} Non-invasive Vastu remedies, Kundali & Numerology for ${c.name}, ${c.state}. Book on WhatsApp.`;
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/cities/${c.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE}/cities/${c.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: "AstroVastu Expert",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const url = `${BASE}/cities/${c.slug}`;
  const faqs = cityFaq(c);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}#business`,
        name: `AstroVastu Expert — Vastu Consultant in ${c.name}`,
        image: `${BASE}/images/home/acharya-portrait.webp`,
        url,
        telephone: "+91-6393570832",
        priceRange: "₹₹",
        founder: { "@type": "Person", name: "KK Nagaich" },
        parentOrganization: { "@id": `${BASE}/#organization` },
        areaServed: [
          { "@type": "City", name: c.name },
          { "@type": "State", name: c.state },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: c.name,
          addressRegion: c.state,
          addressCountry: "IN",
        },
        knowsAbout: [
          "Vastu Shastra",
          "Residential Vastu",
          "Commercial Vastu",
          "Industrial Vastu",
          "Kundali Analysis",
          "Numerology",
        ],
        sameAs: [
          "https://www.instagram.com/vedivastuurja",
          "https://www.youtube.com/@vedivastuurja",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${c.taglineEn} | AstroVastu Expert`,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${url}#business` },
        inLanguage: ["en", "hi"],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.qEn,
          acceptedAnswer: { "@type": "Answer", text: f.aEn },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityClient city={c} />
    </>
  );
}
