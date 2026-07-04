import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Reqqel – Case Study | kbdev",
  description: "Case study projektu Reqqel. Zobacz wyzwania i osiagniecia.",
  keywords: ["Reqqel", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/project/reqqel-music" },
  openGraph: { title: "Reqqel – Case Study | kbdev", description: "Sprawdz case study projektu Reqqel." },
  other: { "language": "Polish" },
};

export default function ReqqelMusicCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Reqqel – Case Study", url: "https://kbdev.run/project/reqqel-music" }]} />
      <CaseStudyContent slug="reqqel-music" />
    </>
  );
}
