import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/terms`;

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of AstroVastu Expert services, consultations, bookings, payments and free AI tools — including scheduling, refunds, and the advisory nature of Vastu and astrology guidance.",
  alternates: { canonical: URL },
  openGraph: { title: "Terms & Conditions", description: "AstroVastu Expert terms of service.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  robots: { index: true, follow: true },
};

export default function TermsIndex() {
  return <Client />;
}
