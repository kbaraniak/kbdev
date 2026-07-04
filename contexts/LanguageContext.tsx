"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from 'react';
import enUS from '../json/lang/en_US.json';
import plPL from '../json/lang/pl_PL.json';

type Language = 'en_US' | 'pl_PL';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof enUS;
  noAnim: boolean;
}

const translations = {
  en_US: enUS,
  pl_PL: plPL,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pl_PL';
  const path = window.location.pathname.replace(/^\/en/, '').replace(/^\/noanim/, '').replace(/^\//, '');
  if (path.startsWith('en')) return 'en_US';
  if (window.location.pathname === '/' || window.location.pathname === '/noanim' || window.location.pathname === '') return 'pl_PL';
  const stored = localStorage.getItem('language') as Language;
  if (stored === 'en_US' || stored === 'pl_PL') return stored;
  const browserLang = navigator.language || '';
  return browserLang.startsWith('pl') ? 'pl_PL' : 'en_US';
}

function isNoAnim(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.pathname.startsWith('/noanim') || window.location.pathname.startsWith('/en/noanim');
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pl_PL');
  const [noAnim, setNoAnim] = useState(false);
  const lastSwitch = useRef(0);

  useEffect(() => {
    setLanguageState(getInitialLanguage());
    setNoAnim(isNoAnim());
  }, []);

  useEffect(() => {
    const htmlLang = language === 'pl_PL' ? 'pl' : 'en';
    document.documentElement.lang = htmlLang;
  }, [language]);

  useEffect(() => {
    if (noAnim) {
      document.body.classList.add('no-animations');
    } else {
      document.body.classList.remove('no-animations');
    }
  }, [noAnim]);

  const setLanguage = useCallback((lang: Language) => {
    const now = Date.now();
    if (now - lastSwitch.current < 700) return;
    lastSwitch.current = now;
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    const na = isNoAnim();
    const prefix = na ? '/noanim' : '';
    const url = lang === 'pl_PL' ? (prefix || '/') : `${prefix}/en`;
    window.history.replaceState(null, '', url);
    if (!na) {
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], noAnim }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
