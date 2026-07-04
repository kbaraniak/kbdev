import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Ba-Car – Case Study | kbdev",
  description: "Case study projektu Ba-Car. Zobacz wyzwania i osiagniecia.",
  keywords: ["Ba-Car", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Ba-Car – Case Study | kbdev", description: "Sprawdz case study projektu Ba-Car." },
  other: { "language": "Polish" },
};

export default function BaCarCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Ba-Car – Case Study", url: "https://kbdev.run/project/bacar" }]} />
      <CaseStudyContent slug="bacar" />
    </>
  );
}
