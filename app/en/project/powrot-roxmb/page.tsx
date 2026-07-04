import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Powrot RoxMb – Case Study | kbdev",
  description: "Case study of the Powrot RoxMb project. See challenges and achievements.",
  keywords: ["Powrot RoxMb", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/powrot-roxmb" },
  openGraph: { title: "Powrot RoxMb – Case Study | kbdev", description: "Check out the Powrot RoxMb project case study." },
  other: { "language": "English" },
};

export default function EnPowrotRoxmbCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Powrot RoxMb – Case Study", url: "https://kbdev.run/en/project/powrot-roxmb" }]} />
      <CaseStudyContent slug="powrot-roxmb" />
    </>
  );
}
