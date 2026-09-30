'use client';
export default function LandSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A373"/><stop offset="100%" stopColor="#E8B960"/>
        </linearGradient>
        <filter id="lglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="40" cy="40" r="34" stroke="url(#lg1)" strokeWidth="1.5" opacity="0.7" filter="url(#lglow)">
        <animateTransform attributeName="transform" type="rotate" from="360 40 40" to="0 40 40" dur="20s" repeatCount="indefinite"/>
      </circle>
      <ellipse cx="40" cy="40" rx="20" ry="10" stroke="url(#lg1)" strokeWidth="1" opacity="0.5"/>
      <line x1="20" y1="40" x2="60" y2="40" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.4"/>
      <line x1="40" y1="6" x2="40" y2="74" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.4"/>
      <polygon points="40,12 46,38 34,38" fill="url(#lg1)" opacity="0.8"/>
      <circle cx="40" cy="40" r="5" fill="url(#lg1)" filter="url(#lglow)">
        <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
