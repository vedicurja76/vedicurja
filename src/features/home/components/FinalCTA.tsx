'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const bi = useBi();
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.98, 1, 1, 0.98]);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y, scale } : undefined}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Bloody maroon gradient background with looping animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-accent-red)]/40 bg-[length:400%_400%] animate-gradient-loop" />
      
      {/* Metallic shine overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.04),transparent_50%)]" />
      
      {/* Glass orbs */}
      <div className="absolute top-20 left-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-[var(--color-border-soft)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float-slow" />
      <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-prakash-gold/10 to-transparent backdrop-blur-2xl border border-[var(--color-border-soft)] animate-float-medium" />
      <div className="absolute top-1/2 left-[40%] w-48 h-48 rounded-full bg-gradient-to-tr from-white/3 to-transparent backdrop-blur-xl border border-white/5 animate-float-slow-reverse" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
          >
            <div className="rounded-[38px] bg-[var(--color-bg-glass)] backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-[var(--color-border-soft)] shadow-inner">
              {/* Metallic shine accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              {/* Content */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-prakash-gold uppercase tracking-[0.25em] text-sm font-semibold mb-4 inline-block"
              >
                {bi('Begin Your Transformation', 'अपनी परिवर्तन यात्रा शुरू करें')}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4 leading-tight drop-shadow-lg"
              >
                {bi('Unlock the Hidden', 'अपने स्थान की छिपी')}{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  {bi('Potential of Your Space', 'संभावनाओं को जागृत करें')}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[var(--color-hero-fg)]/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              >
                {bi('Book a private consultation with AstroVastu Expert K.K. Nagaich and discover how Vedic wisdom can transform your home, business, and life. Over 2 lakh clients across 50+ countries have experienced the power of authentic Vastu Shastra.', 'एस्ट्रोवास्तु एक्सपर्ट के.के. नागाइच से निजी परामर्श बुक करें और जानें कि वैदिक ज्ञान कैसे आपके घर, व्यापार और जीवन को बदल सकता है। 50+ देशों में 2 लाख+ ग्राहकों ने प्रामाणिक वास्तु शास्त्र की शक्ति महसूस की है।')}
              </motion.p>

              {/* Premium 3D CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <Link href="/bookings">
                  <motion.div
                    whileHover={{ scale: 1.08, rotateX: 5, rotateY: -3, translateZ: 20 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red rounded-full font-bold text-white text-lg shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all duration-500"
                    style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  >
                    {/* Metallic shine */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-prakash-gold/20 via-white/10 to-sacred-saffron/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="relative z-10 flex items-center gap-3">
                      {bi('Schedule Now', 'अभी शेड्यूल करें')}
                      <motion.svg 
                        className="w-5 h-5"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 mt-8 text-[var(--color-hero-fg)]/40 text-xs sm:text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {bi('2 Lakh+ Clients Served', '2 लाख+ ग्राहक सेवित')}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {bi('20+ Years Experience', '20+ वर्षों का अनुभव')}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {bi('Confidential & Secure', 'गोपनीय व सुरक्षित')}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
    </motion.section>
  );
}
export default FinalCTA;
