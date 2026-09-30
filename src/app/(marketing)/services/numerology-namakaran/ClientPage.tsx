'use client';

import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';

/* ------------------------------------------------------------------
   PAIN POINT CARD – with WhatsApp redirect
   ------------------------------------------------------------------ */
function PainPointCard({ title, titleHi, accent, points, pointsHi, delay }: { title: string; titleHi?: string; accent: string; points: string[]; pointsHi?: string[]; delay?: number }) {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I am interested in Numerology & Namakaran consultation for: ${title.toLowerCase()}. Please guide me.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay || 0, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
      <div className="relative p-6 rounded-[28px] bg-[var(--color-bg-glass)] backdrop-blur-xl border border-prakash-gold/20 shadow-[0_8px_32px_rgba(26,42,58,0.06)] hover:shadow-[0_20px_50px_rgba(200,138,93,0.15)] transition-shadow duration-500">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px]" style={{ backgroundColor: accent }} />
        <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-5">{bi(title, titleHi)}</h3>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-nidra-indigo/70 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
              <span>{bi(point, pointsHi?.[i])}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            {bi('Get Solution on WhatsApp', 'WhatsApp पर समाधान पाएं')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   PRICING CARD – with WhatsApp button (Basic + Premium)
   ------------------------------------------------------------------ */
function PricingCard({ plan, price, color, features, featuresHi, best }: { plan: string; price: string; color: string; features: string[]; featuresHi?: string[]; best?: boolean }) {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I want to book the ${plan} plan (₹${price}) for Numerology & Namakaran consultation. Please share payment details.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className={`relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all ${best ? 'border-prakash-gold bg-[var(--color-bg-elevated)]' : 'bg-[var(--color-bg-glass)] border-prakash-gold/20'}`}>
      {best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">{bi('✦ Most Popular', '✦ सबसे लोकप्रिय')}</div>}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} />
      <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3>
      <div className="text-3xl font-bold mt-2" style={{ color }}>₹{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            {bi(f, featuresHi?.[i])}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white font-semibold hover:shadow-lg transition-all"
        >
          {bi('Book via WhatsApp →', 'WhatsApp पर बुक करें →')}
        </a>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   WHY CHOOSE VEDICURJA – Deep SVGs, SEO‑optimized copy
   ------------------------------------------------------------------ */
function WhyChooseAstroVastu() {
  const bi = useBi();
  const reasons = [
    {
      title: '4th Generation Lineage',
      titleHi: '4 पीढ़ियों की परंपरा',
      desc: 'Inherited Vastu knowledge from a direct Guru‑Shishya Parampara, certified under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, and Dr. Rajendra Jain.',
      descHi: 'सीधी गुरु-शिष्य परंपरा से विरासत में मिला वास्तु ज्ञान — डॉ. शिव वर्मा, डॉ. नरेंद्र सहसत्रबुद्धे और डॉ. राजेंद्र जैन से प्रमाणित।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Nakshatra & Numerology Expert',
      titleHi: 'नक्षत्र एवं अंकशास्त्र विशेषज्ञ',
      desc: 'Trained in 27‑Nakshatra syllable mapping, Chaldean & Pythagorean systems – authentic Vedic naming science.',
      descHi: '27 नक्षत्र अक्षर-मानचित्रण, कैल्डियन व पाइथागोरियन प्रणाली में प्रशिक्षित — प्रामाणिक वैदिक नामकरण विज्ञान।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v8M8 12h8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: '100M+ Viral Views',
      titleHi: '10 करोड़+ वायरल व्यूज़',
      desc: 'India’s most‑watched Vastu & numerology expert – trusted by millions.',
      descHi: 'भारत के सबसे अधिक देखे जाने वाले वास्तु व अंकशास्त्र विशेषज्ञ — लाखों का भरोसा।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '2 Lakh+ Name Consultations',
      titleHi: '2 लाख+ नाम परामर्श',
      desc: 'Performed over 2 lakh name corrections for newborns, businesses, and adults across 50+ countries.',
      descHi: '50+ देशों में नवजातों, व्यवसायों और वयस्कों के लिए 2 लाख से अधिक नाम सुधार किए।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Mobile Number Numerology',
      titleHi: 'मोबाइल नंबर अंकशास्त्र',
      desc: 'Specialised in mobile number vibration analysis – aligning digits with your birth chart for success.',
      descHi: 'मोबाइल नंबर कंपन विश्लेषण में विशेषज्ञता — सफलता के लिए अंकों को आपकी कुंडली से संरेखित करना।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Best Numerologist in India',
      titleHi: 'भारत के सर्वश्रेष्ठ अंकशास्त्री',
      desc: 'Recognised as one of the most accurate numerologists, recommended by families and businesses alike.',
      descHi: 'सबसे सटीक अंकशास्त्रियों में से एक के रूप में मान्य — परिवारों और व्यवसायों दोनों द्वारा अनुशंसित।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Why Choose AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट को ही क्यों')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            {bi('The', 'यह')}{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Deadly Combination', 'अनोखा संयोजन')}</span>
            {' '}{bi('No Other Numerologist Possesses', 'जो किसी अन्य अंकशास्त्री के पास नहीं')}
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            {bi('AstroVastu Expert KK Nagaich uniquely combines Nakshatra mastery, MBA‑grade business naming insight, and 4th‑generation Vedic lineage – a trio unmatched by any other numerologist.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच नक्षत्र विशेषज्ञता, MBA-स्तरीय व्यावसायिक नामकरण दक्षता और 4 पीढ़ियों की वैदिक परंपरा को अद्वितीय रूप से जोड़ते हैं — कोई अन्य अंकशास्त्री इसका मुकाबला नहीं कर सकता।')}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="p-6 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-prakash-gold mb-4">{r.svg}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi(r.title, r.titleHi)}</h3>
              <p className="text-sm text-nidra-indigo/60 leading-relaxed">{bi(r.desc, r.descHi)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   YOUR JOURNEY – Luxury aligned steps
   ------------------------------------------------------------------ */
function YourJourneySection() {
  const bi = useBi();
  const steps = [
    {
      step: '01',
      title: 'Submit Details',
      titleHi: 'विवरण जमा करें',
      desc: 'For newborns – birth details. For adults/business – current name and birth details.',
      descHi: 'नवजातों के लिए — जन्म विवरण। वयस्कों/व्यवसाय के लिए — वर्तमान नाम और जन्म विवरण।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Vibration Analysis',
      titleHi: 'कंपन विश्लेषण',
      desc: 'Acharya calculates Psychic Number, Destiny Number, Name Number & Nakshatra syllable match.',
      descHi: 'आचार्य मनोक्रमांक, भाग्यांक, नामांक और नक्षत्र अक्षर-मेल की गणना करते हैं।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Recommendations',
      titleHi: 'सिफ़ारिशें',
      desc: 'Receive 3‑5 name alternatives with meanings, or new mobile numbers that vibrate with your chart.',
      descHi: 'अर्थ सहित 3–5 नाम विकल्प, या आपकी कुंडली से अनुनाद करते नए मोबाइल नंबर प्राप्त करें।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Namakaran + Activation',
      titleHi: 'नामकरण + एक्टिवेशन',
      desc: 'Optional sacred naming ceremony or new SIM activation muhurat – performed by Acharya personally.',
      descHi: 'वैकल्पिक पवित्र नामकरण संस्कार या नई SIM एक्टिवेशन मुहूर्त — आचार्य स्वयं संपन्न करते हैं।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Your Journey', 'आपकी यात्रा')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Your Journey to an', 'एक शुभ नाम एवं संख्या की ओर')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Auspicious Name & Number', 'आपकी यात्रा')}</span></h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">{bi('From data submission to vibration alignment – simple, sacred, and transformative.', 'डेटा जमा करने से कंपन संरेखण तक — सरल, पवित्र और रूपांतरणकारी।')}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative text-center p-6 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/20 shadow-lg"
            >
              <div className="text-prakash-gold mx-auto mb-3">{step.icon}</div>
              <div className="text-4xl font-bold text-prakash-gold/30 mb-2">{step.step}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi(step.title, step.titleHi)}</h3>
              <p className="text-sm text-nidra-indigo/60">{bi(step.desc, step.descHi)}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-prakash-gold text-xl">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   MAIN PAGE ASSEMBLY
   ------------------------------------------------------------------ */
export default function NumerologyNamakaranPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* HERO – elegant static gradient */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('108‑Sacred Syllables · Nakshatra‑Aligned', '108 पवित्र अक्षर · नक्षत्र-संरेखित')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Numerology & Namakaran', 'अंकशास्त्र एवं नामकरण')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4">{bi('108‑Syllable Nakshatra Naming · Business Numerology · Mobile Number Analysis — All in One', '108-अक्षर नक्षत्र नामकरण · व्यावसायिक अंकशास्त्र · मोबाइल नंबर विश्लेषण — सब एक साथ')}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi("100M+ views, 80K+ followers — India's most‑viewed naming & numerology expert.", '10 करोड़+ व्यूज़, 80 हज़ार+ फॉलोअर्स — भारत के सबसे अधिक देखे जाने वाले नामकरण व अंकशास्त्र विशेषज्ञ।')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bookings?service=numerology-namakaran" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                {bi('Book & Pay Online', 'अभी बुक करें व भुगतान करें')}
              </a>
              <a href="#situations" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                {bi('Explore Services', 'सेवाएं देखें')}
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose AstroVastu Expert – no brand logos section */}
        <WhyChooseAstroVastu />

        {/* FIND YOUR SITUATION – with WhatsApp CTA */}
        <section id="situations" className="py-20 bg-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Find Your Situation', 'अपनी स्थिति पहचानें')}</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi("What's in a Name?", 'नाम में क्या रखा है?')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Everything.', 'सब कुछ।')}</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PainPointCard title="Newborn Naming" titleHi="नवजात का नामकरण" accent="#2563EB" points={[
                "Family pressure to use traditional names you don't like",
                "Multiple pandits giving different name suggestions",
                "Fear of wrong name causing life problems",
                "Child frequently ill since birth — is the name wrong?",
                "Astrologer suggested name that already exists in family",
                "Modern vs. traditional name conflict with spouse",
                "Nakshatra syllable sounds harsh, can't find good names",
                "Child's birth star is 'difficult' — fear of doshas",
                "Both partners have different cultural backgrounds",
                "Fear of judgment from relatives on chosen name"
              ]} pointsHi={[
                "परिवार का दबाव ऐसे पारंपरिक नाम रखने के लिए जो आपको पसंद नहीं",
                "कई पंडित अलग-अलग नाम के सुझाव दे रहे हैं",
                "गलत नाम से जीवन में समस्या होने का भय",
                "जन्म से ही बार-बार बीमार बच्चा — क्या नाम गलत है?",
                "ज्योतिषी ने परिवार में पहले से मौजूद नाम सुझाया",
                "आधुनिक बनाम पारंपरिक नाम को लेकर जीवनसाथी से मतभेद",
                "नक्षत्र अक्षर कठोर लगते हैं, अच्छे नाम नहीं मिल रहे",
                "बच्चे की जन्मनक्षत्र 'कठिन' है — दोष का भय",
                "दोनों जीवनसाथियों की सांस्कृतिक पृष्ठभूमि अलग",
                "चुने नाम पर रिश्तेदारों के आलोचना का भय"
              ]} delay={0} />
              <PainPointCard title="Business Naming" titleHi="व्यवसाय का नामकरण" accent="#7C3AED" points={[
                "Business struggling despite good product — name the problem?",
                "Multiple businesses failed with similar names",
                "Partner insisting on a name that 'doesn't feel right'",
                "Domain name for chosen business name already taken",
                "Logo designed, registration done, but something feels off",
                "Competitors with similar names succeeding, you're not",
                "Legal disputes over business name",
                "Name is hard to pronounce, recall, or search online",
                "Business numerology number is 'bad'",
                "Rebranding cost fear — already invested in logo"
              ]} pointsHi={[
                "अच्छे उत्पाद के बावजूद संघर्षरत व्यवसाय — क्या नाम ही समस्या है?",
                "मिलते-जुलते नामों से कई व्यवसाय असफल हुए",
                "साझेदार ऐसे नाम पर अड़े हैं जो 'ठीक नहीं लगता'",
                "चुने व्यवसाय नाम का डोमेन पहले से लिया गया है",
                "लोगो बना, पंजीकरण हुआ, पर कुछ गड़बड़ लगता है",
                "मिलते-जुलते नाम वाले प्रतिद्वंद्वी सफल, आप नहीं",
                "व्यवसाय नाम को लेकर कानूनी विवाद",
                "नाम उच्चारण, स्मरण या ऑनलाइन खोजने में कठिन",
                "व्यवसाय अंकशास्त्र की संख्या 'अच्छी' नहीं",
                "रीब्रांडिंग लागत का भय — लोगो पर निवेश हो चुका"
              ]} delay={0.1} />
              <PainPointCard title="Mobile Number Issues" titleHi="मोबाइल नंबर की समस्याएं" accent="#059669" points={[
                "Life was fine until you changed your number",
                "Every call brings bad news — you dread phone ringing",
                "Business calls don't convert — clients lose interest",
                "Relationships breaking after number change",
                "Getting spam, fraud calls, harassment",
                "Number given by 'expert' but problems increased",
                "Dual SIM confusion — one works, other doesn't",
                "Friends say your number is 'unlucky'",
                "Family insisting on number change, you're skeptical",
                "Multiple SIM cards, none bringing peace"
              ]} pointsHi={[
                "नंबर बदलने तक जीवन ठीक था",
                "हर कॉल बुरी खबर लाती है — फोन बजने से डर लगता है",
                "व्यवसाय कॉल नहीं बदलते — ग्राहक रूचि खो देते हैं",
                "नंबर बदलने के बाद रिश्ते टूट रहे हैं",
                "स्पैम, धोखाधड़ी की कॉल और परेशानी मिल रही है",
                "'विशेषज्ञ' ने दिया नंबर, पर समस्याएं बढ़ीं",
                "दोहरी SIM की उलझन — एक चलती है, दूसरी नहीं",
                "दोस्त कहते हैं आपका नंबर 'अशुभ' है",
                "परिवार नंबर बदलने पर अड़ा, आप संदेह में हैं",
                "कई SIM कार्ड, कोई शांति नहीं दे रहा"
              ]} delay={0.2} />
            </div>
          </div>
        </section>

        <YourJourneySection />

        {/* PRICING PLANS */}
        <section className="py-20 bg-vastu-stone/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">{bi('Pricing Plans', 'मूल्य योजनाएं')}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <PricingCard plan="Basic" price="1,999" color="#A0A0A0" features={[
                "One naming consultation (newborn/business/adult)",
                "OR one mobile number audit",
                "Nakshatra syllable identification",
                "Upto 30‑minute call"
              ]} featuresHi={[
                "एक नामकरण परामर्श (नवजात/व्यवसाय/वयस्क)",
                "या एक मोबाइल नंबर ऑडिट",
                "नक्षत्र अक्षर पहचान",
                "30 मिनट तक की कॉल"
              ]} />
              <PricingCard plan="Premium" price="4,999" color="#2563EB" features={[
                "All Basic features",
                "Both naming + mobile number analysis",
                "Business numerology audit",
                "Multiple name alternatives",
                "Activation Muhurat",
                "48‑day mantra protocol if needed"
              ]} featuresHi={[
                "सभी Basic फीचर्स",
                "नामकरण + मोबाइल नंबर दोनों का विश्लेषण",
                "व्यवसाय अंकशास्त्र ऑडिट",
                "कई नाम विकल्प",
                "एक्टिवेशन मुहूर्त",
                "आवश्यकता पर 48 दिन का मंत्र विधि"
              ]} best />
            </div>
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Discover Your Auspicious Name & Number', 'अपना शुभ नाम एवं संख्या जानें')}</h2>
            <p className="text-[var(--color-hero-fg)]/70 text-lg max-w-2xl mx-auto mb-8">
              {bi('AstroVastu Expert KK Nagaich –', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच –')} <strong className="text-prakash-gold">{bi('100M+ views, 80K+ followers, 4th‑generation Guru, Nakshatra & Numerology Expert', '10 करोड़+ व्यूज़, 80 हज़ार+ फॉलोअर्स, 4 पीढ़ियों की गुरु, नक्षत्र व अंकशास्त्र विशेषज्ञ')}</strong> {bi('– personally analyses every name and number. No generic reports.', '– स्वयं हर नाम और संख्या का विश्लेषण करते हैं। कोई सामान्य रिपोर्ट नहीं।')}
            </p>
            <a href="/bookings?service=numerology-namakaran" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
              {bi('Schedule Your Consultation →', 'अपना परामर्श शेड्यूल करें →')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}