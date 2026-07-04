import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Odliczamydo.pl – Case Study | kbdev",
  description: "Case study of the Odliczamydo.pl project. See challenges and achievements.",
  keywords: ["Odliczamydo.pl", "case study", "project", "frontend", "web developer", "Klubuntu"],
  alternates: { canonical: "https://kbdev.run/en/project/odliczamydo" },
  openGraph: { title: "Odliczamydo.pl – Case Study | kbdev", description: "Check out the Odliczamydo.pl project case study." },
  other: { "language": "English" },
};

export default function EnOdliczamydoCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Odliczamydo.pl – Case Study", url: "https://kbdev.run/en/project/odliczamydo" }]} />
      <CaseStudyContent slug="odliczamydo" />
    </>
  );
}
