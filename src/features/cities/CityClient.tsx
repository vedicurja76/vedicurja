'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';
import { cityFaq, CITIES, type City } from './data';

const CITY_SERVICES = [
  { slug: 'residential', en: 'Residential Vastu', hi: 'आवासीय वास्तु', dEn: 'Flats, apartments & independent homes', dHi: 'फ्लैट, अपार्टमेंट व स्वतंत्र घर' },
  { slug: 'commercial', en: 'Commercial Vastu', hi: 'व्यावसायिक वास्तु', dEn: 'Shops, offices & showrooms', dHi: 'दुकानें, कार्यालय व शोरूम' },
  { slug: 'industrial', en: 'Industrial Vastu', hi: 'औद्योगिक वास्तु', dEn: 'Factories, plants & warehouses', dHi: 'फैक्ट्रियां, प्लांट व गोदाम' },
  { slug: 'land', en: 'Land Selection', hi: 'भूमि चयन', dEn: 'Plot direction & Bhoomi Dosh audit', dHi: 'प्लॉट दिशा व भूमि दोष ऑडिट' },
  { slug: 'kundali', en: 'Kundali Analysis', hi: 'कुंडली विश्लेषण', dEn: 'Birth-chart & dosha reading', dHi: 'जन्म-कुंडली व दोष पठन' },
  { slug: 'numerology-namakaran', en: 'Numerology & Namakaran', hi: 'अंक ज्योतिष व नामकरण', dEn: 'Name, mobile & date corrections', dHi: 'नाम, मोबाइल व दिनांक सुधार' },
  { slug: 'remedies', en: 'Vastu Remedies', hi: 'वास्तु उपाय', dEn: 'Yantra, crystal & colour therapy', dHi: 'यंत्र, स्फटिक व रंग थेरेपी' },
  { slug: 'virtual-consult', en: 'Virtual Consult', hi: 'वर्चुअल परामर्श', dEn: 'Live video session, worldwide', dHi: 'लाइव वीडियो सत्र, विश्वभर' },
];

export default function CityClient({ city }: { city: City }) {
  const bi = useBi();
  const faqs = cityFaq(city);
  const waMsg = `Hi AstroVastu Expert, I want a Vastu consultation in ${city.name}. Please guide me.`;
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 9);

  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_14s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.10),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi(`Vastu Consultancy in`, `${city.nameHi} में वास्तु सेवा`)} {city.name}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi(city.taglineEn, city.taglineHi)}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/75 max-w-3xl mx-auto mb-4">{bi(city.introEn, city.introHi)}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/55 max-w-2xl mx-auto mb-10">{bi('4th-generation Vedic Vastu · Tantra-trained · MBA & Ex-CEO · 10M+ views · 2 Lakh+ clients across 50+ countries', '4थी पीढ़ी की वैदिक वास्तु · तंत्र-प्रशिक्षित · MBA व पूर्व सीईओ · 1 करोड़+ दर्शक · 50+ देशों में 2 लाख+ ग्राहक')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Book on WhatsApp', 'WhatsApp पर बुक करें')}</a>
              <Link href="/bookings" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">{bi('View Pricing & Plans', 'मूल्य व योजनाएँ देखें')}</Link>
            </div>
          </div>
        </section>

        {/* SERVICES IN THIS CITY */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi(`Vastu Services in ${city.name}`, `${city.nameHi} में वास्तु सेवाएँ`)}</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Complete Vedic', 'संपूर्ण वैदिक')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Solutions', 'समाधान')}</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CITY_SERVICES.map((s, i) => (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -6, scale: 1.03 }}>
                  <Link href={`/services/${s.slug}`} className="block h-full p-6 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.18)] hover:border-prakash-gold/40 transition-all duration-300">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-1">{bi(s.en, s.hi)}</h3>
                    <p className="text-sm text-nidra-indigo/60">{bi(s.dEn, s.dHi)}</p>
                    <span className="inline-block mt-3 text-prakash-gold text-sm font-semibold">{bi('Learn more →', 'और जानें →')}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS SERVED */}
        <section className="py-20 bg-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Areas We Serve', 'हमारे सेवा क्षेत्र')}</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3">{bi(`On-site & Virtual Vastu across ${city.name}`, `${city.nameHi} में साइट पर व वर्चुअल वास्तु`)}</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {city.areas.map((a, i) => (
                <motion.span key={a.en} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="px-5 py-2.5 rounded-full bg-vastu-stone/40 border border-prakash-gold/20 text-nidra-indigo/80 text-sm font-medium">{bi(a.en, a.hi)}</motion.span>
              ))}
            </div>
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-bg-glass)] border border-prakash-gold/20 shadow-lg text-center">
              <h3 className="font-serif text-2xl text-nidra-indigo font-bold mb-3">{bi(`Why Vastu matters in ${city.name}`, `${city.nameHi} में वास्तु क्यों आवश्यक`)}</h3>
              <p className="text-nidra-indigo/70 leading-relaxed max-w-3xl mx-auto">{bi(city.localAngleEn, city.localAngleHi)}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-vastu-stone/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Frequently Asked', 'अक्सर पूछे जाने वाले')}</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3">{bi(`Vastu Questions — ${city.name}`, `प्रश्न — ${city.nameHi}`)}</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl bg-[var(--color-bg-glass)] border border-prakash-gold/20 overflow-hidden">
                  <summary className="cursor-pointer list-none p-5 font-serif text-lg text-nidra-indigo font-semibold flex items-center justify-between gap-4">
                    <span>{bi(f.qEn, f.qHi)}</span>
                    <span className="text-prakash-gold text-2xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-nidra-indigo/70 leading-relaxed">{bi(f.aEn, f.aHi)}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi(`Bring Balance to your ${city.name} home`, `अपने ${city.nameHi} घर लाएं संतुलन`)}</h2>
            <p className="text-[var(--color-hero-fg)]/75 text-lg max-w-2xl mx-auto mb-8">{bi('Personally conducted by AstroVastu Expert KK Nagaich. No delegation, no generic reports — every audit is bespoke.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा स्वयं संपन्न। कोई अर्पण नहीं, कोई सामान्य रिपोर्ट नहीं — हर ऑडिट विशिष्ट।')}</p>
            <a href={getWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">{bi(`Book Vastu Consultation in ${city.name}`, `${city.nameHi} में वास्तु परामर्श बुक करें`)}</a>
          </div>
        </section>

        {/* OTHER CITIES */}
        <section className="py-16 bg-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="font-serif text-2xl text-nidra-indigo mb-6">{bi('We also serve', 'हम यहां भी सेवा देते हैं')}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link key={c.slug} href={`/cities/${c.slug}`} className="px-4 py-2 rounded-full bg-vastu-stone/40 border border-prakash-gold/20 text-nidra-indigo/80 text-sm hover:border-prakash-gold/50 hover:text-nidra-indigo transition-colors">{bi(c.name, c.nameHi)}</Link>
              ))}
            </div>
          </div>
        </section>

        <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      </main>
    </>
  );
}
