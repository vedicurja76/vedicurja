'use client';
import Link from 'next/link';

interface LuxuryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LuxuryButton({ href, children, className = '' }: LuxuryButtonProps) {
  return (
    <Link
      href={href}
      className={`luxury-button inline-flex items-center justify-center px-6 py-3 ${className}`}
    >
      {children}
    </Link>
  );
}
