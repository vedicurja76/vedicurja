'use client';
import { useEffect } from 'react';
import { soundManager } from '@/lib/audio/soundManager';

export function GlobalSoundProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleClick = () => soundManager.playUIClick();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
}
