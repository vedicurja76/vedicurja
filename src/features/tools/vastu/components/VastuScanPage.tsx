'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import VastuScanProcessor from './VastuScanProcessor';
import VastuBars3D from '@/features/tools/shared/components/VastuBars3D';

interface VastuZone { name: string; element: string; score: number; recommendation: string; }

export default function VastuScanPage() {
  const [zones, setZones] = useState<VastuZone[] | null>(null);

  return (
    <>
      <SoundController />
      <Header />
      
        <main className="pt-28 pb-20 px-6 min-h-screen bg-vastu-parchment">
          <div className="max-w-6xl mx-auto">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-center text-nidra-indigo mb-4">
              AI Vastu Scan
            </motion.h1>
            <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">
              Upload your floor plan for a 5‑zone energy analysis.
            </p>
            <VastuScanProcessor onAnalysisComplete={setZones} />
            {zones && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
                <h2 className="font-serif text-2xl text-nidra-indigo mb-6">5‑Zone Summary</h2>
                <VastuBars3D zones={zones} />
                <div className="mt-12 text-center">
                  <p className="text-nidra-indigo/70 mb-4">For a complete 16‑zone report with personalized remedies, book a consultation.</p>
                  <a href="/bookings" className="luxury-button inline-block">Book Consultation</a>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      
    </>
  );
}
