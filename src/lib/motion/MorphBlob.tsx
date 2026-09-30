'use client';

import { useReducedMotion } from 'framer-motion';

interface MorphBlobProps {
  color?: string;
  size?: number;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  blur?: number;
  opacity?: number;
  speed?: 'slow' | 'normal' | 'fast';
}

const positions = {
  'top-left': 'top-[-10%] left-[-5%]',
  'top-right': 'top-[-8%] right-[-5%]',
  'bottom-left': 'bottom-[-5%] left-[-8%]',
  'bottom-right': 'bottom-[-10%] right-[-5%]',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

const speeds = { slow: '18s', normal: '12s', fast: '8s' };

export function MorphBlob({
  color = 'var(--color-blob-1)',
  size = 400,
  className = '',
  position = 'top-right',
  blur = 80,
  opacity = 0.5,
  speed = 'normal',
}: MorphBlobProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={`absolute pointer-events-none ${positions[position]} ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        filter: `blur(${blur}px)`,
        opacity: prefersReduced ? opacity * 0.5 : opacity,
        animation: prefersReduced ? 'none' : `blob-morph ${speeds[speed]} ease-in-out infinite`,
      }}
      aria-hidden="true"
    />
  );
}
