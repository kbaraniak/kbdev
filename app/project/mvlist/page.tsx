import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "MVList – Case Study | kbdev",
  description: "Case study projektu MVList. Zobacz wyzwania i osiagniecia.",
  keywords: ["MVList", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/project/mvlist" },
  openGraph: { title: "MVList – Case Study | kbdev", description: "Sprawdz case study projektu MVList." },
  other: { "language": "Polish" },
};

export default function MvlistCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "MVList – Case Study", url: "https://kbdev.run/project/mvlist" }]} />
      <CaseStudyContent slug="mvlist" />
    </>
  );
}
