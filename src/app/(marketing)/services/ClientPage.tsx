'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import SacredServices from '@/features/home/components/SacredServices';
import { useBi } from '@/lib/i18n/Bilingual';

const instagramReels = [
  'https://www.instagram.com/reel/DXMejXjkk5D/',
  'https://www.instagram.com/reel/DW-oXZ3yhUx/',
  'https://www.instagram.com/reel/DW3PsvlT_eT/',
  'https://www.instagram.com/reel/DWx3t_Dku3u/',
  'https://www.instagram.com/reel/DWik3DZkvZk/',
  'https://www.instagram.com/reel/DWT4z9nEgVs/',
  'https://www.instagram.com/reel/DU7aYejEhj6/',
  'https://www.instagram.com/reel/DUSYXHPkteM/',
  'https://www.instagram.com/reel/DUQW6z5kqIO/',
];

function HeroSection() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false); useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start start', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);
  return (
    <motion.section ref={ref} style={isMounted ? { opacity } : undefined} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(232,185,96,0.07),transparent_50%)]" />
      <motion.div style={isMounted ? { y } : undefined} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">{bi('Sacred Services', 'पवित्र सेवाएं')}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">AstroVastu Expert</span><br />
          <span className="text-prakash-gold text-2xl sm:text-3xl md:text-4xl mt-2 block">{bi('Guided by AstroVastu Expert K.K. Nagaich', 'AstroVastu Expert के.के. नागाइच द्वारा संचालित')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-[var(--color-hero-fg)]/70 max-w-2xl mx-auto mb-10 px-4">{bi('Complete Vastu solutions rooted in authentic Vedic lineage — from residential sanctuaries to industrial empires.', 'प्रामाणिक वैदिक परंपरा में गहराई से जड़े सम्पूर्ण वास्तु समाधान — आवासीय घरों से लेकर औद्योगिक साम्राज्यों तक।')}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all w-full sm:w-auto text-lg">{bi('Book Consultation', 'परामर्श बुक करें')}</Link>
          <button onClick={() => document.getElementById('instagram-reviews')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full w-full sm:w-auto text-center text-lg font-medium transition-all">{bi('Client Reviews', 'ग्राहक समीक्षाएं')}</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function InstagramReviewsSection() {
  const bi = useBi();
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script'); script.src = '//www.instagram.com/embed.js'; script.async = true;
      script.onload = () => { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); };
      document.body.appendChild(script);
    } else { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); }
  }, []);
  return (
    <section id="instagram-reviews" className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/20 to-vastu-parchment relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Trusted Across India', 'पूरे भारत में विश्वसनीय')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Real Reviews from Industrialists & Families', 'उद्योगपतियों और परिवारों की वास्तविक समीक्षाएं')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramReels.map((url, i) => (
            <motion.div key={url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.02, rotateY: 2 }} className="rounded-2xl overflow-hidden bg-[var(--color-bg-elevated)] shadow-[0_8px_30px_rgba(26,42,58,0.08)] hover:shadow-[0_15px_40px_rgba(200,138,93,0.2)] border border-prakash-gold/10">
              <iframe loading="lazy" src={`${url}embed/`} width="100%" height="480" frameBorder="0" scrolling="no" className="w-full" style={{ minHeight: '400px' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const bi = useBi();
  const rows = [
    [bi('Location', 'स्थान'), bi('Anywhere in the world', 'विश्व में कहीं भी'), bi('On‑site visit at your property', 'आपकी संपत्ति का स्थल भ्रमण')],
    [bi('Time', 'समय'), bi('60‑90 min video call', '60‑90 मिनट वीडियो कॉल'), bi('2‑3 hours physical walkthrough', '2‑3 घंटे का प्रत्यक्ष निरीक्षण')],
    [bi('Depth', 'गहराई'), bi('Screen‑share floor plans', 'स्क्रीन‑शेयर फ्लोर प्लान'), bi('Physical energy sensing & EMF meters', 'प्रत्यक्ष ऊर्जा संवेदन और EMF मीटर')],
    [bi('Availability', 'उपलब्धता'), bi('Flexible global scheduling', 'वैश्विक लचीली शेड्यूलिंग'), bi('Limited to India travel', 'भारत यात्रा तक सीमित')],
    [bi('Rituals', 'अनुष्ठान'), bi('Remote mantra & yantra guidance', 'दूरस्थ मंत्र और यंत्र मार्गदर्शन'), bi('On‑site puja & havan ceremonies', 'स्थल पर पूजा और हवन अनुष्ठान')],
    [bi('Best for', 'के लिए सर्वोत्तम'), bi('International clients, quick fixes', 'अंतर्राष्ट्रीय ग्राहक, त्वरित समाधान'), bi('Major constructions, land audits', 'बड़े निर्माण, भूमि ऑडिट')],
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/20 to-vastu-parchment relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Choose Your Mode', 'अपना तरीका चुनें')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Virtual Consultation vs Physical Visit', 'वर्चुअल परामर्श बनाम स्थल भ्रमण')}</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <table className="w-full text-sm">
              <thead><tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10"><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">{bi('Aspect', 'पहलू')}</th><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">{bi('Virtual', 'वर्चुअल')}</th><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">{bi('Physical Visit', 'स्थल भ्रमण')}</th></tr></thead>
              <tbody>{rows.map((row, i) => (<tr key={i} className={`border-t border-prakash-gold/10 ${i%2===0?'bg-[var(--color-bg-glass)]':'bg-vastu-stone/20'}`}><td className="py-3 px-4 sm:px-6 font-medium text-nidra-indigo/80">{row[0]}</td><td className="py-3 px-4 sm:px-6 text-nidra-indigo/60">{row[1]}</td><td className="py-3 px-4 sm:px-6 text-nidra-indigo/60">{row[2]}</td></tr>))}</tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/bookings" className="px-8 py-4 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-medium text-center hover:shadow-lg">{bi('Book Virtual Consult', 'वर्चुअल परामर्श बुक करें')}</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-prakash-gold text-nidra-indigo rounded-full font-medium text-center hover:bg-prakash-gold/5">{bi('Request On‑Site Visit', 'ऑन‑साइट भ्रमण का अनुरोध करें')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10"><div className="max-w-3xl mx-auto text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"><div className="rounded-[38px] bg-[var(--color-bg-glass)] backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-[var(--color-border-soft)] shadow-inner"><motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Let AstroVastu Expert Guide Your Space', 'AstroVastu Expert को अपने स्थान का मार्गदर्शन करने दें')}</motion.h2><motion.p className="text-[var(--color-hero-fg)]/70 text-base sm:text-lg max-w-xl mx-auto mb-10">{bi('Book a private consultation with AstroVastu Expert K.K. Nagaich — trusted by 2 lakh+ clients worldwide.', 'AstroVastu Expert के.के. नागाइच के साथ निजी परामर्श बुक करें — विश्वभर में 2 लाख+ ग्राहकों का विश्वास।')}</motion.p><Link href="/bookings"><motion.div whileHover={{ scale: 1.08 }} className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red rounded-full font-bold text-white text-lg shadow-[0_10px_40px_rgba(232,185,96,0.4)]">{bi('Schedule Now →', 'अभी शेड्यूल करें →')}</motion.div></Link></div></motion.div></div></div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <InstagramReviewsSection />
          <SacredServices />
          <ComparisonSection />
          <FinalCTASection />
        </main>
      
      <style>{`@keyframes gradient-loop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-gradient-loop{animation:gradient-loop 12s ease infinite}`}</style>
    </>
  );
}
