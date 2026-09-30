'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionLoaderProps {
  isLoading: boolean;
  minimumDisplayTime?: number;
  onComplete?: () => void;
}

export default function PageTransitionLoader({
  isLoading,
  minimumDisplayTime = 2700,
  onComplete,
}: PageTransitionLoaderProps) {
  const [visible, setVisible] = useState(false);
  const [minTimerDone, setMinTimerDone] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setMinTimerDone(false);
      // Start the minimum display timer
      const timer = setTimeout(() => {
        setMinTimerDone(true);
        if (onComplete) onComplete();
      }, minimumDisplayTime);
      return () => clearTimeout(timer);
    } else if (minTimerDone) {
      setVisible(false);
    }
  }, [isLoading, minTimerDone, minimumDisplayTime, onComplete]);

  // When loading stops and timer is done, hide after a brief fade
  useEffect(() => {
    if (!isLoading && minTimerDone) {
      const hideTimer = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, minTimerDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0015] overflow-hidden"
        >
          {/* Background stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Solar system animation container */}

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Solar system */}
            <div className="scale-[1.8] sm:scale-[2.2] md:scale-[2.5]">
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
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-prakash-gold font-serif text-lg sm:text-xl tracking-wider"
            >
              Aligning Your Cosmos…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
