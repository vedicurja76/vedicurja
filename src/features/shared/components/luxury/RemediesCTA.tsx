'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export default function RemediesCTA() {
  const bi = useBi();
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-vastu-stone/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-[32px] bg-white/70 backdrop-blur-xl border border-prakash-gold/30 shadow-[0_15px_40px_rgba(200,138,93,0.1)]"
        >
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Advanced Remedies', 'उन्नत उपचार')}</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mt-3 mb-4">
            {bi('Need Non‑Structural Corrections?', 'क्या आपको बिना संरचनात्मक बदलाव के सुधार चाहिए?')}
          </h2>
          <p className="text-nidra-indigo/70 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {bi('Explore our advanced Vedic remedies — Geopathic Stress neutralisation, Pyramidology, Crystal & Color Therapy, Mercury/Parad Therapy, and Spiritual Space design.', 'हमारे उन्नत वैदिक उपचार देखें — भूगर्भिक तनाव निवारण, पिरामिडोलॉजी, क्रिस्टल एवं रंग थेरेपी, पारद थेरेपी, और आध्यात्मिक स्थान डिज़ाइन।')}
          </p>
          <Link href="/services/remedies" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
            {bi('Explore Remedies →', 'उपचार देखें →')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
