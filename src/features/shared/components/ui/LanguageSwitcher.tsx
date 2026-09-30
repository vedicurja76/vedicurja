'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/features/shared/contexts/LanguageContext';

const languages: { code: Language; name: string; native: string; flag: string }[] = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, ready } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleChange = useCallback((lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  }, [setLanguage]);

  if (!mounted || !ready) return <div className="w-10 h-10" />;

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative z-50">
      <motion.button
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Change language"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--color-bg-glass)] backdrop-blur-md border border-prakash-gold/30 text-[var(--color-text-primary)] hover:bg-prakash-gold/10 hover:border-prakash-gold/60 shadow-[0_2px_10px_rgba(26,42,58,0.06)] transition"
      >
        <span className="text-lg leading-none">{currentLang.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLang.native}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[10px] opacity-70">▼</motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute top-full right-0 mt-2 bg-[var(--color-bg-elevated)] backdrop-blur-md rounded-2xl shadow-xl border border-prakash-gold/30 overflow-hidden min-w-[190px]"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-prakash-gold/10 transition ${
                  language === lang.code ? 'bg-prakash-gold/20' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-[var(--color-text-primary)]">{lang.native}</span>
                  <span className="block text-[10px] text-[var(--color-text-muted)]">{lang.name}</span>
                </span>
                {language === lang.code && <span className="text-prakash-gold text-sm">✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
