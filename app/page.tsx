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
        <div className="text-lg md:text-xl select-none animate-fade-in-down delay-200">
          <button 
            onClick={handlePL} 
            className="hover:underline focus:outline-none smooth-transition hover-scale"
            type="button"
          >
            PL
          </button>
          <span className="text-gray-500 mx-2 select-none">|</span>
          <button 
            onClick={handleEN} 
            className="hover:underline focus:outline-none smooth-transition hover-scale"
            type="button"
          >
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
