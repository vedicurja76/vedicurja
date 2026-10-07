'use client';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import { useBi } from '@/lib/i18n/Bilingual';

// Instagram Reels data
const REELS = [
  { permalink: 'https://www.instagram.com/reel/DVDLmxikqaT/', views: '3.4M' },
  { permalink: 'https://www.instagram.com/reel/DQ7B8xfEnzL/', views: '3.3M' },
  { permalink: 'https://www.instagram.com/reel/DRd7-rrkszB/', views: '2.3M' },
  { permalink: 'https://www.instagram.com/reel/DRkTuQxkrXV/', views: '1.7M' },
  { permalink: 'https://www.instagram.com/reel/DSH7WFDkh4i/', views: '2M' },
  { permalink: 'https://www.instagram.com/reel/DSO8k8gkud8/', views: '1.4M' },
  { permalink: 'https://www.instagram.com/reel/DSje5kqEmBO/', views: '1M' },
  { permalink: 'https://www.instagram.com/reel/DSmlHREElWe/', views: '1.3M' },
  { permalink: 'https://www.instagram.com/reel/DUfALpvEkNz/', views: '2.4M' },
  { permalink: 'https://www.instagram.com/reel/DW_G4gJEl55/', views: '1.2M' },
];

function HeroSection() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-2)] via-sacred-saffron/10 to-kumkuma-red/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-hero-1)_40%)] opacity-60" />
      <div className="container mx-auto px-6 relative z-10 text-center text-[var(--color-hero-fg)]">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-6 block font-bold">
          {bi('India’s Most‑Viewed Vastu Authority', 'भारत के सबसे अधिक देखे जाने वाले वास्तु अधिकार')}
        </motion.span>
        <AnimatedText as="h1" text="AstroVastu Expert K.K. Nagaich" className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 text-[var(--color-hero-fg)] drop-shadow-2xl" />
        <GradientText text={bi('4th Generation · MBA · Ex‑CEO · Tantra Sadhak', '4 पीढ़ियों की परंपरा · MBA · पूर्व सीईओ · तंत्र साधक')} className="font-serif text-2xl md:text-4xl mb-8 block" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl text-[var(--color-hero-fg)]/80 max-w-3xl mx-auto mb-12">
          {bi('The only Vastu master who performs every ritual himself — and has', 'एकमात्र वास्तु गुरु जो हर अनुष्ठान स्वयं संपन्न करते हैं — और जिनके')}{' '}<span className="font-bold">{bi('100 million+ views', '1 करोड़+ व्यूज़')}</span>{' '}{bi('across platforms.', 'विभिन्न प्लेटफॉर्म पर हैं।')}
        </motion.p>
        {/* Stat buttons have been removed as requested */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contact" className="luxury-button text-lg px-8 py-4">{bi('Consult AstroVastu Expert ji', 'एस्ट्रोवास्तु एक्सपर्ट जी से परामर्श करें')}</Link>
          <Link href="/free-tools" className="border-2 border-[var(--color-hero-fg)]/70 text-[var(--color-hero-fg)] hover:bg-[var(--color-hero-fg)]/10 px-8 py-4 rounded-full text-lg font-medium transition">{bi('Explore Free Tools', 'फ्री टूल्स देखें')}</Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}

function StatsBanner() {
  const bi = useBi();
  const stats = [
    { value: '10M+', label: 'Views Across Platforms', labelHi: 'विभिन्न प्लेटफॉर्म पर व्यूज़' },
    { value: '107K+', label: 'Instagram Followers', labelHi: 'Instagram फॉलोअर्स' },
    { value: '2 Lakh+', label: 'Clients Served', labelHi: 'सेवा प्राप्त क्लाइंट्स' },
    { value: '20+', label: 'Years of Experience', labelHi: 'वर्षों का अनुभव' },
  ];
  return (
    <section className="py-16 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center p-8 bg-gradient-to-br from-vastu-parchment to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl md:text-5xl font-serif font-bold text-nidra-indigo mb-2">{s.value}</div>
              <div className="text-sm text-nidra-indigo/60 uppercase tracking-wider">{bi(s.label, s.labelHi)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const bi = useBi();
  const pillars = [
    { title: 'Tantra & Ritual Master', titleHi: 'तंत्र एवं अनुष्ठान विशेषज्ञ', desc: 'Trained Tantra Sadhak who personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti. He does not only prescribe – he executes the rituals himself.', descHi: 'प्रशिक्षित तंत्र साधक हर हवन, यंत्र प्राण प्रतिष्ठा और नवग्रह शांति स्वयं संपन्न करते हैं। वे केवल सलाह नहीं देते — अनुष्ठान खुद करते हैं।', icon: '🔥', color: 'from-orange-500 to-red-600' },
    { title: 'MBA + Ex‑CEO', titleHi: 'MBA + पूर्व सीईओ', desc: 'With an MBA and corporate leadership background, he maps Vastu defects to business metrics – revenue leakage, attrition, and organisational growth.', descHi: 'MBA और कॉर्पोरेट नेतृत्व की पृष्ठभूमि के साथ, वे वास्तु दोषों को व्यावसायिक मापदंडों से जोड़ते हैं — राजस्व हानि, कर्मचारी प्रतिधारण और संगठनात्मक वृद्धि।', icon: '📊', color: 'from-blue-600 to-indigo-800' },
    { title: '4th Generation Certified', titleHi: '4 पीढ़ियों की प्रमाणित परंपरा', desc: 'Lineage‑certified under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, Dr. Rajendra Jain, and Nadi Jyotish directly from Shri Thanga Pandiyan.', descHi: 'डॉ. शिव वर्मा, डॉ. नरेंद्र सहसत्रबुद्धे, डॉ. राजेंद्र जैन और श्री थंगा पंडियन से सीधे नाड़ी ज्योतिश में वंश-प्रमाणित।', icon: '🕉️', color: 'from-amber-500 to-yellow-700' },
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] to-vastu-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText text={bi('The Deadly Combination', 'अनोखा त्रिवेणी संयोजन')} className="font-serif text-5xl md:text-6xl text-nidra-indigo mb-4" />
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-lg">{bi('Only one person in India holds all three of these credentials simultaneously.', 'भारत में केवल एक व्यक्ति के पास एक साथ ये तीनों योग्यताएं हैं।')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="group perspective-1000">
              <div className="relative bg-[var(--color-bg-elevated)] rounded-3xl p-10 shadow-2xl border border-prakash-gold/20 hover:shadow-3xl transition-all duration-700 hover:-translate-y-3">
                <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-4xl shadow-lg`}>{p.icon}</div>
                <h3 className="font-serif text-3xl text-nidra-indigo mb-4">{bi(p.title, p.titleHi)}</h3>
                <p className="text-nidra-indigo/70 leading-relaxed text-lg">{bi(p.desc, p.descHi)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const bi = useBi();
  const reasons = [
    { title: 'He Performs Every Ritual', titleHi: 'वे हर अनुष्ठान स्वयं करते हैं', desc: 'Unlike consultants who only give remedies, AstroVastu Expert ji personally conducts each Havan, Yantra energisation, and Pooja – the true secret behind lasting transformations.', descHi: 'केवल उपचार बताने वाले सलाहकारों के विपरीत, एस्ट्रोवास्तु एक्सपर्ट जी प्रत्येक हवन, यंत्र प्राण प्रतिष्ठा और पूजा स्वयं संपन्न करते हैं — स्थायी परिवर्तन का असली राज़।', icon: '🔥' },
    { title: 'Business Mind, Vedic Soul', titleHi: 'व्यावसायिक दिमाग, वैदिक आत्मा', desc: 'MBA + ex‑CEO who understands P&L statements. He identifies Vastu defects that directly impact your revenue, employee retention, and client acquisition.', descHi: 'MBA + पूर्व सीईओ जो P&L रिपोर्ट समझते हैं। वे वास्तु दोष पहचानते हैं जो सीधे आपके राजस्व, कर्मचारी प्रतिधारण और क्लाइंट प्राप्ति को प्रभावित करते हैं।', icon: '💼' },
    { title: '10 Million+ Organic Views', titleHi: '10M+ ऑर्गैनिक व्यूज़', desc: 'His viral Instagram reels have reached over 10M views, making him the most‑watched Vastu expert in the world. His wisdom is trusted globally.', descHi: 'उनकी वायरल Instagram रील्स 10M+ व्यूज़ पार कर चुकी हैं — वे विश्व के सबसे अधिक देखे जाने वाले वास्तु विशेषज्ञ हैं। उनका ज्ञान वैश्विक स्तर पर विश्वसनीय है।', icon: '📈' },
  ];
  return (
    <section className="py-28 bg-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText text={bi('Why AstroVastu Expert KK Nagaich?', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच ही क्यों?')} className="font-serif text-5xl md:text-6xl text-nidra-indigo mb-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">{r.icon}</div>
              <h3 className="font-serif text-2xl text-nidra-indigo mb-4">{bi(r.title, r.titleHi)}</h3>
              <p className="text-nidra-indigo/70 leading-relaxed">{bi(r.desc, r.descHi)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const bi = useBi();
  const milestones = [
    { year: '2005', title: 'Corporate Leadership – CEO of Ellenore', titleHi: 'कॉर्पोरेट नेतृत्व – Ellenore के सीईओ', desc: 'Served as CEO of Ellenore, a telecom company later acquired by Airtel. Despite corporate success, he realised he was a people person at heart. When his team left, he chose to leave too – answering a deeper inner calling that would soon lead him to the path of Vastu and spirituality.', descHi: 'Ellenore (बाद में Airtel द्वारा अधिग्रहित टेलीकॉम कंपनी) के सीईओ के रूप में कार्य किया। कॉर्पोरेट सफलता के बावजूद वे अंदर से जन-मनीषी महसूस करते थे। टीम के जाने पर स्वयं भी छोड़ दिया — एक गहरी अंतरात्मा की पुकार का उत्तर देते हुए, जो उन्हें शीघ्र ही वास्तु और अध्यात्म के पथ पर ले गई।' },
    { year: '2008', title: 'The Inner Calling', titleHi: 'अंतरात्मा की पुकार', desc: 'Began deep personal experimentation, meditation, and study of Vastu, Nadi Jyotish, and Numerology.', descHi: 'गहरे व्यक्तिगत प्रयोग, ध्यान और वास्तु, नाड़ी ज्योतिश तथा अंकशास्त्र के अध्ययन की शुरुआत।' },
    { year: '2018', title: 'Public Service Begins', titleHi: 'लोक सेवा की शुरुआत', desc: 'After a decade of rigorous inner preparation, formally started offering professional guidance.', descHi: 'दशक भर की कठोर आंतरिक तैयारी के बाद औपचारिक रूप से व्यावसायिक मार्गदर्शन प्रदान करना आरंभ किया।' },
    { year: '2020', title: 'Digital Legacy Launched', titleHi: 'डिजिटल विरासत की शुरुआत', desc: 'vedivastuurja.com founded – a global digital sanctuary for Vedic wisdom.', descHi: 'vedivastuurja.com की स्थापना — वैदिक ज्ञान के लिए एक वैश्विक डिजिटल धाम।' },
    { year: '2024', title: '10M+ Viral Views', titleHi: '1 करोड़+ वायरल व्यूज़', desc: 'Instagram reels went viral, bringing authentic Vastu to millions worldwide.', descHi: 'Instagram रील्स वायरल हुईं, जिसने लाखों लोगों तक प्रामाणिक वास्तु पहुंचाई।' },
    { year: '2026', title: 'Global Authority', titleHi: 'वैश्विक अधिकार', desc: '2 Lakh+ clients across 50+ countries, trusted by individuals and corporations alike.', descHi: '50+ देशों में 2 लाख+ क्लाइंट्स — व्यक्तियों और कंपनियों दोनों का भरोसा।' },
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-elevated)] overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedText text={bi('The Journey of a Living Legend', 'एक जीवंत दिग्गज की यात्रा')} className="font-serif text-5xl md:text-6xl text-center text-nidra-indigo mb-16" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sacred-saffron via-prakash-gold to-kumkuma-red" />
          {milestones.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-1 p-6 bg-[var(--color-bg-elevated)] rounded-2xl shadow-xl border border-prakash-gold/20 mx-4">
                <span className="text-sacred-saffron font-bold text-xl">{m.year}</span>
                <h3 className="font-serif text-2xl text-nidra-indigo mt-2 mb-2">{bi(m.title, m.titleHi)}</h3>
                <p className="text-nidra-indigo/70">{bi(m.desc, m.descHi)}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-prakash-gold rounded-full border-4 border-[var(--color-bg-elevated)] shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelsSection() {
  const bi = useBi();
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
    if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
  }, []);
  return (
    <section className="py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] to-vastu-parchment overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedText text={bi('Viral Reels – 10M+ Views', 'वायरल रील्स – 1 करोड़+ व्यूज़')} className="font-serif text-5xl md:text-6xl text-center text-nidra-indigo mb-6" />
        <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">{bi('Witness the real AstroVastu Expert in action – rituals, remedies, and wisdom that millions watch daily.', 'असली एस्ट्रोवास्तु एक्सपर्ट को कार्यरत देखें — अनुष्ठान, उपचार और ज्ञान जो लाखों लोग रोज़ देखते हैं।')}</p>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {REELS.map((reel, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start">
              <div className="bg-[var(--color-bg-elevated)] rounded-3xl shadow-xl overflow-hidden border border-prakash-gold/20 group">
                <div className="p-4 bg-gradient-to-r from-sacred-saffron/10 to-prakash-gold/10 flex justify-between items-center">
                  <span className="text-sm font-semibold text-nidra-indigo">🔥 {reel.views} {bi('views', 'व्यूज़')}</span>
                  <span className="text-xs text-prakash-gold">@vedicurja</span>
                </div>
                <div className="relative aspect-[9/16]">
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 326, padding: 0, width: '99.375%' }}>
                    <div style={{ padding: 16 }}>
                      <a href={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">View this post on Instagram</a>
                    </div>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </section>
  );
}

function QuoteSection() {
  const bi = useBi();
  return (
    <section className="py-24 bg-gradient-to-r from-[var(--color-hero-2)] to-[var(--color-hero-2)]/90 text-[var(--color-hero-fg)]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <p className="font-serif text-3xl md:text-4xl italic leading-relaxed">{bi('"The soul of AstroVastu Expert is not an algorithm. It is a living lineage, a direct and sacred inheritance from masters whose wisdom transcends the limitations of textbooks."', '“एस्ट्रोवास्तु एक्सपर्ट की आत्मा कोई एल्गोरिदम नहीं है। यह एक जीवंत परंपरा है, गुरुओं से सीधा और पवित्र विरासत-धरोहर जिनका ज्ञान पाठ्यपुस्तकों की सीमाओं से परे है।"')}</p>
          <p className="mt-6 text-prakash-gold uppercase tracking-wider">— {bi('AstroVastu Expert K.K. Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच')}</p>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const bi = useBi();
  return (
    <section className="relative py-32 bg-vastu-parchment text-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-64 h-64 relative">
          <motion.div className="absolute inset-0 rounded-full border-2 border-prakash-gold/40" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} />
          <motion.div className="absolute inset-4 rounded-full border-2 border-sacred-saffron/30" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} />
          <motion.div className="absolute inset-8 rounded-full border border-kumkuma-red/20" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-prakash-gold/60">ॐ</div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText text={bi('Step Into the Legacy', 'इस विरासत का हिस्सा बनें')} className="font-serif text-5xl md:text-7xl text-nidra-indigo mb-6" />
        <p className="text-xl text-nidra-indigo/70 max-w-3xl mx-auto mb-10">{bi('Experience authentic Vastu wisdom – from a master who personally performs every ritual.', 'अनुभव करें प्रामाणिक वास्तु ज्ञान — एक ऐसे गुरु से जो हर अनुष्ठान स्वयं संपन्न करते हैं।')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="luxury-button text-lg px-12 py-5">{bi('Consult AstroVastu Expert K.K. Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच से परामर्श करें')}</Link>
          <Link href="/free-tools" className="border-2 border-prakash-gold text-nidra-indigo px-10 py-5 rounded-full text-lg font-medium hover:bg-prakash-gold/10 transition">{bi('Explore Free Tools', 'फ्री टूल्स देखें')}</Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        <HeroSection />
        <StatsBanner />
        <PillarsSection />
        <WhyChooseSection />
        <TimelineSection />
        <ReelsSection />
        <QuoteSection />
        <FinalCTASection />
      </main>
    </>
  );
}