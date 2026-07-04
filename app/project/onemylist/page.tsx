import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "OneMyList – Case Study | kbdev",
  description: "Case study projektu OneMyList. Zobacz wyzwania i osiagniecia.",
  keywords: ["OneMyList", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "OneMyList – Case Study | kbdev", description: "Sprawdz case study projektu OneMyList." },
  other: { "language": "Polish" },
};

export default function OnemylistCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "OneMyList – Case Study", url: "https://kbdev.run/project/onemylist" }]} />
      <CaseStudyContent slug="onemylist" />
    </>
  );
}
