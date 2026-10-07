import type { MetadataRoute } from "next";
import { SEO_BASE } from "@/lib/seo/servicePage";

export const dynamic = "force-static";

// Single source of truth for the XML sitemap. Because this is a Next metadata
// route, `next build` emits out/sitemap.xml automatically — so it can never
// drift from the deployed pages the way the old hand-maintained public/sitemap.xml did.
// Add a new page: create its route, then list its path here.

type Entry = { path: string; priority: number; changefreq: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]> };

const RAW: (Entry | string)[] = [
  { path: "", priority: 1.0, changefreq: "daily" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/free-tools", priority: 0.9, changefreq: "weekly" },
  { path: "/bookings", priority: 0.8, changefreq: "monthly" },
  { path: "/insights", priority: 0.8, changefreq: "weekly" },
  { path: "/cities", priority: 0.7, changefreq: "monthly" },
  { path: "/about", priority: 0.6, changefreq: "monthly" },
  { path: "/contact", priority: 0.6, changefreq: "monthly" },
  { path: "/products", priority: 0.6, changefreq: "monthly" },
  { path: "/client-stories", priority: 0.5, changefreq: "monthly" },
  { path: "/vishesh-upaye-1", priority: 0.6, changefreq: "monthly" },
  { path: "/privacy", priority: 0.2, changefreq: "yearly" },
  { path: "/terms", priority: 0.2, changefreq: "yearly" },

  // Free AI tools
  { path: "/free-tools/ai-astrology", priority: 0.9, changefreq: "weekly" },
  { path: "/free-tools/daily-horoscope", priority: 0.9, changefreq: "daily" },
  { path: "/free-tools/name-suggestion", priority: 0.8, changefreq: "weekly" },

  // Service pages
  "/services/residential", "/services/commercial", "/services/industrial",
  "/services/land", "/services/kundali", "/services/numerology-namakaran",
  "/services/pyramidology", "/services/crystal-color", "/services/geopathic",
  "/services/remedies", "/services/rituals", "/services/spiritual",
  "/services/mercury-parad", "/services/virtual-consult",
];

const ROUTES: Entry[] = RAW.map((r) =>
  typeof r === "string"
    ? { path: r, priority: 0.8, changefreq: "monthly" as const }
    : r
);

const CITIES = [
  "ahmedabad", "bengaluru", "delhi", "gurugram", "hyderabad",
  "kolkata", "lucknow", "mumbai", "noida", "pune",
];

const ARTICLES = [
  "vastu-main-entrance-door", "bedroom-vastu-marital-harmony",
  "kitchen-vastu-health-wealth", "commercial-vastu-office-layout",
  "geopathic-stress-hidden-enemy", "science-of-vastu",
  "panch-mahabhutas-five-elements", "peepal-tree-remedy",
  "remedies-without-demolition", "spiritual-vastu-pooja-room-design",
  "numerology-beginners", "nakshatra-name-suggestions-guide",
];

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    ...ROUTES.map((r) => ({ path: r.path, priority: r.priority, changefreq: r.changefreq })),
    ...CITIES.map((c) => ({ path: `/cities/${c}`, priority: 0.7, changefreq: "monthly" as const })),
    ...ARTICLES.map((a) => ({ path: `/insights/${a}`, priority: 0.7, changefreq: "monthly" as const })),
  ];

  return urls.map(({ path, priority, changefreq }) => ({
    url: `${SEO_BASE}${path}`,
    lastModified,
    changeFrequency: changefreq,
    priority,
  }));
}
