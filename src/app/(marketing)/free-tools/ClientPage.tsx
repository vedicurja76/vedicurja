'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedStatCard3D from '@/features/tools/shared/components/AnimatedStatCard3D';
import PremiumComparison3D from '@/features/tools/shared/components/PremiumComparison3D';
import KundaliLuxurySVG from '@/features/tools/shared/components/KundaliLuxurySVG';
import HoroscopeLuxurySVG from '@/features/tools/shared/components/HoroscopeLuxurySVG';
import NameSuggestionLuxurySVG from '@/features/tools/shared/components/NameSuggestionLuxurySVG';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { useBi } from '@/lib/i18n/Bilingual';
import { FreeTool } from '@/types/admin';

// ----------------------------------------------------------------------
// Hero Section (unchanged)
// ----------------------------------------------------------------------
function HeroSection() {
  const bi = useBi();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);
  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-accent-red)]/40 bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.07),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.05),transparent_50%)]" />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">{bi('Free Vedic Tools', 'निःशुल्क वैदिक उपकरण')}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Sacred Tools,', 'पवित्र उपकरण,')}</span><br />
          <span className="text-prakash-gold">{bi('Modern Precision', 'आधुनिक सटीकता')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">{bi('Free, accurate, and trusted by seekers across 50+ countries.', 'निःशुल्क, सटीक — 50+ देशों के साधकों का भरोसा।')}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('tools-grid')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all w-full sm:w-auto text-lg">{bi('Explore Tools', 'उपकरण देखें')}</button>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full w-full sm:w-auto text-center text-lg font-medium">{bi('Consult Acharya', 'आचार्य से परामर्श करें')}</Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// Featured: Free AI Astrology (hardcoded, Supabase-independent)
// ----------------------------------------------------------------------
function AiAstrologyFeature() {
  const bi = useBi();
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/50 via-cyan-300/30 to-sacred-saffron/40 shadow-[0_25px_60px_rgba(200,138,93,0.25)]">
          <div className="relative rounded-[38px] bg-gradient-to-br from-[var(--color-bg-glass)] via-[var(--color-bg-glass-hover)] to-[var(--color-bg-glass)] backdrop-blur-xl p-8 sm:p-12 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center overflow-hidden">
            <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-prakash-gold/20 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-prakash-gold/15 text-prakash-gold text-xs font-bold uppercase tracking-wider mb-4">{bi('★ New · Most Popular', '★ नया · सर्वाधिक लोकप्रिय')}</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-nidra-indigo font-bold mb-3">{bi('Free AI Astrology & Kundli Reading', 'निःशुल्क AI ज्योतिष व कुंडली पठन')}</h3>
              <p className="text-nidra-indigo/70 leading-relaxed mb-6">{bi('Instant Vedic Surya-rashi, Mulank & Bhagyank numerology, lucky numbers, gemstone, remedies and a personalised AI reading — from just your name and date of birth. No login, no payment.', 'अपने नाम व जन्म तिथि से तत्काल वैदिक सूर्य राशि, मूलांक व भाग्यांक अंकशास्त्र, शुभ अंक, रत्न, उपाय व व्यक्तिगत AI पठन। बिना लॉगिन, बिना भुगतान।')}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[bi('Surya Rashi', 'सूर्य राशि'), bi('Numerology', 'अंकशास्त्र'), bi('Lucky Numbers', 'शुभ अंक'), bi('Gemstone', 'रत्न'), bi('Remedies', 'उपाय')].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-vastu-stone/40 border border-prakash-gold/20 text-xs text-nidra-indigo/70">{t}</span>
                ))}
              </div>
              <Link href="/free-tools/ai-astrology" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-[#1a1a2e] rounded-full font-bold shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Get Free Reading →', 'निःशुल्क पठन पाएँ →')}</Link>
            </div>
            <div className="relative z-10 hidden md:flex items-center justify-center">
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-44 h-44 rounded-full bg-gradient-to-br from-[var(--color-hero-1)] to-[var(--color-hero-2)] grid place-items-center text-7xl shadow-[0_0_60px_rgba(232,185,96,0.5)] border border-prakash-gold/40">
                <span className="bg-gradient-to-br from-cyan-200 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">✦</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// ToolsGridSection – simple, working Link cards
// ----------------------------------------------------------------------
function ToolsGridSection() {
  const bi = useBi();
  const { items: tools } = useRealtimeContent<FreeTool>('free_tools', 'order_index');
  // Always show the two free tools even without Supabase data (static export).
  type Card = { id: string; tool_key: 'daily_horoscope' | 'name_suggestion'; title: string; titleHi: string; description: string; descHi: string; href: string };
  const staticCards: Card[] = [
    { id: 'static-daily', tool_key: 'daily_horoscope', title: 'Daily Horoscope', titleHi: 'दैनिक राशिफल', description: 'Today’s Vedic rashi phal for all 12 signs — love, career, health, finance, lucky colour, number and a simple remedy.', descHi: 'सभी 12 राशियों का आज का वैदिक राशिफल — प्रेम, करियर, स्वास्थ्य, धन, शुभ रंग, अंक व सरल उपाय।', href: '/free-tools/daily-horoscope' },
    { id: 'static-name', tool_key: 'name_suggestion', title: 'Name Suggestion', titleHi: 'नाम सुझाव', description: 'Find the Janma Nakshatra and pada from birth date & time, then get auspicious boy & girl names on the lucky syllable.', descHi: 'जन्म तिथि व समय से जन्म नक्षत्र व पाद ज्ञात करें, फिर शुभ अक्षर पर बालक व बालिका के मंगल नाम पाएँ।', href: '/free-tools/name-suggestion' },
  ];
  const covered = new Set(staticCards.map(c => c.tool_key));
  const extra = tools
    .filter(t => t.is_published && !covered.has(t.tool_key as 'daily_horoscope'))
    .map(t => ({
      id: t.id,
      tool_key: (t.tool_key === 'daily_horoscope' ? 'daily_horoscope' : 'name_suggestion') as 'daily_horoscope' | 'name_suggestion',
      title: t.title,
      titleHi: t.title,
      description: t.description,
      descHi: t.description,
      href: t.tool_key === 'daily_horoscope' ? '/free-tools/daily-horoscope' : '/free-tools/name-suggestion',
    }));
  const cards: Card[] = [...staticCards, ...extra];
  return (
    <section id="tools-grid" className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/20 to-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('The Three Pillars', 'तीन स्तंभ')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Choose Your Path to', 'अपनी राह चुनें:')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Vedic Wisdom', 'वैदिक ज्ञान')}</span></h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">{bi('All free, all powerful — powered by authentic Vedic algorithms.', 'सभी निःशुल्क, सभी शक्तिशाली — प्रामाणिक वैदिक एल्गोरिदम से संचालित।')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
          {cards.map((tool) => {
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="group relative w-full max-w-sm mx-auto"
              >
                <Link href={tool.href} className="block w-full">
                  <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.3)] transition-shadow duration-500">
                    <div className="relative rounded-[38px] bg-gradient-to-br from-[var(--color-bg-glass)] via-[var(--color-bg-glass-hover)] to-[var(--color-bg-glass)] backdrop-blur-xl p-8 h-[460px] flex flex-col items-center justify-center text-center overflow-hidden">
                      <div className="mb-6 drop-shadow-[0_0_20px_rgba(255,153,51,0.5)]">
                        {tool.tool_key === 'daily_horoscope' ? <HoroscopeLuxurySVG /> : <NameSuggestionLuxurySVG />}
                      </div>
                      <h3 className="font-serif text-3xl text-nidra-indigo font-bold mb-3">{bi(tool.title, tool.titleHi)}</h3>
                      <p className="text-nidra-indigo/70 text-sm leading-relaxed mb-6">{bi(tool.description, tool.descHi)}</p>
                      <div className="mt-auto inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg">
                        {bi('Try Now', 'अभी आज़माएं')}
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Accuracy Section (unchanged)
// ----------------------------------------------------------------------
function AccuracySection() {
  const bi = useBi();
  const stats = [
    { label: 'Kundali Accuracy', labelHi: 'कुंडली सटीकता', value: 92, suffix: '%', desc: 'Match with professional Jyotish software', descHi: 'पेशेवर ज्योतिष सॉफ्टवेयर से पूरी तरह मेल', color: '#FF9933' },
    { label: 'Vastu Scan Precision', labelHi: 'वास्तु स्कैन सटीकता', value: 500, suffix: '+', desc: 'Validated against real floor plans', descHi: 'वास्तविक फ्लोर प्लान्स से प्रमाणित', color: '#C10000' },
    { label: 'Name Syllable Source', labelHi: 'नाम अक्षर स्रोत', value: 100, suffix: '%', desc: 'Direct from Brihat Parashara Hora Shastra', descHi: 'बृहत् पराशर होरा शास्त्र से सीधा ज्ञान', color: '#E8B960' },
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Rooted in Authenticity', 'प्रामाणिकता पर आधारित')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Our Tools Are Built on', 'हमारे उपकरण बना हैं')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Genuine Vedic Calculations', 'प्रामाणिक वैदिक गणनाओं पर')}</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, i) => (<AnimatedStatCard3D key={i} index={i} label={bi(stat.label, stat.labelHi)} value={stat.value} suffix={stat.suffix} description={bi(stat.desc, stat.descHi)} icon="◈" color={stat.color} />))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Final CTA Section (unchanged)
// ----------------------------------------------------------------------
function FinalCTASection() {
  const bi = useBi();
  return (
    <motion.section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-accent-red)]/40 bg-[length:400%_400%] animate-gradient-loop" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <div className="rounded-[38px] bg-[var(--color-bg-glass)] backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-[var(--color-border-soft)] shadow-inner">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-text-primary)] mb-4">{bi('Ready for Deeper Insight?', 'क्या आपको और गहरा अंतर्दृष्टि चाहिए?')}</h2>
              <p className="text-[var(--color-text-primary)]/70 text-base sm:text-lg max-w-xl mx-auto mb-10">{bi('Book a private consultation with AstroVastu Expert K.K. Nagaich for personalised guidance.', 'व्यक्तिगत मार्गदर्शन के लिए एस्ट्रोवास्तु एक्सपर्ट के.के. नागाइच से निजी परामर्श बुक करें।')}</p>
              <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Schedule Now →', 'अभी शेड्यूल करें →')}</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// Main Page
// ----------------------------------------------------------------------
export default function FreeToolsPage() {
  return (
    <>
      <SoundController />
      <Header />
      
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <AiAstrologyFeature />
          <ToolsGridSection />
          <AccuracySection />
          <PremiumComparison3D />
          <FinalCTASection />
        </main>
      
      <style>{`
        @keyframes gradient-loop { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
        .animate-gradient-loop{animation:gradient-loop 12s ease infinite}
      `}</style>
    </>
  );
}
