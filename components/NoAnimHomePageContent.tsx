"use client"

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProjectCard from "./Projects/ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";

export default function NoAnimHomePageContent() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const handlePL = useCallback(() => setLanguage('pl_PL'), [setLanguage]);
  const handleEN = useCallback(() => setLanguage('en_US'), [setLanguage]);
  const handleLogo = useCallback(() => {
    const url = language === 'pl_PL' ? '/noanim' : '/en/noanim';
    router.push(url);
  }, [language, router]);

  return (
    <div className="font-sans">
      <header className="relative z-[100000] flex flex-wrap justify-center items-center gap-4 md:gap-8 py-5 px-4">
        <h1 onClick={handleLogo} className="text-3xl md:text-4xl font-bold text-white cursor-pointer">kbdev</h1>
        <NavMenu />
        <div 
          className="flex items-center gap-1 p-1 rounded-lg"
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
        {/* About Me */}
        <section className="mt-3 flex flex-col justify-center items-center" id="aboutme">
          <h2 className="text-4xl font-bold">{t.aboutMe.title}</h2>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-6 p-6 max-md:mx-4 rounded-lg max-w-4xl w-full" style={{background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div className="w-[125px] h-[125px] min-w-[125px] md:w-[175px] md:h-[175px] md:min-w-[175px] rounded-full overflow-hidden bg-gray-500 flex items-center justify-center">
              <img src="https://www.gravatar.com/avatar/4a7d1ed414474e4033ac29ccb8653d9b?s=200&d=identicon" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="max-md:text-center text-xl leading-relaxed">
              <p>{t.aboutMe.greeting}</p>
              <p>{t.aboutMe.age}</p>
              <p>{t.aboutMe.passion}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-base text-gray-400 max-md:text-center">
            <span className="flex items-center gap-1.5 max-md:flex-col max-md:items-center max-md:max-w-[310px]">
              <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {t.aboutMe.stats}
            </span>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-22 grid gap-10 items-center" id="projects">
          <h2 className="text-4xl font-bold text-center">{t.projects.title}</h2>
        </section>

        {/* Websites Frontend */}
        <section className="mt-8 grid gap-10 items-center" id="websites-frontend">
          <h3 className="text-2xl text-center">{t.projects.subtitle}</h3>
          <p className="text-sm text-gray-500 text-center mt-1">{t.projects.clickHint}</p>
          <div className="w-full flex flex-col items-center gap-3">
            <ProjectCard id="Ba-Car" website_url="https://ba-car.pl" stack={["html", "css", "astro"] as any} />
            <ProjectCard id="Klubuntu | Two Sides" website_url="https://klubuntu.eu.org" source_url="https://github.com/Klubuntu/klubuntu.social" stack={["html", "css", "js"] as any} />
            <ProjectCard id="OnerOS Web" website_url="https://oneros.in" source_url="https://github.com/orgs/OnerOS-Project/repositories" stack={["html", "css", "js", "react"] as any} />
          </div>
        </section>

        {/* Collaboration */}
        <section className="mt-22 grid gap-10 items-center" id="collaboration">
          <h2 className="text-4xl font-bold text-center">{t.collaboration.title}</h2>
          <div className="flex min-w-[350px] max-md:flex-col items-center justify-center gap-4 md:gap-6 px-4">
            {[{
              href: "https://github.com/klubuntu", color: "rgb(185, 28, 28)",
              name: t.collaboration.klubuntu.name, desc: t.collaboration.klubuntu.description
            }, {
              href: "https://github.com/Puri-Devs", color: "rgb(29, 78, 216)",
              name: t.collaboration.puriDevs.name, desc: t.collaboration.puriDevs.description
            }, {
              href: "https://github.com/open-itvt", color: "#00f0ff",
              name: t.collaboration.itvt.name, desc: t.collaboration.itvt.description
            }].map((item, i) => (
              <a key={i} href={item.href} className="block w-full md:w-auto">
                <div className="rounded-lg p-5 flex items-center gap-5 transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderLeft: `4px solid ${item.color}`, backdropFilter: 'blur(10px)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" className="flex-shrink-0" style={{color: item.color}}>
                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                  </svg>
                  <div className="flex-1">
                    <p className="text-2xl font-semibold text-white">{item.name}</p>
                    <p className="text-base text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="mt-22 mb-10 min-w-[350px] grid gap-10 items-center" id="support">
          <h2 className="text-4xl font-bold text-center">
            {t.support.title}
          </h2>
          <div className="flex max-md:flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <div className="w-full md:w-auto">
              <a href="https://discord.gg/meKqTdUDDm" className="block">
                <div className="rounded-lg p-5 flex items-center gap-5 hover:scale-105 transition-all duration-300" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderLeft: '4px solid #5865f2', backdropFilter: 'blur(10px)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" style={{color: '#5865f2'}} className="flex-shrink-0">
                    <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-2xl font-semibold text-white">{t.support.discord.name}</p>
                    <p className="text-base text-gray-300">{t.support.discord.description}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-auto">
              <a href="mailto:kbdev@duck.com" className="block">
                <div className="rounded-lg p-5 flex items-center gap-5 hover:scale-105 transition-all duration-300" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderLeft: '4px solid rgb(55, 65, 81)', backdropFilter: 'blur(10px)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" className="text-gray-500 flex-shrink-0">
                    <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-2xl font-semibold text-white">{t.support.email.name}</p>
                    <p className="text-base text-gray-300">{t.support.email.description}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-auto">
              <a href="https://patreon.com/Klubuntu" className="block">
                <div className="rounded-lg p-5 flex items-center gap-5 hover:scale-105 transition-all duration-300" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderLeft: '4px solid rgb(127, 29, 29)', backdropFilter: 'blur(10px)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" className="text-red-900 flex-shrink-0">
                    <path fill="currentColor" d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2z"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-2xl font-semibold text-white">{t.support.patreon.name}</p>
                    <p className="text-base text-gray-300">{t.support.patreon.description}</p>
                  </div>
                </div>
              </a> 
            </div>
          </div>
        </section>
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
