'use client';
export default function IndustrialSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A06A3D"/><stop offset="100%" stopColor="#D4A373"/>
        </linearGradient>
        <filter id="iglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="15" y="25" width="50" height="40" rx="2" stroke="url(#ig1)" strokeWidth="2" fill="none" filter="url(#iglow)"/>
      <path d="M22 25 L35 12 L48 25" stroke="url(#ig1)" strokeWidth="1.5" fill="none"/>
      <rect x="25" y="35" width="8" height="10" rx="1" stroke="url(#ig1)" strokeWidth="1" fill="none"/>
      <rect x="37" y="35" width="8" height="16" rx="1" stroke="url(#ig1)" strokeWidth="1" fill="none"/>
      <rect x="49" y="35" width="8" height="12" rx="1" stroke="url(#ig1)" strokeWidth="1" fill="none"/>
      <circle cx="53" cy="40" r="2" fill="url(#ig1)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
