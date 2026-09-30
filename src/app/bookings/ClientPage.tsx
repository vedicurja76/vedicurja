'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { BookingFlow } from '@/features/bookings/BookingFlow';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

export default function BookingsPage() {
  const { t } = useLanguage();
  const [params, setParams] = useState<{ service?: string; plan?: string }>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setParams({ service: q.get('service') || undefined, plan: q.get('plan') || undefined });
  }, []);

  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-gradient-to-b from-vastu-parchment via-[var(--color-bg-elevated)] to-vastu-parchment">
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-2)]/5 via-transparent to-prakash-gold/5" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sacred-saffron uppercase tracking-[0.3em] text-sm font-semibold"
              >
                {t('bk.heroEyebrow')}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-4xl sm:text-5xl md:text-7xl text-nidra-indigo mt-4 mb-6 leading-tight"
              >
                {t('bk.heroTitle1')}
                <br />
                <span className="text-prakash-gold">{t('bk.heroTitle2')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto mb-8"
              >
                {t('bk.heroSub')}
              </motion.p>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-12 border-y border-prakash-gold/20 bg-[var(--color-bg-glass)]">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
                {[
                  ['20+', t('bk.stat.experience')],
                  ['2 Lakh+', t('bk.stat.clients')],
                  ['50+', t('bk.stat.countries')],
                  ['4.9 ★', t('bk.stat.rating')],
                ].map(([num, label]) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-prakash-gold">{num}</div>
                    <div className="text-sm text-nidra-indigo/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-[var(--color-bg-elevated)]">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl text-center text-nidra-indigo mb-12">{t('bk.processTitle')}</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { step: '01', title: t('bk.proc1Title'), desc: t('bk.proc1Desc') },
                  { step: '02', title: t('bk.proc2Title'), desc: t('bk.proc2Desc') },
                  { step: '03', title: t('bk.proc3Title'), desc: t('bk.proc3Desc') },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-vastu-stone/20 border border-prakash-gold/20"
                  >
                    <div className="text-5xl font-bold text-prakash-gold mb-4">{item.step}</div>
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">{item.title}</h3>
                    <p className="text-nidra-indigo/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Flow */}
          <section className="py-20 bg-gradient-to-b from-[var(--color-bg-elevated)] to-vastu-parchment">
            <div className="container mx-auto px-4 max-w-5xl">
              <BookingFlow initialService={params.service} initialPlan={params.plan} />
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-[var(--color-hero-2)] to-[var(--color-hero-2)]/90 text-[var(--color-hero-fg)] text-center">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">{t('cta.stillQuestions')}</h2>
              <p className="text-[var(--color-hero-fg)]/80 max-w-2xl mx-auto mb-6">
                {t('misc.contactNote')}
              </p>
              <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-[#1A2A3A] font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition">
                {t('cta.contactNow')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}
