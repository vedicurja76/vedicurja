'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CosmicLoader from '@/features/shared/components/ui/CosmicLoader';

const INITIAL_MIN_MS = 350; // first-paint settle
const NAV_MIN_MS = 0;        // route change shows only if content not ready

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isFirst = useState(true)[0]; // initial only
  let firstRef = (typeof window !== 'undefined' && (window as unknown as { __first?: boolean }).__first);

  useEffect(() => {
    if (firstRef === undefined) {
      firstRef = false;
      (window as unknown as { __first?: boolean }).__first = false;
    }
    const min = isFirst ? INITIAL_MIN_MS : NAV_MIN_MS;
    const t = setTimeout(() => setLoading(false), min);
    return () => clearTimeout(t);
  }, [pathname, isFirst]);

  return (
    <>
      {loading && <CosmicLoader maxMs={isFirst ? INITIAL_MIN_MS : 250} />}
      {children}
    </>
  );
}