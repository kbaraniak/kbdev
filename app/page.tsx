"use client"

import { useCallback } from "react";
import NavMenu from "../components/NavMenu";
import AboutMe from "../components/Hero/AboutMe";
import Projects from '../components/Hero/Projects';
import WebsitesFrontend from '../components/Hero/WebsitesFrontend';
import Collaboration from "../components/Hero/Collaboration";
import Support from "../components/Hero/Support";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export default function Home() {
  // Callbacks 
  const handlePlaceholder = useCallback(() => alert("Function not implemented on this time"), []);
  const handleEN = handlePlaceholder;
  const handlePL = handlePlaceholder;
  // const handlePL = useCallback(() => alert("Switched to Polish Version"), []);
  // const handleEN = useCallback(() => alert("Switched to International Version"), []);

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
            className="px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-white/10 focus:outline-none flex items-center gap-2"
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
            className="px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-white/10 focus:outline-none flex items-center gap-2"
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
