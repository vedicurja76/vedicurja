'use client';
export default function ResidentialSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8B960"/><stop offset="100%" stopColor="#FF9933"/>
        </linearGradient>
        <filter id="rglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="40" cy="40" r="36" stroke="url(#rg1)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" filter="url(#rglow)">
        <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="25s" repeatCount="indefinite"/>
      </circle>
      <path d="M20 50 L40 18 L60 50" stroke="url(#rg1)" strokeWidth="2" fill="none" filter="url(#rglow)"/>
      <rect x="28" y="50" width="24" height="20" rx="2" stroke="url(#rg1)" strokeWidth="1.5" fill="none"/>
      <rect x="32" y="56" width="6" height="6" rx="1" stroke="url(#rg1)" strokeWidth="1" fill="none"/>
      <circle cx="40" cy="40" r="4" fill="url(#rg1)" filter="url(#rglow)">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
