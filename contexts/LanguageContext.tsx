"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import enUS from '../json/lang/en_US.json';
import plPL from '../json/lang/pl_PL.json';

type Language = 'en_US' | 'pl_PL';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof enUS;
}

const translations = {
  en_US: enUS,
  pl_PL: plPL,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pl_PL';
  const path = window.location.pathname;
  if (path === '/en' || path.startsWith('/en/')) return 'en_US';
  if (path === '/' || path === '') return 'pl_PL';
  const stored = localStorage.getItem('language') as Language;
  if (stored === 'en_US' || stored === 'pl_PL') return stored;
  const browserLang = navigator.language || '';
  return browserLang.startsWith('pl') ? 'pl_PL' : 'en_US';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pl_PL');

  useEffect(() => {
    setLanguageState(getInitialLanguage());
  }, []);

  useEffect(() => {
    const htmlLang = language === 'pl_PL' ? 'pl' : 'en';
    document.documentElement.lang = htmlLang;
    document.documentElement.setAttribute('aria-language', language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    const url = lang === 'pl_PL' ? '/' : '/en';
    window.history.replaceState(null, '', url);
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
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
