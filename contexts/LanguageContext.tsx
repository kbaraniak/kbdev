"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en_US';
  
  // Check localStorage first
  const stored = localStorage.getItem('language') as Language;
  if (stored && (stored === 'en_US' || stored === 'pl_PL')) {
    return stored;
  }
  
  // Detect browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // If Polish or from Poland region, use Polish
  if (browserLang.startsWith('pl') || browserLang.includes('PL')) {
    return 'pl_PL';
  }
  
  // Default to English
  return 'en_US';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en_US';
    return detectBrowserLanguage();
  });

  useEffect(() => {
    const detected = detectBrowserLanguage();
    if (detected !== language) {
      setLanguageState(detected);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Trigger fade animation
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    }
  };

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
