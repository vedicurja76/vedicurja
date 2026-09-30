'use client';
import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useSound } from '@/features/shared/hooks/useSound';

interface ServiceCard3DProps {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
  href: string;
  colorGradient: string;
}

export function ServiceCard3D({
  title,
  description,
  icon,
  benefits,
  href,
}: ServiceCard3DProps) {
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

  const sacredGradient = 'linear-gradient(135deg, #C10000 0%, #FF9933 50%, #E8B960 100%)';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => play('hoverCard')}
      onClick={() => play('cardExpand')}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className="w-full max-w-sm h-[460px] mx-auto group"
    >
      <div
        className="relative h-full rounded-[50px] transition-all duration-500 shadow-2xl hover:shadow-[0_30px_50px_-15px_rgba(200,138,93,0.5)] border border-white/30"
        style={{ background: sacredGradient, transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-[10px] rounded-[45px] bg-gradient-to-br from-white/20 via-white/5 to-white/30 backdrop-blur-[2px] transform translate-z-6 border-l border-white/40 border-b border-white/30 shadow-inner" />
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-white/30 opacity-40 animate-spin-slow" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-white/25 opacity-30 animate-reverse-spin" />
        <div className="relative z-10 h-full flex flex-col p-8 transform translate-z-8">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="mb-6 transform translate-z-4">{icon}</div>
            <h3 className="text-3xl font-serif font-bold text-white mb-3 drop-shadow-lg">{title}</h3>
            <p className="text-white/95 text-base leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {benefits.slice(0, 3).map((b, i) => (
                <span key={i} className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-white font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-6 transform translate-z-4">
            <Link
              href={href}
              className="block w-full py-3.5 text-center bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-full font-semibold text-nidra-indigo border border-white/60 shadow-lg hover:bg-prakash-gold hover:text-white hover:border-prakash-gold transition-all duration-300"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default ServiceCard3D;
