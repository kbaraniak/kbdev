import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Chestdrop – Case Study | kbdev",
  description: "Case study projektu Chestdrop. Zobacz wyzwania i osiagniecia.",
  keywords: ["Chestdrop", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Chestdrop – Case Study | kbdev", description: "Sprawdz case study projektu Chestdrop." },
  other: { "language": "Polish" },
};

export default function ChestdropCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Chestdrop – Case Study", url: "https://kbdev.run/project/chestdrop" }]} />
      <CaseStudyContent slug="chestdrop" />
    </>
  );
}
