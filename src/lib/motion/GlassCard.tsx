'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { springs } from './springPresets';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = true, glow = false, onClick }: GlassCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`glass-card p-6 ${glow ? 'animate-glow-breathe' : ''} ${className}`}
      whileHover={hover && !prefersReduced ? { y: -4, scale: 1.01 } : undefined}
      whileTap={hover && !prefersReduced ? { scale: 0.98 } : undefined}
      transition={springs.card}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
