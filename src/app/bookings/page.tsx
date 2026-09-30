import type { Metadata } from "next";

const BASE = "https://www.vedivastuurja.com";
const URL = `${BASE}/bookings`;

export const metadata: Metadata = {
  title: "Book a Vastu or Astrology Consultation",
  description:
    "Book a service and plan with AstroVastu Expert — residential, commercial and industrial Vastu, Kundali, numerology, remedies and online consultation. Pay securely via Razorpay or continue on WhatsApp; Acharya KK Nagaich confirms every booking within 12 hours.",
  alternates: { canonical: URL },
  openGraph: { title: "Book a Consultation", description: "Choose a Vastu or astrology service and pay securely or on WhatsApp.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  twitter: { card: "summary_large_image", title: "Book a Consultation", description: "Book Vastu and astrology services online." },
  robots: { index: true, follow: true },
};

export { default } from "./ClientPage";
