'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { useBi } from '@/lib/i18n/Bilingual';
import { getWhatsAppLink } from '@/lib/constants/config';
import PlaceAutocomplete from '@/features/shared/components/PlaceAutocomplete';
import { NAKSHATRA, suggestNames, type NameSuggestion } from '@/features/naming/engine';

type Gender = 'both' | 'boy' | 'girl';

function Stars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="absolute rounded-full bg-white animate-[twinkle_3s_ease-in-out_infinite]" style={{ left: `${(i * 43) % 100}%`, top: `${(i * 29) % 88}%`, width: 1 + (i % 3), height: 1 + (i % 3), animationDelay: `${(i % 7) * 0.4}s`, boxShadow: '0 0 6px rgba(232,185,96,0.8)' }} />
      ))}
    </div>
  );
}

export function NameSuggestionTool() {
  const bi = useBi();
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [gotra, setGotra] = useState('');
  const [gender, setGender] = useState<Gender>('both');
  const [error, setError] = useState('');
  const [result, setResult] = useState<NameSuggestion | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!dob) { setError(bi('Please select the date of birth.', 'कृपया जन्म तिथि चुनें।')); return; }
    setResult(suggestNames(dob, time || '12:00'));
  }

  const nak = result?.nakshatra;
  const showBoy = gender !== 'girl';
  const showGirl = gender !== 'boy';

  const shareMsg = useMemo(() => {
    if (!nak || !result) return '';
    const boys = result.boys.slice(0, 6).map(n => bi(n.en, n.hi)).join(', ');
    const girls = result.girls.slice(0, 6).map(n => bi(n.en, n.hi)).join(', ');
    return bi(
      `✨ Name Suggestion — ${nak.en} (Pada ${result.pada + 1}) · starting with “${result.syllable.sa}”\n\nLord: ${nak.lord} · Deity: ${nak.deity}\n\n👦 Boys: ${boys}\n👧 Girls: ${girls}\n\nFree Nakshatra-based names from AstroVastu Expert (Acharya KK Nagaich) — https://vedivastuurja.com/free-tools/name-suggestion`,
      `✨ नाम सुझाव — ${nak.hi} (पाद ${result.pada + 1}) · शुभ आदि-अक्षर “${result.syllable.hi}”\n\nस्वामी: ${nak.lordHi} · आराध्य: ${nak.deityHi}\n\n👦 बालक: ${boys}\n👧 बालिका: ${girls}\n\nआचार्य के. के. नगाईच (AstroVastu Expert) का निःशुल्क नक्षत्र-आधारित नाम चयन — https://vedivastuurja.com/free-tools/name-suggestion`
    );
  }, [nak, result, bi]);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[56vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_16s_ease_infinite] pt-24">
        <Stars />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">{bi('100% Free · No Login · Instant', '100% निःशुल्क · बिना लॉगिन · तत्काल')}</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-hero-fg)] mb-4 leading-tight drop-shadow-xl">
            <span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Nakshatra Name Suggestion', 'नक्षत्र आधारित नाम सुझाव')}</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-hero-fg)]/78 max-w-3xl mx-auto">{bi('Enter the baby’s birth date and time to find the Janma Nakshatra and pada, then receive auspicious boy & girl names starting with the lucky syllable — computed right in your browser.', 'शिशु के जन्म तिथि व समय से जन्म नक्षत्र व पाद ज्ञात करें, फिर शुभ आदि-अक्षर से आरंभ होने वाले बालक व बालिका के नाम पाएँ — पूरी गणना आपके ब्राउज़र में।')}</p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 bg-[var(--color-bg-elevated)]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-6 sm:p-8 rounded-[28px] bg-[var(--color-bg-glass)] backdrop-blur-xl border border-prakash-gold/25 shadow-[0_20px_60px_rgba(200,138,93,0.18)]">
            <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-r from-prakash-gold/30 via-sacred-saffron/20 to-cyan-400/20 blur opacity-60 -z-10" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={bi('Date of Birth *', 'जन्म तिथि *')}>
                <input type="date" required max={mounted ? new Date().toISOString().slice(0, 10) : undefined} min="1900-01-01" value={dob} onChange={e => setDob(e.target.value)} className="w-full px-4 py-3 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo outline-none focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/25 transition" />
              </Field>
              <Field label={bi('Time of Birth', 'जन्म समय')}>
                <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full px-4 py-3 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo outline-none focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/25 transition" />
              </Field>
              <Field label={bi('Place of Birth (optional)', 'जन्म स्थान (वैकल्पिक)')}>
                <PlaceAutocomplete value={place} onChange={setPlace} placeholder={bi('Start typing a city…', 'नगर लिखना आरंभ करें…')} id="name-place" />
              </Field>
              <Field label={bi('Gotra / Family name (optional)', 'गोत्र / उपनाम (वैकल्पिक)')}>
                <input value={gotra} onChange={e => setGotra(e.target.value)} placeholder={bi('e.g. Kashyap / Sharma', 'जैसे कश्यप / शर्मा')} className="w-full px-4 py-3 rounded-2xl border border-prakash-gold/30 bg-white/60 text-nidra-indigo outline-none focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/25 transition" />
              </Field>
            </div>

            {/* gender toggle */}
            <div className="mt-5">
              <span className="block text-sm font-medium text-nidra-indigo/70 mb-2">{bi('Suggest names for', 'के लिए नाम सुझाएँ')}</span>
              <div className="inline-flex rounded-full bg-white/40 border border-prakash-gold/25 p-1">
                {(['both', 'boy', 'girl'] as Gender[]).map(g => (
                  <button key={g} type="button" onClick={() => setGender(g)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${gender === g ? 'bg-gradient-to-r from-prakash-gold to-sacred-saffron text-[#1a2a3a] shadow' : 'text-nidra-indigo/70 hover:text-nidra-indigo'}`}>
                    {g === 'both' ? bi('Both', 'दोनों') : g === 'boy' ? bi('👦 Boy', '👦 बालक') : bi('👧 Girl', '👧 बालिका')}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-kumkuma-red font-medium">{error}</p>}
            <motion.button type="submit" whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }} className="mt-6 w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-[#1a1a2e] font-bold text-lg shadow-[0_10px_30px_rgba(232,185,96,0.4)] transition">
              {bi('Reveal Auspicious Names ✦', 'शुभ नाम देखें ✦')}
            </motion.button>
            <p className="mt-3 text-center text-xs text-nidra-indigo/50">{bi('Based on the mean lunar position for your birth date & time. For the exact Janma Nakshatra by panchang, Acharya ji confirms in consultation.', 'जन्म तिथि व समय की माध्य चंद्र-स्थिति पर आधारित। पंचांग से सटीक जन्म नक्षत्र हेतु आचार्य जी परामर्श में पुष्टि करते हैं।')}</p>
          </motion.form>
        </div>
      </section>

      {/* RESULT */}
      {result && nak && (
          <motion.section key={`${nak.key}-${result.pada}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} className="py-8 bg-vastu-parchment">
            <div className="container mx-auto px-4 max-w-5xl space-y-6">
              {/* nakshatra banner */}
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[#1a1a2e] p-6 sm:p-8">
                <div className="flex items-center gap-4 flex-col sm:flex-row">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 border border-prakash-gold/30 grid place-items-center text-4xl flex-shrink-0">{nak.symbol}</div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-prakash-gold uppercase tracking-[0.2em] text-xs font-semibold">{bi('Janma Nakshatra', 'जन्म नक्षत्र')}</p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-hero-fg)] font-bold">{bi(`${nak.en} · ${nak.sa}`, `${nak.hi} · ${nak.sa}`)}</h2>
                    <p className="text-[var(--color-hero-fg)]/70 text-sm mt-1">{bi(`Pada ${result.pada + 1} · starting syllable “${result.syllable.sa}”`, `पाद ${result.pada + 1} · शुभ आदि-अक्षर “${result.syllable.hi}”`)}</p>
                    <p className="text-[var(--color-hero-fg)]/50 text-xs mt-1">{bi(`Lord ${nak.lord} · Deity ${nak.deity}`, `स्वामी ${nak.lordHi} · आराध्य ${nak.deityHi}`)}</p>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className="px-5 py-4 rounded-2xl bg-prakash-gold/15 border border-prakash-gold/30">
                      <p className="text-[10px] uppercase tracking-wider text-prakash-gold/80">{bi('Lucky Akshar', 'शुभ अक्षर')}</p>
                      <p className="font-serif text-3xl text-[var(--color-hero-fg)] font-bold leading-none mt-1">{result.syllable.hi}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* all padas */}
              <div className="p-5 rounded-2xl bg-[var(--color-bg-glass)] border border-prakash-gold/20">
                <p className="text-sm font-medium text-nidra-indigo/70 mb-3">{bi('Four padas of this Nakshatra', 'इस नक्षत्र के चार पाद')}</p>
                <div className="flex flex-wrap gap-2">
                  {nak.padas.map((p, i) => {
                    const cur = i === result.pada;
                    return (
                      <span key={i} className={`px-3.5 py-2 rounded-full text-sm border ${cur ? 'bg-gradient-to-r from-prakash-gold to-sacred-saffron text-[#1a2a3a] border-transparent font-bold' : 'bg-white/40 text-nidra-indigo/70 border-prakash-gold/20'}`}>
                        {bi(`Pada ${i + 1} · ${p.sa}`, `पाद ${i + 1} · ${p.hi}`)}{cur ? ' ✦' : ''}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {showBoy && (
                  <NameColumn title={bi('Auspicious Boy Names', 'शुभ बालक नाम')} icon="👦" accent="from-cyan-400 to-prakash-gold" names={result.boys} syllable={result.syllable.sa} bi={bi} />
                )}
                {showGirl && (
                  <NameColumn title={bi('Auspicious Girl Names', 'शुभ बालिका नाम')} icon="👧" accent="from-rose-400 to-kumkuma-red" names={result.girls} syllable={result.syllable.sa} bi={bi} />
                )}
              </div>

              {/* actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a href={getWhatsAppLink(shareMsg)} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.5)] transition-all text-center">{bi('📲 Share on WhatsApp', '📲 WhatsApp पर साझा करें')}</a>
                <a href={getWhatsAppLink(bi(`Hi AstroVastu Expert, I want a full Namakaran & Numerology consultation.\nDOB: ${dob || '-'} · Time: ${time || '-'} · Place: ${place || '-'} · Gotra: ${gotra || '-'}`, `नमस्ते आचार्य जी, मैं पूर्ण नामकरण व अंक-मिलान परामर्श चाहता/चाहती हूँ।\nजन्म: ${dob || '-'} · समय: ${time || '-'} · स्थान: ${place || '-'} · गोत्र: ${gotra || '-'}`))} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:brightness-110 transition-all text-center">{bi('🔢 Book Namakaran with Acharya', '🔢 आचार्य से नामकरण बुक करें')}</a>
              </div>

              <p className="text-center text-xs text-nidra-indigo/45 max-w-2xl mx-auto pt-1">{bi('Names are suggestions from the auspicious starting akshar; finalise the name with family, the panchang and Acharya ji’s full Namakaran (which also matches the number to the Mulank).', 'नाम शुभ आदि-अक्षर से सुझाव हैं; अंतिम नाम परिवार, पंचांग व आचार्य जी के पूर्ण नामकरण (जिसमें मूलांक से अंक-मिलान भी होता है) से तय करें।')}</p>
            </div>
          </motion.section>
        )}

      <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.9}}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="block text-sm font-medium text-nidra-indigo/70 mb-1.5">{label}</span>{children}</label>;
}

function NameColumn({ title, icon, accent, names, syllable, bi }: { title: string; icon: string; accent: string; names: { en: string; hi: string }[]; syllable: string; bi: (a: string, b: string) => string }) {
  const syl = syllable.toLowerCase();
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden p-6 rounded-[24px] bg-[var(--color-bg-glass)] border border-prakash-gold/20 shadow-[0_10px_30px_rgba(26,42,58,0.07)]">
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent}`} />
      <h4 className="font-serif text-lg text-nidra-indigo font-bold mb-4 flex items-center gap-2"><span className="text-2xl">{icon}</span>{title}</h4>
      <ul className="space-y-2">
        {names.map((n, i) => {
          const matched = n.en.toLowerCase().startsWith(syl.slice(0, 2));
          return (
            <motion.li key={n.en + i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${matched ? 'bg-prakash-gold/15 border-prakash-gold/40' : 'bg-white/40 border-prakash-gold/15'}`}>
              <span className="font-medium text-nidra-indigo">{bi(n.en, n.hi)}</span>
              {matched && <span className="text-[11px] px-2 py-0.5 rounded-full bg-prakash-gold text-[#1a2a3a] font-semibold">{bi('★ pada', '★ पाद')}</span>}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function NameSuggestionContent() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <NameSuggestionTool />
        </main>
      </SmoothScroll>
    </>
  );
}

export default function NameSuggestionPage() {
  return <NameSuggestionContent />;
}
