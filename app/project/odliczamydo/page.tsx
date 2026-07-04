import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Odliczamydo.pl – Case Study | kbdev",
  description: "Case study projektu Odliczamydo.pl. Zobacz wyzwania i osiagniecia.",
  keywords: ["Odliczamydo.pl", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Odliczamydo.pl – Case Study | kbdev", description: "Sprawdz case study projektu Odliczamydo.pl." },
  other: { "language": "Polish" },
};

export default function OdliczamydoCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Odliczamydo.pl – Case Study", url: "https://kbdev.run/project/odliczamydo" }]} />
      <CaseStudyContent slug="odliczamydo" />
    </>
  );
}
