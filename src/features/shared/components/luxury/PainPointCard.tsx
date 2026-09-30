'use client';
import { motion } from 'framer-motion';
interface Props { points: string[]; title: string; accent: string; delay?: number; }
export default function PainPointCard({ points, title, accent, delay = 0 }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }} className="group relative">
      <div className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
      <div className="relative p-6 sm:p-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-prakash-gold/20 shadow-[0_8px_32px_rgba(26,42,58,0.06)] hover:shadow-[0_20px_50px_rgba(200,138,93,0.15)] transition-shadow duration-500">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px]" style={{ backgroundColor: accent }} />
        <h3 className="font-serif text-xl sm:text-2xl text-nidra-indigo font-bold mb-6">{title}</h3>
        <ul className="space-y-3">{points.map((point, i) => (
          <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }}
            className="flex items-start gap-3 text-sm sm:text-base text-nidra-indigo/70 leading-relaxed">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            <span>{point}</span>
          </motion.li>
        ))}</ul>
      </div>
    </motion.div>
  );
}
