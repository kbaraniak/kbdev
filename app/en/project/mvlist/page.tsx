import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "MVList – Case Study | kbdev",
  description: "Case study of the MVList project. See challenges and achievements.",
  keywords: ["MVList", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/mvlist" },
  openGraph: { title: "MVList – Case Study | kbdev", description: "Check out the MVList project case study." },
  other: { "language": "English" },
};

export default function EnMvlistCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "MVList – Case Study", url: "https://kbdev.run/en/project/mvlist" }]} />
      <CaseStudyContent slug="mvlist" />
    </>
  );
}
