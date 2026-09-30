import type { Metadata } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";
import Client from "./ClientPage";

const URL = `${SEO_BASE}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AstroVastu Expert collects, uses and protects your personal data across consultations, bookings, payment and free AI tools. Read our privacy policy for clients in India and abroad.",
  alternates: { canonical: URL },
  openGraph: { title: "Privacy Policy", description: "AstroVastu Expert privacy policy.", url: URL, type: "website", siteName: "AstroVastu Expert" },
  robots: { index: true, follow: true },
};

export default function PrivacyIndex() {
  return <Client />;
}
