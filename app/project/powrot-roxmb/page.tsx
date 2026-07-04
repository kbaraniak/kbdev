import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Powrot RoxMb – Case Study | kbdev",
  description: "Case study projektu Powrot RoxMb. Zobacz wyzwania i osiagniecia.",
  keywords: ["Powrot RoxMb", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Powrot RoxMb – Case Study | kbdev", description: "Sprawdz case study projektu Powrot RoxMb." },
  other: { "language": "Polish" },
};

export default function PowrotRoxmbCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Powrot RoxMb – Case Study", url: "https://kbdev.run/project/powrot-roxmb" }]} />
      <CaseStudyContent slug="powrot-roxmb" />
    </>
  );
}
