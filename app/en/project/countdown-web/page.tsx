import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Countdown Web – Case Study | kbdev",
  description: "Case study of the Countdown Web project. See challenges and achievements.",
  keywords: ["Countdown Web", "case study", "project", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Countdown Web – Case Study | kbdev", description: "Check out the Countdown Web project case study." },
  other: { "language": "English" },
};

export default function EnCountdownWebCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Countdown Web – Case Study", url: "https://kbdev.run/en/project/countdown-web" }]} />
      <CaseStudyContent slug="countdown-web" />
    </>
  );
}
