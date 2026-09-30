'use client';
import { motion } from 'framer-motion';

interface AnimatedStatCardProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
  color: string;
}

export default function AnimatedStatCard({ label, value, suffix, description, icon, color }: AnimatedStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stat-card flex flex-col items-center justify-center"
      style={{ background: `linear-gradient(145deg, ${color}10 0%, ${color}30 100%)` }}
    >
      <div className="stat-header">
        <span className="text-3xl">{icon}</span>
        <span className="stat-label">{label}</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="stat-value">{value}{suffix}</span>
        <span className="text-sm opacity-70">{description}</span>
      </div>
      <div className="progress-ring flex justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="6" strokeOpacity="0.2" />
          <motion.circle
            cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="6"
            strokeDasharray="339.292"
            initial={{ strokeDashoffset: 339.292 }}
            whileInView={{ strokeDashoffset: 339.292 * (1 - value / 100) }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}
