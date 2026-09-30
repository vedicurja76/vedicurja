'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CosmicLoader from '@/features/shared/components/ui/CosmicLoader';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (prevPath !== pathname) {
      setLoading(true);
      setPrevPath(pathname);
      const timer = setTimeout(() => setLoading(false), 3500);
      return () => clearTimeout(timer);
    } else {
      // Initial load
      const timer = setTimeout(() => setLoading(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <>
      {loading && <CosmicLoader />}
      {children}
    </>
  );
}
