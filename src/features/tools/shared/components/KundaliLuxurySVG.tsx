'use client';
export default function KundaliLuxurySVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="kg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer ring spinning slow */}
      <circle cx="60" cy="60" r="52" stroke="url(#kg1)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.7" filter="url(#glow)">
        <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="30s" repeatCount="indefinite" />
      </circle>
      {/* Middle ring spinning reverse */}
      <circle cx="60" cy="60" r="40" stroke="url(#kg2)" strokeWidth="1" strokeDasharray="3 6" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="22s" repeatCount="indefinite" />
      </circle>
      {/* Inner decorative ring */}
      <circle cx="60" cy="60" r="28" stroke="url(#kg1)" strokeWidth="0.8" opacity="0.5" />
      {/* Square mandala */}
      <rect x="24" y="24" width="72" height="72" rx="8" stroke="url(#kg2)" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* Cross lines */}
      <line x1="24" y1="60" x2="96" y2="60" stroke="url(#kg1)" strokeWidth="0.5" opacity="0.5" />
      <line x1="60" y1="24" x2="60" y2="96" stroke="url(#kg1)" strokeWidth="0.5" opacity="0.5" />
      {/* Diagonal lines */}
      <line x1="32" y1="32" x2="88" y2="88" stroke="url(#kg2)" strokeWidth="0.4" opacity="0.4" />
      <line x1="88" y1="32" x2="32" y2="88" stroke="url(#kg2)" strokeWidth="0.4" opacity="0.4" />
      {/* Central glowing core */}
      <circle cx="60" cy="60" r="10" fill="url(#kg1)" opacity="0.8" filter="url(#glow)">
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Central Om */}
      <text x="60" y="65" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold" fontFamily="serif">Om</text>
    </svg>
  );
}
