'use client';
export default function SolutionConnectionSVG() {
  return (
    <svg viewBox="0 0 600 250" className="w-full h-auto max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a1a2e"/><stop offset="100%" stopColor="#16213e"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Background */}
      <rect width="600" height="250" fill="url(#bgGrad)" />

      {/* Desk */}
      <rect x="80" y="180" width="440" height="15" rx="4" fill="#3e2723" />
      <rect x="100" y="195" width="15" height="55" fill="#2b1b17" />
      <rect x="485" y="195" width="15" height="55" fill="#2b1b17" />

      {/* Computer monitor – left side */}
      <g transform="translate(120, 60)">
        <rect x="0" y="0" width="160" height="110" rx="10" fill="#1a252f" stroke="#f1c40f" strokeWidth="2" filter="url(#glow)" />
        <rect x="6" y="6" width="148" height="92" rx="6" fill="#0d1b2a" />
        {/* Screen content – face of AstroVastu Expert */}
        <circle cx="80" cy="45" r="25" fill="#d4a373" />
        <circle cx="72" cy="40" r="3" fill="#2c3e50" />
        <circle cx="88" cy="40" r="3" fill="#2c3e50" />
        <path d="M70 55 Q80 65 90 55" stroke="#2c3e50" strokeWidth="2" fill="none" />
        {/* Green dot indicating connection */}
        <circle cx="140" cy="15" r="3" fill="#2ecc71" className="signal" />
        {/* Webcam */}
        <rect x="70" y="-8" width="20" height="6" rx="3" fill="#444" />
      </g>

      {/* Person sitting at desk – left */}
      <g transform="translate(180, 100)">
        {/* Head */}
        <circle cx="0" cy="0" r="18" fill="#e0c097" />
        <circle cx="-6" cy="-4" r="2" fill="#2c3e50" />
        <circle cx="6" cy="-4" r="2" fill="#2c3e50" />
        <path d="M-5 6 Q0 12 5 6" stroke="#2c3e50" strokeWidth="1.5" fill="none" />
        {/* Body */}
        <rect x="-20" y="18" width="40" height="40" rx="8" fill="#3498db" />
        {/* Arms */}
        <rect x="-30" y="25" width="12" height="25" rx="4" fill="#2980b9" />
        <rect x="18" y="25" width="12" height="25" rx="4" fill="#2980b9" />
      </g>

      {/* Connection lines from computer to AstroVastu Expert on right */}
      <path d="M280 110 Q380 50 480 110" stroke="#f1c40f" strokeWidth="2" fill="none" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="380" cy="80" r="4" fill="#f1c40f" filter="url(#glow)">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="430" cy="95" r="3" fill="#f1c40f" filter="url(#glow)">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.3s" repeatCount="indefinite" />
      </circle>

      {/* AstroVastu Expert on right side */}
      <g transform="translate(480, 60)" className="float">
        {/* Head */}
        <circle cx="0" cy="0" r="30" fill="#d4a373" stroke="#f1c40f" strokeWidth="2" filter="url(#glow)" />
        {/* Turban / professional look */}
        <path d="M-28 -10 Q0 -35 28 -10" fill="#c0392b" stroke="#f1c40f" strokeWidth="1" />
        <rect x="-32" y="-12" width="64" height="4" rx="2" fill="#f1c40f" opacity="0.8" />
        {/* Eyes */}
        <circle cx="-10" cy="-3" r="3" fill="#2c3e50" />
        <circle cx="10" cy="-3" r="3" fill="#2c3e50" />
        {/* Smile */}
        <path d="M-8 10 Q0 18 8 10" stroke="#2c3e50" strokeWidth="2" fill="none" />
        {/* Body */}
        <rect x="-25" y="30" width="50" height="50" rx="10" fill="#e67e22" />
        {/* Professional collar */}
        <path d="M-15 30 L0 40 L15 30" fill="#fff" opacity="0.8" />
        {/* Arms */}
        <rect x="-40" y="40" width="16" height="30" rx="6" fill="#d35400" />
        <rect x="24" y="40" width="16" height="30" rx="6" fill="#d35400" />
      </g>

      {/* Happy client indicator – stars */}
      <g transform="translate(160, 50)">
        <polygon points="0,-8 2,-3 7,-3 3,1 5,6 0,3 -5,6 -3,1 -7,-3 -2,-3" fill="#f1c40f" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </polygon>
      </g>
    </svg>
  );
}
