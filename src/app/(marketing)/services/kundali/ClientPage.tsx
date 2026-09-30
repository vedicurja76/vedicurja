'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

/* ------------------------------------------------------------------
   HOROSCOPE RASHI DATA
   ------------------------------------------------------------------ */
const RASHIS = [
  { name: 'Aries', hi: 'मेष', sanskrit: 'Mesha', symbol: '♈', color: '#E63946' },
  { name: 'Taurus', hi: 'वृषभ', sanskrit: 'Vrishabha', symbol: '♉', color: '#D4A373' },
  { name: 'Gemini', hi: 'मिथुन', sanskrit: 'Mithuna', symbol: '♊', color: '#F4A261' },
  { name: 'Cancer', hi: 'कर्क', sanskrit: 'Karka', symbol: '♋', color: '#E9C46A' },
  { name: 'Leo', hi: 'सिंह', sanskrit: 'Simha', symbol: '♌', color: '#F4A261' },
  { name: 'Virgo', hi: 'कन्या', sanskrit: 'Kanya', symbol: '♍', color: '#A7C957' },
  { name: 'Libra', hi: 'तुला', sanskrit: 'Tula', symbol: '♎', color: '#6A994E' },
  { name: 'Scorpio', hi: 'वृश्चिक', sanskrit: 'Vrishchika', symbol: '♏', color: '#BC4742' },
  { name: 'Sagittarius', hi: 'धनु', sanskrit: 'Dhanu', symbol: '♐', color: '#D4A373' },
  { name: 'Capricorn', hi: 'मकर', sanskrit: 'Makara', symbol: '♑', color: '#7F5539' },
  { name: 'Aquarius', hi: 'कुंभ', sanskrit: 'Kumbha', symbol: '♒', color: '#457B9D' },
  { name: 'Pisces', hi: 'मीन', sanskrit: 'Meena', symbol: '♓', color: '#9C89B8' },
];

const GITHUB_BASE = 'https://nikhilsinghstudy999-wq.github.io/daily-horoscope-data/data/rashi';

interface HoroscopeData {
  general: string;
  luck: string;
  scope: string;
  study: string;
  love: string;
  travel: string;
  lucky_number: number;
  lucky_color: string;
}

function DailyHoroscopeSection() {
  const bi = useBi();
  const { language } = useLanguage();
  const hi = language === 'hi';
  const [selectedRashi, setSelectedRashi] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchHoroscope = async (rashiName: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${GITHUB_BASE}/${rashiName}.json`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setHoroscope(json.data);
    } catch (err) {
      console.error(err);
      setHoroscope(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (rashi: string) => {
    setSelectedRashi(rashi);
    fetchHoroscope(rashi);
  };

  const labels = [
    { label: 'General', labelHi: 'सामान्य', value: horoscope?.general, icon: '◈' },
    { label: 'Luck', labelHi: 'भाग्य', value: horoscope?.luck, icon: '◆' },
    { label: 'Scope', labelHi: 'दायरा', value: horoscope?.scope, icon: '◇' },
    { label: 'Study', labelHi: 'पढ़ाई', value: horoscope?.study, icon: '◉' },
    { label: 'Love', labelHi: 'प्रेम', value: horoscope?.love, icon: '♡' },
    { label: 'Travel', labelHi: 'यात्रा', value: horoscope?.travel, icon: '✈' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Free Daily Guidance', 'निःशुल्क दैनिक मार्गदर्शन')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi("Check Your Today's Horoscope", 'आज का अपना राशिफल देखें')}</h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">{bi('Instant free daily prediction – updated every morning with real planetary transits.', 'तुरंत निःशुल्क दैनिक भविष्यवाणी – प्रत्येक प्रातः वास्तविक ग्रह-गोचर के साथ अद्यतन।')}</p>
        </motion.div>

        {/* Rashi Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {RASHIS.map((rashi) => (
            <button
              key={rashi.name}
              onClick={() => handleSelect(rashi.name)}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                selectedRashi === rashi.name
                  ? 'bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white border-transparent shadow-lg'
                  : 'bg-[var(--color-bg-glass)] border-prakash-gold/20 hover:border-prakash-gold hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-1" style={{ color: selectedRashi === rashi.name ? '#fff' : rashi.color }}>{rashi.symbol}</div>
              <div className="font-serif text-lg font-bold">{hi ? rashi.hi : rashi.name}</div>
              <div className="text-xs opacity-70">{rashi.sanskrit}</div>
            </button>
          ))}
        </div>

        {/* Horoscope Result */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {horoscope && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-prakash-gold/20 shadow-xl">
            <div className="text-center mb-6">
              <span className="text-4xl">{RASHIS.find(r => r.name === selectedRashi)?.symbol}</span>
              <h3 className="font-serif text-2xl text-nidra-indigo mt-2">{hi ? (RASHIS.find(r => r.name === selectedRashi)?.hi || selectedRashi) : selectedRashi}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {labels.map((item) => (
                <div key={item.label} className="bg-vastu-stone/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-prakash-gold text-lg">{item.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-nidra-indigo/60">{bi(item.label, item.labelHi)}</span>
                  </div>
                  <p className="text-sm text-nidra-indigo/80">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-6 text-center">
              <div>
                <p className="text-xs text-nidra-indigo/50 uppercase">{bi('Lucky Number', 'शुभ संख्या')}</p>
                <p className="text-2xl font-bold text-prakash-gold">{horoscope.lucky_number}</p>
              </div>
              <div>
                <p className="text-xs text-nidra-indigo/50 uppercase">{bi('Lucky Color', 'शुभ रंग')}</p>
                <p className="text-2xl font-bold text-prakash-gold">{horoscope.lucky_color}</p>
                <div className="w-8 h-8 rounded-full mx-auto mt-1 border border-prakash-gold/30" style={{ backgroundColor: horoscope.lucky_color.toLowerCase() }} />
              </div>
            </div>
            <p className="text-center text-xs text-nidra-indigo/40 mt-6">{bi('* For a complete personalised Kundali report, book our expert analysis below.', '* संपूर्ण व्यक्तिगत कुंडली रिपोर्ट हेतु, नीचे हमारा विशेषज्ञ विश्लेषण बुक करें।')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PRICING CARD – Single plan
   ------------------------------------------------------------------ */
function PricingCard() {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I want to book the Full Kundali Analysis report (₹999). Please share payment details.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  const items = [
    ['Janam Kundali + 12‑Bhava analysis', 'जनम कुंडली + 12-भाव विश्लेषण'],
    ['Shadbala (6‑fold planetary strength)', 'षड्बल (ग्रह बल का छह स्तरीय मापन)'],
    ['Vimshottari Dasha overview', 'विम्शोत्तरी दशा अवलोकन'],
    ['Detailed Gochar transit (5‑year)', 'विस्तृत गोचर (5‑वर्षीय)'],
    ['10 Raj & Dhana Yogas identification', '10 राज एवं धन योगों की पहचान'],
    ['Gemstone & Rudraksha prescription', 'रत्न एवं रुद्राख prescription'],
    ['Mantra protocol (48‑day)', 'मंत्र विधि (48‑दिन)'],
    ['Kundali matching (Guna Milan)', 'कुंडली मिलान (गुण मिलान)'],
    ['PDF report (20+ pages)', 'PDF रिपोर्ट (20+ पृष्ठ)'],
    ['One‑on‑one consultation (30 min)', 'एक-से-एक परामर्श (30 मिनट)'],
  ];

  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className="relative max-w-md mx-auto p-8 rounded-2xl border-2 border-prakash-gold bg-[var(--color-bg-elevated)] shadow-xl hover:shadow-2xl transition-all">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">✦ {bi('Complete Analysis', 'संपूर्ण विश्लेषण')}</div>
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-prakash-gold to-sacred-saffron" />
      <h3 className="font-serif text-2xl text-nidra-indigo font-bold text-center mt-4">{bi('Full Kundali Report', 'पूर्ण कुंडली रिपोर्ट')}</h3>
      <div className="text-4xl font-bold text-center mt-4 text-prakash-gold"><span className="line-through text-gray-400 text-xl mr-2">₹5,999</span> <span className="text-3xl font-bold text-prakash-gold">₹999</span></div>
      <p className="text-center text-sm text-nidra-indigo/50 mb-6">{bi('One‑time investment for a lifetime of clarity', 'एक बार का निवेश, जीवनभर की स्पष्टता हेतु')}</p>
      <ul className="space-y-3 text-sm text-nidra-indigo/70 mb-8">
        {items.map(([en, hiT], i) => (
          <li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />{bi(en, hiT)}</li>
        ))}
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white font-semibold hover:shadow-lg transition-all"
      >
        {bi('Book via WhatsApp →', 'WhatsApp से बुक करें →')}
      </a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   WHY CHOOSE (SVG version)
   ------------------------------------------------------------------ */
function WhyChooseAstroVastu() {
  const bi = useBi();
  const reasons = [
    {
      title: '4th Generation Lineage',
      titleHi: '4 पीढ़ियों की परंपरा',
      desc: 'Inherited Vastu knowledge from a direct Guru‑Shishya Parampara.',
      descHi: 'प्रत्यक्ष गुरु-शिष्य परंपरा से विरासत में मिलवा वास्तु ज्ञान।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Tantra & Ritual Master',
      titleHi: 'तंत्र एवं अनुष्ठान निष्णात',
      desc: 'Personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti.',
      descHi: 'प्रत्येक हवन, यंत्र प्राण प्रतिष्ठा और नवग्रह शांति स्वयं संपन्न करते हैं।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7.636v12.728" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'MBA + Ex‑CEO',
      titleHi: 'MBA + पूर्व सीईओ',
      desc: 'Maps every planetary defect to business and life outcomes – practical, actionable insights.',
      descHi: 'प्रत्येक ग्रह दोष को व्यापार एवं जीवन परिणामों से जोड़ते हैं — व्यावहारिक, क्रियान्वयन-योग्य अंतर्दृष्टि।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '100M+ Viral Views',
      titleHi: '100M+ वायरल दर्शक',
      desc: 'India’s most‑watched Vedic astrologer – trusted by millions.',
      descHi: 'भारत के सर्वाधिक देखा जाने वाले वैदिक ज्योतिषी — करोड़ों का विश्वास।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '2 Lakh+ Clients',
      titleHi: '2 लाख+ ग्राहक',
      desc: 'Across 50+ countries – from students to CEOs.',
      descHi: '50+ देशों में — छात्रों से सीईओ तक।',
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
      title: 'Best Vedic Astrologer',
      titleHi: 'सर्वश्रेष्ठ वैदिक ज्योतिषी',
      desc: 'Recognised as one of the most accurate Kundali analysts in India.',
      descHi: 'भारत के सर्वाधिक सटीक कुंडली विश्लेषकों में से एक के रूप में मान्यता प्राप्त।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Why Choose AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट ही क्यों')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('The', 'वह')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Deadly Combination', 'अजेय संयोजन')}</span> {bi('No Other Astrologer Possesses', 'जो किसी अन्य ज्योतिषी के पास नहीं')}</h2>
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
   PROCESS STEPS
   ------------------------------------------------------------------ */
function ProcessSection() {
  const bi = useBi();
  const steps = [
    { step: '01', title: 'Submit Birth Details', titleHi: 'जन्म विवरण जमा करें', desc: 'Share exact date, time, and place of birth via WhatsApp.', descHi: 'WhatsApp के माध्यम से सटीक जन्म तिथि, समय एवं स्थान साझा करें।' },
    { step: '02', title: 'Chart Generated', titleHi: 'कुंडली निर्मित', desc: 'We generate a 20+ page Kundali with Lagna, Navamsa, Vimshottari Dasha.', descHi: 'हम लग्न, नवांश एवं विम्शोत्तरी दशा सहित 20+ पृष्ठों की कुंडली निर्मित करते हैं।' },
    { step: '03', title: 'Deep Analysis', titleHi: 'गहन विश्लेषण', desc: 'Shadbala, 10 Raj & Dhana Yogas, all doshas identified by Acharya.', descHi: 'षड्बल, 10 राज एवं धन योग, सभी दोषों की पहचान आचार्य द्वारा।' },
    { step: '04', title: 'Personalised Remedies', titleHi: 'व्यक्तिगत उपचार', desc: 'Gemstone, Rudraksha, mantra protocol, and yantra guidance – plus 30‑min consultation.', descHi: 'रत्न, रुद्राख, मंत्र विधि एवं यंत्र मार्गदर्शन — साथ में 30 मिनट का परामर्श।' },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('How It Works', 'यह कैसे काम करता है')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Your Journey to', 'आपकी यात्रा')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Clarity & Purpose', 'स्पष्टता एवं उद्देश्य की ओर')}</span></h2>
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
              <div className="text-5xl font-bold text-prakash-gold/30 mb-2">{step.step}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi(step.title, step.titleHi)}</h3>
              <p className="text-sm text-nidra-indigo/60">{bi(step.desc, step.descHi)}</p>
              {i < steps.length - 1 && <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-prakash-gold text-xl">→</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FINAL CTA
   ------------------------------------------------------------------ */
function FinalCTA() {
  const bi = useBi();
  const whatsappLink = '/bookings?service=kundali&plan=report';

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Discover Your Cosmic Blueprint', 'अपना ब्रह्मांडीय नक्शा जानें')}</h2>
        <p className="text-[var(--color-hero-fg)]/70 text-lg max-w-2xl mx-auto mb-8">
          {bi('AstroVastu Expert KK Nagaich –', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच –')} <strong className="text-prakash-gold">{bi('100M+ views, 80K+ followers, MBA, Ex‑CEO, 4th‑generation Tantra‑trained Vastu Guru & Nadi Jyotish', '100M+ दर्शक, 80K+ फॉलोअर, MBA, पूर्व सीईओ, 4थी पीढ़ी के तंत्र-प्रशिक्षित वास्तु गुरु एवं नाड़ी ज्योतिष')}</strong> {bi('– personally analyses every Kundali. No software‑generated generic reports.', '– स्वयं प्रत्येक कुंडली का विश्लेषण करते हैं। कोई सॉफ्टवेयर-जनित सामान्य रिपोर्ट नहीं।')}
        </p>
        <a href={whatsappLink} target="_self" rel="noopener" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
          {bi('Book & Pay Online →', 'अभी बुक करें व भुगतान करें →')}
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   MAIN PAGE ASSEMBLY
   ------------------------------------------------------------------ */
export default function KundaliAnalysisPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Vedic Nadi Jyotish', 'वैदिक नाड़ी ज्योतिष')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Kundali Analysis', 'कुंडली विश्लेषण')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4">{bi('Vedic Nadi Jyotish · 120‑year Dasha · Shadbala · Gemstone & Rudraksha', 'वैदिक नाड़ी ज्योतिष · 120‑वर्षीय दशा · षड्बल · रत्न एवं रुद्राख')}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi('Trained in Nadi Jyotish under direct Guru‑Shishya Parampara — 100M+ views, 80K+ followers.', 'प्रत्यक्ष गुरु-शिष्य परंपरा में नाड़ी ज्योतिष में प्रशिक्षित — 100M+ दर्शक, 80K+ फॉलोअर।')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bookings?service=kundali" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                {bi('Book & Pay Online', 'अभी बुक करें व भुगतान करें')}
              </a>
              <a href="/free-tools/ai-astrology" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                {bi('Try Free AI Astrology Reading', 'निःशुल्क AI ज्योतिष पठन आज़माएँ')}
              </a>
            </div>
          </div>
        </section>

        <WhyChooseAstroVastu />

        {/* Daily Horoscope Section */}
        <div id="horoscope">
          <DailyHoroscopeSection />
        </div>

        <ProcessSection />

        <div className="py-20 bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-elevated)]">
          <PricingCard />
        </div>

        <RemediesCTA />
        <VirtualConsultCTA />

        <FinalCTA />
      </main>
    </>
  );
}