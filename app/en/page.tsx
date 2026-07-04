import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../components/BreadcrumbsJsonLd";
import HomePageContent from "../../components/HomePageContent";

export const metadata: Metadata = {
  title: "kbdev – Web Developer Portfolio | Kamil B. (Klubuntu)",
  description: "Portfolio of Kamil B. – frontend developer building fast, modern websites. React, Next.js, Tailwind CSS. Projects: Ba-Car, Klubuntu, OnerOS and more.",
  keywords: ["web developer portfolio", "frontend developer portfolio", "Kamil B", "Klubuntu", "React developer", "Next.js portfolio", "website development", "web applications", "SEO"],
  alternates: { canonical: "https://kbdev.run/en" },
  openGraph: {
    title: "kbdev – Web Developer Portfolio | Kamil B. (Klubuntu)",
    description: "Frontend developer building fast, modern websites and web applications. React, Next.js, Tailwind CSS.",
    locale: "en_US",
  },
  twitter: {
    title: "kbdev – Web Developer Portfolio | Kamil B. (Klubuntu)",
    description: "Frontend developer building fast, modern websites and web applications. React, Next.js, Tailwind CSS.",
  },
  other: { "language": "English" },
};

const baseUrl = "https://kbdev.run";

export default function EnHome() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: `${baseUrl}/en` }]} />
      <HomePageContent />
    </>
  );
}
