'use client';
export default function GeopathicSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
      <defs>
        <linearGradient id="gg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5A2B"/><stop offset="100%" stopColor="#D4A373"/>
        </linearGradient>
        <filter id="gglow"><feGaussianBlur stdDeviation="2"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="10" y="10" width="60" height="60" rx="5" stroke="url(#gg1)" strokeWidth="1.5" fill="none" filter="url(#gglow)">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
      </rect>
      <line x1="10" y1="40" x2="70" y2="40" stroke="url(#gg1)" strokeWidth="0.8" opacity="0.5"/>
      <line x1="40" y1="10" x2="40" y2="70" stroke="url(#gg1)" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="40" cy="40" r="12" stroke="url(#gg1)" strokeWidth="1.2" fill="none"/>
      <circle cx="40" cy="40" r="4" fill="url(#gg1)" filter="url(#gglow)">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
      </circle>
      {[0,90,180,270].map((angle,i)=>(
        <line key={i} x1="40" y1="40" x2={40+28*Math.cos(angle*Math.PI/180)} y2={40+28*Math.sin(angle*Math.PI/180)} stroke="url(#gg1)" strokeWidth="0.6" opacity="0.4"/>
      ))}
    </svg>
  );
}
