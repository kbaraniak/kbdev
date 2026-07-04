import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "iTVT – Case Study | kbdev",
  description: "Case study projektu iTVT. Zobacz wyzwania i osiagniecia.",
  keywords: ["iTVT", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "iTVT – Case Study | kbdev", description: "Sprawdz case study projektu iTVT." },
  other: { "language": "Polish" },
};

export default function ItvtCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "iTVT – Case Study", url: "https://kbdev.run/project/itvt" }]} />
      <CaseStudyContent slug="itvt" />
    </>
  );
}
