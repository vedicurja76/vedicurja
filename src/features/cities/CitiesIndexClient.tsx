'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import { useBi } from '@/lib/i18n/Bilingual';
import { CITIES } from './data';

export default function CitiesIndexClient() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)]">
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">{bi('Vedic Vastu, All Over India', 'भारतभर में वैदिक वास्तु')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Vastu Consultant in Your City', 'आपके शहर में वास्तु विशेषज्ञ')}</span>
            </h1>
            <p className="text-lg text-[var(--color-hero-fg)]/75 max-w-3xl mx-auto mb-8">{bi('AstroVastu Expert KK Nagaich serves homes, offices and factories across India — on-site and virtual, with remedies that never require demolition.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच भारत भर में घरों, कार्यालयों व फैक्ट्रियों की सेवा करते हैं — साइट पर व वर्चुअल, ऐसे उपाय जो कभी तोड़-फोड़ मांगते नहीं।')}</p>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-bg-elevated)]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITIES.map((c, i) => (
                <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }} whileHover={{ y: -6, scale: 1.02 }}>
                  <Link href={`/cities/${c.slug}`} className="block h-full p-6 rounded-2xl bg-[var(--color-bg-glass)] backdrop-blur-sm border border-prakash-gold/20 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:border-prakash-gold/50 hover:shadow-[0_15px_35px_rgba(200,138,93,0.18)] transition-all duration-300">
                    <h2 className="font-serif text-xl text-nidra-indigo font-bold mb-1">{bi(`${c.name}`, `${c.nameHi}`)}</h2>
                    <p className="text-sm text-sacred-saffron font-semibold mb-3">{bi(c.taglineEn, c.taglineHi)}</p>
                    <p className="text-sm text-nidra-indigo/60 leading-relaxed line-clamp-3">{bi(c.introEn, c.introHi)}</p>
                    <span className="inline-block mt-4 text-prakash-gold text-sm font-semibold">{bi('Explore →', 'देखें →')}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
