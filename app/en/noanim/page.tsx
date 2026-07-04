import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import NoAnimHomePageContent from "../../../components/NoAnimHomePageContent";

export const metadata: Metadata = {
  title: "kbdev – Portfolio (no-animation version) | Kamil B. (Klubuntu)",
  description: "Simplified version of Kamil B.'s portfolio without animations – for faster loading and better accessibility. Frontend developer: React, Next.js, Tailwind CSS.",
  keywords: ["portfolio no animations", "simplified version", "accessibility", "frontend developer", "Kamil B", "Klubuntu", "fast loading", "React", "Next.js"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "kbdev – Portfolio (no-animation version) | Kamil B. (Klubuntu)",
    description: "Simplified portfolio version without animations – for faster loading and better accessibility.",
    locale: "en_US",
  },
  twitter: {
    title: "kbdev – Portfolio (no-animation version) | Kamil B. (Klubuntu)",
    description: "Simplified portfolio version without animations – for faster loading and better accessibility.",
  },
  other: { "language": "English" },
};

const baseUrl = "https://kbdev.run";

export default function EnNoAnimHome() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home (no-animation)", url: `${baseUrl}/en/noanim` }]} />
      <NoAnimHomePageContent />
    </>
  );
}
