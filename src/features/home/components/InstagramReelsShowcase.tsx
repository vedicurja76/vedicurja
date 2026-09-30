'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBi } from '@/lib/i18n/Bilingual';

// Reel data – URL, view count (from your provided blocks)
// Add/remove entries as needed. The embed will show likes/comments automatically.
const REELS = [
  { url: 'https://www.instagram.com/reel/DW_G4gJEl55/', views: '1.2M' },
  { url: 'https://www.instagram.com/reel/DUfALpvEkNz/', views: '2.4M' },
  { url: 'https://www.instagram.com/reel/DSmlHREElWe/', views: '1.3M' },
  { url: 'https://www.instagram.com/reel/DSje5kqEmBO/', views: '1.0M' },
  { url: 'https://www.instagram.com/reel/DSO8k8gkud8/', views: '1.4M' },
  { url: 'https://www.instagram.com/reel/DSH7WFDkh4i/', views: '2.0M' },
];

export default function InstagramReelsShowcase() {
  const bi = useBi();
  useEffect(() => {
    // Load Instagram embed script once
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-vastu-parchment via-[var(--color-bg-primary)] to-vastu-stone/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.3em] text-sm font-semibold">
            {bi('Viral Wisdom', 'वायरल ज्ञान')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            {bi('Watch AstroVastu Expert in Action', 'एस्ट्रोवास्तु एक्सपर्ट को कार्यरत देखें')}
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            {bi('Real remedies, rituals and insights – seen by millions', 'वास्तविक उपचार, अनुष्ठान और अंतर्दृष्टि – लाखों ने देखी')}
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {REELS.map((reel, idx) => (
            <motion.div
              key={reel.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-prakash-gold/20 hover:shadow-xl transition-shadow"
            >
              {/* View count badge */}
              <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                {reel.views} {bi('views', 'दर्शक')}
              </div>

              {/* Instagram embed */}
              <div className="aspect-[9/16] w-full bg-gray-100">
                <blockquote
                  className="instagram-media w-full h-full"
                  data-instgrm-captioned
                  data-instgrm-permalink={reel.url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    margin: 0,
                    maxWidth: '100%',
                    padding: 0,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a href={reel.url} target="_blank" rel="noopener noreferrer">
                      View on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/vedicurja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-prakash-gold rounded-full text-nidra-indigo font-medium hover:bg-prakash-gold/10 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163z"/>
            </svg>
            {bi('Follow', 'फॉलो करें')} @vedicurja
          </a>
        </div>
      </div>
    </section>
  );
}
