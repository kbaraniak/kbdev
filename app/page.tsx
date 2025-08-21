"use client"

import { useCallback } from "react";
import NavMenu from "../components/NavMenu";
import AboutMe from "../components/Hero/AboutMe";
import Projects from '../components/Hero/Projects';
import Collaboration from "../components/Hero/Collaboration";
import Support from "../components/Hero/Support";

export default function Home() {
  // Callbacks 
  const handlePL = useCallback(() => alert("Switched to Polish Version"), []);
  const handleEN = useCallback(() => alert("Switched to International Version"), []);

  return (
    <div className="font-sans">
      <div className="flex gap-[32px] row-start-2 items-center py-5 px-4">
        <h2 className="text-4xl text-bold">kbdev</h2>
        <NavMenu />
        <p className="text-xl md:text-3xl select-none">
          <button 
            onClick={handlePL} 
            className="hover:underline focus:outline-none"
            type="button"
          >
            PL
          </button>
          <span className="text-gray-500 mx-2 select-none">|</span>
          <button 
            onClick={handleEN} 
            className="hover:underline focus:outline-none"
            type="button"
          >
            EN
          </button>
        </p>
      </div>
      <main className="mt-10">
        <AboutMe />
        <Projects />
        <Collaboration />
        <Support />
      </main>
    </div>
  );
}
