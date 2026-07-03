"use client"

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useLanguage } from "../contexts/LanguageContext";

const projectUrls: Record<string, { website_url?: string; source_url?: string }> = {
  bacar: { website_url: 'https://ba-car.pl' },
  klubuntu: { website_url: 'https://klubuntu.eu.org', source_url: 'https://github.com/Klubuntu/klubuntu.social' },
  oneros: { website_url: 'https://oneros.in', source_url: 'https://github.com/orgs/OnerOS-Project/repositories' },
  itvt: { website_url: 'https://itvt.xyz', source_url: 'https://github.com/open-itvt' },
  odliczamydo: { website_url: 'https://web.archive.org/web/20251110202941/https://odliczamydo.pl/' },
  chestdrop: { website_url: 'https://chestdrop.online' },
  mvlist: { website_url: 'https://archived-projects.kbdev.run/mvlist', source_url: 'https://github.com/klubuntu-backup1/mvlist' },
  onemylist: { website_url: 'https://archived-projects.kbdev.run/one-my-list' },
  'powrot-roxmb': { website_url: 'https://archived-projects.kbdev.run/events/powrotroxmb', source_url: 'https://github.com/klubuntu-backup1/events-powrotroxmb' },
  'countdown-web': { website_url: 'https://archived-projects.kbdev.run/events/countdown', source_url: 'https://github.com/klubuntu-backup1/events-odometer' },
  'reqqel-music': { website_url: 'https://archived-projects.kbdev.run/orders/reqqel-music' },
  'clouds-network': { website_url: 'https://archived-projects.kbdev.run/puri-devs/clouds-network', source_url: 'https://github.com/Puri-Devs/clouds-network-site' },
};

const archivedSlugs = new Set([
  'odliczamydo', 'chestdrop', 'mvlist', 'onemylist',
  'powrot-roxmb', 'countdown-web', 'reqqel-music', 'clouds-network',
]);

export default function CaseStudyContent({ slug }: { slug: string }) {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const cs = t.caseStudies[slug as keyof typeof t.caseStudies];

  const handlePL = useCallback(() => setLanguage('pl_PL'), [setLanguage]);
  const handleEN = useCallback(() => setLanguage('en_US'), [setLanguage]);
  const handleLogo = useCallback(() => {
    router.push(language === 'pl_PL' ? '/' : '/en');
  }, [language, router]);
  const handleBack = useCallback(() => {
    const base = language === 'pl_PL' ? '' : '/en';
    if (archivedSlugs.has(slug)) {
      router.push(`${base}/archive`);
    } else {
      router.push(base || '/');
    }
  }, [language, router, slug]);

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

      <main className="mt-16 px-4 max-w-6xl mx-auto">
        <section>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {cs.title}
            </h1>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              {projectUrls[slug]?.website_url && (
                <button
                  onClick={() => window.open(projectUrls[slug].website_url, '_blank')}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg smooth-transition flex items-center gap-2 cursor-pointer text-base"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Open Website
                </button>
              )}
              {projectUrls[slug]?.source_url && (
                <button
                  onClick={() => window.open(projectUrls[slug].source_url, '_blank')}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg smooth-transition flex items-center gap-2 cursor-pointer text-base"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Show GitHub
                </button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div
              className="rounded-xl p-6 md:p-8"
              style={{
                background: 'rgba(38, 38, 38, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">{cs.challenges}</h2>
              </div>
              <ul className="space-y-4">
                {cs.challengesList.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span className="text-gray-300 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-6 md:p-8"
              style={{
                background: 'rgba(38, 38, 38, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(250, 204, 21, 0.2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">{cs.achievements}</h2>
              </div>
              <ul className="space-y-4">
                {cs.achievementsList.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span className="text-gray-300 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <button
              onClick={handleBack}
              className="text-lg text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none"
              type="button"
            >
              {cs.backToProjects}
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
