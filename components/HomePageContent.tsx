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
      <div aria-hidden="true" className="sr-only">
        {language === 'pl_PL' ? (
          <>
            <div>
              <h3>O mnie – Kamil B. (Klubuntu)</h3>
              <p>Kamil B. to frontend developer z Polski specjalizujący się w tworzeniu nowoczesnych stron internetowych i aplikacji webowych. Wykorzystuje technologie takie jak React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5 i CSS3. Tworzy szybkie, wydajne i responsywne strony z naciskiem na optymalizację SEO, wydajność Lighthouse oraz długoterminową łatwość utrzymania kodu. Portfolio zawiera projekty komercyjne i open source, w tym Ba-Car – stronę dla firmy detailingowej, Klubuntu | Two Sides – dwujęzyczną społeczność, oraz OnerOS Web – stronę systemu operacyjnego. Kamil ma 20 lat i od lat rozwija swoje umiejętności w programowaniu, począwszy od HTML i CSS, przez JavaScript i PHP, aż po nowoczesne frameworki takie jak React i Next.js. W wolnych chwilach eksperymentuje z Rustem i Pythonem, tworząc narzędzia backendowe i skrypty automatyzujące.</p>
            </div>
            <div>
              <h3>Projekty – Portfolio Web Developera</h3>
              <p>Portfolio zawiera trzy główne projekty frontendowe oraz archiwum starszych realizacji. Ba-Car to nowoczesna strona dla firmy detailingowej, zbudowana przy użyciu Astro i CSS, osiągająca wysokie wyniki Lighthouse (Performance 98, Accessibility 99, Best Practices 100, SEO 100) oraz wskaźnik CTR na poziomie 14% w ciągu pierwszych 24 godzin od publikacji. Klubuntu | Two Sides to dwujęzyczna strona społeczności (PL/EN) z animacjami, galerią i podziałem na strefę użytkownika i dewelopera. OnerOS Web to strona systemu operacyjnego z integracją GitHub, web preview i systemem pobierania wersji. W archiwum znajdują się starsze projekty: Odliczamydo.pl, Chestdrop (system losowań CS:GO-style), MVList (lista serwerów Minecraft z weryfikacją), OneMyList (aplikacja notatek z edytorem CKEditor 5), Powrót RoxMb (strona wydarzenia z YouTube w tle), Countdown Web (liczniki czasu), Reqqel (strona bio z linkami muzycznymi) oraz Clouds Network (strona hostingu VPS). Projekty pokazują rozwój od prostych stron HTML/CSS/JS po zaawansowane aplikacje React i Next.js.</p>
            </div>
            <div>
              <h3>Współpraca – Open Source i Społeczność</h3>
              <p>Kamil B. współpracuje z kilkoma organizacjami open source. Klubuntu to główny projekt społecznościowy, skupiający się na tworzeniu otwartego oprogramowania. Puri Devs to zespół deweloperów pracujących nad różnorodnymi projektami webowymi. iTVT to interaktywna platforma telewizyjna z ekosystemem aplikacji na web, mobile i desktop, rozwijana w modelu open source na GitHub. Wszystkie organizacje mają profile na GitHub, gdzie publikowany jest kod źródłowy projektów.</p>
            </div>
            <div>
              <h3>Wsparcie i Kontakt</h3>
              <p>Można skontaktować się z Kamilem poprzez serwer Discord, gdzie aktywnie uczestniczy w społeczności deweloperskiej, lub wysyłając e-mail. Projekt można również wesprzeć poprzez Patreon, co pomaga w dalszym rozwoju open source i tworzeniu nowych narzędzi dla społeczności.</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3>About Me – Kamil B. (Klubuntu)</h3>
              <p>Kamil B. is a frontend developer from Poland specializing in building modern websites and web applications. He uses React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5 and CSS3. He builds fast, efficient, responsive sites with a focus on SEO optimization, Lighthouse performance, and long-term code maintainability. The portfolio includes commercial and open source projects including Ba-Car – a website for a car detailing company, Klubuntu | Two Sides – a bilingual community site, and OnerOS Web – an operating system project website. Kamil is 20 years old and has been developing his programming skills for years, starting with HTML and CSS, through JavaScript and PHP, to modern frameworks like React and Next.js. In his free time he experiments with Rust and Python, building backend tools and automation scripts.</p>
            </div>
            <div>
              <h3>Projects – Web Developer Portfolio</h3>
              <p>The portfolio features three main frontend projects and an archive of older work. Ba-Car is a modern website for a car detailing company, built with Astro and CSS, achieving high Lighthouse scores (Performance 98, Accessibility 99, Best Practices 100, SEO 100) and a 14% CTR within 24 hours of publication. Klubuntu | Two Sides is a bilingual community site (PL/EN) with animations, gallery, and user/developer zone separation. OnerOS Web is an operating system project website with GitHub integration, web preview, and version download system. The archive contains older projects: Odliczamydo.pl, Chestdrop (CS:GO-style draw system), MVList (Minecraft server verification list), OneMyList (notes app with CKEditor 5), Powrót RoxMb (event page with YouTube background), Countdown Web (countdown timers), Reqqel (bio page with music links), and Clouds Network (VPS hosting page). The projects show progression from simple HTML/CSS/JS pages to advanced React and Next.js applications.</p>
            </div>
            <div>
              <h3>Collaboration – Open Source and Community</h3>
              <p>Kamil B. collaborates with several open source organizations. Klubuntu is the main community project focused on creating open source software. Puri Devs is a development team working on various web projects. iTVT is an interactive TV platform with a web, mobile, and desktop application ecosystem, developed as open source on GitHub. All organizations have GitHub profiles where project source code is published.</p>
            </div>
            <div>
              <h3>Support and Contact</h3>
              <p>You can contact Kamil through the Discord server where he actively participates in the developer community, or by sending an email. The project can also be supported via Patreon, which helps further open source development and creating new tools for the community.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
