"use client"

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProjectCard from "./Projects/ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";

const archivedProjects: { id: string; website_url: string; source_url?: string; stack: string[] }[] = [
  { id: 'Odliczamydo.pl', website_url: "https://web.archive.org/web/20251110202941/https://odliczamydo.pl/", stack: (["html", "css", "js", "php"] as string[]) },
  { id: "Chestdrop", website_url: "https://chestdrop.online", stack: (["react", "css", "js"] as string[]) },
  { id: "MVList", website_url: "https://archived-projects.kbdev.run/mvlist", source_url: "https://github.com/klubuntu-backup1/mvlist", stack: (["css", "js", "php"] as string[]) },
  { id: "OneMyList", website_url: "https://archived-projects.kbdev.run/one-my-list", stack: (["css", "js", "php"] as string[]) },
  { id: "Powrot RoxMb", website_url: "https://archived-projects.kbdev.run/events/powrotroxmb", source_url: "https://github.com/klubuntu-backup1/events-powrotroxmb", stack: (["html", "css", "js"] as string[]) },
  { id: "Countdown Web", website_url: "https://archived-projects.kbdev.run/events/countdown", source_url: "https://github.com/klubuntu-backup1/events-odometer", stack: (["html", "css", "js"] as string[]) },
  { id: "Reqqel.music", website_url: "https://archived-projects.kbdev.run/orders/reqqel-music", stack: (["html", "css", "js"] as string[]) },
  { id: "Clouds network", website_url: "https://archived-projects.kbdev.run/puri-devs/clouds-network", source_url: "https://github.com/Puri-Devs/clouds-network-site", stack: (["html", "css", "js"] as string[]) },
];

export default function ArchiveContent() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const handlePL = useCallback(() => setLanguage('pl_PL'), [setLanguage]);
  const handleEN = useCallback(() => setLanguage('en_US'), [setLanguage]);

  const handleBack = useCallback(() => {
    const url = language === 'pl_PL' ? '/' : '/en';
    router.push(url);
  }, [language, router]);

  return (
    <div className="font-sans">
      <header className="relative z-[100000] flex flex-wrap justify-center items-center gap-4 md:gap-8 py-5 px-4 animate-fade-in-down">
        <h2 className="text-3xl md:text-4xl font-bold text-white">kbdev</h2>
        <NavMenu />
        <div 
          className="flex items-center gap-1 p-1 rounded-lg animate-fade-in-down delay-200"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <button 
            onClick={handlePL} 
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none flex items-center gap-2 ${language === 'pl_PL' ? 'bg-white/20' : 'hover:bg-white/10'}`}
            type="button"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="7" fill="#FFFFFF"/>
              <rect y="7" width="20" height="7" fill="#DC143C"/>
            </svg>
            PL
          </button>
          <button 
            onClick={handleEN} 
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none flex items-center gap-2 ${language === 'en_US' ? 'bg-white/20' : 'hover:bg-white/10'}`}
            type="button"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="14" fill="#012169"/>
              <path d="M0 0L20 14M20 0L0 14" stroke="#FFFFFF" strokeWidth="2"/>
              <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.2"/>
              <path d="M10 0V14M0 7H20" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.4"/>
            </svg>
            EN
          </button>
        </div>
      </header>
      <main className="mt-10">
        <section className="grid gap-10 items-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {t.archive.title}
            </h1>
          </div>
          <div className="w-full flex flex-col items-center gap-3 px-4">
            {archivedProjects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                website_url={p.website_url}
                source_url={p.source_url || ""}
                stack={p.stack as any}
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleBack}
              className="text-lg text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none"
              type="button"
            >
              ← {t.projects.title}
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
