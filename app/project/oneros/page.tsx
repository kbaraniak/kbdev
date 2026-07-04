import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "OnerOS Web – Case Study | kbdev",
  description: "Case study projektu OnerOS Web. Zobacz wyzwania i osiagniecia.",
  keywords: ["OnerOS Web", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "OnerOS Web – Case Study | kbdev", description: "Sprawdz case study projektu OnerOS Web." },
  other: { "language": "Polish" },
};

export default function OnerosCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "OnerOS Web – Case Study", url: "https://kbdev.run/project/oneros" }]} />
      <CaseStudyContent slug="oneros" />
    </>
  );
}
