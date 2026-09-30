'use client';
import { useEffect, useState } from 'react';
import PageTransitionLoader from '@/features/shared/components/ui/PageTransitionLoader';
import { consumeTransition } from '@/lib/pageTransition';

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if we should show the loader
    const shouldShow = consumeTransition();
    if (shouldShow) {
      setShowLoader(true);
      // The loader will auto‑hide after its minimum display time
      setTimeout(() => setShowLoader(false), 2800);
    }
  }, []);

  return (
    <>
      <PageTransitionLoader isLoading={showLoader} minimumDisplayTime={2700} />
      {children}
    </>
  );
}
