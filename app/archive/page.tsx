import type { Metadata } from "next";
import BreadcrumbsJsonLd from "../../components/BreadcrumbsJsonLd";
import ArchiveContent from "../../components/ArchiveContent";

export const metadata: Metadata = {
  title: "Archiwum Projektów | kbdev",
  description: "Archiwum starszych projektów Kamila B. (Klubuntu): Odliczamydo.pl, Chestdrop, MVList, OneMyList, Powrót RoxMb, Countdown Web, Reqqel.music, Clouds Network.",
  keywords: ["archiwum projektów", "starsze projekty", "Klubuntu", "frontend", "web developer", "portfolio archiwum", "Odliczamydo", "Chestdrop", "MVList"],
  openGraph: { title: "Archiwum Projektów | kbdev", description: "Archiwum starszych projektów frontendowych Kamila B.", locale: "pl_PL" },
  twitter: { title: "Archiwum Projektów | kbdev", description: "Archiwum starszych projektów frontendowych Kamila B." },
  other: { "language": "Polish" },
};

const baseUrl = "https://kbdev.run";

export default function ArchivePage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[
        { name: "Strona główna", url: baseUrl },
        { name: "Archiwum projektów", url: `${baseUrl}/archive` },
      ]} />
      <ArchiveContent />
    </>
  );
}
