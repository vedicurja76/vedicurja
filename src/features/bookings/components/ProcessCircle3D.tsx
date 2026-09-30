'use client';
import { motion } from 'framer-motion';

interface Props {
  step: number;
  title: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ProcessCircle3D({ step, title, icon, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative w-40 h-40 mx-auto perspective-[600px]"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-prakash-gold/20 via-sacred-saffron/10 to-kumkuma-red/20 backdrop-blur-sm border-2 border-prakash-gold/30 shadow-[0_10px_30px_rgba(232,185,96,0.2)] flex flex-col items-center justify-center text-center p-4"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 15, rotateX: -5, scale: 1.1 }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-prakash-gold/40 animate-spin-slow" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-prakash-gold/10 to-transparent" />
        <div className="relative z-10 text-4xl mb-2 drop-shadow-[0_0_10px_rgba(255,153,51,0.6)]">{icon}</div>
        <div className="relative z-10 font-serif text-lg text-nidra-indigo font-bold">{title}</div>
        <div className="relative z-10 w-8 h-8 mt-2 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold shadow-lg">
          {step}
        </div>
      </motion.div>
    </motion.div>
  );
}
