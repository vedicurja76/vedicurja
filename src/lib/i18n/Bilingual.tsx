'use client';

import { useLanguage } from '@/features/shared/contexts/LanguageContext';

/**
 * Inline bilingual text — renders the active language.
 * Usage: <Bilingual en="Book Now" hi="अभी बुक करें" className="..." />
 */
export default function Bilingual({
  en,
  hi,
  className,
}: {
  en: string;
  hi?: string;
  className?: string;
}) {
  const { language } = useLanguage();
  return <span className={className}>{language === 'hi' && hi ? hi : en}</span>;
}

/** Hook variant for composing strings: pick(en, hi) returns the active language string. */
export function useBi() {
  const { language } = useLanguage();
  return (en: string, hi?: string): string => (language === 'hi' && hi ? hi : en);
}
