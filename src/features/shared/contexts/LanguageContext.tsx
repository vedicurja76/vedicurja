'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { dict, type Language } from '@/lib/i18n/dict';

export type { Language };

/* Legacy key aliases from the old two-dictionary system (header.*, hero.*) */
const LEGACY_ALIASES: Record<string, string> = {
  'header.home': 'nav.home',
  'header.about': 'nav.about',
  'header.services': 'nav.services',
  'header.freeAITools': 'nav.freeTools',
  'header.bookings': 'nav.bookings',
  'header.blogs': 'nav.blogs',
  'header.collaborate': 'nav.collaborate',
  'header.testimonials': 'nav.testimonials',
  'header.consult': 'nav.consult',
  'hero.subtitle': 'footer.tagline',
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  ready: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') setLanguageState(saved);
    } catch {
      /* storage unavailable */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === 'hi' ? 'hi' : 'en';
    root.setAttribute('data-lang', language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = dict[key] ?? dict[LEGACY_ALIASES[key] ?? ''];
      if (!entry) return key;
      return language === 'hi' && entry.hi ? entry.hi : entry.en;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
