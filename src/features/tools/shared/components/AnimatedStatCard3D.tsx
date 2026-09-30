'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface AnimatedStatCard3DProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

export default function AnimatedStatCard3D({ label, value, suffix, description, icon, color, index }: AnimatedStatCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);
  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Floating particles for background
  const particles = Array.from({ length: 6 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1.5 h-1.5 rounded-full opacity-40"
      style={{ backgroundColor: color }}
      animate={{
        x: [0, Math.sin(i) * 30, 0],
        y: [0, Math.cos(i) * 30, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className="relative w-full h-[420px] mx-auto group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Mouse‑tracking glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${color}40 0%, transparent 60%)`,
        }}
      />
      
      {/* Main card */}
      <div
        className="relative h-full rounded-[40px] p-[2px] bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden"
        style={{
          transform: 'translateZ(0)',
          background: `linear-gradient(145deg, ${color}15 0%, ${color}05 100%)`,
        }}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-8">
          {/* Icon with 3D lift */}
          <motion.div
            className="mb-6"
            style={{ transform: 'translateZ(20px)' }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-6xl drop-shadow-2xl">{icon}</div>
          </motion.div>

          {/* Label */}
          <motion.h3
            className="text-2xl font-serif font-bold text-nidra-indigo mb-2"
            style={{ transform: 'translateZ(15px)' }}
          >
            {label}
          </motion.h3>

          {/* Value with animated count */}
          <motion.div
            className="flex items-baseline gap-1 mb-3"
            style={{ transform: 'translateZ(25px)' }}
          >
            <motion.span
              className="text-5xl font-bold"
              style={{ color }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {value}
            </motion.span>
            <span className="text-2xl text-nidra-indigo/60">{suffix}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm text-nidra-indigo/70 mb-6"
            style={{ transform: 'translateZ(10px)' }}
          >
            {description}
          </motion.p>

          {/* Progress ring with 3D effect */}
          <motion.div
            className="mt-auto flex justify-center"
            style={{ transform: 'translateZ(30px)' }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeOpacity="0.2"
              />
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="263.89"
                initial={{ strokeDashoffset: 263.89 }}
                whileInView={{ strokeDashoffset: 263.89 * (1 - value / 100) }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <text
                x="50" y="58"
                textAnchor="middle"
                fill={color}
                fontSize="18"
                fontWeight="bold"
              >
                {value}%
              </text>
            </svg>
          </motion.div>
        </div>

        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-[40px] border-2 border-white/20 pointer-events-none" />
        <div className="absolute inset-[2px] rounded-[38px] border border-[var(--color-border-soft)] pointer-events-none" />
      </div>
    </motion.div>
  );
}
