'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gold gradient bar pinned to the top that tracks page scroll.
 * Uses MotionValue + scaleX transform so it never triggers React re-renders.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red shadow-[0_0_10px_rgba(232,185,96,0.6)]"
    />
  );
}
