'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { useBi } from '@/lib/i18n/Bilingual';
import { getWhatsAppLink } from '@/lib/constants/config';
import { ALL_RASHI, generateDailyHoroscope, todayKey, dateLabel, type DayHoroscope } from '@/features/horoscope/engine';

const STORE_KEY = 'horoscope-rashi-v1';

function defaultRashiKey(dobStr: string): string {
  const d = new Date(dobStr + 'T00:00:00');
  if (isNaN(d.getTime())) return 'mesha';
  const md = (d.getMonth() + 1) * 100 + d.getDate();
  for (const r of ALL_RASHI) {
    const start = r.startM * 100 + r.startD;
    const end = r.endM * 100 + r.endD;
    if (start <= end ? md >= start && md <= end : md >= start || md <= end) return r.key;
  }
  return 'mesha';
}

export function DailyHoroscopeTool() {
  const bi = useBi();
  const [rashiKey, setRashiKey] = useState<string>(() => ALL_RASHI[0].key);
  const [dateStr, setDateStr] = useState<string>(() => '');
  const [mounted, setMounted] = useState(false);

  // Restore last chosen rashi so the tool "remembers" the visitor (100% local).
  useEffect(() => {
    setMounted(true);
    setDateStr(todayKey());
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORE_KEY) : null;
    if (saved && ALL_RASHI.some(r => r.key === saved)) setRashiKey(saved);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') localStorage.setItem(STORE_KEY, rashiKey);
  }, [rashiKey, mounted]);

  const h: DayHoroscope = useMemo(() => generateDailyHoroscope(rashiKey, dateStr), [rashiKey, dateStr]);
  const rashi = h.rashi;

  const shareMsg = useMemo(() => {
    const en = `🌌 ${rashi.en} (${rashi.symbol}) — Daily Horoscope · ${dateLabel(dateStr, (a) => a)}\n\n${h.headline.en}\n\n💞 Love: ${h.love.en}\n💼 Career: ${h.career.en}\n🌿 Health: ${h.health.en}\n💰 Finance: ${h.finance.en}\n🛠️ Remedy: ${h.remedy.en}\n\n🍀 Lucky colour ${h.luckyColor.en} · number ${h.luckyNumber} · direction ${h.luckyDirection.en}\n\nFree daily rashi phal from AstroVastu Expert (Acharya KK Nagaich) — https://vedivastuurja.com/free-tools/daily-horoscope`;
    const hi = `🌌 ${rashi.hi} (${rashi.symbol}) — दैनिक राशिफल · ${dateLabel(dateStr, (_a, b) => b)}\n\n${h.headline.hi}\n\n💞 प्रेम: ${h.love.hi}\n💼 करियर: ${h.career.hi}\n🌿 स्वास्थ्य: ${h.health.hi}\n💰 धन: ${h.finance.hi}\n🛠️ उपाय: ${h.remedy.hi}\n\n🍀 शुभ रंग ${h.luckyColor.hi} · अंक ${h.luckyNumber} · दिशा ${h.luckyDirection.hi}\n\nआचार्य के. के. नगाईच (AstroVastu Expert) का निःशुल्क दैनिक राशिफल — https://vedivastuurja.com/free-tools/daily-horoscope`;
    return bi(en, hi);
  }, [h, rashi, dateStr, bi]);

  const today = todayKey();
  const isToday = dateStr === today;

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[58vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_16s_ease_infinite] pt-24">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="absolute rounded-full bg-white animate-[twinkle_3s_ease-in-out_infinite]" style={{ left: `${(i * 41) % 100}%`, top: `${(i * 27) % 88}%`, width: 1 + (i % 3), height: 1 + (i % 3), animationDelay: `${(i % 6) * 0.4}s`, boxShadow: '0 0 6px rgba(232,185,96,0.8)' }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">{bi('100% Free · No Login · Instant', '100% निःशुल्क · बिना लॉगिन · तत्काल')}</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-hero-fg)] mb-4 leading-tight drop-shadow-xl">
            <span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Daily Vedic Horoscope', 'दैनिक वैदिक राशिफल')}</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-hero-fg)]/78 max-w-3xl mx-auto">{bi('Pick your Rashi and date for an instant reading — love, career, health, finance, lucky colour, number and a simple Vedic remedy. Deterministic Vedic rules, running fully in your browser.', 'अपनी राशि व तिथि चुनें — तुरंत प्रेम, करियर, स्वास्थ्य, धन, शुभ रंग, अंक व सरल वैदिक उपाय। शास्त्रीय वैदिक नियम, पूरी तरह आपके ब्राउज़र में।')}</p>
        </div>
      </section>

      {/* CONTROLS */}
      {mounted && (
      <section className="py-12 bg-[var(--color-bg-elevated)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative p-6 sm:p-8 rounded-[28px] bg-[var(--color-bg-glass)] backdrop-blur-xl border border-prakash-gold/25 shadow-[0_20px_60px_rgba(200,138,93,0.18)]">
            <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-r from-prakash-gold/30 via-sacred-saffron/20 to-cyan-400/20 blur opacity-60 -z-10" />
            <div className="flex flex-col sm:flex-row sm:items-end gap-5 mb-6">
              <label className="block flex-1">
                <span className="block text-sm font-medium text-nidra-indigo/70 mb-2">{bi('Your Rashi (Sun sign)', 'आपकी राशि (सूर्य राशि)')}</span>
                <select value={rashiKey} onChange={e => setRashiKey(e.target.value)} className="w-full px-4 py-3 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo font-medium outline-none focus:border-prakash-gold focus:ring-3 focus:ring-prakash-gold/25 transition">
                  {ALL_RASHI.map(r => (
                    <option key={r.key} value={r.key}>{bi(`${r.symbol}  ${r.en} — ${r.datesEn}`, `${r.symbol}  ${r.hi} — ${r.datesHi}`)}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:w-52">
                <span className="block text-sm font-medium text-nidra-indigo/70 mb-2">{bi('Date', 'तिथि')}</span>
                <input type="date" value={dateStr} min="2000-01-01" max={mounted ? todayKey(new Date(Date.now() + 864e5)) : undefined} onChange={e => setDateStr(e.target.value)} className="w-full px-4 py-3 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo outline-none focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/25 transition" />
              </label>
              {!isToday && (
                <button onClick={() => setDateStr(today)} className="px-4 py-3 rounded-2xl text-sm font-medium bg-prakash-gold/15 text-prakash-gold border border-prakash-gold/30 hover:bg-prakash-gold/25 transition whitespace-nowrap">
                  {bi('↺ Today', '↺ आज')}
                </button>
              )}
            </div>

            {/* quick rashi chips */}
            <div className="flex flex-wrap gap-2">
              {ALL_RASHI.map(r => {
                const active = r.key === rashiKey;
                return (
                  <button key={r.key} onClick={() => setRashiKey(r.key)} className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium border transition ${active ? 'bg-gradient-to-r from-prakash-gold to-sacred-saffron text-[#1a2a3a] border-transparent shadow-md shadow-prakash-gold/30 scale-[1.03]' : 'bg-white/40 text-nidra-indigo/75 border-prakash-gold/25 hover:bg-white/70'}`}>
                    <span className="text-base">{r.symbol}</span>{bi(r.en, r.hi)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* RESULT */}
      {mounted && dateStr && (
        <motion.section key={`${rashiKey}-${dateStr}`} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} className="py-8 bg-vastu-parchment">
          <div className="container mx-auto px-4 max-w-5xl space-y-6">
            {/* headline banner */}
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[#1a1a2e] p-6 sm:p-8">
              <div className="flex items-start gap-4 flex-col sm:flex-row">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 border border-prakash-gold/30 grid place-items-center text-4xl sm:text-5xl shadow-lg flex-shrink-0">{rashi.symbol}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-hero-fg)] font-bold">{bi(`${rashi.en} — ${dateLabel(dateStr, (a) => a)}`, `${rashi.hi} — ${dateLabel(dateStr, (_a, b) => b)}`)}</h2>
                  </div>
                  <p className="text-[var(--color-hero-fg)]/70 mt-1.5 leading-relaxed">{bi(h.headline.en, h.headline.hi)}</p>
                  <p className="text-[var(--color-hero-fg)]/50 text-xs mt-1">{bi(`${rashi.lord} · ${rashi.element} · ${rashi.datesEn}`, `${rashi.lordHi} · ${rashi.elementHi} · ${rashi.datesHi}`)}</p>
                </div>
                {/* mood ring */}
                <div className="text-center sm:text-right flex-shrink-0">
                  <MoodRing score={h.moodScore} bi={bi} />
                </div>
              </div>
            </div>

            {/* area cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AreaCard icon="🧭" title={bi('Overall', 'समग्र')} text={bi(h.overall.en, h.overall.hi)} accent="from-prakash-gold to-sacred-saffron" />
              <AreaCard icon="💞" title={bi('Love & Family', 'प्रेम व परिवार')} text={bi(h.love.en, h.love.hi)} accent="from-rose-400 to-kumkuma-red" />
              <AreaCard icon="💼" title={bi('Career & Work', 'करियर व कार्य')} text={bi(h.career.en, h.career.hi)} accent="from-cyan-400 to-prakash-gold" />
              <AreaCard icon="🌿" title={bi('Health & Vitality', 'स्वास्थ्य व प्राण')} text={bi(h.health.en, h.health.hi)} accent="from-emerald-400 to-teal-500" />
              <AreaCard icon="💰" title={bi('Money & Finance', 'धन व वित्त')} text={bi(h.finance.en, h.finance.hi)} accent="from-amber-400 to-yellow-600" />
              <AreaCard icon="🛠️" title={bi('Today’s Remedy', 'आज का उपाय')} text={bi(h.remedy.en, h.remedy.hi)} accent="from-violet-400 to-fuchsia-500" />
            </div>

            {/* lucky strip */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <LuckyTile icon="🎨" label={bi('Lucky Colour', 'शुभ रंग')} value={bi(h.luckyColor.en, h.luckyColor.hi)} />
              <LuckyTile icon="🔢" label={bi('Lucky Number', 'शुभ अंक')} value={String(h.luckyNumber)} />
              <LuckyTile icon="🧭" label={bi('Lucky Direction', 'शुभ दिशा')} value={bi(h.luckyDirection.en, h.luckyDirection.hi)} />
              <LuckyTile icon="🤝" label={bi('Compatible With', 'अनुकूल राशि')} value={bi(h.compatibleWith.en, h.compatibleWith.hi)} />
            </motion.div>

            {/* actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href={getWhatsAppLink(shareMsg)} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.5)] transition-all text-center">{bi('📲 Share on WhatsApp', '📲 WhatsApp पर साझा करें')}</a>
              <a href={getWhatsAppLink(bi(`Hi AstroVastu Expert, my ${rashi.en} horoscope resonated. I want a personalised full reading by Acharya ji.\nDOB: ${dateStr}`, `नमस्ते आचार्य जी, मेरा ${rashi.hi} राशिफल प्रेरक रहा। मैं पूर्ण व्यक्तिगत कुंडली विश्लेषण चाहता/चाहती हूँ।`))} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:brightness-110 transition-all text-center">{bi('🌌 Get Full Kundli Reading', '🌌 पूर्ण कुंडली विश्लेषण पाएँ')}</a>
            </div>

            <p className="text-center text-xs text-nidra-indigo/45 max-w-2xl mx-auto pt-1">{bi('This daily horoscope is generated by deterministic Vedic rules for self-reflection and guidance — it is not a substitute for professional medical, legal or financial advice.', 'यह दैनिक राशिफल आत्म-चिंतन व मार्गदर्शन हेतु नियत-नियम वैदिक गणना से बना है — यह चिकित्सकीय/कानूनी/वित्तीय सलाह का विकल्प नहीं है।')}</p>
          </div>
        </motion.section>
      )}

      <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.9}}`}</style>
    </div>
  );
}

function MoodRing({ score, bi }: { score: number; bi: (a: string, b: string) => string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <svg width="72" height="72" viewBox="0 0 64 64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
        <motion.circle cx="32" cy="32" r={r} fill="none" stroke="url(#moodgrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c - filled }} transition={{ duration: 1, ease: 'easeOut' }} />
        <defs><linearGradient id="moodgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E8B960" /><stop offset="100%" stopColor="#FF9933" /></linearGradient></defs>
      </svg>
      <div className="text-[var(--color-hero-fg)] font-bold text-lg -mt-11">{score}%</div>
      <div className="text-[10px] uppercase tracking-wider text-prakash-gold/80 mt-6">{bi('Day Energy', 'दिन-ऊर्जा')}</div>
    </div>
  );
}

function AreaCard({ icon, title, text, accent }: { icon: string; title: string; text: string; accent: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="relative overflow-hidden p-6 rounded-[24px] bg-[var(--color-bg-glass)] backdrop-blur-sm border border-prakash-gold/20 shadow-[0_10px_30px_rgba(26,42,58,0.07)]">
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent}`} />
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-serif text-lg text-nidra-indigo font-bold mb-1.5">{title}</h4>
      <p className="text-sm text-nidra-indigo/72 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function LuckyTile({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--color-bg-elevated)] border border-prakash-gold/15">
      <div className="text-2xl">{icon}</div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-nidra-indigo/50">{label}</p>
        <p className="font-semibold text-nidra-indigo truncate">{value}</p>
      </div>
    </div>
  );
}

function HoroscopeContent() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <DailyHoroscopeTool />
        </main>
      </SmoothScroll>
    </>
  );
}

export default function DailyHoroscopePage() {
  return <HoroscopeContent />;
}
