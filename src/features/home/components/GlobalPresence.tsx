'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export function GlobalPresence() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.section ref={ref} style={isMounted ? { y } : undefined} className="py-24 md:py-32 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] text-[var(--color-hero-fg)] overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">{bi('Global Wisdom,', 'वैश्विक ज्ञान,')}<br/><span className="text-prakash-gold">{bi('Local Precision', 'स्थानीय सटीकता')}</span></h2>
            <p className="text-base sm:text-lg text-[var(--color-hero-fg)]/70 leading-relaxed mb-6">
              {bi('From the banks of the Ganga to Manhattan skyscrapers – our Vastu solutions transcend borders.', 'गंगा के तट से लेकर मैनहट्टन के आकाशचुंबी इमारतों तक – हमारे वास्तु समाधान सीमाओं से परे हैं।')}
            </p>
            <ul className="space-y-3 mb-8 text-[var(--color-hero-fg)]/80">
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✦</span> {bi('50+ Countries Served', '50+ देशों में सेवा')}</li>
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✦</span> {bi('2 Lakh+ Satisfied Clients', '2 लाख+ संतुष्ट ग्राहक')}</li>
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✦</span> {bi('10M+ Views Across Platforms', 'प्लेटफॉर्म पर 10M+ दर्शक')}</li>
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✦</span> {bi('107K+ Dedicated Followers', '107K+ समर्पित फॉलोअर')}</li>
            </ul>
            <Link href="/bookings" className="inline-flex items-center gap-2 px-8 py-4 bg-prakash-gold text-nidra-indigo font-bold rounded-full hover:bg-sacred-saffron transition-colors shadow-lg">
              {bi('Book a Consultation →', 'परामर्श बुक करें →')}
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_60px_rgba(232,185,96,0.5)] border-4 border-prakash-gold">
              <Image src="/images/home/globe-texture.webp" alt="AstroVastu Expert Global Presence" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--color-hero-2)]/30" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default GlobalPresence;
