'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanetaryLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function PlanetaryLoader({ isLoading, onComplete }: PlanetaryLoaderProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isLoading, onComplete]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]/95 backdrop-blur-md"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="planets">
            <div id="planetTrail1"></div>
            <div id="planetTrail2"></div>
            <div id="planetTrail3"></div>
            <div id="planet"></div>
            <div id="star"></div>
            <div id="starShadow"></div>
            <div id="blackHoleDisk2"></div>
            <div id="blackHole"></div>
            <div id="blackHoleDisk1"></div>
          </div>
          <p className="text-prakash-gold/80 font-serif text-sm tracking-widest animate-pulse">
            Aligning Your Cosmos
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
