import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Countdown Web – Case Study | kbdev",
  description: "Case study projektu Countdown Web. Zobacz wyzwania i osiagniecia.",
  keywords: ["Countdown Web", "case study", "projekt", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Countdown Web – Case Study | kbdev", description: "Sprawdz case study projektu Countdown Web." },
  other: { "language": "Polish" },
};

export default function CountdownWebCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Strona glowna", url: "https://kbdev.run" }, { name: "Countdown Web – Case Study", url: "https://kbdev.run/project/countdown-web" }]} />
      <CaseStudyContent slug="countdown-web" />
    </>
  );
}
