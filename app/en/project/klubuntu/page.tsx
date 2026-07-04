import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Klubuntu | Two Sides – Case Study | kbdev",
  description: "Case study of the Klubuntu | Two Sides project. See challenges and achievements.",
  keywords: ["Klubuntu | Two Sides", "case study", "project", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Klubuntu | Two Sides – Case Study | kbdev", description: "Check out the Klubuntu | Two Sides project case study." },
  other: { "language": "English" },
};

export default function EnKlubuntuCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Klubuntu | Two Sides – Case Study", url: "https://kbdev.run/en/project/klubuntu" }]} />
      <CaseStudyContent slug="klubuntu" />
    </>
  );
}
