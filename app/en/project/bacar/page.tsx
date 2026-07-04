import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Ba-Car – Case Study | kbdev",
  description: "Case study of the Ba-Car project. See challenges and achievements.",
  keywords: ["Ba-Car", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/bacar" },
  openGraph: { title: "Ba-Car – Case Study | kbdev", description: "Check out the Ba-Car project case study." },
  other: { "language": "English" },
};

export default function EnBaCarCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Ba-Car – Case Study", url: "https://kbdev.run/en/project/bacar" }]} />
      <CaseStudyContent slug="bacar" />
    </>
  );
}
