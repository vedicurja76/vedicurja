'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { springs } from './springPresets';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
}

const directionOffset: Record<string, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  className,
  once = true,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const offset = directionOffset[direction];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: (offset.x ?? 0) * distance, y: (offset.y ?? 0) * distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ ...springs.gentle, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
