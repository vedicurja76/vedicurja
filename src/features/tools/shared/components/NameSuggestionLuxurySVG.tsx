'use client';
export default function NameSuggestionLuxurySVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ng1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8B960" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
        <linearGradient id="ng2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#E8B960" />
        </linearGradient>
        <filter id="glow3">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer sacred geometry ring */}
      <circle cx="60" cy="60" r="52" stroke="url(#ng1)" strokeWidth="1.5" opacity="0.7" filter="url(#glow3)">
        <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="28s" repeatCount="indefinite" />
      </circle>
      {/* Octagonal frame */}
      <polygon points="60,12 94,38 94,82 60,108 26,82 26,38" stroke="url(#ng2)" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* Inner diamond */}
      <polygon points="60,26 86,60 60,94 34,60" stroke="url(#ng1)" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Sacred letterforms */}
      <text x="60" y="52" textAnchor="middle" fontSize="22" fill="url(#ng1)" fontWeight="bold" fontFamily="serif" filter="url(#glow3)">Aa</text>
      {/* Decorative dots */}
      <circle cx="60" cy="12" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="94" cy="38" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" /></circle>
      <circle cx="94" cy="82" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" /></circle>
      <circle cx="60" cy="108" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite" /></circle>
      <circle cx="26" cy="82" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.6s" repeatCount="indefinite" /></circle>
      <circle cx="26" cy="38" r="2" fill="url(#ng1)" opacity="0.9"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite" /></circle>
      {/* Central glow */}
      <circle cx="60" cy="60" r="8" fill="url(#ng2)" opacity="0.7" filter="url(#glow3)">
        <animate attributeName="r" values="6;10;6" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
