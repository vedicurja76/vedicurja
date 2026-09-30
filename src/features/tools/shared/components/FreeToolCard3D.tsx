'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useSound } from '@/features/shared/hooks/useSound';

interface FreeToolCard3DProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

export function FreeToolCard3D({ name, description, icon, href, color }: FreeToolCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { play } = useSound();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 25 });
  const springY = useSpring(y, { stiffness: 350, damping: 25 });
  const rotateX = useTransform(springY, [-0.3, 0.3], [8, -8]);
  const rotateY = useTransform(springX, [-0.3, 0.3], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const gradient = `linear-gradient(145deg, ${color}20 0%, ${color}40 100%)`;
  
  // Ensure URL uses hyphens (replace underscores if present)
  const safeHref = href.replace(/_/g, '-');

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => play('hoverCard')}
      onClick={() => play('cardExpand')}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className="w-full max-w-sm h-[420px] mx-auto group"
    >
      <div
        className="relative h-full rounded-[50px] transition-all duration-500 shadow-2xl hover:shadow-[0_30px_50px_-15px_rgba(200,138,93,0.4)] border border-white/30"
        style={{ background: gradient, transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-[10px] rounded-[45px] bg-gradient-to-br from-white/40 via-white/10 to-white/30 backdrop-blur-md transform translate-z-6 border-l border-white/60 border-b border-white/40 shadow-inner" />
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 opacity-30 animate-spin-slow" style={{ borderColor: color }} />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border opacity-20 animate-reverse-spin" style={{ borderColor: color }} />
        <div className="relative z-10 h-full flex flex-col p-8 transform translate-z-8">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <span className="text-7xl mb-8 drop-shadow-2xl transform translate-z-4">{icon}</span>
            <h3 className="text-3xl font-serif font-bold text-nidra-indigo mb-3 drop-shadow-md">{name}</h3>
            <p className="text-nidra-indigo/80 text-base leading-relaxed">{description}</p>
          </div>
          <div className="mt-auto pt-6 transform translate-z-4">
            <Link
              href={safeHref}
              className="block w-full py-3.5 text-center bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-full font-semibold text-nidra-indigo border border-white/60 shadow-lg hover:bg-prakash-gold hover:text-white hover:border-prakash-gold transition-all duration-300"
            >
              Try Now →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default FreeToolCard3D;
