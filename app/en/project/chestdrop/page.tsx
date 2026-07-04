import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Chestdrop – Case Study | kbdev",
  description: "Case study of the Chestdrop project. See challenges and achievements.",
  keywords: ["Chestdrop", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/chestdrop" },
  openGraph: { title: "Chestdrop – Case Study | kbdev", description: "Check out the Chestdrop project case study." },
  other: { "language": "English" },
};

export default function EnChestdropCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Chestdrop – Case Study", url: "https://kbdev.run/en/project/chestdrop" }]} />
      <CaseStudyContent slug="chestdrop" />
    </>
  );
}
