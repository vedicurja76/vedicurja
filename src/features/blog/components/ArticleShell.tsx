'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useBi } from '@/lib/i18n/Bilingual';

export interface ReferenceItem {
  id: number;
  label: string;
  labelHi: string;
  source: string;
  sourceHi?: string;
  url?: string;
}

export interface RelatedArticle {
  slug: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleShellProps {
  datePublished?: string;
  dateModified?: string;
  readingMinutes: number;
  category: string;
  categoryHi: string;
  quickAnswer: string;
  quickAnswerHi: string;
  toc: { id: string; label: string; labelHi: string }[];
  references: ReferenceItem[];
  faqs: FaqItem[];
  related: RelatedArticle[];
  ctaLabel?: string;
  ctaHref?: string;
  children: React.ReactNode;
}

export default function ArticleShell({
  datePublished = '2026-09-30',
  dateModified = '2026-10-06',
  readingMinutes,
  category,
  categoryHi,
  quickAnswer,
  quickAnswerHi,
  toc,
  references,
  faqs,
  related,
  ctaLabel,
  ctaHref = '/booking',
  children,
}: ArticleShellProps) {
  const bi = useBi();
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formattedPublished = new Date(datePublished).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  const formattedModified = new Date(dateModified).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      {/* Reading progress indicator */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
        style={{ background: 'transparent' }}
      >
        <div
          className="h-full bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Article dates strip */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-nidra-indigo/50 mb-6">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            {bi('Published', 'प्रकाशन')}: <time dateTime={datePublished}>{formattedPublished}</time>
          </span>
          <span className="w-1 h-1 bg-current rounded-full opacity-50" />
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            {bi('Last updated', 'अंतिम अद्यतन')}: <time dateTime={dateModified}>{formattedModified}</time>
          </span>
          <span className="w-1 h-1 bg-current rounded-full opacity-50" />
          <span>{bi(`${readingMinutes} min read`, `${readingMinutes} मिनट का पाठ`)}</span>
          <span className="w-1 h-1 bg-current rounded-full opacity-50" />
          <span>{bi(category, categoryHi)}</span>
        </div>
      </div>

      {/* Quick Answer — Featured Snippet target */}
      <aside
        aria-label={bi('Quick Answer', 'शीघ्र उत्तर')}
        className="container mx-auto px-4 sm:px-6 max-w-4xl mb-10"
      >
        <div
          className="relative overflow-hidden rounded-3xl border border-prakash-gold/30 bg-gradient-to-br from-prakash-gold/10 via-[var(--color-bg-elevated)] to-sacred-saffron/10 backdrop-blur-md p-6 sm:p-8"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-prakash-gold/10 rounded-full -translate-y-12 translate-x-12 blur-2xl" aria-hidden />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-prakash-gold animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-prakash-gold">{bi('Quick Answer', 'शीघ्र उत्तर')}</p>
            </div>
            <p className="font-serif text-lg sm:text-xl text-nidra-indigo leading-relaxed">
              {bi(quickAnswer, quickAnswerHi)}
            </p>
          </div>
        </div>
      </aside>

      {/* Desktop sticky Table of Contents */}
      {toc.length > 0 && (
        <nav
          aria-label={bi('Table of Contents', 'विषय-सूची')}
          className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 w-56 max-h-[60vh] overflow-y-auto"
        >
          <div className="p-4 rounded-2xl border border-prakash-gold/20 bg-[var(--color-bg-glass)] backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-prakash-gold mb-3">{bi('On This Page', 'इस पृष्ठ पर')}</p>
            <ol className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-xs text-nidra-indigo/70 hover:text-prakash-gold leading-snug transition-colors border-l-2 border-prakash-gold/20 hover:border-prakash-gold pl-2 -ml-2"
                  >
                    {bi(item.label, item.labelHi)}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Article body (existing content) */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {children}
      </div>

      {/* References */}
      {references.length > 0 && (
        <section
          aria-label={bi('References', 'संदर्भ')}
          className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16"
          id="references"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
            <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('References & Sources', 'संदर्भ एवं स्रोत')}</h2>
          </div>
          <ol className="space-y-3 text-sm">
            {references.map((ref) => (
              <li key={ref.id} id={`ref-${ref.id}`} className="flex gap-3 p-3 rounded-xl bg-[var(--color-bg-glass)] border border-prakash-gold/10">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-prakash-gold/15 text-prakash-gold font-bold text-xs flex items-center justify-center mt-0.5">{ref.id}</span>
                <div className="text-nidra-indigo/80 leading-relaxed">
                  <p className="font-medium text-nidra-indigo">{bi(ref.label, ref.labelHi)}</p>
                  <p className="text-xs text-nidra-indigo/60 mt-0.5">{bi(ref.source, ref.sourceHi ?? ref.source)}</p>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-prakash-gold hover:text-sacred-saffron mt-1 transition-colors"
                    >
                      {ref.url}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQ Accordion */}
      {faqs.length > 0 && (
        <section
          aria-label={bi('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}
          className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16"
          id="faq"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
            <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-colors ${open ? 'border-prakash-gold/40 bg-prakash-gold/5' : 'border-prakash-gold/15 bg-[var(--color-bg-glass)]'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full text-left p-4 sm:p-5 flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-prakash-gold/20 text-prakash-gold font-bold text-sm flex items-center justify-center">{i + 1}</span>
                    <span className="flex-1 font-serif text-base sm:text-lg text-nidra-indigo font-medium">{f.q}</span>
                    <svg className={`w-5 h-5 flex-shrink-0 text-prakash-gold transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-5 pb-5 ml-10 text-sm text-nidra-indigo/80 leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-prakash-gold/30 bg-gradient-to-br from-prakash-gold/15 via-[var(--color-hero-2)] to-sacred-saffron/15 p-8 sm:p-10 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,185,96,0.15),transparent_60%)]" aria-hidden />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-prakash-gold mb-3">
              {ctaLabel ?? bi('Ready to Transform Your Space?', 'अपना स्थान रूपांतरित करने को तैयार हैं?')}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-hero-fg)] mb-3">
              {bi('Book a Personal Consultation with AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच से व्यक्तिगत परामर्श बुक करें')}
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-hero-fg)]/70 max-w-2xl mx-auto mb-6">
              {bi('Get a comprehensive audit — directional analysis, dosha identification, personalised remedies, and geopathic stress check — delivered to your home or office.', 'व्यापक ऑडिट प्राप्त करें — दिशा विश्लेषण, दोष पहचान, व्यक्तिगत उपचार और भू-रोगजनक तनाव जाँच — आपके घर या कार्यालय तक।')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                {bi('Book a Consultation', 'परामर्श बुक करें')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link
                href="/free-tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-prakash-gold/40 text-prakash-gold hover:bg-prakash-gold/10 transition-colors"
              >
                {bi('Try Free Tools', 'मुफ्त विकल्प आज़माएँ')}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section
          aria-label={bi('Related Articles', 'संबंधित लेख')}
          className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-kumkuma-red to-[var(--color-hero-2)]" />
            <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Related Articles', 'संबंधित लेख')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/insights/${r.slug}`}
                className="group block p-5 rounded-2xl bg-[var(--color-bg-glass)] border border-prakash-gold/15 hover:border-prakash-gold/40 transition-all hover:-translate-y-0.5"
              >
                <p className="text-xs text-prakash-gold uppercase tracking-wider mb-1.5">{bi('Vastu Guide', 'वास्तु मार्गदर्शन')}</p>
                <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2 group-hover:text-sacred-saffron transition-colors">
                  {bi(r.title, r.titleHi)}
                </h3>
                <p className="text-sm text-nidra-indigo/65 leading-relaxed line-clamp-3">{bi(r.description, r.descriptionHi)}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-prakash-gold group-hover:text-sacred-saffron">
                  {bi('Read article', 'लेख पढ़ें')}
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Author bio */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl mt-12">
        <div className="p-6 bg-[var(--color-bg-glass)] backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
          <div>
            <p className="font-serif text-lg text-nidra-indigo font-bold">{bi('AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच')}</p>
            <p className="text-sm text-nidra-indigo/60">{bi('4th Generation Vastu Guru | MBA | Ex-CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients Worldwide', '4थी पीढ़ी के वास्तु गुरु | MBA | पूर्व सीईओ | 20+ वर्षों का व्यावहारिक अनुभव | विश्वभर में 2 लाख+ क्लाइंट्स')}</p>
          </div>
        </div>
      </div>
    </>
  );
}