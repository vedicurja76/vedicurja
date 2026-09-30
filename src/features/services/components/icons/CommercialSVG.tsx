'use client';
export default function CommercialSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C88A5D"/><stop offset="100%" stopColor="#E8B960"/>
        </linearGradient>
        <filter id="cglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="12" y="18" width="56" height="48" rx="3" stroke="url(#cg1)" strokeWidth="2" fill="none" filter="url(#cglow)"/>
      <line x1="12" y1="34" x2="68" y2="34" stroke="url(#cg1)" strokeWidth="1" opacity="0.7"/>
      <line x1="12" y1="50" x2="68" y2="50" stroke="url(#cg1)" strokeWidth="1" opacity="0.7"/>
      <rect x="28" y="22" width="24" height="8" rx="1" stroke="url(#cg1)" strokeWidth="1" fill="none"/>
      <circle cx="40" cy="42" r="3" fill="url(#cg1)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <path d="M60 58 L70 48 L80 58" stroke="url(#cg1)" strokeWidth="1.5" fill="none" filter="url(#cglow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}
