import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../../components/BreadcrumbsJsonLd";
import CaseStudyContent from "../../../../components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Cloud Networks – Case Study | kbdev",
  description: "Case study of the Cloud Networks project. See challenges and achievements.",
  keywords: ["Cloud Networks", "case study", "project", "frontend", "web developer", "Klubuntu"],
  openGraph: { title: "Cloud Networks – Case Study | kbdev", description: "Check out the Cloud Networks project case study." },
  other: { "language": "English" },
};

export default function EnCloudsNetworkCaseStudy() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Home", url: "https://kbdev.run/en" }, { name: "Cloud Networks – Case Study", url: "https://kbdev.run/en/project/clouds-network" }]} />
      <CaseStudyContent slug="clouds-network" />
    </>
  );
}
