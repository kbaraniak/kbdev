import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Klubuntu | Two Sides – Case Study | kbdev",
  description: "Case study projektu Klubuntu | Two Sides. Zobacz wyzwania i osiagniecia.",
  keywords: ["Klubuntu | Two Sides", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Klubuntu | Two Sides – Case Study | kbdev", description: "Sprawdz case study projektu Klubuntu | Two Sides." },
  other: { "language": "Polish" },
};

export default function KlubuntuCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Klubuntu | Two Sides – Case Study", url: "https://kbdev.run/project/klubuntu" }]} />
      <CaseStudyContent slug="klubuntu" />
    </>
  );
}
