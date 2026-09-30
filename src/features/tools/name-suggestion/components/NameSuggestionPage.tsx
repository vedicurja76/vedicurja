'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import NameSuggestionForm from './NameSuggestionForm';
import SyllableCard3D from './SyllableCard3D';
import nakshatraData from '@/data/nakshatra-syllables.json';

export default function NameSuggestionPage() {
  const [result, setResult] = useState<{ nakshatra: string; syllables: { hindi: string; english: string; meaning: string }[] } | null>(null);

  const handleSuggest = (nakshatra: string) => {
    const raw = (nakshatraData as Record<string, string[]>)[nakshatra] || [];
    const syllables = raw.map((s: string) => ({ hindi: s, english: s, meaning: 'Auspicious sound' }));
    setResult({ nakshatra, syllables });
  };

  return (
    <>
      <SoundController />
      <Header />
      
        <main className="pt-28 pb-20 px-6 min-h-screen bg-vastu-parchment">
          <div className="max-w-6xl mx-auto">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-center text-nidra-indigo mb-4">
              AI Name Suggestion
            </motion.h1>
            <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">
              Discover auspicious syllables based on your Nakshatra.
            </p>
            <NameSuggestionForm onSuggest={handleSuggest} />
            {result && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
                <h2 className="font-serif text-2xl text-nidra-indigo mb-6 text-center">
                  Auspicious Syllables for {result.nakshatra}
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {result.syllables.map((s, i) => <SyllableCard3D key={i} syllable={s} index={i} />)}
                </div>
                <div className="mt-12 text-center">
                  <p className="text-nidra-indigo/70 mb-4">Want personalized name suggestions with meanings?</p>
                  <a href="/bookings" className="luxury-button inline-block">Book a Consultation</a>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      
    </>
  );
}
