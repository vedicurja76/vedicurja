'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export function VirtualConsultCTA() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const bi = useBi();
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97]);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y, scale } : undefined}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Soft gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-elevated)]/70 to-[var(--color-bg-secondary)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,153,51,0.08),transparent_50%)]" />

      {/* Floating glass orbs */}
      <div className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-prakash-gold/10 to-sacred-saffron/5 backdrop-blur-2xl border border-[var(--color-border-soft)] shadow-[0_20px_40px_rgba(200,138,93,0.15)] animate-float" />
      <div className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-sacred-saffron/5 to-kumkuma-red/5 backdrop-blur-2xl border border-[var(--color-border-soft)] shadow-[0_20px_40px_rgba(193,0,0,0.08)] animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_25px_50px_rgba(26,42,58,0.15)]"
          >
            <div className="rounded-[38px] bg-[var(--color-bg-glass)] backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center border border-[var(--color-border-soft)] shadow-inner">
              {/* Decorative elements */}
              <div className="absolute top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-prakash-gold/20 to-transparent blur-sm" />
              <div className="absolute bottom-8 right-10 w-16 h-16 rounded-full bg-gradient-to-tl from-sacred-saffron/15 to-transparent blur-sm" />

              {/* Content */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sacred-saffron uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 inline-block"
              >
                {bi('Vedic Connect', 'वैदिक कनेक्ट')}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4 leading-tight"
              >
                {bi('Connect with', 'आचार्य से')} <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">{bi('Acharya', 'वर्चुअल')}</span> {bi(', Virtually', 'जुड़ें')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-nidra-indigo/70 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {bi('Experience personalised Vastu guidance from anywhere in the world via secure video call. Share your floor plan, receive real-time remedies, and transform your space without travelling.', 'सुरक्षित वीडियो कॉल के ज़रिये दुनिया के किसी भी कोने से व्यक्तिगत वास्तु मार्गदर्शन पाएं। अपना फ्लोर प्लान साझा करें, रीयल-टाइम उपाय प्राप्त करें और बिना यात्रा किए अपना स्थान बदलें।')}
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8"
              >
                {[
                  { value: '500+', label: 'Consultations', labelHi: 'परामर्श' },
                  { value: '15+', label: 'Countries', labelHi: 'देश' },
                  { value: '4.9 ★', label: 'Rating', labelHi: 'रेटिंग' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-nidra-indigo">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-nidra-indigo/50 mt-1">{bi(stat.label, stat.labelHi)}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/bookings"
                  className="luxury-button text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {bi('Book Virtual Consultation', 'वर्चुअल परामर्श बुक करें')}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-prakash-gold text-nidra-indigo px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-prakash-gold/10 transition"
                >
                  {bi('Contact Acharya', 'आचार्य से संपर्क करें')}
                </Link>
              </motion.div>

              <p className="mt-6 text-xs sm:text-sm text-nidra-indigo/40">
                {bi('Your privacy is guaranteed. All sessions are confidential and secure.', 'आपकी गोपनीयता सुनिश्चित है। सभी सेशन गोपनीय और सुरक्षित हैं।')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
    </motion.section>
  );
}
export default VirtualConsultCTA;
