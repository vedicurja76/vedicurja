'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/features/shared/contexts/NavigationContext';

export default function NavigationProgress() {
  const pathname = usePathname();
  const { isNavigating, completeNavigation } = useNavigation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // When navigation starts, animate progress
  useEffect(() => {
    if (isNavigating) {
      setVisible(true);
      setProgress(0);

      const timer1 = setTimeout(() => setProgress(30), 50);
      const timer2 = setTimeout(() => setProgress(60), 150);
      const timer3 = setTimeout(() => setProgress(80), 250);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isNavigating]);

  // When pathname changes (page loaded), complete the progress
  useEffect(() => {
    if (visible && progress > 0) {
      setProgress(100);
      const timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
        completeNavigation();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red shadow-[0_0_10px_rgba(255,153,51,0.6)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Subtle mobile tap-prevention overlay */}
      <div className="fixed inset-0 z-[9998] bg-transparent pointer-events-auto" />
    </>
  );
}
