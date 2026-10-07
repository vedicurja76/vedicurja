import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "AstroVastu Expert | No.1 Vastu Consultant in Lucknow, Mumbai & Delhi",
  description:
    "Consult KK Nagaich — 4th generation Vastu Guru, Tantra Sadhak, MBA & ex-CEO. Vastu for home, office & land, remedies without demolition, Kundali & Numerology, plus a free AI Astrology & Kundli reading and free Vastu tools. 2 Lakh+ clients across 50+ countries.",
  alternates: { canonical: "https://www.vedivastuurja.com/" },
  keywords: [
    "vastu shastra consultant", "vastu consultant near me", "acharya kk nagaich",
    "vastu for home", "kundli online", "daily rashi bhavishya 2026", "naam sujhav",
    "vastu lucknow", "vastu mumbai", "vastu delhi", "astrology consultation online",
    "ghar ka vastu", "kundli analysis", "vaastu shastra",
  ],
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.vedivastuurja.com/#webpage",
      url: "https://www.vedivastuurja.com/",
      name: "AstroVastu Expert — Premium Vastu Consultancy",
      isPartOf: { "@id": "https://www.vedivastuurja.com/#website" },
      about: { "@id": "https://www.vedivastuurja.com/#organization" },
      inLanguage: ["en", "hi"],
      primaryImageOfPage: "https://www.vedivastuurja.com/images/home/acharya-portrait.webp",
    },
    {
      "@type": "ItemList",
      itemListElement: [
        "Residential Vastu|आवासीय वास्तु|/services/residential",
        "Commercial Vastu|व्यावसायिक वास्तु|/services/commercial",
        "Industrial Vastu|औद्योगिक वास्तु|/services/industrial",
        "Land Selection|भूमि चयन|/services/land",
        "Kundali Analysis|कुंडली विश्लेषण|/services/kundali",
        "Free AI Astrology & Kundli|निःशुल्क AI ज्योतिष व कुंडली|/free-tools/ai-astrology",
        "Numerology & Namakaran|अंक ज्योतिष व नामकरण|/services/numerology-namakaran",
        "Vastu Remedies|वास्तु उपाय|/services/remedies",
      ].map((s, i) => {
        const [name, hiName, url] = s.split("|");
        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            serviceType: name,
            name,
            alternateName: hiName,
            url: `https://www.vedivastuurja.com${url}`,
            provider: { "@id": "https://www.vedivastuurja.com/#organization" },
            areaServed: ["Lucknow", "Mumbai", "Delhi", "India"],
          },
        };
      }),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.vedivastuurja.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I book a Vastu consultation?",
          acceptedAnswer: { "@type": "Answer", text: "Choose a service and plan on our Bookings page, fill in your details and pay securely via Razorpay, or continue on WhatsApp. Acharya ji confirms every booking personally within 12 hours." },
        },
        {
          "@type": "Question",
          name: "Can Vastu remedies be done without demolition?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Most Vastu defects can be corrected with non-invasive remedies — crystals, pyramids, color therapy, yantras and directional corrections — without breaking walls." },
        },
        {
          "@type": "Question",
          name: "Do you offer online (virtual) Vastu consultation?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Acharya ji conducts detailed virtual consultations over WhatsApp video call for clients across India and 50+ countries." },
        },
        {
          "@type": "Question",
          name: "Is the AI guidance on this site free?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Siddhi, our AI Vastu guide, and tools like the daily horoscope and name suggestion are completely free to use." },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <HomeClient />
    </>
  );
}
