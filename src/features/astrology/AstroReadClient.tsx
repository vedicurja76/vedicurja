'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import PlaceAutocomplete from '@/features/shared/components/PlaceAutocomplete';
import { useBi } from '@/lib/i18n/Bilingual';
import { getWhatsAppLink } from '@/lib/constants/config';
import { getAstroRead, type AstroRead } from './engine';

function todayMinusYears(y: number) {
  const d = new Date();
  d.setFullYear(d.getFullYear() - y);
  return d.toISOString().slice(0, 10);
}

function Stars() {
  const dots = useMemo(() => Array.from({ length: 26 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 90,
    delay: (i % 9) * 0.4,
    size: 1 + (i % 3),
  })), []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((s, i) => (
        <span key={i} className="absolute rounded-full bg-white animate-[twinkle_3s_ease-in-out_infinite]" style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s`, boxShadow: '0 0 6px rgba(232,185,96,0.8)' }} />
      ))}
    </div>
  );
}

export default function AstroReadClient() {
  const bi = useBi();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [read, setRead] = useState<AstroRead | null>(null);

  async function generate(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!dob) { setError(bi('Please select your date of birth.', 'कृपया जन्म तिथि चुनें।')); return; }
    setLoading(true);
    try {
      const r = await getAstroRead(name, dob);
      setRead(r);
    } catch {
      setError(bi('Something went wrong — try again.', 'कुछ गड़बड़ी हुई — पुनः प्रयास करें।'));
    } finally {
      setLoading(false);
    }
  }

  const p = read?.profile;
  const bookWaMsg = p ? `Hi AstroVastu Expert, I got a free AI reading (${p.rashi.en} / Mulank ${p.mulank.n}). I want a detailed Janma Kundli.\nName: ${name || '-'}\nDOB: ${dob}\nTime: ${time || '-'}\nPlace: ${place || '-'}` : '';

  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* HERO */}
        <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_14s_ease_infinite]">
          <Stars />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('100% Free · No Login · AI + Vedic', '100% निःशुल्क · बिना लॉगिन · AI + वैदिक')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Free AI Astrology Reading', 'निःशुल्क AI ज्योतिष कुंडली')}</span></h1>
            <p className="text-lg text-[var(--color-hero-fg)]/75 max-w-3xl mx-auto mb-3">{bi('Instant Vedic Surya-rashi, Mulank & Bhagyank numerology, lucky numbers, gemstone, remedies and a personalised AI reading — from your name and date of birth.', 'अपने नाम व जन्म तिथि से तत्काल वैदिक सूर्य राशि, मूलांक व भाग्यांक अंकशास्त्र, शुभ अंक, रत्न, उपाय व व्यक्तिगत AI पठन पाएँ।')}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/55 max-w-2xl mx-auto">{bi('Computed by classical Jyotish rules, enriched by AI, vetted by AstroVastu Expert KK Nagaich.', 'शास्त्रीय ज्योतिष नियमों से गणना, AI से संवर्धित, एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा परखी।')}</p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-14 bg-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.form onSubmit={generate} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-6 sm:p-8 rounded-[28px] bg-[var(--color-bg-glass)] backdrop-blur-xl border border-prakash-gold/25 shadow-[0_20px_60px_rgba(200,138,93,0.18)]">
              <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-r from-prakash-gold/30 via-sacred-saffron/20 to-cyan-400/20 blur opacity-60 -z-10" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={bi('Full Name (optional)', 'पूरा नाम (वैकल्पिक)')}>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder={bi('e.g. Rahul Sharma', 'जैसे राहुल शर्मा')} className="astro-input" />
                </Field>
                <Field label={bi('Date of Birth *', 'जन्म तिथि *')}>
                  <input type="date" required max={todayMinusYears(1)} min="1900-01-01" value={dob} onChange={(e) => setDob(e.target.value)} className="astro-input" />
                </Field>
                <Field label={bi('Birth Time (for full Kundli)', 'जन्म समय (पूर्ण कुंडली हेतु)')}>
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="astro-input" />
                </Field>
                <Field label={bi('Birth Place (for full Kundli)', 'जन्म स्थान (पूर्ण कुंडली हेतु)')}>
                  <PlaceAutocomplete value={place} onChange={setPlace} placeholder={bi('City, State', 'नगर, राज्य')} id="astro-place" />
                </Field>
              </div>
              {error && <p className="mt-4 text-sm text-kumkuma-red font-medium">{error}</p>}
              <motion.button type="submit" whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }} disabled={loading} className="mt-6 w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-[#1a1a2e] font-bold text-lg shadow-[0_10px_30px_rgba(232,185,96,0.4)] disabled:opacity-70 transition">
                {loading ? bi('Casting your chart…', 'कुंडली गणना हो रही है…') : bi('Reveal My Free Reading ✦', 'मेरा निःशुल्क पठन देखें ✦')}
              </motion.button>
              <p className="mt-3 text-center text-xs text-nidra-indigo/50">{bi('Time & place are used only when Acharya prepares your exact Moon-sign, Nakshatra & Dasha report.', 'समय व स्थान का प्रयोग केवल आचार्य द्वारा सटीक चंद्र राशि, नक्षत्र व दशा रिपोर्ट हेतु होता है।')}</p>
            </motion.form>
          </div>
        </section>

        {/* RESULTS */}
        <AnimatePresence>
          {read && p && (
            <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-8 bg-vastu-parchment">
              <div className="container mx-auto px-4 max-w-6xl space-y-6">
                {/* headline cards */}
                <div className="grid md:grid-cols-3 gap-5">
                  <StatCard delay={0} accent="from-prakash-gold to-sacred-saffron" icon={p.rashi.symbol} label={bi('Surya Rashi (Sun Sign)', 'सूर्य राशि')} value={bi(p.rashi.en, p.rashi.hi)} sub={bi(`${p.rashi.datesEn} · ${p.rashi.lord}`, `${p.rashi.datesHi} · ${p.rashi.lordHi}`)} />
                  <StatCard delay={0.08} accent="from-cyan-400 to-prakash-gold" icon="①" label={bi('Mulank · Psychic No.', 'मूलांक')} value={String(p.mulank.n)} sub={bi(`${p.mulank.planet} — ${p.mulank.title}`, `${p.mulank.planetHi} — ${p.mulank.titleHi}`)} />
                  <StatCard delay={0.16} accent="from-sacred-saffron to-kumkuma-red" icon="②" label={bi('Bhagyank · Destiny No.', 'भाग्यांक')} value={String(p.bhagyank.n)} sub={bi(`${p.bhagyank.planet} — ${p.bhagyank.title}`, `${p.bhagyank.planetHi} — ${p.bhagyank.titleHi}`)} />
                </div>

                {/* AI reading */}
                <GlassCard title={bi('Your Personalised Reading', 'आपका व्यक्तिगत पठन')} badge={read.source === 'computed' ? bi('Vedic rules', 'वैदिक नियम') : bi('AI + Vedic', 'AI + वैदिक')}>
                  <p className="leading-relaxed text-nidra-indigo/80 mb-4">{bi(read.aiSummaryEn, read.aiSummaryHi)}</p>
                  {read.source === 'computed' && (
                    <p className="text-xs text-nidra-indigo/50">{bi('Tip: add your name for a Chaldean name-number insight, and see the section below.', 'सुझाव: चाल्डियन नाम-अंक हेतु अपना नाम जोड़ें, व नीचे अनुभाग देखें।')}</p>
                  )}
                </GlassCard>

                {/* traits + lucky */}
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassCard title={bi('Nature & Traits', 'स्वभाव व गुण')}>
                    <div className="flex flex-wrap gap-2 mb-4">{p.rashi.traitsEn.map((t, i) => <span key={t} className="px-3 py-1.5 rounded-full bg-vastu-stone/40 border border-prakash-gold/20 text-sm text-nidra-indigo/80">{bi(t, p.rashi.traitsHi[i])}</span>)}</div>
                    <p className="text-sm text-nidra-indigo/60">{bi('Element', 'तत्व')}: <strong>{bi(p.rashi.element, p.rashi.elementHi)}</strong></p>
                  </GlassCard>
                  <GlassCard title={bi('Lucky Numbers & Colours', 'शुभ अंक व रंग')}>
                    <div className="flex flex-wrap gap-2 mb-3">{p.luckyNumbers.map((n) => <span key={n} className="w-11 h-11 grid place-items-center rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron text-[#1a1a2e] font-bold text-lg shadow">{n}</span>)}</div>
                    <p className="text-sm text-nidra-indigo/70">{bi('Colour', 'रंग')}: <strong>{bi(p.rashi.color, p.rashi.colorHi)}</strong> · {bi('Gemstone', 'रत्न')}: <strong>{bi(p.rashi.gemEn, p.rashi.gemHi)}</strong></p>
                  </GlassCard>
                </div>

                {/* life areas */}
                <div className="grid md:grid-cols-3 gap-5">
                  <AreaCard icon="💼" title={bi('Career & Wealth', 'करियर व धन')} text={bi(p.rashi.careerEn, p.rashi.careerHi)} />
                  <AreaCard icon="🌿" title={bi('Health', 'स्वास्थ्य')} text={bi(p.rashi.healthEn, p.rashi.healthHi)} />
                  <AreaCard icon="💞" title={bi('Love & Family', 'प्रेम व परिवार')} text={bi(p.rashi.relationshipEn, p.rashi.relationshipHi)} />
                </div>

                {/* remedy + name */}
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassCard title={bi('Vedic Remedy & Mantra', 'वैदिक उपाय व मंत्र')}>
                    <p className="text-sm text-nidra-indigo/80 leading-relaxed mb-3">{bi(p.rashi.remedyEn, p.rashi.remedyHi)}</p>
                    <p className="text-sm text-prakash-gold font-semibold">॥ {p.rashi.mantraEn} ॥</p>
                    <p className="text-xs text-nidra-indigo/50 mt-1">{bi('Deity', 'आराध्य')}: {p.rashi.deityHi}</p>
                  </GlassCard>
                  <GlassCard title={bi('Name Number (Chaldean)', 'नाम अंक (चाल्डियन)')}>
                    {read.profile.nameNumber.reduced ? (
                      <div>
                        <p className="text-sm text-nidra-indigo/80 mb-2">{bi('Your name vibrates at', 'आपका नाम कंपित करता है')} <strong className="text-prakash-gold">{read.profile.nameNumber.reduced}</strong> {bi('(compound', '(यौगिक')} {read.profile.nameNumber.total}).</p>
                        <p className="text-sm text-nidra-indigo/70">{read.profile.nameNumber.profile ? bi(read.profile.nameNumber.profile.en, read.profile.nameNumber.profile.hi) : ''}</p>
                        {read.profile.nameNumber.reduced !== read.profile.mulank.n && (
                          <p className="text-xs text-kumkuma-red/80 mt-2">{bi('A name whose number harmonises with your Mulank boosts results — Acharya can suggest corrections.', 'जिस नाम का अंक मूलांक से संपृक्त हो वह परिणाम बढ़ाता है — आचार्य सुझाव दे सकते हैं।')}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-nidra-indigo/60">{bi('Enter your full name above to reveal your Chaldean name number.', 'अपना चाल्डियन नाम-अंक देखने हेतु ऊपर पूरा नाम दर्ज करें।')}</p>
                    )}
                  </GlassCard>
                </div>

                {/* upgrade CTA */}
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] p-8 sm:p-12 text-center">
                  <Stars />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-hero-fg)] mb-3">{bi('This is a free Surya-rashi & numerology snapshot', 'यह एक निःशुल्क सूर्य राशि व अंकशास्त्र झलक है')}</h3>
                    <p className="text-[var(--color-hero-fg)]/75 max-w-2xl mx-auto mb-6 text-sm sm:text-base">{bi('For your exact Janma Rashi (Moon), Nakshatra & Pada, Lagna, Dasha timeline and Mangal/Pitru dosha analysis, Acharya KK Nagaich prepares a full 100+ page Kundli report.', 'सटीक जन्म राशि (चंद्र), नक्षत्र व पाद, लग्न, दशा-काल व मंगल/पितृ दोष विश्लेषण हेतु आचार्य के. के. नागाइच 100+ पृष्ठ की पूर्ण कुंडली रिपोर्ट तैयार करते हैं।')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={getWhatsAppLink(bookWaMsg)} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all">{bi('Book Full Kundli on WhatsApp', 'WhatsApp पर पूर्ण कुंडली बुक करें')}</a>
                      <Link href="/bookings" className="px-8 py-4 rounded-full border-2 border-white/70 text-[var(--color-hero-fg)] font-semibold hover:bg-white/10 transition">{bi('See Plans & Pricing', 'योजनाएँ व मूल्य देखें')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* SEO content blocks */}
        <SeoBlocks bi={bi} />

        <style>{`
          @keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
          @keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.9}}
          .astro-input{width:100%;padding:.8rem 1rem;border-radius:14px;border:1px solid rgba(200,138,93,.25);background:rgba(255,255,255,.55);color:var(--color-nidra-indigo,#1a2a3a);outline:none;transition:border .2s, box-shadow .2s}
          .astro-input:focus{border-color:var(--color-prakash-gold,#E8B960);box-shadow:0 0 0 3px rgba(232,185,96,.2)}
        `}</style>
      </main>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-nidra-indigo/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function StatCard({ icon, label, value, sub, accent, delay }: { icon: string; label: string; value: string; sub: string; accent: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} whileHover={{ y: -4, scale: 1.02 }} className="relative overflow-hidden p-6 rounded-[24px] bg-[var(--color-bg-glass)] backdrop-blur-sm border border-prakash-gold/20 shadow-[0_10px_30px_rgba(26,42,58,0.08)]">
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent}`} />
      <div className="text-4xl mb-2 text-prakash-gold">{icon}</div>
      <p className="text-xs uppercase tracking-wider text-nidra-indigo/50">{label}</p>
      <p className="font-serif text-3xl text-nidra-indigo font-bold">{value}</p>
      <p className="text-sm text-nidra-indigo/60 mt-1">{sub}</p>
    </motion.div>
  );
}

function GlassCard({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 sm:p-7 rounded-[24px] bg-[var(--color-bg-glass)] backdrop-blur-sm border border-prakash-gold/20 shadow-[0_10px_30px_rgba(26,42,58,0.06)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-xl text-nidra-indigo font-bold">{title}</h3>
        {badge && <span className="text-xs px-3 py-1 rounded-full bg-prakash-gold/15 text-prakash-gold font-semibold">{badge}</span>}
      </div>
      {children}
    </motion.div>
  );
}

function AreaCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-[24px] bg-[var(--color-bg-elevated)] border border-prakash-gold/15">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-serif text-lg text-nidra-indigo font-bold mb-1">{title}</h4>
      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function SeoBlocks({ bi }: { bi: (e: string, h: string) => string }) {
  return (
    <section className="py-16 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 max-w-4xl prose prose-lg text-nidra-indigo/80">
        <h2 className="font-serif text-2xl text-nidra-indigo font-bold mb-3">{bi('What our free AI astrology reading covers', 'हमारा निःशुल्क AI ज्योतिष पठन क्या शामिल करता है')}</h2>
        <ul className="space-y-2 text-nidra-indigo/70 list-disc pl-5">
          <li>{bi('Vedic Surya-rashi (Sun sign) by sidereal date, its ruling planet, element and inherent traits.', 'सिद्धांत ज्योतिष तिथि से वैदिक सूर्य राशि, उसका स्वामी ग्रह, तत्व व सहज गुण।')}</li>
          <li>{bi('Mulank (Psychic) and Bhagyank (Destiny) numbers with Chaldean & Indian numerology meanings.', 'चाल्डियन व भारतीय अंकशास्त्र के साथ मूलांक व भाग्यांक के अर्थ।')}</li>
          <li>{bi('Lucky numbers, gemstone, colours and a practical Vedic remedy with mantra and deity.', 'शुभ अंक, रत्न, रंग व मंत्र-आराध्य सहित व्यावहारिक वैदिक उपाय।')}</li>
          <li>{bi('Career, health and relationship guidance mapped to your rashi and numbers.', 'आपकी राशि व अंकों से सम्बंधित करियर, स्वास्थ्य व संबंध मार्गदर्शन।')}</li>
          <li>{bi('A personalised AI summary that can be deepened into a full Janma Kundli by Acharya KK Nagaich.', 'व्यक्तिगत AI सारांश जिसे आचार्य के. के. नागाइच से पूर्ण जन्म कुंडली में गहरा किया जा सकता है।')}</li>
        </ul>
        <p className="mt-4 text-sm text-nidra-indigo/60">{bi('Note: Moon-based Janma-rashi, Nakshatra and Dasha require exact birth time and place and planetary positions that a date-only tool cannot compute — those come from Acharya’s full report. This free tool is for guidance and self-reflection, not a substitute for professional, medical, legal or financial advice.', 'नोट: चंद्र-आधारित जन्म राशि, नक्षत्र व दशा हेतु सटीक जन्म समय, स्थान व ग्रह-स्थिति चाहिए जो केवल तिथि-आधारित टूल गणना नहीं कर सकता — वे आचार्य की पूर्ण रिपोर्ट में आती हैं। निःशुल्क टूल मार्गदर्शन व आत्म-चिंतन हेतु है, पेशेवर/चिकित्सकीय/कानूनी/वित्तीय सलाह का विकल्प नहीं।')}</p>
      </div>
    </section>
  );
}
