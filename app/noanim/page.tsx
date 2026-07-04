import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../components/BreadcrumbsJsonLd";
import NoAnimHomePageContent from "../../components/NoAnimHomePageContent";

export const metadata: Metadata = {
  title: "kbdev – Portfolio (wersja bez animacji) | Kamil B. (Klubuntu)",
  description: "Uproszczona wersja portfolio Kamila B. bez animacji i efektów wizualnych – dla szybszego ładowania i lepszej dostępności. Frontend developer: React, Next.js, Tailwind CSS.",
  keywords: ["portfolio bez animacji", "wersja uproszczona", "dostępność", "frontend developer", "Kamil B", "Klubuntu", "szybkie ładowanie", "React", "Next.js"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "kbdev – Portfolio (no-animation version) | Kamil B. (Klubuntu)",
    description: "Simplified portfolio version without animations – for faster loading and better accessibility. Frontend developer: React, Next.js, Tailwind CSS.",
    locale: "pl_PL",
  },
  twitter: {
    title: "kbdev – Portfolio (no-animation version) | Kamil B. (Klubuntu)",
    description: "Simplified portfolio version without animations – for faster loading and better accessibility.",
  },
  other: { "language": "Polish" },
};

const baseUrl = "https://kbdev.run";

export default function NoAnimHome() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona główna (bez animacji)", url: `${baseUrl}/noanim` }]} />
      <NoAnimHomePageContent />
    </>
  );
}
