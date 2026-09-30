'use client';
export default function SpiritualSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933"/><stop offset="100%" stopColor="#FF6B6B"/>
        </linearGradient>
        <filter id="sglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="40" cy="40" r="34" stroke="url(#sg1)" strokeWidth="1.5" opacity="0.6" filter="url(#sglow)">
        <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="30s" repeatCount="indefinite"/>
      </circle>
      <polygon points="40,10 68,34 58,64 22,64 12,34" stroke="url(#sg1)" strokeWidth="1" fill="none" opacity="0.7"/>
      <polygon points="40,22 56,42 48,56 32,56 24,42" stroke="url(#sg1)" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <circle cx="40" cy="40" r="8" fill="url(#sg1)" opacity="0.9" filter="url(#sglow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x="40" y="44" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">Om</text>
    </svg>
  );
}
