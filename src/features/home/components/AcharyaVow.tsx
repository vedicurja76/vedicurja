'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export function AcharyaVow() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const bi = useBi();

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-elevated)]/60 to-[var(--color-bg-secondary)]"
      aria-labelledby="acharya-vow-title"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div className="relative order-2 md:order-1">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <Image
                src="/images/home/acharya-portrait.webp"
                alt="AstroVastu Expert K.K. Nagaich – Best Vastu Expert in India, 4th Generation Guru"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-hero-fg)]">
                <p className="font-serif text-2xl sm:text-3xl drop-shadow-lg">AstroVastu Expert K.K. Nagaich</p>
                <p className="text-sm opacity-90 mt-1">{bi('4th Generation · Tantra Sadhak · MBA · Former CEO', 'चौथी पीढ़ी · तंत्र साधक · MBA · पूर्व CEO')}</p>
              </div>
            </div>
          </motion.div>

          {/* Text + Stats */}
          <motion.div className="order-1 md:order-2">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-bold">
              {bi('The Sacred Vow of a 4th Generation Vastu Guru', 'चौथी पीढ़ी के वास्तु गुरु का पवित्र संकल्प')}
            </span>
            <h2 id="acharya-vow-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-nidra-indigo mt-4 mb-6 leading-tight">
              {bi("India's Most-Watched Vastu Authority", 'भारत का सबसे अधिक देखा गया वास्तु अधिकारी')}
            </h2>
            <p className="text-base sm:text-lg text-nidra-indigo/80 leading-relaxed mb-8">
              {bi('AstroVastu Expert K.K. Nagaich is the only Vastu expert in India who is a trained Tantra Sadhak, MBA, and former CEO. Every ritual is performed by his own hands, every consultation backed by 4-generation lineage and modern business insight.', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नागाइच भारत के एकमात्र वास्तु विशेषज्ञ हैं जो प्रशिक्षित तंत्र साधक, MBA और पूर्व CEO भी हैं। हर अनुष्ठान उनके स्वयं के हाथों से संपन्न होता है; हर परामर्श चौथी पीढ़ी की वैदिक परंपरा और आधुनिक व्यावसायिक दृष्टि से परिपूर्ण।')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-xl px-3 py-2 border border-prakash-gold/20 shadow-sm">
                <svg className="w-5 h-5 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <span className="text-sm font-bold text-nidra-indigo">{bi('10M+ Views', '10M+ दर्शक')}</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-xl px-3 py-2 border border-prakash-gold/20 shadow-sm">
                <svg className="w-5 h-5 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                <span className="text-sm font-bold text-nidra-indigo">{bi('107K+ Followers', '107K+ फ़ॉलोअर्स')}</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-xl px-3 py-2 border border-prakash-gold/20 shadow-sm">
                <svg className="w-5 h-5 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span className="text-sm font-bold text-nidra-indigo">{bi('2 Lakh+ Clients', '2 लाख+ ग्राहक')}</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-xl px-3 py-2 border border-prakash-gold/20 shadow-sm">
                <svg className="w-5 h-5 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                <span className="text-sm font-bold text-nidra-indigo">{bi('50+ Countries', '50+ देश')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="luxury-button text-center shadow-lg">
                {bi('Discover Our Lineage', 'हमारी परंपरा जानें')}
              </Link>
              <Link href="/about" className="border-b-2 border-prakash-gold text-nidra-indigo font-medium pb-1 hover:text-sacred-saffron transition-colors self-start">
                {bi('Read Full Story →', 'पूरी कहानी पढ़ें →')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default AcharyaVow;
