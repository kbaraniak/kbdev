import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../../components/BreadcrumbsJsonLd";
import ArchiveContent from "../../../components/ArchiveContent";

export const metadata: Metadata = {
  title: "Projects Archive | kbdev",
  description: "Archive of older projects by Kamil B. (Klubuntu): Odliczamydo.pl, Chestdrop, MVList, OneMyList, Powrót RoxMb, Countdown Web, Reqqel.music, Clouds Network.",
  keywords: ["projects archive", "older projects", "Klubuntu", "frontend", "web developer", "portfolio archive", "Odliczamydo", "Chestdrop", "MVList"],
  openGraph: { title: "Projects Archive | kbdev", description: "Archive of older frontend projects by Kamil B.", locale: "en_US" },
  twitter: { title: "Projects Archive | kbdev", description: "Archive of older frontend projects by Kamil B." },
  other: { "language": "English" },
};

const baseUrl = "https://kbdev.run";

export default function EnArchivePage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[
        { name: "Home", url: `${baseUrl}/en` },
        { name: "Projects Archive", url: `${baseUrl}/en/archive` },
      ]} />
      <ArchiveContent />
    </>
  );
}
