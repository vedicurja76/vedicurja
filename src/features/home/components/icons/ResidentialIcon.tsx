'use client';
import { motion } from 'framer-motion';

export function ResidentialIcon() {
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
      {/* Glowing halo */}
      <motion.circle
        cx="50" cy="50" r="45"
        fill="none"
        stroke="url(#residentialGrad)"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* House body */}
      <motion.path
        d="M20 70V40L50 15L80 40V70H20Z"
        fill="none"
        stroke="url(#residentialGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Roof */}
      <motion.path
        d="M15 40L50 10L85 40"
        fill="none"
        stroke="var(--color-accent-saffron)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      {/* Door */}
      <motion.rect
        x="40" y="50" width="20" height="20"
        fill="none"
        stroke="var(--color-accent-gold)"
        strokeWidth="2.5"
        rx="3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      />
      {/* Windows */}
      <motion.rect x="25" y="48" width="10" height="10" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" rx="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
      <motion.rect x="65" y="48" width="10" height="10" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" rx="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
      {/* Sacred Om at center */}
      <motion.text x="50" y="38" textAnchor="middle" fontSize="18" fill="var(--color-accent-red)" fontWeight="bold" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}>ॐ</motion.text>
      <defs>
        <linearGradient id="residentialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent-saffron)" />
          <stop offset="50%" stopColor="var(--color-accent-red)" />
          <stop offset="100%" stopColor="var(--color-accent-gold)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
