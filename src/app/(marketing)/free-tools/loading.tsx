'use client';
import GlobalLoader from '@/features/shared/components/ui/GlobalLoader';

export default function Loading() {
  return <GlobalLoader isLoading={true} message="Loading..." />;
}
