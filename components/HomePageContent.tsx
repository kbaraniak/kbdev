"use client"

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import NavMenu from "./NavMenu";
import AboutMe from "./Hero/AboutMe";
import Projects from './Hero/Projects';
import WebsitesFrontend from './Hero/WebsitesFrontend';
import Collaboration from "./Hero/Collaboration";
import Support from "./Hero/Support";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePageContent() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const handlePL = useCallback(() => setLanguage('pl_PL'), [setLanguage]);
  const handleEN = useCallback(() => setLanguage('en_US'), [setLanguage]);
  const handleLogo = useCallback(() => {
    const url = language === 'pl_PL' ? '/' : '/en';
    router.push(url);
  }, [language, router]);

  return (
    <div className="font-sans">
      <header className="relative z-[100000] flex flex-wrap justify-center items-center gap-4 md:gap-8 py-5 px-4 animate-fade-in-down">
        <button onClick={handleLogo} className="bg-none border-none cursor-pointer" type="button">
          <h2 className="text-3xl md:text-4xl font-bold text-white">kbdev</h2>
        </button>
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
        <AboutMe />
        <Projects />
        <WebsitesFrontend />
        <Collaboration />
        <Support />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
