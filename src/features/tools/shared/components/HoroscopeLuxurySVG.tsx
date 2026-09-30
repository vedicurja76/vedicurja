'use client';
export default function HoroscopeLuxurySVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2FBE" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="hg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer celestial ring */}
      <circle cx="60" cy="60" r="52" stroke="url(#hg1)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.7" filter="url(#glow2)">
        <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="35s" repeatCount="indefinite" />
      </circle>
      {/* Inner orbit ring */}
      <ellipse cx="60" cy="60" rx="38" ry="16" stroke="url(#hg2)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="360 60 60" to="0 60 60" dur="25s" repeatCount="indefinite" />
      </ellipse>
      {/* Horizontal ring */}
      <ellipse cx="60" cy="60" rx="16" ry="38" stroke="url(#hg1)" strokeWidth="1" strokeDasharray="2 5" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="28s" repeatCount="indefinite" />
      </ellipse>
      {/* Star dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rx = 42, ry = 18;
        const rad = (angle * Math.PI) / 180;
        const cx = 60 + rx * Math.cos(rad);
        const cy = 60 + ry * Math.sin(rad);
        return (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="url(#hg1)" opacity="0.8" filter="url(#glow2)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
      {/* Central sun */}
      <circle cx="60" cy="60" r="12" fill="url(#hg1)" opacity="0.8" filter="url(#glow2)">
        <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x="60" y="65" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="serif">R</text>
    </svg>
  );
}
