'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';

/* ------------------------------------------------------------------
   PAIN POINT CARD – with WhatsApp redirect
   ------------------------------------------------------------------ */
function PainPointCard({ title, titleHi, accent, points, pointsHi, delay }: { title: string; titleHi: string; accent: string; points: string[]; pointsHi: string[]; delay?: number }) {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I am interested in Residential Vastu consultation for: ${title.toLowerCase()}. Please guide me.`;
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
              <span>{bi(point, pointsHi[i] || point)}</span>
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
            {bi('Get Solution on WhatsApp', 'WhatsApp पर समाधान पाएँ')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   PRICING CARD – with WhatsApp button
   ------------------------------------------------------------------ */
function PricingCard({ plan, price, color, features, featuresHi, best }: { plan: string; price: string; color: string; features: string[]; featuresHi: string[]; best?: boolean }) {
  const bi = useBi();
  const whatsappMessage = `Hi AstroVastu Expert, I want to book the ${plan} plan (₹${price}) for Residential Vastu consultation. Please share payment details.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className={`relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all ${best ? 'border-prakash-gold bg-[var(--color-bg-elevated)]' : 'bg-[var(--color-bg-glass)] border-prakash-gold/20'}`}>
      {best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">✦ {bi('Most Popular', 'सर्वाधिक लोकप्रिय')}</div>}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} />
      <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3>
      <div className="text-3xl font-bold mt-2" style={{ color }}>₹{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            {bi(f, featuresHi[i] || f)}
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
          {bi('Book via WhatsApp →', 'WhatsApp से बुक करें →')}
        </a>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   WHY CHOOSE – Deep SVGs, SEO‑optimized copy
   ------------------------------------------------------------------ */
function WhyChooseAstroVastu() {
  const bi = useBi();
  const reasons = [
    {
      title: '4th Generation Lineage',
      titleHi: '4 पीढ़ियों की परंपरा',
      desc: 'Inherited Vastu knowledge from a direct Guru‑Shishya Parampara, certified under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, and Dr. Rajendra Jain.',
      descHi: 'प्रत्यक्ष गुरु-शिष्य परंपरा से विरासत में मिलवा वास्तु ज्ञान — डॉ. शिव वर्मा, डॉ. नरेन्द्र शास्त्रबुद्धे और डॉ. राजेन्द्र जैन के प्रशिक्षण में प्रमाणित।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Tantra & Ritual Master',
      titleHi: 'तंत्र एवं अनुष्ठान निष्णात',
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
      desc: 'Maps every Vastu defect directly to business metrics: revenue leakage, attrition, client retention. Corporate precision meets ancient wisdom.',
      descHi: 'प्रत्येक वास्तु दोष को सीधे व्यावसायिक मापदंडों से जोड़ते हैं: राजस्व हानि, कर्मचारी प्रतिधारण, ग्राहक बनाए रखना। निगमीय सटीकता और प्राचीन ज्ञान का संगम।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '10M+ Viral Views',
      titleHi: '10M+ वायरल दर्शक',
      desc: 'India’s most‑watched Vastu expert with over 100 million organic views across Instagram, YouTube, and Facebook.',
      descHi: 'भारत के सर्वाधिक देखा जाने वाले वास्तु विशेषज्ञ — Instagram, YouTube और Facebook पर 1 करोड़ से अधिक प्राकृतिक दर्शक।',
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
      desc: 'Trusted by families and businesses across 50+ countries – from Lucknow to London, Delhi to Dubai.',
      descHi: '50+ देशों के परिवारों और व्यवसायों का विश्वास — लखनऊ से लंदन, दिल्ली से दुबई तक।',
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
      title: 'Best Vastu Expert in Uttar Pradesh',
      titleHi: 'उत्तर प्रदेश के सर्वश्रेष्ठ वास्तु विशेषज्ञ',
      desc: 'Recognised as the leading Vastu consultant in Uttar Pradesh, with a proven track record of transforming homes across Lucknow, Noida, Varanasi, and beyond.',
      descHi: 'उत्तर प्रदेश के अग्रणी वास्तु सलाहकार के रूप में मान्यता प्राप्त — लखनऊ, नोएडा, वाराणसी और आगे घरों के रूपांतरण का सिद्ध इतिहास।',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 00-10 10c0 4 2 7 5 9l3-3 3 3c3-2 5-5 5-9a10 10 0 00-10-10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12l-2-2m2 2l2-2m-2 2v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Why Choose AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट ही क्यों')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            {bi('The', 'वह')}{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Deadly Combination', 'अजेय संयोजन')}</span>
            {' '}{bi('No Other Expert Possesses', 'जो किसी और विशेषज्ञ के पास नहीं')}
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            {bi('AstroVastu Expert KK Nagaich uniquely combines Tantra mastery, MBA‑grade business acumen, and 4th‑generation Vedic lineage – a trio unmatched by any other consultant in India, especially in Uttar Pradesh.', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच तंत्र निपुणता, MBA-स्तरीय व्यावसायिक सूझ और 4 पीढ़ियों की वैदिक परंपरा का अद्वितीय संगम करते हैं — भारत में किसी अन्य सलाहकार का यह त्रयी के साथ मुकाबला नहीं, विशेषकर उत्तर प्रदेश में।')}
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
      title: 'Submit Layout',
      titleHi: 'लेआउट जमा करें',
      desc: 'Fill the form with your computerised home layout plan. Our system securely stores it for analysis.',
      descHi: 'अपने कंप्यूटरीकृत गृह-नक्शे से फॉर्म भरें। हमारी प्रणाली उसे विश्लेषण हेतु सुरक्षित सहेजती है।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Acharya Reviews',
      titleHi: 'आचार्य समीक्षा करते हैं',
      desc: 'AstroVastu Expert KK Nagaich personally analyzes every layout for Vastu defects & energy imbalances.',
      descHi: 'एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच स्वयं प्रत्येक नक्शे का वास्तु दोषों और ऊर्जा असंतुलन हेतु विश्लेषण करते हैं।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Defect Report',
      titleHi: 'दोष रिपोर्ट',
      desc: 'Two possibilities: structural demolition needed OR non‑structural remedies sufficient. You always choose.',
      descHi: 'दो संभावनाएँ: संरचनात्मक तोड़-फोड़ आवश्यक, अथवा बिना तोड़-फोड़ के उपचार पर्याप्त। चुनाव सदैव आपका।',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Remedies + Rituals',
      titleHi: 'उपचार + अनुष्ठान',
      desc: 'Receive personalised Yantras, colour therapy, furniture adjustments, and if needed, Acharya performs the rituals personally.',
      descHi: 'व्यक्तिगत यंत्र, रंग थेरेपी, फर्नीचर समायोजन प्राप्त करें, और आवश्यकतानुसार आचार्य स्वयं अनुष्ठान संपन्न करते हैं।',
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
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Your Journey to a', 'एक')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Harmonious Home', 'सामंजस्यपूर्ण घर की ओर आपकी यात्रा')}</span></h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">{bi('Simple, transparent, and personalised – from submission to transformation.', 'सरल, पारदर्शी और व्यक्तिगत – जमा से रूपांतरण तक।')}</p>
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
export default function ResidentialVastuPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      {/* No SmoothScroll – we removed it to avoid errors */}
      <main className="relative bg-vastu-parchment">
        {/* HERO – elegant static gradient */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Vedic Science for Modern Living', 'आधुनिक जीवन हेतु वैदिक विज्ञान')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Residential Vastu', 'आवासीय वास्तु')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4">{bi('For flats, apartments, independent houses & government quarters.', 'फ्लैट, अपार्टमेंट, स्वतंत्र घर एवं सरकारी क्ार्टरों के लिए।')}</p>
            <p className="text-sm text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi('10M+ views · 107K+ followers · AstroVastu Expert KK Nagaich — Tantra‑trained, MBA, Ex‑CEO, 4th‑gen Guru, Best Vastu Expert in Uttar Pradesh.', '10M+ दर्शक · 107K+ फॉलोअर · एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच — तंत्र-प्रशिक्षित, MBA, पूर्व सीईओ, 4थी पीढ़ी के गुरु, उत्तर प्रदेश के सर्वश्रेष्ठ वास्तु विशेषज्ञ।')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/bookings?service=residential" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
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
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Identify', 'पहचानें')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Your Challenge', 'आपकी चुनौती')}</span></h2>
            </div>

            {/* Flats & Apartments */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏢 {bi('Flats & Apartments', 'फ्लैट एवं अपार्टमेंट')}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <PainPointCard title="New Possession (Recently Moved In)" titleHi="नया भवन (हाल में स्थानांतरित)" accent="#E8B960" points={[
                  "Health breakdown after possession – frequent illnesses with no medical diagnosis",
                  "Money drain despite higher income – savings never accumulate, loans pile up",
                  "Sleep destroyed since day one – insomnia, nightmares, waking exhausted at 3 AM",
                  "Family fighting constantly – arguments that never happened in previous home",
                  "Career stuck despite relocation – promotions blocked, business deals collapse",
                  "Builder said '100% Vastu Compliant' but problems persist"
                ]} pointsHi={[
                  "भवन लेने के बाद स्वास्थ्य बिगड़ना – बार-बार बीमारी, कोई चिकित्सकीय निदान नहीं",
                  "अधिक आय के बावजदू धन का बहाव – बचत जमा नहीं होती, उधार बढ़ते जाते हैं",
                  "पहले दिन से नींद नष्ट – अनिद्रा, दुःस्वप्न, सुबह 3 बजे थका हुआ जागना",
                  "परिवार में निरंतर झगड़े – पहले के घर में कभी न होने वाली बहस",
                  "स्थानांतरण के बाद भी करियर अटका – पदोन्नति रुकी, व्यापार सौदे टूटते",
                  "बिल्डर ने कहा '100% वास्तु-अनुपालन', पर समस्याएँ बरकरार"
                ]} delay={0} />
                <PainPointCard title="Living Here for Years (Ongoing Issues)" titleHi="वर्षों से यहाँ रह रहे (जारी समस्याएँ)" accent="#C88A5D" points={[
                  "Years of hard work, zero savings – money vanishes, EMIs pile up",
                  "One family member always sick – the cycle rotates but never breaks",
                  "Marriage under constant strain – fighting over nothing",
                  "Career/business rollercoaster – sudden unexplained crashes",
                  "Feeling stuck – no forward movement for years despite all efforts",
                  "Bad dreams and disturbed sleep patterns"
                ]} pointsHi={[
                  "वर्षों की मेहनत, शून्य बचत – पैसा गायब, EMI बढ़ते जाते",
                  "परिवार का एक सदस्य सदा बीमार – चक्र घूमता पर टूटता नहीं",
                  "विवाह सदा तनाव में – तुच्छ बातों पर झगड़ा",
                  "करियर/व्यापार में उतार-चढ़ाव – अचानक अप्रत्याशित पतन",
                  "अटकन का अनुभव – सभी प्रयासों के बाद भी वर्षों से कोई प्रगति नहीं",
                  "बुरे सपने और बिगड़ी नींद की लय"
                ]} delay={0.1} />
              </div>
            </div>

            {/* Independent Houses */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏡 {bi('Independent Houses', 'स्वतंत्र घर')}</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <PainPointCard title="Planning/Blueprint Stage" titleHi="नक्शा/योजना चरण" accent="#FF9933" points={[
                  "Fear of lifetime regret – 'What if this house I'm building destroys my family?'",
                  "Architect‑Vastu conflict – modern design vs traditional wisdom",
                  "Land quality concerns – is the soil stable? Is there Bhoomi Dosh?",
                  "Loan approval nightmares – documentation hurdles, delays",
                  "Family conflicts intensified – every decision becomes an argument"
                ]} pointsHi={[
                  "जीवनभर की पछतावे का डर – 'कहीं बनाता यह घर मेरे परिवार को न बिगाड़ दे?'",
                  "वास्तु-आर्किटेक्ट टकराव – आधुनिक डिज़ाइन बनाम पारंपरिक ज्ञान",
                  "भूमि की गुणवत्ता की चिंता – मिट्टी स्थिर है? कहीं भूमि दोष तो नहीं?",
                  "ऋण स्वीकृति की दुश्वरियाँ – दस्तावेज़ीय रुकावटें, देरी",
                  "पारिवारिक विवाद बढ़ना – हर निर्णय बहस बन जाता है"
                ]} delay={0.2} />
                <PainPointCard title="Under Construction / Recently Completed" titleHi="निर्माणाधीन / हाल ही में पूर्ण" accent="#6366F1" points={[
                  "Construction delays and budget explosions – 2 years for a 12‑month project",
                  "Accidents on site – workers injured, tools breaking",
                  "Family health declining even while living in temporary accommodation",
                  "Partner pulling out of investment midway",
                  "Builder abandoned project – now stuck with half‑finished structure"
                ]} pointsHi={[
                  "निर्माण में देरी और बजट उछाल – 12 माह के कार्य में 2 वर्ष",
                  "साइट पर दुर्घटनाएँ – श्रमिक घायल, उपकरण टूटना",
                  "अस्थायी निवास में रहते हुए भी परिवार का स्वास्थ्य गिरना",
                  "साझेदार का बीच में निवेश से पीछे हटना",
                  "बिल्डर परियोजना छोड़कर चला गया – अब अधूरी संरचना में फँसे"
                ]} delay={0.3} />
              </div>
              <h4 className="font-serif text-xl text-sacred-saffron text-center mb-6">{bi('Already Constructed (Living In)', 'पहले से निर्मित (जिसमें रह रहे हों)')}</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <PainPointCard title="Inherited / Old Family Home" titleHi="विरासत में मिला / पुराना पारिवारिक घर" accent="#8B5A2B" points={[
                  "The house feels 'heavy' and depressing – walking in doesn't feel like coming home",
                  "Pets keep dying or running away – documented sign of Bhoomi Dosh",
                  "Same disease pattern across generations",
                  "Business declining despite market growth",
                  "Children not settling – marriage delays, career confusion"
                ]} pointsHi={[
                  "घर 'भारी' एवं निराशाजनक लगता है – अंदर आना घर जैसा नहीं लगता",
                  "पालतू बार-बार मरते या भागते – भूमि दोष का प्रलेखित लक्षण",
                  "पीढ़ियों से वही रोग-ऋत",
                  "बाज़ार वृद्धि के बावजूद व्यापार में गिरावट",
                  "संतान स्थापित नहीं – विवाह में विलंब, करियर में धोखा"
                ]} delay={0.4} />
                <PainPointCard title="Recently Purchased / Renovated" titleHi="हाल ही में खरीदा / नवीनीकृत" accent="#D4A373" points={[
                  "Renovation completed but problems increased – now worse than before",
                  "Bought a 'dream home' that's become a nightmare",
                  "Previous owners had terrible luck – now you're experiencing the same",
                  "Invested in expensive interiors but can't enjoy the space",
                  "Wife wants to move out, husband refuses – the house has become a battleground"
                ]} pointsHi={[
                  "नवीनीकरण पूरा पर समस्याएँ बढ़ीं – अब पहले से भी बुरा",
                  "'सपनों का घर' खरीदा जो अब दुःस्वप्न बन गया",
                  "पिछले मालिकों का दुर्भाग्य – अब वही आप अनुभव रहे हैं",
                  "महँगे आंतरिक सजावट में निवेश, पर स्थान का आनंद नहीं",
                  "पत्नी जाना चाहती, पति इनकार – घर अब रणक्षेत्र बन गया"
                ]} delay={0.5} />
              </div>
            </div>

            {/* Government Quarters */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏛️ {bi('Government Quarters', 'सरकारी क्ार्टर')}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <PainPointCard title="Living in Government Quarters" titleHi="सरकारी क्ार्टर में निवास" accent="#059669" points={[
                  "Poor maintenance compounding Vastu defects",
                  "Cannot renovate or change structure – it's government property",
                  "Transferred here for career growth but career is now stagnant",
                  "Family health declining since moving in",
                  "Same quarter, different families – all struggling with similar issues"
                ]} pointsHi={[
                  "खराब रखरखाव से वास्तु दोष और बढ़ते हैं",
                  "नवीनीकरण या संरचना बदलना संभव नहीं – यह सरकारी संपत्ति है",
                  "करियर वृद्धि हेतु स्थानांतरण, पर अब करियर रुका हुआ",
                  "उधर जाने के बाद से परिवार का स्वास्थ्य गिरता रहा",
                  "वही क्ार्टर, भिन्न परिवार – सभी समान समस्याओं से जूझते"
                ]} delay={0.6} />
                <PainPointCard title="Post‑Retirement / Long‑Term Quarter" titleHi="सेवानिवृत्ति के बाद / दीर्घकालिक क्ार्टर" accent="#047857" points={[
                  "Decades in the same quarter – problems became 'normal' but never resolved",
                  "Chronic illnesses that doctors attribute to 'age' but started at 40",
                  "Adult children refuse to visit – they say the quarter feels depressing",
                  "Watched juniors get promoted past you – career plateau",
                  "The quarter was assigned – you never had a choice"
                ]} pointsHi={[
                  "दशकों से एक ही क्ार्टर – समस्याएँ 'सामान्य' लगने लगीं पर सुलझी नहीं",
                  "पुरानी बीमारियाँ जिन्हें डॉक्टर 'उम्र' कहते हैं, पर 40 वर्ष से शुरू",
                  "परिवार के वयस्क संतान आने से इनकार – क्ार्टर निराशाजनक लगता है",
                  "देखा कि कनिष्ठ आपको पार कर पदोन्नत हुए – करियर समतल",
                  "क्ार्टर आवंटित हुआ था – आपको कभी विकल्प ही नहीं मिला"
                ]} delay={0.7} />
              </div>
            </div>
          </div>
        </section>

        <YourJourneySection />

        {/* PRICING PLANS */}
        <section className="py-20 bg-vastu-stone/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">{bi('Pricing Plans', 'मूल्य योजनाएँ')}</h2>
            <h3 className="font-serif text-xl text-sacred-saffron text-center mb-8">{bi('Already Constructed Homes', 'पहले से निर्मित घर')}</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <PricingCard plan="Silver" price="₹7/sq.ft." color="#A0A0A0" features={["No physical visit", "Computerized layout analysis", "Remedies via upto 30‑minute call", "One‑time delivery"]} featuresHi={["कोई भौतिक भ्रमण नहीं", "कंप्यूटरीकृत नक्शा विश्लेषण", "30 मिनट तक की कॉल पर उपचार", "एक बार की डिलीवरी"]} />
              <PricingCard plan="Gold" price="₹10/sq.ft." color="#FFD700" features={["All Silver features", "2 follow‑up calls", "Virtual meeting included", "Extended remedy guidance"]} featuresHi={["सभी Silver विशेषताएँ", "2 फ़ॉलो-अप कॉल", "वर्चुअल बैठक शामिल", "विविध उपचार मार्गदर्शन"]} best />
              <PricingCard plan="Luxury" price="Custom" color="#E8B960" features={["All Gold features", "1 personal site visit", "Complete Vastu audit", "4 scheduled follow‑ups", "Full ritual execution if needed"]} featuresHi={["सभी Gold विशेषताएँ", "1 व्यक्तिगत साइट भ्रमण", "संपूर्ण वास्तु ऑडिट", "4 निर्धारित फ़ॉलो-अप", "आवश्यकतानुसार पूर्ण अनुष्ठान संपादन"]} />
            </div>
            <h3 className="font-serif text-xl text-sacred-saffron text-center mb-8">{bi('New Construction / Planning', 'नया निर्माण / योजना')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard plan="Silver" price="₹7/sq.ft." color="#A0A0A0" features={["No physical visit", "Layout suggestions & corrections", "Remedies via upto 30‑minute call", "One‑time audit (extra audits ₹2,199 each)"]} featuresHi={["कोई भौतिक भ्रमण नहीं", "नक्शा सुझाव एवं सुधार", "30 मिनट तक की कॉल पर उपचार", "एक बार का ऑडिट (अतिरिक्त ऑडिट ₹2,199 प्रति)"]} />
              <PricingCard plan="Gold" price="₹10/sq.ft." color="#FFD700" features={["All Silver features", "2 follow‑up calls", "Virtual meeting", "2 callbacks of audit included"]} featuresHi={["सभी Silver विशेषताएँ", "2 फ़ॉलो-अप कॉल", "वर्चुअल बैठक", "ऑडिट के 2 कॉलबैक शामिल"]} best />
              <PricingCard plan="Luxury" price="Custom" color="#E8B960" features={["All Gold features", "1 personal site visit", "Complete Vastu blueprint audit", "Multiple follow‑up audits", "Full ritual execution"]} featuresHi={["सभी Gold विशेषताएँ", "1 व्यक्तिगत साइट भ्रमण", "संपूर्ण वास्तु ब्लूप्रिंट ऑडिट", "अनेक फ़ॉलो-अप ऑडिट", "पूर्ण अनुष्ठान संपादन"]} />
            </div>
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Experience the AstroVastu Expert Difference', 'एस्ट्रोवास्तु एक्सपर्ट का अंतर अनुभव करें')}</h2>
            <p className="text-[var(--color-hero-fg)]/70 text-lg max-w-2xl mx-auto mb-8">
              {bi('AstroVastu Expert KK Nagaich –', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नगाईच –')} <strong className="text-prakash-gold">{bi('10M+ views, 107K+ followers, MBA, Ex‑CEO, 4th‑generation Tantra‑trained Vastu Guru', '10M+ दर्शक, 107K+ फॉलोअर, MBA, पूर्व सीईओ, 4थी पीढ़ी के तंत्र-प्रशिक्षित वास्तु गुरु')}</strong> {bi('– personally performs every residential audit. No delegation. No generic reports.', '– स्वयं प्रत्येक आवासीय ऑडिट करते हैं। कोई अर्पण नहीं। कोई सामान्य रिपोर्ट नहीं।')}
            </p>
            <a href="/bookings?service=residential" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
              {bi('Schedule Your Residential Audit →', 'अपना आवासीय ऑडिट शेड्यूल करें →')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}