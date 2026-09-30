'use client';
export default function ProblemStorySVG() {
  return (
    <svg viewBox="0 0 600 250" className="w-full h-auto max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#2c3e50"/><stop offset="100%" stopColor="#1a252f"/></linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="600" height="120" fill="url(#sky)" />
      {/* Sun */}
      <circle cx="500" cy="50" r="20" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" /></circle>

      {/* City buildings */}
      <rect x="50" y="60" width="40" height="60" fill="#34495e" />
      <rect x="55" y="70" width="8" height="8" fill="#f1c40f" opacity="0.7"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" /></rect>
      <rect x="70" y="70" width="8" height="8" fill="#f1c40f" opacity="0.4" />
      <rect x="110" y="40" width="35" height="80" fill="#2c3e50" />
      <rect x="115" y="50" width="8" height="8" fill="#f1c40f" opacity="0.5" />
      <rect x="160" y="70" width="45" height="50" fill="#3b5998" />

      {/* Road */}
      <rect x="0" y="150" width="600" height="8" fill="#555" />
      <line x1="0" y1="154" x2="600" y2="154" stroke="#888" strokeWidth="1" strokeDasharray="15 10" />

      {/* Car representing the traveler */}
      <g className="car">
        <rect x="20" y="135" width="60" height="15" rx="5" fill="#e74c3c" />
        <rect x="30" y="128" width="40" height="10" rx="3" fill="#c0392b" />
        <circle cx="35" cy="152" r="4" fill="#333" />
        <circle cx="65" cy="152" r="4" fill="#333" />
        {/* Exhaust */}
        <circle cx="15" cy="148" r="2" fill="#aaa" opacity="0.6"><animate attributeName="opacity" values="0;0.8;0" dur="0.5s" repeatCount="indefinite" /></circle>
      </g>

      {/* Frustration indicator – thought bubbles with cross marks */}
      <g transform="translate(200, 130)">
        <circle cx="0" cy="0" r="12" fill="none" stroke="#e74c3c" strokeWidth="2" className="shake" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#e74c3c" strokeWidth="2" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#e74c3c" strokeWidth="2" />
        <circle cx="15" cy="15" r="8" fill="none" stroke="#e74c3c" strokeWidth="1.5" opacity="0.6" className="shake" />
        <line x1="11" y1="11" x2="19" y2="19" stroke="#e74c3c" strokeWidth="1.5" />
        <line x1="19" y1="11" x2="11" y2="19" stroke="#e74c3c" strokeWidth="1.5" />
      </g>

      {/* Transition arrow */}
      <path d="M300 145 L380 145" stroke="#f1c40f" strokeWidth="3" markerEnd="url(#arrowhead)" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </path>
      <defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f1c40f" /></marker></defs>

      {/* Computer appearing as solution */}
      <g transform="translate(400, 90)" className="pop">
        <rect x="0" y="0" width="80" height="55" rx="4" fill="#1a252f" stroke="#f1c40f" strokeWidth="1.5" />
        <rect x="4" y="4" width="72" height="42" rx="2" fill="#0d1b2a" />
        {/* Screen content – peaceful face */}
        <circle cx="40" cy="22" r="10" fill="#2ecc71" opacity="0.8" />
        <circle cx="37" cy="20" r="1.5" fill="#fff" />
        <circle cx="43" cy="20" r="1.5" fill="#fff" />
        <path d="M35 26 Q40 30 45 26" stroke="#fff" strokeWidth="1.5" fill="none" />
        {/* Stand */}
        <rect x="30" y="55" width="20" height="8" rx="2" fill="#555" />
      </g>

      {/* Calming glow around computer */}
      <circle cx="440" cy="118" r="35" fill="none" stroke="#2ecc71" strokeWidth="2" opacity="0.4" className="pulse" />
    </svg>
  );
}
