import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "iTVT – Case Study | kbdev",
  description: "Case study of the iTVT project. See challenges and achievements.",
  keywords: ["iTVT", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/itvt" },
  openGraph: { title: "iTVT – Case Study | kbdev", description: "Check out the iTVT project case study." },
  other: { "language": "English" },
};

export default function EnItvtCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "iTVT – Case Study", url: "https://kbdev.run/en/project/itvt" }]} />
      <CaseStudyContent slug="itvt" />
    </>
  );
}
