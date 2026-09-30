'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';
import { useNavigation } from '@/features/shared/contexts/NavigationContext';
import '@/styles/mobile-menu.css';

const servicesDropdown = [
  { key: 'svc.residential', href: '/services/residential' },
  { key: 'svc.commercial', href: '/services/commercial' },
  { key: 'svc.industrial', href: '/services/industrial' },
  { key: 'svc.land', href: '/services/land' },
  { key: 'svc.kundali', href: '/services/kundali' },
  { key: 'svc.numerology', href: '/services/numerology-namakaran' },
  { key: 'svc.virtual', href: '/bookings' },
];
const freeToolsDropdown = [
  { key: 'tool.horoscope', href: '/free-tools/daily-horoscope' },
  { key: 'tool.name', href: '/free-tools/name-suggestion' },
];
const insightsDropdown = [
  { key: 'blog.all', href: '/insights' },
  { key: 'blog.science', href: '/insights/science-of-vastu' },
  { key: 'blog.numerology', href: '/insights/numerology-beginners' },
  { key: 'blog.remedies', href: '/insights/remedies-without-demolition' },
  { key: 'blog.entrance', href: '/insights/vastu-main-entrance-door' },
  { key: 'blog.kitchen', href: '/insights/kitchen-vastu-health-wealth' },
  { key: 'blog.bedroom', href: '/insights/bedroom-vastu-marital-harmony' },
  { key: 'blog.office', href: '/insights/commercial-vastu-office-layout' },
  { key: 'blog.geopathic', href: '/insights/geopathic-stress-hidden-enemy' },
  { key: 'blog.nakshatra', href: '/insights/nakshatra-name-suggestions-guide' },
  { key: 'blog.panch', href: '/insights/panch-mahabhutas-five-elements' },
  { key: 'blog.spiritual', href: '/insights/spiritual-vastu-pooja-room-design' },
];

function DrawerItem({ label, href, dropdown, onClose }: {
  label: string; href: string; dropdown?: { key: string; href: string }[]; onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { startNavigation } = useNavigation();
  const { t } = useLanguage();
  const handleClick = (e: React.MouseEvent) => {
    if (dropdown) { e.preventDefault(); setOpen(!open); return; }
    startNavigation(); onClose();
  };
  return (
    <div className="border-b border-[var(--color-border-soft)] last:border-0">
      <Link href={href} onClick={handleClick}
        className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors group">
        <span className="font-medium text-base tracking-wide">{label}</span>
        {dropdown && (
          <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
            className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
          </motion.svg>
        )}
      </Link>
      <AnimatePresence>
        {open && dropdown && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden bg-white/5">
            {dropdown.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => { startNavigation(); onClose(); }}
                className="block px-10 py-3 text-sm text-white/80 hover:text-prakash-gold hover:bg-white/10 transition-colors">
                {t(item.key)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { startNavigation } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (href?: string) => { startNavigation(); setMenuOpen(false); };

  return (
    <>
      <style>{`
        .header-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: all 0.3s ease;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }
        /* Resting bar – theme-aware soft gradient */
        .header-bar.default {
          background: linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-secondary) 100%);
          border-bottom: 1px solid var(--color-border-soft);
        }
        .dark .header-logo {
          filter: invert(0.92) hue-rotate(180deg);
        }
        /* On scroll – smoky translucent with blur */
        .header-bar.scrolled {
          background: rgba(20, 18, 28, 0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          border-bottom: 1px solid rgba(232,185,96,0.25);
        }
        .header-bar::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #E8B960, #FF9933, #E8B960, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .header-bar.scrolled::after {
          opacity: 0.4;
        }
        .header-spacer { height: 80px; }
        .menu-btn {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(0,0,0,0.04);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .header-bar.scrolled .menu-btn {
          background: rgba(232,185,96,0.12);
          border: 1px solid rgba(232,185,96,0.3);
        }
        .menu-btn:hover {
          background: rgba(232,185,96,0.2);
          transform: scale(1.03);
        }
        .menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
          position: relative;
        }
        .header-bar.scrolled .menu-btn span {
          background: #E8B960;
        }
        .menu-btn span::before,
        .menu-btn span::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: inherit;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .menu-btn span::before { top: -8px; }
        .menu-btn span::after { top: 8px; }
        .side-overlay {
          position: fixed; inset: 0; z-index: 90;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
        }
        .side-drawer {
          position: fixed; top: 0; right: 0; z-index: 95;
          width: 420px; max-width: 90vw; height: 100vh;
          background: linear-gradient(180deg, #1A1A2E 0%, #0D0D15 100%);
          backdrop-filter: blur(24px);
          border-left: 1px solid rgba(232,185,96,0.3);
          box-shadow: -10px 0 50px rgba(0,0,0,0.4);
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          display: flex; flex-direction: column;
        }
        .side-drawer::-webkit-scrollbar { width: 8px; }
        .side-drawer::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 4px; }
        .side-drawer::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #E8B960, #C88A5D); border-radius: 4px; }
        .side-drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid rgba(232,185,96,0.2);
          flex-shrink: 0;
        }
        .close-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(232,185,96,0.1);
          border: 1px solid rgba(232,185,96,0.3);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #E8B960;
        }
        .close-btn:hover {
          background: rgba(232,185,96,0.25);
          transform: rotate(90deg);
        }
        .drawer-standalone {
          border-bottom: 1px solid rgba(232,185,96,0.1);
        }
        .drawer-standalone a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          color: #F5F0E6;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .drawer-standalone a:hover {
          background: rgba(232,185,96,0.1);
          color: #E8B960;
        }
        .drawer-standalone .badge {
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 20px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .drawer-footer {
          padding: 24px;
          border-top: 1px solid rgba(232,185,96,0.2);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .header-bar { height: 64px; padding: 0 16px; }
          .header-spacer { height: 64px; }
          .side-drawer { width: 100vw; max-width: 100vw; }
        }
      `}</style>

      <header className={`header-bar ${scrolled ? 'scrolled' : 'default'}`}>
        {/* Left: Language Switcher */}
        <div className="flex items-center flex-shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Center: Bigger Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center" onClick={() => handleNav()}>
          {!imgError ? (
            <Image
              src="/logo/logo.webp"
              alt="AstroVastu Expert"
              width={220}
              height={55}
              className="header-logo h-12 sm:h-14 w-auto object-contain"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-serif text-3xl sm:text-4xl text-nidra-indigo font-bold tracking-wide drop-shadow-lg">
              AstroVastu<span className="text-prakash-gold">.</span>
            </span>
          )}
        </Link>

        {/* Right: Theme Toggle + Hamburger Menu */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(true)} className="menu-btn" aria-label={t('header.openMenu')}>
            <span />
          </button>
        </div>
      </header>

      <div className="header-spacer" />

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="side-overlay"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.23,1,0.32,1] }}
              data-lenis-prevent
              className="side-drawer"
            >
              <div className="side-drawer-header">
                {!imgError ? (
                  <Image src="/logo/logo.webp" alt="AstroVastu Expert" width={160} height={40} className="h-8 w-auto object-contain" onError={() => setImgError(true)} />
                ) : (
                  <span className="font-serif text-lg text-white font-bold">AstroVastu<span className="text-yellow-400">.</span></span>
                )}
                <button onClick={() => setMenuOpen(false)} className="close-btn">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 py-2">
                <DrawerItem label={t('nav.home')} href="/" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.about')} href="/about" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.services')} href="/services" dropdown={servicesDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.freeTools')} href="/free-tools" dropdown={freeToolsDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.bookings')} href="/bookings" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.blogs')} href="/insights" dropdown={insightsDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.testimonials')} href="/client-stories" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('nav.products')} href="/products" onClose={() => setMenuOpen(false)} />

                <div className="drawer-standalone">
                  <Link href="/services/remedies" onClick={() => handleNav()}>
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {t('drawer.remedies')}
                    <span className="badge bg-emerald-500/20 text-emerald-300 ml-auto">{t('drawer.remediesBadge')}</span>
                  </Link>
                </div>
                <div className="drawer-standalone">
                  <Link href="/services/rituals" onClick={() => handleNav()}>
                    <svg className="w-5 h-5 text-sacred-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    {t('drawer.rituals')}
                    <span className="badge bg-sacred-saffron/20 text-sacred-saffron ml-auto">{t('drawer.ritualsBadge')}</span>
                  </Link>
                </div>
              </nav>

              <div className="drawer-footer">
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="block w-full text-center py-4 rounded-full text-base uppercase tracking-wide font-bold text-white cta-btn">
                  {t('drawer.consultCta')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
