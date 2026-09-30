'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.3, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  if (prefersReduced) {
    return <div className={className} ref={ref}>{children}</div>;
  }

  return (
    <motion.div style={{ y }} className={className} ref={ref}>
      {children}
    </motion.div>
  );
}
