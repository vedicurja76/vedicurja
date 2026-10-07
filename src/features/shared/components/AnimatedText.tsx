'use client';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'div' | 'h1' | 'h2';
}

export default function AnimatedText({ text, className = '', delay = 0, as = 'div' }: AnimatedTextProps) {
  const Tag = motion[as] as unknown as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </Tag>
  );
}

export function GradientText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
      className={`bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent animate-gradient-x ${className}`}
    >
      {text}
    </motion.span>
  );
}
