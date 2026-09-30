'use client';
import { motion } from 'framer-motion';

export function CommercialIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      className="drop-shadow-2xl"
    >
      {/* Rotating mandala ring */}
      <motion.circle
        cx="50" cy="50" r="42"
        fill="none"
        stroke="url(#commercialGrad)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Building structure */}
      <motion.rect
        x="25" y="20" width="50" height="55"
        fill="none"
        stroke="url(#commercialGrad)"
        strokeWidth="3"
        rx="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      {/* Floors */}
      <motion.line x1="25" y1="40" x2="75" y2="40" stroke="var(--color-accent-saffron)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <motion.line x1="25" y1="55" x2="75" y2="55" stroke="var(--color-accent-gold)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
      {/* Columns */}
      <motion.line x1="40" y1="20" x2="40" y2="75" stroke="var(--color-accent-red)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9 }} />
      <motion.line x1="60" y1="20" x2="60" y2="75" stroke="var(--color-accent-red)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }} />
      {/* Entrance */}
      <motion.path
        d="M42 75V60C42 56 58 56 58 60V75"
        fill="none"
        stroke="var(--color-accent-gold)"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2 }}
      />
      {/* Rising prosperity arrow */}
      <motion.path
        d="M70 70L80 60L90 70"
        fill="none"
        stroke="var(--color-accent-saffron)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.line x1="80" y1="60" x2="80" y2="85" stroke="var(--color-accent-saffron)" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7 }} />
      <defs>
        <linearGradient id="commercialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent-red)" />
          <stop offset="50%" stopColor="var(--color-accent-gold)" />
          <stop offset="100%" stopColor="var(--color-accent-saffron)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
