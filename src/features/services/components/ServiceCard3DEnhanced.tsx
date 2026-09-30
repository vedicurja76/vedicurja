'use client';
import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
  href: string;
  image: string;
}

export default function ServiceCard3DEnhanced({ title, description, icon, benefits, href, image }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm h-[500px] perspective-[1200px] cursor-pointer group"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="absolute inset-0 rounded-[40px] shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          rotateY: flipped ? 180 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front – Image */}
        <div
          className="absolute inset-0 rounded-[40px] bg-[var(--color-bg-glass)] backdrop-blur-xl border-2 border-prakash-gold/30 overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-56 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hero-2)]/40 to-transparent" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-3 drop-shadow-[0_0_15px_rgba(255,153,51,0.4)]">{icon}</div>
            <h3 className="font-serif text-2xl text-nidra-indigo font-bold">{title}</h3>
            <p className="text-sm text-nidra-indigo/60 mt-2">{description}</p>
            <span className="mt-4 text-prakash-gold text-xs font-medium">Tap to explore →</span>
          </div>
        </div>

        {/* Back – Info */}
        <div
          className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[var(--color-bg-elevated)] via-prakash-gold/5 to-sacred-saffron/10 backdrop-blur-xl border-2 border-prakash-gold/40 flex flex-col justify-center p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h4 className="font-serif text-xl text-nidra-indigo font-bold mb-4">{title}</h4>
          <p className="text-sm text-nidra-indigo/80 mb-4">{description}</p>
          <ul className="space-y-2 mb-6 text-sm text-nidra-indigo/70">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-prakash-gold mt-0.5">✦</span>
                {b}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-prakash-gold text-white rounded-full text-sm font-medium hover:bg-sacred-saffron transition"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
