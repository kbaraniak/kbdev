import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Reqqel – Case Study | kbdev",
  description: "Case study of the Reqqel project. See challenges and achievements.",
  keywords: ["Reqqel", "case study", "project", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Reqqel – Case Study | kbdev", description: "Check out the Reqqel project case study." },
  other: { "language": "English" },
};

export default function EnReqqelMusicCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Reqqel – Case Study", url: "https://kbdev.run/en/project/reqqel-music" }]} />
      <CaseStudyContent slug="reqqel-music" />
    </>
  );
}
