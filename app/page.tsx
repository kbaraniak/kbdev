import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../components/BreadcrumbsJsonLd";
import HomePageContent from "../components/HomePageContent";

export const metadata: Metadata = {
  title: "kbdev – Portfolio Web Developera | Kamil B. (Klubuntu)",
  description: "Portfolio Kamila B. – frontend developer tworzący szybkie, nowoczesne strony internetowe. React, Next.js, Tailwind CSS. Zobacz projekty: Ba-Car, Klubuntu, OnerOS i więcej.",
  keywords: ["portfolio web developera", "frontend developer portfolio", "Kamil B", "Klubuntu", "React developer", "Next.js portfolio", "Tworzenie stron internetowych", "aplikacje webowe", "SEO"],
  alternates: { canonical: "https://kbdev.run" },
  openGraph: {
    title: "kbdev – Portfolio Web Developera | Kamil B. (Klubuntu)",
    description: "Frontend developer tworzący szybkie, nowoczesne strony internetowe i aplikacje webowe. React, Next.js, Tailwind CSS.",
    locale: "pl_PL",
  },
  twitter: {
    title: "kbdev – Portfolio Web Developera | Kamil B. (Klubuntu)",
    description: "Frontend developer tworzący szybkie, nowoczesne strony internetowe i aplikacje webowe. React, Next.js, Tailwind CSS.",
  },
  other: { "language": "Polish" },
};

const baseUrl = "https://kbdev.run";

export default function Home() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona główna", url: baseUrl }]} />
      <HomePageContent />
    </>
  );
}
