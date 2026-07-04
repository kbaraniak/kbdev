import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "OneMyList – Case Study | kbdev",
  description: "Case study of the OneMyList project. See challenges and achievements.",
  keywords: ["OneMyList", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/onemylist" },
  openGraph: { title: "OneMyList – Case Study | kbdev", description: "Check out the OneMyList project case study." },
  other: { "language": "English" },
};

export default function EnOnemylistCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "OneMyList – Case Study", url: "https://kbdev.run/en/project/onemylist" }]} />
      <CaseStudyContent slug="onemylist" />
    </>
  );
}
