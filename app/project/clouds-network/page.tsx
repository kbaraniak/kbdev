import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Cloud Networks – Case Study | kbdev",
  description: "Case study projektu Cloud Networks. Zobacz wyzwania i osiagniecia.",
  keywords: ["Cloud Networks", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Cloud Networks – Case Study | kbdev", description: "Sprawdz case study projektu Cloud Networks." },
  other: { "language": "Polish" },
};

export default function CloudsNetworkCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Cloud Networks – Case Study", url: "https://kbdev.run/project/clouds-network" }]} />
      <CaseStudyContent slug="clouds-network" />
    </>
  );
}
