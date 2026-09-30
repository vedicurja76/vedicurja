'use client';
import Link from 'next/link';
import { useSound } from '@/features/shared/hooks/useSound';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
}

export function HeroButton({ href, children }: HeroButtonProps) {
  const { play } = useSound();

  return (
    <Link
      href={href}
      onMouseEnter={() => play('hoverSlide')}
      onClick={() => play('clickPrimary')}
      className="group relative inline-block border-2 border-prakash-gold text-prakash-gold px-10 py-4 rounded-full text-lg font-medium overflow-hidden transition-all duration-500 hover:text-white"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-prakash-gold to-sacred-saffron -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
