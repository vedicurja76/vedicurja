'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const comparisons = [
  {
    toolName: 'AI Kundali',
    toolColor: '#FF9933',
    toolFeatures: [
      'Pre‑defined algorithm based on planetary positions',
      'Instant birth chart with ascendant, moon sign, nakshatra',
      'Basic Shadbala (planetary strength) calculation',
      'Generic predictions without personal context',
      'No Dasha timeline or transit analysis',
      'No gemstone or remedy consultation',
      'For demonstration / educational purposes only',
    ],
    serviceName: 'Kundali Vishleshan by Acharya',
    serviceColor: '#C10000',
    servicePrice: '₹10/sq.ft.',
    serviceFeatures: [
      'Full Vimshottari Dasha period analysis with sub‑periods',
      'Transit predictions for next 5 years with Gochar effects',
      'Detailed Yogas identification (Raj Yoga, Dhana Yoga, etc.)',
      'Personalised gemstone & Rudraksha recommendation',
      'Mantra, Yantra, and remedial puja prescription',
      'One‑on‑one consultation with AstroVastu Expert K.K. Nagaich',
      'Suitable for life decisions – career, marriage, health, investments',
    ],
    serviceLink: '/bookings',
  },
  {
    toolName: 'AI Name Suggestion',
    toolColor: '#E8B960',
    toolFeatures: [
      'Algorithmic syllable suggestion based on Nakshatra pada',
      'Four predefined syllables per Nakshatra',
      'No meaning analysis or numerology compatibility',
      'No business name evaluation',
      'Generic output without cultural context',
      'Cannot handle dual‑pada or complex birth charts',
      'For basic reference only',
    ],
    serviceName: 'Namakaran by Acharya',
    serviceColor: '#7B2FBE',
    servicePrice: '₹7/sq.ft.',
    serviceFeatures: [
      'Personalised name creation for newborns (Janam Namakaran)',
      'Business name numerology (Vyavsay Namakaran) with success analysis',
      'Compatibility check with parents and siblings names',
      'Meaning analysis in Sanskrit and native language',
      'Guna‑dosha evaluation of each suggested name',
      'Muhurat for naming ceremony if required',
      'Direct consultation with AstroVastu Expert K.K. Nagaich',
    ],
    serviceLink: '/bookings',
  },
];

function ComparisonCard({ item, index }: { item: typeof comparisons[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div className="rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.3)] transition-shadow duration-500">
        <div className="rounded-[38px] bg-gradient-to-br from-white/90 via-white/70 to-vastu-stone/50 backdrop-blur-xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">
              {item.toolName} <span className="text-sacred-saffron">vs</span> {item.serviceName}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free AI Tool column */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-100/80 to-gray-50/50 p-5 sm:p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.toolColor }} />
                <h4 className="font-serif text-lg font-bold text-nidra-indigo">{item.toolName}</h4>
              </div>
              <p className="text-xs text-nidra-indigo/50 mb-4 uppercase tracking-wider">Free AI‑Powered (Demo)</p>
              <ul className="space-y-2.5">
                {item.toolFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-nidra-indigo/70">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">–</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-nidra-indigo/40 italic">* Not a substitute for professional consultation</p>
            </div>

            {/* Acharya Service column */}
            <div className="rounded-2xl bg-gradient-to-br from-sacred-saffron/5 via-prakash-gold/10 to-white/80 p-5 sm:p-6 border border-prakash-gold/30 relative overflow-hidden">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                Performed by AstroVastu Expert K.K. Nagaich
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.serviceColor }} />
                  <h4 className="font-serif text-lg font-bold text-nidra-indigo">{item.serviceName}</h4>
                </div>
                {/* Price tag */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sacred-saffron/10 to-prakash-gold/20 rounded-full mb-4 border border-prakash-gold/30">
                  <span className="text-xl font-bold text-sacred-saffron">{item.servicePrice}</span>
                  <span className="text-xs text-nidra-indigo/60 ml-2">per consultation</span>
                </div>
                <ul className="space-y-2.5">
                  {item.serviceFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-nidra-indigo/80 font-medium">
                      <span className="text-prakash-gold mt-0.5 flex-shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={item.serviceLink}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Book Expert Session
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumComparison3D() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/20 to-vastu-parchment relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute top-16 left-[5%] w-56 h-56 border border-prakash-gold/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-12 right-[5%] w-64 h-64 border border-dashed border-sacred-saffron/8 rounded-full animate-rotate-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">AI Demo vs Acharya Expertise</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4 leading-tight">
            Free Tools Are{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">For Demonstration</span>
            {' '}— For Real Results,{' '}
            <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Consult the Acharya</span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            Our free AI tools run on predefined algorithms. For personalised, in‑depth analysis with lifelong remedies, AstroVastu Expert K.K. Nagaich personally performs each expert service.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {comparisons.map((item, i) => (
            <ComparisonCard key={item.toolName} item={item} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}
