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
  const whatsappMessage = `Hi AstroVastu Expert, I am interested in Industrial Vastu consultation for: ${title.toLowerCase()}. Please guide me.`;
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
   PRICING CARD – with WhatsApp button
   ------------------------------------------------------------------ */
function PricingCard({ plan, price, color, features, featuresHi, best }: { plan: string; price: string; color: string; features: string[]; featuresHi?: string[]; best?: boolean }) {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I want to book the ${plan} plan (${price}) for Industrial Vastu consultation. Please share payment details.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className={`relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all ${best ? 'border-prakash-gold bg-[var(--color-bg-elevated)]' : 'bg-[var(--color-bg-glass)] border-prakash-gold/20'}`}>
      {best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">{bi('✦ Most Popular', '✦ सबसे लोकप्रिय')}</div>}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} />
      <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3>
      <div className="text-3xl font-bold mt-2" style={{ color }}>{price}</div>
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
      title: 'Tantra & Ritual Master',
      titleHi: 'तंत्र एवं अनुष्ठान विशेषज्ञ',
      desc: 'Personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti – not just prescribes. A trained Tantra Sadhak.',
      descHi: 'प्रत्येक हवन, यंत्र प्राण प्रतिष्ठा और नवग्रह शांति स्वयं संपन्न करते हैं — केवल सलाह नहीं। प्रशिक्षित तंत्र साधक।',
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
      desc: 'Maps every Vastu defect directly to business metrics: production loss, downtime, accident rates, and operational efficiency.',
      descHi: 'हर वास्तु दोष को सीधे व्यावसायिक मापदंडों से जोड़ते हैं: उत्पादन हानि, डाउनटाइम, दुर्घटना दर और संचालन दक्षता।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '10M+ Viral Views',
      titleHi: '1 करोड़+ वायरल व्यूज़',
      desc: 'India’s most‑watched Vastu expert with over 100 million organic views across Instagram, YouTube, and Facebook.',
      descHi: 'भारत के सबसे अधिक देखे जाने वाले वास्तु विशेषज्ञ — Instagram, YouTube और Facebook पर 1 करोड़+ ऑर्गैनिक व्यूज़।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '2 Lakh+ Clients',
      titleHi: '2 लाख+ क्लाइंट्स',
      desc: 'Trusted by families and businesses across 50+ countries – from Lucknow to London, Delhi to Dubai.',
      descHi: '50+ देशों के परिवारों और व्यवसायों का भरोसा — लखनऊ से लंदन, दिल्ली से दुबई तक।',
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
      title: 'Best Industrial Vastu Expert',
      titleHi: 'सर्वश्रेष्ठ औद्योगिक वास्तु विशेषज्ञ',
      desc: 'Recognised as the leading industrial Vastu consultant, having transformed factories, plants, and warehouses across India.',
      descHi: 'अग्रणी औद्योगिक वास्तु सलाहकार के रूप में मान्य — भारत भर में कारखानों, प्लांट्स और वेयरहाउसों का रूपांतरण किया है।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12h8" strokeLinecap="round"/>
          <path d="M12 8v8" strokeLinecap="round"/>
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
            {' '}{bi('No Other Expert Possesses', 'जो किसी अन्य विशेषज्ञ के पास नहीं')}
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            {bi('AstroVastu Expert KK Nagaich uniquely combines Tantra mastery, MBA‑grade operational insight, and 4th‑generation Vedic lineage – a trio unmatched by any other industrial Vastu consultant.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच तंत्र विशेषज्ञता, MBA-स्तरीय संचालन दक्षता और 4 पीढ़ियों की वैदिक परंपरा को अद्वितीय रूप से जोड़ते हैं — कोई अन्य औद्योगिक वास्तु सलाहकार इसका मुकाबला नहीं कर सकता।')}
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
      title: 'Submit Factory Layout',
      titleHi: 'फैक्ट्री लेआउट जमा करें',
      desc: 'Upload your factory/plant floor plan, machinery positions, and production workflow.',
      descHi: 'अपने कारखाने/प्लांट का फ्लोर प्लान, मशीनरी की स्थिति और उत्पादन वर्कफ़्लो अपलोड करें।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Acharya Reviews',
      titleHi: 'आचार्य द्वारा समीक्षा',
      desc: 'AstroVastu Expert KK Nagaich personally analyzes heavy machinery zones, fire safety, and material flow.',
      descHi: 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच स्वयं भारी मशीनरी क्षेत्र, अग्नि सुरक्षा और सामग्री प्रवाह का विश्लेषण करते हैं।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Risk & Productivity Report',
      titleHi: 'जोखिम एवं उत्पादकता रिपोर्ट',
      desc: 'You receive a detailed report: accident risk zones, production bottlenecks, machinery placement corrections.',
      descHi: 'आपको विस्तृत रिपोर्ट मिलती है: दुर्घटना जोखिम क्षेत्र, उत्पादन बाधाएं, मशीनरी स्थापन सुधार।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Remedies + Vishwakarma Puja',
      titleHi: 'उपचार + विश्वकर्मा पूजा',
      desc: 'Implement non‑structural corrections, and if needed, Acharya performs Vishwakarma Puja and Bhoomi Shanti on site.',
      descHi: 'बिना संरचनात्मक सुधार लागू करें, और आवश्यकता पर आचार्य साइट पर विश्वकर्मा पूजा व भूमि शांति संपन्न करते हैं।',
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
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Your Journey to a Safe & Profitable Factory', 'एक सुरक्षित व लाभकारी फैक्ट्री की ओर आपकी यात्रा')}</h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">{bi('From layout submission to operational excellence – transparent and results‑driven.', 'लेआउट जमा करने से संचालन उत्कृष्टता तक — पारदर्शी और परिणाम-केंद्रित।')}</p>
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
export default function IndustrialVastuPage() {
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
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Vedic Science for Industrial Excellence', 'औद्योगिक उत्कृष्टता के लिए वैदिक विज्ञान')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Industrial Vastu', 'औद्योगिक वास्तु')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4">{bi('Factories · Plants · Warehouses · GIDC/MIDC Plots', 'कारखाने · प्लांट · वेयरहाउस · GIDC/MIDC प्लॉट')}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi('MBA + Ex‑CEO — optimizing industrial operations through Vedic spatial science. 10M+ views, 107K+ followers.', 'MBA + पूर्व सीईओ — वैदिक स्थानिक विज्ञान से औद्योगिक संचालन को अनुकूलित करना। 1 करोड़+ व्यूज़, 1.07 लाख+ फॉलोअर्स।')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bookings?service=industrial" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                {bi('Book & Pay Online', 'अभी बुक करें व भुगतान करें')}
              </a>
              <a href="#situations" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                {bi('Explore Solutions', 'समाधान देखें')}
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
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Identify', 'पहचानें')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Your Factory Challenge', 'आपकी फैक्ट्री चुनौती')}</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard
                title="New Factory Setup"
                titleHi="नई फैक्ट्री स्थापना"
                accent="#6366F1"
                points={[
                  "Project delayed 6‑12 months beyond timeline",
                  "Budget overrun by 40‑60% with no clear cause",
                  "Machinery delivery delayed, customs issues, supplier fraud",
                  "Loan sanctions stalled, investor backing withdrawn",
                  "Land acquisition disputes, compensation conflicts",
                  "Contractor abandoning project midway",
                  "Worker accidents during construction phase",
                  "Political interference, local opposition",
                  "Partner pulling out of investment",
                  "Fear of becoming a 'sick unit' before production starts"
                ]}
                pointsHi={[
                  "टाइमलाइन से 6–12 महीने परियोजना में देरी",
                  "बिना स्पष्ट कारण 40–60% बजट ओवररन",
                  "मशीनरी डिलीवरी में देरी, कस्टम समस्याएं, सप्लायर धोखा",
                  "ऋण स्वीकृति रुकी, निवेशक का समर्थन हटा",
                  "भूमि अधिग्रहण विवाद, मुआवज़े के संघर्ष",
                  "ठेकेदार बीच में ही परियोजना छोड़ दे",
                  "निर्माण चरण में श्रमिक दुर्घटनाएं",
                  "राजनीतिक हस्तक्षेप, स्थानीय विरोध",
                  "साझेदार निवेश से पीछे हट जाएं",
                  "उत्पादन शुरू होने से पहले ही 'सिक यूनिट' बनने का भय"
                ]}
                delay={0}
              />
              <PainPointCard
                title="Existing Factory Problems"
                titleHi="मौजूदा फैक्ट्री की समस्याएं"
                accent="#EF4444"
                points={[
                  "Production declining despite same machinery and workforce",
                  "Machine breakdowns increasing — maintenance costs doubling",
                  "Worker strikes, union problems, labor unrest",
                  "Quality complaints from buyers, export rejections",
                  "Raw material wastage higher than industry standard",
                  "Fire incidents, electrical hazards, safety violations",
                  "Government inspections, penalty notices, license issues",
                  "Unable to compete on pricing despite lower input costs",
                  "Key management leaving for competitors",
                  "Factory operating at 40‑60% capacity with no clear bottleneck"
                ]}
                pointsHi={[
                  "वही मशीनरी व कार्यबल के बावजूद उत्पादन में गिरावट",
                  "मशीन खराबी बढ़ रही — रखरखाव लागत दोगुनी",
                  "श्रमिक हड़ताल, यूनियन समस्याएं, श्रमिक असंतोष",
                  "खरीदारों की गुणवत्ता शिकायतें, निर्यात अस्वीकृतियां",
                  "कच्चा माल बर्बादी उद्योग मानक से अधिक",
                  "आग की घटनाएं, बिजली खतरे, सुरक्षा उल्लंघन",
                  "सरकारी निरीक्षण, जुर्माना नोटिस, लाइसेंस समस्याएं",
                  "कम इनपुट लागत के बावजूद कीमत प्रतिस्पर्धा में असमर्थता",
                  "प्रमुख प्रबंधन प्रतिद्वंद्वियों के पास चला जाना",
                  "बिना स्पष्ट बाधा के फैक्ट्री 40–60% क्षमता पर चलना"
                ]}
                delay={0.1}
              />
            </div>
          </div>
        </section>

        <YourJourneySection />

        {/* PRICING PLANS */}
        <section className="py-20 bg-vastu-stone/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">{bi('Pricing Plans', 'मूल्य योजनाएं')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                plan="Silver"
                price="₹7/sq.ft."
                color="#A0A0A0"
                features={["No physical visit", "Layout audit & suggestions", "Remedies via upto 30‑min call"]}
                featuresHi={["कोई भौतिक विज़िट नहीं", "लेआउट ऑडिट व सुझाव", "30 मिनट की कॉल पर उपचार"]}
              />
              <PricingCard
                plan="Gold"
                price="₹10/sq.ft."
                color="#FFD700"
                features={["All Silver features", "2 follow‑up calls", "Virtual meeting", "Safety audit report"]}
                featuresHi={["सभी Silver फीचर्स", "2 फॉलो-अप कॉल", "वर्चुअल मीटिंग", "सुरक्षा ऑडिट रिपोर्ट"]}
                best
              />
              <PricingCard
                plan="Luxury"
                price="Custom"
                color="#E8B960"
                features={["All Gold features", "1 personal site visit", "Complete industrial audit", "Vishwakarma Puja ritual", "Multiple follow‑ups", "Worker safety alignment"]}
                featuresHi={["सभी Gold फीचर्स", "1 व्यक्तिगत साइट विज़िट", "संपूर्ण औद्योगिक ऑडिट", "विश्वकर्मा पूजा अनुष्ठान", "कई फॉलो-अप्स", "श्रमिक सुरक्षा संरेखण"]}
              />
            </div>
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Optimize Your Industrial Operations', 'अपने औद्योगिक संचालन को अनुकूलित करें')}</h2>
            <p className="text-[var(--color-hero-fg)]/70 text-lg max-w-2xl mx-auto mb-8">
              {bi('AstroVastu Expert KK Nagaich –', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच –')} <strong className="text-prakash-gold">{bi('10M+ views, 107K+ followers, MBA, Ex‑CEO, 4th‑generation Tantra‑trained Vastu Guru', '1 करोड़+ व्यूज़, 1.07 लाख+ फॉलोअर्स, MBA, पूर्व सीईओ, 4 पीढ़ियों की तंत्र-प्रशिक्षित वास्तु गुरु')}</strong> {bi('personally audits every industrial space. No delegation. No generic reports.', 'हर औद्योगिक स्थान का स्वयं ऑडिट करते हैं। कोई डेलिगेशन नहीं। कोई सामान्य रिपोर्ट नहीं।')}
            </p>
            <a href="/bookings?service=industrial" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
              {bi('Schedule Your Industrial Audit →', 'अपना औद्योगिक ऑडिट शेड्यूल करें →')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
