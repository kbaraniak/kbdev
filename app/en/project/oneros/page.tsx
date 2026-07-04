import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "OnerOS Web – Case Study | kbdev",
  description: "Case study of the OnerOS Web project. See challenges and achievements.",
  keywords: ["OnerOS Web", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/oneros" },
  openGraph: { title: "OnerOS Web – Case Study | kbdev", description: "Check out the OnerOS Web project case study." },
  other: { "language": "English" },
};

export default function EnOnerosCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "OnerOS Web – Case Study", url: "https://kbdev.run/en/project/oneros" }]} />
      <CaseStudyContent slug="oneros" />
    </>
  );
}
